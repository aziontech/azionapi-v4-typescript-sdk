# \IdentityServiceTokensAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateServiceToken**](IdentityServiceTokensAPI.md#CreateServiceToken) | **Post** /identity/service-tokens | Create a new service token
[**DeleteServiceToken**](IdentityServiceTokensAPI.md#DeleteServiceToken) | **Delete** /identity/service-tokens/{token_id} | Delete a service token
[**ListServiceToken**](IdentityServiceTokensAPI.md#ListServiceToken) | **Get** /identity/service-tokens | List of the account service tokens
[**PartialUpdateServiceToken**](IdentityServiceTokensAPI.md#PartialUpdateServiceToken) | **Patch** /identity/service-tokens/{token_id} | Partially update a service token
[**RetrieveServiceToken**](IdentityServiceTokensAPI.md#RetrieveServiceToken) | **Get** /identity/service-tokens/{token_id} | Retrieve details from a service token
[**UpdateServiceToken**](IdentityServiceTokensAPI.md#UpdateServiceToken) | **Put** /identity/service-tokens/{token_id} | Update a service token



## CreateServiceToken

> ResponseServiceTokenCreate CreateServiceToken(ctx).ServiceTokenCreateRequest(serviceTokenCreateRequest).Execute()

Create a new service token



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
	serviceTokenCreateRequest := *openapiclient.NewServiceTokenCreateRequest("Name_example", time.Now()) // ServiceTokenCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokensAPI.CreateServiceToken(context.Background()).ServiceTokenCreateRequest(serviceTokenCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.CreateServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateServiceToken`: ResponseServiceTokenCreate
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.CreateServiceToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceTokenCreateRequest** | [**ServiceTokenCreateRequest**](ServiceTokenCreateRequest.md) |  | 

### Return type

[**ResponseServiceTokenCreate**](ResponseServiceTokenCreate.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteServiceToken

> ResponseDeleteServiceToken DeleteServiceToken(ctx, tokenId).Execute()

Delete a service token



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
	tokenId := "tokenId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokensAPI.DeleteServiceToken(context.Background(), tokenId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.DeleteServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteServiceToken`: ResponseDeleteServiceToken
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.DeleteServiceToken`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseDeleteServiceToken**](ResponseDeleteServiceToken.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListServiceToken

> PaginatedServiceTokenList ListServiceToken(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of the account service tokens



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
	resp, r, err := apiClient.IdentityServiceTokensAPI.ListServiceToken(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.ListServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListServiceToken`: PaginatedServiceTokenList
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.ListServiceToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedServiceTokenList**](PaginatedServiceTokenList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateServiceToken

> ResponseServiceToken PartialUpdateServiceToken(ctx, tokenId).PatchedServiceTokenUpdateRequest(patchedServiceTokenUpdateRequest).Execute()

Partially update a service token



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
	tokenId := "tokenId_example" // string | 
	patchedServiceTokenUpdateRequest := *openapiclient.NewPatchedServiceTokenUpdateRequest() // PatchedServiceTokenUpdateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokensAPI.PartialUpdateServiceToken(context.Background(), tokenId).PatchedServiceTokenUpdateRequest(patchedServiceTokenUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.PartialUpdateServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateServiceToken`: ResponseServiceToken
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.PartialUpdateServiceToken`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedServiceTokenUpdateRequest** | [**PatchedServiceTokenUpdateRequest**](PatchedServiceTokenUpdateRequest.md) |  | 

### Return type

[**ResponseServiceToken**](ResponseServiceToken.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveServiceToken

> ResponseRetrieveServiceToken RetrieveServiceToken(ctx, tokenId).Fields(fields).Execute()

Retrieve details from a service token



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
	tokenId := "tokenId_example" // string | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokensAPI.RetrieveServiceToken(context.Background(), tokenId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.RetrieveServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveServiceToken`: ResponseRetrieveServiceToken
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.RetrieveServiceToken`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveServiceToken**](ResponseRetrieveServiceToken.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateServiceToken

> ResponseServiceToken UpdateServiceToken(ctx, tokenId).ServiceTokenUpdateRequest(serviceTokenUpdateRequest).Execute()

Update a service token



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
	tokenId := "tokenId_example" // string | 
	serviceTokenUpdateRequest := *openapiclient.NewServiceTokenUpdateRequest("Name_example") // ServiceTokenUpdateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokensAPI.UpdateServiceToken(context.Background(), tokenId).ServiceTokenUpdateRequest(serviceTokenUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokensAPI.UpdateServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateServiceToken`: ResponseServiceToken
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokensAPI.UpdateServiceToken`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tokenId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serviceTokenUpdateRequest** | [**ServiceTokenUpdateRequest**](ServiceTokenUpdateRequest.md) |  | 

### Return type

[**ResponseServiceToken**](ResponseServiceToken.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

