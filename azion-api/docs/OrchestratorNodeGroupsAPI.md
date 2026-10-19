# \OrchestratorNodeGroupsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BindNodeGroup**](OrchestratorNodeGroupsAPI.md#BindNodeGroup) | **Post** /orchestrator/nodes/{node_id}/groups | Bind Node Group
[**CreateNodeGroup**](OrchestratorNodeGroupsAPI.md#CreateNodeGroup) | **Post** /orchestrator/nodes/groups | Create Node Group
[**ListNodeGroups**](OrchestratorNodeGroupsAPI.md#ListNodeGroups) | **Get** /orchestrator/nodes/groups | List Node Groups
[**ListNodeGroupsByID**](OrchestratorNodeGroupsAPI.md#ListNodeGroupsByID) | **Get** /orchestrator/nodes/{node_id}/groups | List Node Groups by id
[**RemoveNodeGroup**](OrchestratorNodeGroupsAPI.md#RemoveNodeGroup) | **Delete** /orchestrator/nodes/groups/{group_id} | Remove Node Group



## BindNodeGroup

> ResponseAsyncNodeGroupsById BindNodeGroup(ctx, nodeId).NodeGroupsByIdRequest(nodeGroupsByIdRequest).Execute()

Bind Node Group



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
	nodeId := int64(789) // int64 | 
	nodeGroupsByIdRequest := *openapiclient.NewNodeGroupsByIdRequest() // NodeGroupsByIdRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeGroupsAPI.BindNodeGroup(context.Background(), nodeId).NodeGroupsByIdRequest(nodeGroupsByIdRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeGroupsAPI.BindNodeGroup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BindNodeGroup`: ResponseAsyncNodeGroupsById
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeGroupsAPI.BindNodeGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiBindNodeGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nodeGroupsByIdRequest** | [**NodeGroupsByIdRequest**](NodeGroupsByIdRequest.md) |  | 

### Return type

[**ResponseAsyncNodeGroupsById**](ResponseAsyncNodeGroupsById.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateNodeGroup

> NodeGroups CreateNodeGroup(ctx).NodeGroupsRequest(nodeGroupsRequest).Execute()

Create Node Group



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
	nodeGroupsRequest := *openapiclient.NewNodeGroupsRequest("Name_example") // NodeGroupsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeGroupsAPI.CreateNodeGroup(context.Background()).NodeGroupsRequest(nodeGroupsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeGroupsAPI.CreateNodeGroup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNodeGroup`: NodeGroups
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeGroupsAPI.CreateNodeGroup`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNodeGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeGroupsRequest** | [**NodeGroupsRequest**](NodeGroupsRequest.md) |  | 

### Return type

[**NodeGroups**](NodeGroups.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListNodeGroups

> PaginatedNodeGroupsList ListNodeGroups(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Node Groups



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
	resp, r, err := apiClient.OrchestratorNodeGroupsAPI.ListNodeGroups(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeGroupsAPI.ListNodeGroups``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNodeGroups`: PaginatedNodeGroupsList
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeGroupsAPI.ListNodeGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNodeGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedNodeGroupsList**](PaginatedNodeGroupsList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListNodeGroupsByID

> PaginatedNodeGroupsByIdList ListNodeGroupsByID(ctx, nodeId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Node Groups by id



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
	nodeId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeGroupsAPI.ListNodeGroupsByID(context.Background(), nodeId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeGroupsAPI.ListNodeGroupsByID``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNodeGroupsByID`: PaginatedNodeGroupsByIdList
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeGroupsAPI.ListNodeGroupsByID`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListNodeGroupsByIDRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedNodeGroupsByIdList**](PaginatedNodeGroupsByIdList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveNodeGroup

> RemoveNodeGroup(ctx, groupId).Execute()

Remove Node Group



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
	groupId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.OrchestratorNodeGroupsAPI.RemoveNodeGroup(context.Background(), groupId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeGroupsAPI.RemoveNodeGroup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**groupId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveNodeGroupRequest struct via the builder pattern


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

