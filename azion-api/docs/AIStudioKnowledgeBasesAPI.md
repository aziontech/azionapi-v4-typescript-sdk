# \AIStudioKnowledgeBasesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AskKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#AskKnowledgeBase) | **Post** /workspace/ai/kbs/{kb_id}/ask | Ask the knowledge base
[**CreateKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#CreateKnowledgeBase) | **Post** /workspace/ai/kbs | Create a knowledge base
[**DestroyAKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#DestroyAKnowledgeBase) | **Delete** /workspace/ai/kbs/{kb_id} | Destroy a knowledge base
[**ListKnowledgeBases**](AIStudioKnowledgeBasesAPI.md#ListKnowledgeBases) | **Get** /workspace/ai/kbs | List knowledge bases
[**PartialUpdateKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#PartialUpdateKnowledgeBase) | **Patch** /workspace/ai/kbs/{kb_id} | Partially update a knowledge base
[**QueryChunkFromKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#QueryChunkFromKnowledgeBase) | **Post** /workspace/ai/kbs/{kb_id}/query | Query a chunk from a knowledge base
[**RetriveKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#RetriveKnowledgeBase) | **Get** /workspace/ai/kbs/{kb_id} | Retrieve details from a knowledge base
[**UpdateKnowledgeBase**](AIStudioKnowledgeBasesAPI.md#UpdateKnowledgeBase) | **Put** /workspace/ai/kbs/{kb_id} | Update a knowledge base



## AskKnowledgeBase

> KBAskResponse AskKnowledgeBase(ctx, kbId).KBAskRequest(kBAskRequest).Execute()

Ask the knowledge base



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
	kbId := int64(789) // int64 | 
	kBAskRequest := *openapiclient.NewKBAskRequest("Question_example") // KBAskRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.AskKnowledgeBase(context.Background(), kbId).KBAskRequest(kBAskRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.AskKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AskKnowledgeBase`: KBAskResponse
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.AskKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAskKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **kBAskRequest** | [**KBAskRequest**](KBAskRequest.md) |  | 

### Return type

[**KBAskResponse**](KBAskResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateKnowledgeBase

> ResponseKnowledgeBase CreateKnowledgeBase(ctx).KnowledgeBaseRequest(knowledgeBaseRequest).Execute()

Create a knowledge base



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
	knowledgeBaseRequest := *openapiclient.NewKnowledgeBaseRequest("Name_example") // KnowledgeBaseRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.CreateKnowledgeBase(context.Background()).KnowledgeBaseRequest(knowledgeBaseRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.CreateKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateKnowledgeBase`: ResponseKnowledgeBase
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.CreateKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **knowledgeBaseRequest** | [**KnowledgeBaseRequest**](KnowledgeBaseRequest.md) |  | 

### Return type

[**ResponseKnowledgeBase**](ResponseKnowledgeBase.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DestroyAKnowledgeBase

> ResponseDeleteKnowledgeBase DestroyAKnowledgeBase(ctx, kbId).Execute()

Destroy a knowledge base



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
	kbId := "kbId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.DestroyAKnowledgeBase(context.Background(), kbId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.DestroyAKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DestroyAKnowledgeBase`: ResponseDeleteKnowledgeBase
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.DestroyAKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDestroyAKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteKnowledgeBase**](ResponseDeleteKnowledgeBase.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListKnowledgeBases

> PaginatedKnowledgeBaseList ListKnowledgeBases(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List knowledge bases



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
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.ListKnowledgeBases(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.ListKnowledgeBases``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListKnowledgeBases`: PaginatedKnowledgeBaseList
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.ListKnowledgeBases`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListKnowledgeBasesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedKnowledgeBaseList**](PaginatedKnowledgeBaseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateKnowledgeBase

> ResponseKnowledgeBase PartialUpdateKnowledgeBase(ctx, kbId).PatchedKnowledgeBaseRequest(patchedKnowledgeBaseRequest).Execute()

Partially update a knowledge base



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
	kbId := "kbId_example" // string | 
	patchedKnowledgeBaseRequest := *openapiclient.NewPatchedKnowledgeBaseRequest() // PatchedKnowledgeBaseRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.PartialUpdateKnowledgeBase(context.Background(), kbId).PatchedKnowledgeBaseRequest(patchedKnowledgeBaseRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.PartialUpdateKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateKnowledgeBase`: ResponseKnowledgeBase
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.PartialUpdateKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedKnowledgeBaseRequest** | [**PatchedKnowledgeBaseRequest**](PatchedKnowledgeBaseRequest.md) |  | 

### Return type

[**ResponseKnowledgeBase**](ResponseKnowledgeBase.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## QueryChunkFromKnowledgeBase

> KBQueryResponse QueryChunkFromKnowledgeBase(ctx, kbId).KBQueryRequest(kBQueryRequest).Execute()

Query a chunk from a knowledge base



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
	kbId := int64(789) // int64 | 
	kBQueryRequest := *openapiclient.NewKBQueryRequest("Query_example") // KBQueryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.QueryChunkFromKnowledgeBase(context.Background(), kbId).KBQueryRequest(kBQueryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.QueryChunkFromKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `QueryChunkFromKnowledgeBase`: KBQueryResponse
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.QueryChunkFromKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiQueryChunkFromKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **kBQueryRequest** | [**KBQueryRequest**](KBQueryRequest.md) |  | 

### Return type

[**KBQueryResponse**](KBQueryResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetriveKnowledgeBase

> ResponseRetrieveKnowledgeBase RetriveKnowledgeBase(ctx, kbId).Fields(fields).Execute()

Retrieve details from a knowledge base



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
	kbId := "kbId_example" // string | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.RetriveKnowledgeBase(context.Background(), kbId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.RetriveKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetriveKnowledgeBase`: ResponseRetrieveKnowledgeBase
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.RetriveKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetriveKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveKnowledgeBase**](ResponseRetrieveKnowledgeBase.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateKnowledgeBase

> ResponseKnowledgeBase UpdateKnowledgeBase(ctx, kbId).KnowledgeBaseRequest(knowledgeBaseRequest).Execute()

Update a knowledge base



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
	kbId := "kbId_example" // string | 
	knowledgeBaseRequest := *openapiclient.NewKnowledgeBaseRequest("Name_example") // KnowledgeBaseRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioKnowledgeBasesAPI.UpdateKnowledgeBase(context.Background(), kbId).KnowledgeBaseRequest(knowledgeBaseRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioKnowledgeBasesAPI.UpdateKnowledgeBase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateKnowledgeBase`: ResponseKnowledgeBase
	fmt.Fprintf(os.Stdout, "Response from `AIStudioKnowledgeBasesAPI.UpdateKnowledgeBase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateKnowledgeBaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **knowledgeBaseRequest** | [**KnowledgeBaseRequest**](KnowledgeBaseRequest.md) |  | 

### Return type

[**ResponseKnowledgeBase**](ResponseKnowledgeBase.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

