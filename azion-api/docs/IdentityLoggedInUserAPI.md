# \IdentityLoggedInUserAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListLoggedUser**](IdentityLoggedInUserAPI.md#ListLoggedUser) | **Get** /identity/user | Retrieve details from the currently logged-in user
[**PartialUpdateLoggedUser**](IdentityLoggedInUserAPI.md#PartialUpdateLoggedUser) | **Patch** /identity/user | Partially update the currently logged-in user
[**UpdateLoggedUser**](IdentityLoggedInUserAPI.md#UpdateLoggedUser) | **Put** /identity/user | Update the currently logged-in user



## ListLoggedUser

> ResponseRetrieveUser ListLoggedUser(ctx).Fields(fields).Execute()

Retrieve details from the currently logged-in user



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
	resp, r, err := apiClient.IdentityLoggedInUserAPI.ListLoggedUser(context.Background()).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityLoggedInUserAPI.ListLoggedUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListLoggedUser`: ResponseRetrieveUser
	fmt.Fprintf(os.Stdout, "Response from `IdentityLoggedInUserAPI.ListLoggedUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListLoggedUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveUser**](ResponseRetrieveUser.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateLoggedUser

> ResponseUser PartialUpdateLoggedUser(ctx).PatchedUserRequest(patchedUserRequest).Execute()

Partially update the currently logged-in user



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
	patchedUserRequest := *openapiclient.NewPatchedUserRequest() // PatchedUserRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityLoggedInUserAPI.PartialUpdateLoggedUser(context.Background()).PatchedUserRequest(patchedUserRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityLoggedInUserAPI.PartialUpdateLoggedUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateLoggedUser`: ResponseUser
	fmt.Fprintf(os.Stdout, "Response from `IdentityLoggedInUserAPI.PartialUpdateLoggedUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateLoggedUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUserRequest** | [**PatchedUserRequest**](PatchedUserRequest.md) |  | 

### Return type

[**ResponseUser**](ResponseUser.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateLoggedUser

> ResponseUser UpdateLoggedUser(ctx).UserRequest(userRequest).Execute()

Update the currently logged-in user



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
	userRequest := *openapiclient.NewUserRequest("Name_example", "Email_example") // UserRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityLoggedInUserAPI.UpdateLoggedUser(context.Background()).UserRequest(userRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityLoggedInUserAPI.UpdateLoggedUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateLoggedUser`: ResponseUser
	fmt.Fprintf(os.Stdout, "Response from `IdentityLoggedInUserAPI.UpdateLoggedUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateLoggedUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRequest** | [**UserRequest**](UserRequest.md) |  | 

### Return type

[**ResponseUser**](ResponseUser.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

