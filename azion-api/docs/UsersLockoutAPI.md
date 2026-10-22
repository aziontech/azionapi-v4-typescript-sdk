# .UsersLockoutApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**destroyLockoutUser**](UsersLockoutApi.md#destroyLockoutUser) | **DELETE** /identity/users/{user_id}/lockout | Unlock user


# **destroyLockoutUser**
> void destroyLockoutUser()

Destroy Lockout info from user.

### Example


```typescript
import { createConfiguration, UsersLockoutApi } from '';
import type { UsersLockoutApiDestroyLockoutUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersLockoutApi(configuration);

const request: UsersLockoutApiDestroyLockoutUserRequest = {
    // A unique integer value identifying the user.
  userId: 1,
};

const data = await apiInstance.destroyLockoutUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | A unique integer value identifying the user. | defaults to undefined


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
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


