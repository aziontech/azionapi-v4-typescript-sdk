# .AuthMFATOTPDeviceApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTotpDevice**](AuthMFATOTPDeviceApi.md#createTotpDevice) | **POST** /account/auth/mfa/totp | Create a TOTP device
[**deleteTotpDevice**](AuthMFATOTPDeviceApi.md#deleteTotpDevice) | **DELETE** /auth/mfa/totp/{device_id} | Delete a TOTP device
[**listTotpDevices**](AuthMFATOTPDeviceApi.md#listTotpDevices) | **GET** /account/auth/mfa/totp | List of TOTP devices


# **createTotpDevice**
> TOTPDeviceResponse createTotpDevice()

Create a new TOTP device for your account.

### Example


```typescript
import { createConfiguration, AuthMFATOTPDeviceApi } from '';
import type { AuthMFATOTPDeviceApiCreateTotpDeviceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthMFATOTPDeviceApi(configuration);

const request: AuthMFATOTPDeviceApiCreateTotpDeviceRequest = {
  
  body: {},
};

const data = await apiInstance.createTotpDevice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**TOTPDeviceResponse**

### Authorization

[JwtMfaAuthentication](README.md#JwtMfaAuthentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TOTP device created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTotpDevice**
> DeleteResponse deleteTotpDevice()

Delete a specific TOTP device from your account or descendant account.

### Example


```typescript
import { createConfiguration, AuthMFATOTPDeviceApi } from '';
import type { AuthMFATOTPDeviceApiDeleteTotpDeviceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthMFATOTPDeviceApi(configuration);

const request: AuthMFATOTPDeviceApiDeleteTotpDeviceRequest = {
    // A unique integer value identifying the TOTP device.
  deviceId: 1,
};

const data = await apiInstance.deleteTotpDevice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | [**number**] | A unique integer value identifying the TOTP device. | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TOTP device deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTotpDevices**
> PaginatedTOTPDeviceList listTotpDevices()

List all totp devices for user account and descendant accounts.

### Example


```typescript
import { createConfiguration, AuthMFATOTPDeviceApi } from '';
import type { AuthMFATOTPDeviceApiListTotpDevicesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthMFATOTPDeviceApi(configuration);

const request: AuthMFATOTPDeviceApiListTotpDevicesRequest = {
    // Filter by confirmed status. (optional)
  confirmed: true,
    // Filter by user\'s email (case-insensitive, partial match). (optional)
  email: "email_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: "id_example",
    // Filter by user\'s first name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listTotpDevices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmed** | [**boolean**] | Filter by confirmed status. | (optional) defaults to undefined
 **email** | [**string**] | Filter by user\&#39;s email (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**string**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by user\&#39;s first name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedTOTPDeviceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of TOTP devices retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


