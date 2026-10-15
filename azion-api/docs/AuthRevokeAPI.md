# \AuthRevokeAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AuthUserRevoke**](AuthRevokeAPI.md#AuthUserRevoke) | **Post** /account/auth/revoke | Revoke user JWT refresh token



## AuthUserRevoke

> StateExecutedResponse AuthUserRevoke(ctx).Body(body).Execute()

Revoke user JWT refresh token



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
	body := interface{}(987) // interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthRevokeAPI.AuthUserRevoke(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthRevokeAPI.AuthUserRevoke``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AuthUserRevoke`: StateExecutedResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthRevokeAPI.AuthUserRevoke`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthUserRevokeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **interface{}** |  | 

### Return type

[**StateExecutedResponse**](StateExecutedResponse.md)

### Authorization

[JwtRefreshAuthentication](../README.md#JwtRefreshAuthentication)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

