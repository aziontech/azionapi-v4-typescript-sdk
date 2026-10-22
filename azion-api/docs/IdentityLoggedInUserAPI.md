# .IdentityLoggedInUserApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLoggedUser**](IdentityLoggedInUserApi.md#listLoggedUser) | **GET** /identity/user | Retrieve details from the currently logged-in user
[**partialUpdateLoggedUser**](IdentityLoggedInUserApi.md#partialUpdateLoggedUser) | **PATCH** /identity/user | Partially update the currently logged-in user
[**updateLoggedUser**](IdentityLoggedInUserApi.md#updateLoggedUser) | **PUT** /identity/user | Update the currently logged-in user


# **listLoggedUser**
> ResponseRetrieveUser listLoggedUser()

Retrieve details from the logged user.

### Example


```typescript
import { createConfiguration, IdentityLoggedInUserApi } from '';
import type { IdentityLoggedInUserApiListLoggedUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityLoggedInUserApi(configuration);

const request: IdentityLoggedInUserApiListLoggedUserRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.listLoggedUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveUser**

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

# **partialUpdateLoggedUser**
> ResponseUser partialUpdateLoggedUser()

Update one or more fields of the logged user without affecting other fields.

### Example


```typescript
import { createConfiguration, IdentityLoggedInUserApi } from '';
import type { IdentityLoggedInUserApiPartialUpdateLoggedUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityLoggedInUserApi(configuration);

const request: IdentityLoggedInUserApiPartialUpdateLoggedUserRequest = {
  
  patchedUserRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    email: "email_example",
    active: true,
    twoFactorEnabled: false,
    preferences: {
      "key": null,
    },
    phone: `20/		+-	66	
33009`,
  },
};

const data = await apiInstance.partialUpdateLoggedUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUserRequest** | **PatchedUserRequest**|  |


### Return type

**ResponseUser**

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

# **updateLoggedUser**
> ResponseUser updateLoggedUser(userRequest)

Update the logged user. This replaces the entire user with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityLoggedInUserApi } from '';
import type { IdentityLoggedInUserApiUpdateLoggedUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityLoggedInUserApi(configuration);

const request: IdentityLoggedInUserApiUpdateLoggedUserRequest = {
  
  userRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    email: "email_example",
    active: true,
    twoFactorEnabled: false,
    preferences: {
      "key": null,
    },
    phone: `20/		+-	66	
33009`,
  },
};

const data = await apiInstance.updateLoggedUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRequest** | **UserRequest**|  |


### Return type

**ResponseUser**

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


