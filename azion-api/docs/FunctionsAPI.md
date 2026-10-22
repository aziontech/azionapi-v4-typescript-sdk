# .FunctionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunction**](FunctionsApi.md#createFunction) | **POST** /workspace/functions | Create an Function
[**deleteFunction**](FunctionsApi.md#deleteFunction) | **DELETE** /workspace/functions/{function_id} | Delete an Function
[**listFunctions**](FunctionsApi.md#listFunctions) | **GET** /workspace/functions | List Functions
[**partialUpdateFunction**](FunctionsApi.md#partialUpdateFunction) | **PATCH** /workspace/functions/{function_id} | Partially update an Function
[**retrieveFunction**](FunctionsApi.md#retrieveFunction) | **GET** /workspace/functions/{function_id} | Retrieve details of an Function
[**updateFunction**](FunctionsApi.md#updateFunction) | **PUT** /workspace/functions/{function_id} | Update an Function


# **createFunction**
> FunctionResponse createFunction(functionsRequest)

Create a new Function in your account.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiCreateFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiCreateFunctionRequest = {
  
  functionsRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    runtime: null,
    executionEnvironment: null,
    defaultArgs: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    code: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionsRequest** | **FunctionsRequest**|  |


### Return type

**FunctionResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Function created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFunction**
> DeleteResponse deleteFunction()

Delete a specific Function in your account.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiDeleteFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiDeleteFunctionRequest = {
    // A unique integer value identifying the function.
  functionId: 1,
};

const data = await apiInstance.deleteFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | A unique integer value identifying the function. | defaults to undefined


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
**200** | Function deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFunctions**
> PaginatedEdgeFunctionList listFunctions()

List all Functions owned by your account.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiListFunctionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiListFunctionsRequest = {
    // Filter by active status. (optional)
  active: true,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by language (accepts comma-separated values). (optional)
  languageIn: "language__in_example",
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // Filter by runtime environment (accepts comma-separated values). (optional)
  runtimeEnvironmentIn: "runtime_environment__in_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listFunctions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **languageIn** | [**string**] | Filter by language (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **runtimeEnvironmentIn** | [**string**] | Filter by runtime environment (accepts comma-separated values). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedEdgeFunctionList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of functions retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFunction**
> FunctionResponse partialUpdateFunction()

Update one or more fields of an existing Function without affecting other fields.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiPartialUpdateFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiPartialUpdateFunctionRequest = {
    // A unique integer value identifying the function.
  functionId: 1,
  
  patchedFunctionsRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    runtime: null,
    executionEnvironment: null,
    defaultArgs: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    code: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFunctionsRequest** | **PatchedFunctionsRequest**|  |
 **functionId** | [**number**] | A unique integer value identifying the function. | defaults to undefined


### Return type

**FunctionResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Function partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFunction**
> FunctionResponse retrieveFunction()

Retrieve details of a specific Function in your account.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiRetrieveFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiRetrieveFunctionRequest = {
    // A unique integer value identifying the function.
  functionId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | A unique integer value identifying the function. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FunctionResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Function details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFunction**
> FunctionResponse updateFunction(functionsRequest)

Update an existing Function. This replaces the entire Function with the new data provided.

### Example


```typescript
import { createConfiguration, FunctionsApi } from '';
import type { FunctionsApiUpdateFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionsApi(configuration);

const request: FunctionsApiUpdateFunctionRequest = {
    // A unique integer value identifying the function.
  functionId: 1,
  
  functionsRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    runtime: null,
    executionEnvironment: null,
    defaultArgs: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    code: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionsRequest** | **FunctionsRequest**|  |
 **functionId** | [**number**] | A unique integer value identifying the function. | defaults to undefined


### Return type

**FunctionResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Function updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


