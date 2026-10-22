# .StorageObjectsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyObjectKey**](StorageObjectsApi.md#copyObjectKey) | **POST** /workspace/storage/buckets/{bucket_name}/objects/{object_key}/copy/{new_object_key} | Copy object to new key
[**createObjectKey**](StorageObjectsApi.md#createObjectKey) | **POST** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Create new object key.
[**deleteObjectKey**](StorageObjectsApi.md#deleteObjectKey) | **DELETE** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Delete object key
[**downloadObject**](StorageObjectsApi.md#downloadObject) | **GET** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Download object
[**listObjects**](StorageObjectsApi.md#listObjects) | **GET** /workspace/storage/buckets/{bucket_name}/objects | List objects from bucket
[**updateObjectKey**](StorageObjectsApi.md#updateObjectKey) | **PUT** /workspace/storage/buckets/{bucket_name}/objects/{object_key} | Update the object key.


# **copyObjectKey**
> any copyObjectKey()

Copy an object to a new key within the same bucket.

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiCopyObjectKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiCopyObjectKeyRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the destination object within the bucket
  newObjectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the source object within the bucket
  objectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
  
  body: null,
};

const data = await apiInstance.copyObjectKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **newObjectKey** | [**string**] | The key/path of the destination object within the bucket | defaults to undefined
 **objectKey** | [**string**] | The key/path of the source object within the bucket | defaults to undefined


### Return type

**any**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createObjectKey**
> SuccessObjectOperationAsync | SuccessObjectOperation createObjectKey()

Create a new object key in the bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiCreateObjectKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiCreateObjectKeyRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the object within the bucket
  objectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) (optional)
  storageContentType: "Storage-Content-Type_example",
  
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.createObjectKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **objectKey** | [**string**] | The key/path of the object within the bucket | defaults to undefined
 **storageContentType** | [**string**] | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) | (optional) defaults to undefined


### Return type

**SuccessObjectOperationAsync | SuccessObjectOperation**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Object created successfully. |  -  |
**202** | Object creation request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteObjectKey**
> DeleteResponse deleteObjectKey()

Upon a successful deletion request, the object will be permanently deleted after a 24-hour grace period.

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiDeleteObjectKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiDeleteObjectKeyRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the object within the bucket
  objectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.deleteObjectKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **objectKey** | [**string**] | The key/path of the object within the bucket | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object deleted successfully. |  -  |
**202** | Object deletion request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadObject**
> HttpFile downloadObject()

Download the object key from bucket.

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiDownloadObjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiDownloadObjectRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the object within the bucket
  objectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.downloadObject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **objectKey** | [**string**] | The key/path of the object within the bucket | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object downloaded successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listObjects**
> ResponseBucketObject listObjects()

List objects from bucket

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiListObjectsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiListObjectsRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // If true, lists objects recursively. If false, lists only the first level using Delimiter=\'/\' (default: true). (optional)
  allLevels: true,
    // A continuation token for the next page of records. (optional)
  continuationToken: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Number of results to be returned on the page. Limited to 1000 objects. (optional)
  maxObjectCount: 1,
    // Filter objects by key prefix. If empty, lists from the bucket root (default: empty). (optional)
  prefix: "",
};

const data = await apiInstance.listObjects(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **allLevels** | [**boolean**] | If true, lists objects recursively. If false, lists only the first level using Delimiter&#x3D;\&#39;/\&#39; (default: true). | (optional) defaults to true
 **continuationToken** | [**string**] | A continuation token for the next page of records. | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **maxObjectCount** | [**number**] | Number of results to be returned on the page. Limited to 1000 objects. | (optional) defaults to undefined
 **prefix** | [**string**] | Filter objects by key prefix. If empty, lists from the bucket root (default: empty). | (optional) defaults to ''


### Return type

**ResponseBucketObject**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of bucket objects retrieved successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateObjectKey**
> SuccessObjectOperationAsync | SuccessObjectOperation updateObjectKey()

Update the object key from bucket. The object\'s Content-Type is defined by the Content-Type header. If this header is not included, the Content-Type will be automatically detected.

### Example


```typescript
import { createConfiguration, StorageObjectsApi } from '';
import type { StorageObjectsApiUpdateObjectKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageObjectsApi(configuration);

const request: StorageObjectsApiUpdateObjectKeyRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The key/path of the object within the bucket
  objectKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) (optional)
  storageContentType: "Storage-Content-Type_example",
  
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.updateObjectKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **objectKey** | [**string**] | The key/path of the object within the bucket | defaults to undefined
 **storageContentType** | [**string**] | The MIME type of the object being uploaded (Renamed from Content-Type to avoid SDK conflicts) | (optional) defaults to undefined


### Return type

**SuccessObjectOperationAsync | SuccessObjectOperation**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object updated successfully. |  -  |
**202** | Object update request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


