# \SQLAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDatabase**](SQLAPI.md#CreateDatabase) | **Post** /workspace/sql/databases | Create a database
[**DeleteDatabase**](SQLAPI.md#DeleteDatabase) | **Delete** /workspace/sql/databases/{database_id} | Delete a database
[**ExecuteQuery**](SQLAPI.md#ExecuteQuery) | **Post** /workspace/sql/databases/{database_id}/query | Execute a query into a database
[**ListDatabases**](SQLAPI.md#ListDatabases) | **Get** /workspace/sql/databases | List databases
[**RetrieveDatabase**](SQLAPI.md#RetrieveDatabase) | **Get** /workspace/sql/databases/{database_id} | Retrieve details from a database



## CreateDatabase

> DatabaseDetailResponse CreateDatabase(ctx).DatabaseRequest(databaseRequest).Execute()

Create a database



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
	databaseRequest := *openapiclient.NewDatabaseRequest("Name_example") // DatabaseRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SQLAPI.CreateDatabase(context.Background()).DatabaseRequest(databaseRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SQLAPI.CreateDatabase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDatabase`: DatabaseDetailResponse
	fmt.Fprintf(os.Stdout, "Response from `SQLAPI.CreateDatabase`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDatabaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseRequest** | [**DatabaseRequest**](DatabaseRequest.md) |  | 

### Return type

[**DatabaseDetailResponse**](DatabaseDetailResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDatabase

> DeleteResponse DeleteDatabase(ctx, databaseId).Execute()

Delete a database



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
	databaseId := int64(789) // int64 | A unique integer value identifying this database.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SQLAPI.DeleteDatabase(context.Background(), databaseId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SQLAPI.DeleteDatabase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteDatabase`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `SQLAPI.DeleteDatabase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**databaseId** | **int64** | A unique integer value identifying this database. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDatabaseRequest struct via the builder pattern


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


## ExecuteQuery

> SQLResultResponse ExecuteQuery(ctx, databaseId).SQLStatementsRequest(sQLStatementsRequest).Execute()

Execute a query into a database



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
	databaseId := int64(789) // int64 | A unique integer value identifying this database.
	sQLStatementsRequest := *openapiclient.NewSQLStatementsRequest([]string{"Statements_example"}) // SQLStatementsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SQLAPI.ExecuteQuery(context.Background(), databaseId).SQLStatementsRequest(sQLStatementsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SQLAPI.ExecuteQuery``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExecuteQuery`: SQLResultResponse
	fmt.Fprintf(os.Stdout, "Response from `SQLAPI.ExecuteQuery`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**databaseId** | **int64** | A unique integer value identifying this database. | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteQueryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sQLStatementsRequest** | [**SQLStatementsRequest**](SQLStatementsRequest.md) |  | 

### Return type

[**SQLResultResponse**](SQLResultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListDatabases

> PaginatedDatabaseDetailList ListDatabases(ctx).Active(active).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Fields(fields).Id(id).LastEditor(lastEditor).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).UpdatedAtGte(updatedAtGte).UpdatedAtLte(updatedAtLte).Execute()

List databases



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
	createdAtGte := time.Now() // time.Time | Filter by created_at (greater than or equal). (optional)
	createdAtLte := time.Now() // time.Time | Filter by created_at (less than or equal). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	status := "status_example" // string | Filter by status (accepts comma-separated values). (optional)
	updatedAtGte := time.Now() // time.Time | Filter by updated_at (greater than or equal). (optional)
	updatedAtLte := time.Now() // time.Time | Filter by updated_at (less than or equal). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SQLAPI.ListDatabases(context.Background()).Active(active).CreatedAtGte(createdAtGte).CreatedAtLte(createdAtLte).Fields(fields).Id(id).LastEditor(lastEditor).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).UpdatedAtGte(updatedAtGte).UpdatedAtLte(updatedAtLte).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SQLAPI.ListDatabases``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDatabases`: PaginatedDatabaseDetailList
	fmt.Fprintf(os.Stdout, "Response from `SQLAPI.ListDatabases`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDatabasesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **createdAtGte** | **time.Time** | Filter by created_at (greater than or equal). | 
 **createdAtLte** | **time.Time** | Filter by created_at (less than or equal). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **status** | **string** | Filter by status (accepts comma-separated values). | 
 **updatedAtGte** | **time.Time** | Filter by updated_at (greater than or equal). | 
 **updatedAtLte** | **time.Time** | Filter by updated_at (less than or equal). | 

### Return type

[**PaginatedDatabaseDetailList**](PaginatedDatabaseDetailList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDatabase

> DatabaseDetailResponse RetrieveDatabase(ctx, databaseId).Fields(fields).Execute()

Retrieve details from a database



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
	databaseId := int64(789) // int64 | A unique integer value identifying this database.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SQLAPI.RetrieveDatabase(context.Background(), databaseId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SQLAPI.RetrieveDatabase``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDatabase`: DatabaseDetailResponse
	fmt.Fprintf(os.Stdout, "Response from `SQLAPI.RetrieveDatabase`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**databaseId** | **int64** | A unique integer value identifying this database. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDatabaseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**DatabaseDetailResponse**](DatabaseDetailResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

