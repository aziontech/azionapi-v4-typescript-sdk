# \StorageBucketsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateBucket**](StorageBucketsAPI.md#CreateBucket) | **Post** /workspace/storage/buckets | Create a new bucket
[**DeleteBucket**](StorageBucketsAPI.md#DeleteBucket) | **Delete** /workspace/storage/buckets/{bucket_name} | Delete a bucket
[**ListBuckets**](StorageBucketsAPI.md#ListBuckets) | **Get** /workspace/storage/buckets | List buckets
[**RetrieveBucket**](StorageBucketsAPI.md#RetrieveBucket) | **Get** /workspace/storage/buckets/{bucket_name} | Retrieve a bucket
[**UpdateBucket**](StorageBucketsAPI.md#UpdateBucket) | **Patch** /workspace/storage/buckets/{bucket_name} | Update bucket info



## CreateBucket

> BucketCreateResponse CreateBucket(ctx).BucketCreateRequest(bucketCreateRequest).Execute()

Create a new bucket



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
	bucketCreateRequest := *openapiclient.NewBucketCreateRequest("Name_example", "WorkloadsAccess_example") // BucketCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageBucketsAPI.CreateBucket(context.Background()).BucketCreateRequest(bucketCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageBucketsAPI.CreateBucket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBucket`: BucketCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageBucketsAPI.CreateBucket`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateBucketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketCreateRequest** | [**BucketCreateRequest**](BucketCreateRequest.md) |  | 

### Return type

[**BucketCreateResponse**](BucketCreateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteBucket

> DeleteResponse DeleteBucket(ctx, bucketName).Execute()

Delete a bucket



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
	bucketName := "bucketName_example" // string | The name of the bucket

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageBucketsAPI.DeleteBucket(context.Background(), bucketName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageBucketsAPI.DeleteBucket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteBucket`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageBucketsAPI.DeleteBucket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBucketRequest struct via the builder pattern


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


## ListBuckets

> PaginatedBucketList ListBuckets(ctx).Bucket(bucket).Created(created).CreatedGte(createdGte).CreatedLte(createdLte).Description(description).Fields(fields).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).WorkloadsAccess(workloadsAccess).Execute()

List buckets



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
	bucket := "bucket_example" // string | Filter by bucket (exact match). (optional)
	created := time.Now() // time.Time | Filter by creation date (exact match). (optional)
	createdGte := time.Now() // time.Time | Filter by creation date (greater than or equal). (optional)
	createdLte := time.Now() // time.Time | Filter by creation date (less than or equal). (optional)
	description := "description_example" // string | Filter by description (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModified := time.Now() // time.Time | Filter by last modified date (exact match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)
	status := "status_example" // string | Filter by status (accepts comma-separated values). (optional)
	workloadsAccess := "workloadsAccess_example" // string | Filter by workloads access (accepts comma-separated values). (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageBucketsAPI.ListBuckets(context.Background()).Bucket(bucket).Created(created).CreatedGte(createdGte).CreatedLte(createdLte).Description(description).Fields(fields).LastEditor(lastEditor).LastModified(lastModified).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Status(status).WorkloadsAccess(workloadsAccess).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageBucketsAPI.ListBuckets``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListBuckets`: PaginatedBucketList
	fmt.Fprintf(os.Stdout, "Response from `StorageBucketsAPI.ListBuckets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListBucketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **string** | Filter by bucket (exact match). | 
 **created** | **time.Time** | Filter by creation date (exact match). | 
 **createdGte** | **time.Time** | Filter by creation date (greater than or equal). | 
 **createdLte** | **time.Time** | Filter by creation date (less than or equal). | 
 **description** | **string** | Filter by description (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModified** | **time.Time** | Filter by last modified date (exact match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 
 **status** | **string** | Filter by status (accepts comma-separated values). | 
 **workloadsAccess** | **string** | Filter by workloads access (accepts comma-separated values). | 

### Return type

[**PaginatedBucketList**](PaginatedBucketList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveBucket

> BucketCreateResponse RetrieveBucket(ctx, bucketName).Fields(fields).Execute()

Retrieve a bucket



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
	bucketName := "bucketName_example" // string | The name of the bucket
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageBucketsAPI.RetrieveBucket(context.Background(), bucketName).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageBucketsAPI.RetrieveBucket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveBucket`: BucketCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageBucketsAPI.RetrieveBucket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveBucketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**BucketCreateResponse**](BucketCreateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateBucket

> BucketCreateResponse UpdateBucket(ctx, bucketName).PatchedBucketRequest(patchedBucketRequest).Execute()

Update bucket info



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
	bucketName := "bucketName_example" // string | The name of the bucket
	patchedBucketRequest := *openapiclient.NewPatchedBucketRequest() // PatchedBucketRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageBucketsAPI.UpdateBucket(context.Background(), bucketName).PatchedBucketRequest(patchedBucketRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageBucketsAPI.UpdateBucket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateBucket`: BucketCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageBucketsAPI.UpdateBucket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateBucketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedBucketRequest** | [**PatchedBucketRequest**](PatchedBucketRequest.md) |  | 

### Return type

[**BucketCreateResponse**](BucketCreateResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

