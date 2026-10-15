# \ConnectorsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateConnector**](ConnectorsAPI.md#CreateConnector) | **Post** /workspace/connectors | Create a Connector
[**DeleteConnector**](ConnectorsAPI.md#DeleteConnector) | **Delete** /workspace/connectors/{connector_id} | Delete a Connector
[**ListConnectors**](ConnectorsAPI.md#ListConnectors) | **Get** /workspace/connectors | List Connectors
[**PartialUpdateConnector**](ConnectorsAPI.md#PartialUpdateConnector) | **Patch** /workspace/connectors/{connector_id} | Partially update a Connector
[**RetrieveConnector**](ConnectorsAPI.md#RetrieveConnector) | **Get** /workspace/connectors/{connector_id} | Retrieve details of a Connector
[**UpdateConnector**](ConnectorsAPI.md#UpdateConnector) | **Put** /workspace/connectors/{connector_id} | Update a Connector



## CreateConnector

> ConnectorResponse CreateConnector(ctx).ConnectorRequest(connectorRequest).Execute()

Create a Connector



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
	connectorRequest := openapiclient.ConnectorRequest{ConnectorHTTPRequest: openapiclient.NewConnectorHTTPRequest("Name_example", "Type_example", *openapiclient.NewConnectorHTTPAttributesRequest([]openapiclient.AddressRequest{*openapiclient.NewAddressRequest("Address_example")}))} // ConnectorRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.CreateConnector(context.Background()).ConnectorRequest(connectorRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.CreateConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateConnector`: ConnectorResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.CreateConnector`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorRequest** | [**ConnectorRequest**](ConnectorRequest.md) |  | 

### Return type

[**ConnectorResponse**](ConnectorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteConnector

> DeleteResponse DeleteConnector(ctx, connectorId).Execute()

Delete a Connector



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
	connectorId := int64(789) // int64 | A unique integer value identifying the connector.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.DeleteConnector(context.Background(), connectorId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.DeleteConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteConnector`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.DeleteConnector`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectorId** | **int64** | A unique integer value identifying the connector. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectorRequest struct via the builder pattern


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


## ListConnectors

> PaginatedConnectorList ListConnectors(ctx).Active(active).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).TypeIn(typeIn).Execute()

List Connectors



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
	typeIn := "typeIn_example" // string | Filter by type (accepts comma-separated values). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.ListConnectors(context.Background()).Active(active).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).TypeIn(typeIn).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.ListConnectors``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListConnectors`: PaginatedConnectorList
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.ListConnectors`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListConnectorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
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
 **typeIn** | **string** | Filter by type (accepts comma-separated values). | 

### Return type

[**PaginatedConnectorList**](PaginatedConnectorList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateConnector

> ConnectorResponse PartialUpdateConnector(ctx, connectorId).PatchedConnectorRequest(patchedConnectorRequest).Execute()

Partially update a Connector



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
	connectorId := int64(789) // int64 | A unique integer value identifying the connector.
	patchedConnectorRequest := openapiclient.PatchedConnectorRequest{PatchedConnectorHTTPRequest: openapiclient.NewPatchedConnectorHTTPRequest(openapiclient.OriginTypeEnum("http"))} // PatchedConnectorRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.PartialUpdateConnector(context.Background(), connectorId).PatchedConnectorRequest(patchedConnectorRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PartialUpdateConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateConnector`: ConnectorResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PartialUpdateConnector`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectorId** | **int64** | A unique integer value identifying the connector. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedConnectorRequest** | [**PatchedConnectorRequest**](PatchedConnectorRequest.md) |  | 

### Return type

[**ConnectorResponse**](ConnectorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveConnector

> ConnectorResponse RetrieveConnector(ctx, connectorId).Fields(fields).Execute()

Retrieve details of a Connector



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
	connectorId := int64(789) // int64 | A unique integer value identifying the connector.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.RetrieveConnector(context.Background(), connectorId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.RetrieveConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveConnector`: ConnectorResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.RetrieveConnector`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectorId** | **int64** | A unique integer value identifying the connector. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ConnectorResponse**](ConnectorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateConnector

> ConnectorResponse UpdateConnector(ctx, connectorId).ConnectorRequest(connectorRequest).Execute()

Update a Connector



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
	connectorId := int64(789) // int64 | A unique integer value identifying the connector.
	connectorRequest := openapiclient.ConnectorRequest{ConnectorHTTPRequest: openapiclient.NewConnectorHTTPRequest("Name_example", "Type_example", *openapiclient.NewConnectorHTTPAttributesRequest([]openapiclient.AddressRequest{*openapiclient.NewAddressRequest("Address_example")}))} // ConnectorRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectorsAPI.UpdateConnector(context.Background(), connectorId).ConnectorRequest(connectorRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.UpdateConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateConnector`: ConnectorResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.UpdateConnector`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectorId** | **int64** | A unique integer value identifying the connector. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **connectorRequest** | [**ConnectorRequest**](ConnectorRequest.md) |  | 

### Return type

[**ConnectorResponse**](ConnectorResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

