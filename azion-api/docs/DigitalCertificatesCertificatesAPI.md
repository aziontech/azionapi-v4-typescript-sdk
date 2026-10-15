# \DigitalCertificatesCertificatesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCertificate**](DigitalCertificatesCertificatesAPI.md#CreateCertificate) | **Post** /workspace/tls/certificates | Create a certificate
[**DeleteCertificate**](DigitalCertificatesCertificatesAPI.md#DeleteCertificate) | **Delete** /workspace/tls/certificates/{certificate_id} | Delete a certificate
[**ListCertificates**](DigitalCertificatesCertificatesAPI.md#ListCertificates) | **Get** /workspace/tls/certificates | List certificates
[**PartialUpdateCertificate**](DigitalCertificatesCertificatesAPI.md#PartialUpdateCertificate) | **Patch** /workspace/tls/certificates/{certificate_id} | Partially update a certificate
[**RetrieveCertificate**](DigitalCertificatesCertificatesAPI.md#RetrieveCertificate) | **Get** /workspace/tls/certificates/{certificate_id} | Retrieve details from a certificate
[**UpdateCertificate**](DigitalCertificatesCertificatesAPI.md#UpdateCertificate) | **Put** /workspace/tls/certificates/{certificate_id} | Update a certificate



## CreateCertificate

> CertificateResponse CreateCertificate(ctx).Certificate(certificate).Execute()

Create a certificate



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
	certificate := *openapiclient.NewCertificate(int64(123), "Name_example", "Issuer_example", []string{"SubjectName_example"}, "Validity_example", false, "Status_example", "StatusDetail_example", "Csr_example", "Challenge_example", "Authority_example", "KeyAlgorithm_example", "ProductVersion_example", "LastEditor_example", time.Now(), time.Now(), time.Now()) // Certificate | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.CreateCertificate(context.Background()).Certificate(certificate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.CreateCertificate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCertificate`: CertificateResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.CreateCertificate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | [**Certificate**](Certificate.md) |  | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCertificate

> DeleteResponse DeleteCertificate(ctx, certificateId).Execute()

Delete a certificate



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
	certificateId := int64(789) // int64 | The unique identifier of the certificate

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.DeleteCertificate(context.Background(), certificateId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.DeleteCertificate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCertificate`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.DeleteCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **int64** | The unique identifier of the certificate | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCertificateRequest struct via the builder pattern


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


## ListCertificates

> PaginatedCertificateList ListCertificates(ctx).CertificateType(certificateType).Fields(fields).Id(id).Issuer(issuer).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Managed(managed).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).RenewedAt(renewedAt).RenewedAtGte(renewedAtGte).RenewedAtLte(renewedAtLte).Search(search).Execute()

List certificates



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
	certificateType := "certificateType_example" // string | Filter by certificate type (accepts comma-separated values). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by certificate ID (accepts comma-separated values). (optional)
	issuer := "issuer_example" // string | Filter by issuer (case-insensitive, partial match). (optional)
	lastModified := time.Now() // time.Time | Filter by exact last modified date and time. (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	managed := true // bool | Filter by managed status. (optional)
	name := "name_example" // string | Filter by certificate name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	renewedAt := time.Now() // time.Time | Filter by exact renewed date and time. (optional)
	renewedAtGte := time.Now() // time.Time | Filter by renewed date (greater than or equal). (optional)
	renewedAtLte := time.Now() // time.Time | Filter by renewed date (less than or equal). (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.ListCertificates(context.Background()).CertificateType(certificateType).Fields(fields).Id(id).Issuer(issuer).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Managed(managed).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).RenewedAt(renewedAt).RenewedAtGte(renewedAtGte).RenewedAtLte(renewedAtLte).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.ListCertificates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertificates`: PaginatedCertificateList
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.ListCertificates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCertificatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateType** | **string** | Filter by certificate type (accepts comma-separated values). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by certificate ID (accepts comma-separated values). | 
 **issuer** | **string** | Filter by issuer (case-insensitive, partial match). | 
 **lastModified** | **time.Time** | Filter by exact last modified date and time. | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **managed** | **bool** | Filter by managed status. | 
 **name** | **string** | Filter by certificate name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **renewedAt** | **time.Time** | Filter by exact renewed date and time. | 
 **renewedAtGte** | **time.Time** | Filter by renewed date (greater than or equal). | 
 **renewedAtLte** | **time.Time** | Filter by renewed date (less than or equal). | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedCertificateList**](PaginatedCertificateList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCertificate

> CertificateResponse PartialUpdateCertificate(ctx, certificateId).PatchedCertificate(patchedCertificate).Execute()

Partially update a certificate



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
	certificateId := int64(789) // int64 | The unique identifier of the certificate
	patchedCertificate := *openapiclient.NewPatchedCertificate() // PatchedCertificate |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.PartialUpdateCertificate(context.Background(), certificateId).PatchedCertificate(patchedCertificate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.PartialUpdateCertificate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCertificate`: CertificateResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.PartialUpdateCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **int64** | The unique identifier of the certificate | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedCertificate** | [**PatchedCertificate**](PatchedCertificate.md) |  | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCertificate

> CertificateResponse RetrieveCertificate(ctx, certificateId).Fields(fields).Execute()

Retrieve details from a certificate



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
	certificateId := int64(789) // int64 | The unique identifier of the certificate
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.RetrieveCertificate(context.Background(), certificateId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.RetrieveCertificate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCertificate`: CertificateResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.RetrieveCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **int64** | The unique identifier of the certificate | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCertificate

> CertificateResponse UpdateCertificate(ctx, certificateId).Certificate(certificate).Execute()

Update a certificate



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
	certificateId := int64(789) // int64 | The unique identifier of the certificate
	certificate := *openapiclient.NewCertificate(int64(123), "Name_example", "Issuer_example", []string{"SubjectName_example"}, "Validity_example", false, "Status_example", "StatusDetail_example", "Csr_example", "Challenge_example", "Authority_example", "KeyAlgorithm_example", "ProductVersion_example", "LastEditor_example", time.Now(), time.Now(), time.Now()) // Certificate | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificatesAPI.UpdateCertificate(context.Background(), certificateId).Certificate(certificate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificatesAPI.UpdateCertificate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCertificate`: CertificateResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificatesAPI.UpdateCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **int64** | The unique identifier of the certificate | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **certificate** | [**Certificate**](Certificate.md) |  | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

