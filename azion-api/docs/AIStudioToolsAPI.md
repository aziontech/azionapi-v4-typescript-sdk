# \AIStudioToolsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddKnowledgeBaseToATool**](AIStudioToolsAPI.md#AddKnowledgeBaseToATool) | **Post** /workspace/ai/tools/{tool_id}/kbs | Add a knowledge base to a tool
[**CreateTool**](AIStudioToolsAPI.md#CreateTool) | **Post** /workspace/ai/tools | Create a tool
[**DestroyATool**](AIStudioToolsAPI.md#DestroyATool) | **Delete** /workspace/ai/tools/{tool_id} | Destroy a tool
[**ListKnowledgeBasesLinkedToATool**](AIStudioToolsAPI.md#ListKnowledgeBasesLinkedToATool) | **Get** /workspace/ai/tools/{tool_id}/kbs | List knowledge bases linked to a tool
[**ListTools**](AIStudioToolsAPI.md#ListTools) | **Get** /workspace/ai/tools | List tools
[**PartialUpdateTool**](AIStudioToolsAPI.md#PartialUpdateTool) | **Patch** /workspace/ai/tools/{tool_id} | Partially update a tool
[**RemoveKnowledgeBaseFromATool**](AIStudioToolsAPI.md#RemoveKnowledgeBaseFromATool) | **Delete** /workspace/ai/tools/{tool_id}/kbs/{kb_id} | Remove a knowledge base from a tool
[**RetriveTool**](AIStudioToolsAPI.md#RetriveTool) | **Get** /workspace/ai/tools/{tool_id} | Retrieve details from a tool
[**UpdateTool**](AIStudioToolsAPI.md#UpdateTool) | **Put** /workspace/ai/tools/{tool_id} | Update a tool



## AddKnowledgeBaseToATool

> ToolKBLink AddKnowledgeBaseToATool(ctx, toolId).ToolRequest(toolRequest).Execute()

Add a knowledge base to a tool



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
	toolId := int64(789) // int64 | 
	toolRequest := *openapiclient.NewToolRequest("Name_example", "Type_example") // ToolRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.AddKnowledgeBaseToATool(context.Background(), toolId).ToolRequest(toolRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.AddKnowledgeBaseToATool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddKnowledgeBaseToATool`: ToolKBLink
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.AddKnowledgeBaseToATool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddKnowledgeBaseToAToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **toolRequest** | [**ToolRequest**](ToolRequest.md) |  | 

### Return type

[**ToolKBLink**](ToolKBLink.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTool

> ResponseTool CreateTool(ctx).ToolRequest(toolRequest).Execute()

Create a tool



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
	toolRequest := *openapiclient.NewToolRequest("Name_example", "Type_example") // ToolRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.CreateTool(context.Background()).ToolRequest(toolRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.CreateTool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTool`: ResponseTool
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.CreateTool`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **toolRequest** | [**ToolRequest**](ToolRequest.md) |  | 

### Return type

[**ResponseTool**](ResponseTool.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DestroyATool

> ResponseDeleteTool DestroyATool(ctx, toolId).Execute()

Destroy a tool



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
	toolId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.DestroyATool(context.Background(), toolId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.DestroyATool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DestroyATool`: ResponseDeleteTool
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.DestroyATool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDestroyAToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteTool**](ResponseDeleteTool.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListKnowledgeBasesLinkedToATool

> PaginatedKnowledgeBaseList ListKnowledgeBasesLinkedToATool(ctx, toolId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List knowledge bases linked to a tool



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
	toolId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.ListKnowledgeBasesLinkedToATool(context.Background(), toolId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.ListKnowledgeBasesLinkedToATool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListKnowledgeBasesLinkedToATool`: PaginatedKnowledgeBaseList
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.ListKnowledgeBasesLinkedToATool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListKnowledgeBasesLinkedToAToolRequest struct via the builder pattern


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


## ListTools

> PaginatedToolList ListTools(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List tools



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
	resp, r, err := apiClient.AIStudioToolsAPI.ListTools(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.ListTools``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTools`: PaginatedToolList
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.ListTools`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListToolsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedToolList**](PaginatedToolList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateTool

> ResponseTool PartialUpdateTool(ctx, toolId).PatchedToolRequest(patchedToolRequest).Execute()

Partially update a tool



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
	toolId := int64(789) // int64 | 
	patchedToolRequest := *openapiclient.NewPatchedToolRequest() // PatchedToolRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.PartialUpdateTool(context.Background(), toolId).PatchedToolRequest(patchedToolRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.PartialUpdateTool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateTool`: ResponseTool
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.PartialUpdateTool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedToolRequest** | [**PatchedToolRequest**](PatchedToolRequest.md) |  | 

### Return type

[**ResponseTool**](ResponseTool.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveKnowledgeBaseFromATool

> RemoveKnowledgeBaseFromATool(ctx, kbId, toolId).Execute()

Remove a knowledge base from a tool



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
	toolId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AIStudioToolsAPI.RemoveKnowledgeBaseFromATool(context.Background(), kbId, toolId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.RemoveKnowledgeBaseFromATool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kbId** | **int64** |  | 
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveKnowledgeBaseFromAToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetriveTool

> ResponseRetrieveTool RetriveTool(ctx, toolId).Fields(fields).Execute()

Retrieve details from a tool



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
	toolId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.RetriveTool(context.Background(), toolId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.RetriveTool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetriveTool`: ResponseRetrieveTool
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.RetriveTool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetriveToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveTool**](ResponseRetrieveTool.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTool

> ResponseTool UpdateTool(ctx, toolId).ToolRequest(toolRequest).Execute()

Update a tool



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
	toolId := int64(789) // int64 | 
	toolRequest := *openapiclient.NewToolRequest("Name_example", "Type_example") // ToolRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AIStudioToolsAPI.UpdateTool(context.Background(), toolId).ToolRequest(toolRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AIStudioToolsAPI.UpdateTool``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTool`: ResponseTool
	fmt.Fprintf(os.Stdout, "Response from `AIStudioToolsAPI.UpdateTool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toolId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateToolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **toolRequest** | [**ToolRequest**](ToolRequest.md) |  | 

### Return type

[**ResponseTool**](ResponseTool.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

