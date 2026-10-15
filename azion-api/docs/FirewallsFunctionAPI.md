# \FirewallsFunctionAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFirewallFunction**](FirewallsFunctionAPI.md#CreateFirewallFunction) | **Post** /workspace/firewalls/{firewall_id}/functions | Create an Firewall Function
[**CreateFirewallFunction2**](FirewallsFunctionAPI.md#CreateFirewallFunction2) | **Post** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions | Create an Firewall Function
[**DeleteFirewallFunction**](FirewallsFunctionAPI.md#DeleteFirewallFunction) | **Delete** /workspace/firewalls/{firewall_id}/functions/{function_id} | Delete an Firewall Function
[**DeleteFirewallFunction2**](FirewallsFunctionAPI.md#DeleteFirewallFunction2) | **Delete** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Delete an Firewall Function
[**ListFirewallFunction**](FirewallsFunctionAPI.md#ListFirewallFunction) | **Get** /workspace/firewalls/{firewall_id}/functions | List Firewall Function
[**ListFirewallFunction2**](FirewallsFunctionAPI.md#ListFirewallFunction2) | **Get** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions | List Firewall Function
[**PartialUpdateFirewallFunction**](FirewallsFunctionAPI.md#PartialUpdateFirewallFunction) | **Patch** /workspace/firewalls/{firewall_id}/functions/{function_id} | Partially update an Firewall Function
[**PartialUpdateFirewallFunction2**](FirewallsFunctionAPI.md#PartialUpdateFirewallFunction2) | **Patch** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Partially update an Firewall Function
[**RetrieveFirewallFunction**](FirewallsFunctionAPI.md#RetrieveFirewallFunction) | **Get** /workspace/firewalls/{firewall_id}/functions/{function_id} | Retrieve details of an Firewall Function
[**RetrieveFirewallFunction2**](FirewallsFunctionAPI.md#RetrieveFirewallFunction2) | **Get** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Retrieve details of an Firewall Function
[**UpdateFirewallFunction**](FirewallsFunctionAPI.md#UpdateFirewallFunction) | **Put** /workspace/firewalls/{firewall_id}/functions/{function_id} | Update an Firewall Function
[**UpdateFirewallFunction2**](FirewallsFunctionAPI.md#UpdateFirewallFunction2) | **Put** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Update an Firewall Function



## CreateFirewallFunction

> FirewallFunctionInstanceResponse CreateFirewallFunction(ctx, firewallId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()

Create an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	firewallFunctionInstanceRequest := *openapiclient.NewFirewallFunctionInstanceRequest("Name_example", int64(123)) // FirewallFunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.CreateFirewallFunction(context.Background(), firewallId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.CreateFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFirewallFunction`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.CreateFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFirewallFunctionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **firewallFunctionInstanceRequest** | [**FirewallFunctionInstanceRequest**](FirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFirewallFunction2

> FirewallFunctionInstanceResponse CreateFirewallFunction2(ctx, firewallId, versionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()

Create an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	firewallFunctionInstanceRequest := *openapiclient.NewFirewallFunctionInstanceRequest("Name_example", int64(123)) // FirewallFunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.CreateFirewallFunction2(context.Background(), firewallId, versionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.CreateFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFirewallFunction2`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.CreateFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFirewallFunction2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **firewallFunctionInstanceRequest** | [**FirewallFunctionInstanceRequest**](FirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFirewallFunction

> DeleteResponse DeleteFirewallFunction(ctx, firewallId, functionId).Execute()

Delete an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.DeleteFirewallFunction(context.Background(), firewallId, functionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.DeleteFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFirewallFunction`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.DeleteFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFirewallFunctionRequest struct via the builder pattern


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


## DeleteFirewallFunction2

> DeleteResponse DeleteFirewallFunction2(ctx, firewallId, functionId, versionId).Execute()

Delete an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.DeleteFirewallFunction2(context.Background(), firewallId, functionId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.DeleteFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFirewallFunction2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.DeleteFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFirewallFunction2Request struct via the builder pattern


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


## ListFirewallFunction

> PaginatedFirewallFunctionInstanceList ListFirewallFunction(ctx, firewallId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.ListFirewallFunction(context.Background(), firewallId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.ListFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFirewallFunction`: PaginatedFirewallFunctionInstanceList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.ListFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListFirewallFunctionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallFunctionInstanceList**](PaginatedFirewallFunctionInstanceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFirewallFunction2

> PaginatedFirewallFunctionInstanceList ListFirewallFunction2(ctx, firewallId, versionId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.ListFirewallFunction2(context.Background(), firewallId, versionId).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.ListFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFirewallFunction2`: PaginatedFirewallFunctionInstanceList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.ListFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListFirewallFunction2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallFunctionInstanceList**](PaginatedFirewallFunctionInstanceList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFirewallFunction

> FirewallFunctionInstanceResponse PartialUpdateFirewallFunction(ctx, firewallId, functionId).PatchedFirewallFunctionInstanceRequest(patchedFirewallFunctionInstanceRequest).Execute()

Partially update an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	patchedFirewallFunctionInstanceRequest := *openapiclient.NewPatchedFirewallFunctionInstanceRequest() // PatchedFirewallFunctionInstanceRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.PartialUpdateFirewallFunction(context.Background(), firewallId, functionId).PatchedFirewallFunctionInstanceRequest(patchedFirewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.PartialUpdateFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFirewallFunction`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.PartialUpdateFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFirewallFunctionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedFirewallFunctionInstanceRequest** | [**PatchedFirewallFunctionInstanceRequest**](PatchedFirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFirewallFunction2

> FirewallFunctionInstanceResponse PartialUpdateFirewallFunction2(ctx, firewallId, functionId, versionId).PatchedFirewallFunctionInstanceRequest(patchedFirewallFunctionInstanceRequest).Execute()

Partially update an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	patchedFirewallFunctionInstanceRequest := *openapiclient.NewPatchedFirewallFunctionInstanceRequest() // PatchedFirewallFunctionInstanceRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.PartialUpdateFirewallFunction2(context.Background(), firewallId, functionId, versionId).PatchedFirewallFunctionInstanceRequest(patchedFirewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.PartialUpdateFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFirewallFunction2`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.PartialUpdateFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFirewallFunction2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedFirewallFunctionInstanceRequest** | [**PatchedFirewallFunctionInstanceRequest**](PatchedFirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFirewallFunction

> FirewallFunctionInstanceResponse RetrieveFirewallFunction(ctx, firewallId, functionId).Fields(fields).Execute()

Retrieve details of an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.RetrieveFirewallFunction(context.Background(), firewallId, functionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.RetrieveFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFirewallFunction`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.RetrieveFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFirewallFunctionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFirewallFunction2

> FirewallFunctionInstanceResponse RetrieveFirewallFunction2(ctx, firewallId, functionId, versionId).Fields(fields).Execute()

Retrieve details of an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.RetrieveFirewallFunction2(context.Background(), firewallId, functionId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.RetrieveFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFirewallFunction2`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.RetrieveFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFirewallFunction2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFirewallFunction

> FirewallFunctionInstanceResponse UpdateFirewallFunction(ctx, firewallId, functionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()

Update an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	firewallFunctionInstanceRequest := *openapiclient.NewFirewallFunctionInstanceRequest("Name_example", int64(123)) // FirewallFunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.UpdateFirewallFunction(context.Background(), firewallId, functionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.UpdateFirewallFunction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFirewallFunction`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.UpdateFirewallFunction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFirewallFunctionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **firewallFunctionInstanceRequest** | [**FirewallFunctionInstanceRequest**](FirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFirewallFunction2

> FirewallFunctionInstanceResponse UpdateFirewallFunction2(ctx, firewallId, functionId, versionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()

Update an Firewall Function



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	functionId := int64(789) // int64 | A unique integer value identifying the function instance.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	firewallFunctionInstanceRequest := *openapiclient.NewFirewallFunctionInstanceRequest("Name_example", int64(123)) // FirewallFunctionInstanceRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsFunctionAPI.UpdateFirewallFunction2(context.Background(), firewallId, functionId, versionId).FirewallFunctionInstanceRequest(firewallFunctionInstanceRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsFunctionAPI.UpdateFirewallFunction2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFirewallFunction2`: FirewallFunctionInstanceResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsFunctionAPI.UpdateFirewallFunction2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**functionId** | **int64** | A unique integer value identifying the function instance. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFirewallFunction2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **firewallFunctionInstanceRequest** | [**FirewallFunctionInstanceRequest**](FirewallFunctionInstanceRequest.md) |  | 

### Return type

[**FirewallFunctionInstanceResponse**](FirewallFunctionInstanceResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

