# \MetricsDashboardAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDashboard**](MetricsDashboardAPI.md#CreateDashboard) | **Post** /metrics/folders/{folder_id}/dashboards | Create a new dashboard
[**DeleteDashboard**](MetricsDashboardAPI.md#DeleteDashboard) | **Delete** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Delete a dashboard
[**ListDashboards**](MetricsDashboardAPI.md#ListDashboards) | **Get** /metrics/folders/{folder_id}/dashboards | List of the dashboards
[**PartialUpdateDashboard**](MetricsDashboardAPI.md#PartialUpdateDashboard) | **Patch** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Partially update a dashboard
[**RetrieveDashboard**](MetricsDashboardAPI.md#RetrieveDashboard) | **Get** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Retrieve details from a dashboard
[**UpdateDashboard**](MetricsDashboardAPI.md#UpdateDashboard) | **Put** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Update a dashboard



## CreateDashboard

> DashboardResponse CreateDashboard(ctx, folderId).DashboardRequest(dashboardRequest).Execute()

Create a new dashboard



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
	folderId := int64(789) // int64 | The unique identifier of the folder
	dashboardRequest := *openapiclient.NewDashboardRequest("Name_example", "Scope_example") // DashboardRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.CreateDashboard(context.Background(), folderId).DashboardRequest(dashboardRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.CreateDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDashboard`: DashboardResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.CreateDashboard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDashboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dashboardRequest** | [**DashboardRequest**](DashboardRequest.md) |  | 

### Return type

[**DashboardResponse**](DashboardResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDashboard

> DeleteResponse DeleteDashboard(ctx, dashboardId, folderId).Execute()

Delete a dashboard



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.DeleteDashboard(context.Background(), dashboardId, folderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.DeleteDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteDashboard`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.DeleteDashboard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDashboardRequest struct via the builder pattern


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


## ListDashboards

> PaginatedDashboardListResponseList ListDashboards(ctx, folderId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of the dashboards



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
	folderId := int64(789) // int64 | The unique identifier of the folder
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.ListDashboards(context.Background(), folderId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.ListDashboards``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDashboards`: PaginatedDashboardListResponseList
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.ListDashboards`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiListDashboardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedDashboardListResponseList**](PaginatedDashboardListResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateDashboard

> DashboardResponse PartialUpdateDashboard(ctx, dashboardId, folderId).PatchedDashboardRequest(patchedDashboardRequest).Execute()

Partially update a dashboard



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
	patchedDashboardRequest := *openapiclient.NewPatchedDashboardRequest() // PatchedDashboardRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.PartialUpdateDashboard(context.Background(), dashboardId, folderId).PatchedDashboardRequest(patchedDashboardRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.PartialUpdateDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateDashboard`: DashboardResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.PartialUpdateDashboard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateDashboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedDashboardRequest** | [**PatchedDashboardRequest**](PatchedDashboardRequest.md) |  | 

### Return type

[**DashboardResponse**](DashboardResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDashboard

> DashboardResponse RetrieveDashboard(ctx, dashboardId, folderId).Fields(fields).Execute()

Retrieve details from a dashboard



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.RetrieveDashboard(context.Background(), dashboardId, folderId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.RetrieveDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDashboard`: DashboardResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.RetrieveDashboard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDashboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**DashboardResponse**](DashboardResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDashboard

> DashboardResponse UpdateDashboard(ctx, dashboardId, folderId).DashboardRequest(dashboardRequest).Execute()

Update a dashboard



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
	dashboardRequest := *openapiclient.NewDashboardRequest("Name_example", "Scope_example") // DashboardRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricsDashboardAPI.UpdateDashboard(context.Background(), dashboardId, folderId).DashboardRequest(dashboardRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricsDashboardAPI.UpdateDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDashboard`: DashboardResponse
	fmt.Fprintf(os.Stdout, "Response from `MetricsDashboardAPI.UpdateDashboard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dashboardId** | **int64** | The unique identifier of the dashboard | 
**folderId** | **int64** | The unique identifier of the folder | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDashboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **dashboardRequest** | [**DashboardRequest**](DashboardRequest.md) |  | 

### Return type

[**DashboardResponse**](DashboardResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

