# .WAFVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveWafVersion**](WAFVersionsApi.md#archiveWafVersion) | **POST** /workspace/wafs/{waf_id}/versions/{version_id}/archive | Archive a WAF version
[**buildWafVersion**](WAFVersionsApi.md#buildWafVersion) | **POST** /workspace/wafs/{waf_id}/versions/{version_id}/build | Build a WAF version
[**cancelWafVersionBuild**](WAFVersionsApi.md#cancelWafVersionBuild) | **POST** /workspace/wafs/{waf_id}/versions/{version_id}/cancel | Cancel a WAF version build
[**createWafVersion**](WAFVersionsApi.md#createWafVersion) | **POST** /workspace/wafs/{waf_id}/versions | Create a new WAF version
[**deleteWafVersion**](WAFVersionsApi.md#deleteWafVersion) | **DELETE** /workspace/wafs/{waf_id}/versions/{version_id} | Delete a WAF version
[**listWafVersions**](WAFVersionsApi.md#listWafVersions) | **GET** /workspace/wafs/{waf_id}/versions | List WAF versions
[**partialUpdateWafVersion**](WAFVersionsApi.md#partialUpdateWafVersion) | **PATCH** /workspace/wafs/{waf_id}/versions/{version_id} | Partially update a WAF version
[**retrieveWafVersion**](WAFVersionsApi.md#retrieveWafVersion) | **GET** /workspace/wafs/{waf_id}/versions/{version_id} | Retrieve a WAF version
[**updateWafVersion**](WAFVersionsApi.md#updateWafVersion) | **PUT** /workspace/wafs/{waf_id}/versions/{version_id} | Update a WAF version


# **archiveWafVersion**
> void archiveWafVersion()

Archive a ready version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiArchiveWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiArchiveWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **buildWafVersion**
> void buildWafVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiBuildWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiBuildWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **cancelWafVersionBuild**
> void cancelWafVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiCancelWafVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiCancelWafVersionBuildRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelWafVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **createWafVersion**
> void createWafVersion()

Create a new version by cloning.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiCreateWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiCreateWafVersionRequest = {
    // The ID of the WAF resource.
  wafId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **deleteWafVersion**
> void deleteWafVersion()

Delete a specific version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiDeleteWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiDeleteWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
};

const data = await apiInstance.deleteWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **listWafVersions**
> void listWafVersions()

List all versions of a specific WAF.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiListWafVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiListWafVersionsRequest = {
    // The ID of the WAF resource.
  wafId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listWafVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined
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

# **partialUpdateWafVersion**
> void partialUpdateWafVersion()

Partially update a draft version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiPartialUpdateWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiPartialUpdateWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
  
  patchedVersionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.partialUpdateWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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

# **retrieveWafVersion**
> void retrieveWafVersion()

Retrieve details of a specific version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiRetrieveWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiRetrieveWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined
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

# **updateWafVersion**
> void updateWafVersion()

Update a draft version.

### Example


```typescript
import { createConfiguration, WAFVersionsApi } from '';
import type { WAFVersionsApiUpdateWafVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFVersionsApi(configuration);

const request: WAFVersionsApiUpdateWafVersionRequest = {
    // The identifier of the version.
  versionId: "version_id_example",
    // The ID of the WAF resource.
  wafId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.updateWafVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **versionId** | [**string**] | The identifier of the version. | defaults to undefined
 **wafId** | [**number**] | The ID of the WAF resource. | defaults to undefined


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


