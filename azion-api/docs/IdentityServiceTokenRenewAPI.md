# \IdentityServiceTokenRenewAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RenewServiceToken**](IdentityServiceTokenRenewAPI.md#RenewServiceToken) | **Post** /identity/service-tokens/{id}/renew | Renews a service token



## RenewServiceToken

> ResponseServiceTokenRenew RenewServiceToken(ctx, id).ServiceTokenRenewRequest(serviceTokenRenewRequest).Execute()

Renews a service token



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
	id := int64(789) // int64 | 
	serviceTokenRenewRequest := *openapiclient.NewServiceTokenRenewRequest(time.Now()) // ServiceTokenRenewRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityServiceTokenRenewAPI.RenewServiceToken(context.Background(), id).ServiceTokenRenewRequest(serviceTokenRenewRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityServiceTokenRenewAPI.RenewServiceToken``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RenewServiceToken`: ResponseServiceTokenRenew
	fmt.Fprintf(os.Stdout, "Response from `IdentityServiceTokenRenewAPI.RenewServiceToken`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRenewServiceTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serviceTokenRenewRequest** | [**ServiceTokenRenewRequest**](ServiceTokenRenewRequest.md) |  | 

### Return type

[**ResponseServiceTokenRenew**](ResponseServiceTokenRenew.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

