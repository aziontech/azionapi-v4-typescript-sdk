# \DNSDNSSECAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PartialUpdateDnssec**](DNSDNSSECAPI.md#PartialUpdateDnssec) | **Patch** /workspace/dns/zones/{zone_id}/dnssec | Partially update a DNSSEC
[**RetrieveDnssec**](DNSDNSSECAPI.md#RetrieveDnssec) | **Get** /workspace/dns/zones/{zone_id}/dnssec | Retrieve details of a DNSSEC
[**UpdateDnssec**](DNSDNSSECAPI.md#UpdateDnssec) | **Put** /workspace/dns/zones/{zone_id}/dnssec | Update a DNSSEC



## PartialUpdateDnssec

> DNSSECResponse PartialUpdateDnssec(ctx, zoneId).PatchedDNSSECRequest(patchedDNSSECRequest).Execute()

Partially update a DNSSEC



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	patchedDNSSECRequest := *openapiclient.NewPatchedDNSSECRequest() // PatchedDNSSECRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSDNSSECAPI.PartialUpdateDnssec(context.Background(), zoneId).PatchedDNSSECRequest(patchedDNSSECRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSDNSSECAPI.PartialUpdateDnssec``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateDnssec`: DNSSECResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSDNSSECAPI.PartialUpdateDnssec`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateDnssecRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedDNSSECRequest** | [**PatchedDNSSECRequest**](PatchedDNSSECRequest.md) |  | 

### Return type

[**DNSSECResponse**](DNSSECResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDnssec

> DNSSECResponse RetrieveDnssec(ctx, zoneId).Fields(fields).Execute()

Retrieve details of a DNSSEC



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSDNSSECAPI.RetrieveDnssec(context.Background(), zoneId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSDNSSECAPI.RetrieveDnssec``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDnssec`: DNSSECResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSDNSSECAPI.RetrieveDnssec`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDnssecRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**DNSSECResponse**](DNSSECResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDnssec

> DNSSECResponse UpdateDnssec(ctx, zoneId).DNSSECRequest(dNSSECRequest).Execute()

Update a DNSSEC



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	dNSSECRequest := *openapiclient.NewDNSSECRequest(false) // DNSSECRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSDNSSECAPI.UpdateDnssec(context.Background(), zoneId).DNSSECRequest(dNSSECRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSDNSSECAPI.UpdateDnssec``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDnssec`: DNSSECResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSDNSSECAPI.UpdateDnssec`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDnssecRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dNSSECRequest** | [**DNSSECRequest**](DNSSECRequest.md) |  | 

### Return type

[**DNSSECResponse**](DNSSECResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

