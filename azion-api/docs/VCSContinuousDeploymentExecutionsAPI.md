# \VCSContinuousDeploymentExecutionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateExecution**](VCSContinuousDeploymentExecutionsAPI.md#CreateExecution) | **Post** /vcs/continuous_deployments/{continuous_deployment_id}/executions | Create a execution
[**ListExecutions**](VCSContinuousDeploymentExecutionsAPI.md#ListExecutions) | **Get** /vcs/continuous_deployments/{continuous_deployment_id}/executions | List executions



## CreateExecution

> ExecutionResponse CreateExecution(ctx, continuousDeploymentId).Body(body).Execute()

Create a execution



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
	continuousDeploymentId := int64(789) // int64 | Unique identifier of the continuous deployment
	body := map[string]interface{}{ ... } // map[string]interface{} | No request body required (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentExecutionsAPI.CreateExecution(context.Background(), continuousDeploymentId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentExecutionsAPI.CreateExecution``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateExecution`: ExecutionResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentExecutionsAPI.CreateExecution`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **int64** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateExecutionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | No request body required | 

### Return type

[**ExecutionResponse**](ExecutionResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListExecutions

> PaginatedExecutionListResponseList ListExecutions(ctx, continuousDeploymentId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).UpdatedAtGte(updatedAtGte).UpdatedAtLte(updatedAtLte).Execute()

List executions



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
	continuousDeploymentId := int64(789) // int64 | Unique identifier of the continuous deployment
	createdAtGte := time.Now() // time.Time | Filter by created date (greater than or equal). (optional)
	createdAtLte := time.Now() // time.Time | Filter by created date (less than or equal). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	status := "status_example" // string | Filter by status (accepts comma-separated values). (optional)
	updatedAtGte := time.Now() // time.Time | Filter by updated date (greater than or equal). (optional)
	updatedAtLte := time.Now() // time.Time | Filter by updated date (less than or equal). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentExecutionsAPI.ListExecutions(context.Background(), continuousDeploymentId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).UpdatedAtGte(updatedAtGte).UpdatedAtLte(updatedAtLte).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentExecutionsAPI.ListExecutions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListExecutions`: PaginatedExecutionListResponseList
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentExecutionsAPI.ListExecutions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **int64** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiListExecutionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createdAtGte** | **time.Time** | Filter by created date (greater than or equal). | 
 **createdAtLte** | **time.Time** | Filter by created date (less than or equal). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **status** | **string** | Filter by status (accepts comma-separated values). | 
 **updatedAtGte** | **time.Time** | Filter by updated date (greater than or equal). | 
 **updatedAtLte** | **time.Time** | Filter by updated date (less than or equal). | 

### Return type

[**PaginatedExecutionListResponseList**](PaginatedExecutionListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

