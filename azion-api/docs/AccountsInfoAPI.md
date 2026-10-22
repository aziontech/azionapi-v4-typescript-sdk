# .AccountsInfoApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveAccountInfoDetails**](AccountsInfoApi.md#retrieveAccountInfoDetails) | **GET** /account/accounts/{account_id}/info | Retrieve account information details
[**updateAccountInfoDetails**](AccountsInfoApi.md#updateAccountInfoDetails) | **PUT** /account/accounts/{account_id}/info | Update account information details


# **retrieveAccountInfoDetails**
> ResponseRetrieveAccountInfo retrieveAccountInfoDetails()

Retrieve detailed information about your account or a specific child account under your logged-in account.

### Example


```typescript
import { createConfiguration, AccountsInfoApi } from '';
import type { AccountsInfoApiRetrieveAccountInfoDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsInfoApi(configuration);

const request: AccountsInfoApiRetrieveAccountInfoDetailsRequest = {
    // A unique integer value identifying the account.
  accountId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveAccountInfoDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**number**] | A unique integer value identifying the account. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveAccountInfo**

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

# **updateAccountInfoDetails**
> ResponseAsyncAccountInfo | ResponseAccountInfo updateAccountInfoDetails()

Update the information details about your account or a specific child account under your logged-in account. This operation allows replacing the entire account info data with new values. In this operation, you can also clear all detailed information of an account by providing an empty dictionary in the `info` field.

### Example


```typescript
import { createConfiguration, AccountsInfoApi } from '';
import type { AccountsInfoApiUpdateAccountInfoDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsInfoApi(configuration);

const request: AccountsInfoApiUpdateAccountInfoDetailsRequest = {
    // A unique integer value identifying the account.
  accountId: 1,
  
  updateAccountInfoDetailsRequest: {
    info: {
      industry: {},
      companySize: 1,
    },
  },
};

const data = await apiInstance.updateAccountInfoDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAccountInfoDetailsRequest** | **UpdateAccountInfoDetailsRequest**|  |
 **accountId** | [**number**] | A unique integer value identifying the account. | defaults to undefined


### Return type

**ResponseAsyncAccountInfo | ResponseAccountInfo**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
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


