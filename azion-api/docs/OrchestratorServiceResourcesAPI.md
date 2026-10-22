# .OrchestratorServiceResourcesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResource**](OrchestratorServiceResourcesApi.md#createResource) | **POST** /orchestrator/services/{service_id}/resources | Create Service Resource
[**deleteResource**](OrchestratorServiceResourcesApi.md#deleteResource) | **DELETE** /orchestrator/services/{service_id}/resources/{resource_id} | Delete Resource
[**listResourcesOfAService**](OrchestratorServiceResourcesApi.md#listResourcesOfAService) | **GET** /orchestrator/services/{service_id}/resources | List Service Resources
[**retrieveResource**](OrchestratorServiceResourcesApi.md#retrieveResource) | **GET** /orchestrator/services/{service_id}/resources/{resource_id} | Retrieve details of a Resource
[**retrieveResourceContent**](OrchestratorServiceResourcesApi.md#retrieveResourceContent) | **GET** /orchestrator/services/{service_id}/resources/{resource_id}/content | Retrieve content of a Resource
[**updateResource**](OrchestratorServiceResourcesApi.md#updateResource) | **PUT** /orchestrator/services/{service_id}/resources/{resource_id} | Update Resource
[**uploadResourceContent**](OrchestratorServiceResourcesApi.md#uploadResourceContent) | **PUT** /orchestrator/services/{service_id}/resources/{resource_id}/content | Upload content of a Resource


# **createResource**
> ServiceResource createResource(serviceResourceRequest)

Create a Resource on a Service.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiCreateResourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiCreateResourceRequest = {
  
  serviceId: 1,
  
  serviceResourceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    contentType: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileGroup: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileMode: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileOwner: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createResource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceResourceRequest** | **ServiceResourceRequest**|  |
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**ServiceResource**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteResource**
> void deleteResource()

Delete Resource from your account.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiDeleteResourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiDeleteResourceRequest = {
  
  resourceId: 1,
  
  serviceId: 1,
};

const data = await apiInstance.deleteResource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | [**number**] |  | defaults to undefined
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listResourcesOfAService**
> PaginatedServiceResourceList listResourcesOfAService()

List all resources of a Service owned by your account.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiListResourcesOfAServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiListResourcesOfAServiceRequest = {
  
  serviceId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listResourcesOfAService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedServiceResourceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveResource**
> ServiceResourceId retrieveResource()

Retrieve details of a specific Resource in your account.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiRetrieveResourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiRetrieveResourceRequest = {
  
  resourceId: 1,
  
  serviceId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveResource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | [**number**] |  | defaults to undefined
 **serviceId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ServiceResourceId**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveResourceContent**
> Content retrieveResourceContent()

Retrieve content of a resource.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiRetrieveResourceContentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiRetrieveResourceContentRequest = {
  
  resourceId: 1,
  
  serviceId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveResourceContent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | [**number**] |  | defaults to undefined
 **serviceId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**Content**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateResource**
> ServiceResourceId updateResource(serviceResourceIdRequest)

Update Resource in your account.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiUpdateResourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiUpdateResourceRequest = {
  
  resourceId: 1,
  
  serviceId: 1,
  
  serviceResourceIdRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    contentType: "jUR,rZ#UM/?R,Fp^l6$ARj",
    trigger: null,
    content: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileGroup: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileMode: "jUR,rZ#UM/?R,Fp^l6$ARj",
    fileOwner: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateResource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceResourceIdRequest** | **ServiceResourceIdRequest**|  |
 **resourceId** | [**number**] |  | defaults to undefined
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**ServiceResourceId**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadResourceContent**
> Content uploadResourceContent(contentRequest)

Upload content of a Resource.

### Example


```typescript
import { createConfiguration, OrchestratorServiceResourcesApi } from '';
import type { OrchestratorServiceResourcesApiUploadResourceContentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServiceResourcesApi(configuration);

const request: OrchestratorServiceResourcesApiUploadResourceContentRequest = {
  
  resourceId: 1,
  
  serviceId: 1,
  
  contentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    contentType: "jUR,rZ#UM/?R,Fp^l6$ARj",
    contentHash: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.uploadResourceContent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentRequest** | **ContentRequest**|  |
 **resourceId** | [**number**] |  | defaults to undefined
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**Content**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


