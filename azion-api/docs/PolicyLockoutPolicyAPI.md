# .PolicyLockoutPolicyApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveLockoutPolicy**](PolicyLockoutPolicyApi.md#retrieveLockoutPolicy) | **GET** /auth/policies/lockout | Get Lockout Policy
[**updateLockoutPolicy**](PolicyLockoutPolicyApi.md#updateLockoutPolicy) | **PUT** /auth/policies/lockout | Put Lockout Policy


# **retrieveLockoutPolicy**
> LockoutPolicyResponse retrieveLockoutPolicy()

Get Lockout Policy for the current account.

### Example


```typescript
import { createConfiguration, PolicyLockoutPolicyApi } from '';
import type { PolicyLockoutPolicyApiRetrieveLockoutPolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyLockoutPolicyApi(configuration);

const request: PolicyLockoutPolicyApiRetrieveLockoutPolicyRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveLockoutPolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**LockoutPolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lockout policy details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLockoutPolicy**
> LockoutPolicyResponse updateLockoutPolicy(lockoutPolicyRequest)

Put Lockout Policy for the current account.

### Example


```typescript
import { createConfiguration, PolicyLockoutPolicyApi } from '';
import type { PolicyLockoutPolicyApiUpdateLockoutPolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyLockoutPolicyApi(configuration);

const request: PolicyLockoutPolicyApiUpdateLockoutPolicyRequest = {
  
  lockoutPolicyRequest: {
    active: true,
    maxAttempts: 1,
    blockingPeriod: 1,
  },
};

const data = await apiInstance.updateLockoutPolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lockoutPolicyRequest** | **LockoutPolicyRequest**|  |


### Return type

**LockoutPolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lockout policy updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


