# .MetricsDashboardApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDashboard**](MetricsDashboardApi.md#createDashboard) | **POST** /metrics/folders/{folder_id}/dashboards | Create a new dashboard
[**deleteDashboard**](MetricsDashboardApi.md#deleteDashboard) | **DELETE** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Delete a dashboard
[**listDashboards**](MetricsDashboardApi.md#listDashboards) | **GET** /metrics/folders/{folder_id}/dashboards | List of the dashboards
[**partialUpdateDashboard**](MetricsDashboardApi.md#partialUpdateDashboard) | **PATCH** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Partially update a dashboard
[**retrieveDashboard**](MetricsDashboardApi.md#retrieveDashboard) | **GET** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Retrieve details from a dashboard
[**updateDashboard**](MetricsDashboardApi.md#updateDashboard) | **PUT** /metrics/folders/{folder_id}/dashboards/{dashboard_id} | Update a dashboard


# **createDashboard**
> DashboardResponse createDashboard(dashboardRequest)

Create a new dashboard in a given scope.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiCreateDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiCreateDashboardRequest = {
    // The unique identifier of the folder
  folderId: 1,
  
  dashboardRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.createDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardRequest** | **DashboardRequest**|  |
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**DashboardResponse**

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

# **deleteDashboard**
> DeleteResponse deleteDashboard()

Delete a specific dashboard.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiDeleteDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiDeleteDashboardRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
};

const data = await apiInstance.deleteDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


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

# **listDashboards**
> PaginatedDashboardListResponseList listDashboards()

List all dashboards for your user.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiListDashboardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiListDashboardsRequest = {
    // The unique identifier of the folder
  folderId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
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
};

const data = await apiInstance.listDashboards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedDashboardListResponseList**

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

# **partialUpdateDashboard**
> DashboardResponse partialUpdateDashboard()

Update one or more fields of an existing dashboard without affecting other fields.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiPartialUpdateDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiPartialUpdateDashboardRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
  
  patchedDashboardRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.partialUpdateDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedDashboardRequest** | **PatchedDashboardRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**DashboardResponse**

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

# **retrieveDashboard**
> DashboardResponse retrieveDashboard()

Retrieve details from a specific dashboard.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiRetrieveDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiRetrieveDashboardRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DashboardResponse**

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

# **updateDashboard**
> DashboardResponse updateDashboard(dashboardRequest)

Update an existing dashboard. This replaces the entire dashboard with the new data provided.

### Example


```typescript
import { createConfiguration, MetricsDashboardApi } from '';
import type { MetricsDashboardApiUpdateDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsDashboardApi(configuration);

const request: MetricsDashboardApiUpdateDashboardRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
  
  dashboardRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    scope: "azion",
  },
};

const data = await apiInstance.updateDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardRequest** | **DashboardRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined


### Return type

**DashboardResponse**

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


