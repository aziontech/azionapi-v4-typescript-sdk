# .ApplicationsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneApplication**](ApplicationsApi.md#cloneApplication) | **POST** /workspace/applications/{application_id}/clone | Clone an Application
[**createApplication**](ApplicationsApi.md#createApplication) | **POST** /workspace/applications | Create an Application
[**deleteApplication**](ApplicationsApi.md#deleteApplication) | **DELETE** /workspace/applications/{application_id} | Delete an Application
[**listApplications**](ApplicationsApi.md#listApplications) | **GET** /workspace/applications | List Applications
[**partialUpdateApplication**](ApplicationsApi.md#partialUpdateApplication) | **PATCH** /workspace/applications/{application_id} | Partially update an Application
[**retrieveApplication**](ApplicationsApi.md#retrieveApplication) | **GET** /workspace/applications/{application_id} | Retrieve details of an Application
[**updateApplication**](ApplicationsApi.md#updateApplication) | **PUT** /workspace/applications/{application_id} | Update an Application


# **cloneApplication**
> ApplicationResponse cloneApplication(cloneApplicationRequest)

Create a new Application by performing a deep copy of an existing Application, including its Cache Settings, Origins, Error Responses, Function Instances, and Rules Engine.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiCloneApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiCloneApplicationRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  cloneApplicationRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.cloneApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloneApplicationRequest** | **CloneApplicationRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application cloned successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApplication**
> ApplicationResponse createApplication(applicationRequest)

Create a new Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiCreateApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiCreateApplicationRequest = {
  
  applicationRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      cache: null,
      functions: null,
      applicationAccelerator: null,
      imageProcessor: null,
    },
    active: true,
    debug: false,
  },
};

const data = await apiInstance.createApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequest** | **ApplicationRequest**|  |


### Return type

**ApplicationResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplication**
> DeleteResponse deleteApplication()

Delete a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiDeleteApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiDeleteApplicationRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
};

const data = await apiInstance.deleteApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


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
**200** | Application deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplications**
> PaginatedApplicationList listApplications()

List all Applications owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiListApplicationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiListApplicationsRequest = {
    // Filter by active status. (optional)
  active: true,
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

const data = await apiInstance.listApplications(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
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

**PaginatedApplicationList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of applications retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateApplication**
> ApplicationResponse partialUpdateApplication()

Update one or more fields of an existing Application without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiPartialUpdateApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiPartialUpdateApplicationRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  patchedApplicationRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      cache: null,
      functions: null,
      applicationAccelerator: null,
      imageProcessor: null,
    },
    active: true,
    debug: false,
  },
};

const data = await apiInstance.partialUpdateApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedApplicationRequest** | **PatchedApplicationRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveApplication**
> ApplicationResponse retrieveApplication()

Retrieve details of a specific Application in your account.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiRetrieveApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiRetrieveApplicationRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplication**
> ApplicationResponse updateApplication(applicationRequest)

Update an existing Application. This replaces the entire Application with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsApi } from '';
import type { ApplicationsApiUpdateApplicationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsApi(configuration);

const request: ApplicationsApiUpdateApplicationRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  applicationRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      cache: null,
      functions: null,
      applicationAccelerator: null,
      imageProcessor: null,
    },
    active: true,
    debug: false,
  },
};

const data = await apiInstance.updateApplication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequest** | **ApplicationRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Application updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


