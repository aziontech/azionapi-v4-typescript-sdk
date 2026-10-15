# \DataStreamTemplatesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTemplate**](DataStreamTemplatesAPI.md#CreateTemplate) | **Post** /workspace/stream/templates | Create a Template
[**DeleteTemplate**](DataStreamTemplatesAPI.md#DeleteTemplate) | **Delete** /workspace/stream/templates/{template_id} | Delete a Template
[**ListTemplates**](DataStreamTemplatesAPI.md#ListTemplates) | **Get** /workspace/stream/templates | List Templates
[**PartialUpdateTemplate**](DataStreamTemplatesAPI.md#PartialUpdateTemplate) | **Patch** /workspace/stream/templates/{template_id} | Partially update a Template
[**RetrieveTemplate**](DataStreamTemplatesAPI.md#RetrieveTemplate) | **Get** /workspace/stream/templates/{template_id} | Retrieve details of a Template
[**UpdateTemplate**](DataStreamTemplatesAPI.md#UpdateTemplate) | **Put** /workspace/stream/templates/{template_id} | Update a Template



## CreateTemplate

> TemplateResponse CreateTemplate(ctx).TemplateRequest(templateRequest).Execute()

Create a Template



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
	templateRequest := *openapiclient.NewTemplateRequest("Name_example", "DataSet_example") // TemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamTemplatesAPI.CreateTemplate(context.Background()).TemplateRequest(templateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.CreateTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTemplate`: TemplateResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.CreateTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateRequest** | [**TemplateRequest**](TemplateRequest.md) |  | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTemplate

> DeleteResponse DeleteTemplate(ctx, templateId).Execute()

Delete a Template



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
	templateId := int64(789) // int64 | A unique integer value identifying the template.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamTemplatesAPI.DeleteTemplate(context.Background(), templateId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.DeleteTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteTemplate`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.DeleteTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateId** | **int64** | A unique integer value identifying the template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateRequest struct via the builder pattern


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


## ListTemplates

> PaginatedTemplateList ListTemplates(ctx).Active(active).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Custom(custom).DataSet(dataSet).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Templates



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
	createdAtGte := time.Now() // time.Time | Filter by created date (greater than or equal). (optional)
	createdAtLte := time.Now() // time.Time | Filter by created date (less than or equal). (optional)
	custom := true // bool | Filter by custom status (true for custom templates, false for default templates). (optional)
	dataSet := "dataSet_example" // string | Filter by data set (case-insensitive, partial match). (optional)
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
	resp, r, err := apiClient.DataStreamTemplatesAPI.ListTemplates(context.Background()).Active(active).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Custom(custom).DataSet(dataSet).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.ListTemplates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTemplates`: PaginatedTemplateList
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.ListTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **createdAtGte** | **time.Time** | Filter by created date (greater than or equal). | 
 **createdAtLte** | **time.Time** | Filter by created date (less than or equal). | 
 **custom** | **bool** | Filter by custom status (true for custom templates, false for default templates). | 
 **dataSet** | **string** | Filter by data set (case-insensitive, partial match). | 
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

[**PaginatedTemplateList**](PaginatedTemplateList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateTemplate

> TemplateResponse PartialUpdateTemplate(ctx, templateId).PatchedTemplateRequest(patchedTemplateRequest).Execute()

Partially update a Template



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
	templateId := int64(789) // int64 | A unique integer value identifying the template.
	patchedTemplateRequest := *openapiclient.NewPatchedTemplateRequest() // PatchedTemplateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamTemplatesAPI.PartialUpdateTemplate(context.Background(), templateId).PatchedTemplateRequest(patchedTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.PartialUpdateTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateTemplate`: TemplateResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.PartialUpdateTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateId** | **int64** | A unique integer value identifying the template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedTemplateRequest** | [**PatchedTemplateRequest**](PatchedTemplateRequest.md) |  | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveTemplate

> TemplateResponse RetrieveTemplate(ctx, templateId).Fields(fields).Execute()

Retrieve details of a Template



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
	templateId := int64(789) // int64 | A unique integer value identifying the template.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamTemplatesAPI.RetrieveTemplate(context.Background(), templateId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.RetrieveTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveTemplate`: TemplateResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.RetrieveTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateId** | **int64** | A unique integer value identifying the template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTemplate

> TemplateResponse UpdateTemplate(ctx, templateId).TemplateRequest(templateRequest).Execute()

Update a Template



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
	templateId := int64(789) // int64 | A unique integer value identifying the template.
	templateRequest := *openapiclient.NewTemplateRequest("Name_example", "DataSet_example") // TemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamTemplatesAPI.UpdateTemplate(context.Background(), templateId).TemplateRequest(templateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamTemplatesAPI.UpdateTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTemplate`: TemplateResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamTemplatesAPI.UpdateTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateId** | **int64** | A unique integer value identifying the template. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **templateRequest** | [**TemplateRequest**](TemplateRequest.md) |  | 

### Return type

[**TemplateResponse**](TemplateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

