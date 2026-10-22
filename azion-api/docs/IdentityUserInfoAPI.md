# .IdentityUserInfoApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveUserInfo**](IdentityUserInfoApi.md#retrieveUserInfo) | **GET** /identity/users/{id}/info | Retrieve user info
[**updateUserInfo**](IdentityUserInfoApi.md#updateUserInfo) | **PUT** /identity/users/{id}/info | Update an user info


# **retrieveUserInfo**
> ResponseRetrieveUserInfo retrieveUserInfo()

Retrieve info from a specific user in your account.

### Example


```typescript
import { createConfiguration, IdentityUserInfoApi } from '';
import type { IdentityUserInfoApiRetrieveUserInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUserInfoApi(configuration);

const request: IdentityUserInfoApiRetrieveUserInfoRequest = {
  
  id: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveUserInfo**

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

# **updateUserInfo**
> ResponseUserInfo updateUserInfo()

Update info from an existing user. This replaces the entire user info with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityUserInfoApi } from '';
import type { IdentityUserInfoApiUpdateUserInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUserInfoApi(configuration);

const request: IdentityUserInfoApiUpdateUserInfoRequest = {
  
  id: 1,
  
  updateUserInfoRequest: {
    info: {
      jobFunction: "Software Developer",
    },
  },
};

const data = await apiInstance.updateUserInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserInfoRequest** | **UpdateUserInfoRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ResponseUserInfo**

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


