# .AuthRevokeApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authUserRevoke**](AuthRevokeApi.md#authUserRevoke) | **POST** /account/auth/revoke | Revoke user JWT refresh token


# **authUserRevoke**
> StateExecutedResponse authUserRevoke()

Revoke refresh token via a POST request.

### Example


```typescript
import { createConfiguration, AuthRevokeApi } from '';
import type { AuthRevokeApiAuthUserRevokeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthRevokeApi(configuration);

const request: AuthRevokeApiAuthUserRevokeRequest = {
  
  body: null,
};

const data = await apiInstance.authUserRevoke(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**StateExecutedResponse**

### Authorization

[JwtRefreshAuthentication](README.md#JwtRefreshAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Revoke successfully executed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


