# .ApplicationsFunctionApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationFunctionInstance**](ApplicationsFunctionApi.md#createApplicationFunctionInstance) | **POST** /workspace/applications/{application_id}/functions | Create an Application Function Instance
[**createApplicationFunctionInstance2**](ApplicationsFunctionApi.md#createApplicationFunctionInstance2) | **POST** /workspace/applications/{application_id}/versions/{version_id}/functions | Create an Application Function Instance
[**deleteApplicationFunctionInstance**](ApplicationsFunctionApi.md#deleteApplicationFunctionInstance) | **DELETE** /workspace/applications/{application_id}/functions/{function_id} | Delete an Application Function Instance
[**deleteApplicationFunctionInstance2**](ApplicationsFunctionApi.md#deleteApplicationFunctionInstance2) | **DELETE** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Delete an Application Function Instance
[**listApplicationFunctionInstances**](ApplicationsFunctionApi.md#listApplicationFunctionInstances) | **GET** /workspace/applications/{application_id}/functions | List Function Instances
[**listApplicationFunctionInstances2**](ApplicationsFunctionApi.md#listApplicationFunctionInstances2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/functions | List Function Instances
[**partialUpdateApplicationFunctionInstance**](ApplicationsFunctionApi.md#partialUpdateApplicationFunctionInstance) | **PATCH** /workspace/applications/{application_id}/functions/{function_id} | Partially update an Application Function Instance
[**partialUpdateApplicationFunctionInstance2**](ApplicationsFunctionApi.md#partialUpdateApplicationFunctionInstance2) | **PATCH** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Partially update an Application Function Instance
[**retrieveApplicationFunctionInstance**](ApplicationsFunctionApi.md#retrieveApplicationFunctionInstance) | **GET** /workspace/applications/{application_id}/functions/{function_id} | Retrieve details of an Application Function Instance
[**retrieveApplicationFunctionInstance2**](ApplicationsFunctionApi.md#retrieveApplicationFunctionInstance2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Retrieve details of an Application Function Instance
[**updateApplicationFunctionInstance**](ApplicationsFunctionApi.md#updateApplicationFunctionInstance) | **PUT** /workspace/applications/{application_id}/functions/{function_id} | Update an Application Function Instance
[**updateApplicationFunctionInstance2**](ApplicationsFunctionApi.md#updateApplicationFunctionInstance2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Update an Application Function Instance


# **createApplicationFunctionInstance**
> FunctionInstanceResponse createApplicationFunctionInstance(functionInstanceRequest)

Create a new Function Instance for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiCreateApplicationFunctionInstanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiCreateApplicationFunctionInstanceRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  functionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.createApplicationFunctionInstance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionInstanceRequest** | **FunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application function instance created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplicationFunctionInstance2**
> FunctionInstanceResponse createApplicationFunctionInstance2(functionInstanceRequest)

Create a new Function Instance for a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiCreateApplicationFunctionInstance2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiCreateApplicationFunctionInstance2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  functionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.createApplicationFunctionInstance2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionInstanceRequest** | **FunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application function instance created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationFunctionInstance**
> DeleteResponse deleteApplicationFunctionInstance()

Delete a specific Application Function Instance in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiDeleteApplicationFunctionInstanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiDeleteApplicationFunctionInstanceRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
};

const data = await apiInstance.deleteApplicationFunctionInstance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


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
**200** | Application function instance deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplicationFunctionInstance2**
> DeleteResponse deleteApplicationFunctionInstance2()

Delete a specific Application Function Instance in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiDeleteApplicationFunctionInstance2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiDeleteApplicationFunctionInstance2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteApplicationFunctionInstance2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
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
**200** | Application function instance deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationFunctionInstances**
> PaginatedFunctionInstanceList listApplicationFunctionInstances()

List all Function Instances for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiListApplicationFunctionInstancesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiListApplicationFunctionInstancesRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
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
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listApplicationFunctionInstances(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFunctionInstanceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application function instances retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationFunctionInstances2**
> PaginatedFunctionInstanceList listApplicationFunctionInstances2()

List all Function Instances for a specific Application owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiListApplicationFunctionInstances2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiListApplicationFunctionInstances2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
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
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listApplicationFunctionInstances2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFunctionInstanceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application function instances retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationFunctionInstance**
> FunctionInstanceResponse partialUpdateApplicationFunctionInstance()

Update one or more fields of an existing Application Function Instance without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiPartialUpdateApplicationFunctionInstanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstanceRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
  
  patchedFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.partialUpdateApplicationFunctionInstance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFunctionInstanceRequest** | **PatchedFunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplicationFunctionInstance2**
> FunctionInstanceResponse partialUpdateApplicationFunctionInstance2()

Update one or more fields of an existing Application Function Instance without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiPartialUpdateApplicationFunctionInstance2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiPartialUpdateApplicationFunctionInstance2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.partialUpdateApplicationFunctionInstance2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFunctionInstanceRequest** | **PatchedFunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationFunctionInstance**
> FunctionInstanceResponse retrieveApplicationFunctionInstance()

Retrieve details of a specific Application Function Instance in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiRetrieveApplicationFunctionInstanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiRetrieveApplicationFunctionInstanceRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationFunctionInstance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplicationFunctionInstance2**
> FunctionInstanceResponse retrieveApplicationFunctionInstance2()

Retrieve details of a specific Application Function Instance in your account.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiRetrieveApplicationFunctionInstance2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiRetrieveApplicationFunctionInstance2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationFunctionInstance2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationFunctionInstance**
> FunctionInstanceResponse updateApplicationFunctionInstance(functionInstanceRequest)

Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiUpdateApplicationFunctionInstanceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiUpdateApplicationFunctionInstanceRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
  
  functionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.updateApplicationFunctionInstance(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionInstanceRequest** | **FunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationFunctionInstance2**
> FunctionInstanceResponse updateApplicationFunctionInstance2(functionInstanceRequest)

Update an existing Application Function Instance. This replaces the entire Function Instance with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsFunctionApi } from '';
import type { ApplicationsFunctionApiUpdateApplicationFunctionInstance2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsFunctionApi(configuration);

const request: ApplicationsFunctionApiUpdateApplicationFunctionInstance2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  functionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.updateApplicationFunctionInstance2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionInstanceRequest** | **FunctionInstanceRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application function instance updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


