# \CustomPagesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCustomPage**](CustomPagesAPI.md#CreateCustomPage) | **Post** /workspace/custom_pages | Create a Custom Page
[**DeleteCustomPage**](CustomPagesAPI.md#DeleteCustomPage) | **Delete** /workspace/custom_pages/{custom_page_id} | Delete a Custom Page
[**ListCustomPages**](CustomPagesAPI.md#ListCustomPages) | **Get** /workspace/custom_pages | List Custom Pages
[**PartialUpdateCustomPage**](CustomPagesAPI.md#PartialUpdateCustomPage) | **Patch** /workspace/custom_pages/{custom_page_id} | Partially update a Custom Page
[**RetrieveCustomPage**](CustomPagesAPI.md#RetrieveCustomPage) | **Get** /workspace/custom_pages/{custom_page_id} | Retrieve details of a Custom Page
[**UpdateCustomPage**](CustomPagesAPI.md#UpdateCustomPage) | **Put** /workspace/custom_pages/{custom_page_id} | Update a Custom Page



## CreateCustomPage

> CustomPageResponse CreateCustomPage(ctx).CustomPageRequest(customPageRequest).Execute()

Create a Custom Page



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
	customPageRequest := *openapiclient.NewCustomPageRequest("Name_example", []openapiclient.PageRequestBase{*openapiclient.NewPageRequestBase(openapiclient.CodeEnum("default"), *openapiclient.NewPageConnectorRequest("Type_example", *openapiclient.NewPageConnectorAttributesRequest(int64(123))))}) // CustomPageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomPagesAPI.CreateCustomPage(context.Background()).CustomPageRequest(customPageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.CreateCustomPage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCustomPage`: CustomPageResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.CreateCustomPage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageRequest** | [**CustomPageRequest**](CustomPageRequest.md) |  | 

### Return type

[**CustomPageResponse**](CustomPageResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCustomPage

> DeleteResponse DeleteCustomPage(ctx, customPageId).Execute()

Delete a Custom Page



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
	customPageId := int64(789) // int64 | A unique integer value identifying the custom page.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomPagesAPI.DeleteCustomPage(context.Background(), customPageId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.DeleteCustomPage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCustomPage`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.DeleteCustomPage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customPageId** | **int64** | A unique integer value identifying the custom page. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPageRequest struct via the builder pattern


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


## ListCustomPages

> PaginatedCustomPageList ListCustomPages(ctx).Active(active).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Custom Pages



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
	resp, r, err := apiClient.CustomPagesAPI.ListCustomPages(context.Background()).Active(active).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.ListCustomPages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCustomPages`: PaginatedCustomPageList
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.ListCustomPages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCustomPagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
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

[**PaginatedCustomPageList**](PaginatedCustomPageList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCustomPage

> CustomPageResponse PartialUpdateCustomPage(ctx, customPageId).PatchedCustomPageRequest(patchedCustomPageRequest).Execute()

Partially update a Custom Page



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
	customPageId := int64(789) // int64 | A unique integer value identifying the custom page.
	patchedCustomPageRequest := *openapiclient.NewPatchedCustomPageRequest() // PatchedCustomPageRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomPagesAPI.PartialUpdateCustomPage(context.Background(), customPageId).PatchedCustomPageRequest(patchedCustomPageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.PartialUpdateCustomPage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCustomPage`: CustomPageResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.PartialUpdateCustomPage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customPageId** | **int64** | A unique integer value identifying the custom page. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCustomPageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedCustomPageRequest** | [**PatchedCustomPageRequest**](PatchedCustomPageRequest.md) |  | 

### Return type

[**CustomPageResponse**](CustomPageResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCustomPage

> CustomPageResponse RetrieveCustomPage(ctx, customPageId).Fields(fields).Execute()

Retrieve details of a Custom Page



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
	customPageId := int64(789) // int64 | A unique integer value identifying the custom page.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomPagesAPI.RetrieveCustomPage(context.Background(), customPageId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.RetrieveCustomPage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCustomPage`: CustomPageResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.RetrieveCustomPage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customPageId** | **int64** | A unique integer value identifying the custom page. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCustomPageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CustomPageResponse**](CustomPageResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCustomPage

> CustomPageResponse UpdateCustomPage(ctx, customPageId).CustomPageRequest(customPageRequest).Execute()

Update a Custom Page



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
	customPageId := int64(789) // int64 | A unique integer value identifying the custom page.
	customPageRequest := *openapiclient.NewCustomPageRequest("Name_example", []openapiclient.PageRequestBase{*openapiclient.NewPageRequestBase(openapiclient.CodeEnum("default"), *openapiclient.NewPageConnectorRequest("Type_example", *openapiclient.NewPageConnectorAttributesRequest(int64(123))))}) // CustomPageRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomPagesAPI.UpdateCustomPage(context.Background(), customPageId).CustomPageRequest(customPageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomPagesAPI.UpdateCustomPage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCustomPage`: CustomPageResponse
	fmt.Fprintf(os.Stdout, "Response from `CustomPagesAPI.UpdateCustomPage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**customPageId** | **int64** | A unique integer value identifying the custom page. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCustomPageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customPageRequest** | [**CustomPageRequest**](CustomPageRequest.md) |  | 

### Return type

[**CustomPageResponse**](CustomPageResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

