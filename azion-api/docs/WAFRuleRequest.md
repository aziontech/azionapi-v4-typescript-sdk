# WAFRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleId** | Pointer to [**RuleIdEnum**](RuleIdEnum.md) | 0 - All Rules&lt;br&gt; 1 - Validation of protocol compliance: weird request, unable to parse&lt;br&gt; 2 - Request too big, stored on disk and not parsed&lt;br&gt; 10 - Validation of protocol compliance: invalid HEX encoding (null bytes)&lt;br&gt; 11 - Validation of protocol compliance: missing or unknown Content-Type header in a POST (this rule applies only to Request Body match zone)&lt;br&gt; 12 - Validation of protocol compliance: invalid formatted URL&lt;br&gt; 13 - Validation of protocol compliance: invalid POST format&lt;br&gt; 14 - Validation of protocol compliance: invalid POST boundary&lt;br&gt; 15 - Validation of protocol compliance: invalid JSON&lt;br&gt; 16 - Validation of protocol compliance: POST with no body&lt;br&gt; 17 - Possible SQL Injection attack: validation with libinjection_sql&lt;br&gt; 18 - Possible XSS attack: validation with libinjection_xss&lt;br&gt; 1000 - Possible SQL Injection attack: SQL keywords found in Body, Path, Query String or Cookies&lt;br&gt; 1001 - Possible SQL Injection or XSS attack: double quote (\&quot;) found in Body, Path, Query String or Cookies&lt;br&gt; 1002 - Possible SQL Injection attack: possible hex encoding (0x) found in Body, Path, Query String or Cookies&lt;br&gt; 1003 - Possible SQL Injection attack: MySQL comment (/_*) found in Body, Path, Query String or Cookies&lt;br&gt; 1004 - Possible SQL Injection attack: MySQL comment (*​/) found in Body, Path, Query String or Cookies&lt;br&gt; 1005 - Possible SQL Injection attack: MySQL keyword (|) found in Body, Path, Query String or Cookies&lt;br&gt; 1006 - Possible SQL Injection attack: MySQL keyword (&amp;&amp;) found in Body, Path, Query String or Cookies&lt;br&gt; 1007 - Possible SQL Injection attack: MySQL comment (--) found in Body, Path, Query String or Cookies&lt;br&gt; 1008 - Possible SQL Injection or XSS attack: semicolon (;) found in Body, Path or Query String&lt;br&gt; 1009 - Possible SQL Injection attack: equal sign (&#x3D;) found in Body or Query String&lt;br&gt; 1010 - Possible SQL Injection or XSS attack: open parenthesis [(] found in Body, Path, Query String or Cookies&lt;br&gt; 1011 - Possible SQL Injection or XSS attack: close parenthesis [)] found in Body, Path, Query String or Cookies&lt;br&gt; 1013 - Possible SQL Injection or XSS attack: apostrophe (&#39;) found in Body, Path, Query String or Cookies&lt;br&gt; 1015 - Possible SQL Injection attack: comma (,) found in Body, Path, Query String or Cookies&lt;br&gt; 1016 - Possible SQL Injection attack: MySQL comment (#) found in Body, Path, Query String or Cookies&lt;br&gt; 1017 - Possible SQL Injection attack: double at sign (@@) found in Body, Path, Query String or Cookies&lt;br&gt; 1100 - Possible RFI attack: scheme \&quot;http://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1101 - Possible RFI attack: scheme \&quot;https://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1102 - Possible RFI attack: scheme \&quot;ftp://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1103 - Possible RFI attack: scheme \&quot;php://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1104 - Possible RFI attack: scheme \&quot;sftp://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1105 - Possible RFI attack: scheme \&quot;zlib://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1106 - Possible RFI attack: scheme \&quot;data://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1107 - Possible RFI attack: scheme \&quot;glob://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1108 - Possible RFI attack: scheme \&quot;phar://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1109 - Possible RFI attack: scheme \&quot;file://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1110 - Possible RFI attack: scheme \&quot;gopher://\&quot; found in Body, Query String or Cookies&lt;br&gt; 1198 - Possible RCE attack: validation with log4j (Log4Shell) in HEADERS_VAR&lt;br&gt; 1199 - Possible RCE attack: validation with log4j (Log4Shell) in Body, Path, Query String, Headers or Cookies&lt;br&gt; 1200 - Possible Directory Traversal attack: double dot (..) found in Body, Path, Query String or Cookies&lt;br&gt; 1202 - Possible Directory Traversal attack: obvious probe (/etc/passwd) found in Body, Path, Query String or Cookies&lt;br&gt; 1203 - Possible Directory Traversal attack: obvious windows path (c:\\) found in Body, Path, Query String or Cookies&lt;br&gt; 1204 - Possible Directory Traversal attack: obvious probe (cmd.exe) found in Body, Path, Query String or Cookies&lt;br&gt; 1205 - Possible Directory Traversal attack: backslash (\\) found in Body, Path, Query String or Cookies&lt;br&gt; 1206 - Possible Directory Traversal attack: slash (/) found in Body, Query String or Cookies&lt;br&gt; 1207 - Possible Directory Traversal attack: obvious path probe (/..;/) found in Body, Query String or Cookies&lt;br&gt; 1208 - Possible Directory Traversal attack: obvious path probe (/.;/) found in Body, Query String or Cookies&lt;br&gt; 1209 - Possible Directory Traversal attack: obvious path probe (/.%2e/) found in Body, Query String or Cookies&lt;br&gt; 1210 - Possible Directory Traversal attack: obvious path probe (/%2e./) found in Body, Query String or Cookies&lt;br&gt; 1302 - Possible XSS attack: html open tag (&lt;) found in Body, Path, Query String or Cookies&lt;br&gt; 1303 - Possible XSS attack: html close tag (&gt;) found in Body, Path, Query String or Cookies&lt;br&gt; 1310 - Possible XSS attack: open square bracket ([) found in Body, Path, Query String or Cookies&lt;br&gt; 1311 - Possible XSS attack: close square bracket (]) found in Body, Path, Query String or Cookies&lt;br&gt; 1312 - Possible XSS attack: tilde character (~) found in Body, Path, Query String or Cookies&lt;br&gt; 1314 - Possible XSS attack: back quote ( &#x60;) found in Body, Path, Query String or Cookies&lt;br&gt; 1315 - Possible XSS attack: double encoding (%[2|3]) found in Body, Path, Query String or Cookies&lt;br&gt; 1400 - Possible trick to evade protection: UTF7/8 encoding (&amp;#) found in Body, Path, Query String or Cookies&lt;br&gt; 1401 - Possible trick to evade protection: MS encoding (%U) found in Body, Path, Query String or Cookies&lt;br&gt; 1402 - Possible trick to evade protection: encoded chars (%20-%3F) found in Body, Query String or Cookies&lt;br&gt; 1500 - Possible File Upload attempt: asp/php (.ph, .asp or .ht) found in filename in a multipart POST containing a file&lt;br&gt; 2001 - Possible CVE-2022-22965 attack: Tomcat Pipeline Context tampering  * &#x60;0&#x60; - All Rules * &#x60;1&#x60; - Validation of protocol compliance: weird request, unable to parse * &#x60;2&#x60; - Request too big, stored on disk and not parsed * &#x60;10&#x60; - Validation of protocol compliance: invalid HEX encoding (null bytes) * &#x60;11&#x60; - Validation of protocol compliance: missing or unknown Content-Type header in a POST (this rule applies only to Request Body match zone) * &#x60;12&#x60; - Validation of protocol compliance: invalid formatted URL * &#x60;13&#x60; - Validation of protocol compliance: invalid POST format * &#x60;14&#x60; - Validation of protocol compliance: invalid POST boundary * &#x60;15&#x60; - Validation of protocol compliance: invalid JSON * &#x60;16&#x60; - Validation of protocol compliance: POST with no body * &#x60;17&#x60; - Possible SQL Injection attack: validation with libinjection_sql * &#x60;18&#x60; - Possible XSS attack: validation with libinjection_xss * &#x60;1000&#x60; - Possible SQL Injection attack: SQL keywords found in Body, Path, Query String or Cookies * &#x60;1001&#x60; - Possible SQL Injection or XSS attack: double quote (\&quot;) found in Body, Path, Query String or Cookies * &#x60;1002&#x60; - Possible SQL Injection attack: possible hex encoding (0x) found in Body, Path, Query String or Cookies * &#x60;1003&#x60; - Possible SQL Injection attack: MySQL comment (/_*) found in Body, Path, Query String or Cookies * &#x60;1004&#x60; - Possible SQL Injection attack: MySQL comment (*​/) found in Body, Path, Query String or Cookies * &#x60;1005&#x60; - Possible SQL Injection attack: MySQL keyword (|) found in Body, Path, Query String or Cookies * &#x60;1006&#x60; - Possible SQL Injection attack: MySQL keyword (&amp;&amp;) found in Body, Path, Query String or Cookies * &#x60;1007&#x60; - Possible SQL Injection attack: MySQL comment (--) found in Body, Path, Query String or Cookies * &#x60;1008&#x60; - Possible SQL Injection or XSS attack: semicolon (;) found in Body, Path or Query String * &#x60;1009&#x60; - Possible SQL Injection attack: equal sign (&#x3D;) found in Body or Query String * &#x60;1010&#x60; - Possible SQL Injection or XSS attack: open parenthesis [(] found in Body, Path, Query String or Cookies * &#x60;1011&#x60; - Possible SQL Injection or XSS attack: close parenthesis [)] found in Body, Path, Query String or Cookies * &#x60;1013&#x60; - Possible SQL Injection or XSS attack: apostrophe (&#39;) found in Body, Path, Query String or Cookies * &#x60;1015&#x60; - Possible SQL Injection attack: comma (,) found in Body, Path, Query String or Cookies * &#x60;1016&#x60; - Possible SQL Injection attack: MySQL comment (#) found in Body, Path, Query String or Cookies * &#x60;1017&#x60; - Possible SQL Injection attack: double at sign (@@) found in Body, Path, Query String or Cookies * &#x60;1100&#x60; - Possible RFI attack: scheme \&quot;http://\&quot; found in Body, Query String or Cookies * &#x60;1101&#x60; - Possible RFI attack: scheme \&quot;https://\&quot; found in Body, Query String or Cookies * &#x60;1102&#x60; - Possible RFI attack: scheme \&quot;ftp://\&quot; found in Body, Query String or Cookies * &#x60;1103&#x60; - Possible RFI attack: scheme \&quot;php://\&quot; found in Body, Query String or Cookies * &#x60;1104&#x60; - Possible RFI attack: scheme \&quot;sftp://\&quot; found in Body, Query String or Cookies * &#x60;1105&#x60; - Possible RFI attack: scheme \&quot;zlib://\&quot; found in Body, Query String or Cookies * &#x60;1106&#x60; - Possible RFI attack: scheme \&quot;data://\&quot; found in Body, Query String or Cookies * &#x60;1107&#x60; - Possible RFI attack: scheme \&quot;glob://\&quot; found in Body, Query String or Cookies * &#x60;1108&#x60; - Possible RFI attack: scheme \&quot;phar://\&quot; found in Body, Query String or Cookies * &#x60;1109&#x60; - Possible RFI attack: scheme \&quot;file://\&quot; found in Body, Query String or Cookies * &#x60;1110&#x60; - Possible RFI attack: scheme \&quot;gopher://\&quot; found in Body, Query String or Cookies * &#x60;1198&#x60; - Possible RCE attack: validation with log4j (Log4Shell) in HEADERS_VAR * &#x60;1199&#x60; - Possible RCE attack: validation with log4j (Log4Shell) in Body, Path, Query String, Headers or Cookies * &#x60;1200&#x60; - Possible Directory Traversal attack: double dot (..) found in Body, Path, Query String or Cookies * &#x60;1202&#x60; - Possible Directory Traversal attack: obvious probe (/etc/passwd) found in Body, Path, Query String or Cookies * &#x60;1203&#x60; - Possible Directory Traversal attack: obvious windows path (c:\\) found in Body, Path, Query String or Cookies * &#x60;1204&#x60; - Possible Directory Traversal attack: obvious probe (cmd.exe) found in Body, Path, Query String or Cookies * &#x60;1205&#x60; - Possible Directory Traversal attack: backslash (\\) found in Body, Path, Query String or Cookies * &#x60;1206&#x60; - Possible Directory Traversal attack: slash (/) found in Body, Query String or Cookies * &#x60;1207&#x60; - Possible Directory Traversal attack: obvious path probe (/..;/) found in Body, Query String or Cookies * &#x60;1208&#x60; - Possible Directory Traversal attack: obvious path probe (/.;/) found in Body, Query String or Cookies * &#x60;1209&#x60; - Possible Directory Traversal attack: obvious path probe (/.%2e/) found in Body, Query String or Cookies * &#x60;1210&#x60; - Possible Directory Traversal attack: obvious path probe (/%2e./) found in Body, Query String or Cookies * &#x60;1302&#x60; - Possible XSS attack: html open tag (&lt;) found in Body, Path, Query String or Cookies * &#x60;1303&#x60; - Possible XSS attack: html close tag (&gt;) found in Body, Path, Query String or Cookies * &#x60;1310&#x60; - Possible XSS attack: open square bracket ([) found in Body, Path, Query String or Cookies * &#x60;1311&#x60; - Possible XSS attack: close square bracket (]) found in Body, Path, Query String or Cookies * &#x60;1312&#x60; - Possible XSS attack: tilde character (~) found in Body, Path, Query String or Cookies * &#x60;1314&#x60; - Possible XSS attack: back quote ( &#x60;) found in Body, Path, Query String or Cookies * &#x60;1315&#x60; - Possible XSS attack: double encoding (%[2|3]) found in Body, Path, Query String or Cookies * &#x60;1400&#x60; - Possible trick to evade protection: UTF7/8 encoding (&amp;#) found in Body, Path, Query String or Cookies * &#x60;1401&#x60; - Possible trick to evade protection: MS encoding (%U) found in Body, Path, Query String or Cookies * &#x60;1402&#x60; - Possible trick to evade protection: encoded chars (%20-%3F) found in Body, Query String or Cookies * &#x60;1500&#x60; - Possible File Upload attempt: asp/php (.ph, .asp or .ht) found in filename in a multipart POST containing a file * &#x60;2001&#x60; - Possible CVE-2022-22965 attack: Tomcat Pipeline Context tampering | [optional] [default to AllRules]
**Name** | **string** |  | 
**Path** | Pointer to **NullableString** |  | [optional] 
**Conditions** | [**[]WAFExceptionConditionRequest**](WAFExceptionConditionRequest.md) |  | 
**Operator** | Pointer to [**WAFRuleOperatorEnum**](WAFRuleOperatorEnum.md) |  | [optional] [default to CONTAINS]
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewWAFRuleRequest

`func NewWAFRuleRequest(name string, conditions []WAFExceptionConditionRequest, ) *WAFRuleRequest`

NewWAFRuleRequest instantiates a new WAFRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFRuleRequestWithDefaults

`func NewWAFRuleRequestWithDefaults() *WAFRuleRequest`

NewWAFRuleRequestWithDefaults instantiates a new WAFRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRuleId

`func (o *WAFRuleRequest) GetRuleId() RuleIdEnum`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *WAFRuleRequest) GetRuleIdOk() (*RuleIdEnum, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *WAFRuleRequest) SetRuleId(v RuleIdEnum)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *WAFRuleRequest) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetName

`func (o *WAFRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WAFRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WAFRuleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetPath

`func (o *WAFRuleRequest) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *WAFRuleRequest) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *WAFRuleRequest) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *WAFRuleRequest) HasPath() bool`

HasPath returns a boolean if a field has been set.

### SetPathNil

`func (o *WAFRuleRequest) SetPathNil(b bool)`

 SetPathNil sets the value for Path to be an explicit nil

### UnsetPath
`func (o *WAFRuleRequest) UnsetPath()`

UnsetPath ensures that no value is present for Path, not even an explicit nil
### GetConditions

`func (o *WAFRuleRequest) GetConditions() []WAFExceptionConditionRequest`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *WAFRuleRequest) GetConditionsOk() (*[]WAFExceptionConditionRequest, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *WAFRuleRequest) SetConditions(v []WAFExceptionConditionRequest)`

SetConditions sets Conditions field to given value.


### GetOperator

`func (o *WAFRuleRequest) GetOperator() WAFRuleOperatorEnum`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *WAFRuleRequest) GetOperatorOk() (*WAFRuleOperatorEnum, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *WAFRuleRequest) SetOperator(v WAFRuleOperatorEnum)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *WAFRuleRequest) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetActive

`func (o *WAFRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *WAFRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *WAFRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *WAFRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


