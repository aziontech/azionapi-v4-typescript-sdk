# \AccountsDescendantsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDescendantAccount**](AccountsDescendantsAPI.md#CreateDescendantAccount) | **Post** /account/accounts | Create a new account
[**ListDescendantsAccounts**](AccountsDescendantsAPI.md#ListDescendantsAccounts) | **Get** /account/accounts | List accounts
[**PartialUpdateDescendantAccount**](AccountsDescendantsAPI.md#PartialUpdateDescendantAccount) | **Patch** /account/accounts/{account_id} | Partially update account details
[**RetrieveDescendantAccount**](AccountsDescendantsAPI.md#RetrieveDescendantAccount) | **Get** /account/accounts/{account_id} | Retrieve account details
[**UpdateDescendantAccount**](AccountsDescendantsAPI.md#UpdateDescendantAccount) | **Put** /account/accounts/{account_id} | Update account details



## CreateDescendantAccount

> ResponseAccount CreateDescendantAccount(ctx).CreateAccountRequest(createAccountRequest).Execute()

Create a new account



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
	createAccountRequest := openapiclient.CreateAccountRequest{CreateBrandRequest: openapiclient.NewCreateBrandRequest("Name_example", int64(123), "Type_example")} // CreateAccountRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AccountsDescendantsAPI.CreateDescendantAccount(context.Background()).CreateAccountRequest(createAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsDescendantsAPI.CreateDescendantAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDescendantAccount`: ResponseAccount
	fmt.Fprintf(os.Stdout, "Response from `AccountsDescendantsAPI.CreateDescendantAccount`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDescendantAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccountRequest** | [**CreateAccountRequest**](CreateAccountRequest.md) |  | 

### Return type

[**ResponseAccount**](ResponseAccount.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListDescendantsAccounts

> PaginatedAccountList ListDescendantsAccounts(ctx).Active(active).Created(created).CreatedGte(createdGte).CreatedLte(createdLte).Fields(fields).Id(id).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).ParentId(parentId).Search(search).Execute()

List accounts



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
	active := true // bool | Filter by active status. (optional)
	created := time.Now() // time.Time | Filter by created date (exact match). (optional)
	createdGte := time.Now() // time.Time | Filter by created date (greater than or equal). (optional)
	createdLte := time.Now() // time.Time | Filter by created date (less than or equal). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := "id_example" // string | Filter by account ID (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModified := time.Now() // time.Time | Filter by last modified date (exact match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	parentId := "parentId_example" // string | Filter by parent account ID (accepts comma-separated values). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AccountsDescendantsAPI.ListDescendantsAccounts(context.Background()).Active(active).Created(created).CreatedGte(createdGte).CreatedLte(createdLte).Fields(fields).Id(id).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).ParentId(parentId).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsDescendantsAPI.ListDescendantsAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDescendantsAccounts`: PaginatedAccountList
	fmt.Fprintf(os.Stdout, "Response from `AccountsDescendantsAPI.ListDescendantsAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDescendantsAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **created** | **time.Time** | Filter by created date (exact match). | 
 **createdGte** | **time.Time** | Filter by created date (greater than or equal). | 
 **createdLte** | **time.Time** | Filter by created date (less than or equal). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **string** | Filter by account ID (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModified** | **time.Time** | Filter by last modified date (exact match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **parentId** | **string** | Filter by parent account ID (accepts comma-separated values). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedAccountList**](PaginatedAccountList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateDescendantAccount

> ResponseAccount PartialUpdateDescendantAccount(ctx, accountId).PatchedAccountRequest(patchedAccountRequest).Execute()

Partially update account details



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
	accountId := int64(789) // int64 | A unique integer value identifying the account.
	patchedAccountRequest := openapiclient.PatchedAccountRequest{PatchedBrandRequest: openapiclient.NewPatchedBrandRequest("Type_example")} // PatchedAccountRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AccountsDescendantsAPI.PartialUpdateDescendantAccount(context.Background(), accountId).PatchedAccountRequest(patchedAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsDescendantsAPI.PartialUpdateDescendantAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateDescendantAccount`: ResponseAccount
	fmt.Fprintf(os.Stdout, "Response from `AccountsDescendantsAPI.PartialUpdateDescendantAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **int64** | A unique integer value identifying the account. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateDescendantAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedAccountRequest** | [**PatchedAccountRequest**](PatchedAccountRequest.md) |  | 

### Return type

[**ResponseAccount**](ResponseAccount.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDescendantAccount

> ResponseRetrieveAccount RetrieveDescendantAccount(ctx, accountId).Fields(fields).Execute()

Retrieve account details



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
	accountId := int64(789) // int64 | A unique integer value identifying the account.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AccountsDescendantsAPI.RetrieveDescendantAccount(context.Background(), accountId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsDescendantsAPI.RetrieveDescendantAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDescendantAccount`: ResponseRetrieveAccount
	fmt.Fprintf(os.Stdout, "Response from `AccountsDescendantsAPI.RetrieveDescendantAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **int64** | A unique integer value identifying the account. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDescendantAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveAccount**](ResponseRetrieveAccount.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDescendantAccount

> ResponseAccount UpdateDescendantAccount(ctx, accountId).AccountRequest(accountRequest).Execute()

Update account details



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
	accountId := int64(789) // int64 | A unique integer value identifying the account.
	accountRequest := openapiclient.AccountRequest{BrandRequest: openapiclient.NewBrandRequest("Name_example", "Type_example")} // AccountRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AccountsDescendantsAPI.UpdateDescendantAccount(context.Background(), accountId).AccountRequest(accountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsDescendantsAPI.UpdateDescendantAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDescendantAccount`: ResponseAccount
	fmt.Fprintf(os.Stdout, "Response from `AccountsDescendantsAPI.UpdateDescendantAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **int64** | A unique integer value identifying the account. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDescendantAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountRequest** | [**AccountRequest**](AccountRequest.md) |  | 

### Return type

[**ResponseAccount**](ResponseAccount.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

