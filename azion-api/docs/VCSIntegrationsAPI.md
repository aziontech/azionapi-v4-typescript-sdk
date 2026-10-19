# \VCSIntegrationsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteIntegration**](VCSIntegrationsAPI.md#DeleteIntegration) | **Delete** /vcs/integrations/{integration_id} | Delete an integration
[**ListIntegrations**](VCSIntegrationsAPI.md#ListIntegrations) | **Get** /vcs/integrations | List integrations
[**ListRepositories**](VCSIntegrationsAPI.md#ListRepositories) | **Get** /vcs/integrations/{integration_id}/repositories | List integration repositories.
[**RetrieveIntegration**](VCSIntegrationsAPI.md#RetrieveIntegration) | **Get** /vcs/integrations/{integration_id} | Retrieve details from a integration



## DeleteIntegration

> DeleteResponse DeleteIntegration(ctx, integrationId).Execute()

Delete an integration



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
	integrationId := "integrationId_example" // string | Unique identifier of the integration

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSIntegrationsAPI.DeleteIntegration(context.Background(), integrationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSIntegrationsAPI.DeleteIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteIntegration`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSIntegrationsAPI.DeleteIntegration`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**integrationId** | **string** | Unique identifier of the integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIntegrationRequest struct via the builder pattern


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


## ListIntegrations

> PaginatedIntegrationListResponseList ListIntegrations(ctx).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Platform(platform).Scope(scope).Search(search).Execute()

List integrations



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
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	platform := "platform_example" // string | Filter by platform id (exact match). (optional)
	scope := "scope_example" // string | Filter by scope (case-insensitive, partial match). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSIntegrationsAPI.ListIntegrations(context.Background()).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Platform(platform).Scope(scope).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSIntegrationsAPI.ListIntegrations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIntegrations`: PaginatedIntegrationListResponseList
	fmt.Fprintf(os.Stdout, "Response from `VCSIntegrationsAPI.ListIntegrations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIntegrationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **platform** | **string** | Filter by platform id (exact match). | 
 **scope** | **string** | Filter by scope (case-insensitive, partial match). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedIntegrationListResponseList**](PaginatedIntegrationListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListRepositories

> PaginatedRepositoryListResponseList ListRepositories(ctx, integrationId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List integration repositories.



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
	integrationId := int64(789) // int64 | Unique identifier of the integration
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSIntegrationsAPI.ListRepositories(context.Background(), integrationId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSIntegrationsAPI.ListRepositories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListRepositories`: PaginatedRepositoryListResponseList
	fmt.Fprintf(os.Stdout, "Response from `VCSIntegrationsAPI.ListRepositories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**integrationId** | **int64** | Unique identifier of the integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiListRepositoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedRepositoryListResponseList**](PaginatedRepositoryListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveIntegration

> IntegrationResponse RetrieveIntegration(ctx, integrationId).Fields(fields).Execute()

Retrieve details from a integration



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
	integrationId := "integrationId_example" // string | Unique identifier of the integration
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.VCSIntegrationsAPI.RetrieveIntegration(context.Background(), integrationId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `VCSIntegrationsAPI.RetrieveIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveIntegration`: IntegrationResponse
	fmt.Fprintf(os.Stdout, "Response from `VCSIntegrationsAPI.RetrieveIntegration`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**integrationId** | **string** | Unique identifier of the integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**IntegrationResponse**](IntegrationResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

