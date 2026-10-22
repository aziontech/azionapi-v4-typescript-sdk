# Azion API v4 TypeScript SDK

TypeScript client for the [Azion API v4](https://api.azion.com/), generated with
[OpenAPI Generator](https://openapi-generator.tech/docs/generators/typescript/) from the
`azion-api.yaml` spec in this repository.

The generated SDK lives in [`azion-api/`](./azion-api) and is published to npm as
`@aziontech/azion-api-v4-sdk`.

## Repository layout

| Path | Description |
| --- | --- |
| `azion-api.yaml` | OpenAPI spec for the Azion API v4 (source of truth for the SDK) |
| `azion-api/` | Generated TypeScript SDK — do not edit by hand |
| `templates/typescript/` | Overrides for the generator's built-in templates |
| `openapitools.json` | Pins the OpenAPI Generator version used by `openapi-generator-cli` |
| `OPENAPI_GENERATOR_NOTES.md` | Known issues when generating from `azion-api.yaml` |

## Prerequisites

- Node.js 22 or later
- Java 11 or later (OpenAPI Generator runs on the JVM)
- OpenAPI Generator CLI:

  ```sh
  npm install -g @openapitools/openapi-generator-cli
  ```

  The CLI reads `openapitools.json` and downloads the generator version pinned there
  (currently `7.26.0`), so everyone generates with the same version.

## Generating the SDK

From the repository root, run:

```sh
openapi-generator-cli generate -i azion-api.yaml -g typescript -o ./azion-api \
  -t templates/typescript \
  --git-user-id aziontech --git-repo-id azionapi-v4-typescript-sdk \
  --additional-properties=npmName=@aziontech/azion-api-v4-sdk,npmVersion=0.1.0,licenseName=MIT,disallowAdditionalPropertiesIfNotPresent=false
```

What each option does:

| Option | Purpose |
| --- | --- |
| `-i azion-api.yaml` | Input OpenAPI spec |
| `-g typescript` | Use the `typescript` generator (fetch-based client) |
| `-o ./azion-api` | Output directory for the generated SDK |
| `-t templates/typescript` | Template overrides (see [Custom templates](#custom-templates)) |
| `--git-user-id` / `--git-repo-id` | Builds the `repository.url` in `package.json` (`https://github.com/aziontech/azionapi-v4-typescript-sdk.git`) |
| `npmName=@aziontech/azion-api-v4-sdk` | Package `name` in the generated `package.json` |
| `npmVersion=0.1.0` | Package `version` in the generated `package.json` — set it to the version you are releasing |
| `licenseName=MIT` | `license` in the generated `package.json` (matches [LICENSE](./LICENSE)) |
| `disallowAdditionalPropertiesIfNotPresent=false` | Allows extra properties on objects whose schema does not declare `additionalProperties`, so new fields returned by the API don't break the client |

The generator overwrites the files it produces. Files listed in
`azion-api/.openapi-generator-ignore` are left untouched.

### Custom templates

`templates/typescript/` overrides templates from the `typescript` generator. Any file
placed there replaces the built-in template of the same name; all other templates are
used as shipped.

| Template | Why it is overridden |
| --- | --- |
| `package.mustache` | Sets `"author": "aziontech"` — the built-in template hardcodes `OpenAPI-Generator Contributors` and has no option to change it |
| `auth/auth.mustache` | Names each auth class after the security scheme exactly as written. The spec defines both `TokenAuth` and `tokenAuth`; the built-in template PascalCases both into `TokenAuthAuthentication`, a duplicate class that fails the build |

The overrides are copies of the templates from generator version `7.26.0`. When you bump
the version in `openapitools.json`, refresh them from the new release so they pick up
upstream changes, then re-apply the edits:

```sh
openapi-generator-cli author template -g typescript -o /tmp/ts-templates
cp /tmp/ts-templates/package.mustache templates/typescript/package.mustache
cp /tmp/ts-templates/auth/auth.mustache templates/typescript/auth/auth.mustache
# package.mustache: set "author" to "aziontech"
sed -i '' 's#{{\#lambda.pascalcase}}{{name}}{{/lambda.pascalcase}}Authentication#{{name}}Authentication#g' \
  templates/typescript/auth/auth.mustache
```

### Updating the spec

1. Replace `azion-api.yaml` with the new spec.
2. Check it for regex patterns the generator can't handle (see
   [OPENAPI_GENERATOR_NOTES.md](./OPENAPI_GENERATOR_NOTES.md)):

   ```sh
   grep -nE "pattern: .+\^" azion-api.yaml
   ```

3. Bump `npmVersion` and regenerate with the command above.
4. Review the diff in `azion-api/`, including files that were removed or added in
   `azion-api/.openapi-generator/FILES`.

## Building and testing locally

```sh
cd azion-api
npm install
npm run build
```

The compiled output is written to `azion-api/dist/`. To try the package in another project
before publishing:

```sh
cd azion-api
npm pack
# then, in the other project:
npm install /path/to/aziontech-azion-api-v4-sdk-0.1.0.tgz
```

## Usage

```ts
import { createConfiguration, AccountsInfoApi } from "@aziontech/azion-api-v4-sdk";

const config = createConfiguration({
  authMethods: {
    TokenAuth: `Token ${process.env.AZION_TOKEN}`,
  },
});

const accounts = new AccountsInfoApi(config);
const info = await accounts.retrieveAccountInfoDetails(12345);
```

See [`azion-api/README.md`](./azion-api/README.md) and the per-API docs in
[`azion-api/docs/`](./azion-api/docs) for the available APIs and models.

## Troubleshooting

- **`Before caret only new line is allowed!`** — a `pattern` in the spec has a `^` that
  isn't at the start of the regex. See
  [OPENAPI_GENERATOR_NOTES.md](./OPENAPI_GENERATOR_NOTES.md) for the cause and fix.

## License

See [LICENSE](./LICENSE).
