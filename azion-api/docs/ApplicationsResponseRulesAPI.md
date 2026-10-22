# .ApplicationsResponseRulesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationResponseRule**](ApplicationsResponseRulesApi.md#createApplicationResponseRule) | **POST** /workspace/applications/{application_id}/response_rules | Create an Application Response Rule
[**createApplicationResponseRule2**](ApplicationsResponseRulesApi.md#createApplicationResponseRule2) | **POST** /workspace/applications/{application_id}/versions/{version_id}/response_rules | Create an Application Response Rule
[**deleteApplicationResponseRule**](ApplicationsResponseRulesApi.md#deleteApplicationResponseRule) | **DELETE** /workspace/applications/{application_id}/response_rules/{response_rule_id} | Delete an Application Response Rule
[**deleteApplicationResponseRule2**](ApplicationsResponseRulesApi.md#deleteApplicationResponseRule2) | **DELETE** /workspace/applications/{application_id}/versions/{version_id}/response_rules/{response_rule_id} | Delete an Application Response Rule
[**listApplicationResponseRules**](ApplicationsResponseRulesApi.md#listApplicationResponseRules) | **GET** /workspace/applications/{application_id}/response_rules | List Application Response Rules
[**listApplicationResponseRules2**](ApplicationsResponseRulesApi.md#listApplicationResponseRules2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/response_rules | List Application Response Rules
[**partialUpdateApplicationResponseRule**](ApplicationsResponseRulesApi.md#partialUpdateApplicationResponseRule) | **PATCH** /workspace/applications/{application_id}/response_rules/{response_rule_id} | Partially update an Application Response Rule
[**partialUpdateApplicationResponseRule2**](ApplicationsResponseRulesApi.md#partialUpdateApplicationResponseRule2) | **PATCH** /workspace/applications/{application_id}/versions/{version_id}/response_rules/{response_rule_id} | Partially update an Application Response Rule
[**retrieveApplicationResponseRule**](ApplicationsResponseRulesApi.md#retrieveApplicationResponseRule) | **GET** /workspace/applications/{application_id}/response_rules/{response_rule_id} | Retrieve details of an Application Response Rule
[**retrieveApplicationResponseRule2**](ApplicationsResponseRulesApi.md#retrieveApplicationResponseRule2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/response_rules/{response_rule_id} | Retrieve details of an Application Response Rule
[**updateApplicationResponseRule**](ApplicationsResponseRulesApi.md#updateApplicationResponseRule) | **PUT** /workspace/applications/{application_id}/response_rules/{response_rule_id} | Update an Application Response Rule
[**updateApplicationResponseRule2**](ApplicationsResponseRulesApi.md#updateApplicationResponseRule2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/response_rules/{response_rule_id} | Update an Application Response Rule
[**updateApplicationResponseRulesOrder**](ApplicationsResponseRulesApi.md#updateApplicationResponseRulesOrder) | **PUT** /workspace/applications/{application_id}/response_rules/order | Ordering Application Response Rules
[**updateApplicationResponseRulesOrder2**](ApplicationsResponseRulesApi.md#updateApplicationResponseRulesOrder2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/response_rules/order | Ordering Application Response Rules


# **createApplicationResponseRule**
> ResponsePhaseRuleResponse createApplicationResponseRule(responsePhaseRuleRequest)

Create a new Rule for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiCreateApplicationResponseRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiCreateApplicationResponseRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  responsePhaseRuleRequest: {
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

const data = await apiInstance.createApplicationResponseRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responsePhaseRuleRequest** | **ResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application response rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplicationResponseRule2**
> ResponsePhaseRuleResponse createApplicationResponseRule2(responsePhaseRuleRequest)

Create a new Rule for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiCreateApplicationResponseRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiCreateApplicationResponseRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  responsePhaseRuleRequest: {
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

const data = await apiInstance.createApplicationResponseRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responsePhaseRuleRequest** | **ResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application response rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationResponseRule**
> DeleteResponse deleteApplicationResponseRule()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiDeleteApplicationResponseRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiDeleteApplicationResponseRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
};

const data = await apiInstance.deleteApplicationResponseRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined


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
**200** | Application response rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationResponseRule2**
> DeleteResponse deleteApplicationResponseRule2()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiDeleteApplicationResponseRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiDeleteApplicationResponseRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteApplicationResponseRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined
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
**200** | Application response rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationResponseRules**
> PaginatedResponsePhaseRuleList listApplicationResponseRules()

List all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiListApplicationResponseRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiListApplicationResponseRulesRequest = {
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

const data = await apiInstance.listApplicationResponseRules(request);
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

**PaginatedResponsePhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application response rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationResponseRules2**
> PaginatedResponsePhaseRuleList listApplicationResponseRules2()

List all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiListApplicationResponseRules2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiListApplicationResponseRules2Request = {
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

const data = await apiInstance.listApplicationResponseRules2(request);
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

**PaginatedResponsePhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application response rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationResponseRule**
> ResponsePhaseRuleResponse partialUpdateApplicationResponseRule()

Update one or more fields of an existing Application Rule  without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiPartialUpdateApplicationResponseRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
  
  patchedResponsePhaseRuleRequest: {
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

const data = await apiInstance.partialUpdateApplicationResponseRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedResponsePhaseRuleRequest** | **PatchedResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationResponseRule2**
> ResponsePhaseRuleResponse partialUpdateApplicationResponseRule2()

Update one or more fields of an existing Application Rule  without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiPartialUpdateApplicationResponseRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiPartialUpdateApplicationResponseRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedResponsePhaseRuleRequest: {
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

const data = await apiInstance.partialUpdateApplicationResponseRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedResponsePhaseRuleRequest** | **PatchedResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationResponseRule**
> ResponsePhaseRuleResponse retrieveApplicationResponseRule()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiRetrieveApplicationResponseRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiRetrieveApplicationResponseRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationResponseRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined
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
**200** | Application response rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationResponseRule2**
> ResponsePhaseRuleResponse retrieveApplicationResponseRule2()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiRetrieveApplicationResponseRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiRetrieveApplicationResponseRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationResponseRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined
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
**200** | Application response rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationResponseRule**
> ResponsePhaseRuleResponse updateApplicationResponseRule(responsePhaseRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiUpdateApplicationResponseRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiUpdateApplicationResponseRuleRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
  
  responsePhaseRuleRequest: {
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

const data = await apiInstance.updateApplicationResponseRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responsePhaseRuleRequest** | **ResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationResponseRule2**
> ResponsePhaseRuleResponse updateApplicationResponseRule2(responsePhaseRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiUpdateApplicationResponseRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiUpdateApplicationResponseRule2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the response rule.
  responseRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  responsePhaseRuleRequest: {
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

const data = await apiInstance.updateApplicationResponseRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **responsePhaseRuleRequest** | **ResponsePhaseRuleRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **responseRuleId** | [**number**] | A unique integer value identifying the response rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**ResponsePhaseRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationResponseRulesOrder**
> PaginatedResponsePhaseRuleList updateApplicationResponseRulesOrder(applicationResponsePhaseRuleEngineOrderRequest)

Reorder all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrderRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  applicationResponsePhaseRuleEngineOrderRequest: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.updateApplicationResponseRulesOrder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationResponsePhaseRuleEngineOrderRequest** | **ApplicationResponsePhaseRuleEngineOrderRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedResponsePhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationResponseRulesOrder2**
> PaginatedResponsePhaseRuleList updateApplicationResponseRulesOrder2(applicationResponsePhaseRuleEngineOrderRequest)

Reorder all Rules for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsResponseRulesApi } from '';
import type { ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrder2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsResponseRulesApi(configuration);

const request: ApplicationsResponseRulesApiUpdateApplicationResponseRulesOrder2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  applicationResponsePhaseRuleEngineOrderRequest: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.updateApplicationResponseRulesOrder2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationResponsePhaseRuleEngineOrderRequest** | **ApplicationResponsePhaseRuleEngineOrderRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedResponsePhaseRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application response rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


