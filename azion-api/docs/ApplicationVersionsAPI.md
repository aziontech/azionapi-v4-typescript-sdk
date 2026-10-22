# .ApplicationVersionsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveApplicationVersion**](ApplicationVersionsApi.md#archiveApplicationVersion) | **POST** /workspace/applications/{application_id}/versions/{version_id}/archive | Archive an Application version
[**buildApplicationVersion**](ApplicationVersionsApi.md#buildApplicationVersion) | **POST** /workspace/applications/{application_id}/versions/{version_id}/build | Build an Application version
[**cancelApplicationVersionBuild**](ApplicationVersionsApi.md#cancelApplicationVersionBuild) | **POST** /workspace/applications/{application_id}/versions/{version_id}/cancel | Cancel an Application version build
[**createApplicationVersion**](ApplicationVersionsApi.md#createApplicationVersion) | **POST** /workspace/applications/{application_id}/versions | Create a new Application version
[**deleteApplicationVersion**](ApplicationVersionsApi.md#deleteApplicationVersion) | **DELETE** /workspace/applications/{application_id}/versions/{version_id} | Delete an Application version
[**listApplicationVersions**](ApplicationVersionsApi.md#listApplicationVersions) | **GET** /workspace/applications/{application_id}/versions | List Application versions
[**partialUpdateApplicationVersion**](ApplicationVersionsApi.md#partialUpdateApplicationVersion) | **PATCH** /workspace/applications/{application_id}/versions/{version_id} | Partially update an Application version
[**retrieveApplicationVersion**](ApplicationVersionsApi.md#retrieveApplicationVersion) | **GET** /workspace/applications/{application_id}/versions/{version_id} | Retrieve an Application version
[**updateApplicationVersion**](ApplicationVersionsApi.md#updateApplicationVersion) | **PUT** /workspace/applications/{application_id}/versions/{version_id} | Update an Application version


# **archiveApplicationVersion**
> void archiveApplicationVersion()

Archive a ready version (soft-delete).

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiArchiveApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiArchiveApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionArchiveRequest: {
    comment: "",
  },
};

const data = await apiInstance.archiveApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionArchiveRequest** | **VersionArchiveRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **buildApplicationVersion**
> void buildApplicationVersion()

Trigger a build for a draft version.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiBuildApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiBuildApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.buildApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **cancelApplicationVersionBuild**
> void cancelApplicationVersionBuild()

Cancel a queued or building version.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiCancelApplicationVersionBuildRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiCancelApplicationVersionBuildRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
  
  versionBuildRequest: {
    traceId: "",
    comment: "",
  },
};

const data = await apiInstance.cancelApplicationVersionBuild(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionBuildRequest** | **VersionBuildRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **createApplicationVersion**
> void createApplicationVersion()

Create a new version by cloning an existing one.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiCreateApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiCreateApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
  
  versionCreateRequest: {
    sourceVersion: "sourceVersion_example",
    comment: "",
    override: {
      "key": null,
    },
  },
};

const data = await apiInstance.createApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined


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

# **deleteApplicationVersion**
> void deleteApplicationVersion()

Delete a specific version of an Application.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiDeleteApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiDeleteApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **listApplicationVersions**
> void listApplicationVersions()

List all versions of a specific Application.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiListApplicationVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiListApplicationVersionsRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listApplicationVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **partialUpdateApplicationVersion**
> void partialUpdateApplicationVersion()

Partially update a draft version of an Application.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiPartialUpdateApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiPartialUpdateApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
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

const data = await apiInstance.partialUpdateApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedVersionCreateRequest** | **PatchedVersionCreateRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **retrieveApplicationVersion**
> void retrieveApplicationVersion()

Retrieve details of a specific version of an Application.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiRetrieveApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiRetrieveApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
    // The identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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

# **updateApplicationVersion**
> void updateApplicationVersion()

Update a draft version of an Application.

### Example


```typescript
import { createConfiguration, ApplicationVersionsApi } from '';
import type { ApplicationVersionsApiUpdateApplicationVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationVersionsApi(configuration);

const request: ApplicationVersionsApiUpdateApplicationVersionRequest = {
    // The ID (global_id) of the Application resource.
  applicationId: 1,
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

const data = await apiInstance.updateApplicationVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **versionCreateRequest** | **VersionCreateRequest**|  |
 **applicationId** | [**number**] | The ID (global_id) of the Application resource. | defaults to undefined
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


