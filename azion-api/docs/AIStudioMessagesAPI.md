# .AIStudioMessagesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessage**](AIStudioMessagesApi.md#createMessage) | **POST** /workspace/ai/threads/{thread_id}/messages | Create a message
[**destroyAMessage**](AIStudioMessagesApi.md#destroyAMessage) | **DELETE** /workspace/ai/threads/{thread_id}/messages/{message_id} | Destroy a message
[**listMessages**](AIStudioMessagesApi.md#listMessages) | **GET** /workspace/ai/threads/{thread_id}/messages | List messages
[**retriveMessage**](AIStudioMessagesApi.md#retriveMessage) | **GET** /workspace/ai/threads/{thread_id}/messages/{message_id} | Retrieve details from a message
[**updateMessage**](AIStudioMessagesApi.md#updateMessage) | **PUT** /workspace/ai/threads/{thread_id}/messages/{message_id} | Update a message


# **createMessage**
> ResponseMessage | ResponseAsyncMessage createMessage(messageRequest)

Create a new message for your account.

### Example


```typescript
import { createConfiguration, AIStudioMessagesApi } from '';
import type { AIStudioMessagesApiCreateMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioMessagesApi(configuration);

const request: AIStudioMessagesApiCreateMessageRequest = {
  
  threadId: 1,
  
  messageRequest: {
    name: "name_example",
    description: "description_example",
    message: {
      "key": null,
    },
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.createMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageRequest** | **MessageRequest**|  |
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseMessage | ResponseAsyncMessage**

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

# **destroyAMessage**
> ResponseDeleteMessage | ResponseAsyncDeleteMessage destroyAMessage()

Destruction of a specific message in your account.

### Example


```typescript
import { createConfiguration, AIStudioMessagesApi } from '';
import type { AIStudioMessagesApiDestroyAMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioMessagesApi(configuration);

const request: AIStudioMessagesApiDestroyAMessageRequest = {
  
  messageId: 1,
  
  threadId: 1,
};

const data = await apiInstance.destroyAMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | [**number**] |  | defaults to undefined
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseDeleteMessage | ResponseAsyncDeleteMessage**

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

# **listMessages**
> PaginatedMessageList listMessages()

List all messages owned by your account.

### Example


```typescript
import { createConfiguration, AIStudioMessagesApi } from '';
import type { AIStudioMessagesApiListMessagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioMessagesApi(configuration);

const request: AIStudioMessagesApiListMessagesRequest = {
  
  threadId: 1,
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

const data = await apiInstance.listMessages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedMessageList**

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

# **retriveMessage**
> ResponseRetrieveMessage retriveMessage()

Retrieve details from a specific message in your account.

### Example


```typescript
import { createConfiguration, AIStudioMessagesApi } from '';
import type { AIStudioMessagesApiRetriveMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioMessagesApi(configuration);

const request: AIStudioMessagesApiRetriveMessageRequest = {
  
  messageId: 1,
  
  threadId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retriveMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageId** | [**number**] |  | defaults to undefined
 **threadId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveMessage**

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

# **updateMessage**
> ResponseMessage | ResponseAsyncMessage updateMessage(messageRequest)

Update an existing message. This replaces the entire message with the new data provided.

### Example


```typescript
import { createConfiguration, AIStudioMessagesApi } from '';
import type { AIStudioMessagesApiUpdateMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioMessagesApi(configuration);

const request: AIStudioMessagesApiUpdateMessageRequest = {
  
  messageId: 1,
  
  threadId: 1,
  
  messageRequest: {
    name: "name_example",
    description: "description_example",
    message: {
      "key": null,
    },
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.updateMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageRequest** | **MessageRequest**|  |
 **messageId** | [**number**] |  | defaults to undefined
 **threadId** | [**number**] |  | defaults to undefined


### Return type

**ResponseMessage | ResponseAsyncMessage**

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


