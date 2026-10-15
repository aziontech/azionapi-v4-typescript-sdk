# \AIStudioChatThreadsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateChatThread**](AIStudioChatThreadsAPI.md#CreateChatThread) | **Post** /workspace/ai/threads | Create a chat thread
[**DestroyAChatThread**](AIStudioChatThreadsAPI.md#DestroyAChatThread) | **Delete** /workspace/ai/threads/{thread_id} | Destroy a chat thread
[**ListChatThreads**](AIStudioChatThreadsAPI.md#ListChatThreads) | **Get** /workspace/ai/threads | List chat threads
[**PartialUpdateChatThread**](AIStudioChatThreadsAPI.md#PartialUpdateChatThread) | **Patch** /workspace/ai/threads/{thread_id} | Partially update a chat thread
[**RetriveChatThread**](AIStudioChatThreadsAPI.md#RetriveChatThread) | **Get** /workspace/ai/threads/{thread_id} | Retrieve details from a chat thread
[**UpdateChatThread**](AIStudioChatThreadsAPI.md#UpdateChatThread) | **Put** /workspace/ai/threads/{thread_id} | Update a chat thread



## CreateChatThread

> ResponseChatThread CreateChatThread(ctx).ChatThreadRequest(chatThreadRequest).Execute()

Create a chat thread



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
	chatThreadRequest := *openapiclient.NewChatThreadRequest() // ChatThreadRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.CreateChatThread(context.Background()).ChatThreadRequest(chatThreadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.CreateChatThread``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChatThread`: ResponseChatThread
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.CreateChatThread`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateChatThreadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chatThreadRequest** | [**ChatThreadRequest**](ChatThreadRequest.md) |  | 

### Return type

[**ResponseChatThread**](ResponseChatThread.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DestroyAChatThread

> ResponseDeleteChatThread DestroyAChatThread(ctx, threadId).Execute()

Destroy a chat thread



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
	threadId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.DestroyAChatThread(context.Background(), threadId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.DestroyAChatThread``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DestroyAChatThread`: ResponseDeleteChatThread
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.DestroyAChatThread`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDestroyAChatThreadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteChatThread**](ResponseDeleteChatThread.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListChatThreads

> PaginatedChatThreadList ListChatThreads(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List chat threads



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
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.ListChatThreads(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.ListChatThreads``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListChatThreads`: PaginatedChatThreadList
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.ListChatThreads`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListChatThreadsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedChatThreadList**](PaginatedChatThreadList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateChatThread

> ResponseChatThread PartialUpdateChatThread(ctx, threadId).PatchedChatThreadRequest(patchedChatThreadRequest).Execute()

Partially update a chat thread



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
	threadId := int64(789) // int64 | 
	patchedChatThreadRequest := *openapiclient.NewPatchedChatThreadRequest() // PatchedChatThreadRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.PartialUpdateChatThread(context.Background(), threadId).PatchedChatThreadRequest(patchedChatThreadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.PartialUpdateChatThread``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateChatThread`: ResponseChatThread
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.PartialUpdateChatThread`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateChatThreadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedChatThreadRequest** | [**PatchedChatThreadRequest**](PatchedChatThreadRequest.md) |  | 

### Return type

[**ResponseChatThread**](ResponseChatThread.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetriveChatThread

> ResponseRetrieveChatThread RetriveChatThread(ctx, threadId).Fields(fields).Execute()

Retrieve details from a chat thread



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
	threadId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.RetriveChatThread(context.Background(), threadId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.RetriveChatThread``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetriveChatThread`: ResponseRetrieveChatThread
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.RetriveChatThread`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetriveChatThreadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveChatThread**](ResponseRetrieveChatThread.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateChatThread

> ResponseChatThread UpdateChatThread(ctx, threadId).ChatThreadRequest(chatThreadRequest).Execute()

Update a chat thread



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
	threadId := int64(789) // int64 | 
	chatThreadRequest := *openapiclient.NewChatThreadRequest() // ChatThreadRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioChatThreadsAPI.UpdateChatThread(context.Background(), threadId).ChatThreadRequest(chatThreadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioChatThreadsAPI.UpdateChatThread``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateChatThread`: ResponseChatThread
	fmt.Fprintf(os.Stdout, "Response from `AIStudioChatThreadsAPI.UpdateChatThread`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateChatThreadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **chatThreadRequest** | [**ChatThreadRequest**](ChatThreadRequest.md) |  | 

### Return type

[**ResponseChatThread**](ResponseChatThread.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

