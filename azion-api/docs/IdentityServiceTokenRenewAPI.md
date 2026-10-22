# .IdentityServiceTokenRenewApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**renewServiceToken**](IdentityServiceTokenRenewApi.md#renewServiceToken) | **POST** /identity/service-tokens/{id}/renew | Renews a service token


# **renewServiceToken**
> ResponseServiceTokenRenew renewServiceToken(serviceTokenRenewRequest)

Renews a service token for your account.

### Example


```typescript
import { createConfiguration, IdentityServiceTokenRenewApi } from '';
import type { IdentityServiceTokenRenewApiRenewServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokenRenewApi(configuration);

const request: IdentityServiceTokenRenewApiRenewServiceTokenRequest = {
  
  id: 1,
  
  serviceTokenRenewRequest: {
    expires: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.renewServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceTokenRenewRequest** | **ServiceTokenRenewRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ResponseServiceTokenRenew**

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


