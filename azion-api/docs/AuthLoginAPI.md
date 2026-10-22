# .AuthLoginApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authUserLogin**](AuthLoginApi.md#authUserLogin) | **POST** /account/auth/login | User Login – Generate JWT Tokens
[**authUserLoginMethod**](AuthLoginApi.md#authUserLoginMethod) | **GET** /account/auth/login/method | Check User Authentication Method
[**totpVerify**](AuthLoginApi.md#totpVerify) | **POST** /account/auth/mfa/totp/verify | Retrieve user JWT tokens by MFA auth


# **authUserLogin**
> ResponseLogin authUserLogin(loginRequest)

This endpoint performs user authentication and issues the user\'s JWT tokens. The response depends on whether multi-factor authentication (MFA) is enabled for the user:  - If the user does not have MFA enabled, the API returns a TokenPair object containing the access_token and refresh_token, allowing immediate authentication.  - If the user has MFA enabled, the response returns an MFAToken object. This temporary token must be used in the MFA verification endpoint to complete authentication. After successful verification of the second factor, the TokenPair is issued.

### Example


```typescript
import { createConfiguration, AuthLoginApi } from '';
import type { AuthLoginApiAuthUserLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthLoginApi(configuration);

const request: AuthLoginApiAuthUserLoginRequest = {
  
  loginRequest: {
    email: "email_example",
    password: "j",
    accountId: 1,
  },
};

const data = await apiInstance.authUserLogin(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**|  |


### Return type

**ResponseLogin**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User authenticated successfully. Returns JWT tokens or MFA token if MFA is enabled. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authUserLoginMethod**
> UserLoginMethodResponse authUserLoginMethod()

Returns the login type configured for the user. This indicates whether the user authenticates directly via Azion credentials (login) or via a federated Identity Provider (federated) linked to their account. This endpoint allows clients to determine whether to proceed with Azion\'s native login flow or redirect the user to the Identity Provider (IdP) for authentication.

### Example


```typescript
import { createConfiguration, AuthLoginApi } from '';
import type { AuthLoginApiAuthUserLoginMethodRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthLoginApi(configuration);

const request: AuthLoginApiAuthUserLoginMethodRequest = {
    // Email address of the user (optional)
  email: "email_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.authUserLoginMethod(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] | Email address of the user | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**UserLoginMethodResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User authentication method retrieved successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **totpVerify**
> TokenPairResponse totpVerify(tOTPVerificationRequest)

Retrieves JWT access and refresh tokens, via a POST request with jwt mfa token as auth + code.

### Example


```typescript
import { createConfiguration, AuthLoginApi } from '';
import type { AuthLoginApiTotpVerifyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthLoginApi(configuration);

const request: AuthLoginApiTotpVerifyRequest = {
  
  tOTPVerificationRequest: {
    code: "048072",
  },
};

const data = await apiInstance.totpVerify(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tOTPVerificationRequest** | **TOTPVerificationRequest**|  |


### Return type

**TokenPairResponse**

### Authorization

[JwtMfaAuthentication](README.md#JwtMfaAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TOTP verification successful. JWT tokens generated. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


