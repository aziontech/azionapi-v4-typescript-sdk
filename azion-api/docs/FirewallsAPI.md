# \FirewallsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CloneFirewall**](FirewallsAPI.md#CloneFirewall) | **Post** /workspace/firewalls/{firewall_id}/clone | Clone a Firewall
[**CreateFirewall**](FirewallsAPI.md#CreateFirewall) | **Post** /workspace/firewalls | Create a Firewall
[**DeleteFirewall**](FirewallsAPI.md#DeleteFirewall) | **Delete** /workspace/firewalls/{firewall_id} | Delete a Firewall
[**ListFirewalls**](FirewallsAPI.md#ListFirewalls) | **Get** /workspace/firewalls | List Firewalls
[**PartialUpdateFirewall**](FirewallsAPI.md#PartialUpdateFirewall) | **Patch** /workspace/firewalls/{firewall_id} | Partially update a Firewall
[**RetrieveFirewall**](FirewallsAPI.md#RetrieveFirewall) | **Get** /workspace/firewalls/{firewall_id} | Retrieve details from a Firewall
[**UpdateFirewall**](FirewallsAPI.md#UpdateFirewall) | **Put** /workspace/firewalls/{firewall_id} | Update a Firewall



## CloneFirewall

> FirewallResponse CloneFirewall(ctx, firewallId).CloneFirewallRequest(cloneFirewallRequest).Execute()

Clone a Firewall



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
	cloneFirewallRequest := *openapiclient.NewCloneFirewallRequest("Name_example") // CloneFirewallRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.CloneFirewall(context.Background(), firewallId).CloneFirewallRequest(cloneFirewallRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.CloneFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CloneFirewall`: FirewallResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.CloneFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCloneFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cloneFirewallRequest** | [**CloneFirewallRequest**](CloneFirewallRequest.md) |  | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFirewall

> FirewallResponse CreateFirewall(ctx).FirewallRequest(firewallRequest).Execute()

Create a Firewall



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
	firewallRequest := *openapiclient.NewFirewallRequest("Name_example") // FirewallRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.CreateFirewall(context.Background()).FirewallRequest(firewallRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.CreateFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFirewall`: FirewallResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.CreateFirewall`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRequest** | [**FirewallRequest**](FirewallRequest.md) |  | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFirewall

> DeleteResponse DeleteFirewall(ctx, firewallId).Execute()

Delete a Firewall



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.DeleteFirewall(context.Background(), firewallId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.DeleteFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFirewall`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.DeleteFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFirewallRequest struct via the builder pattern


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


## ListFirewalls

> PaginatedFirewallList ListFirewalls(ctx).Active(active).Debug(debug).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Firewalls



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
	active := true // bool | Filter by active status. (optional)
	debug := true // bool | Filter by debug rules status. (optional)
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
	resp, r, err := apiClient.FirewallsAPI.ListFirewalls(context.Background()).Active(active).Debug(debug).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.ListFirewalls``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFirewalls`: PaginatedFirewallList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.ListFirewalls`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFirewallsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **debug** | **bool** | Filter by debug rules status. | 
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

[**PaginatedFirewallList**](PaginatedFirewallList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFirewall

> FirewallResponse PartialUpdateFirewall(ctx, firewallId).PatchedFirewallRequest(patchedFirewallRequest).Execute()

Partially update a Firewall



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
	patchedFirewallRequest := *openapiclient.NewPatchedFirewallRequest() // PatchedFirewallRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.PartialUpdateFirewall(context.Background(), firewallId).PatchedFirewallRequest(patchedFirewallRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.PartialUpdateFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFirewall`: FirewallResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.PartialUpdateFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedFirewallRequest** | [**PatchedFirewallRequest**](PatchedFirewallRequest.md) |  | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFirewall

> FirewallResponse RetrieveFirewall(ctx, firewallId).Fields(fields).Execute()

Retrieve details from a Firewall



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.RetrieveFirewall(context.Background(), firewallId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.RetrieveFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFirewall`: FirewallResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.RetrieveFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFirewall

> FirewallResponse UpdateFirewall(ctx, firewallId).FirewallRequest(firewallRequest).Execute()

Update a Firewall



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
	firewallRequest := *openapiclient.NewFirewallRequest("Name_example") // FirewallRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsAPI.UpdateFirewall(context.Background(), firewallId).FirewallRequest(firewallRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsAPI.UpdateFirewall``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFirewall`: FirewallResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsAPI.UpdateFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **firewallRequest** | [**FirewallRequest**](FirewallRequest.md) |  | 

### Return type

[**FirewallResponse**](FirewallResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

