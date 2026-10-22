# .IdentityGroupMembersApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveMembersGroup**](IdentityGroupMembersApi.md#retrieveMembersGroup) | **GET** /identity/groups/{id}/members | Retrieve members from a group
[**updateMembersGroup**](IdentityGroupMembersApi.md#updateMembersGroup) | **PUT** /identity/groups/{id}/members | Update members from a group


# **retrieveMembersGroup**
> ResponseRetrieveGroupMembers retrieveMembersGroup()

Retrieve members from a specific group in your account.

### Example


```typescript
import { createConfiguration, IdentityGroupMembersApi } from '';
import type { IdentityGroupMembersApiRetrieveMembersGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupMembersApi(configuration);

const request: IdentityGroupMembersApiRetrieveMembersGroupRequest = {
  
  id: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveMembersGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveGroupMembers**

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

# **updateMembersGroup**
> ResponseGroupMembers updateMembersGroup(groupMembersRequest)

Update all members from a group. This replaces the entire group members with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityGroupMembersApi } from '';
import type { IdentityGroupMembersApiUpdateMembersGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGroupMembersApi(configuration);

const request: IdentityGroupMembersApiUpdateMembersGroupRequest = {
  
  id: 1,
  
  groupMembersRequest: {
    members: [
      1,
    ],
  },
};

const data = await apiInstance.updateMembersGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupMembersRequest** | **GroupMembersRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ResponseGroupMembers**

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


