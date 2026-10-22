# .OrchestratorNodesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNode**](OrchestratorNodesApi.md#deleteNode) | **DELETE** /orchestrator/nodes/{node_id} | Delete an Node
[**listNodes**](OrchestratorNodesApi.md#listNodes) | **GET** /orchestrator/nodes | List Nodes
[**partialUpdateNode**](OrchestratorNodesApi.md#partialUpdateNode) | **PATCH** /orchestrator/nodes/{node_id} | Partially update an Node
[**partialUpdateNode2**](OrchestratorNodesApi.md#partialUpdateNode2) | **PATCH** /orchestrator/nodes/{node_id}/ | Partially update an Node
[**retrieveNode**](OrchestratorNodesApi.md#retrieveNode) | **GET** /orchestrator/nodes/{node_id} | Retrieve details of an Node
[**retrieveNode2**](OrchestratorNodesApi.md#retrieveNode2) | **GET** /orchestrator/nodes/{node_id}/ | Retrieve details of an Node
[**updateNode**](OrchestratorNodesApi.md#updateNode) | **PUT** /orchestrator/nodes/{node_id} | Update an Node
[**updateNode2**](OrchestratorNodesApi.md#updateNode2) | **PUT** /orchestrator/nodes/{node_id}/ | Update an Node


# **deleteNode**
> ResponseAsyncDeleteNodes deleteNode()

Delete an Node.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiDeleteNodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiDeleteNodeRequest = {
  
  nodeId: "node_id_example",
};

const data = await apiInstance.deleteNode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteNodes**

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

# **listNodes**
> PaginatedNodesList listNodes()

List all Nodes of your account.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiListNodesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiListNodesRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Search by hash_id (optional)
  hashId: "hash_id_example",
    // Search by name (optional)
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

const data = await apiInstance.listNodes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **hashId** | [**string**] | Search by hash_id | (optional) defaults to undefined
 **name** | [**string**] | Search by name | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedNodesList**

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

# **partialUpdateNode**
> ResponseAsyncNodes partialUpdateNode()

Update one or more fields of an existing Node without affecting other fields.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiPartialUpdateNodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiPartialUpdateNodeRequest = {
  
  nodeId: "node_id_example",
  
  patchedNodesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    status: "waiting_authorization",
    modules: null,
  },
};

const data = await apiInstance.partialUpdateNode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedNodesRequest** | **PatchedNodesRequest**|  |
 **nodeId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncNodes**

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

# **partialUpdateNode2**
> ResponseAsyncNodes partialUpdateNode2()

Update one or more fields of an existing Node without affecting other fields.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiPartialUpdateNode2Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiPartialUpdateNode2Request = {
  
  nodeId: 1,
  
  patchedNodesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    status: "waiting_authorization",
    modules: null,
  },
};

const data = await apiInstance.partialUpdateNode2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedNodesRequest** | **PatchedNodesRequest**|  |
 **nodeId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncNodes**

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

# **retrieveNode**
> ResponseRetrieveNodes retrieveNode()

Retrieve details of a specific Node in your account.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiRetrieveNodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiRetrieveNodeRequest = {
  
  nodeId: "node_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveNode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveNodes**

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

# **retrieveNode2**
> ResponseRetrieveNodes retrieveNode2()

Retrieve details of a specific Node in your account.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiRetrieveNode2Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiRetrieveNode2Request = {
  
  nodeId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveNode2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveNodes**

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

# **updateNode**
> ResponseAsyncNodes updateNode(nodesRequest)

Update an existing Node. This replaces the entire Node with the new data provided.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiUpdateNodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiUpdateNodeRequest = {
  
  nodeId: "node_id_example",
  
  nodesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    status: "waiting_authorization",
    modules: null,
  },
};

const data = await apiInstance.updateNode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodesRequest** | **NodesRequest**|  |
 **nodeId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncNodes**

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

# **updateNode2**
> ResponseAsyncNodes updateNode2(nodesRequest)

Update an existing Node. This replaces the entire Node with the new data provided.

### Example


```typescript
import { createConfiguration, OrchestratorNodesApi } from '';
import type { OrchestratorNodesApiUpdateNode2Request } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodesApi(configuration);

const request: OrchestratorNodesApiUpdateNode2Request = {
  
  nodeId: 1,
  
  nodesRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    status: "waiting_authorization",
    modules: null,
  },
};

const data = await apiInstance.updateNode2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodesRequest** | **NodesRequest**|  |
 **nodeId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncNodes**

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


