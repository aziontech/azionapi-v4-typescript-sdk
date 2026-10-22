# .DNSDNSSECApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partialUpdateDnssec**](DNSDNSSECApi.md#partialUpdateDnssec) | **PATCH** /workspace/dns/zones/{zone_id}/dnssec | Partially update a DNSSEC
[**retrieveDnssec**](DNSDNSSECApi.md#retrieveDnssec) | **GET** /workspace/dns/zones/{zone_id}/dnssec | Retrieve details of a DNSSEC
[**updateDnssec**](DNSDNSSECApi.md#updateDnssec) | **PUT** /workspace/dns/zones/{zone_id}/dnssec | Update a DNSSEC


# **partialUpdateDnssec**
> DNSSECResponse partialUpdateDnssec()

Update one or more fields of an existing DNSSEC without affecting other fields.

### Example


```typescript
import { createConfiguration, DNSDNSSECApi } from '';
import type { DNSDNSSECApiPartialUpdateDnssecRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSDNSSECApi(configuration);

const request: DNSDNSSECApiPartialUpdateDnssecRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  patchedDNSSECRequest: {
    enabled: true,
  },
};

const data = await apiInstance.partialUpdateDnssec(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedDNSSECRequest** | **PatchedDNSSECRequest**|  |
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**DNSSECResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNSSEC partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDnssec**
> DNSSECResponse retrieveDnssec()

Retrieve details of a specific DNSSEC from a DNS Zone in your account.

### Example


```typescript
import { createConfiguration, DNSDNSSECApi } from '';
import type { DNSDNSSECApiRetrieveDnssecRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSDNSSECApi(configuration);

const request: DNSDNSSECApiRetrieveDnssecRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDnssec(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DNSSECResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNSSEC details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnssec**
> DNSSECResponse updateDnssec(dNSSECRequest)

Update an existing a DNSSEC. This replaces the entire DNSSEC with the new data provided.

### Example


```typescript
import { createConfiguration, DNSDNSSECApi } from '';
import type { DNSDNSSECApiUpdateDnssecRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSDNSSECApi(configuration);

const request: DNSDNSSECApiUpdateDnssecRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  dNSSECRequest: {
    enabled: true,
  },
};

const data = await apiInstance.updateDnssec(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dNSSECRequest** | **DNSSECRequest**|  |
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**DNSSECResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNSSEC updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


