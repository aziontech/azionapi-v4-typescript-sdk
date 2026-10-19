# \AuthLoginAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AuthUserLogin**](AuthLoginAPI.md#AuthUserLogin) | **Post** /account/auth/login | User Login – Generate JWT Tokens
[**AuthUserLoginMethod**](AuthLoginAPI.md#AuthUserLoginMethod) | **Get** /account/auth/login/method | Check User Authentication Method
[**TotpVerify**](AuthLoginAPI.md#TotpVerify) | **Post** /account/auth/mfa/totp/verify | Retrieve user JWT tokens by MFA auth



## AuthUserLogin

> ResponseLogin AuthUserLogin(ctx).LoginRequest(loginRequest).Execute()

User Login – Generate JWT Tokens



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
	loginRequest := *openapiclient.NewLoginRequest("Email_example", "Password_example") // LoginRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthLoginAPI.AuthUserLogin(context.Background()).LoginRequest(loginRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthLoginAPI.AuthUserLogin``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AuthUserLogin`: ResponseLogin
	fmt.Fprintf(os.Stdout, "Response from `AuthLoginAPI.AuthUserLogin`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthUserLoginRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md) |  | 

### Return type

[**ResponseLogin**](ResponseLogin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthUserLoginMethod

> UserLoginMethodResponse AuthUserLoginMethod(ctx).Email(email).Fields(fields).Execute()

Check User Authentication Method



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
	email := "email_example" // string | Email address of the user (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthLoginAPI.AuthUserLoginMethod(context.Background()).Email(email).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthLoginAPI.AuthUserLoginMethod``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AuthUserLoginMethod`: UserLoginMethodResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthLoginAPI.AuthUserLoginMethod`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthUserLoginMethodRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **string** | Email address of the user | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**UserLoginMethodResponse**](UserLoginMethodResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TotpVerify

> TokenPairResponse TotpVerify(ctx).TOTPVerificationRequest(tOTPVerificationRequest).Execute()

Retrieve user JWT tokens by MFA auth



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
	tOTPVerificationRequest := *openapiclient.NewTOTPVerificationRequest("Code_example") // TOTPVerificationRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthLoginAPI.TotpVerify(context.Background()).TOTPVerificationRequest(tOTPVerificationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthLoginAPI.TotpVerify``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TotpVerify`: TokenPairResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthLoginAPI.TotpVerify`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTotpVerifyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tOTPVerificationRequest** | [**TOTPVerificationRequest**](TOTPVerificationRequest.md) |  | 

### Return type

[**TokenPairResponse**](TokenPairResponse.md)

### Authorization

[JwtMfaAuthentication](../README.md#JwtMfaAuthentication)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

