# .ApplicationsCacheSettingsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCacheSetting**](ApplicationsCacheSettingsApi.md#createCacheSetting) | **POST** /workspace/applications/{application_id}/cache_settings | Create an Applications Cache Setting
[**createCacheSetting2**](ApplicationsCacheSettingsApi.md#createCacheSetting2) | **POST** /workspace/applications/{application_id}/versions/{version_id}/cache_settings | Create an Applications Cache Setting
[**deleteCacheSetting**](ApplicationsCacheSettingsApi.md#deleteCacheSetting) | **DELETE** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Delete an Applications Cache Setting
[**deleteCacheSetting2**](ApplicationsCacheSettingsApi.md#deleteCacheSetting2) | **DELETE** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Delete an Applications Cache Setting
[**listCacheSettings**](ApplicationsCacheSettingsApi.md#listCacheSettings) | **GET** /workspace/applications/{application_id}/cache_settings | List all Applications Cache Settings
[**listCacheSettings2**](ApplicationsCacheSettingsApi.md#listCacheSettings2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/cache_settings | List all Applications Cache Settings
[**partialUpdateCacheSetting**](ApplicationsCacheSettingsApi.md#partialUpdateCacheSetting) | **PATCH** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Partially update an Applications Cache Setting
[**partialUpdateCacheSetting2**](ApplicationsCacheSettingsApi.md#partialUpdateCacheSetting2) | **PATCH** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Partially update an Applications Cache Setting
[**retrieveCacheSetting**](ApplicationsCacheSettingsApi.md#retrieveCacheSetting) | **GET** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Retrieve details of an Applications Cache Setting
[**retrieveCacheSetting2**](ApplicationsCacheSettingsApi.md#retrieveCacheSetting2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Retrieve details of an Applications Cache Setting
[**updateCacheSetting**](ApplicationsCacheSettingsApi.md#updateCacheSetting) | **PUT** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Update an Applications Cache Setting
[**updateCacheSetting2**](ApplicationsCacheSettingsApi.md#updateCacheSetting2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Update an Applications Cache Setting


# **createCacheSetting**
> CacheSettingResponse createCacheSetting(cacheSettingRequest)

Create a new Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiCreateCacheSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiCreateCacheSettingRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  cacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.createCacheSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheSettingRequest** | **CacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Cache setting created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCacheSetting2**
> CacheSettingResponse createCacheSetting2(cacheSettingRequest)

Create a new Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiCreateCacheSetting2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiCreateCacheSetting2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  cacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.createCacheSetting2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheSettingRequest** | **CacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Cache setting created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCacheSetting**
> DeleteResponse deleteCacheSetting()

Delete a specific Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiDeleteCacheSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiDeleteCacheSettingRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
};

const data = await apiInstance.deleteCacheSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined


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
**200** | Cache setting deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCacheSetting2**
> DeleteResponse deleteCacheSetting2()

Delete a specific Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiDeleteCacheSetting2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiDeleteCacheSetting2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteCacheSetting2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


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
**200** | Cache setting deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCacheSettings**
> PaginatedCacheSettingList listCacheSettings()

List all Cache Settings owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiListCacheSettingsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiListCacheSettingsRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listCacheSettings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCacheSettingList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of cache settings retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCacheSettings2**
> PaginatedCacheSettingList listCacheSettings2()

List all Cache Settings owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiListCacheSettings2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiListCacheSettings2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listCacheSettings2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCacheSettingList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of cache settings retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCacheSetting**
> CacheSettingResponse partialUpdateCacheSetting()

Update one or more fields of an existing Cache Setting without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiPartialUpdateCacheSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiPartialUpdateCacheSettingRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
  
  patchedCacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.partialUpdateCacheSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedCacheSettingRequest** | **PatchedCacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCacheSetting2**
> CacheSettingResponse partialUpdateCacheSetting2()

Update one or more fields of an existing Cache Setting without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiPartialUpdateCacheSetting2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiPartialUpdateCacheSetting2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedCacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.partialUpdateCacheSetting2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedCacheSettingRequest** | **PatchedCacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCacheSetting**
> CacheSettingResponse retrieveCacheSetting()

Retrieve details of a specific Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiRetrieveCacheSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiRetrieveCacheSettingRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCacheSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCacheSetting2**
> CacheSettingResponse retrieveCacheSetting2()

Retrieve details of a specific Cache Setting in your account.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiRetrieveCacheSetting2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiRetrieveCacheSetting2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCacheSetting2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCacheSetting**
> CacheSettingResponse updateCacheSetting(cacheSettingRequest)

Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiUpdateCacheSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiUpdateCacheSettingRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
  
  cacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.updateCacheSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheSettingRequest** | **CacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCacheSetting2**
> CacheSettingResponse updateCacheSetting2(cacheSettingRequest)

Update an existing Cache Setting. This replaces the entire Cache Setting with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsCacheSettingsApi } from '';
import type { ApplicationsCacheSettingsApiUpdateCacheSetting2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsCacheSettingsApi(configuration);

const request: ApplicationsCacheSettingsApiUpdateCacheSetting2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the cache setting.
  cacheSettingId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  cacheSettingRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    browserCache: {
      behavior: null,
      maxAge: 0,
    },
    modules: {
      cache: {
        behavior: null,
        maxAge: 60,
        staleCache: {
          enabled: false,
        },
        largeFileCache: {
          enabled: false,
          offset: 1024,
        },
        tieredCache: ,
      },
      applicationAccelerator: {
        cacheVaryByMethod: [
          "options",
        ],
        cacheVaryByQuerystring: {
          behavior: null,
          fields: [],
          sortEnabled: false,
        },
        cacheVaryByCookies: {
          behavior: null,
          cookieNames: [],
        },
        cacheVaryByDevices: {
          behavior: null,
          deviceGroup: [
            1,
          ],
        },
      },
    },
  },
};

const data = await apiInstance.updateCacheSetting2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheSettingRequest** | **CacheSettingRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **cacheSettingId** | [**number**] | A unique integer value identifying the cache setting. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**CacheSettingResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cache setting updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


