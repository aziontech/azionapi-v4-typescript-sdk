# \StorageCredentialsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCredential**](StorageCredentialsAPI.md#CreateCredential) | **Post** /workspace/storage/credentials | Create a new credential
[**DeleteCredential**](StorageCredentialsAPI.md#DeleteCredential) | **Delete** /workspace/storage/credentials/{credential_id} | Delete a credential
[**ListCredentials**](StorageCredentialsAPI.md#ListCredentials) | **Get** /workspace/storage/credentials | List credentials
[**RetrieveCredential**](StorageCredentialsAPI.md#RetrieveCredential) | **Get** /workspace/storage/credentials/{credential_id} | Retrieve details from a credential



## CreateCredential

> CredentialResponse CreateCredential(ctx).CredentialCreateRequest(credentialCreateRequest).Execute()

Create a new credential



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
	credentialCreateRequest := *openapiclient.NewCredentialCreateRequest("Name_example", []string{"Capabilities_example"}) // CredentialCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageCredentialsAPI.CreateCredential(context.Background()).CredentialCreateRequest(credentialCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageCredentialsAPI.CreateCredential``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCredential`: CredentialResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageCredentialsAPI.CreateCredential`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialCreateRequest** | [**CredentialCreateRequest**](CredentialCreateRequest.md) |  | 

### Return type

[**CredentialResponse**](CredentialResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCredential

> DeleteResponse DeleteCredential(ctx, credentialId).Execute()

Delete a credential



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
	credentialId := int64(789) // int64 | The unique identifier of the credential

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageCredentialsAPI.DeleteCredential(context.Background(), credentialId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageCredentialsAPI.DeleteCredential``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCredential`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageCredentialsAPI.DeleteCredential`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**credentialId** | **int64** | The unique identifier of the credential | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCredentialRequest struct via the builder pattern


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


## ListCredentials

> PaginatedCredentialList ListCredentials(ctx).AccessKey(accessKey).Buckets(buckets).BucketsIn(bucketsIn).Fields(fields).Id(id).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List credentials



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
	accessKey := "accessKey_example" // string | Filter by access key (exact match). (optional)
	buckets := "buckets_example" // string | Filter by bucket name (exact match). (optional)
	bucketsIn := "bucketsIn_example" // string | Filter by multiple bucket names (comma-separated). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModified := time.Now() // time.Time | Filter by last modified date (exact match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageCredentialsAPI.ListCredentials(context.Background()).AccessKey(accessKey).Buckets(buckets).BucketsIn(bucketsIn).Fields(fields).Id(id).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageCredentialsAPI.ListCredentials``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCredentials`: PaginatedCredentialList
	fmt.Fprintf(os.Stdout, "Response from `StorageCredentialsAPI.ListCredentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCredentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessKey** | **string** | Filter by access key (exact match). | 
 **buckets** | **string** | Filter by bucket name (exact match). | 
 **bucketsIn** | **string** | Filter by multiple bucket names (comma-separated). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModified** | **time.Time** | Filter by last modified date (exact match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedCredentialList**](PaginatedCredentialList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCredential

> CredentialResponse RetrieveCredential(ctx, credentialId).Fields(fields).Execute()

Retrieve details from a credential



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
	credentialId := int64(789) // int64 | The unique identifier of the credential
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageCredentialsAPI.RetrieveCredential(context.Background(), credentialId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageCredentialsAPI.RetrieveCredential``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCredential`: CredentialResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageCredentialsAPI.RetrieveCredential`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**credentialId** | **int64** | The unique identifier of the credential | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCredentialRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CredentialResponse**](CredentialResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

