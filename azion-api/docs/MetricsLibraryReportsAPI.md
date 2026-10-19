# \MetricsLibraryReportsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateLibraryReport**](MetricsLibraryReportsAPI.md#CreateLibraryReport) | **Post** /metrics/library/reports | Create a new library report
[**DeleteLibraryReport**](MetricsLibraryReportsAPI.md#DeleteLibraryReport) | **Delete** /metrics/library/reports/{library_report_id} | Delete a library report
[**ListLibraryReports**](MetricsLibraryReportsAPI.md#ListLibraryReports) | **Get** /metrics/library/reports | List of library reports
[**RetrieveLibraryReport**](MetricsLibraryReportsAPI.md#RetrieveLibraryReport) | **Get** /metrics/library/reports/{library_report_id} | Retrieve details from a library report
[**UpdateLibraryReport**](MetricsLibraryReportsAPI.md#UpdateLibraryReport) | **Put** /metrics/library/reports/{library_report_id} | Update a library report



## CreateLibraryReport

> ReportResponse CreateLibraryReport(ctx).LibraryReportRequest(libraryReportRequest).Execute()

Create a new library report



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
	libraryReportRequest := *openapiclient.NewLibraryReportRequest("Description_example", "Type_example", "AggregationType_example", "DataUnit_example", []openapiclient.BaseQueryRequest{*openapiclient.NewBaseQueryRequest("Dataset_example", int64(123), "OrderDirection_example")}, "Name_example", "Scope_example") // LibraryReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsLibraryReportsAPI.CreateLibraryReport(context.Background()).LibraryReportRequest(libraryReportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsLibraryReportsAPI.CreateLibraryReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateLibraryReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsLibraryReportsAPI.CreateLibraryReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateLibraryReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryReportRequest** | [**LibraryReportRequest**](LibraryReportRequest.md) |  | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteLibraryReport

> DeleteResponse DeleteLibraryReport(ctx, libraryReportId).Execute()

Delete a library report



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
	libraryReportId := int64(789) // int64 | The unique identifier of the library report

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsLibraryReportsAPI.DeleteLibraryReport(context.Background(), libraryReportId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsLibraryReportsAPI.DeleteLibraryReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteLibraryReport`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsLibraryReportsAPI.DeleteLibraryReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**libraryReportId** | **int64** | The unique identifier of the library report | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLibraryReportRequest struct via the builder pattern


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


## ListLibraryReports

> PaginatedReportListResponseList ListLibraryReports(ctx).AggregationType(aggregationType).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Execute()

List of library reports



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
	aggregationType := "aggregationType_example" // string | Filter by aggregation type (accepts comma-separated values). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	type_ := "type__example" // string | Filter by type (accepts comma-separated values). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsLibraryReportsAPI.ListLibraryReports(context.Background()).AggregationType(aggregationType).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsLibraryReportsAPI.ListLibraryReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListLibraryReports`: PaginatedReportListResponseList
	fmt.Fprintf(os.Stdout, "Response from `MetricsLibraryReportsAPI.ListLibraryReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListLibraryReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aggregationType** | **string** | Filter by aggregation type (accepts comma-separated values). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **type_** | **string** | Filter by type (accepts comma-separated values). | 

### Return type

[**PaginatedReportListResponseList**](PaginatedReportListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveLibraryReport

> ReportResponse RetrieveLibraryReport(ctx, libraryReportId).Fields(fields).Execute()

Retrieve details from a library report



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
	libraryReportId := int64(789) // int64 | The unique identifier of the library report
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsLibraryReportsAPI.RetrieveLibraryReport(context.Background(), libraryReportId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsLibraryReportsAPI.RetrieveLibraryReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveLibraryReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsLibraryReportsAPI.RetrieveLibraryReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**libraryReportId** | **int64** | The unique identifier of the library report | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveLibraryReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateLibraryReport

> ReportResponse UpdateLibraryReport(ctx, libraryReportId).LibraryReportRequest(libraryReportRequest).Execute()

Update a library report



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
	libraryReportId := int64(789) // int64 | The unique identifier of the library report
	libraryReportRequest := *openapiclient.NewLibraryReportRequest("Description_example", "Type_example", "AggregationType_example", "DataUnit_example", []openapiclient.BaseQueryRequest{*openapiclient.NewBaseQueryRequest("Dataset_example", int64(123), "OrderDirection_example")}, "Name_example", "Scope_example") // LibraryReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsLibraryReportsAPI.UpdateLibraryReport(context.Background(), libraryReportId).LibraryReportRequest(libraryReportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsLibraryReportsAPI.UpdateLibraryReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateLibraryReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsLibraryReportsAPI.UpdateLibraryReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**libraryReportId** | **int64** | The unique identifier of the library report | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateLibraryReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **libraryReportRequest** | [**LibraryReportRequest**](LibraryReportRequest.md) |  | 

### Return type

[**ReportResponse**](ReportResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

