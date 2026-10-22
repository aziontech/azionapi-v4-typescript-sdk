# .DNSRecordsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDnsRecord**](DNSRecordsApi.md#createDnsRecord) | **POST** /workspace/dns/zones/{zone_id}/records | Create a DNS Record
[**deleteDnsRecord**](DNSRecordsApi.md#deleteDnsRecord) | **DELETE** /workspace/dns/zones/{zone_id}/records/{record_id} | Delete a DNS Record
[**listDnsRecords**](DNSRecordsApi.md#listDnsRecords) | **GET** /workspace/dns/zones/{zone_id}/records | List DNS Records
[**partialUpdateDnsRecord**](DNSRecordsApi.md#partialUpdateDnsRecord) | **PATCH** /workspace/dns/zones/{zone_id}/records/{record_id} | Partially update a DNS Record
[**retrieveDnsRecord**](DNSRecordsApi.md#retrieveDnsRecord) | **GET** /workspace/dns/zones/{zone_id}/records/{record_id} | Retrieve details of a DNS Record
[**updateDnsRecord**](DNSRecordsApi.md#updateDnsRecord) | **PUT** /workspace/dns/zones/{zone_id}/records/{record_id} | Update a DNS Record


# **createDnsRecord**
> RecordResponse createDnsRecord(recordRequest)

Create a new DNS Record in a DNS Zone for your account.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiCreateDnsRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiCreateDnsRecordRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  recordRequest: {
    description: "",
    name: "@",
    ttl: 3600,
    type: "A",
    rdata: [
      "rdata_example",
    ],
    policy: "simple",
    weight: 255,
  },
};

const data = await apiInstance.createDnsRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordRequest** | **RecordRequest**|  |
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**RecordResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | DNS record created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDnsRecord**
> DeleteResponse deleteDnsRecord()

Delete a specific DNS Record from a DNS Zone in your account.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiDeleteDnsRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiDeleteDnsRecordRequest = {
    // A unique integer value identifying the DNS Record.
  recordId: 1,
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
};

const data = await apiInstance.deleteDnsRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | [**number**] | A unique integer value identifying the DNS Record. | defaults to undefined
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
**202** | DNS record deletion accepted and processing asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDnsRecords**
> PaginatedRecordList listDnsRecords()

List all DNS Records from a DNS Zone owned by your account.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiListDnsRecordsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiListDnsRecordsRequest = {
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listDnsRecords(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedRecordList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of DNS records retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateDnsRecord**
> RecordResponse partialUpdateDnsRecord()

Update one or more fields of an existing DNS Record without affecting other fields.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiPartialUpdateDnsRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiPartialUpdateDnsRecordRequest = {
    // A unique integer value identifying the DNS Record.
  recordId: 1,
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  patchedRecordRequest: {
    description: "",
    name: "@",
    ttl: 3600,
    type: "A",
    rdata: [
      "rdata_example",
    ],
    policy: "simple",
    weight: 255,
  },
};

const data = await apiInstance.partialUpdateDnsRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedRecordRequest** | **PatchedRecordRequest**|  |
 **recordId** | [**number**] | A unique integer value identifying the DNS Record. | defaults to undefined
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**RecordResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS record partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDnsRecord**
> RecordResponse retrieveDnsRecord()

Retrieve details of a specific DNS Record from a DNS Zone in your account.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiRetrieveDnsRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiRetrieveDnsRecordRequest = {
    // A unique integer value identifying the DNS Record.
  recordId: 1,
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDnsRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordId** | [**number**] | A unique integer value identifying the DNS Record. | defaults to undefined
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**RecordResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS record details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsRecord**
> RecordResponse updateDnsRecord(recordRequest)

Update an existing a DNS Record. This replaces the entire DNS Record with the new data provided.

### Example


```typescript
import { createConfiguration, DNSRecordsApi } from '';
import type { DNSRecordsApiUpdateDnsRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DNSRecordsApi(configuration);

const request: DNSRecordsApiUpdateDnsRecordRequest = {
    // A unique integer value identifying the DNS Record.
  recordId: 1,
    // A unique integer value identifying the DNS Zone.
  zoneId: 1,
  
  recordRequest: {
    description: "",
    name: "@",
    ttl: 3600,
    type: "A",
    rdata: [
      "rdata_example",
    ],
    policy: "simple",
    weight: 255,
  },
};

const data = await apiInstance.updateDnsRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordRequest** | **RecordRequest**|  |
 **recordId** | [**number**] | A unique integer value identifying the DNS Record. | defaults to undefined
 **zoneId** | [**number**] | A unique integer value identifying the DNS Zone. | defaults to undefined


### Return type

**RecordResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | DNS record updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


