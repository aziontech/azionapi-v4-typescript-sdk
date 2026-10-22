# .WAFsExceptionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWafException**](WAFsExceptionsApi.md#createWafException) | **POST** /workspace/wafs/{waf_id}/exceptions | Create an Exception for a Web Application Firewall (WAF)
[**createWafException2**](WAFsExceptionsApi.md#createWafException2) | **POST** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions | Create an Exception for a Web Application Firewall (WAF)
[**deleteWafException**](WAFsExceptionsApi.md#deleteWafException) | **DELETE** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Delete an Exception from a Web Application Firewall (WAF)
[**deleteWafException2**](WAFsExceptionsApi.md#deleteWafException2) | **DELETE** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Delete an Exception from a Web Application Firewall (WAF)
[**listWafExceptions**](WAFsExceptionsApi.md#listWafExceptions) | **GET** /workspace/wafs/{waf_id}/exceptions | List Exceptions for a Web Application Firewall (WAF)
[**listWafExceptions2**](WAFsExceptionsApi.md#listWafExceptions2) | **GET** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions | List Exceptions for a Web Application Firewall (WAF)
[**partialUpdateWafException**](WAFsExceptionsApi.md#partialUpdateWafException) | **PATCH** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Partially update an Exception for a Web Application Firewall (WAF)
[**partialUpdateWafException2**](WAFsExceptionsApi.md#partialUpdateWafException2) | **PATCH** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Partially update an Exception for a Web Application Firewall (WAF)
[**retrieveWafException**](WAFsExceptionsApi.md#retrieveWafException) | **GET** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Retrieve details of an Exception from a Web Application Firewall (WAF)
[**retrieveWafException2**](WAFsExceptionsApi.md#retrieveWafException2) | **GET** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Retrieve details of an Exception from a Web Application Firewall (WAF)
[**updateWafException**](WAFsExceptionsApi.md#updateWafException) | **PUT** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Update an Exception for a Web Application Firewall (WAF)
[**updateWafException2**](WAFsExceptionsApi.md#updateWafException2) | **PUT** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Update an Exception for a Web Application Firewall (WAF)


# **createWafException**
> WAFRuleResponse createWafException(wAFRuleRequest)

Create a new Exception for a specific WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiCreateWafExceptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiCreateWafExceptionRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  wAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.createWafException(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRuleRequest** | **WAFRuleRequest**|  |
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | WAF rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWafException2**
> WAFRuleResponse createWafException2(wAFRuleRequest)

Create a new Exception for a specific WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiCreateWafException2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiCreateWafException2Request = {
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  wAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.createWafException2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRuleRequest** | **WAFRuleRequest**|  |
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | WAF rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWafException**
> DeleteResponse deleteWafException()

Remove a specific Exception from a WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiDeleteWafExceptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiDeleteWafExceptionRequest = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // A unique integer value identifying the WAF.
  wafId: 1,
};

const data = await apiInstance.deleteWafException(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


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
**200** | WAF rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWafException2**
> DeleteResponse deleteWafException2()

Remove a specific Exception from a WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiDeleteWafException2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiDeleteWafException2Request = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
};

const data = await apiInstance.deleteWafException2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


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
**200** | WAF rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWafExceptions**
> PaginatedWAFRuleList listWafExceptions()

List all Exceptions associated with a specific WAF owned by your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiListWafExceptionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiListWafExceptionsRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
    // Filter by creation date (greater than or equal). (optional)
  createdAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by creation date (less than or equal). (optional)
  createdAtLte: new Date('1970-01-01T00:00:00.00Z'),
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
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // Filter by path (case-insensitive, partial match). (optional)
  path: "path_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listWafExceptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined
 **createdAtGte** | [**Date**] | Filter by creation date (greater than or equal). | (optional) defaults to undefined
 **createdAtLte** | [**Date**] | Filter by creation date (less than or equal). | (optional) defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **path** | [**string**] | Filter by path (case-insensitive, partial match). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedWAFRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of WAF rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWafExceptions2**
> PaginatedWAFRuleList listWafExceptions2()

List all Exceptions associated with a specific WAF owned by your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiListWafExceptions2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiListWafExceptions2Request = {
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
    // Filter by creation date (greater than or equal). (optional)
  createdAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by creation date (less than or equal). (optional)
  createdAtLte: new Date('1970-01-01T00:00:00.00Z'),
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
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // Filter by path (case-insensitive, partial match). (optional)
  path: "path_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listWafExceptions2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined
 **createdAtGte** | [**Date**] | Filter by creation date (greater than or equal). | (optional) defaults to undefined
 **createdAtLte** | [**Date**] | Filter by creation date (less than or equal). | (optional) defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **path** | [**string**] | Filter by path (case-insensitive, partial match). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedWAFRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of WAF rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateWafException**
> WAFRuleResponse partialUpdateWafException()

Update one or more fields of an existing exception for a WAF without affecting other fields.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiPartialUpdateWafExceptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiPartialUpdateWafExceptionRequest = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  patchedWAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.partialUpdateWafException(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedWAFRuleRequest** | **PatchedWAFRuleRequest**|  |
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateWafException2**
> WAFRuleResponse partialUpdateWafException2()

Update one or more fields of an existing exception for a WAF without affecting other fields.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiPartialUpdateWafException2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiPartialUpdateWafException2Request = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  patchedWAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.partialUpdateWafException2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedWAFRuleRequest** | **PatchedWAFRuleRequest**|  |
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWafException**
> WAFRuleResponse retrieveWafException()

Retrieve details of a specific Exception from a WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiRetrieveWafExceptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiRetrieveWafExceptionRequest = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // A unique integer value identifying the WAF.
  wafId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWafException(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWafException2**
> WAFRuleResponse retrieveWafException2()

Retrieve details of a specific Exception from a WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiRetrieveWafException2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiRetrieveWafException2Request = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWafException2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWafException**
> WAFRuleResponse updateWafException(wAFRuleRequest)

Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiUpdateWafExceptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiUpdateWafExceptionRequest = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  wAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.updateWafException(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRuleRequest** | **WAFRuleRequest**|  |
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWafException2**
> WAFRuleResponse updateWafException2(wAFRuleRequest)

Update an existing Exception for a WAF. This replaces the entire rule with the new data provided.

### Example


```typescript
import { createConfiguration, WAFsExceptionsApi } from '';
import type { WAFsExceptionsApiUpdateWafException2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsExceptionsApi(configuration);

const request: WAFsExceptionsApiUpdateWafException2Request = {
    // A unique integer value identifying the WAF exception.
  exceptionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  wAFRuleRequest: {
    ruleId: null,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    path: "jUR,rZ#UM/?R,Fp^l6$ARj",
    conditions: [
      null,
    ],
    operator: null,
    active: true,
  },
};

const data = await apiInstance.updateWafException2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRuleRequest** | **WAFRuleRequest**|  |
 **exceptionId** | [**number**] | A unique integer value identifying the WAF exception. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


