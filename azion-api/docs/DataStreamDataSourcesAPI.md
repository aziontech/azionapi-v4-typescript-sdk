# \DataStreamDataSourcesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListDataSources**](DataStreamDataSourcesAPI.md#ListDataSources) | **Get** /workspace/stream/data_sources | List of Data Sources



## ListDataSources

> PaginatedDataSourceList ListDataSources(ctx).Active(active).Fields(fields).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Slug(slug).Execute()

List of Data Sources



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
	active := true // bool | Filter by active status. (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	slug := "slug_example" // string | Filter by slug (case-insensitive, exact match). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamDataSourcesAPI.ListDataSources(context.Background()).Active(active).Fields(fields).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Slug(slug).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamDataSourcesAPI.ListDataSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDataSources`: PaginatedDataSourceList
	fmt.Fprintf(os.Stdout, "Response from `DataStreamDataSourcesAPI.ListDataSources`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDataSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **slug** | **string** | Filter by slug (case-insensitive, exact match). | 

### Return type

[**PaginatedDataSourceList**](PaginatedDataSourceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

