# \IdentityUserInfoAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RetrieveUserInfo**](IdentityUserInfoAPI.md#RetrieveUserInfo) | **Get** /identity/users/{id}/info | Retrieve user info
[**UpdateUserInfo**](IdentityUserInfoAPI.md#UpdateUserInfo) | **Put** /identity/users/{id}/info | Update an user info



## RetrieveUserInfo

> ResponseRetrieveUserInfo RetrieveUserInfo(ctx, id).Fields(fields).Execute()

Retrieve user info



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
	id := int64(789) // int64 | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityUserInfoAPI.RetrieveUserInfo(context.Background(), id).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityUserInfoAPI.RetrieveUserInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveUserInfo`: ResponseRetrieveUserInfo
	fmt.Fprintf(os.Stdout, "Response from `IdentityUserInfoAPI.RetrieveUserInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveUserInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveUserInfo**](ResponseRetrieveUserInfo.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUserInfo

> ResponseUserInfo UpdateUserInfo(ctx, id).UpdateUserInfoRequest(updateUserInfoRequest).Execute()

Update an user info



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
	id := int64(789) // int64 | 
	updateUserInfoRequest := *openapiclient.NewUpdateUserInfoRequest() // UpdateUserInfoRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityUserInfoAPI.UpdateUserInfo(context.Background(), id).UpdateUserInfoRequest(updateUserInfoRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityUserInfoAPI.UpdateUserInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateUserInfo`: ResponseUserInfo
	fmt.Fprintf(os.Stdout, "Response from `IdentityUserInfoAPI.UpdateUserInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateUserInfoRequest** | [**UpdateUserInfoRequest**](UpdateUserInfoRequest.md) |  | 

### Return type

[**ResponseUserInfo**](ResponseUserInfo.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

