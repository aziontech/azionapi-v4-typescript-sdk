# .FunctionVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveFunctionVersion**](FunctionVersionsApi.md#archiveFunctionVersion) | **POST** /workspace/functions/{function_id}/versions/{version_id}/archive | Archive a Function version
[**buildFunctionVersion**](FunctionVersionsApi.md#buildFunctionVersion) | **POST** /workspace/functions/{function_id}/versions/{version_id}/build | Build a Function version
[**cancelFunctionVersionBuild**](FunctionVersionsApi.md#cancelFunctionVersionBuild) | **POST** /workspace/functions/{function_id}/versions/{version_id}/cancel | Cancel a Function version build
[**createFunctionVersion**](FunctionVersionsApi.md#createFunctionVersion) | **POST** /workspace/functions/{function_id}/versions | Create a new Function version
[**deleteFunctionVersion**](FunctionVersionsApi.md#deleteFunctionVersion) | **DELETE** /workspace/functions/{function_id}/versions/{version_id} | Delete a Function version
[**listFunctionVersions**](FunctionVersionsApi.md#listFunctionVersions) | **GET** /workspace/functions/{function_id}/versions | List Function versions
[**partialUpdateFunctionVersion**](FunctionVersionsApi.md#partialUpdateFunctionVersion) | **PATCH** /workspace/functions/{function_id}/versions/{version_id} | Partially update a Function version
[**retrieveFunctionVersion**](FunctionVersionsApi.md#retrieveFunctionVersion) | **GET** /workspace/functions/{function_id}/versions/{version_id} | Retrieve a Function version
[**updateFunctionVersion**](FunctionVersionsApi.md#updateFunctionVersion) | **PUT** /workspace/functions/{function_id}/versions/{version_id} | Update a Function version


# **archiveFunctionVersion**
> void archiveFunctionVersion()

Archive a ready version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiArchiveFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiArchiveFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **buildFunctionVersion**
> void buildFunctionVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiBuildFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiBuildFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **cancelFunctionVersionBuild**
> void cancelFunctionVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiCancelFunctionVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiCancelFunctionVersionBuildRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionCancelRequest: {
    comment: "",
  },
};

const data = await apiInstance.cancelFunctionVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCancelRequest** | **VersionCancelRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **createFunctionVersion**
> void createFunctionVersion()

Create a new version by cloning.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiCreateFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiCreateFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined


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

# **deleteFunctionVersion**
> void deleteFunctionVersion()

Delete a specific version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiDeleteFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiDeleteFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **listFunctionVersions**
> void listFunctionVersions()

List all versions of a specific Function.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiListFunctionVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiListFunctionVersionsRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listFunctionVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **partialUpdateFunctionVersion**
> void partialUpdateFunctionVersion()

Partially update a draft version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiPartialUpdateFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiPartialUpdateFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
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

const data = await apiInstance.partialUpdateFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **retrieveFunctionVersion**
> void retrieveFunctionVersion()

Retrieve details of a specific version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiRetrieveFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiRetrieveFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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

# **updateFunctionVersion**
> void updateFunctionVersion()

Update a draft version.

### Example


```typescript
import { createConfiguration, FunctionVersionsApi } from '';
import type { FunctionVersionsApiUpdateFunctionVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FunctionVersionsApi(configuration);

const request: FunctionVersionsApiUpdateFunctionVersionRequest = {
    // The ID of the Function resource.
  functionId: 1,
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

const data = await apiInstance.updateFunctionVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **functionId** | [**number**] | The ID of the Function resource. | defaults to undefined
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


