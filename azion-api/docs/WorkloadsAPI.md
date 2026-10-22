# .WorkloadsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkload**](WorkloadsApi.md#createWorkload) | **POST** /workspace/workloads | Create an Workload
[**deleteWorkload**](WorkloadsApi.md#deleteWorkload) | **DELETE** /workspace/workloads/{workload_id} | Delete an Workload
[**listWorkloads**](WorkloadsApi.md#listWorkloads) | **GET** /workspace/workloads | List Workloads
[**partialUpdateWorkload**](WorkloadsApi.md#partialUpdateWorkload) | **PATCH** /workspace/workloads/{workload_id} | Partially update an Workload
[**retrieveWorkload**](WorkloadsApi.md#retrieveWorkload) | **GET** /workspace/workloads/{workload_id} | Retrieve details of an Workload
[**updateWorkload**](WorkloadsApi.md#updateWorkload) | **PUT** /workspace/workloads/{workload_id} | Update an Workload


# **createWorkload**
> WorkloadResponse createWorkload(workloadRequest)

Create a new Workload in your account.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiCreateWorkloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiCreateWorkloadRequest = {
  
  workloadRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    infrastructure: null,
    tls: null,
    protocols: null,
    mtls: null,
    domains: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    workloadDomainAllowAccess: true,
  },
};

const data = await apiInstance.createWorkload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadRequest** | **WorkloadRequest**|  |


### Return type

**WorkloadResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Workload created successfully. |  -  |
**202** | Workload creation accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWorkload**
> DeleteResponse deleteWorkload()

Delete a specific Workload in your account.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiDeleteWorkloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiDeleteWorkloadRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
};

const data = await apiInstance.deleteWorkload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


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
**200** | Workload deleted successfully. |  -  |
**202** | Workload deletion accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWorkloads**
> PaginatedWorkloadList listWorkloads()

List all Workloads owned by your account.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiListWorkloadsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiListWorkloadsRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by digital certificate id (accepts comma-separated values). (optional)
  digitalCertificateId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by infrastructure (accepts comma-separated values). (optional)
  infrastructure: "infrastructure_example",
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by map name (case-insensitive, partial match). (optional)
  mapName: "map_name_example",
    // Filter by mTLS trusted CA certificate id (accepts comma-separated values). (optional)
  mtlsTrustedCaCertificateId: 1,
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

const data = await apiInstance.listWorkloads(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **digitalCertificateId** | [**number**] | Filter by digital certificate id (accepts comma-separated values). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **infrastructure** | [**string**] | Filter by infrastructure (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **mapName** | [**string**] | Filter by map name (case-insensitive, partial match). | (optional) defaults to undefined
 **mtlsTrustedCaCertificateId** | [**number**] | Filter by mTLS trusted CA certificate id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedWorkloadList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of workloads retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateWorkload**
> WorkloadResponse partialUpdateWorkload()

Update one or more fields of an existing Workload without affecting other fields.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiPartialUpdateWorkloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiPartialUpdateWorkloadRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
  
  patchedWorkloadRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    infrastructure: null,
    tls: null,
    protocols: null,
    mtls: null,
    domains: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    workloadDomainAllowAccess: true,
  },
};

const data = await apiInstance.partialUpdateWorkload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedWorkloadRequest** | **PatchedWorkloadRequest**|  |
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


### Return type

**WorkloadResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload partially updated successfully. |  -  |
**202** | Workload partial update accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWorkload**
> WorkloadResponse retrieveWorkload()

Retrieve details of a specific Workload in your account.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiRetrieveWorkloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiRetrieveWorkloadRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWorkload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**WorkloadResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWorkload**
> WorkloadResponse updateWorkload(workloadRequest)

Update an existing Workload. This replaces the entire Workload with the new data provided.

### Example


```typescript
import { createConfiguration, WorkloadsApi } from '';
import type { WorkloadsApiUpdateWorkloadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadsApi(configuration);

const request: WorkloadsApiUpdateWorkloadRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
  
  workloadRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    infrastructure: null,
    tls: null,
    protocols: null,
    mtls: null,
    domains: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    workloadDomainAllowAccess: true,
  },
};

const data = await apiInstance.updateWorkload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadRequest** | **WorkloadRequest**|  |
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


### Return type

**WorkloadResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload updated successfully. |  -  |
**202** | Workload update accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


