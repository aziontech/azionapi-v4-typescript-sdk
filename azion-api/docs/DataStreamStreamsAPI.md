# \DataStreamStreamsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDataStream**](DataStreamStreamsAPI.md#CreateDataStream) | **Post** /workspace/stream/streams | Create a Data Stream
[**DeleteDataStream**](DataStreamStreamsAPI.md#DeleteDataStream) | **Delete** /workspace/stream/streams/{stream_id} | Delete a Data Stream
[**ListDataStreams**](DataStreamStreamsAPI.md#ListDataStreams) | **Get** /workspace/stream/streams | List Data Streams
[**PartialUpdateDataStream**](DataStreamStreamsAPI.md#PartialUpdateDataStream) | **Patch** /workspace/stream/streams/{stream_id} | Partially update a Data Stream
[**RetrieveDataStream**](DataStreamStreamsAPI.md#RetrieveDataStream) | **Get** /workspace/stream/streams/{stream_id} | Retrieve details of a Data Stream
[**UpdateDataStream**](DataStreamStreamsAPI.md#UpdateDataStream) | **Put** /workspace/stream/streams/{stream_id} | Update a Data Stream



## CreateDataStream

> DataStreamResponse CreateDataStream(ctx).DataStreamRequest(dataStreamRequest).Execute()

Create a Data Stream



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
	dataStreamRequest := *openapiclient.NewDataStreamRequest("Name_example", []openapiclient.InputInputDataSourceAttributesRequest{*openapiclient.NewInputInputDataSourceAttributesRequest("Type_example", *openapiclient.NewInputDataSourceRequest(openapiclient.DataSourceEnum("workloads")))}, []openapiclient.TransformRequest{openapiclient.TransformRequest{TransformTransformFilterWorkloadsAttributesRequest: openapiclient.NewTransformTransformFilterWorkloadsAttributesRequest("Type_example", *openapiclient.NewTransformFilterWorkloadsRequest([]int64{int64(123)}))}}, []openapiclient.OutputRequest{openapiclient.OutputRequest{AWSKinesisFirehoseEndpointAttributesRequest: openapiclient.NewAWSKinesisFirehoseEndpointAttributesRequest(openapiclient.AWSKinesisFirehoseEndpointAttributesTypeEnum("aws_kinesis_firehose"), *openapiclient.NewAWSKinesisFirehoseEndpointRequest("AccessKey_example", "StreamName_example", "Region_example", "SecretKey_example"))}}) // DataStreamRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamStreamsAPI.CreateDataStream(context.Background()).DataStreamRequest(dataStreamRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.CreateDataStream``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDataStream`: DataStreamResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.CreateDataStream`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDataStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStreamRequest** | [**DataStreamRequest**](DataStreamRequest.md) |  | 

### Return type

[**DataStreamResponse**](DataStreamResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDataStream

> DeleteResponse DeleteDataStream(ctx, streamId).Execute()

Delete a Data Stream



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
	streamId := int64(789) // int64 | A unique integer value identifying the data stream.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamStreamsAPI.DeleteDataStream(context.Background(), streamId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.DeleteDataStream``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteDataStream`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.DeleteDataStream`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**streamId** | **int64** | A unique integer value identifying the data stream. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDataStreamRequest struct via the builder pattern


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


## ListDataStreams

> PaginatedDataStreamList ListDataStreams(ctx).Active(active).CreatedGte(createdGte).CreatedLte(createdLte).DataSetId(dataSetId).DataSource(dataSource).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Data Streams



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
	createdGte := time.Now() // time.Time | Filter by created date (greater than or equal). (optional)
	createdLte := time.Now() // time.Time | Filter by created date (less than or equal). (optional)
	dataSetId := int64(789) // int64 | Filter by data set id (accepts comma-separated values). (optional)
	dataSource := "dataSource_example" // string | Filter by data source (accepts comma-separated values). (optional)
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
	resp, r, err := apiClient.DataStreamStreamsAPI.ListDataStreams(context.Background()).Active(active).CreatedGte(createdGte).CreatedLte(createdLte).DataSetId(dataSetId).DataSource(dataSource).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.ListDataStreams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListDataStreams`: PaginatedDataStreamList
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.ListDataStreams`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListDataStreamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 
 **createdGte** | **time.Time** | Filter by created date (greater than or equal). | 
 **createdLte** | **time.Time** | Filter by created date (less than or equal). | 
 **dataSetId** | **int64** | Filter by data set id (accepts comma-separated values). | 
 **dataSource** | **string** | Filter by data source (accepts comma-separated values). | 
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

[**PaginatedDataStreamList**](PaginatedDataStreamList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateDataStream

> DataStreamResponse PartialUpdateDataStream(ctx, streamId).PatchedDataStreamRequest(patchedDataStreamRequest).Execute()

Partially update a Data Stream



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
	streamId := int64(789) // int64 | A unique integer value identifying the data stream.
	patchedDataStreamRequest := *openapiclient.NewPatchedDataStreamRequest() // PatchedDataStreamRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamStreamsAPI.PartialUpdateDataStream(context.Background(), streamId).PatchedDataStreamRequest(patchedDataStreamRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.PartialUpdateDataStream``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateDataStream`: DataStreamResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.PartialUpdateDataStream`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**streamId** | **int64** | A unique integer value identifying the data stream. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateDataStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedDataStreamRequest** | [**PatchedDataStreamRequest**](PatchedDataStreamRequest.md) |  | 

### Return type

[**DataStreamResponse**](DataStreamResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveDataStream

> DataStreamResponse RetrieveDataStream(ctx, streamId).Fields(fields).Execute()

Retrieve details of a Data Stream



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
	streamId := int64(789) // int64 | A unique integer value identifying the data stream.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamStreamsAPI.RetrieveDataStream(context.Background(), streamId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.RetrieveDataStream``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveDataStream`: DataStreamResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.RetrieveDataStream`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**streamId** | **int64** | A unique integer value identifying the data stream. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveDataStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**DataStreamResponse**](DataStreamResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDataStream

> DataStreamResponse UpdateDataStream(ctx, streamId).DataStreamRequest(dataStreamRequest).Execute()

Update a Data Stream



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
	streamId := int64(789) // int64 | A unique integer value identifying the data stream.
	dataStreamRequest := *openapiclient.NewDataStreamRequest("Name_example", []openapiclient.InputInputDataSourceAttributesRequest{*openapiclient.NewInputInputDataSourceAttributesRequest("Type_example", *openapiclient.NewInputDataSourceRequest(openapiclient.DataSourceEnum("workloads")))}, []openapiclient.TransformRequest{openapiclient.TransformRequest{TransformTransformFilterWorkloadsAttributesRequest: openapiclient.NewTransformTransformFilterWorkloadsAttributesRequest("Type_example", *openapiclient.NewTransformFilterWorkloadsRequest([]int64{int64(123)}))}}, []openapiclient.OutputRequest{openapiclient.OutputRequest{AWSKinesisFirehoseEndpointAttributesRequest: openapiclient.NewAWSKinesisFirehoseEndpointAttributesRequest(openapiclient.AWSKinesisFirehoseEndpointAttributesTypeEnum("aws_kinesis_firehose"), *openapiclient.NewAWSKinesisFirehoseEndpointRequest("AccessKey_example", "StreamName_example", "Region_example", "SecretKey_example"))}}) // DataStreamRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataStreamStreamsAPI.UpdateDataStream(context.Background(), streamId).DataStreamRequest(dataStreamRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataStreamStreamsAPI.UpdateDataStream``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateDataStream`: DataStreamResponse
	fmt.Fprintf(os.Stdout, "Response from `DataStreamStreamsAPI.UpdateDataStream`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**streamId** | **int64** | A unique integer value identifying the data stream. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDataStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dataStreamRequest** | [**DataStreamRequest**](DataStreamRequest.md) |  | 

### Return type

[**DataStreamResponse**](DataStreamResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

