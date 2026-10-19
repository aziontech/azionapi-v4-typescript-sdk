# \WorkloadsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateWorkload**](WorkloadsAPI.md#CreateWorkload) | **Post** /workspace/workloads | Create an Workload
[**DeleteWorkload**](WorkloadsAPI.md#DeleteWorkload) | **Delete** /workspace/workloads/{workload_id} | Delete an Workload
[**ListWorkloads**](WorkloadsAPI.md#ListWorkloads) | **Get** /workspace/workloads | List Workloads
[**PartialUpdateWorkload**](WorkloadsAPI.md#PartialUpdateWorkload) | **Patch** /workspace/workloads/{workload_id} | Partially update an Workload
[**RetrieveWorkload**](WorkloadsAPI.md#RetrieveWorkload) | **Get** /workspace/workloads/{workload_id} | Retrieve details of an Workload
[**UpdateWorkload**](WorkloadsAPI.md#UpdateWorkload) | **Put** /workspace/workloads/{workload_id} | Update an Workload



## CreateWorkload

> WorkloadResponse CreateWorkload(ctx).WorkloadRequest(workloadRequest).Execute()

Create an Workload



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
	workloadRequest := *openapiclient.NewWorkloadRequest("Name_example") // WorkloadRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.CreateWorkload(context.Background()).WorkloadRequest(workloadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.CreateWorkload``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWorkload`: WorkloadResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.CreateWorkload`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWorkloadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadRequest** | [**WorkloadRequest**](WorkloadRequest.md) |  | 

### Return type

[**WorkloadResponse**](WorkloadResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWorkload

> DeleteResponse DeleteWorkload(ctx, workloadId).Execute()

Delete an Workload



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
	workloadId := int64(789) // int64 | A unique integer value identifying the workload.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.DeleteWorkload(context.Background(), workloadId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.DeleteWorkload``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWorkload`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.DeleteWorkload`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workloadId** | **int64** | A unique integer value identifying the workload. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWorkloadRequest struct via the builder pattern


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


## ListWorkloads

> PaginatedWorkloadList ListWorkloads(ctx).Active(active).DigitalCertificateId(digitalCertificateId).Fields(fields).Id(id).Infrastructure(infrastructure).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).MapName(mapName).MtlsTrustedCaCertificateId(mtlsTrustedCaCertificateId).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Workloads



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	active := true // bool | Filter by active status. (optional)
	digitalCertificateId := int64(789) // int64 | Filter by digital certificate id (accepts comma-separated values). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	infrastructure := "infrastructure_example" // string | Filter by infrastructure (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	mapName := "mapName_example" // string | Filter by map name (case-insensitive, partial match). (optional)
	mtlsTrustedCaCertificateId := int64(789) // int64 | Filter by mTLS trusted CA certificate id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.ListWorkloads(context.Background()).Active(active).DigitalCertificateId(digitalCertificateId).Fields(fields).Id(id).Infrastructure(infrastructure).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).MapName(mapName).MtlsTrustedCaCertificateId(mtlsTrustedCaCertificateId).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.ListWorkloads``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWorkloads`: PaginatedWorkloadList
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.ListWorkloads`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkloadsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **digitalCertificateId** | **int64** | Filter by digital certificate id (accepts comma-separated values). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **infrastructure** | **string** | Filter by infrastructure (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **mapName** | **string** | Filter by map name (case-insensitive, partial match). | 
 **mtlsTrustedCaCertificateId** | **int64** | Filter by mTLS trusted CA certificate id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedWorkloadList**](PaginatedWorkloadList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateWorkload

> WorkloadResponse PartialUpdateWorkload(ctx, workloadId).PatchedWorkloadRequest(patchedWorkloadRequest).Execute()

Partially update an Workload



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
	workloadId := int64(789) // int64 | A unique integer value identifying the workload.
	patchedWorkloadRequest := *openapiclient.NewPatchedWorkloadRequest() // PatchedWorkloadRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.PartialUpdateWorkload(context.Background(), workloadId).PatchedWorkloadRequest(patchedWorkloadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.PartialUpdateWorkload``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateWorkload`: WorkloadResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.PartialUpdateWorkload`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workloadId** | **int64** | A unique integer value identifying the workload. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateWorkloadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedWorkloadRequest** | [**PatchedWorkloadRequest**](PatchedWorkloadRequest.md) |  | 

### Return type

[**WorkloadResponse**](WorkloadResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveWorkload

> WorkloadResponse RetrieveWorkload(ctx, workloadId).Fields(fields).Execute()

Retrieve details of an Workload



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
	workloadId := int64(789) // int64 | A unique integer value identifying the workload.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.RetrieveWorkload(context.Background(), workloadId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.RetrieveWorkload``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveWorkload`: WorkloadResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.RetrieveWorkload`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workloadId** | **int64** | A unique integer value identifying the workload. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveWorkloadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**WorkloadResponse**](WorkloadResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWorkload

> WorkloadResponse UpdateWorkload(ctx, workloadId).WorkloadRequest(workloadRequest).Execute()

Update an Workload



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
	workloadId := int64(789) // int64 | A unique integer value identifying the workload.
	workloadRequest := *openapiclient.NewWorkloadRequest("Name_example") // WorkloadRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WorkloadsAPI.UpdateWorkload(context.Background(), workloadId).WorkloadRequest(workloadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WorkloadsAPI.UpdateWorkload``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWorkload`: WorkloadResponse
	fmt.Fprintf(os.Stdout, "Response from `WorkloadsAPI.UpdateWorkload`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workloadId** | **int64** | A unique integer value identifying the workload. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkloadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **workloadRequest** | [**WorkloadRequest**](WorkloadRequest.md) |  | 

### Return type

[**WorkloadResponse**](WorkloadResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

