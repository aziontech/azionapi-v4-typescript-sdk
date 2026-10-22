# .WorkloadDeploymentsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkloadDeployment**](WorkloadDeploymentsApi.md#createWorkloadDeployment) | **POST** /workspace/workloads/{workload_id}/deployments | Create a Workload Deployment
[**deleteWorkloadDeployment**](WorkloadDeploymentsApi.md#deleteWorkloadDeployment) | **DELETE** /workspace/workloads/{workload_id}/deployments/{deployment_id} | Delete a Workload Deployment
[**listWorkloadDeployments**](WorkloadDeploymentsApi.md#listWorkloadDeployments) | **GET** /workspace/workloads/{workload_id}/deployments | List Workload Deployments
[**partialUpdateWorkloadDeployment**](WorkloadDeploymentsApi.md#partialUpdateWorkloadDeployment) | **PATCH** /workspace/workloads/{workload_id}/deployments/{deployment_id} | Partially update a Workload Deployment
[**retrieveWorkloadDeployment**](WorkloadDeploymentsApi.md#retrieveWorkloadDeployment) | **GET** /workspace/workloads/{workload_id}/deployments/{deployment_id} | Retrieve details of a Workload Deployment
[**updateWorkloadDeployment**](WorkloadDeploymentsApi.md#updateWorkloadDeployment) | **PUT** /workspace/workloads/{workload_id}/deployments/{deployment_id} | Update a Workload Deployment


# **createWorkloadDeployment**
> WorkloadDeploymentResponse createWorkloadDeployment(workloadDeploymentRequest)

Create a new Workload Deployment in your account.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiCreateWorkloadDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiCreateWorkloadDeploymentRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
  
  workloadDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    current: true,
    active: true,
    strategy: null,
  },
};

const data = await apiInstance.createWorkloadDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadDeploymentRequest** | **WorkloadDeploymentRequest**|  |
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


### Return type

**WorkloadDeploymentResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Workload deployment created successfully. |  -  |
**202** | Workload deployment creation accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWorkloadDeployment**
> DeleteResponse deleteWorkloadDeployment()

Delete a specific Workload Deployment in your account.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiDeleteWorkloadDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiDeleteWorkloadDeploymentRequest = {
    // A unique integer value identifying the deployment.
  deploymentId: 1,
    // A unique integer value identifying the workload.
  workloadId: 1,
};

const data = await apiInstance.deleteWorkloadDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | [**number**] | A unique integer value identifying the deployment. | defaults to undefined
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
**200** | Workload deployment deleted successfully. |  -  |
**202** | Workload deployment deletion accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWorkloadDeployments**
> PaginatedWorkloadDeploymentList listWorkloadDeployments()

List all Workload Deployments related to your account\'s Workloads.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiListWorkloadDeploymentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiListWorkloadDeploymentsRequest = {
    // A unique integer value identifying the workload.
  workloadId: 1,
    // Filter by current status. (optional)
  current: true,
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
    // Filter by tag (case-insensitive, partial match). (optional)
  tag: "tag_example",
};

const data = await apiInstance.listWorkloadDeployments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined
 **current** | [**boolean**] | Filter by current status. | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **tag** | [**string**] | Filter by tag (case-insensitive, partial match). | (optional) defaults to undefined


### Return type

**PaginatedWorkloadDeploymentList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of workload deployments retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateWorkloadDeployment**
> WorkloadDeploymentResponse partialUpdateWorkloadDeployment()

Update one or more fields of an existing Workload Deployment without affecting other fields.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiPartialUpdateWorkloadDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiPartialUpdateWorkloadDeploymentRequest = {
    // A unique integer value identifying the deployment.
  deploymentId: 1,
    // A unique integer value identifying the workload.
  workloadId: 1,
  
  patchedWorkloadDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    current: true,
    active: true,
    strategy: null,
  },
};

const data = await apiInstance.partialUpdateWorkloadDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedWorkloadDeploymentRequest** | **PatchedWorkloadDeploymentRequest**|  |
 **deploymentId** | [**number**] | A unique integer value identifying the deployment. | defaults to undefined
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


### Return type

**WorkloadDeploymentResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload deployment partially updated successfully. |  -  |
**202** | Workload deployment partial update accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWorkloadDeployment**
> WorkloadDeploymentResponse retrieveWorkloadDeployment()

Retrieve details of a specific Workload Deployment in your account.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiRetrieveWorkloadDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiRetrieveWorkloadDeploymentRequest = {
    // A unique integer value identifying the deployment.
  deploymentId: 1,
    // A unique integer value identifying the workload.
  workloadId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWorkloadDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | [**number**] | A unique integer value identifying the deployment. | defaults to undefined
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**WorkloadDeploymentResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload deployment details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWorkloadDeployment**
> WorkloadDeploymentResponse updateWorkloadDeployment(workloadDeploymentRequest)

Update an existing Workload Deployment. This replaces the entire Workload Deployment with the new data provided.

### Example


```typescript
import { createConfiguration, WorkloadDeploymentsApi } from '';
import type { WorkloadDeploymentsApiUpdateWorkloadDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkloadDeploymentsApi(configuration);

const request: WorkloadDeploymentsApiUpdateWorkloadDeploymentRequest = {
    // A unique integer value identifying the deployment.
  deploymentId: 1,
    // A unique integer value identifying the workload.
  workloadId: 1,
  
  workloadDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    current: true,
    active: true,
    strategy: null,
  },
};

const data = await apiInstance.updateWorkloadDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workloadDeploymentRequest** | **WorkloadDeploymentRequest**|  |
 **deploymentId** | [**number**] | A unique integer value identifying the deployment. | defaults to undefined
 **workloadId** | [**number**] | A unique integer value identifying the workload. | defaults to undefined


### Return type

**WorkloadDeploymentResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workload deployment updated successfully. |  -  |
**202** | Workload deployment update accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


