# .OrchestratorNodeGroupsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bindNodeGroup**](OrchestratorNodeGroupsApi.md#bindNodeGroup) | **POST** /orchestrator/nodes/{node_id}/groups | Bind Node Group
[**createNodeGroup**](OrchestratorNodeGroupsApi.md#createNodeGroup) | **POST** /orchestrator/nodes/groups | Create Node Group
[**listNodeGroups**](OrchestratorNodeGroupsApi.md#listNodeGroups) | **GET** /orchestrator/nodes/groups | List Node Groups
[**listNodeGroupsByID**](OrchestratorNodeGroupsApi.md#listNodeGroupsByID) | **GET** /orchestrator/nodes/{node_id}/groups | List Node Groups by id
[**removeNodeGroup**](OrchestratorNodeGroupsApi.md#removeNodeGroup) | **DELETE** /orchestrator/nodes/groups/{group_id} | Remove Node Group


# **bindNodeGroup**
> ResponseAsyncNodeGroupsById bindNodeGroup()

Create a bind between Node and Group.

### Example


```typescript
import { createConfiguration, OrchestratorNodeGroupsApi } from '';
import type { OrchestratorNodeGroupsApiBindNodeGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeGroupsApi(configuration);

const request: OrchestratorNodeGroupsApiBindNodeGroupRequest = {
  
  nodeId: 1,
  
  nodeGroupsByIdRequest: {
    name: "name_example",
    nodeGroup: 1,
  },
};

const data = await apiInstance.bindNodeGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeGroupsByIdRequest** | **NodeGroupsByIdRequest**|  |
 **nodeId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncNodeGroupsById**

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

# **createNodeGroup**
> NodeGroups createNodeGroup(nodeGroupsRequest)

Create an Node Group.

### Example


```typescript
import { createConfiguration, OrchestratorNodeGroupsApi } from '';
import type { OrchestratorNodeGroupsApiCreateNodeGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeGroupsApi(configuration);

const request: OrchestratorNodeGroupsApiCreateNodeGroupRequest = {
  
  nodeGroupsRequest: {
    name: "name_example",
    active: true,
  },
};

const data = await apiInstance.createNodeGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeGroupsRequest** | **NodeGroupsRequest**|  |


### Return type

**NodeGroups**

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

# **listNodeGroups**
> PaginatedNodeGroupsList listNodeGroups()

List all Groups of an Node.

### Example


```typescript
import { createConfiguration, OrchestratorNodeGroupsApi } from '';
import type { OrchestratorNodeGroupsApiListNodeGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeGroupsApi(configuration);

const request: OrchestratorNodeGroupsApiListNodeGroupsRequest = {
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

const data = await apiInstance.listNodeGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedNodeGroupsList**

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

# **listNodeGroupsByID**
> PaginatedNodeGroupsByIdList listNodeGroupsByID()

List all Groups of an Node.

### Example


```typescript
import { createConfiguration, OrchestratorNodeGroupsApi } from '';
import type { OrchestratorNodeGroupsApiListNodeGroupsByIDRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeGroupsApi(configuration);

const request: OrchestratorNodeGroupsApiListNodeGroupsByIDRequest = {
  
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

const data = await apiInstance.listNodeGroupsByID(request);
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

**PaginatedNodeGroupsByIdList**

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

# **removeNodeGroup**
> void removeNodeGroup()

Remove an Node Group.

### Example


```typescript
import { createConfiguration, OrchestratorNodeGroupsApi } from '';
import type { OrchestratorNodeGroupsApiRemoveNodeGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrchestratorNodeGroupsApi(configuration);

const request: OrchestratorNodeGroupsApiRemoveNodeGroupRequest = {
  
  groupId: 1,
};

const data = await apiInstance.removeNodeGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**number**] |  | defaults to undefined


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


