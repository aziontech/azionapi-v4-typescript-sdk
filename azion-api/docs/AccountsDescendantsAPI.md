# .AccountsDescendantsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDescendantAccount**](AccountsDescendantsApi.md#createDescendantAccount) | **POST** /account/accounts | Create a new account
[**listDescendantsAccounts**](AccountsDescendantsApi.md#listDescendantsAccounts) | **GET** /account/accounts | List accounts
[**partialUpdateDescendantAccount**](AccountsDescendantsApi.md#partialUpdateDescendantAccount) | **PATCH** /account/accounts/{account_id} | Partially update account details
[**retrieveDescendantAccount**](AccountsDescendantsApi.md#retrieveDescendantAccount) | **GET** /account/accounts/{account_id} | Retrieve account details
[**updateDescendantAccount**](AccountsDescendantsApi.md#updateDescendantAccount) | **PUT** /account/accounts/{account_id} | Update account details


# **createDescendantAccount**
> ResponseAccount | ResponseAsyncAccount createDescendantAccount()

Create a new sub-account under the logged-in user\'s account.

### Example


```typescript
import { createConfiguration, AccountsDescendantsApi } from '';
import type { AccountsDescendantsApiCreateDescendantAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsDescendantsApi(configuration);

const request: AccountsDescendantsApiCreateDescendantAccountRequest = {
  
  createAccountRequest: null,
};

const data = await apiInstance.createDescendantAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccountRequest** | **CreateAccountRequest**|  |


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

# **listDescendantsAccounts**
> PaginatedAccountList listDescendantsAccounts()

List all accounts that are descendants of the logged-in user\'s account.

### Example


```typescript
import { createConfiguration, AccountsDescendantsApi } from '';
import type { AccountsDescendantsApiListDescendantsAccountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsDescendantsApi(configuration);

const request: AccountsDescendantsApiListDescendantsAccountsRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by created date (exact match). (optional)
  created: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (greater than or equal). (optional)
  createdGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (less than or equal). (optional)
  createdLte: new Date('1970-01-01T00:00:00.00Z'),
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by account ID (accepts comma-separated values). (optional)
  id: "id_example",
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (exact match). (optional)
  lastModified: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // Filter by parent account ID (accepts comma-separated values). (optional)
  parentId: "parent_id_example",
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listDescendantsAccounts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **created** | [**Date**] | Filter by created date (exact match). | (optional) defaults to undefined
 **createdGte** | [**Date**] | Filter by created date (greater than or equal). | (optional) defaults to undefined
 **createdLte** | [**Date**] | Filter by created date (less than or equal). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**string**] | Filter by account ID (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModified** | [**Date**] | Filter by last modified date (exact match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **parentId** | [**string**] | Filter by parent account ID (accepts comma-separated values). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedAccountList**

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

# **partialUpdateDescendantAccount**
> ResponseAccount | ResponseAsyncAccount partialUpdateDescendantAccount()

Update specific fields of an account under the logged-in user\'s account. Only editable fields, such as `name`, can be updated with this operation.

### Example


```typescript
import { createConfiguration, AccountsDescendantsApi } from '';
import type { AccountsDescendantsApiPartialUpdateDescendantAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsDescendantsApi(configuration);

const request: AccountsDescendantsApiPartialUpdateDescendantAccountRequest = {
    // A unique integer value identifying the account.
  accountId: 1,
  
  patchedAccountRequest: null,
};

const data = await apiInstance.partialUpdateDescendantAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedAccountRequest** | **PatchedAccountRequest**|  |
 **accountId** | [**number**] | A unique integer value identifying the account. | defaults to undefined


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

# **retrieveDescendantAccount**
> ResponseRetrieveAccount retrieveDescendantAccount()

Retrieve detailed information of a specific account under the logged-in user\'s account.

### Example


```typescript
import { createConfiguration, AccountsDescendantsApi } from '';
import type { AccountsDescendantsApiRetrieveDescendantAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsDescendantsApi(configuration);

const request: AccountsDescendantsApiRetrieveDescendantAccountRequest = {
    // A unique integer value identifying the account.
  accountId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDescendantAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**number**] | A unique integer value identifying the account. | defaults to undefined
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

# **updateDescendantAccount**
> ResponseAccount | ResponseAsyncAccount updateDescendantAccount()

Update the information of a specific account under the logged-in user\'s account. This operation allows replacing the entire account data with new values.

### Example


```typescript
import { createConfiguration, AccountsDescendantsApi } from '';
import type { AccountsDescendantsApiUpdateDescendantAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountsDescendantsApi(configuration);

const request: AccountsDescendantsApiUpdateDescendantAccountRequest = {
    // A unique integer value identifying the account.
  accountId: 1,
  
  accountRequest: null,
};

const data = await apiInstance.updateDescendantAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountRequest** | **AccountRequest**|  |
 **accountId** | [**number**] | A unique integer value identifying the account. | defaults to undefined


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


