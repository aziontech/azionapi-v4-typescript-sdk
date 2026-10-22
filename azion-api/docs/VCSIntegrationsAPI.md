# .VCSIntegrationsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIntegration**](VCSIntegrationsApi.md#deleteIntegration) | **DELETE** /vcs/integrations/{integration_id} | Delete an integration
[**listIntegrations**](VCSIntegrationsApi.md#listIntegrations) | **GET** /vcs/integrations | List integrations
[**listRepositories**](VCSIntegrationsApi.md#listRepositories) | **GET** /vcs/integrations/{integration_id}/repositories | List integration repositories.
[**retrieveIntegration**](VCSIntegrationsApi.md#retrieveIntegration) | **GET** /vcs/integrations/{integration_id} | Retrieve details from a integration


# **deleteIntegration**
> DeleteResponse deleteIntegration()

Delete a specific account integration.

### Example


```typescript
import { createConfiguration, VCSIntegrationsApi } from '';
import type { VCSIntegrationsApiDeleteIntegrationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSIntegrationsApi(configuration);

const request: VCSIntegrationsApiDeleteIntegrationRequest = {
    // Unique identifier of the integration
  integrationId: "integration_id_example",
};

const data = await apiInstance.deleteIntegration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | [**string**] | Unique identifier of the integration | defaults to undefined


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

# **listIntegrations**
> PaginatedIntegrationListResponseList listIntegrations()

List all account integrations.

### Example


```typescript
import { createConfiguration, VCSIntegrationsApi } from '';
import type { VCSIntegrationsApiListIntegrationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSIntegrationsApi(configuration);

const request: VCSIntegrationsApiListIntegrationsRequest = {
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
    // Filter by platform id (exact match). (optional)
  platform: "platform_example",
    // Filter by scope (case-insensitive, partial match). (optional)
  scope: "scope_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listIntegrations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **platform** | [**string**] | Filter by platform id (exact match). | (optional) defaults to undefined
 **scope** | [**string**] | Filter by scope (case-insensitive, partial match). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedIntegrationListResponseList**

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

# **listRepositories**
> PaginatedRepositoryListResponseList listRepositories()

Retrieve repositories for a specific integration.

### Example


```typescript
import { createConfiguration, VCSIntegrationsApi } from '';
import type { VCSIntegrationsApiListRepositoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSIntegrationsApi(configuration);

const request: VCSIntegrationsApiListRepositoriesRequest = {
    // Unique identifier of the integration
  integrationId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listRepositories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | [**number**] | Unique identifier of the integration | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRepositoryListResponseList**

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

# **retrieveIntegration**
> IntegrationResponse retrieveIntegration()

Retrieve details from a specific account integration.

### Example


```typescript
import { createConfiguration, VCSIntegrationsApi } from '';
import type { VCSIntegrationsApiRetrieveIntegrationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VCSIntegrationsApi(configuration);

const request: VCSIntegrationsApiRetrieveIntegrationRequest = {
    // Unique identifier of the integration
  integrationId: "integration_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveIntegration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | [**string**] | Unique identifier of the integration | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**IntegrationResponse**

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


