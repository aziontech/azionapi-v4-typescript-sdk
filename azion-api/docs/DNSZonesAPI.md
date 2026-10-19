# \DNSZonesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDnsZone**](DNSZonesAPI.md#CreateDnsZone) | **Post** /workspace/dns/zones | Create a DNS Zone
[**DeleteDnsZone**](DNSZonesAPI.md#DeleteDnsZone) | **Delete** /workspace/dns/zones/{zone_id} | Delete a DNS Zone
[**ListDnsZones**](DNSZonesAPI.md#ListDnsZones) | **Get** /workspace/dns/zones | List DNS Zones
[**PartialUpdateDnsZone**](DNSZonesAPI.md#PartialUpdateDnsZone) | **Patch** /workspace/dns/zones/{zone_id} | Partially update a DNS Zone
[**RetrieveDnsZone**](DNSZonesAPI.md#RetrieveDnsZone) | **Get** /workspace/dns/zones/{zone_id} | Retrieve details of a DNS Zone
[**UpdateDnsZone**](DNSZonesAPI.md#UpdateDnsZone) | **Put** /workspace/dns/zones/{zone_id} | Update a DNS Zone



## CreateDnsZone

> ZoneResponse CreateDnsZone(ctx).ZoneRequest(zoneRequest).Execute()

Create a DNS Zone



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
	zoneRequest := *openapiclient.NewZoneRequest("Name_example", "Domain_example", false) // ZoneRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.CreateDnsZone(context.Background()).ZoneRequest(zoneRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.CreateDnsZone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDnsZone`: ZoneResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.CreateDnsZone`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDnsZoneRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneRequest** | [**ZoneRequest**](ZoneRequest.md) |  | 

### Return type

[**ZoneResponse**](ZoneResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDnsZone

> DeleteResponse DeleteDnsZone(ctx, zoneId).Execute()

Delete a DNS Zone



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.DeleteDnsZone(context.Background(), zoneId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.DeleteDnsZone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteDnsZone`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.DeleteDnsZone`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDnsZoneRequest struct via the builder pattern


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


## ListDnsZones

> PaginatedZoneList ListDnsZones(ctx).Active(active).Domain(domain).Fields(fields).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List DNS Zones



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
	active := true // bool | Filter by active status. (optional)
	domain := "domain_example" // string | Filter by domain (exact match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	name := "name_example" // string | Filter by name (exact match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.ListDnsZones(context.Background()).Active(active).Domain(domain).Fields(fields).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.ListDnsZones``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDnsZones`: PaginatedZoneList
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.ListDnsZones`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDnsZonesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **domain** | **string** | Filter by domain (exact match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **name** | **string** | Filter by name (exact match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedZoneList**](PaginatedZoneList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateDnsZone

> ZoneResponse PartialUpdateDnsZone(ctx, zoneId).PatchedUpdateZoneRequest(patchedUpdateZoneRequest).Execute()

Partially update a DNS Zone



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	patchedUpdateZoneRequest := *openapiclient.NewPatchedUpdateZoneRequest() // PatchedUpdateZoneRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.PartialUpdateDnsZone(context.Background(), zoneId).PatchedUpdateZoneRequest(patchedUpdateZoneRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.PartialUpdateDnsZone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateDnsZone`: ZoneResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.PartialUpdateDnsZone`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateDnsZoneRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedUpdateZoneRequest** | [**PatchedUpdateZoneRequest**](PatchedUpdateZoneRequest.md) |  | 

### Return type

[**ZoneResponse**](ZoneResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDnsZone

> ZoneResponse RetrieveDnsZone(ctx, zoneId).Fields(fields).Execute()

Retrieve details of a DNS Zone



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.RetrieveDnsZone(context.Background(), zoneId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.RetrieveDnsZone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDnsZone`: ZoneResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.RetrieveDnsZone`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDnsZoneRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ZoneResponse**](ZoneResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDnsZone

> ZoneResponse UpdateDnsZone(ctx, zoneId).UpdateZoneRequest(updateZoneRequest).Execute()

Update a DNS Zone



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
	zoneId := int64(789) // int64 | A unique integer value identifying the DNS Zone.
	updateZoneRequest := *openapiclient.NewUpdateZoneRequest("Name_example", false) // UpdateZoneRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DNSZonesAPI.UpdateDnsZone(context.Background(), zoneId).UpdateZoneRequest(updateZoneRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DNSZonesAPI.UpdateDnsZone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDnsZone`: ZoneResponse
	fmt.Fprintf(os.Stdout, "Response from `DNSZonesAPI.UpdateDnsZone`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**zoneId** | **int64** | A unique integer value identifying the DNS Zone. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDnsZoneRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateZoneRequest** | [**UpdateZoneRequest**](UpdateZoneRequest.md) |  | 

### Return type

[**ZoneResponse**](ZoneResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

