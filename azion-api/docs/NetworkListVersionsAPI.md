# .NetworkListVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveNetworkListVersion**](NetworkListVersionsApi.md#archiveNetworkListVersion) | **POST** /workspace/network_lists/{network_list_id}/versions/{version_id}/archive | Archive a Network List version
[**buildNetworkListVersion**](NetworkListVersionsApi.md#buildNetworkListVersion) | **POST** /workspace/network_lists/{network_list_id}/versions/{version_id}/build | Build a Network List version
[**cancelNetworkListVersionBuild**](NetworkListVersionsApi.md#cancelNetworkListVersionBuild) | **POST** /workspace/network_lists/{network_list_id}/versions/{version_id}/cancel | Cancel a Network List version build
[**createNetworkListVersion**](NetworkListVersionsApi.md#createNetworkListVersion) | **POST** /workspace/network_lists/{network_list_id}/versions | Create a new Network List version
[**deleteNetworkListVersion**](NetworkListVersionsApi.md#deleteNetworkListVersion) | **DELETE** /workspace/network_lists/{network_list_id}/versions/{version_id} | Delete a Network List version
[**listNetworkListVersions**](NetworkListVersionsApi.md#listNetworkListVersions) | **GET** /workspace/network_lists/{network_list_id}/versions | List Network List versions
[**partialUpdateNetworkListVersion**](NetworkListVersionsApi.md#partialUpdateNetworkListVersion) | **PATCH** /workspace/network_lists/{network_list_id}/versions/{version_id} | Partially update a Network List version
[**retrieveNetworkListVersion**](NetworkListVersionsApi.md#retrieveNetworkListVersion) | **GET** /workspace/network_lists/{network_list_id}/versions/{version_id} | Retrieve a Network List version
[**updateNetworkListVersion**](NetworkListVersionsApi.md#updateNetworkListVersion) | **PUT** /workspace/network_lists/{network_list_id}/versions/{version_id} | Update a Network List version


# **archiveNetworkListVersion**
> void archiveNetworkListVersion()

Archive a ready version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiArchiveNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiArchiveNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **buildNetworkListVersion**
> void buildNetworkListVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiBuildNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiBuildNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **cancelNetworkListVersionBuild**
> void cancelNetworkListVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiCancelNetworkListVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiCancelNetworkListVersionBuildRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelNetworkListVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **createNetworkListVersion**
> void createNetworkListVersion()

Create a new version by cloning.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiCreateNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiCreateNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined


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

# **deleteNetworkListVersion**
> void deleteNetworkListVersion()

Delete a specific version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiDeleteNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiDeleteNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **listNetworkListVersions**
> void listNetworkListVersions()

List all versions of a specific Network List.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiListNetworkListVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiListNetworkListVersionsRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listNetworkListVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **partialUpdateNetworkListVersion**
> void partialUpdateNetworkListVersion()

Partially update a draft version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiPartialUpdateNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiPartialUpdateNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
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

const data = await apiInstance.partialUpdateNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **retrieveNetworkListVersion**
> void retrieveNetworkListVersion()

Retrieve details of a specific version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiRetrieveNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiRetrieveNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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

# **updateNetworkListVersion**
> void updateNetworkListVersion()

Update a draft version.

### Example


```typescript
import { createConfiguration, NetworkListVersionsApi } from '';
import type { NetworkListVersionsApiUpdateNetworkListVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListVersionsApi(configuration);

const request: NetworkListVersionsApiUpdateNetworkListVersionRequest = {
    // The ID of the Network List resource.
  networkListId: 1,
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

const data = await apiInstance.updateNetworkListVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **networkListId** | [**number**] | The ID of the Network List resource. | defaults to undefined
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


