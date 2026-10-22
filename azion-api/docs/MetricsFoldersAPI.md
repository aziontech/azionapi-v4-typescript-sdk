# .MetricsFoldersApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFolder**](MetricsFoldersApi.md#createFolder) | **POST** /metrics/folders | Create a new folder
[**deleteFolder**](MetricsFoldersApi.md#deleteFolder) | **DELETE** /metrics/folders/{folder_id} | Delete a folder
[**listFolders**](MetricsFoldersApi.md#listFolders) | **GET** /metrics/folders | List of the folders
[**partialUpdateFolder**](MetricsFoldersApi.md#partialUpdateFolder) | **PATCH** /metrics/folders/{folder_id} | Partially update a folder
[**retrieveFolder**](MetricsFoldersApi.md#retrieveFolder) | **GET** /metrics/folders/{folder_id} | Retrieve details from a folder
[**updateFolder**](MetricsFoldersApi.md#updateFolder) | **PUT** /metrics/folders/{folder_id} | Update a folder


# **createFolder**
> FolderResponse createFolder(folderRequest)

Create a new folder in a given scope.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiCreateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiCreateFolderRequest = {
  
  folderRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.createFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderRequest** | **FolderRequest**|  |


### Return type

**FolderResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFolder**
> DeleteResponse deleteFolder()

Delete a specific folder.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiDeleteFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiDeleteFolderRequest = {
    // The unique identifier of the folder
  folderId: 1,
};

const data = await apiInstance.deleteFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful deletion |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFolders**
> PaginatedFolderListResponseList listFolders()

List all folders for your user.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiListFoldersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiListFoldersRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by name (case-insensitive, partial match). (optional)
  name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listFolders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFolderListResponseList**

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

# **partialUpdateFolder**
> FolderResponse partialUpdateFolder()

Update one or more fields of an existing folder without affecting other fields.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiPartialUpdateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiPartialUpdateFolderRequest = {
    // The unique identifier of the folder
  folderId: 1,
  
  patchedFolderRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.partialUpdateFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFolderRequest** | **PatchedFolderRequest**|  |
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**FolderResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFolder**
> FolderResponse retrieveFolder()

Retrieve details from a specific folder.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiRetrieveFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiRetrieveFolderRequest = {
    // The unique identifier of the folder
  folderId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FolderResponse**

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

# **updateFolder**
> FolderResponse updateFolder(folderRequest)

Update an existing folder. This replaces the entire folder with the new data provided.

### Example


```typescript
import { createConfiguration, MetricsFoldersApi } from '';
import type { MetricsFoldersApiUpdateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsFoldersApi(configuration);

const request: MetricsFoldersApiUpdateFolderRequest = {
    // The unique identifier of the folder
  folderId: 1,
  
  folderRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.updateFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderRequest** | **FolderRequest**|  |
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**FolderResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


