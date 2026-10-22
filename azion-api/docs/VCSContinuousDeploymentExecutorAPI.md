# .VCSContinuousDeploymentExecutorApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveExecutor**](VCSContinuousDeploymentExecutorApi.md#retrieveExecutor) | **GET** /vcs/continuous_deployments/{continuous_deployment_id}/executor | Retrieve details from a executor
[**updateExecutor**](VCSContinuousDeploymentExecutorApi.md#updateExecutor) | **PUT** /vcs/continuous_deployments/{continuous_deployment_id}/executor | Update a executor


# **retrieveExecutor**
> ExecutorResponse retrieveExecutor()

Retrieve details from a specific continuous deployment executor.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentExecutorApi } from '';
import type { VCSContinuousDeploymentExecutorApiRetrieveExecutorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentExecutorApi(configuration);

const request: VCSContinuousDeploymentExecutorApiRetrieveExecutorRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveExecutor(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentId** | [**number**] | Unique identifier of the continuous deployment | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ExecutorResponse**

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

# **updateExecutor**
> ExecutorResponse updateExecutor()

Update continuous deployment executor information.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentExecutorApi } from '';
import type { VCSContinuousDeploymentExecutorApiUpdateExecutorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentExecutorApi(configuration);

const request: VCSContinuousDeploymentExecutorApiUpdateExecutorRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: 1,
    // No request body required (optional)
  body: {},
};

const data = await apiInstance.updateExecutor(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**| No request body required |
 **continuousDeploymentId** | [**number**] | Unique identifier of the continuous deployment | defaults to undefined


### Return type

**ExecutorResponse**

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


