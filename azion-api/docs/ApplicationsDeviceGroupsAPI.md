# .ApplicationsDeviceGroupsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceGroup**](ApplicationsDeviceGroupsApi.md#createDeviceGroup) | **POST** /workspace/applications/{application_id}/device_groups | Create an Applications Device Group
[**createDeviceGroup2**](ApplicationsDeviceGroupsApi.md#createDeviceGroup2) | **POST** /workspace/applications/{application_id}/versions/{version_id}/device_groups | Create an Applications Device Group
[**deleteDeviceGroup**](ApplicationsDeviceGroupsApi.md#deleteDeviceGroup) | **DELETE** /workspace/applications/{application_id}/device_groups/{device_group_id} | Delete an Applications Device Group
[**deleteDeviceGroup2**](ApplicationsDeviceGroupsApi.md#deleteDeviceGroup2) | **DELETE** /workspace/applications/{application_id}/versions/{version_id}/device_groups/{device_group_id} | Delete an Applications Device Group
[**listDeviceGroups**](ApplicationsDeviceGroupsApi.md#listDeviceGroups) | **GET** /workspace/applications/{application_id}/device_groups | List Applications Device Groups
[**listDeviceGroups2**](ApplicationsDeviceGroupsApi.md#listDeviceGroups2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/device_groups | List Applications Device Groups
[**partialUpdateDeviceGroup**](ApplicationsDeviceGroupsApi.md#partialUpdateDeviceGroup) | **PATCH** /workspace/applications/{application_id}/device_groups/{device_group_id} | Partially update an Applications Device Group
[**partialUpdateDeviceGroup2**](ApplicationsDeviceGroupsApi.md#partialUpdateDeviceGroup2) | **PATCH** /workspace/applications/{application_id}/versions/{version_id}/device_groups/{device_group_id} | Partially update an Applications Device Group
[**retrieveDeviceGroup**](ApplicationsDeviceGroupsApi.md#retrieveDeviceGroup) | **GET** /workspace/applications/{application_id}/device_groups/{device_group_id} | Retrieve details of a Device Group
[**retrieveDeviceGroup2**](ApplicationsDeviceGroupsApi.md#retrieveDeviceGroup2) | **GET** /workspace/applications/{application_id}/versions/{version_id}/device_groups/{device_group_id} | Retrieve details of a Device Group
[**updateDeviceGroup**](ApplicationsDeviceGroupsApi.md#updateDeviceGroup) | **PUT** /workspace/applications/{application_id}/device_groups/{device_group_id} | Update an Applications Device Group
[**updateDeviceGroup2**](ApplicationsDeviceGroupsApi.md#updateDeviceGroup2) | **PUT** /workspace/applications/{application_id}/versions/{version_id}/device_groups/{device_group_id} | Update an Applications Device Group


# **createDeviceGroup**
> DeviceGroupResponse createDeviceGroup(deviceGroupRequest)

Create a new Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiCreateDeviceGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiCreateDeviceGroupRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
  
  deviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createDeviceGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupRequest** | **DeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Device group created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDeviceGroup2**
> DeviceGroupResponse createDeviceGroup2(deviceGroupRequest)

Create a new Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiCreateDeviceGroup2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiCreateDeviceGroup2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  deviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createDeviceGroup2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupRequest** | **DeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Device group created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDeviceGroup**
> DeleteResponse deleteDeviceGroup()

Delete a specific Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiDeleteDeviceGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiDeleteDeviceGroupRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
};

const data = await apiInstance.deleteDeviceGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined


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
**200** | Device group deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDeviceGroup2**
> DeleteResponse deleteDeviceGroup2()

Delete a specific Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiDeleteDeviceGroup2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiDeleteDeviceGroup2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteDeviceGroup2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined
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
**200** | Device group deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDeviceGroups**
> PaginatedDeviceGroupList listDeviceGroups()

List all Device Groups owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiListDeviceGroupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiListDeviceGroupsRequest = {
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
    // Filter by user agent (case-insensitive, partial match). (optional)
  userAgent: "user_agent_example",
};

const data = await apiInstance.listDeviceGroups(request);
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
 **userAgent** | [**string**] | Filter by user agent (case-insensitive, partial match). | (optional) defaults to undefined


### Return type

**PaginatedDeviceGroupList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of device groups retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDeviceGroups2**
> PaginatedDeviceGroupList listDeviceGroups2()

List all Device Groups owned by your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiListDeviceGroups2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiListDeviceGroups2Request = {
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
    // Filter by user agent (case-insensitive, partial match). (optional)
  userAgent: "user_agent_example",
};

const data = await apiInstance.listDeviceGroups2(request);
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
 **userAgent** | [**string**] | Filter by user agent (case-insensitive, partial match). | (optional) defaults to undefined


### Return type

**PaginatedDeviceGroupList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of device groups retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateDeviceGroup**
> DeviceGroupResponse partialUpdateDeviceGroup()

Update one or more fields of an existing Device Group without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiPartialUpdateDeviceGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroupRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
  
  patchedDeviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateDeviceGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedDeviceGroupRequest** | **PatchedDeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateDeviceGroup2**
> DeviceGroupResponse partialUpdateDeviceGroup2()

Update one or more fields of an existing Device Group without affecting other fields.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiPartialUpdateDeviceGroup2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiPartialUpdateDeviceGroup2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedDeviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateDeviceGroup2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedDeviceGroupRequest** | **PatchedDeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDeviceGroup**
> DeviceGroupResponse retrieveDeviceGroup()

Retrieve details of a specific Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiRetrieveDeviceGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiRetrieveDeviceGroupRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDeviceGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDeviceGroup2**
> DeviceGroupResponse retrieveDeviceGroup2()

Retrieve details of a specific Device Group in your account.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiRetrieveDeviceGroup2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiRetrieveDeviceGroup2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDeviceGroup2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDeviceGroup**
> DeviceGroupResponse updateDeviceGroup(deviceGroupRequest)

Update an existing Device Group. This replaces the entire Device Group with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiUpdateDeviceGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiUpdateDeviceGroupRequest = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
  
  deviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateDeviceGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupRequest** | **DeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDeviceGroup2**
> DeviceGroupResponse updateDeviceGroup2(deviceGroupRequest)

Update an existing Device Group. This replaces the entire Device Group with the new data provided.

### Example


```typescript
import { createConfiguration, ApplicationsDeviceGroupsApi } from '';
import type { ApplicationsDeviceGroupsApiUpdateDeviceGroup2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ApplicationsDeviceGroupsApi(configuration);

const request: ApplicationsDeviceGroupsApiUpdateDeviceGroup2Request = {
    // A unique integer value identifying the application.
  applicationId: 1,
    // A unique integer value identifying the device group.
  deviceGroupId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  deviceGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    userAgent: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateDeviceGroup2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceGroupRequest** | **DeviceGroupRequest**|  |
 **applicationId** | [**number**] | A unique integer value identifying the application. | defaults to undefined
 **deviceGroupId** | [**number**] | A unique integer value identifying the device group. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**DeviceGroupResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device group updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


