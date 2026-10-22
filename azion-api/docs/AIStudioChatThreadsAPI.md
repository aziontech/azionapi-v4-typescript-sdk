# .AIStudioChatThreadsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChatThread**](AIStudioChatThreadsApi.md#createChatThread) | **POST** /workspace/ai/threads | Create a chat thread
[**destroyAChatThread**](AIStudioChatThreadsApi.md#destroyAChatThread) | **DELETE** /workspace/ai/threads/{thread_id} | Destroy a chat thread
[**listChatThreads**](AIStudioChatThreadsApi.md#listChatThreads) | **GET** /workspace/ai/threads | List chat threads
[**partialUpdateChatThread**](AIStudioChatThreadsApi.md#partialUpdateChatThread) | **PATCH** /workspace/ai/threads/{thread_id} | Partially update a chat thread
[**retriveChatThread**](AIStudioChatThreadsApi.md#retriveChatThread) | **GET** /workspace/ai/threads/{thread_id} | Retrieve details from a chat thread
[**updateChatThread**](AIStudioChatThreadsApi.md#updateChatThread) | **PUT** /workspace/ai/threads/{thread_id} | Update a chat thread


# **createChatThread**
> ResponseChatThread | ResponseAsyncChatThread createChatThread()

Create a new chat thread for your account.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiCreateChatThreadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiCreateChatThreadRequest = {
  
  chatThreadRequest: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.createChatThread(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatThreadRequest** | **ChatThreadRequest**|  |


### Return type

**ResponseChatThread | ResponseAsyncChatThread**

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

# **destroyAChatThread**
> ResponseDeleteChatThread | ResponseAsyncDeleteChatThread destroyAChatThread()

Destruction of a specific chat thread in your account.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiDestroyAChatThreadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiDestroyAChatThreadRequest = {
  
  threadId: 1,
};

const data = await apiInstance.destroyAChatThread(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseDeleteChatThread | ResponseAsyncDeleteChatThread**

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

# **listChatThreads**
> PaginatedChatThreadList listChatThreads()

List all chat threads owned by your account.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiListChatThreadsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiListChatThreadsRequest = {
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

const data = await apiInstance.listChatThreads(request);
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

**PaginatedChatThreadList**

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

# **partialUpdateChatThread**
> ResponseChatThread | ResponseAsyncChatThread partialUpdateChatThread()

Update one or more fields of an existing chat thread without affecting other fields.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiPartialUpdateChatThreadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiPartialUpdateChatThreadRequest = {
  
  threadId: 1,
  
  patchedChatThreadRequest: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.partialUpdateChatThread(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedChatThreadRequest** | **PatchedChatThreadRequest**|  |
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseChatThread | ResponseAsyncChatThread**

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

# **retriveChatThread**
> ResponseRetrieveChatThread retriveChatThread()

Retrieve details from a specific chat thread in your account.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiRetriveChatThreadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiRetriveChatThreadRequest = {
  
  threadId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retriveChatThread(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveChatThread**

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

# **updateChatThread**
> ResponseChatThread | ResponseAsyncChatThread updateChatThread()

Update an existing chat thread. This replaces the entire chat thread with the new data provided.

### Example


```typescript
import { createConfiguration, AIStudioChatThreadsApi } from '';
import type { AIStudioChatThreadsApiUpdateChatThreadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioChatThreadsApi(configuration);

const request: AIStudioChatThreadsApiUpdateChatThreadRequest = {
  
  threadId: 1,
  
  chatThreadRequest: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.updateChatThread(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatThreadRequest** | **ChatThreadRequest**|  |
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseChatThread | ResponseAsyncChatThread**

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


