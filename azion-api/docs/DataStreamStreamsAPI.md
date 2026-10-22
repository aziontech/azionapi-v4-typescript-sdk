# .DataStreamStreamsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataStream**](DataStreamStreamsApi.md#createDataStream) | **POST** /workspace/stream/streams | Create a Data Stream
[**deleteDataStream**](DataStreamStreamsApi.md#deleteDataStream) | **DELETE** /workspace/stream/streams/{stream_id} | Delete a Data Stream
[**listDataStreams**](DataStreamStreamsApi.md#listDataStreams) | **GET** /workspace/stream/streams | List Data Streams
[**partialUpdateDataStream**](DataStreamStreamsApi.md#partialUpdateDataStream) | **PATCH** /workspace/stream/streams/{stream_id} | Partially update a Data Stream
[**retrieveDataStream**](DataStreamStreamsApi.md#retrieveDataStream) | **GET** /workspace/stream/streams/{stream_id} | Retrieve details of a Data Stream
[**updateDataStream**](DataStreamStreamsApi.md#updateDataStream) | **PUT** /workspace/stream/streams/{stream_id} | Update a Data Stream


# **createDataStream**
> DataStreamResponse createDataStream(dataStreamRequest)

Create a new Data Stream in your account.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiCreateDataStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiCreateDataStreamRequest = {
  
  dataStreamRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    inputs: [
      null,
    ],
    transform: [
      null,
    ],
    outputs: [
      null,
    ],
  },
};

const data = await apiInstance.createDataStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStreamRequest** | **DataStreamRequest**|  |


### Return type

**DataStreamResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDataStream**
> DeleteResponse deleteDataStream()

Delete a specific Data Stream in your account.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiDeleteDataStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiDeleteDataStreamRequest = {
    // A unique integer value identifying the data stream.
  streamId: 1,
};

const data = await apiInstance.deleteDataStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | [**number**] | A unique integer value identifying the data stream. | defaults to undefined


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
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDataStreams**
> PaginatedDataStreamList listDataStreams()

List all Data Streams owned by your account.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiListDataStreamsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiListDataStreamsRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by created date (greater than or equal). (optional)
  createdGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (less than or equal). (optional)
  createdLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by data set id (accepts comma-separated values). (optional)
  dataSetId: 1,
    // Filter by data source (accepts comma-separated values). (optional)
  dataSource: "data_source_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listDataStreams(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **createdGte** | [**Date**] | Filter by created date (greater than or equal). | (optional) defaults to undefined
 **createdLte** | [**Date**] | Filter by created date (less than or equal). | (optional) defaults to undefined
 **dataSetId** | [**number**] | Filter by data set id (accepts comma-separated values). | (optional) defaults to undefined
 **dataSource** | [**string**] | Filter by data source (accepts comma-separated values). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedDataStreamList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateDataStream**
> DataStreamResponse partialUpdateDataStream()

Update one or more fields of an existing Data Stream.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiPartialUpdateDataStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiPartialUpdateDataStreamRequest = {
    // A unique integer value identifying the data stream.
  streamId: 1,
  
  patchedDataStreamRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    inputs: [
      null,
    ],
    transform: [
      null,
    ],
  },
};

const data = await apiInstance.partialUpdateDataStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedDataStreamRequest** | **PatchedDataStreamRequest**|  |
 **streamId** | [**number**] | A unique integer value identifying the data stream. | defaults to undefined


### Return type

**DataStreamResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDataStream**
> DataStreamResponse retrieveDataStream()

Retrieve details from a specific Data Stream in your account.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiRetrieveDataStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiRetrieveDataStreamRequest = {
    // A unique integer value identifying the data stream.
  streamId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDataStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | [**number**] | A unique integer value identifying the data stream. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DataStreamResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDataStream**
> DataStreamResponse updateDataStream(dataStreamRequest)

Update an existing Data Stream.

### Example


```typescript
import { createConfiguration, DataStreamStreamsApi } from '';
import type { DataStreamStreamsApiUpdateDataStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamStreamsApi(configuration);

const request: DataStreamStreamsApiUpdateDataStreamRequest = {
    // A unique integer value identifying the data stream.
  streamId: 1,
  
  dataStreamRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    inputs: [
      null,
    ],
    transform: [
      null,
    ],
    outputs: [
      null,
    ],
  },
};

const data = await apiInstance.updateDataStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataStreamRequest** | **DataStreamRequest**|  |
 **streamId** | [**number**] | A unique integer value identifying the data stream. | defaults to undefined


### Return type

**DataStreamResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


