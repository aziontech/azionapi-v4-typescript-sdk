# \OrchestratorNodeServicesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BindNodeServices**](OrchestratorNodeServicesAPI.md#BindNodeServices) | **Post** /orchestrator/nodes/{node_id}/services | Bind Node Service
[**ListNodeServices**](OrchestratorNodeServicesAPI.md#ListNodeServices) | **Get** /orchestrator/nodes/{node_id}/services | List Node Services
[**RetrieveNodeServiceBind**](OrchestratorNodeServicesAPI.md#RetrieveNodeServiceBind) | **Get** /orchestrator/nodes/{node_id}/services/{bind_id} | Retrieve details of an Node Service Bind
[**UnbindNodeService**](OrchestratorNodeServicesAPI.md#UnbindNodeService) | **Delete** /orchestrator/nodes/{node_id}/services/{bind_id} | Unbind Node Service



## BindNodeServices

> ResponseAsyncNodeServices BindNodeServices(ctx, nodeId).NodeServicesRequest(nodeServicesRequest).Execute()

Bind Node Service



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
	nodeServicesRequest := *openapiclient.NewNodeServicesRequest(int64(123)) // NodeServicesRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeServicesAPI.BindNodeServices(context.Background(), nodeId).NodeServicesRequest(nodeServicesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeServicesAPI.BindNodeServices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BindNodeServices`: ResponseAsyncNodeServices
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeServicesAPI.BindNodeServices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiBindNodeServicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **nodeServicesRequest** | [**NodeServicesRequest**](NodeServicesRequest.md) |  | 

### Return type

[**ResponseAsyncNodeServices**](ResponseAsyncNodeServices.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListNodeServices

> PaginatedNodeServicesList ListNodeServices(ctx, nodeId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Node Services



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
	resp, r, err := apiClient.OrchestratorNodeServicesAPI.ListNodeServices(context.Background(), nodeId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeServicesAPI.ListNodeServices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNodeServices`: PaginatedNodeServicesList
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeServicesAPI.ListNodeServices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListNodeServicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedNodeServicesList**](PaginatedNodeServicesList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveNodeServiceBind

> ResponseRetrieveNodeServiceBind RetrieveNodeServiceBind(ctx, bindId, nodeId).Fields(fields).Execute()

Retrieve details of an Node Service Bind



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
	bindId := int64(789) // int64 | 
	nodeId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeServicesAPI.RetrieveNodeServiceBind(context.Background(), bindId, nodeId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeServicesAPI.RetrieveNodeServiceBind``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveNodeServiceBind`: ResponseRetrieveNodeServiceBind
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeServicesAPI.RetrieveNodeServiceBind`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bindId** | **int64** |  | 
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveNodeServiceBindRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveNodeServiceBind**](ResponseRetrieveNodeServiceBind.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnbindNodeService

> ResponseAsyncDeleteNodeServiceBind UnbindNodeService(ctx, bindId, nodeId).Execute()

Unbind Node Service



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
	bindId := int64(789) // int64 | 
	nodeId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorNodeServicesAPI.UnbindNodeService(context.Background(), bindId, nodeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorNodeServicesAPI.UnbindNodeService``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnbindNodeService`: ResponseAsyncDeleteNodeServiceBind
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorNodeServicesAPI.UnbindNodeService`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bindId** | **int64** |  | 
**nodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnbindNodeServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ResponseAsyncDeleteNodeServiceBind**](ResponseAsyncDeleteNodeServiceBind.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

