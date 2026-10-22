# .StorageBucketsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBucket**](StorageBucketsApi.md#createBucket) | **POST** /workspace/storage/buckets | Create a new bucket
[**deleteBucket**](StorageBucketsApi.md#deleteBucket) | **DELETE** /workspace/storage/buckets/{bucket_name} | Delete a bucket
[**listBuckets**](StorageBucketsApi.md#listBuckets) | **GET** /workspace/storage/buckets | List buckets
[**retrieveBucket**](StorageBucketsApi.md#retrieveBucket) | **GET** /workspace/storage/buckets/{bucket_name} | Retrieve a bucket
[**updateBucket**](StorageBucketsApi.md#updateBucket) | **PATCH** /workspace/storage/buckets/{bucket_name} | Update bucket info


# **createBucket**
> BucketCreateResponse createBucket(bucketCreateRequest)

Create a new bucket.

### Example


```typescript
import { createConfiguration, StorageBucketsApi } from '';
import type { StorageBucketsApiCreateBucketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageBucketsApi(configuration);

const request: StorageBucketsApiCreateBucketRequest = {
  
  bucketCreateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARjbhJk C>i H'qT\{<?'es",
    workloadsAccess: "read_only",
  },
};

const data = await apiInstance.createBucket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketCreateRequest** | **BucketCreateRequest**|  |


### Return type

**BucketCreateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Bucket created successfully. |  -  |
**202** | Bucket creation request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBucket**
> DeleteResponse deleteBucket()

Delete a specific bucket.

### Example


```typescript
import { createConfiguration, StorageBucketsApi } from '';
import type { StorageBucketsApiDeleteBucketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageBucketsApi(configuration);

const request: StorageBucketsApiDeleteBucketRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.deleteBucket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined


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
**200** | Bucket deleted successfully. |  -  |
**202** | Bucket deletion request accepted and is being processed. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBuckets**
> PaginatedBucketList listBuckets()

List all buckets.

### Example


```typescript
import { createConfiguration, StorageBucketsApi } from '';
import type { StorageBucketsApiListBucketsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageBucketsApi(configuration);

const request: StorageBucketsApiListBucketsRequest = {
    // Filter by bucket (exact match). (optional)
  bucket: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by creation date (exact match). (optional)
  created: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by creation date (greater than or equal). (optional)
  createdGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by creation date (less than or equal). (optional)
  createdLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by description (case-insensitive, partial match). (optional)
  description: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by last modified date (exact match). (optional)
  lastModified: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
    // Filter by status (accepts comma-separated values). (optional)
  status: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by workloads access (accepts comma-separated values). (optional)
  workloadsAccess: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.listBuckets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | [**string**] | Filter by bucket (exact match). | (optional) defaults to undefined
 **created** | [**Date**] | Filter by creation date (exact match). | (optional) defaults to undefined
 **createdGte** | [**Date**] | Filter by creation date (greater than or equal). | (optional) defaults to undefined
 **createdLte** | [**Date**] | Filter by creation date (less than or equal). | (optional) defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModified** | [**Date**] | Filter by last modified date (exact match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **status** | [**string**] | Filter by status (accepts comma-separated values). | (optional) defaults to undefined
 **workloadsAccess** | [**string**] | Filter by workloads access (accepts comma-separated values). | (optional) defaults to undefined


### Return type

**PaginatedBucketList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of buckets retrieved successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveBucket**
> BucketCreateResponse retrieveBucket()

Retrieve details from a specific bucket.

### Example


```typescript
import { createConfiguration, StorageBucketsApi } from '';
import type { StorageBucketsApiRetrieveBucketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageBucketsApi(configuration);

const request: StorageBucketsApiRetrieveBucketRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveBucket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**BucketCreateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucket details retrieved successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBucket**
> BucketCreateResponse updateBucket()

Update bucket information (bucket name cannot be changed)

### Example


```typescript
import { createConfiguration, StorageBucketsApi } from '';
import type { StorageBucketsApiUpdateBucketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageBucketsApi(configuration);

const request: StorageBucketsApiUpdateBucketRequest = {
    // The name of the bucket
  bucketName: "jUR,rZ#UM/?R,Fp^l6$ARj",
  
  patchedBucketRequest: {
    workloadsAccess: "read_only",
  },
};

const data = await apiInstance.updateBucket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedBucketRequest** | **PatchedBucketRequest**|  |
 **bucketName** | [**string**] | The name of the bucket | defaults to undefined


### Return type

**BucketCreateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucket updated successfully. |  -  |
**202** | Bucket update request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


