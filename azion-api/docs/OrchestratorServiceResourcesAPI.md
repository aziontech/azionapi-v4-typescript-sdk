# \OrchestratorServiceResourcesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateResource**](OrchestratorServiceResourcesAPI.md#CreateResource) | **Post** /orchestrator/services/{service_id}/resources | Create Service Resource
[**DeleteResource**](OrchestratorServiceResourcesAPI.md#DeleteResource) | **Delete** /orchestrator/services/{service_id}/resources/{resource_id} | Delete Resource
[**ListResourcesOfAService**](OrchestratorServiceResourcesAPI.md#ListResourcesOfAService) | **Get** /orchestrator/services/{service_id}/resources | List Service Resources
[**RetrieveResource**](OrchestratorServiceResourcesAPI.md#RetrieveResource) | **Get** /orchestrator/services/{service_id}/resources/{resource_id} | Retrieve details of a Resource
[**RetrieveResourceContent**](OrchestratorServiceResourcesAPI.md#RetrieveResourceContent) | **Get** /orchestrator/services/{service_id}/resources/{resource_id}/content | Retrieve content of a Resource
[**UpdateResource**](OrchestratorServiceResourcesAPI.md#UpdateResource) | **Put** /orchestrator/services/{service_id}/resources/{resource_id} | Update Resource
[**UploadResourceContent**](OrchestratorServiceResourcesAPI.md#UploadResourceContent) | **Put** /orchestrator/services/{service_id}/resources/{resource_id}/content | Upload content of a Resource



## CreateResource

> ServiceResource CreateResource(ctx, serviceId).ServiceResourceRequest(serviceResourceRequest).Execute()

Create Service Resource



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
	serviceId := int64(789) // int64 | 
	serviceResourceRequest := *openapiclient.NewServiceResourceRequest("Name_example", "ContentType_example", "FileGroup_example", "FileMode_example", "FileOwner_example") // ServiceResourceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.CreateResource(context.Background(), serviceId).ServiceResourceRequest(serviceResourceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.CreateResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateResource`: ServiceResource
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.CreateResource`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serviceResourceRequest** | [**ServiceResourceRequest**](ServiceResourceRequest.md) |  | 

### Return type

[**ServiceResource**](ServiceResource.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteResource

> DeleteResource(ctx, resourceId, serviceId).Execute()

Delete Resource



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
	resourceId := int64(789) // int64 | 
	serviceId := int64(789) // int64 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.OrchestratorServiceResourcesAPI.DeleteResource(context.Background(), resourceId, serviceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.DeleteResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** |  | 
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteResourceRequest struct via the builder pattern


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


## ListResourcesOfAService

> PaginatedServiceResourceList ListResourcesOfAService(ctx, serviceId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Service Resources



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
	serviceId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.ListResourcesOfAService(context.Background(), serviceId).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.ListResourcesOfAService``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListResourcesOfAService`: PaginatedServiceResourceList
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.ListResourcesOfAService`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListResourcesOfAServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedServiceResourceList**](PaginatedServiceResourceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveResource

> ServiceResourceId RetrieveResource(ctx, resourceId, serviceId).Fields(fields).Execute()

Retrieve details of a Resource



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
	resourceId := int64(789) // int64 | 
	serviceId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.RetrieveResource(context.Background(), resourceId, serviceId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.RetrieveResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveResource`: ServiceResourceId
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.RetrieveResource`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** |  | 
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ServiceResourceId**](ServiceResourceId.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveResourceContent

> Content RetrieveResourceContent(ctx, resourceId, serviceId).Fields(fields).Execute()

Retrieve content of a Resource



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
	resourceId := int64(789) // int64 | 
	serviceId := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.RetrieveResourceContent(context.Background(), resourceId, serviceId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.RetrieveResourceContent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveResourceContent`: Content
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.RetrieveResourceContent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** |  | 
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveResourceContentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**Content**](Content.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateResource

> ServiceResourceId UpdateResource(ctx, resourceId, serviceId).ServiceResourceIdRequest(serviceResourceIdRequest).Execute()

Update Resource



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
	resourceId := int64(789) // int64 | 
	serviceId := int64(789) // int64 | 
	serviceResourceIdRequest := *openapiclient.NewServiceResourceIdRequest("Name_example", "FileGroup_example", "FileMode_example", "FileOwner_example") // ServiceResourceIdRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.UpdateResource(context.Background(), resourceId, serviceId).ServiceResourceIdRequest(serviceResourceIdRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.UpdateResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateResource`: ServiceResourceId
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.UpdateResource`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** |  | 
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **serviceResourceIdRequest** | [**ServiceResourceIdRequest**](ServiceResourceIdRequest.md) |  | 

### Return type

[**ServiceResourceId**](ServiceResourceId.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UploadResourceContent

> Content UploadResourceContent(ctx, resourceId, serviceId).ContentRequest(contentRequest).Execute()

Upload content of a Resource



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
	resourceId := int64(789) // int64 | 
	serviceId := int64(789) // int64 | 
	contentRequest := *openapiclient.NewContentRequest("Name_example", "ContentType_example", "ContentHash_example") // ContentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrchestratorServiceResourcesAPI.UploadResourceContent(context.Background(), resourceId, serviceId).ContentRequest(contentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrchestratorServiceResourcesAPI.UploadResourceContent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UploadResourceContent`: Content
	fmt.Fprintf(os.Stdout, "Response from `OrchestratorServiceResourcesAPI.UploadResourceContent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **int64** |  | 
**serviceId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUploadResourceContentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **contentRequest** | [**ContentRequest**](ContentRequest.md) |  | 

### Return type

[**Content**](Content.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

