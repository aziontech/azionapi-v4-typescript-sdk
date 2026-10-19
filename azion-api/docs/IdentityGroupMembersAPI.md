# \IdentityGroupMembersAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RetrieveMembersGroup**](IdentityGroupMembersAPI.md#RetrieveMembersGroup) | **Get** /identity/groups/{id}/members | Retrieve members from a group
[**UpdateMembersGroup**](IdentityGroupMembersAPI.md#UpdateMembersGroup) | **Put** /identity/groups/{id}/members | Update members from a group



## RetrieveMembersGroup

> ResponseRetrieveGroupMembers RetrieveMembersGroup(ctx, id).Fields(fields).Execute()

Retrieve members from a group



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
	resp, r, err := apiClient.IdentityGroupMembersAPI.RetrieveMembersGroup(context.Background(), id).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGroupMembersAPI.RetrieveMembersGroup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveMembersGroup`: ResponseRetrieveGroupMembers
	fmt.Fprintf(os.Stdout, "Response from `IdentityGroupMembersAPI.RetrieveMembersGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveMembersGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrieveGroupMembers**](ResponseRetrieveGroupMembers.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateMembersGroup

> ResponseGroupMembers UpdateMembersGroup(ctx, id).GroupMembersRequest(groupMembersRequest).Execute()

Update members from a group



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
	groupMembersRequest := *openapiclient.NewGroupMembersRequest([]int64{int64(123)}) // GroupMembersRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IdentityGroupMembersAPI.UpdateMembersGroup(context.Background(), id).GroupMembersRequest(groupMembersRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityGroupMembersAPI.UpdateMembersGroup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateMembersGroup`: ResponseGroupMembers
	fmt.Fprintf(os.Stdout, "Response from `IdentityGroupMembersAPI.UpdateMembersGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMembersGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **groupMembersRequest** | [**GroupMembersRequest**](GroupMembersRequest.md) |  | 

### Return type

[**ResponseGroupMembers**](ResponseGroupMembers.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

