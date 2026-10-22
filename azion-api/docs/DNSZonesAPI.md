# .DNSZonesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDnsZone**](DNSZonesApi.md#createDnsZone) | **POST** /workspace/dns/zones | Create a DNS Zone
[**deleteDnsZone**](DNSZonesApi.md#deleteDnsZone) | **DELETE** /workspace/dns/zones/{zone_id} | Delete a DNS Zone
[**listDnsZones**](DNSZonesApi.md#listDnsZones) | **GET** /workspace/dns/zones | List DNS Zones
[**partialUpdateDnsZone**](DNSZonesApi.md#partialUpdateDnsZone) | **PATCH** /workspace/dns/zones/{zone_id} | Partially update a DNS Zone
[**retrieveDnsZone**](DNSZonesApi.md#retrieveDnsZone) | **GET** /workspace/dns/zones/{zone_id} | Retrieve details of a DNS Zone
[**updateDnsZone**](DNSZonesApi.md#updateDnsZone) | **PUT** /workspace/dns/zones/{zone_id} | Update a DNS Zone


# **createDnsZone**
> ZoneResponse createDnsZone(zoneRequest)

Create a new DNS Zone for your account.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiCreateDnsZoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiCreateDnsZoneRequest = {
  
  zoneRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    domain: "jUR,rZ#UM/?R,Fp^l6$ARjbhJk C>i H'qT\{<?'es#)#iK.YM{Rag2/!KB!k@5oXh.:Ts";mGL,i&z5[P@M"lzfB+Y,Twzfu~N^z"mfeGp8ZohR8pb-ziKqEde8fXg9wdpfxa2-zRiT.7xU4NCUavTrip.EKNcZjkIcJiYMwrTuwCueVcufdDwPNSMYbDJnzkccYEcEziPbHZkRTSxkl",
    active: true,
  },
};

const data = await apiInstance.createDnsZone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneRequest** | **ZoneRequest**|  |


### Return type

**ZoneResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | DNS zone created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDnsZone**
> DeleteResponse deleteDnsZone()

Delete a specific DNS Zone in your account.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiDeleteDnsZoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiDeleteDnsZoneRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
};

const data = await apiInstance.deleteDnsZone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


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
**202** | DNS zone deletion accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDnsZones**
> PaginatedZoneList listDnsZones()

List all DNS Zones owned by your account.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiListDnsZonesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiListDnsZonesRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by domain (exact match). (optional)
  domain: "domain_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by name (exact match). (optional)
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

const data = await apiInstance.listDnsZones(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **domain** | [**string**] | Filter by domain (exact match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (exact match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedZoneList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of DNS zones retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateDnsZone**
> ZoneResponse partialUpdateDnsZone()

Update one or more fields of an existing DNS Zone without affecting other fields.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiPartialUpdateDnsZoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiPartialUpdateDnsZoneRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  patchedUpdateZoneRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
  },
};

const data = await apiInstance.partialUpdateDnsZone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUpdateZoneRequest** | **PatchedUpdateZoneRequest**|  |
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**ZoneResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS zone partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDnsZone**
> ZoneResponse retrieveDnsZone()

Retrieve details of a specific DNS Zone in your account.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiRetrieveDnsZoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiRetrieveDnsZoneRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDnsZone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ZoneResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS zone details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsZone**
> ZoneResponse updateDnsZone(updateZoneRequest)

Update an existing a DNS Zone. This replaces the entire DNS Zone with the new data provided.

### Example


```typescript
import { createConfiguration, DNSZonesApi } from '';
import type { DNSZonesApiUpdateDnsZoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSZonesApi(configuration);

const request: DNSZonesApiUpdateDnsZoneRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  updateZoneRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
  },
};

const data = await apiInstance.updateDnsZone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateZoneRequest** | **UpdateZoneRequest**|  |
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**ZoneResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS zone updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


