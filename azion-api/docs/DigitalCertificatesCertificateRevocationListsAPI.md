# .DigitalCertificatesCertificateRevocationListsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsApi.md#createCertificateRevocationList) | **POST** /workspace/tls/crls | Create a certificate revocation lists (CRL)
[**deleteCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsApi.md#deleteCertificateRevocationList) | **DELETE** /workspace/tls/crls/{crl_id} | Delete a certificate revocation list
[**listCertificateRevocationLists**](DigitalCertificatesCertificateRevocationListsApi.md#listCertificateRevocationLists) | **GET** /workspace/tls/crls | List certificate revocation lists (CRL)
[**partialUpdateCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsApi.md#partialUpdateCertificateRevocationList) | **PATCH** /workspace/tls/crls/{crl_id} | Update a certificate revocation lists (CRL)
[**retrieveCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsApi.md#retrieveCertificateRevocationList) | **GET** /workspace/tls/crls/{crl_id} | Retrieve details from a certificate revocation lists (CRL)
[**updateCertificateRevocationList**](DigitalCertificatesCertificateRevocationListsApi.md#updateCertificateRevocationList) | **PUT** /workspace/tls/crls/{crl_id} | Update a certificate revocation lists (CRL)


# **createCertificateRevocationList**
> CertificateRevocationListResponse createCertificateRevocationList(certificateRevocationList)

Create a new certificate revocation lists (CRL) for your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiCreateCertificateRevocationListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiCreateCertificateRevocationListRequest = {
  
  certificateRevocationList: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    crl: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createCertificateRevocationList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateRevocationList** | **CertificateRevocationList**|  |


### Return type

**CertificateRevocationListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Certificate revocation list created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCertificateRevocationList**
> DeleteResponse deleteCertificateRevocationList()

Delete a specific certificate revocation list in your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiDeleteCertificateRevocationListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiDeleteCertificateRevocationListRequest = {
    // The unique identifier of the certificate revocation list
  crlId: 1,
};

const data = await apiInstance.deleteCertificateRevocationList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crlId** | [**number**] | The unique identifier of the certificate revocation list | defaults to undefined


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
**200** | Certificate revocation list deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCertificateRevocationLists**
> PaginatedCertificateRevocationList listCertificateRevocationLists()

List all certificate revocation lists (CRL) owned by your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiListCertificateRevocationListsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiListCertificateRevocationListsRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by CRL ID (accepts comma-separated values). (optional)
  id: 1,
    // Filter by issuer (case-insensitive, partial match). (optional)
  issuer: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by exact last modified date and time. (optional)
  lastModified: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by exact last update date and time. (optional)
  lastUpdate: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last update date (greater than or equal). (optional)
  lastUpdateGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last update date (less than or equal). (optional)
  lastUpdateLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by CRL name (case-insensitive, partial match). (optional)
  name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by exact next update date and time. (optional)
  nextUpdate: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by next update date (greater than or equal). (optional)
  nextUpdateGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by next update date (less than or equal). (optional)
  nextUpdateLte: new Date('1970-01-01T00:00:00.00Z'),
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listCertificateRevocationLists(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by CRL ID (accepts comma-separated values). | (optional) defaults to undefined
 **issuer** | [**string**] | Filter by issuer (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModified** | [**Date**] | Filter by exact last modified date and time. | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **lastUpdate** | [**Date**] | Filter by exact last update date and time. | (optional) defaults to undefined
 **lastUpdateGte** | [**Date**] | Filter by last update date (greater than or equal). | (optional) defaults to undefined
 **lastUpdateLte** | [**Date**] | Filter by last update date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by CRL name (case-insensitive, partial match). | (optional) defaults to undefined
 **nextUpdate** | [**Date**] | Filter by exact next update date and time. | (optional) defaults to undefined
 **nextUpdateGte** | [**Date**] | Filter by next update date (greater than or equal). | (optional) defaults to undefined
 **nextUpdateLte** | [**Date**] | Filter by next update date (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCertificateRevocationList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of certificate revocation lists retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCertificateRevocationList**
> CertificateRevocationListResponse partialUpdateCertificateRevocationList()

Update one or more fields of an existing certificate revocation lists (CRL) without affecting other fields.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiPartialUpdateCertificateRevocationListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiPartialUpdateCertificateRevocationListRequest = {
    // The unique identifier of the certificate revocation list
  crlId: 1,
  
  patchedCertificateRevocationList: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    crl: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateCertificateRevocationList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedCertificateRevocationList** | **PatchedCertificateRevocationList**|  |
 **crlId** | [**number**] | The unique identifier of the certificate revocation list | defaults to undefined


### Return type

**CertificateRevocationListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Certificate revocation list partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCertificateRevocationList**
> CertificateRevocationListResponse retrieveCertificateRevocationList()

Retrieve details from a specific certificate revocation lists (CRL) in your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiRetrieveCertificateRevocationListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiRetrieveCertificateRevocationListRequest = {
    // The unique identifier of the certificate revocation list
  crlId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCertificateRevocationList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crlId** | [**number**] | The unique identifier of the certificate revocation list | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CertificateRevocationListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Certificate revocation list details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCertificateRevocationList**
> CertificateRevocationListResponse updateCertificateRevocationList(certificateRevocationList)

Update an existing certificate revocation lists (CRL).  This replaces the entire certificate with the new data provided.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateRevocationListsApi } from '';
import type { DigitalCertificatesCertificateRevocationListsApiUpdateCertificateRevocationListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateRevocationListsApi(configuration);

const request: DigitalCertificatesCertificateRevocationListsApiUpdateCertificateRevocationListRequest = {
    // The unique identifier of the certificate revocation list
  crlId: 1,
  
  certificateRevocationList: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    crl: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateCertificateRevocationList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateRevocationList** | **CertificateRevocationList**|  |
 **crlId** | [**number**] | The unique identifier of the certificate revocation list | defaults to undefined


### Return type

**CertificateRevocationListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Certificate revocation list updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


