# \DigitalCertificatesCertificateRevocationListsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsAPI.md#CreateCertificateRevocationList) | **Post** /workspace/tls/crls | Create a certificate revocation lists (CRL)
[**DeleteCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsAPI.md#DeleteCertificateRevocationList) | **Delete** /workspace/tls/crls/{crl_id} | Delete a certificate revocation list
[**ListCertificateRevocationLists**](DigitalCertificatesCertificateRevocationListsAPI.md#ListCertificateRevocationLists) | **Get** /workspace/tls/crls | List certificate revocation lists (CRL)
[**PartialUpdateCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsAPI.md#PartialUpdateCertificateRevocationList) | **Patch** /workspace/tls/crls/{crl_id} | Update a certificate revocation lists (CRL)
[**RetrieveCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsAPI.md#RetrieveCertificateRevocationList) | **Get** /workspace/tls/crls/{crl_id} | Retrieve details from a certificate revocation lists (CRL)
[**UpdateCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsAPI.md#UpdateCertificateRevocationList) | **Put** /workspace/tls/crls/{crl_id} | Update a certificate revocation lists (CRL)



## CreateCertificateRevocationList

> CertificateRevocationListResponse CreateCertificateRevocationList(ctx).CertificateRevocationList(certificateRevocationList).Execute()

Create a certificate revocation lists (CRL)



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
	certificateRevocationList := *openapiclient.NewCertificateRevocationList(int64(123), "Name_example", "LastEditor_example", time.Now(), time.Now(), "ProductVersion_example", "Issuer_example", time.Now(), time.Now(), "Crl_example") // CertificateRevocationList | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.CreateCertificateRevocationList(context.Background()).CertificateRevocationList(certificateRevocationList).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.CreateCertificateRevocationList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCertificateRevocationList`: CertificateRevocationListResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.CreateCertificateRevocationList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCertificateRevocationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateRevocationList** | [**CertificateRevocationList**](CertificateRevocationList.md) |  | 

### Return type

[**CertificateRevocationListResponse**](CertificateRevocationListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCertificateRevocationList

> DeleteResponse DeleteCertificateRevocationList(ctx, crlId).Execute()

Delete a certificate revocation list



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
	crlId := int64(789) // int64 | The unique identifier of the certificate revocation list

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.DeleteCertificateRevocationList(context.Background(), crlId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.DeleteCertificateRevocationList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCertificateRevocationList`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.DeleteCertificateRevocationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**crlId** | **int64** | The unique identifier of the certificate revocation list | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCertificateRevocationListRequest struct via the builder pattern


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


## ListCertificateRevocationLists

> PaginatedCertificateRevocationList ListCertificateRevocationLists(ctx).Fields(fields).Id(id).Issuer(issuer).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).LastUpdate(lastUpdate).LastUpdateGte(lastUpdateGte).LastUpdateLte(lastUpdateLte).Name(name).NextUpdate(nextUpdate).NextUpdateGte(nextUpdateGte).NextUpdateLte(nextUpdateLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List certificate revocation lists (CRL)



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
	id := int64(789) // int64 | Filter by CRL ID (accepts comma-separated values). (optional)
	issuer := "issuer_example" // string | Filter by issuer (case-insensitive, partial match). (optional)
	lastModified := time.Now() // time.Time | Filter by exact last modified date and time. (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	lastUpdate := time.Now() // time.Time | Filter by exact last update date and time. (optional)
	lastUpdateGte := time.Now() // time.Time | Filter by last update date (greater than or equal). (optional)
	lastUpdateLte := time.Now() // time.Time | Filter by last update date (less than or equal). (optional)
	name := "name_example" // string | Filter by CRL name (case-insensitive, partial match). (optional)
	nextUpdate := time.Now() // time.Time | Filter by exact next update date and time. (optional)
	nextUpdateGte := time.Now() // time.Time | Filter by next update date (greater than or equal). (optional)
	nextUpdateLte := time.Now() // time.Time | Filter by next update date (less than or equal). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.ListCertificateRevocationLists(context.Background()).Fields(fields).Id(id).Issuer(issuer).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).LastUpdate(lastUpdate).LastUpdateGte(lastUpdateGte).LastUpdateLte(lastUpdateLte).Name(name).NextUpdate(nextUpdate).NextUpdateGte(nextUpdateGte).NextUpdateLte(nextUpdateLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.ListCertificateRevocationLists``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertificateRevocationLists`: PaginatedCertificateRevocationList
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.ListCertificateRevocationLists`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCertificateRevocationListsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by CRL ID (accepts comma-separated values). | 
 **issuer** | **string** | Filter by issuer (case-insensitive, partial match). | 
 **lastModified** | **time.Time** | Filter by exact last modified date and time. | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **lastUpdate** | **time.Time** | Filter by exact last update date and time. | 
 **lastUpdateGte** | **time.Time** | Filter by last update date (greater than or equal). | 
 **lastUpdateLte** | **time.Time** | Filter by last update date (less than or equal). | 
 **name** | **string** | Filter by CRL name (case-insensitive, partial match). | 
 **nextUpdate** | **time.Time** | Filter by exact next update date and time. | 
 **nextUpdateGte** | **time.Time** | Filter by next update date (greater than or equal). | 
 **nextUpdateLte** | **time.Time** | Filter by next update date (less than or equal). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedCertificateRevocationList**](PaginatedCertificateRevocationList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCertificateRevocationList

> CertificateRevocationListResponse PartialUpdateCertificateRevocationList(ctx, crlId).PatchedCertificateRevocationList(patchedCertificateRevocationList).Execute()

Update a certificate revocation lists (CRL)



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
	crlId := int64(789) // int64 | The unique identifier of the certificate revocation list
	patchedCertificateRevocationList := *openapiclient.NewPatchedCertificateRevocationList() // PatchedCertificateRevocationList |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.PartialUpdateCertificateRevocationList(context.Background(), crlId).PatchedCertificateRevocationList(patchedCertificateRevocationList).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.PartialUpdateCertificateRevocationList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCertificateRevocationList`: CertificateRevocationListResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.PartialUpdateCertificateRevocationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**crlId** | **int64** | The unique identifier of the certificate revocation list | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCertificateRevocationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedCertificateRevocationList** | [**PatchedCertificateRevocationList**](PatchedCertificateRevocationList.md) |  | 

### Return type

[**CertificateRevocationListResponse**](CertificateRevocationListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCertificateRevocationList

> CertificateRevocationListResponse RetrieveCertificateRevocationList(ctx, crlId).Fields(fields).Execute()

Retrieve details from a certificate revocation lists (CRL)



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
	crlId := int64(789) // int64 | The unique identifier of the certificate revocation list
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.RetrieveCertificateRevocationList(context.Background(), crlId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.RetrieveCertificateRevocationList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCertificateRevocationList`: CertificateRevocationListResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.RetrieveCertificateRevocationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**crlId** | **int64** | The unique identifier of the certificate revocation list | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCertificateRevocationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CertificateRevocationListResponse**](CertificateRevocationListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCertificateRevocationList

> CertificateRevocationListResponse UpdateCertificateRevocationList(ctx, crlId).CertificateRevocationList(certificateRevocationList).Execute()

Update a certificate revocation lists (CRL)



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
	crlId := int64(789) // int64 | The unique identifier of the certificate revocation list
	certificateRevocationList := *openapiclient.NewCertificateRevocationList(int64(123), "Name_example", "LastEditor_example", time.Now(), time.Now(), "ProductVersion_example", "Issuer_example", time.Now(), time.Now(), "Crl_example") // CertificateRevocationList | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateRevocationListsAPI.UpdateCertificateRevocationList(context.Background(), crlId).CertificateRevocationList(certificateRevocationList).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateRevocationListsAPI.UpdateCertificateRevocationList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCertificateRevocationList`: CertificateRevocationListResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateRevocationListsAPI.UpdateCertificateRevocationList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**crlId** | **int64** | The unique identifier of the certificate revocation list | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCertificateRevocationListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **certificateRevocationList** | [**CertificateRevocationList**](CertificateRevocationList.md) |  | 

### Return type

[**CertificateRevocationListResponse**](CertificateRevocationListResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

