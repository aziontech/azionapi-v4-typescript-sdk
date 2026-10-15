# \PolicyLockoutPolicyAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RetrieveLockoutPolicy**](PolicyLockoutPolicyAPI.md#RetrieveLockoutPolicy) | **Get** /auth/policies/lockout | Get Lockout Policy
[**UpdateLockoutPolicy**](PolicyLockoutPolicyAPI.md#UpdateLockoutPolicy) | **Put** /auth/policies/lockout | Put Lockout Policy



## RetrieveLockoutPolicy

> LockoutPolicyResponse RetrieveLockoutPolicy(ctx).Fields(fields).Execute()

Get Lockout Policy



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PolicyLockoutPolicyAPI.RetrieveLockoutPolicy(context.Background()).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PolicyLockoutPolicyAPI.RetrieveLockoutPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveLockoutPolicy`: LockoutPolicyResponse
	fmt.Fprintf(os.Stdout, "Response from `PolicyLockoutPolicyAPI.RetrieveLockoutPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveLockoutPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**LockoutPolicyResponse**](LockoutPolicyResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateLockoutPolicy

> LockoutPolicyResponse UpdateLockoutPolicy(ctx).LockoutPolicyRequest(lockoutPolicyRequest).Execute()

Put Lockout Policy



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
	lockoutPolicyRequest := *openapiclient.NewLockoutPolicyRequest(false, int64(123), int64(123)) // LockoutPolicyRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PolicyLockoutPolicyAPI.UpdateLockoutPolicy(context.Background()).LockoutPolicyRequest(lockoutPolicyRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PolicyLockoutPolicyAPI.UpdateLockoutPolicy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateLockoutPolicy`: LockoutPolicyResponse
	fmt.Fprintf(os.Stdout, "Response from `PolicyLockoutPolicyAPI.UpdateLockoutPolicy`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateLockoutPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lockoutPolicyRequest** | [**LockoutPolicyRequest**](LockoutPolicyRequest.md) |  | 

### Return type

[**LockoutPolicyResponse**](LockoutPolicyResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

