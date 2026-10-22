# .AIStudioKnowledgeBasesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**askKnowledgeBase**](AIStudioKnowledgeBasesApi.md#askKnowledgeBase) | **POST** /workspace/ai/kbs/{kb_id}/ask | Ask the knowledge base
[**createKnowledgeBase**](AIStudioKnowledgeBasesApi.md#createKnowledgeBase) | **POST** /workspace/ai/kbs | Create a knowledge base
[**destroyAKnowledgeBase**](AIStudioKnowledgeBasesApi.md#destroyAKnowledgeBase) | **DELETE** /workspace/ai/kbs/{kb_id} | Destroy a knowledge base
[**listKnowledgeBases**](AIStudioKnowledgeBasesApi.md#listKnowledgeBases) | **GET** /workspace/ai/kbs | List knowledge bases
[**partialUpdateKnowledgeBase**](AIStudioKnowledgeBasesApi.md#partialUpdateKnowledgeBase) | **PATCH** /workspace/ai/kbs/{kb_id} | Partially update a knowledge base
[**queryChunkFromKnowledgeBase**](AIStudioKnowledgeBasesApi.md#queryChunkFromKnowledgeBase) | **POST** /workspace/ai/kbs/{kb_id}/query | Query a chunk from a knowledge base
[**retriveKnowledgeBase**](AIStudioKnowledgeBasesApi.md#retriveKnowledgeBase) | **GET** /workspace/ai/kbs/{kb_id} | Retrieve details from a knowledge base
[**updateKnowledgeBase**](AIStudioKnowledgeBasesApi.md#updateKnowledgeBase) | **PUT** /workspace/ai/kbs/{kb_id} | Update a knowledge base


# **askKnowledgeBase**
> KBAskResponse askKnowledgeBase(kBAskRequest)

Ask a question. The agent will use RAG over this knowledge base and answer with context.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiAskKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiAskKnowledgeBaseRequest = {
  
  kbId: 1,
  
  kBAskRequest: {
    question: "question_example",
    topK: 5,
    model: "model_example",
  },
};

const data = await apiInstance.askKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kBAskRequest** | **KBAskRequest**|  |
 **kbId** | [**number**] |  | defaults to undefined


### Return type

**KBAskResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

# **createKnowledgeBase**
> ResponseAsyncKnowledgeBase | ResponseKnowledgeBase createKnowledgeBase(knowledgeBaseRequest)

Create a new knowledge base for your account.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiCreateKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiCreateKnowledgeBaseRequest = {
  
  knowledgeBaseRequest: {
    name: "GqWzyBAw2Zu",
    description: "description_example",
    embeddingModel: null,
  },
};

const data = await apiInstance.createKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **knowledgeBaseRequest** | **KnowledgeBaseRequest**|  |


### Return type

**ResponseAsyncKnowledgeBase | ResponseKnowledgeBase**

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

# **destroyAKnowledgeBase**
> ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase destroyAKnowledgeBase()

Destruction of a specific knowledge base in your account.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiDestroyAKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiDestroyAKnowledgeBaseRequest = {
  
  kbId: "4",
};

const data = await apiInstance.destroyAKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteKnowledgeBase | ResponseDeleteKnowledgeBase**

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

# **listKnowledgeBases**
> PaginatedKnowledgeBaseList listKnowledgeBases()

List all knowledge bases owned by your account.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiListKnowledgeBasesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiListKnowledgeBasesRequest = {
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

const data = await apiInstance.listKnowledgeBases(request);
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

# **partialUpdateKnowledgeBase**
> ResponseAsyncKnowledgeBase | ResponseKnowledgeBase partialUpdateKnowledgeBase()

Update one or more fields of an existing knowledge base without affecting other fields.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiPartialUpdateKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiPartialUpdateKnowledgeBaseRequest = {
  
  kbId: "4",
  
  patchedKnowledgeBaseRequest: {
    name: "GqWzyBAw2Zu",
    description: "description_example",
    embeddingModel: null,
  },
};

const data = await apiInstance.partialUpdateKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedKnowledgeBaseRequest** | **PatchedKnowledgeBaseRequest**|  |
 **kbId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncKnowledgeBase | ResponseKnowledgeBase**

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

# **queryChunkFromKnowledgeBase**
> KBQueryResponse queryChunkFromKnowledgeBase(kBQueryRequest)

Query a specific chunk from a knowledge base in your account.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiQueryChunkFromKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiQueryChunkFromKnowledgeBaseRequest = {
  
  kbId: 1,
  
  kBQueryRequest: {
    query: "query_example",
    topK: 5,
  },
};

const data = await apiInstance.queryChunkFromKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kBQueryRequest** | **KBQueryRequest**|  |
 **kbId** | [**number**] |  | defaults to undefined


### Return type

**KBQueryResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

# **retriveKnowledgeBase**
> ResponseRetrieveKnowledgeBase retriveKnowledgeBase()

Retrieve details from a specific knowledge base in your account.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiRetriveKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiRetriveKnowledgeBaseRequest = {
  
  kbId: "4",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retriveKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbId** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveKnowledgeBase**

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

# **updateKnowledgeBase**
> ResponseAsyncKnowledgeBase | ResponseKnowledgeBase updateKnowledgeBase(knowledgeBaseRequest)

Update an existing knowledge base. This replaces the entire knowledge base with the new data provided.

### Example


```typescript
import { createConfiguration, AIStudioKnowledgeBasesApi } from '';
import type { AIStudioKnowledgeBasesApiUpdateKnowledgeBaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioKnowledgeBasesApi(configuration);

const request: AIStudioKnowledgeBasesApiUpdateKnowledgeBaseRequest = {
  
  kbId: "4",
  
  knowledgeBaseRequest: {
    name: "GqWzyBAw2Zu",
    description: "description_example",
    embeddingModel: null,
  },
};

const data = await apiInstance.updateKnowledgeBase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **knowledgeBaseRequest** | **KnowledgeBaseRequest**|  |
 **kbId** | [**string**] |  | defaults to undefined


### Return type

**ResponseAsyncKnowledgeBase | ResponseKnowledgeBase**

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


