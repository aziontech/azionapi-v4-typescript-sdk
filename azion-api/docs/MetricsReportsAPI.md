# \MetricsReportsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateReport**](MetricsReportsAPI.md#CreateReport) | **Post** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports | Create a new report
[**DeleteReport**](MetricsReportsAPI.md#DeleteReport) | **Delete** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Delete a report
[**ListReports**](MetricsReportsAPI.md#ListReports) | **Get** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports | List of reports
[**OrderingReport**](MetricsReportsAPI.md#OrderingReport) | **Put** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/order | Ordering reports in row
[**RetrieveReport**](MetricsReportsAPI.md#RetrieveReport) | **Get** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Retrieve details from a report
[**UpdateReport**](MetricsReportsAPI.md#UpdateReport) | **Put** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Update a report



## CreateReport

> ReportResponse CreateReport(ctx, dashboardId, folderId, rowId).ReportRequest(reportRequest).Execute()

Create a new report



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	rowId := int64(789) // int64 | The unique identifier of the row
	reportRequest := *openapiclient.NewReportRequest("Description_example", "Type_example", "AggregationType_example", "DataUnit_example", []openapiclient.BaseQueryRequest{*openapiclient.NewBaseQueryRequest("Dataset_example", int64(123), "OrderDirection_example")}, int64(123), "Name_example") // ReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsReportsAPI.CreateReport(context.Background(), dashboardId, folderId, rowId).ReportRequest(reportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.CreateReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.CreateReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **reportRequest** | [**ReportRequest**](ReportRequest.md) |  | 

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


## DeleteReport

> DeleteResponse DeleteReport(ctx, dashboardId, folderId, reportId, rowId).Execute()

Delete a report



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	reportId := int64(789) // int64 | The unique identifier of the report
	rowId := int64(789) // int64 | The unique identifier of the row

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsReportsAPI.DeleteReport(context.Background(), dashboardId, folderId, reportId, rowId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.DeleteReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteReport`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.DeleteReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**reportId** | **int64** | The unique identifier of the report | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReportRequest struct via the builder pattern


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


## ListReports

> PaginatedReportListResponseList ListReports(ctx, dashboardId, folderId, rowId).AggregationType(aggregationType).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Execute()

List of reports



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	rowId := int64(789) // int64 | The unique identifier of the row
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
	resp, r, err := apiClient.MetricsReportsAPI.ListReports(context.Background(), dashboardId, folderId, rowId).AggregationType(aggregationType).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.ListReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListReports`: PaginatedReportListResponseList
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.ListReports`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiListReportsRequest struct via the builder pattern


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


## OrderingReport

> OrderResponse OrderingReport(ctx, dashboardId, folderId, rowId).OrderRequest(orderRequest).Execute()

Ordering reports in row



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	rowId := int64(789) // int64 | The unique identifier of the row
	orderRequest := *openapiclient.NewOrderRequest([]int64{int64(123)}) // OrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsReportsAPI.OrderingReport(context.Background(), dashboardId, folderId, rowId).OrderRequest(orderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.OrderingReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderingReport`: OrderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.OrderingReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderingReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **orderRequest** | [**OrderRequest**](OrderRequest.md) |  | 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveReport

> ReportResponse RetrieveReport(ctx, dashboardId, folderId, reportId, rowId).Fields(fields).Execute()

Retrieve details from a report



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	reportId := int64(789) // int64 | The unique identifier of the report
	rowId := int64(789) // int64 | The unique identifier of the row
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsReportsAPI.RetrieveReport(context.Background(), dashboardId, folderId, reportId, rowId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.RetrieveReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.RetrieveReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**reportId** | **int64** | The unique identifier of the report | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveReportRequest struct via the builder pattern


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


## UpdateReport

> ReportResponse UpdateReport(ctx, dashboardId, folderId, reportId, rowId).ReportRequest(reportRequest).Execute()

Update a report



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
	dashboardId := int64(789) // int64 | The unique identifier of the dashboard
	folderId := int64(789) // int64 | The unique identifier of the folder
	reportId := int64(789) // int64 | The unique identifier of the report
	rowId := int64(789) // int64 | The unique identifier of the row
	reportRequest := *openapiclient.NewReportRequest("Description_example", "Type_example", "AggregationType_example", "DataUnit_example", []openapiclient.BaseQueryRequest{*openapiclient.NewBaseQueryRequest("Dataset_example", int64(123), "OrderDirection_example")}, int64(123), "Name_example") // ReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsReportsAPI.UpdateReport(context.Background(), dashboardId, folderId, reportId, rowId).ReportRequest(reportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsReportsAPI.UpdateReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateReport`: ReportResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsReportsAPI.UpdateReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 
**reportId** | **int64** | The unique identifier of the report | 
**rowId** | **int64** | The unique identifier of the row | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **reportRequest** | [**ReportRequest**](ReportRequest.md) |  | 

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

