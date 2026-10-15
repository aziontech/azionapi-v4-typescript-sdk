# \DigitalCertificatesCertificateSigningRequestsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCertificateSigningRequest**](DigitalCertificatesCertificateSigningRequestsAPI.md#CreateCertificateSigningRequest) | **Post** /workspace/tls/csr | Create a certificate signing request (CSR)



## CreateCertificateSigningRequest

> CertificateResponse CreateCertificateSigningRequest(ctx).CertificateSigningRequest(certificateSigningRequest).Execute()

Create a certificate signing request (CSR)



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
	certificateSigningRequest := *openapiclient.NewCertificateSigningRequest("Name_example", "CommonName_example", "Country_example", "State_example", "Locality_example", "Organization_example", "OrganizationUnity_example", "Email_example") // CertificateSigningRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DigitalCertificatesCertificateSigningRequestsAPI.CreateCertificateSigningRequest(context.Background()).CertificateSigningRequest(certificateSigningRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DigitalCertificatesCertificateSigningRequestsAPI.CreateCertificateSigningRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCertificateSigningRequest`: CertificateResponse
	fmt.Fprintf(os.Stdout, "Response from `DigitalCertificatesCertificateSigningRequestsAPI.CreateCertificateSigningRequest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCertificateSigningRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateSigningRequest** | [**CertificateSigningRequest**](CertificateSigningRequest.md) |  | 

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

