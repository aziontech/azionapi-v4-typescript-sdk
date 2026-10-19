# \ApplicationsFunctionAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateApplicationFunctionInstance**](ApplicationsFunctionAPI.md#CreateApplicationFunctionInstance) | **Post** /workspace/applications/{application_id}/functions | Create an Application Function Instance
[**CreateApplicationFunctionInstance2**](ApplicationsFunctionAPI.md#CreateApplicationFunctionInstance2) | **Post** /workspace/applications/{application_id}/versions/{version_id}/functions | Create an Application Function Instance
[**DeleteApplicationFunctionInstance**](ApplicationsFunctionAPI.md#DeleteApplicationFunctionInstance) | **Delete** /workspace/applications/{application_id}/functions/{function_id} | Delete an Application Function Instance
[**DeleteApplicationFunctionInstance2**](ApplicationsFunctionAPI.md#DeleteApplicationFunctionInstance2) | **Delete** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Delete an Application Function Instance
[**ListApplicationFunctionInstances**](ApplicationsFunctionAPI.md#ListApplicationFunctionInstances) | **Get** /workspace/applications/{application_id}/functions | List Function Instances
[**ListApplicationFunctionInstances2**](ApplicationsFunctionAPI.md#ListApplicationFunctionInstances2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/functions | List Function Instances
[**PartialUpdateApplicationFunctionInstance**](ApplicationsFunctionAPI.md#PartialUpdateApplicationFunctionInstance) | **Patch** /workspace/applications/{application_id}/functions/{function_id} | Partially update an Application Function Instance
[**PartialUpdateApplicationFunctionInstance2**](ApplicationsFunctionAPI.md#PartialUpdateApplicationFunctionInstance2) | **Patch** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Partially update an Application Function Instance
[**RetrieveApplicationFunctionInstance**](ApplicationsFunctionAPI.md#RetrieveApplicationFunctionInstance) | **Get** /workspace/applications/{application_id}/functions/{function_id} | Retrieve details of an Application Function Instance
[**RetrieveApplicationFunctionInstance2**](ApplicationsFunctionAPI.md#RetrieveApplicationFunctionInstance2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Retrieve details of an Application Function Instance
[**UpdateApplicationFunctionInstance**](ApplicationsFunctionAPI.md#UpdateApplicationFunctionInstance) | **Put** /workspace/applications/{application_id}/functions/{function_id} | Update an Application Function Instance
[**UpdateApplicationFunctionInstance2**](ApplicationsFunctionAPI.md#UpdateApplicationFunctionInstance2) | **Put** /workspace/applications/{application_id}/versions/{version_id}/functions/{function_id} | Update an Application Function Instance



## CreateApplicationFunctionInstance

> FunctionInstanceResponse CreateApplicationFunctionInstance(ctx, applicationId).FunctionInstanceRequest(functionInstanceRequest).Execute()

Create an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionInstanceRequest := *openapiclient.NewFunctionInstanceRequest("Name_example", int64(123)) // FunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.CreateApplicationFunctionInstance(context.Background(), applicationId).FunctionInstanceRequest(functionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.CreateApplicationFunctionInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateApplicationFunctionInstance`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.CreateApplicationFunctionInstance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationFunctionInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **functionInstanceRequest** | [**FunctionInstanceRequest**](FunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateApplicationFunctionInstance2

> FunctionInstanceResponse CreateApplicationFunctionInstance2(ctx, applicationId, versionId).FunctionInstanceRequest(functionInstanceRequest).Execute()

Create an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	functionInstanceRequest := *openapiclient.NewFunctionInstanceRequest("Name_example", int64(123)) // FunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.CreateApplicationFunctionInstance2(context.Background(), applicationId, versionId).FunctionInstanceRequest(functionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.CreateApplicationFunctionInstance2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateApplicationFunctionInstance2`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.CreateApplicationFunctionInstance2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationFunctionInstance2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **functionInstanceRequest** | [**FunctionInstanceRequest**](FunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteApplicationFunctionInstance

> DeleteResponse DeleteApplicationFunctionInstance(ctx, applicationId, functionId).Execute()

Delete an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.DeleteApplicationFunctionInstance(context.Background(), applicationId, functionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.DeleteApplicationFunctionInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteApplicationFunctionInstance`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.DeleteApplicationFunctionInstance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationFunctionInstanceRequest struct via the builder pattern


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


## DeleteApplicationFunctionInstance2

> DeleteResponse DeleteApplicationFunctionInstance2(ctx, applicationId, functionId, versionId).Execute()

Delete an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.DeleteApplicationFunctionInstance2(context.Background(), applicationId, functionId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.DeleteApplicationFunctionInstance2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteApplicationFunctionInstance2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.DeleteApplicationFunctionInstance2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationFunctionInstance2Request struct via the builder pattern


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


## ListApplicationFunctionInstances

> PaginatedFunctionInstanceList ListApplicationFunctionInstances(ctx, applicationId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Function Instances



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.ListApplicationFunctionInstances(context.Background(), applicationId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.ListApplicationFunctionInstances``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApplicationFunctionInstances`: PaginatedFunctionInstanceList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.ListApplicationFunctionInstances`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListApplicationFunctionInstancesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFunctionInstanceList**](PaginatedFunctionInstanceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListApplicationFunctionInstances2

> PaginatedFunctionInstanceList ListApplicationFunctionInstances2(ctx, applicationId, versionId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Function Instances



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.ListApplicationFunctionInstances2(context.Background(), applicationId, versionId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.ListApplicationFunctionInstances2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApplicationFunctionInstances2`: PaginatedFunctionInstanceList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.ListApplicationFunctionInstances2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListApplicationFunctionInstances2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFunctionInstanceList**](PaginatedFunctionInstanceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateApplicationFunctionInstance

> FunctionInstanceResponse PartialUpdateApplicationFunctionInstance(ctx, applicationId, functionId).PatchedFunctionInstanceRequest(patchedFunctionInstanceRequest).Execute()

Partially update an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	patchedFunctionInstanceRequest := *openapiclient.NewPatchedFunctionInstanceRequest() // PatchedFunctionInstanceRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance(context.Background(), applicationId, functionId).PatchedFunctionInstanceRequest(patchedFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateApplicationFunctionInstance`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateApplicationFunctionInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedFunctionInstanceRequest** | [**PatchedFunctionInstanceRequest**](PatchedFunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateApplicationFunctionInstance2

> FunctionInstanceResponse PartialUpdateApplicationFunctionInstance2(ctx, applicationId, functionId, versionId).PatchedFunctionInstanceRequest(patchedFunctionInstanceRequest).Execute()

Partially update an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	patchedFunctionInstanceRequest := *openapiclient.NewPatchedFunctionInstanceRequest() // PatchedFunctionInstanceRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance2(context.Background(), applicationId, functionId, versionId).PatchedFunctionInstanceRequest(patchedFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateApplicationFunctionInstance2`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.PartialUpdateApplicationFunctionInstance2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateApplicationFunctionInstance2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedFunctionInstanceRequest** | [**PatchedFunctionInstanceRequest**](PatchedFunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveApplicationFunctionInstance

> FunctionInstanceResponse RetrieveApplicationFunctionInstance(ctx, applicationId, functionId).Fields(fields).Execute()

Retrieve details of an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance(context.Background(), applicationId, functionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveApplicationFunctionInstance`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveApplicationFunctionInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveApplicationFunctionInstance2

> FunctionInstanceResponse RetrieveApplicationFunctionInstance2(ctx, applicationId, functionId, versionId).Fields(fields).Execute()

Retrieve details of an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance2(context.Background(), applicationId, functionId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveApplicationFunctionInstance2`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.RetrieveApplicationFunctionInstance2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveApplicationFunctionInstance2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationFunctionInstance

> FunctionInstanceResponse UpdateApplicationFunctionInstance(ctx, applicationId, functionId).FunctionInstanceRequest(functionInstanceRequest).Execute()

Update an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	functionInstanceRequest := *openapiclient.NewFunctionInstanceRequest("Name_example", int64(123)) // FunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.UpdateApplicationFunctionInstance(context.Background(), applicationId, functionId).FunctionInstanceRequest(functionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.UpdateApplicationFunctionInstance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationFunctionInstance`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.UpdateApplicationFunctionInstance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationFunctionInstanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **functionInstanceRequest** | [**FunctionInstanceRequest**](FunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationFunctionInstance2

> FunctionInstanceResponse UpdateApplicationFunctionInstance2(ctx, applicationId, functionId, versionId).FunctionInstanceRequest(functionInstanceRequest).Execute()

Update an Application Function Instance



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	functionInstanceRequest := *openapiclient.NewFunctionInstanceRequest("Name_example", int64(123)) // FunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsFunctionAPI.UpdateApplicationFunctionInstance2(context.Background(), applicationId, functionId, versionId).FunctionInstanceRequest(functionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsFunctionAPI.UpdateApplicationFunctionInstance2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationFunctionInstance2`: FunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsFunctionAPI.UpdateApplicationFunctionInstance2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationFunctionInstance2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **functionInstanceRequest** | [**FunctionInstanceRequest**](FunctionInstanceRequest.md) |  | 

### Return type

[**FunctionInstanceResponse**](FunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

