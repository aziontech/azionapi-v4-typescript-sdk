# .AIStudioToolsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addKnowledgeBaseToATool**](AIStudioToolsApi.md#addKnowledgeBaseToATool) | **POST** /workspace/ai/tools/{tool_id}/kbs | Add a knowledge base to a tool
[**createTool**](AIStudioToolsApi.md#createTool) | **POST** /workspace/ai/tools | Create a tool
[**destroyATool**](AIStudioToolsApi.md#destroyATool) | **DELETE** /workspace/ai/tools/{tool_id} | Destroy a tool
[**listKnowledgeBasesLinkedToATool**](AIStudioToolsApi.md#listKnowledgeBasesLinkedToATool) | **GET** /workspace/ai/tools/{tool_id}/kbs | List knowledge bases linked to a tool
[**listTools**](AIStudioToolsApi.md#listTools) | **GET** /workspace/ai/tools | List tools
[**partialUpdateTool**](AIStudioToolsApi.md#partialUpdateTool) | **PATCH** /workspace/ai/tools/{tool_id} | Partially update a tool
[**removeKnowledgeBaseFromATool**](AIStudioToolsApi.md#removeKnowledgeBaseFromATool) | **DELETE** /workspace/ai/tools/{tool_id}/kbs/{kb_id} | Remove a knowledge base from a tool
[**retriveTool**](AIStudioToolsApi.md#retriveTool) | **GET** /workspace/ai/tools/{tool_id} | Retrieve details from a tool
[**updateTool**](AIStudioToolsApi.md#updateTool) | **PUT** /workspace/ai/tools/{tool_id} | Update a tool


# **addKnowledgeBaseToATool**
> ToolKBLink addKnowledgeBaseToATool(toolRequest)

Add a new knowledge base to a specific tool for your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiAddKnowledgeBaseToAToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiAddKnowledgeBaseToAToolRequest = {
  
  toolId: 1,
  
  toolRequest: {
    name: "name_example",
    description: "description_example",
    type: "type_example",
    jsonSchema: {
      "key": null,
    },
    active: true,
  },
};

const data = await apiInstance.addKnowledgeBaseToATool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolRequest** | **ToolRequest**|  |
 **toolId** | [**number**] |  | defaults to undefined


### Return type

**ToolKBLink**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTool**
> ResponseAsyncTool | ResponseTool createTool(toolRequest)

Create a new tool for your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiCreateToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiCreateToolRequest = {
  
  toolRequest: {
    name: "name_example",
    description: "description_example",
    type: "type_example",
    jsonSchema: {
      "key": null,
    },
    active: true,
  },
};

const data = await apiInstance.createTool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolRequest** | **ToolRequest**|  |


### Return type

**ResponseAsyncTool | ResponseTool**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**202** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **destroyATool**
> ResponseAsyncDeleteTool | ResponseDeleteTool destroyATool()

Destruction of a specific tool in your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiDestroyAToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiDestroyAToolRequest = {
  
  toolId: 1,
};

const data = await apiInstance.destroyATool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteTool | ResponseDeleteTool**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listKnowledgeBasesLinkedToATool**
> PaginatedKnowledgeBaseList listKnowledgeBasesLinkedToATool()

List all knowledge bases linked to a specific tool in your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiListKnowledgeBasesLinkedToAToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiListKnowledgeBasesLinkedToAToolRequest = {
  
  toolId: 1,
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

const data = await apiInstance.listKnowledgeBasesLinkedToATool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedKnowledgeBaseList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTools**
> PaginatedToolList listTools()

List all tools owned by your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiListToolsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiListToolsRequest = {
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

const data = await apiInstance.listTools(request);
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

**PaginatedToolList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateTool**
> ResponseAsyncTool | ResponseTool partialUpdateTool()

Update one or more fields of an existing tool without affecting other fields.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiPartialUpdateToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiPartialUpdateToolRequest = {
  
  toolId: 1,
  
  patchedToolRequest: {
    name: "name_example",
    description: "description_example",
    type: "type_example",
    jsonSchema: {
      "key": null,
    },
    active: true,
  },
};

const data = await apiInstance.partialUpdateTool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedToolRequest** | **PatchedToolRequest**|  |
 **toolId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncTool | ResponseTool**

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

# **removeKnowledgeBaseFromATool**
> void removeKnowledgeBaseFromATool()

Remove a specific knowledge base from a tool in your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiRemoveKnowledgeBaseFromAToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiRemoveKnowledgeBaseFromAToolRequest = {
  
  kbId: 1,
  
  toolId: 1,
};

const data = await apiInstance.removeKnowledgeBaseFromATool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbId** | [**number**] |  | defaults to undefined
 **toolId** | [**number**] |  | defaults to undefined


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
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retriveTool**
> ResponseRetrieveTool retriveTool()

Retrieve details from a specific tool in your account.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiRetriveToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiRetriveToolRequest = {
  
  toolId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retriveTool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveTool**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTool**
> ResponseAsyncTool | ResponseTool updateTool(toolRequest)

Update an existing tool. This replaces the entire tool with the new data provided.

### Example


```typescript
import { createConfiguration, AIStudioToolsApi } from '';
import type { AIStudioToolsApiUpdateToolRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioToolsApi(configuration);

const request: AIStudioToolsApiUpdateToolRequest = {
  
  toolId: 1,
  
  toolRequest: {
    name: "name_example",
    description: "description_example",
    type: "type_example",
    jsonSchema: {
      "key": null,
    },
    active: true,
  },
};

const data = await apiInstance.updateTool(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolRequest** | **ToolRequest**|  |
 **toolId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncTool | ResponseTool**

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


