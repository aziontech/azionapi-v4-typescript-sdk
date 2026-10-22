# .PolicySessionTimeoutPolicyApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveSessionTimeoutPolicy**](PolicySessionTimeoutPolicyApi.md#retrieveSessionTimeoutPolicy) | **GET** /auth/policies/session | Get Session Timeout Policy
[**updateSessionTimeoutPolicy**](PolicySessionTimeoutPolicyApi.md#updateSessionTimeoutPolicy) | **PUT** /auth/policies/session | Put Session Timeout Policy


# **retrieveSessionTimeoutPolicy**
> SessionTimeoutPolicyResponse retrieveSessionTimeoutPolicy()

Get Session Timeout Policy for the current account.

### Example


```typescript
import { createConfiguration, PolicySessionTimeoutPolicyApi } from '';
import type { PolicySessionTimeoutPolicyApiRetrieveSessionTimeoutPolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicySessionTimeoutPolicyApi(configuration);

const request: PolicySessionTimeoutPolicyApiRetrieveSessionTimeoutPolicyRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveSessionTimeoutPolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**SessionTimeoutPolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session timeout policy details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSessionTimeoutPolicy**
> SessionTimeoutPolicyResponse updateSessionTimeoutPolicy(sessionTimeoutPolicyRequest)

Put Session Timeout Policy for the current account.

### Example


```typescript
import { createConfiguration, PolicySessionTimeoutPolicyApi } from '';
import type { PolicySessionTimeoutPolicyApiUpdateSessionTimeoutPolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicySessionTimeoutPolicyApi(configuration);

const request: PolicySessionTimeoutPolicyApiUpdateSessionTimeoutPolicyRequest = {
  
  sessionTimeoutPolicyRequest: {
    maxIdleTime: 1,
    maxSessionTime: 5,
  },
};

const data = await apiInstance.updateSessionTimeoutPolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionTimeoutPolicyRequest** | **SessionTimeoutPolicyRequest**|  |


### Return type

**SessionTimeoutPolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session timeout policy updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


