# .OrchestratorNodeServicesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bindNodeServices**](OrchestratorNodeServicesApi.md#bindNodeServices) | **POST** /orchestrator/nodes/{node_id}/services | Bind Node Service
[**listNodeServices**](OrchestratorNodeServicesApi.md#listNodeServices) | **GET** /orchestrator/nodes/{node_id}/services | List Node Services
[**retrieveNodeServiceBind**](OrchestratorNodeServicesApi.md#retrieveNodeServiceBind) | **GET** /orchestrator/nodes/{node_id}/services/{bind_id} | Retrieve details of an Node Service Bind
[**unbindNodeService**](OrchestratorNodeServicesApi.md#unbindNodeService) | **DELETE** /orchestrator/nodes/{node_id}/services/{bind_id} | Unbind Node Service


# **bindNodeServices**
> ResponseAsyncNodeServices bindNodeServices(nodeServicesRequest)

Create a bind between Node and Service.

### Example


```typescript
import { createConfiguration, OrchestratorNodeServicesApi } from '';
import type { OrchestratorNodeServicesApiBindNodeServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeServicesApi(configuration);

const request: OrchestratorNodeServicesApiBindNodeServicesRequest = {
  
  nodeId: 1,
  
  nodeServicesRequest: {
    id: 1,
    serviceName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    serviceId: 1,
    active: true,
  },
};

const data = await apiInstance.bindNodeServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeServicesRequest** | **NodeServicesRequest**|  |
 **nodeId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncNodeServices**

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

# **listNodeServices**
> PaginatedNodeServicesList listNodeServices()

List all Services from an Node.

### Example


```typescript
import { createConfiguration, OrchestratorNodeServicesApi } from '';
import type { OrchestratorNodeServicesApiListNodeServicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeServicesApi(configuration);

const request: OrchestratorNodeServicesApiListNodeServicesRequest = {
  
  nodeId: 1,
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

const data = await apiInstance.listNodeServices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedNodeServicesList**

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

# **retrieveNodeServiceBind**
> ResponseRetrieveNodeServiceBind retrieveNodeServiceBind()

Retrieve details of a specific Node Service Bind in your account.

### Example


```typescript
import { createConfiguration, OrchestratorNodeServicesApi } from '';
import type { OrchestratorNodeServicesApiRetrieveNodeServiceBindRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeServicesApi(configuration);

const request: OrchestratorNodeServicesApiRetrieveNodeServiceBindRequest = {
  
  bindId: 1,
  
  nodeId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveNodeServiceBind(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bindId** | [**number**] |  | defaults to undefined
 **nodeId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveNodeServiceBind**

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

# **unbindNodeService**
> ResponseAsyncDeleteNodeServiceBind unbindNodeService()

Remove the bind between Node and Service.

### Example


```typescript
import { createConfiguration, OrchestratorNodeServicesApi } from '';
import type { OrchestratorNodeServicesApiUnbindNodeServiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeServicesApi(configuration);

const request: OrchestratorNodeServicesApiUnbindNodeServiceRequest = {
  
  bindId: 1,
  
  nodeId: 1,
};

const data = await apiInstance.unbindNodeService(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bindId** | [**number**] |  | defaults to undefined
 **nodeId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteNodeServiceBind**

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


