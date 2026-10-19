# \VCSContinuousDeploymentsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateContinuousDeployment**](VCSContinuousDeploymentsAPI.md#CreateContinuousDeployment) | **Post** /vcs/continuous_deployments | Create a continuous deployment
[**DeleteContinuousDeployment**](VCSContinuousDeploymentsAPI.md#DeleteContinuousDeployment) | **Delete** /vcs/continuous_deployments/{continuous_deployment_id} | Delete a continuous deployment
[**ListContinuousDeployments**](VCSContinuousDeploymentsAPI.md#ListContinuousDeployments) | **Get** /vcs/continuous_deployments | List continuous deployments
[**PartialUpdateContinuousDeployment**](VCSContinuousDeploymentsAPI.md#PartialUpdateContinuousDeployment) | **Patch** /vcs/continuous_deployments/{continuous_deployment_id} | Partialy update a continuous deployment
[**RetrieveContinuousDeployment**](VCSContinuousDeploymentsAPI.md#RetrieveContinuousDeployment) | **Get** /vcs/continuous_deployments/{continuous_deployment_id} | Retrieve details from a continuous deployment
[**UpdateContinuousDeployment**](VCSContinuousDeploymentsAPI.md#UpdateContinuousDeployment) | **Put** /vcs/continuous_deployments/{continuous_deployment_id} | Update a continuous deployment



## CreateContinuousDeployment

> ContinuousDeploymentResponse CreateContinuousDeployment(ctx).ContinuousDeploymentRequest(continuousDeploymentRequest).Execute()

Create a continuous deployment



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
	continuousDeploymentRequest := *openapiclient.NewContinuousDeploymentRequest("Name_example", "Repository_example", "Branch_example", []openapiclient.BuildContextFieldRequest{*openapiclient.NewBuildContextFieldRequest("Field_example", "Value_example")}, int64(123), int64(123)) // ContinuousDeploymentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.CreateContinuousDeployment(context.Background()).ContinuousDeploymentRequest(continuousDeploymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.CreateContinuousDeployment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateContinuousDeployment`: ContinuousDeploymentResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.CreateContinuousDeployment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateContinuousDeploymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentRequest** | [**ContinuousDeploymentRequest**](ContinuousDeploymentRequest.md) |  | 

### Return type

[**ContinuousDeploymentResponse**](ContinuousDeploymentResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteContinuousDeployment

> DeleteResponse DeleteContinuousDeployment(ctx, continuousDeploymentId).Execute()

Delete a continuous deployment



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
	continuousDeploymentId := "continuousDeploymentId_example" // string | Unique identifier of the continuous deployment

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.DeleteContinuousDeployment(context.Background(), continuousDeploymentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.DeleteContinuousDeployment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteContinuousDeployment`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.DeleteContinuousDeployment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **string** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteContinuousDeploymentRequest struct via the builder pattern


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


## ListContinuousDeployments

> PaginatedContinuousDeploymentListResponseList ListContinuousDeployments(ctx).Branch(branch).CreatedGte(createdGte).CreatedLte(createdLte).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Repository(repository).Search(search).Execute()

List continuous deployments



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
	branch := "branch_example" // string | Filter by branch (exact match). (optional)
	createdGte := time.Now() // time.Time | Filter by created date (greater than or equal). (optional)
	createdLte := time.Now() // time.Time | Filter by created date (less than or equal). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	repository := "repository_example" // string | Filter by repository (case-insensitive, partial match). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.ListContinuousDeployments(context.Background()).Branch(branch).CreatedGte(createdGte).CreatedLte(createdLte).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Repository(repository).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.ListContinuousDeployments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListContinuousDeployments`: PaginatedContinuousDeploymentListResponseList
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.ListContinuousDeployments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListContinuousDeploymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **string** | Filter by branch (exact match). | 
 **createdGte** | **time.Time** | Filter by created date (greater than or equal). | 
 **createdLte** | **time.Time** | Filter by created date (less than or equal). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **repository** | **string** | Filter by repository (case-insensitive, partial match). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedContinuousDeploymentListResponseList**](PaginatedContinuousDeploymentListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateContinuousDeployment

> ContinuousDeploymentResponse PartialUpdateContinuousDeployment(ctx, continuousDeploymentId).PatchedContinuousDeploymentRequest(patchedContinuousDeploymentRequest).Execute()

Partialy update a continuous deployment



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
	continuousDeploymentId := "continuousDeploymentId_example" // string | Unique identifier of the continuous deployment
	patchedContinuousDeploymentRequest := *openapiclient.NewPatchedContinuousDeploymentRequest() // PatchedContinuousDeploymentRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.PartialUpdateContinuousDeployment(context.Background(), continuousDeploymentId).PatchedContinuousDeploymentRequest(patchedContinuousDeploymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.PartialUpdateContinuousDeployment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateContinuousDeployment`: ContinuousDeploymentResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.PartialUpdateContinuousDeployment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **string** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateContinuousDeploymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedContinuousDeploymentRequest** | [**PatchedContinuousDeploymentRequest**](PatchedContinuousDeploymentRequest.md) |  | 

### Return type

[**ContinuousDeploymentResponse**](ContinuousDeploymentResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveContinuousDeployment

> ContinuousDeploymentResponse RetrieveContinuousDeployment(ctx, continuousDeploymentId).Fields(fields).Execute()

Retrieve details from a continuous deployment



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
	continuousDeploymentId := "continuousDeploymentId_example" // string | Unique identifier of the continuous deployment
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.RetrieveContinuousDeployment(context.Background(), continuousDeploymentId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.RetrieveContinuousDeployment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveContinuousDeployment`: ContinuousDeploymentResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.RetrieveContinuousDeployment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **string** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveContinuousDeploymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ContinuousDeploymentResponse**](ContinuousDeploymentResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateContinuousDeployment

> ContinuousDeploymentResponse UpdateContinuousDeployment(ctx, continuousDeploymentId).ContinuousDeploymentRequest(continuousDeploymentRequest).Execute()

Update a continuous deployment



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
	continuousDeploymentId := "continuousDeploymentId_example" // string | Unique identifier of the continuous deployment
	continuousDeploymentRequest := *openapiclient.NewContinuousDeploymentRequest("Name_example", "Repository_example", "Branch_example", []openapiclient.BuildContextFieldRequest{*openapiclient.NewBuildContextFieldRequest("Field_example", "Value_example")}, int64(123), int64(123)) // ContinuousDeploymentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSContinuousDeploymentsAPI.UpdateContinuousDeployment(context.Background(), continuousDeploymentId).ContinuousDeploymentRequest(continuousDeploymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSContinuousDeploymentsAPI.UpdateContinuousDeployment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateContinuousDeployment`: ContinuousDeploymentResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSContinuousDeploymentsAPI.UpdateContinuousDeployment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**continuousDeploymentId** | **string** | Unique identifier of the continuous deployment | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateContinuousDeploymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **continuousDeploymentRequest** | [**ContinuousDeploymentRequest**](ContinuousDeploymentRequest.md) |  | 

### Return type

[**ContinuousDeploymentResponse**](ContinuousDeploymentResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

