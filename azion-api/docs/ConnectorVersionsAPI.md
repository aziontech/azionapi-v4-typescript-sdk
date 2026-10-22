# .ConnectorVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveConnectorVersion**](ConnectorVersionsApi.md#archiveConnectorVersion) | **POST** /workspace/connectors/{connector_id}/versions/{version_id}/archive | Archive a Connector version
[**buildConnectorVersion**](ConnectorVersionsApi.md#buildConnectorVersion) | **POST** /workspace/connectors/{connector_id}/versions/{version_id}/build | Build a Connector version
[**cancelConnectorVersionBuild**](ConnectorVersionsApi.md#cancelConnectorVersionBuild) | **POST** /workspace/connectors/{connector_id}/versions/{version_id}/cancel | Cancel a Connector version build
[**createConnectorVersion**](ConnectorVersionsApi.md#createConnectorVersion) | **POST** /workspace/connectors/{connector_id}/versions | Create a new Connector version
[**deleteConnectorVersion**](ConnectorVersionsApi.md#deleteConnectorVersion) | **DELETE** /workspace/connectors/{connector_id}/versions/{version_id} | Delete a Connector version
[**listConnectorVersions**](ConnectorVersionsApi.md#listConnectorVersions) | **GET** /workspace/connectors/{connector_id}/versions | List Connector versions
[**partialUpdateConnectorVersion**](ConnectorVersionsApi.md#partialUpdateConnectorVersion) | **PATCH** /workspace/connectors/{connector_id}/versions/{version_id} | Partially update a Connector version
[**retrieveConnectorVersion**](ConnectorVersionsApi.md#retrieveConnectorVersion) | **GET** /workspace/connectors/{connector_id}/versions/{version_id} | Retrieve a Connector version
[**updateConnectorVersion**](ConnectorVersionsApi.md#updateConnectorVersion) | **PUT** /workspace/connectors/{connector_id}/versions/{version_id} | Update a Connector version


# **archiveConnectorVersion**
> void archiveConnectorVersion()

Archive a ready version (soft-delete).

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiArchiveConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiArchiveConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildConnectorVersion**
> void buildConnectorVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiBuildConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiBuildConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelConnectorVersionBuild**
> void cancelConnectorVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiCancelConnectorVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiCancelConnectorVersionBuildRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelConnectorVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createConnectorVersion**
> void createConnectorVersion()

Create a new version by cloning an existing one.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiCreateConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiCreateConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteConnectorVersion**
> void deleteConnectorVersion()

Delete a specific version of a Connector.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiDeleteConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiDeleteConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnectorVersions**
> void listConnectorVersions()

List all versions of a specific Connector.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiListConnectorVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiListConnectorVersionsRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listConnectorVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateConnectorVersion**
> void partialUpdateConnectorVersion()

Partially update a draft version of a Connector.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiPartialUpdateConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiPartialUpdateConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  patchedVersionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.partialUpdateConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveConnectorVersion**
> void retrieveConnectorVersion()

Retrieve details of a specific version of a Connector.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiRetrieveConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiRetrieveConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateConnectorVersion**
> void updateConnectorVersion()

Update a draft version of a Connector.

### Example


```typescript
import { createConfiguration, ConnectorVersionsApi } from '';
import type { ConnectorVersionsApiUpdateConnectorVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorVersionsApi(configuration);

const request: ConnectorVersionsApiUpdateConnectorVersionRequest = {
    // The ID of the Connector resource.
  connectorId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.updateConnectorVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **connectorId** | [**number**] | The ID of the Connector resource. | defaults to undefined
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined


### Return type

**void**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


