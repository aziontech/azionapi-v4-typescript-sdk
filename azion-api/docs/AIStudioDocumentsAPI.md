# .AIStudioDocumentsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](AIStudioDocumentsApi.md#createDocument) | **POST** /workspace/ai/kbs/{kb_id}/documents | Create a document
[**destroyADocument**](AIStudioDocumentsApi.md#destroyADocument) | **DELETE** /workspace/ai/kbs/{kb_id}/documents/{document_id} | Destroy a document
[**listDocuments**](AIStudioDocumentsApi.md#listDocuments) | **GET** /workspace/ai/kbs/{kb_id}/documents | List documents
[**retriveDocument**](AIStudioDocumentsApi.md#retriveDocument) | **GET** /workspace/ai/kbs/{kb_id}/documents/{document_id} | Retrieve details from a document
[**updateDocument**](AIStudioDocumentsApi.md#updateDocument) | **PUT** /workspace/ai/kbs/{kb_id}/documents/{document_id} | Update a document


# **createDocument**
> ResponseDocument | ResponseAsyncDocument createDocument()

Create a new document for your account.

### Example


```typescript
import { createConfiguration, AIStudioDocumentsApi } from '';
import type { AIStudioDocumentsApiCreateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioDocumentsApi(configuration);

const request: AIStudioDocumentsApiCreateDocumentRequest = {
  
  kbId: 1,
  
  name: "name_example",
  
  description: "description_example",
  
  type: "type_example",
  
  sourceUri: "sourceUri_example",
  
  chunkStrategy: {
    "key": null,
  },
};

const data = await apiInstance.createDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbId** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **sourceUri** | [**string**] |  | (optional) defaults to undefined
 **chunkStrategy** | **{ [key: string]: any; }** |  | (optional) defaults to undefined


### Return type

**ResponseDocument | ResponseAsyncDocument**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded, application/json
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

# **destroyADocument**
> ResponseAsyncDeleteDocument | ResponseDeleteDocument destroyADocument()

Destruction of a specific document in your account.

### Example


```typescript
import { createConfiguration, AIStudioDocumentsApi } from '';
import type { AIStudioDocumentsApiDestroyADocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioDocumentsApi(configuration);

const request: AIStudioDocumentsApiDestroyADocumentRequest = {
  
  documentId: 1,
  
  kbId: 1,
};

const data = await apiInstance.destroyADocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**number**] |  | defaults to undefined
 **kbId** | [**number**] |  | defaults to undefined


### Return type

**ResponseAsyncDeleteDocument | ResponseDeleteDocument**

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

# **listDocuments**
> PaginatedDocumentList listDocuments()

List all documents owned by your account.

### Example


```typescript
import { createConfiguration, AIStudioDocumentsApi } from '';
import type { AIStudioDocumentsApiListDocumentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioDocumentsApi(configuration);

const request: AIStudioDocumentsApiListDocumentsRequest = {
  
  kbId: 1,
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

const data = await apiInstance.listDocuments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedDocumentList**

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

# **retriveDocument**
> ResponseRetrieveDocument retriveDocument()

Retrieve details from a specific document in your account.

### Example


```typescript
import { createConfiguration, AIStudioDocumentsApi } from '';
import type { AIStudioDocumentsApiRetriveDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioDocumentsApi(configuration);

const request: AIStudioDocumentsApiRetriveDocumentRequest = {
  
  documentId: 1,
  
  kbId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retriveDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**number**] |  | defaults to undefined
 **kbId** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveDocument**

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

# **updateDocument**
> ResponseDocument | ResponseAsyncDocument updateDocument()

Update an existing document. This replaces the entire document with the new data provided.

### Example


```typescript
import { createConfiguration, AIStudioDocumentsApi } from '';
import type { AIStudioDocumentsApiUpdateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AIStudioDocumentsApi(configuration);

const request: AIStudioDocumentsApiUpdateDocumentRequest = {
  
  documentId: 1,
  
  kbId: 1,
  
  name: "name_example",
  
  description: "description_example",
  
  type: "type_example",
  
  sourceUri: "sourceUri_example",
  
  chunkStrategy: {
    "key": null,
  },
};

const data = await apiInstance.updateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | [**number**] |  | defaults to undefined
 **kbId** | [**number**] |  | defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **sourceUri** | [**string**] |  | (optional) defaults to undefined
 **chunkStrategy** | **{ [key: string]: any; }** |  | (optional) defaults to undefined


### Return type

**ResponseDocument | ResponseAsyncDocument**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded, application/json
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


