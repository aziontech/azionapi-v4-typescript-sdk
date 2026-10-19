# \AuthMFATOTPDeviceAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTotpDevice**](AuthMFATOTPDeviceAPI.md#CreateTotpDevice) | **Post** /account/auth/mfa/totp | Create a TOTP device
[**DeleteTotpDevice**](AuthMFATOTPDeviceAPI.md#DeleteTotpDevice) | **Delete** /auth/mfa/totp/{device_id} | Delete a TOTP device
[**ListTotpDevices**](AuthMFATOTPDeviceAPI.md#ListTotpDevices) | **Get** /account/auth/mfa/totp | List of TOTP devices



## CreateTotpDevice

> TOTPDeviceResponse CreateTotpDevice(ctx).Body(body).Execute()

Create a TOTP device



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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthMFATOTPDeviceAPI.CreateTotpDevice(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthMFATOTPDeviceAPI.CreateTotpDevice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTotpDevice`: TOTPDeviceResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthMFATOTPDeviceAPI.CreateTotpDevice`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTotpDeviceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

[**TOTPDeviceResponse**](TOTPDeviceResponse.md)

### Authorization

[JwtMfaAuthentication](../README.md#JwtMfaAuthentication)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTotpDevice

> DeleteResponse DeleteTotpDevice(ctx, deviceId).Execute()

Delete a TOTP device



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
	deviceId := int64(789) // int64 | A unique integer value identifying the TOTP device.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthMFATOTPDeviceAPI.DeleteTotpDevice(context.Background(), deviceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthMFATOTPDeviceAPI.DeleteTotpDevice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteTotpDevice`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthMFATOTPDeviceAPI.DeleteTotpDevice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceId** | **int64** | A unique integer value identifying the TOTP device. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTotpDeviceRequest struct via the builder pattern


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


## ListTotpDevices

> PaginatedTOTPDeviceList ListTotpDevices(ctx).Confirmed(confirmed).Email(email).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of TOTP devices



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
	confirmed := true // bool | Filter by confirmed status. (optional)
	email := "email_example" // string | Filter by user's email (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := "id_example" // string | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by user's first name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthMFATOTPDeviceAPI.ListTotpDevices(context.Background()).Confirmed(confirmed).Email(email).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthMFATOTPDeviceAPI.ListTotpDevices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTotpDevices`: PaginatedTOTPDeviceList
	fmt.Fprintf(os.Stdout, "Response from `AuthMFATOTPDeviceAPI.ListTotpDevices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTotpDevicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmed** | **bool** | Filter by confirmed status. | 
 **email** | **string** | Filter by user&#39;s email (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **string** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by user&#39;s first name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedTOTPDeviceList**](PaginatedTOTPDeviceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

