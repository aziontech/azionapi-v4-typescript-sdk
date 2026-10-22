# .VCSContinuousDeploymentExecutionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExecution**](VCSContinuousDeploymentExecutionsApi.md#createExecution) | **POST** /vcs/continuous_deployments/{continuous_deployment_id}/executions | Create a execution
[**listExecutions**](VCSContinuousDeploymentExecutionsApi.md#listExecutions) | **GET** /vcs/continuous_deployments/{continuous_deployment_id}/executions | List executions


# **createExecution**
> ExecutionResponse createExecution()

Create a new continuous deployment execution.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentExecutionsApi } from '';
import type { VCSContinuousDeploymentExecutionsApiCreateExecutionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentExecutionsApi(configuration);

const request: VCSContinuousDeploymentExecutionsApiCreateExecutionRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: 1,
    // No request body required (optional)
  body: {},
};

const data = await apiInstance.createExecution(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| No request body required |
 **continuousDeploymentId** | [**number**] | Unique identifier of the continuous deployment | defaults to undefined


### Return type

**ExecutionResponse**

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

# **listExecutions**
> PaginatedExecutionListResponseList listExecutions()

List all continuous deployment executions.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentExecutionsApi } from '';
import type { VCSContinuousDeploymentExecutionsApiListExecutionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentExecutionsApi(configuration);

const request: VCSContinuousDeploymentExecutionsApiListExecutionsRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: 1,
    // Filter by created date (greater than or equal). (optional)
  createdAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (less than or equal). (optional)
  createdAtLte: new Date('1970-01-01T00:00:00.00Z'),
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
    // Filter by status (accepts comma-separated values). (optional)
  status: "status_example",
    // Filter by updated date (greater than or equal). (optional)
  updatedAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by updated date (less than or equal). (optional)
  updatedAtLte: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.listExecutions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentId** | [**number**] | Unique identifier of the continuous deployment | defaults to undefined
 **createdAtGte** | [**Date**] | Filter by created date (greater than or equal). | (optional) defaults to undefined
 **createdAtLte** | [**Date**] | Filter by created date (less than or equal). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **status** | [**string**] | Filter by status (accepts comma-separated values). | (optional) defaults to undefined
 **updatedAtGte** | [**Date**] | Filter by updated date (greater than or equal). | (optional) defaults to undefined
 **updatedAtLte** | [**Date**] | Filter by updated date (less than or equal). | (optional) defaults to undefined


### Return type

**PaginatedExecutionListResponseList**

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


