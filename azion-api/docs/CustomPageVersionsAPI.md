# .CustomPageVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveCustomPageVersion**](CustomPageVersionsApi.md#archiveCustomPageVersion) | **POST** /workspace/custom_pages/{custom_page_id}/versions/{version_id}/archive | Archive a Custom Page version
[**buildCustomPageVersion**](CustomPageVersionsApi.md#buildCustomPageVersion) | **POST** /workspace/custom_pages/{custom_page_id}/versions/{version_id}/build | Build a Custom Page version
[**cancelCustomPageVersionBuild**](CustomPageVersionsApi.md#cancelCustomPageVersionBuild) | **POST** /workspace/custom_pages/{custom_page_id}/versions/{version_id}/cancel | Cancel a Custom Page version build
[**createCustomPageVersion**](CustomPageVersionsApi.md#createCustomPageVersion) | **POST** /workspace/custom_pages/{custom_page_id}/versions | Create a new Custom Page version
[**deleteCustomPageVersion**](CustomPageVersionsApi.md#deleteCustomPageVersion) | **DELETE** /workspace/custom_pages/{custom_page_id}/versions/{version_id} | Delete a Custom Page version
[**listCustomPageVersions**](CustomPageVersionsApi.md#listCustomPageVersions) | **GET** /workspace/custom_pages/{custom_page_id}/versions | List Custom Page versions
[**partialUpdateCustomPageVersion**](CustomPageVersionsApi.md#partialUpdateCustomPageVersion) | **PATCH** /workspace/custom_pages/{custom_page_id}/versions/{version_id} | Partially update a Custom Page version
[**retrieveCustomPageVersion**](CustomPageVersionsApi.md#retrieveCustomPageVersion) | **GET** /workspace/custom_pages/{custom_page_id}/versions/{version_id} | Retrieve a Custom Page version
[**updateCustomPageVersion**](CustomPageVersionsApi.md#updateCustomPageVersion) | **PUT** /workspace/custom_pages/{custom_page_id}/versions/{version_id} | Update a Custom Page version


# **archiveCustomPageVersion**
> void archiveCustomPageVersion()

Archive a ready version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiArchiveCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiArchiveCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **buildCustomPageVersion**
> void buildCustomPageVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiBuildCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiBuildCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **cancelCustomPageVersionBuild**
> void cancelCustomPageVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiCancelCustomPageVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiCancelCustomPageVersionBuildRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelCustomPageVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **createCustomPageVersion**
> void createCustomPageVersion()

Create a new version by cloning.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiCreateCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiCreateCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined


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

# **deleteCustomPageVersion**
> void deleteCustomPageVersion()

Delete a specific version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiDeleteCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiDeleteCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **listCustomPageVersions**
> void listCustomPageVersions()

List all versions of a specific Custom Page.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiListCustomPageVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiListCustomPageVersionsRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listCustomPageVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **partialUpdateCustomPageVersion**
> void partialUpdateCustomPageVersion()

Partially update a draft version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiPartialUpdateCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiPartialUpdateCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
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

const data = await apiInstance.partialUpdateCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **retrieveCustomPageVersion**
> void retrieveCustomPageVersion()

Retrieve details of a specific version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiRetrieveCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiRetrieveCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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

# **updateCustomPageVersion**
> void updateCustomPageVersion()

Update a draft version.

### Example


```typescript
import { createConfiguration, CustomPageVersionsApi } from '';
import type { CustomPageVersionsApiUpdateCustomPageVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPageVersionsApi(configuration);

const request: CustomPageVersionsApiUpdateCustomPageVersionRequest = {
    // The ID of the Custom Page resource.
  customPageId: 1,
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

const data = await apiInstance.updateCustomPageVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **customPageId** | [**number**] | The ID of the Custom Page resource. | defaults to undefined
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


