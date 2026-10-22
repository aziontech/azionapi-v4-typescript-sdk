# .MetricsReportsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReport**](MetricsReportsApi.md#createReport) | **POST** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports | Create a new report
[**deleteReport**](MetricsReportsApi.md#deleteReport) | **DELETE** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Delete a report
[**listReports**](MetricsReportsApi.md#listReports) | **GET** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports | List of reports
[**orderingReport**](MetricsReportsApi.md#orderingReport) | **PUT** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/order | Ordering reports in row
[**retrieveReport**](MetricsReportsApi.md#retrieveReport) | **GET** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Retrieve details from a report
[**updateReport**](MetricsReportsApi.md#updateReport) | **PUT** /metrics/folders/{folder_id}/dashboards/{dashboard_id}/rows/{row_id}/reports/{report_id} | Update a report


# **createReport**
> ReportResponse createReport(reportRequest)

Create a new report in a given scope.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiCreateReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiCreateReportRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
  
  reportRequest: {
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "big-numbers",
    xAxis: "jUR,rZ#UM/?R,Fp^l6$ARj",
    aggregationType: "avg",
    dataUnit: "bits-per-second",
    queries: [
      {
        dataset: "jUR,rZ#UM/?R,Fp^l6$ARj",
        filters: {
          "key": null,
        },
        groupBy: [
          "jUR,rZ#UM/?R,Fp^l6$ARj",
        ],
        limit: 0,
        aggregatedFields: [
          {
            aggregation: "jUR,rZ#UM/?R,Fp^l6$ARj",
            variable: "jUR,rZ#UM/?R,Fp^l6$ARj",
          },
        ],
        calculatedFields: [
          "jUR,rZ#UM/?R,Fp^l6$ARj",
        ],
        orderDirection: "asc",
        topX: true,
        maxYAxis: 1,
      },
    ],
    columns: 1,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    rotated: true,
    comparisonType: "inverse",
    helpCenterPath: "jUR,rZ#UM/?R,Fp^l6$ARj",
    library: true,
  },
};

const data = await apiInstance.createReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportRequest** | **ReportRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined


### Return type

**ReportResponse**

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

# **deleteReport**
> DeleteResponse deleteReport()

Delete a specific report.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiDeleteReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiDeleteReportRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the report
  reportId: 1,
    // The unique identifier of the row
  rowId: 1,
};

const data = await apiInstance.deleteReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **reportId** | [**number**] | The unique identifier of the report | defaults to undefined
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

# **listReports**
> PaginatedReportListResponseList listReports()

List all reports for your user.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiListReportsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiListReportsRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
    // Filter by aggregation type (accepts comma-separated values). (optional)
  aggregationType: "jUR,rZ#UM/?R,Fp^l6$ARj",
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
    // Filter by type (accepts comma-separated values). (optional)
  type: "jUR,rZ#UM/?R,Fp^l6$ARj",
};

const data = await apiInstance.listReports(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined
 **aggregationType** | [**string**] | Filter by aggregation type (accepts comma-separated values). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **type** | [**string**] | Filter by type (accepts comma-separated values). | (optional) defaults to undefined


### Return type

**PaginatedReportListResponseList**

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

# **orderingReport**
> OrderResponse orderingReport(orderRequest)

Reorder all reports for a specific Row.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiOrderingReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiOrderingReportRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the row
  rowId: 1,
  
  orderRequest: {
    order: [
      1,
    ],
  },
};

const data = await apiInstance.orderingReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRequest** | **OrderRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined


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

# **retrieveReport**
> ReportResponse retrieveReport()

Retrieve details from a specific report.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiRetrieveReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiRetrieveReportRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the report
  reportId: 1,
    // The unique identifier of the row
  rowId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **reportId** | [**number**] | The unique identifier of the report | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ReportResponse**

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

# **updateReport**
> ReportResponse updateReport(reportRequest)

Update an existing report. This replaces the entire report with the new data provided.

### Example


```typescript
import { createConfiguration, MetricsReportsApi } from '';
import type { MetricsReportsApiUpdateReportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MetricsReportsApi(configuration);

const request: MetricsReportsApiUpdateReportRequest = {
    // The unique identifier of the dashboard
  dashboardId: 1,
    // The unique identifier of the folder
  folderId: 1,
    // The unique identifier of the report
  reportId: 1,
    // The unique identifier of the row
  rowId: 1,
  
  reportRequest: {
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "big-numbers",
    xAxis: "jUR,rZ#UM/?R,Fp^l6$ARj",
    aggregationType: "avg",
    dataUnit: "bits-per-second",
    queries: [
      {
        dataset: "jUR,rZ#UM/?R,Fp^l6$ARj",
        filters: {
          "key": null,
        },
        groupBy: [
          "jUR,rZ#UM/?R,Fp^l6$ARj",
        ],
        limit: 0,
        aggregatedFields: [
          {
            aggregation: "jUR,rZ#UM/?R,Fp^l6$ARj",
            variable: "jUR,rZ#UM/?R,Fp^l6$ARj",
          },
        ],
        calculatedFields: [
          "jUR,rZ#UM/?R,Fp^l6$ARj",
        ],
        orderDirection: "asc",
        topX: true,
        maxYAxis: 1,
      },
    ],
    columns: 1,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    rotated: true,
    comparisonType: "inverse",
    helpCenterPath: "jUR,rZ#UM/?R,Fp^l6$ARj",
    library: true,
  },
};

const data = await apiInstance.updateReport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportRequest** | **ReportRequest**|  |
 **dashboardId** | [**number**] | The unique identifier of the dashboard | defaults to undefined
 **folderId** | [**number**] | The unique identifier of the folder | defaults to undefined
 **reportId** | [**number**] | The unique identifier of the report | defaults to undefined
 **rowId** | [**number**] | The unique identifier of the row | defaults to undefined


### Return type

**ReportResponse**

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


