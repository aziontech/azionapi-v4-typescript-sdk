# \FavoritesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFavorite**](FavoritesAPI.md#CreateFavorite) | **Post** /identity/user/favorites | Create a new favorite
[**DeleteFavorite**](FavoritesAPI.md#DeleteFavorite) | **Delete** /identity/user/favorites/{favorite_id} | Delete a favorite
[**ListFavorites**](FavoritesAPI.md#ListFavorites) | **Get** /identity/user/favorites | List of the favorites



## CreateFavorite

> ResponseFavorite CreateFavorite(ctx).FavoriteRequest(favoriteRequest).Execute()

Create a new favorite



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
	favoriteRequest := *openapiclient.NewFavoriteRequest("Uri_example") // FavoriteRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FavoritesAPI.CreateFavorite(context.Background()).FavoriteRequest(favoriteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FavoritesAPI.CreateFavorite``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFavorite`: ResponseFavorite
	fmt.Fprintf(os.Stdout, "Response from `FavoritesAPI.CreateFavorite`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFavoriteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **favoriteRequest** | [**FavoriteRequest**](FavoriteRequest.md) |  | 

### Return type

[**ResponseFavorite**](ResponseFavorite.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFavorite

> ResponseDeleteFavorite DeleteFavorite(ctx, favoriteId).Execute()

Delete a favorite



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
	favoriteId := int64(789) // int64 | A unique integer value identifying this Favorite.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FavoritesAPI.DeleteFavorite(context.Background(), favoriteId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FavoritesAPI.DeleteFavorite``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFavorite`: ResponseDeleteFavorite
	fmt.Fprintf(os.Stdout, "Response from `FavoritesAPI.DeleteFavorite`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**favoriteId** | **int64** | A unique integer value identifying this Favorite. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFavoriteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteFavorite**](ResponseDeleteFavorite.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFavorites

> PaginatedFavoriteList ListFavorites(ctx).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Uri(uri).Execute()

List of the favorites



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 |  (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	type_ := "type__example" // string |  (optional)
	uri := "uri_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FavoritesAPI.ListFavorites(context.Background()).Fields(fields).Id(id).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Type_(type_).Uri(uri).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FavoritesAPI.ListFavorites``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFavorites`: PaginatedFavoriteList
	fmt.Fprintf(os.Stdout, "Response from `FavoritesAPI.ListFavorites`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFavoritesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** |  | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **type_** | **string** |  | 
 **uri** | **string** |  | 

### Return type

[**PaginatedFavoriteList**](PaginatedFavoriteList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

