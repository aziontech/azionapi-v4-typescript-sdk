# .ApplicationsRequestRulesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationRequestRule**](ApplicationsRequestRulesApi.md#createApplicationRequestRule) | **POST** /workspace/applications/{application_id}/request_rules | Create an Application Request Rule
[**createApplicationRequestRule2**](ApplicationsRequestRulesApi.md#createApplicationRequestRule2) | **POST** /workspace/applications/{application_id}/versions/{version_id}/request_rules | Create an Application Request Rule
[**deleteApplicationRequestRule**](ApplicationsRequestRulesApi.md#deleteApplicationRequestRule) | **DELETE** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Delete an Application Request Rule
[**deleteApplicationRequestRule2**](ApplicationsRequestRulesApi.md#deleteApplicationRequestRule2) | **DELETE** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Delete an Application Request Rule
[**listApplicationRequestRules**](ApplicationsRequestRulesApi.md#listApplicationRequestRules) | **GET** /workspace/applications/{application_id}/request_rules | List Application Request Rules
[**listApplicationRequestRules2**](ApplicationsRequestRulesApi.md#listApplicationRequestRules2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/request_rules | List Application Request Rules
[**partialUpdateApplicationRequestRule**](ApplicationsRequestRulesApi.md#partialUpdateApplicationRequestRule) | **PATCH** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Partially update an Application Request Rule
[**partialUpdateApplicationRequestRule2**](ApplicationsRequestRulesApi.md#partialUpdateApplicationRequestRule2) | **PATCH** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Partially update an Application Request Rule
[**retrieveApplicationRequestRule**](ApplicationsRequestRulesApi.md#retrieveApplicationRequestRule) | **GET** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Retrieve details of an Application Request Rule
[**retrieveApplicationRequestRule2**](ApplicationsRequestRulesApi.md#retrieveApplicationRequestRule2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Retrieve details of an Application Request Rule
[**updateApplicationRequestRule**](ApplicationsRequestRulesApi.md#updateApplicationRequestRule) | **PUT** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Update an Application Request Rule
[**updateApplicationRequestRule2**](ApplicationsRequestRulesApi.md#updateApplicationRequestRule2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Update an Application Request Rule
[**updateApplicationRequestRulesOrder**](ApplicationsRequestRulesApi.md#updateApplicationRequestRulesOrder) | **PUT** /workspace/applications/{application_id}/request_rules/order | Ordering Application Request Rules
[**updateApplicationRequestRulesOrder2**](ApplicationsRequestRulesApi.md#updateApplicationRequestRulesOrder2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/request_rules/order | Ordering Application Request Rules


# **createApplicationRequestRule**
> RequestPhaseRuleResponse createApplicationRequestRule(requestPhaseRuleRequest)

Create a new Rule for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiCreateApplicationRequestRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiCreateApplicationRequestRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  requestPhaseRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createApplicationRequestRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPhaseRuleRequest** | **RequestPhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application request rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplicationRequestRule2**
> RequestPhaseRuleResponse createApplicationRequestRule2(requestPhaseRuleRequest)

Create a new Rule for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiCreateApplicationRequestRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiCreateApplicationRequestRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  requestPhaseRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createApplicationRequestRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPhaseRuleRequest** | **RequestPhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application request rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationRequestRule**
> DeleteResponse deleteApplicationRequestRule()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiDeleteApplicationRequestRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiDeleteApplicationRequestRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
};

const data = await apiInstance.deleteApplicationRequestRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationRequestRule2**
> DeleteResponse deleteApplicationRequestRule2()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiDeleteApplicationRequestRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiDeleteApplicationRequestRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteApplicationRequestRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationRequestRules**
> PaginatedRequestPhaseRuleList listApplicationRequestRules()

List all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiListApplicationRequestRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiListApplicationRequestRulesRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // Filter by description (case-insensitive, partial match). (optional)
  description: "description_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Filter by order (greater than or equal). (optional)
  orderGte: 1,
    // Filter by order (less than or equal). (optional)
  orderLte: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listApplicationRequestRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **orderGte** | [**number**] | Filter by order (greater than or equal). | (optional) defaults to undefined
 **orderLte** | [**number**] | Filter by order (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRequestPhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application request rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationRequestRules2**
> PaginatedRequestPhaseRuleList listApplicationRequestRules2()

List all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiListApplicationRequestRules2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiListApplicationRequestRules2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Filter by description (case-insensitive, partial match). (optional)
  description: "description_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Filter by order (greater than or equal). (optional)
  orderGte: 1,
    // Filter by order (less than or equal). (optional)
  orderLte: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listApplicationRequestRules2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **orderGte** | [**number**] | Filter by order (greater than or equal). | (optional) defaults to undefined
 **orderLte** | [**number**] | Filter by order (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRequestPhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application request rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationRequestRule**
> RequestPhaseRuleResponse partialUpdateApplicationRequestRule()

Update one or more fields of an existing Application Rule  without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiPartialUpdateApplicationRequestRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
  
  patchedRequestPhaseRule: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateApplicationRequestRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedRequestPhaseRule** | **PatchedRequestPhaseRule**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationRequestRule2**
> RequestPhaseRuleResponse partialUpdateApplicationRequestRule2()

Update one or more fields of an existing Application Rule  without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiPartialUpdateApplicationRequestRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiPartialUpdateApplicationRequestRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedRequestPhaseRule: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateApplicationRequestRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedRequestPhaseRule** | **PatchedRequestPhaseRule**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationRequestRule**
> ResponsePhaseRuleResponse retrieveApplicationRequestRule()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiRetrieveApplicationRequestRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiRetrieveApplicationRequestRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationRequestRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationRequestRule2**
> ResponsePhaseRuleResponse retrieveApplicationRequestRule2()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiRetrieveApplicationRequestRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiRetrieveApplicationRequestRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationRequestRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationRequestRule**
> RequestPhaseRuleResponse updateApplicationRequestRule(requestPhaseRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiUpdateApplicationRequestRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiUpdateApplicationRequestRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
  
  requestPhaseRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateApplicationRequestRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPhaseRuleRequest** | **RequestPhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationRequestRule2**
> RequestPhaseRuleResponse updateApplicationRequestRule2(requestPhaseRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiUpdateApplicationRequestRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiUpdateApplicationRequestRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  requestPhaseRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(arg_<name>)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateApplicationRequestRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPhaseRuleRequest** | **RequestPhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**RequestPhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationRequestRulesOrder**
> PaginatedRequestPhaseRuleList updateApplicationRequestRulesOrder(applicationRequestPhaseRuleEngineOrder)

Reorder all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrderRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  applicationRequestPhaseRuleEngineOrder: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.updateApplicationRequestRulesOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequestPhaseRuleEngineOrder** | **ApplicationRequestPhaseRuleEngineOrder**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRequestPhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationRequestRulesOrder2**
> PaginatedRequestPhaseRuleList updateApplicationRequestRulesOrder2(applicationRequestPhaseRuleEngineOrder)

Reorder all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsRequestRulesApi } from '';
import type { ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrder2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsRequestRulesApi(configuration);

const request: ApplicationsRequestRulesApiUpdateApplicationRequestRulesOrder2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  applicationRequestPhaseRuleEngineOrder: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.updateApplicationRequestRulesOrder2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequestPhaseRuleEngineOrder** | **ApplicationRequestPhaseRuleEngineOrder**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRequestPhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application request rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


