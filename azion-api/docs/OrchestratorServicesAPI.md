# .OrchestratorServicesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](OrchestratorServicesApi.md#createService) | **POST** /orchestrator/services | Create Service
[**destroyService**](OrchestratorServicesApi.md#destroyService) | **DELETE** /orchestrator/services/{service_id} | Destroy an Service
[**listServices**](OrchestratorServicesApi.md#listServices) | **GET** /orchestrator/services | List Services
[**partialUpdateService**](OrchestratorServicesApi.md#partialUpdateService) | **PATCH** /orchestrator/services/{service_id} | Partially update an Service
[**retrieveService**](OrchestratorServicesApi.md#retrieveService) | **GET** /orchestrator/services/{service_id} | Retrieve details of an Service
[**updateService**](OrchestratorServicesApi.md#updateService) | **PUT** /orchestrator/services/{service_id} | Update an Service


# **createService**
> ResponseAsyncServices createService()

Create an Service.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiCreateServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiCreateServiceRequest = {
  
  servicesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    minVersion: "jUR,rZ#UM/?R,Fp^l6$ARj",
    permissions: 1,
  },
};

const data = await apiInstance.createService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **servicesRequest** | **ServicesRequest**|  |


### Return type

**ResponseAsyncServices**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **destroyService**
> ResponseAsyncDeleteServices destroyService()

Destruction of a specific Service in your account.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiDestroyServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiDestroyServiceRequest = {
  
  serviceId: 1,
};

const data = await apiInstance.destroyService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteServices**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** | Accepted |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listServices**
> PaginatedServicesList listServices()

Get the list of Services of your account.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiListServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiListServicesRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Search by name (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
};

const data = await apiInstance.listServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **name** | [**string**] | Search by name | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined


### Return type

**PaginatedServicesList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateService**
> ResponseAsyncServices partialUpdateService()

Update one or more fields of an existing Service without affecting other fields.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiPartialUpdateServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiPartialUpdateServiceRequest = {
  
  serviceId: 1,
  
  patchedServicesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    minVersion: "jUR,rZ#UM/?R,Fp^l6$ARj",
    permissions: 1,
  },
};

const data = await apiInstance.partialUpdateService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedServicesRequest** | **PatchedServicesRequest**|  |
 **serviceId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncServices**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveService**
> ResponseRetrieveServices retrieveService()

Retrieve details of a specific Service in your account.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiRetrieveServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiRetrieveServiceRequest = {
  
  serviceId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveServices**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateService**
> ResponseAsyncServices updateService()

Update an existing Service replacing all fields.

### Example


```typescript
import { createConfiguration, OrchestratorServicesApi } from '';
import type { OrchestratorServicesApiUpdateServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorServicesApi(configuration);

const request: OrchestratorServicesApiUpdateServiceRequest = {
  
  serviceId: "service_id_example",
  
  servicesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    minVersion: "jUR,rZ#UM/?R,Fp^l6$ARj",
    permissions: 1,
  },
};

const data = await apiInstance.updateService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **servicesRequest** | **ServicesRequest**|  |
 **serviceId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncServices**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


