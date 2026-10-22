# OpenAPI Generator Notes

Known issues when generating SDKs from `azion-api.yaml`.

## TypeScript generation fails on the DNS zone `domain` pattern

### Symptom

```sh
openapi-generator-cli generate -i azion-api.yaml -g typescript -o ./azion-api \
  --additional-properties=npmName=azion-api-v4-sdk,disallowAdditionalPropertiesIfNotPresent=false
```

fails with:

```
Exception: Before caret only new line is allowed!
'(?=^.{4,'
    ^
  at org.openapitools.codegen.DefaultGenerator.processOperation(DefaultGenerator.java:1638)
  ...
Caused by: com.github.curiousoddman.rgxgen.parsing.dflt.PatternDoesNotMatchAnythingException: Before caret only new line is allowed!
  ...
  at com.github.curiousoddman.rgxgen.RgxGen.<init>(RgxGen.java:71)
  at org.openapitools.codegen.languages.TypeScriptClientCodegen.toExampleValueRecursive(TypeScriptClientCodegen.java:808)
  ...
  at org.openapitools.codegen.languages.TypeScriptClientCodegen.setParameterExampleValue(TypeScriptClientCodegen.java:1104)
```

### Root cause

The `domain` property of the `Zone` and `ZoneRequest` schemas used this pattern:

```
(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)
```

The `typescript` generator builds an example value for each request parameter for the
generated docs. For a string that has a `pattern`, it calls
[RgxGen](https://github.com/curious-odd-man/RgxGen) to produce a random string that matches
the regex. RgxGen has its own regex parser, which is stricter than Java's and rejects a `^`
that isn't at the very start of the expression. Here the `^` is inside a lookahead and a
group.

Java and Go both accept the regex, so it isn't invalid. Only RgxGen rejects it.

### Fix

Move the anchor to the front. The new regex matches exactly the same strings:

```
^(?=.{4,253}$)((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$
```

Applied in `azion-api.yaml` to `Zone.domain` and `ZoneRequest.domain`. With this change,
generation completes: 88 API files and 739 models, including `DNSZonesApi.ts`.

> **Note:** If `azion-api.yaml` is copied from another source, a fresh copy will bring the
> error back. Make the same change in the API's source definition, or re-apply it after each
> update.

### Why the Go generator doesn't fail

The `go` generator never generates examples from regexes. Its example values are fixed
placeholders, such as `"Name_example"`, and it only copies `pattern` into the docs or code as
text. RgxGen never parses the regex, so the misplaced `^` never causes an error.

### Spotting similar issues

To find other patterns that RgxGen may reject, look for `^` anywhere except the start of a
`pattern`:

```sh
grep -nE "pattern: .+\^" azion-api.yaml
```

Matches where the `^` is inside a character class are fine. For example, `[^/]` is a
negation and `[...%^&...]` is a literal `^`. RgxGen accepts both. With the fix applied, every
match in the current spec is of this kind.

The DNS record patterns use lookarounds (`(?!-)`, `(?<![-_])`) but start with `^`, and
TypeScript generation works with them.
