# .AuthRefreshAccessTokenApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authUserRefreshToken**](AuthRefreshAccessTokenApi.md#authUserRefreshToken) | **POST** /account/auth/token | Refresh user JWT access token


# **authUserRefreshToken**
> TokenResponse authUserRefreshToken()

Refresh JWT access token, via a POST request.

### Example


```typescript
import { createConfiguration, AuthRefreshAccessTokenApi } from '';
import type { AuthRefreshAccessTokenApiAuthUserRefreshTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthRefreshAccessTokenApi(configuration);

const request: AuthRefreshAccessTokenApiAuthUserRefreshTokenRequest = {
  
  tokenRequest: {
    accountId: 1,
  },
};

const data = await apiInstance.authUserRefreshToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRequest** | **TokenRequest**|  |


### Return type

**TokenResponse**

### Authorization

[JwtRefreshAuthentication](README.md#JwtRefreshAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Refresh token generated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


