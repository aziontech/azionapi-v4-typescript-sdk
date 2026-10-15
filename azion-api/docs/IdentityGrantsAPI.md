# \IdentityGrantsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateGrant**](IdentityGrantsAPI.md#CreateGrant) | **Post** /identity/grants | Create a new grant
[**DeleteGrant**](IdentityGrantsAPI.md#DeleteGrant) | **Delete** /identity/grants/{grant_id} | Delete a grant
[**ListGrants**](IdentityGrantsAPI.md#ListGrants) | **Get** /identity/grants | List grants for the account
[**PartialUpdateGrant**](IdentityGrantsAPI.md#PartialUpdateGrant) | **Patch** /identity/grants/{grant_id} | Partially update a grant
[**RetrieveGrant**](IdentityGrantsAPI.md#RetrieveGrant) | **Get** /identity/grants/{grant_id} | Retrieve grant details
[**UpdateGrant**](IdentityGrantsAPI.md#UpdateGrant) | **Put** /identity/grants/{grant_id} | Update a grant



## CreateGrant

> ResponseGrant CreateGrant(ctx).GrantRequest(grantRequest).Execute()

Create a new grant



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
	grantRequest := *openapiclient.NewGrantRequest(false, int64(123)) // GrantRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.CreateGrant(context.Background()).GrantRequest(grantRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.CreateGrant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateGrant`: ResponseGrant
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.CreateGrant`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantRequest** | [**GrantRequest**](GrantRequest.md) |  | 

### Return type

[**ResponseGrant**](ResponseGrant.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGrant

> ResponseDeleteGrant DeleteGrant(ctx, grantId).Execute()

Delete a grant



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
	grantId := "grantId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.DeleteGrant(context.Background(), grantId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.DeleteGrant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteGrant`: ResponseDeleteGrant
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.DeleteGrant`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**grantId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteGrant**](ResponseDeleteGrant.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListGrants

> PaginatedGrantList ListGrants(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List grants for the account



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
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.ListGrants(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.ListGrants``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListGrants`: PaginatedGrantList
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.ListGrants`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListGrantsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedGrantList**](PaginatedGrantList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateGrant

> ResponseGrant PartialUpdateGrant(ctx, grantId).PatchedGrantRequest(patchedGrantRequest).Execute()

Partially update a grant



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
	grantId := "grantId_example" // string | 
	patchedGrantRequest := *openapiclient.NewPatchedGrantRequest() // PatchedGrantRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.PartialUpdateGrant(context.Background(), grantId).PatchedGrantRequest(patchedGrantRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.PartialUpdateGrant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateGrant`: ResponseGrant
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.PartialUpdateGrant`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**grantId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedGrantRequest** | [**PatchedGrantRequest**](PatchedGrantRequest.md) |  | 

### Return type

[**ResponseGrant**](ResponseGrant.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveGrant

> ResponseRetrieveGrant RetrieveGrant(ctx, grantId).Fields(fields).Execute()

Retrieve grant details



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
	grantId := "grantId_example" // string | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.RetrieveGrant(context.Background(), grantId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.RetrieveGrant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveGrant`: ResponseRetrieveGrant
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.RetrieveGrant`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**grantId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveGrant**](ResponseRetrieveGrant.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateGrant

> ResponseGrant UpdateGrant(ctx, grantId).GrantRequest(grantRequest).Execute()

Update a grant



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
	grantId := "grantId_example" // string | 
	grantRequest := *openapiclient.NewGrantRequest(false, int64(123)) // GrantRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGrantsAPI.UpdateGrant(context.Background(), grantId).GrantRequest(grantRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGrantsAPI.UpdateGrant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateGrant`: ResponseGrant
	fmt.Fprintf(os.Stdout, "Response from `IdentityGrantsAPI.UpdateGrant`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**grantId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **grantRequest** | [**GrantRequest**](GrantRequest.md) |  | 

### Return type

[**ResponseGrant**](ResponseGrant.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

