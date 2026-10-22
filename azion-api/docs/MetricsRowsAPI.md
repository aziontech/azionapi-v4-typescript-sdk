# .MetricsRowsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRow**](MetricsRowsApi.md#createRow) | **POST** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows | Create a new row
[**deleteRow**](MetricsRowsApi.md#deleteRow) | **DELETE** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Delete a row
[**listRows**](MetricsRowsApi.md#listRows) | **GET** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows | List of the rows
[**orderingRow**](MetricsRowsApi.md#orderingRow) | **PUT** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/order | Ordering rows in dashboard
[**retrieveRow**](MetricsRowsApi.md#retrieveRow) | **GET** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Retrieve details from a row
[**updateRow**](MetricsRowsApi.md#updateRow) | **PUT** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id} | Update a row


# **createRow**
> RowResponse createRow(rowRequest)

Create a new row in dashboard.

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiCreateRowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiCreateRowRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
  
  rowRequest: {
    title: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createRow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rowRequest** | **RowRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**RowResponse**

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

# **deleteRow**
> DeleteResponse deleteRow()

Delete a specific row.

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiDeleteRowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiDeleteRowRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
};

const data = await apiInstance.deleteRow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined


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
**200** | Successful deletion |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRows**
> PaginatedRowListResponseList listRows()

List all rows in dashboards.

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiListRowsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiListRowsRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
    // Filter by title (case-insensitive, partial match). (optional)
  title: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.listRows(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **title** | [**string**] | Filter by title (case-insensitive, partial match). | (optional) defaults to undefined


### Return type

**PaginatedRowListResponseList**

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

# **orderingRow**
> OrderResponse orderingRow(orderRequest)

Reorder all rows for a specific Dahsboard.

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiOrderingRowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiOrderingRowRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
  
  orderRequest: {
    order: [
      1,
    ],
  },
};

const data = await apiInstance.orderingRow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRequest** | **OrderRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**OrderResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveRow**
> RowResponse retrieveRow()

Retrieve details from a specific row.

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiRetrieveRowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiRetrieveRowRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveRow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**RowResponse**

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

# **updateRow**
> RowResponse updateRow(rowRequest)

Update an existing row. 

### Example


```typescript
import { createConfiguration, MetricsRowsApi } from '';
import type { MetricsRowsApiUpdateRowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsRowsApi(configuration);

const request: MetricsRowsApiUpdateRowRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
  
  rowRequest: {
    title: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateRow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rowRequest** | **RowRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined


### Return type

**RowResponse**

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


