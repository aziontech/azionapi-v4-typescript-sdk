# \VCSContinuousDeploymentExecutorAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RetrieveExecutor**](VCSContinuousDeploymentExecutorAPI.md#RetrieveExecutor) | **Get** /vcs/continuous_deployments/{continuous_deployment_id}/executor | Retrieve details from a executor
[**UpdateExecutor**](VCSContinuousDeploymentExecutorAPI.md#UpdateExecutor) | **Put** /vcs/continuous_deployments/{continuous_deployment_id}/executor | Update a executor



## RetrieveExecutor

> ExecutorResponse RetrieveExecutor(ctx, continuousDeploymentId).Fields(fields).Execute()

Retrieve details from a executor



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentExecutorAPI.RetrieveExecutor(context.Background(), continuousDeploymentId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentExecutorAPI.RetrieveExecutor``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveExecutor`: ExecutorResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentExecutorAPI.RetrieveExecutor`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **int64** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveExecutorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ExecutorResponse**](ExecutorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateExecutor

> ExecutorResponse UpdateExecutor(ctx, continuousDeploymentId).Body(body).Execute()

Update a executor



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
	resp, r, err := apiClient.VCSContinuousDeploymentExecutorAPI.UpdateExecutor(context.Background(), continuousDeploymentId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentExecutorAPI.UpdateExecutor``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateExecutor`: ExecutorResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentExecutorAPI.UpdateExecutor`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **int64** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateExecutorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** | No request body required | 

### Return type

[**ExecutorResponse**](ExecutorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

