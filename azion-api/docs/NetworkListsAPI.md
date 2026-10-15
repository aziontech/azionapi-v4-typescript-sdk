# \NetworkListsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateNetworkList**](NetworkListsAPI.md#CreateNetworkList) | **Post** /workspace/network_lists | Create a Network List
[**DeleteNetworkList**](NetworkListsAPI.md#DeleteNetworkList) | **Delete** /workspace/network_lists/{network_list_id} | Delete a Network List
[**ListNetworkLists**](NetworkListsAPI.md#ListNetworkLists) | **Get** /workspace/network_lists | List Network Lists
[**PartialUpdateNetworkList**](NetworkListsAPI.md#PartialUpdateNetworkList) | **Patch** /workspace/network_lists/{network_list_id} | Partially update a Network List
[**RetrieveNetworkList**](NetworkListsAPI.md#RetrieveNetworkList) | **Get** /workspace/network_lists/{network_list_id} | Retrieve details of a Network List
[**UpdateNetworkList**](NetworkListsAPI.md#UpdateNetworkList) | **Put** /workspace/network_lists/{network_list_id} | Update a Network List



## CreateNetworkList

> NetworkListResponse CreateNetworkList(ctx).NetworkListRequest(networkListRequest).Execute()

Create a Network List



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
	networkListRequest := *openapiclient.NewNetworkListRequest("Name_example", openapiclient.NetworkListTypeEnum("asn"), []string{"Items_example"}) // NetworkListRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.CreateNetworkList(context.Background()).NetworkListRequest(networkListRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.CreateNetworkList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateNetworkList`: NetworkListResponse
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.CreateNetworkList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateNetworkListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListRequest** | [**NetworkListRequest**](NetworkListRequest.md) |  | 

### Return type

[**NetworkListResponse**](NetworkListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteNetworkList

> DeleteResponse DeleteNetworkList(ctx, networkListId).Execute()

Delete a Network List



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
	networkListId := int64(789) // int64 | A unique integer value identifying the network list.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.DeleteNetworkList(context.Background(), networkListId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.DeleteNetworkList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteNetworkList`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.DeleteNetworkList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | A unique integer value identifying the network list. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNetworkListRequest struct via the builder pattern


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


## ListNetworkLists

> PaginatedNetworkListSummaryList ListNetworkLists(ctx).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).ListTypeIn(listTypeIn).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Network Lists



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	listTypeIn := "listTypeIn_example" // string | Filter by list type (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.ListNetworkLists(context.Background()).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).ListTypeIn(listTypeIn).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.ListNetworkLists``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListNetworkLists`: PaginatedNetworkListSummaryList
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.ListNetworkLists`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListNetworkListsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **listTypeIn** | **string** | Filter by list type (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedNetworkListSummaryList**](PaginatedNetworkListSummaryList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateNetworkList

> NetworkListResponse PartialUpdateNetworkList(ctx, networkListId).PatchedNetworkListRequest(patchedNetworkListRequest).Execute()

Partially update a Network List



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
	networkListId := int64(789) // int64 | A unique integer value identifying the network list.
	patchedNetworkListRequest := *openapiclient.NewPatchedNetworkListRequest() // PatchedNetworkListRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.PartialUpdateNetworkList(context.Background(), networkListId).PatchedNetworkListRequest(patchedNetworkListRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.PartialUpdateNetworkList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateNetworkList`: NetworkListResponse
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.PartialUpdateNetworkList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | A unique integer value identifying the network list. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateNetworkListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedNetworkListRequest** | [**PatchedNetworkListRequest**](PatchedNetworkListRequest.md) |  | 

### Return type

[**NetworkListResponse**](NetworkListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveNetworkList

> NetworkListResponse RetrieveNetworkList(ctx, networkListId).Fields(fields).Ipv4(ipv4).Ipv6(ipv6).Execute()

Retrieve details of a Network List



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
	networkListId := int64(789) // int64 | A unique integer value identifying the network list.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	ipv4 := true // bool | Filter by IPv4. Only applicable for network lists of type 'ip_cidr'. (optional)
	ipv6 := true // bool | Filter by IPv6. Only applicable for network lists of type 'ip_cidr'. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.RetrieveNetworkList(context.Background(), networkListId).Fields(fields).Ipv4(ipv4).Ipv6(ipv6).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.RetrieveNetworkList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveNetworkList`: NetworkListResponse
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.RetrieveNetworkList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | A unique integer value identifying the network list. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveNetworkListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ipv4** | **bool** | Filter by IPv4. Only applicable for network lists of type &#39;ip_cidr&#39;. | 
 **ipv6** | **bool** | Filter by IPv6. Only applicable for network lists of type &#39;ip_cidr&#39;. | 

### Return type

[**NetworkListResponse**](NetworkListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateNetworkList

> NetworkListResponse UpdateNetworkList(ctx, networkListId).NetworkListRequest(networkListRequest).Execute()

Update a Network List



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
	networkListId := int64(789) // int64 | A unique integer value identifying the network list.
	networkListRequest := *openapiclient.NewNetworkListRequest("Name_example", openapiclient.NetworkListTypeEnum("asn"), []string{"Items_example"}) // NetworkListRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.NetworkListsAPI.UpdateNetworkList(context.Background(), networkListId).NetworkListRequest(networkListRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListsAPI.UpdateNetworkList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateNetworkList`: NetworkListResponse
	fmt.Fprintf(os.Stdout, "Response from `NetworkListsAPI.UpdateNetworkList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | A unique integer value identifying the network list. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNetworkListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **networkListRequest** | [**NetworkListRequest**](NetworkListRequest.md) |  | 

### Return type

[**NetworkListResponse**](NetworkListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

