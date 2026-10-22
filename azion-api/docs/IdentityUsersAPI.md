# .IdentityUsersApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](IdentityUsersApi.md#createUser) | **POST** /identity/users | Create a new user
[**deleteUser**](IdentityUsersApi.md#deleteUser) | **DELETE** /identity/users/{user_id} | Delete an user
[**listUsers**](IdentityUsersApi.md#listUsers) | **GET** /identity/users | List of the account users
[**partialUpdateUser**](IdentityUsersApi.md#partialUpdateUser) | **PATCH** /identity/users/{user_id} | Partially update an user
[**retrieveUser**](IdentityUsersApi.md#retrieveUser) | **GET** /identity/users/{user_id} | Retrieve details from an user
[**updateUser**](IdentityUsersApi.md#updateUser) | **PUT** /identity/users/{user_id} | Update an user


# **createUser**
> ResponseUser createUser(userRequest)

Create a new user for your account.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiCreateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiCreateUserRequest = {
  
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

const data = await apiInstance.createUser(request);
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

# **deleteUser**
> ResponseDeleteUser deleteUser()

Delete a specific user in your account.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiDeleteUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiDeleteUserRequest = {
  
  userId: "user_id_example",
};

const data = await apiInstance.deleteUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**ResponseDeleteUser**

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

# **listUsers**
> PaginatedUserList listUsers()

List all users owned by your account.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiListUsersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiListUsersRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filters users by locked status.  - `true`: Returns only locked users.  - `false`: Returns only unlocked users.  - (not provided): Returns all users. (optional)
  locked: true,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **locked** | [**boolean**] | Filters users by locked status.  - &#x60;true&#x60;: Returns only locked users.  - &#x60;false&#x60;: Returns only unlocked users.  - (not provided): Returns all users. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedUserList**

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

# **partialUpdateUser**
> ResponseUser partialUpdateUser()

Update one or more fields of an existing user without affecting other fields.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiPartialUpdateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiPartialUpdateUserRequest = {
  
  userId: "user_id_example",
  
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

const data = await apiInstance.partialUpdateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUserRequest** | **PatchedUserRequest**|  |
 **userId** | [**string**] |  | defaults to undefined


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

# **retrieveUser**
> ResponseRetrieveUser retrieveUser()

Retrieve details from a specific user in your account.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiRetrieveUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiRetrieveUserRequest = {
  
  userId: "user_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined
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

# **updateUser**
> ResponseUser updateUser(userRequest)

Update an existing user. This replaces the entire user with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityUsersApi } from '';
import type { IdentityUsersApiUpdateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityUsersApi(configuration);

const request: IdentityUsersApiUpdateUserRequest = {
  
  userId: "user_id_example",
  
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

const data = await apiInstance.updateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRequest** | **UserRequest**|  |
 **userId** | [**string**] |  | defaults to undefined


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


