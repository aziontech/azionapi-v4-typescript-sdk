# \MetricsRowsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateRow**](MetricsRowsAPI.md#CreateRow) | **Post** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows | Create a new row
[**DeleteRow**](MetricsRowsAPI.md#DeleteRow) | **Delete** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Delete a row
[**ListRows**](MetricsRowsAPI.md#ListRows) | **Get** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows | List of the rows
[**OrderingRow**](MetricsRowsAPI.md#OrderingRow) | **Put** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/order | Ordering rows in dashboard
[**RetrieveRow**](MetricsRowsAPI.md#RetrieveRow) | **Get** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Retrieve details from a row
[**UpdateRow**](MetricsRowsAPI.md#UpdateRow) | **Put** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Update a row



## CreateRow

> RowResponse CreateRow(ctx, dashboardId, folderId).RowRequest(rowRequest).Execute()

Create a new row



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
	rowRequest := *openapiclient.NewRowRequest("Title_example") // RowRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.CreateRow(context.Background(), dashboardId, folderId).RowRequest(rowRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.CreateRow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateRow`: RowResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.CreateRow`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateRowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **rowRequest** | [**RowRequest**](RowRequest.md) |  | 

### Return type

[**RowResponse**](RowResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRow

> DeleteResponse DeleteRow(ctx, dashboardId, folderId, rowId).Execute()

Delete a row



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.DeleteRow(context.Background(), dashboardId, folderId, rowId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.DeleteRow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteRow`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.DeleteRow`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiDeleteRowRequest struct via the builder pattern


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


## ListRows

> PaginatedRowListResponseList ListRows(ctx, dashboardId, folderId).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Title(title).Execute()

List of the rows



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	title := "title_example" // string | Filter by title (case-insensitive, partial match). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.ListRows(context.Background(), dashboardId, folderId).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Title(title).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.ListRows``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListRows`: PaginatedRowListResponseList
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.ListRows`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiListRowsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **title** | **string** | Filter by title (case-insensitive, partial match). | 

### Return type

[**PaginatedRowListResponseList**](PaginatedRowListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderingRow

> OrderResponse OrderingRow(ctx, dashboardId, folderId).OrderRequest(orderRequest).Execute()

Ordering rows in dashboard



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
	orderRequest := *openapiclient.NewOrderRequest([]int64{int64(123)}) // OrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.OrderingRow(context.Background(), dashboardId, folderId).OrderRequest(orderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.OrderingRow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderingRow`: OrderResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.OrderingRow`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderingRowRequest struct via the builder pattern


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


## RetrieveRow

> RowResponse RetrieveRow(ctx, dashboardId, folderId, rowId).Fields(fields).Execute()

Retrieve details from a row



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.RetrieveRow(context.Background(), dashboardId, folderId, rowId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.RetrieveRow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveRow`: RowResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.RetrieveRow`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiRetrieveRowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**RowResponse**](RowResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateRow

> RowResponse UpdateRow(ctx, dashboardId, folderId, rowId).RowRequest(rowRequest).Execute()

Update a row



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
	rowRequest := *openapiclient.NewRowRequest("Title_example") // RowRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsRowsAPI.UpdateRow(context.Background(), dashboardId, folderId, rowId).RowRequest(rowRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsRowsAPI.UpdateRow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateRow`: RowResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsRowsAPI.UpdateRow`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiUpdateRowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **rowRequest** | [**RowRequest**](RowRequest.md) |  | 

### Return type

[**RowResponse**](RowResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

