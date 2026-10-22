# .AccountsLoggedInApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partialUpdateLoggedAccount**](AccountsLoggedInApi.md#partialUpdateLoggedAccount) | **PATCH** /account/account | Partially update logged account details
[**retrieveLoggedAccountDetails**](AccountsLoggedInApi.md#retrieveLoggedAccountDetails) | **GET** /account/account | Retrieve logged account details
[**updateLoggedAccount**](AccountsLoggedInApi.md#updateLoggedAccount) | **PUT** /account/account | Update logged account details


# **partialUpdateLoggedAccount**
> ResponseAccount | ResponseAsyncAccount partialUpdateLoggedAccount()

Partially update specific fields of the currently logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.

### Example


```typescript
import { createConfiguration, AccountsLoggedInApi } from '';
import type { AccountsLoggedInApiPartialUpdateLoggedAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsLoggedInApi(configuration);

const request: AccountsLoggedInApiPartialUpdateLoggedAccountRequest = {
  
  patchedAccountRequest: null,
};

const data = await apiInstance.partialUpdateLoggedAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedAccountRequest** | **PatchedAccountRequest**|  |


### Return type

**ResponseAccount | ResponseAsyncAccount**

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

# **retrieveLoggedAccountDetails**
> ResponseRetrieveAccount retrieveLoggedAccountDetails()

Retrieve detailed information about the currently logged-in user\'s account.

### Example


```typescript
import { createConfiguration, AccountsLoggedInApi } from '';
import type { AccountsLoggedInApiRetrieveLoggedAccountDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsLoggedInApi(configuration);

const request: AccountsLoggedInApiRetrieveLoggedAccountDetailsRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveLoggedAccountDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveAccount**

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

# **updateLoggedAccount**
> ResponseAccount | ResponseAsyncAccount updateLoggedAccount()

Update the details of the currently logged-in user\'s account. This operation allows replacing the entire account data with new values.

### Example


```typescript
import { createConfiguration, AccountsLoggedInApi } from '';
import type { AccountsLoggedInApiUpdateLoggedAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsLoggedInApi(configuration);

const request: AccountsLoggedInApiUpdateLoggedAccountRequest = {
  
  accountRequest: null,
};

const data = await apiInstance.updateLoggedAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountRequest** | **AccountRequest**|  |


### Return type

**ResponseAccount | ResponseAsyncAccount**

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


