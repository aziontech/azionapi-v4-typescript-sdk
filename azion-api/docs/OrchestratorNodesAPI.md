# \OrchestratorNodesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteNode**](OrchestratorNodesAPI.md#DeleteNode) | **Delete** /orchestrator/nodes/{node_id} | Delete an Node
[**ListNodes**](OrchestratorNodesAPI.md#ListNodes) | **Get** /orchestrator/nodes | List Nodes
[**PartialUpdateNode**](OrchestratorNodesAPI.md#PartialUpdateNode) | **Patch** /orchestrator/nodes/{node_id} | Partially update an Node
[**PartialUpdateNode2**](OrchestratorNodesAPI.md#PartialUpdateNode2) | **Patch** /orchestrator/nodes/{node_id}/ | Partially update an Node
[**RetrieveNode**](OrchestratorNodesAPI.md#RetrieveNode) | **Get** /orchestrator/nodes/{node_id} | Retrieve details of an Node
[**RetrieveNode2**](OrchestratorNodesAPI.md#RetrieveNode2) | **Get** /orchestrator/nodes/{node_id}/ | Retrieve details of an Node
[**UpdateNode**](OrchestratorNodesAPI.md#UpdateNode) | **Put** /orchestrator/nodes/{node_id} | Update an Node
[**UpdateNode2**](OrchestratorNodesAPI.md#UpdateNode2) | **Put** /orchestrator/nodes/{node_id}/ | Update an Node



## DeleteNode

> ResponseAsyncDeleteNodes DeleteNode(ctx, nodeId).Execute()

Delete an Node



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
	nodeId := "nodeId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.DeleteNode(context.Background(), nodeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.DeleteNode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteNode`: ResponseAsyncDeleteNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.DeleteNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseAsyncDeleteNodes**](ResponseAsyncDeleteNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListNodes

> PaginatedNodesList ListNodes(ctx).Fields(fields).HashId(hashId).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Nodes



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
	hashId := "hashId_example" // string | Search by hash_id (optional)
	name := "name_example" // string | Search by name (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.ListNodes(context.Background()).Fields(fields).HashId(hashId).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.ListNodes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNodes`: PaginatedNodesList
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.ListNodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **hashId** | **string** | Search by hash_id | 
 **name** | **string** | Search by name | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedNodesList**](PaginatedNodesList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateNode

> ResponseAsyncNodes PartialUpdateNode(ctx, nodeId).PatchedNodesRequest(patchedNodesRequest).Execute()

Partially update an Node



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
	nodeId := "nodeId_example" // string | 
	patchedNodesRequest := *openapiclient.NewPatchedNodesRequest() // PatchedNodesRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.PartialUpdateNode(context.Background(), nodeId).PatchedNodesRequest(patchedNodesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.PartialUpdateNode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateNode`: ResponseAsyncNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.PartialUpdateNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedNodesRequest** | [**PatchedNodesRequest**](PatchedNodesRequest.md) |  | 

### Return type

[**ResponseAsyncNodes**](ResponseAsyncNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateNode2

> ResponseAsyncNodes PartialUpdateNode2(ctx, nodeId).PatchedNodesRequest(patchedNodesRequest).Execute()

Partially update an Node



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
	patchedNodesRequest := *openapiclient.NewPatchedNodesRequest() // PatchedNodesRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.PartialUpdateNode2(context.Background(), nodeId).PatchedNodesRequest(patchedNodesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.PartialUpdateNode2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateNode2`: ResponseAsyncNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.PartialUpdateNode2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateNode2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedNodesRequest** | [**PatchedNodesRequest**](PatchedNodesRequest.md) |  | 

### Return type

[**ResponseAsyncNodes**](ResponseAsyncNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveNode

> ResponseRetrieveNodes RetrieveNode(ctx, nodeId).Fields(fields).Execute()

Retrieve details of an Node



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
	nodeId := "nodeId_example" // string | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.RetrieveNode(context.Background(), nodeId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.RetrieveNode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveNode`: ResponseRetrieveNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.RetrieveNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveNodes**](ResponseRetrieveNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveNode2

> ResponseRetrieveNodes RetrieveNode2(ctx, nodeId).Fields(fields).Execute()

Retrieve details of an Node



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.RetrieveNode2(context.Background(), nodeId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.RetrieveNode2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveNode2`: ResponseRetrieveNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.RetrieveNode2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveNode2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveNodes**](ResponseRetrieveNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateNode

> ResponseAsyncNodes UpdateNode(ctx, nodeId).NodesRequest(nodesRequest).Execute()

Update an Node



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
	nodeId := "nodeId_example" // string | 
	nodesRequest := *openapiclient.NewNodesRequest("Name_example", openapiclient.StatusEnum("waiting_authorization")) // NodesRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.UpdateNode(context.Background(), nodeId).NodesRequest(nodesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.UpdateNode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateNode`: ResponseAsyncNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.UpdateNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nodesRequest** | [**NodesRequest**](NodesRequest.md) |  | 

### Return type

[**ResponseAsyncNodes**](ResponseAsyncNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateNode2

> ResponseAsyncNodes UpdateNode2(ctx, nodeId).NodesRequest(nodesRequest).Execute()

Update an Node



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
	nodesRequest := *openapiclient.NewNodesRequest("Name_example", openapiclient.StatusEnum("waiting_authorization")) // NodesRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodesAPI.UpdateNode2(context.Background(), nodeId).NodesRequest(nodesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodesAPI.UpdateNode2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateNode2`: ResponseAsyncNodes
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodesAPI.UpdateNode2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNode2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nodesRequest** | [**NodesRequest**](NodesRequest.md) |  | 

### Return type

[**ResponseAsyncNodes**](ResponseAsyncNodes.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

