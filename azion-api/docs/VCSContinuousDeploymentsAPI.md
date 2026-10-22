# .VCSContinuousDeploymentsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContinuousDeployment**](VCSContinuousDeploymentsApi.md#createContinuousDeployment) | **POST** /vcs/continuous_deployments | Create a continuous deployment
[**deleteContinuousDeployment**](VCSContinuousDeploymentsApi.md#deleteContinuousDeployment) | **DELETE** /vcs/continuous_deployments/{continuous_deployment_id} | Delete a continuous deployment
[**listContinuousDeployments**](VCSContinuousDeploymentsApi.md#listContinuousDeployments) | **GET** /vcs/continuous_deployments | List continuous deployments
[**partialUpdateContinuousDeployment**](VCSContinuousDeploymentsApi.md#partialUpdateContinuousDeployment) | **PATCH** /vcs/continuous_deployments/{continuous_deployment_id} | Partialy update a continuous deployment
[**retrieveContinuousDeployment**](VCSContinuousDeploymentsApi.md#retrieveContinuousDeployment) | **GET** /vcs/continuous_deployments/{continuous_deployment_id} | Retrieve details from a continuous deployment
[**updateContinuousDeployment**](VCSContinuousDeploymentsApi.md#updateContinuousDeployment) | **PUT** /vcs/continuous_deployments/{continuous_deployment_id} | Update a continuous deployment


# **createContinuousDeployment**
> ContinuousDeploymentResponse createContinuousDeployment(continuousDeploymentRequest)

Create a new continuous deployment.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiCreateContinuousDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiCreateContinuousDeploymentRequest = {
  
  continuousDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    repository: "2",
    branch: "jUR,rZ#UM/?R,Fp^l6$ARj",
    buildContext: [
      {
        field: "jUR,rZ#UM/?R,Fp^l6$ARj",
        value: "jUR,rZ#UM/?R,Fp^l6$ARj",
        instantiationDataPath: "jUR,rZ#UM/?R,Fp^l6$ARj",
      },
    ],
    deployContext: {
      "key": null,
    },
    integrationId: 1,
    executionScriptId: 1,
  },
};

const data = await apiInstance.createContinuousDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentRequest** | **ContinuousDeploymentRequest**|  |


### Return type

**ContinuousDeploymentResponse**

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

# **deleteContinuousDeployment**
> DeleteResponse deleteContinuousDeployment()

Delete a specific continuous deployment.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiDeleteContinuousDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiDeleteContinuousDeploymentRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: "continuous_deployment_id_example",
};

const data = await apiInstance.deleteContinuousDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentId** | [**string**] | Unique identifier of the continuous deployment | defaults to undefined


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

# **listContinuousDeployments**
> PaginatedContinuousDeploymentListResponseList listContinuousDeployments()

List all continuous deployments.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiListContinuousDeploymentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiListContinuousDeploymentsRequest = {
    // Filter by branch (exact match). (optional)
  branch: "branch_example",
    // Filter by created date (greater than or equal). (optional)
  createdGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (less than or equal). (optional)
  createdLte: new Date('1970-01-01T00:00:00.00Z'),
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
    // Filter by repository (case-insensitive, partial match). (optional)
  repository: "repository_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listContinuousDeployments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | [**string**] | Filter by branch (exact match). | (optional) defaults to undefined
 **createdGte** | [**Date**] | Filter by created date (greater than or equal). | (optional) defaults to undefined
 **createdLte** | [**Date**] | Filter by created date (less than or equal). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **repository** | [**string**] | Filter by repository (case-insensitive, partial match). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedContinuousDeploymentListResponseList**

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

# **partialUpdateContinuousDeployment**
> ContinuousDeploymentResponse partialUpdateContinuousDeployment()

Partialy update continuous deployment information.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiPartialUpdateContinuousDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiPartialUpdateContinuousDeploymentRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: "continuous_deployment_id_example",
  
  patchedContinuousDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    repository: "2",
    branch: "jUR,rZ#UM/?R,Fp^l6$ARj",
    buildContext: [
      {
        field: "jUR,rZ#UM/?R,Fp^l6$ARj",
        value: "jUR,rZ#UM/?R,Fp^l6$ARj",
        instantiationDataPath: "jUR,rZ#UM/?R,Fp^l6$ARj",
      },
    ],
    deployContext: {
      "key": null,
    },
    integrationId: 1,
    executionScriptId: 1,
  },
};

const data = await apiInstance.partialUpdateContinuousDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedContinuousDeploymentRequest** | **PatchedContinuousDeploymentRequest**|  |
 **continuousDeploymentId** | [**string**] | Unique identifier of the continuous deployment | defaults to undefined


### Return type

**ContinuousDeploymentResponse**

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

# **retrieveContinuousDeployment**
> ContinuousDeploymentResponse retrieveContinuousDeployment()

Retrieve details from a specific continuous deployment.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiRetrieveContinuousDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiRetrieveContinuousDeploymentRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: "continuous_deployment_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveContinuousDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentId** | [**string**] | Unique identifier of the continuous deployment | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ContinuousDeploymentResponse**

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

# **updateContinuousDeployment**
> ContinuousDeploymentResponse updateContinuousDeployment(continuousDeploymentRequest)

Update continuous deployment information.

### Example


```typescript
import { createConfiguration, VCSContinuousDeploymentsApi } from '';
import type { VCSContinuousDeploymentsApiUpdateContinuousDeploymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSContinuousDeploymentsApi(configuration);

const request: VCSContinuousDeploymentsApiUpdateContinuousDeploymentRequest = {
    // Unique identifier of the continuous deployment
  continuousDeploymentId: "continuous_deployment_id_example",
  
  continuousDeploymentRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    repository: "2",
    branch: "jUR,rZ#UM/?R,Fp^l6$ARj",
    buildContext: [
      {
        field: "jUR,rZ#UM/?R,Fp^l6$ARj",
        value: "jUR,rZ#UM/?R,Fp^l6$ARj",
        instantiationDataPath: "jUR,rZ#UM/?R,Fp^l6$ARj",
      },
    ],
    deployContext: {
      "key": null,
    },
    integrationId: 1,
    executionScriptId: 1,
  },
};

const data = await apiInstance.updateContinuousDeployment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousDeploymentRequest** | **ContinuousDeploymentRequest**|  |
 **continuousDeploymentId** | [**string**] | Unique identifier of the continuous deployment | defaults to undefined


### Return type

**ContinuousDeploymentResponse**

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


