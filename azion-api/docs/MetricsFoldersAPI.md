# \MetricsFoldersAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFolder**](MetricsFoldersAPI.md#CreateFolder) | **Post** /metrics/folders | Create a new folder
[**DeleteFolder**](MetricsFoldersAPI.md#DeleteFolder) | **Delete** /metrics/folders/{folder_id} | Delete a folder
[**ListFolders**](MetricsFoldersAPI.md#ListFolders) | **Get** /metrics/folders | List of the folders
[**PartialUpdateFolder**](MetricsFoldersAPI.md#PartialUpdateFolder) | **Patch** /metrics/folders/{folder_id} | Partially update a folder
[**RetrieveFolder**](MetricsFoldersAPI.md#RetrieveFolder) | **Get** /metrics/folders/{folder_id} | Retrieve details from a folder
[**UpdateFolder**](MetricsFoldersAPI.md#UpdateFolder) | **Put** /metrics/folders/{folder_id} | Update a folder



## CreateFolder

> FolderResponse CreateFolder(ctx).FolderRequest(folderRequest).Execute()

Create a new folder



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	folderRequest := *openapiclient.NewFolderRequest("Name_example", "Scope_example") // FolderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.CreateFolder(context.Background()).FolderRequest(folderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.CreateFolder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFolder`: FolderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.CreateFolder`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFolderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderRequest** | [**FolderRequest**](FolderRequest.md) |  | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFolder

> DeleteResponse DeleteFolder(ctx, folderId).Execute()

Delete a folder



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	folderId := int64(789) // int64 | The unique identifier of the folder

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.DeleteFolder(context.Background(), folderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.DeleteFolder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFolder`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.DeleteFolder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFolderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFolders

> PaginatedFolderListResponseList ListFolders(ctx).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of the folders



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.ListFolders(context.Background()).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.ListFolders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFolders`: PaginatedFolderListResponseList
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.ListFolders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFoldersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFolderListResponseList**](PaginatedFolderListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFolder

> FolderResponse PartialUpdateFolder(ctx, folderId).PatchedFolderRequest(patchedFolderRequest).Execute()

Partially update a folder



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	folderId := int64(789) // int64 | The unique identifier of the folder
	patchedFolderRequest := *openapiclient.NewPatchedFolderRequest() // PatchedFolderRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.PartialUpdateFolder(context.Background(), folderId).PatchedFolderRequest(patchedFolderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.PartialUpdateFolder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFolder`: FolderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.PartialUpdateFolder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFolderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedFolderRequest** | [**PatchedFolderRequest**](PatchedFolderRequest.md) |  | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFolder

> FolderResponse RetrieveFolder(ctx, folderId).Fields(fields).Execute()

Retrieve details from a folder



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	folderId := int64(789) // int64 | The unique identifier of the folder
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.RetrieveFolder(context.Background(), folderId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.RetrieveFolder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFolder`: FolderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.RetrieveFolder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFolderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFolder

> FolderResponse UpdateFolder(ctx, folderId).FolderRequest(folderRequest).Execute()

Update a folder



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	folderId := int64(789) // int64 | The unique identifier of the folder
	folderRequest := *openapiclient.NewFolderRequest("Name_example", "Scope_example") // FolderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsFoldersAPI.UpdateFolder(context.Background(), folderId).FolderRequest(folderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsFoldersAPI.UpdateFolder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFolder`: FolderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsFoldersAPI.UpdateFolder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFolderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **folderRequest** | [**FolderRequest**](FolderRequest.md) |  | 

### Return type

[**FolderResponse**](FolderResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

