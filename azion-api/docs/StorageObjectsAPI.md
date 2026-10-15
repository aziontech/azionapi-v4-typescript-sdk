# \StorageObjectsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyObjectKey**](StorageObjectsAPI.md#CopyObjectKey) | **Post** /workspace/storage/buckets/{bucket_name}/objects/{object_key}/copy/{new_object_key} | Copy object to new key
[**CreateObjectKey**](StorageObjectsAPI.md#CreateObjectKey) | **Post** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Create new object key.
[**DeleteObjectKey**](StorageObjectsAPI.md#DeleteObjectKey) | **Delete** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Delete object key
[**DownloadObject**](StorageObjectsAPI.md#DownloadObject) | **Get** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Download object
[**ListObjects**](StorageObjectsAPI.md#ListObjects) | **Get** /workspace/storage/buckets/{bucket_name}/objects | List objects from bucket
[**UpdateObjectKey**](StorageObjectsAPI.md#UpdateObjectKey) | **Put** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Update the object key.



## CopyObjectKey

> interface{} CopyObjectKey(ctx, bucketName, newObjectKey, objectKey).Body(body).Execute()

Copy object to new key



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
	newObjectKey := "newObjectKey_example" // string | The key/path of the destination object within the bucket
	objectKey := "objectKey_example" // string | The key/path of the source object within the bucket
	body := interface{}(987) // interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.CopyObjectKey(context.Background(), bucketName, newObjectKey, objectKey).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.CopyObjectKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CopyObjectKey`: interface{}
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.CopyObjectKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 
**newObjectKey** | **string** | The key/path of the destination object within the bucket | 
**objectKey** | **string** | The key/path of the source object within the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyObjectKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **body** | **interface{}** |  | 

### Return type

**interface{}**

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateObjectKey

> SuccessObjectOperation CreateObjectKey(ctx, bucketName, objectKey).StorageContentType(storageContentType).Body(body).Execute()

Create new object key.



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
	objectKey := "objectKey_example" // string | The key/path of the object within the bucket
	storageContentType := "storageContentType_example" // string | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) (optional)
	body := os.NewFile(1234, "some_file") // *os.File |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.CreateObjectKey(context.Background(), bucketName, objectKey).StorageContentType(storageContentType).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.CreateObjectKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateObjectKey`: SuccessObjectOperation
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.CreateObjectKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 
**objectKey** | **string** | The key/path of the object within the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateObjectKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **storageContentType** | **string** | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) | 
 **body** | ***os.File** |  | 

### Return type

[**SuccessObjectOperation**](SuccessObjectOperation.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteObjectKey

> DeleteResponse DeleteObjectKey(ctx, bucketName, objectKey).Execute()

Delete object key



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
	objectKey := "objectKey_example" // string | The key/path of the object within the bucket

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.DeleteObjectKey(context.Background(), bucketName, objectKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.DeleteObjectKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteObjectKey`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.DeleteObjectKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 
**objectKey** | **string** | The key/path of the object within the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteObjectKeyRequest struct via the builder pattern


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


## DownloadObject

> *os.File DownloadObject(ctx, bucketName, objectKey).Fields(fields).Execute()

Download object



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
	objectKey := "objectKey_example" // string | The key/path of the object within the bucket
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.DownloadObject(context.Background(), bucketName, objectKey).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.DownloadObject``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DownloadObject`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.DownloadObject`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 
**objectKey** | **string** | The key/path of the object within the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadObjectRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[***os.File**](*os.File.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListObjects

> ResponseBucketObject ListObjects(ctx, bucketName).AllLevels(allLevels).ContinuationToken(continuationToken).Fields(fields).MaxObjectCount(maxObjectCount).Prefix(prefix).Execute()

List objects from bucket



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
	allLevels := true // bool | If true, lists objects recursively. If false, lists only the first level using Delimiter='/' (default: true). (optional) (default to true)
	continuationToken := "continuationToken_example" // string | A continuation token for the next page of records. (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	maxObjectCount := int64(789) // int64 | Number of results to be returned on the page. Limited to 1000 objects. (optional)
	prefix := "prefix_example" // string | Filter objects by key prefix. If empty, lists from the bucket root (default: empty). (optional) (default to "")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.ListObjects(context.Background(), bucketName).AllLevels(allLevels).ContinuationToken(continuationToken).Fields(fields).MaxObjectCount(maxObjectCount).Prefix(prefix).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.ListObjects``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListObjects`: ResponseBucketObject
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.ListObjects`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiListObjectsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **allLevels** | **bool** | If true, lists objects recursively. If false, lists only the first level using Delimiter&#x3D;&#39;/&#39; (default: true). | [default to true]
 **continuationToken** | **string** | A continuation token for the next page of records. | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **maxObjectCount** | **int64** | Number of results to be returned on the page. Limited to 1000 objects. | 
 **prefix** | **string** | Filter objects by key prefix. If empty, lists from the bucket root (default: empty). | [default to &quot;&quot;]

### Return type

[**ResponseBucketObject**](ResponseBucketObject.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateObjectKey

> SuccessObjectOperation UpdateObjectKey(ctx, bucketName, objectKey).StorageContentType(storageContentType).Body(body).Execute()

Update the object key.



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
	objectKey := "objectKey_example" // string | The key/path of the object within the bucket
	storageContentType := "storageContentType_example" // string | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) (optional)
	body := os.NewFile(1234, "some_file") // *os.File |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StorageObjectsAPI.UpdateObjectKey(context.Background(), bucketName, objectKey).StorageContentType(storageContentType).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StorageObjectsAPI.UpdateObjectKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateObjectKey`: SuccessObjectOperation
	fmt.Fprintf(os.Stdout, "Response from `StorageObjectsAPI.UpdateObjectKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bucketName** | **string** | The name of the bucket | 
**objectKey** | **string** | The key/path of the object within the bucket | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateObjectKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **storageContentType** | **string** | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) | 
 **body** | ***os.File** |  | 

### Return type

[**SuccessObjectOperation**](SuccessObjectOperation.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

