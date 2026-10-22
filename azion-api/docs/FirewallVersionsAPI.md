# .FirewallVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveFirewallVersion**](FirewallVersionsApi.md#archiveFirewallVersion) | **POST** /workspace/firewalls/{firewall_id}/versions/{version_id}/archive | Archive a Firewall version
[**buildFirewallVersion**](FirewallVersionsApi.md#buildFirewallVersion) | **POST** /workspace/firewalls/{firewall_id}/versions/{version_id}/build | Build a Firewall version
[**cancelFirewallVersionBuild**](FirewallVersionsApi.md#cancelFirewallVersionBuild) | **POST** /workspace/firewalls/{firewall_id}/versions/{version_id}/cancel | Cancel a Firewall version build
[**createFirewallVersion**](FirewallVersionsApi.md#createFirewallVersion) | **POST** /workspace/firewalls/{firewall_id}/versions | Create a new Firewall version
[**deleteFirewallVersion**](FirewallVersionsApi.md#deleteFirewallVersion) | **DELETE** /workspace/firewalls/{firewall_id}/versions/{version_id} | Delete a Firewall version
[**listFirewallVersions**](FirewallVersionsApi.md#listFirewallVersions) | **GET** /workspace/firewalls/{firewall_id}/versions | List Firewall versions
[**partialUpdateFirewallVersion**](FirewallVersionsApi.md#partialUpdateFirewallVersion) | **PATCH** /workspace/firewalls/{firewall_id}/versions/{version_id} | Partially update a Firewall version
[**retrieveFirewallVersion**](FirewallVersionsApi.md#retrieveFirewallVersion) | **GET** /workspace/firewalls/{firewall_id}/versions/{version_id} | Retrieve a Firewall version
[**updateFirewallVersion**](FirewallVersionsApi.md#updateFirewallVersion) | **PUT** /workspace/firewalls/{firewall_id}/versions/{version_id} | Update a Firewall version


# **archiveFirewallVersion**
> void archiveFirewallVersion()

Archive a ready version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiArchiveFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiArchiveFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **buildFirewallVersion**
> void buildFirewallVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiBuildFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiBuildFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **cancelFirewallVersionBuild**
> void cancelFirewallVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiCancelFirewallVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiCancelFirewallVersionBuildRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelFirewallVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **createFirewallVersion**
> void createFirewallVersion()

Create a new version by cloning.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiCreateFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiCreateFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined


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

# **deleteFirewallVersion**
> void deleteFirewallVersion()

Delete a specific version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiDeleteFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiDeleteFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **listFirewallVersions**
> void listFirewallVersions()

List all versions of a specific Firewall.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiListFirewallVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiListFirewallVersionsRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listFirewallVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **partialUpdateFirewallVersion**
> void partialUpdateFirewallVersion()

Partially update a draft version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiPartialUpdateFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiPartialUpdateFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
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

const data = await apiInstance.partialUpdateFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **retrieveFirewallVersion**
> void retrieveFirewallVersion()

Retrieve details of a specific version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiRetrieveFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiRetrieveFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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

# **updateFirewallVersion**
> void updateFirewallVersion()

Update a draft version.

### Example


```typescript
import { createConfiguration, FirewallVersionsApi } from '';
import type { FirewallVersionsApiUpdateFirewallVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallVersionsApi(configuration);

const request: FirewallVersionsApiUpdateFirewallVersionRequest = {
    // The ID of the Firewall resource.
  firewallId: 1,
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

const data = await apiInstance.updateFirewallVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **firewallId** | [**number**] | The ID of the Firewall resource. | defaults to undefined
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


