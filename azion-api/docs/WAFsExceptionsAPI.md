# \WAFsExceptionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateWafException**](WAFsExceptionsAPI.md#CreateWafException) | **Post** /workspace/wafs/{waf_id}/exceptions | Create an Exception for a Web Application Firewall (WAF)
[**CreateWafException2**](WAFsExceptionsAPI.md#CreateWafException2) | **Post** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions | Create an Exception for a Web Application Firewall (WAF)
[**DeleteWafException**](WAFsExceptionsAPI.md#DeleteWafException) | **Delete** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Delete an Exception from a Web Application Firewall (WAF)
[**DeleteWafException2**](WAFsExceptionsAPI.md#DeleteWafException2) | **Delete** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Delete an Exception from a Web Application Firewall (WAF)
[**ListWafExceptions**](WAFsExceptionsAPI.md#ListWafExceptions) | **Get** /workspace/wafs/{waf_id}/exceptions | List Exceptions for a Web Application Firewall (WAF)
[**ListWafExceptions2**](WAFsExceptionsAPI.md#ListWafExceptions2) | **Get** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions | List Exceptions for a Web Application Firewall (WAF)
[**PartialUpdateWafException**](WAFsExceptionsAPI.md#PartialUpdateWafException) | **Patch** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Partially update an Exception for a Web Application Firewall (WAF)
[**PartialUpdateWafException2**](WAFsExceptionsAPI.md#PartialUpdateWafException2) | **Patch** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Partially update an Exception for a Web Application Firewall (WAF)
[**RetrieveWafException**](WAFsExceptionsAPI.md#RetrieveWafException) | **Get** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Retrieve details of an Exception from a Web Application Firewall (WAF)
[**RetrieveWafException2**](WAFsExceptionsAPI.md#RetrieveWafException2) | **Get** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Retrieve details of an Exception from a Web Application Firewall (WAF)
[**UpdateWafException**](WAFsExceptionsAPI.md#UpdateWafException) | **Put** /workspace/wafs/{waf_id}/exceptions/{exception_id} | Update an Exception for a Web Application Firewall (WAF)
[**UpdateWafException2**](WAFsExceptionsAPI.md#UpdateWafException2) | **Put** /workspace/wafs/{waf_id}/versions/{version_id}/exceptions/{exception_id} | Update an Exception for a Web Application Firewall (WAF)



## CreateWafException

> WAFRuleResponse CreateWafException(ctx, wafId).WAFRuleRequest(wAFRuleRequest).Execute()

Create an Exception for a Web Application Firewall (WAF)



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
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	wAFRuleRequest := *openapiclient.NewWAFRuleRequest("Name_example", []openapiclient.WAFExceptionConditionRequest{openapiclient.WAFExceptionConditionRequest{WAFExceptionGenericConditionRequest: openapiclient.NewWAFExceptionGenericConditionRequest(openapiclient.WAFExceptionGenericConditionMatchEnum("any_http_header_name"))}}) // WAFRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.CreateWafException(context.Background(), wafId).WAFRuleRequest(wAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.CreateWafException``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWafException`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.CreateWafException`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateWafExceptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **wAFRuleRequest** | [**WAFRuleRequest**](WAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateWafException2

> WAFRuleResponse CreateWafException2(ctx, versionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()

Create an Exception for a Web Application Firewall (WAF)



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
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	wAFRuleRequest := *openapiclient.NewWAFRuleRequest("Name_example", []openapiclient.WAFExceptionConditionRequest{openapiclient.WAFExceptionConditionRequest{WAFExceptionGenericConditionRequest: openapiclient.NewWAFExceptionGenericConditionRequest(openapiclient.WAFExceptionGenericConditionMatchEnum("any_http_header_name"))}}) // WAFRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.CreateWafException2(context.Background(), versionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.CreateWafException2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWafException2`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.CreateWafException2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateWafException2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **wAFRuleRequest** | [**WAFRuleRequest**](WAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWafException

> DeleteResponse DeleteWafException(ctx, exceptionId, wafId).Execute()

Delete an Exception from a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.DeleteWafException(context.Background(), exceptionId, wafId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.DeleteWafException``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWafException`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.DeleteWafException`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWafExceptionRequest struct via the builder pattern


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


## DeleteWafException2

> DeleteResponse DeleteWafException2(ctx, exceptionId, versionId, wafId).Execute()

Delete an Exception from a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.DeleteWafException2(context.Background(), exceptionId, versionId, wafId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.DeleteWafException2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWafException2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.DeleteWafException2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWafException2Request struct via the builder pattern


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


## ListWafExceptions

> PaginatedWAFRuleList ListWafExceptions(ctx, wafId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Ordering(ordering).Page(page).PageSize(pageSize).Path(path).Search(search).Execute()

List Exceptions for a Web Application Firewall (WAF)



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
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	createdAtGte := time.Now() // time.Time | Filter by creation date (greater than or equal). (optional)
	createdAtLte := time.Now() // time.Time | Filter by creation date (less than or equal). (optional)
	description := "description_example" // string | Filter by description (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	path := "path_example" // string | Filter by path (case-insensitive, partial match). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.ListWafExceptions(context.Background(), wafId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Ordering(ordering).Page(page).PageSize(pageSize).Path(path).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.ListWafExceptions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWafExceptions`: PaginatedWAFRuleList
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.ListWafExceptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListWafExceptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createdAtGte** | **time.Time** | Filter by creation date (greater than or equal). | 
 **createdAtLte** | **time.Time** | Filter by creation date (less than or equal). | 
 **description** | **string** | Filter by description (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **path** | **string** | Filter by path (case-insensitive, partial match). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedWAFRuleList**](PaginatedWAFRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWafExceptions2

> PaginatedWAFRuleList ListWafExceptions2(ctx, versionId, wafId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Ordering(ordering).Page(page).PageSize(pageSize).Path(path).Search(search).Execute()

List Exceptions for a Web Application Firewall (WAF)



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
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	createdAtGte := time.Now() // time.Time | Filter by creation date (greater than or equal). (optional)
	createdAtLte := time.Now() // time.Time | Filter by creation date (less than or equal). (optional)
	description := "description_example" // string | Filter by description (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	path := "path_example" // string | Filter by path (case-insensitive, partial match). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.ListWafExceptions2(context.Background(), versionId, wafId).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Ordering(ordering).Page(page).PageSize(pageSize).Path(path).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.ListWafExceptions2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWafExceptions2`: PaginatedWAFRuleList
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.ListWafExceptions2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListWafExceptions2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **createdAtGte** | **time.Time** | Filter by creation date (greater than or equal). | 
 **createdAtLte** | **time.Time** | Filter by creation date (less than or equal). | 
 **description** | **string** | Filter by description (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **path** | **string** | Filter by path (case-insensitive, partial match). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedWAFRuleList**](PaginatedWAFRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateWafException

> WAFRuleResponse PartialUpdateWafException(ctx, exceptionId, wafId).PatchedWAFRuleRequest(patchedWAFRuleRequest).Execute()

Partially update an Exception for a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	patchedWAFRuleRequest := *openapiclient.NewPatchedWAFRuleRequest() // PatchedWAFRuleRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.PartialUpdateWafException(context.Background(), exceptionId, wafId).PatchedWAFRuleRequest(patchedWAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.PartialUpdateWafException``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateWafException`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.PartialUpdateWafException`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateWafExceptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedWAFRuleRequest** | [**PatchedWAFRuleRequest**](PatchedWAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateWafException2

> WAFRuleResponse PartialUpdateWafException2(ctx, exceptionId, versionId, wafId).PatchedWAFRuleRequest(patchedWAFRuleRequest).Execute()

Partially update an Exception for a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	patchedWAFRuleRequest := *openapiclient.NewPatchedWAFRuleRequest() // PatchedWAFRuleRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.PartialUpdateWafException2(context.Background(), exceptionId, versionId, wafId).PatchedWAFRuleRequest(patchedWAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.PartialUpdateWafException2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateWafException2`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.PartialUpdateWafException2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateWafException2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedWAFRuleRequest** | [**PatchedWAFRuleRequest**](PatchedWAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveWafException

> WAFRuleResponse RetrieveWafException(ctx, exceptionId, wafId).Fields(fields).Execute()

Retrieve details of an Exception from a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.RetrieveWafException(context.Background(), exceptionId, wafId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.RetrieveWafException``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveWafException`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.RetrieveWafException`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveWafExceptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveWafException2

> WAFRuleResponse RetrieveWafException2(ctx, exceptionId, versionId, wafId).Fields(fields).Execute()

Retrieve details of an Exception from a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.RetrieveWafException2(context.Background(), exceptionId, versionId, wafId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.RetrieveWafException2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveWafException2`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.RetrieveWafException2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveWafException2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWafException

> WAFRuleResponse UpdateWafException(ctx, exceptionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()

Update an Exception for a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	wAFRuleRequest := *openapiclient.NewWAFRuleRequest("Name_example", []openapiclient.WAFExceptionConditionRequest{openapiclient.WAFExceptionConditionRequest{WAFExceptionGenericConditionRequest: openapiclient.NewWAFExceptionGenericConditionRequest(openapiclient.WAFExceptionGenericConditionMatchEnum("any_http_header_name"))}}) // WAFRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.UpdateWafException(context.Background(), exceptionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.UpdateWafException``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWafException`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.UpdateWafException`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWafExceptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **wAFRuleRequest** | [**WAFRuleRequest**](WAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWafException2

> WAFRuleResponse UpdateWafException2(ctx, exceptionId, versionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()

Update an Exception for a Web Application Firewall (WAF)



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
	exceptionId := int64(789) // int64 | A unique integer value identifying the WAF exception.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	wafId := int64(789) // int64 | A unique integer value identifying the WAF.
	wAFRuleRequest := *openapiclient.NewWAFRuleRequest("Name_example", []openapiclient.WAFExceptionConditionRequest{openapiclient.WAFExceptionConditionRequest{WAFExceptionGenericConditionRequest: openapiclient.NewWAFExceptionGenericConditionRequest(openapiclient.WAFExceptionGenericConditionMatchEnum("any_http_header_name"))}}) // WAFRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WAFsExceptionsAPI.UpdateWafException2(context.Background(), exceptionId, versionId, wafId).WAFRuleRequest(wAFRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFsExceptionsAPI.UpdateWafException2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWafException2`: WAFRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `WAFsExceptionsAPI.UpdateWafException2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exceptionId** | **int64** | A unique integer value identifying the WAF exception. | 
**versionId** | **string** | The ULID identifier of the version. | 
**wafId** | **int64** | A unique integer value identifying the WAF. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWafException2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **wAFRuleRequest** | [**WAFRuleRequest**](WAFRuleRequest.md) |  | 

### Return type

[**WAFRuleResponse**](WAFRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

