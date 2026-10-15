# \AIStudioMessagesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMessage**](AIStudioMessagesAPI.md#CreateMessage) | **Post** /workspace/ai/threads/{thread_id}/messages | Create a message
[**DestroyAMessage**](AIStudioMessagesAPI.md#DestroyAMessage) | **Delete** /workspace/ai/threads/{thread_id}/messages/{message_id} | Destroy a message
[**ListMessages**](AIStudioMessagesAPI.md#ListMessages) | **Get** /workspace/ai/threads/{thread_id}/messages | List messages
[**RetriveMessage**](AIStudioMessagesAPI.md#RetriveMessage) | **Get** /workspace/ai/threads/{thread_id}/messages/{message_id} | Retrieve details from a message
[**UpdateMessage**](AIStudioMessagesAPI.md#UpdateMessage) | **Put** /workspace/ai/threads/{thread_id}/messages/{message_id} | Update a message



## CreateMessage

> ResponseMessage CreateMessage(ctx, threadId).MessageRequest(messageRequest).Execute()

Create a message



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
	messageRequest := *openapiclient.NewMessageRequest(map[string]interface{}{"key": interface{}(123)}) // MessageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioMessagesAPI.CreateMessage(context.Background(), threadId).MessageRequest(messageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioMessagesAPI.CreateMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMessage`: ResponseMessage
	fmt.Fprintf(os.Stdout, "Response from `AIStudioMessagesAPI.CreateMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **messageRequest** | [**MessageRequest**](MessageRequest.md) |  | 

### Return type

[**ResponseMessage**](ResponseMessage.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DestroyAMessage

> ResponseDeleteMessage DestroyAMessage(ctx, messageId, threadId).Execute()

Destroy a message



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
	messageId := int64(789) // int64 | 
	threadId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioMessagesAPI.DestroyAMessage(context.Background(), messageId, threadId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioMessagesAPI.DestroyAMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DestroyAMessage`: ResponseDeleteMessage
	fmt.Fprintf(os.Stdout, "Response from `AIStudioMessagesAPI.DestroyAMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageId** | **int64** |  | 
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDestroyAMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ResponseDeleteMessage**](ResponseDeleteMessage.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListMessages

> PaginatedMessageList ListMessages(ctx, threadId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List messages



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
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioMessagesAPI.ListMessages(context.Background(), threadId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioMessagesAPI.ListMessages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMessages`: PaginatedMessageList
	fmt.Fprintf(os.Stdout, "Response from `AIStudioMessagesAPI.ListMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedMessageList**](PaginatedMessageList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetriveMessage

> ResponseRetrieveMessage RetriveMessage(ctx, messageId, threadId).Fields(fields).Execute()

Retrieve details from a message



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
	messageId := int64(789) // int64 | 
	threadId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioMessagesAPI.RetriveMessage(context.Background(), messageId, threadId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioMessagesAPI.RetriveMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetriveMessage`: ResponseRetrieveMessage
	fmt.Fprintf(os.Stdout, "Response from `AIStudioMessagesAPI.RetriveMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageId** | **int64** |  | 
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetriveMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveMessage**](ResponseRetrieveMessage.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateMessage

> ResponseMessage UpdateMessage(ctx, messageId, threadId).MessageRequest(messageRequest).Execute()

Update a message



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
	messageId := int64(789) // int64 | 
	threadId := int64(789) // int64 | 
	messageRequest := *openapiclient.NewMessageRequest(map[string]interface{}{"key": interface{}(123)}) // MessageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioMessagesAPI.UpdateMessage(context.Background(), messageId, threadId).MessageRequest(messageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioMessagesAPI.UpdateMessage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateMessage`: ResponseMessage
	fmt.Fprintf(os.Stdout, "Response from `AIStudioMessagesAPI.UpdateMessage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageId** | **int64** |  | 
**threadId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMessageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **messageRequest** | [**MessageRequest**](MessageRequest.md) |  | 

### Return type

[**ResponseMessage**](ResponseMessage.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

