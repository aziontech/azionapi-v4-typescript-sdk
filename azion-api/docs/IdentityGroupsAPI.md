# .IdentityGroupsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](IdentityGroupsApi.md#createGroup) | **POST** /identity/groups | Create a new group
[**deleteGroup**](IdentityGroupsApi.md#deleteGroup) | **DELETE** /identity/groups/{group_id} | Delete a group
[**listGroup**](IdentityGroupsApi.md#listGroup) | **GET** /identity/groups | List of the account groups
[**partialUpdateGroup**](IdentityGroupsApi.md#partialUpdateGroup) | **PATCH** /identity/groups/{group_id} | Partially update a group
[**retrieveGroup**](IdentityGroupsApi.md#retrieveGroup) | **GET** /identity/groups/{group_id} | Retrieve details from a group
[**updateGroup**](IdentityGroupsApi.md#updateGroup) | **PUT** /identity/groups/{group_id} | Update a group


# **createGroup**
> ResponseGroup createGroup(groupRequest)

Create a group for your account.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiCreateGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiCreateGroupRequest = {
  
  groupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
  },
};

const data = await apiInstance.createGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRequest** | **GroupRequest**|  |


### Return type

**ResponseGroup**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteGroup**
> ResponseDeleteGroup deleteGroup()

Delete a specific group in your account.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiDeleteGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiDeleteGroupRequest = {
  
  groupId: "group_id_example",
};

const data = await apiInstance.deleteGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**ResponseDeleteGroup**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** | Accepted |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listGroup**
> PaginatedGroupList listGroup()

List all groups owned by your account.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiListGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiListGroupRequest = {
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

const data = await apiInstance.listGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedGroupList**

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

# **partialUpdateGroup**
> ResponseGroup partialUpdateGroup()

Update one or more fields of an existing group without affecting other fields.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiPartialUpdateGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiPartialUpdateGroupRequest = {
  
  groupId: "group_id_example",
  
  patchedGroupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
  },
};

const data = await apiInstance.partialUpdateGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedGroupRequest** | **PatchedGroupRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**ResponseGroup**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveGroup**
> ResponseRetrieveGroup retrieveGroup()

Retrieve details from a specific group in your account.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiRetrieveGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiRetrieveGroupRequest = {
  
  groupId: "group_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveGroup**

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

# **updateGroup**
> ResponseGroup updateGroup(groupRequest)

Update an existing group. This replaces the entire group with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityGroupsApi } from '';
import type { IdentityGroupsApiUpdateGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupsApi(configuration);

const request: IdentityGroupsApiUpdateGroupRequest = {
  
  groupId: "group_id_example",
  
  groupRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
  },
};

const data = await apiInstance.updateGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupRequest** | **GroupRequest**|  |
 **groupId** | [**string**] |  | defaults to undefined


### Return type

**ResponseGroup**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
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
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


