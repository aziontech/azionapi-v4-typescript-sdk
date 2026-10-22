# .DigitalCertificatesCertificatesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificate**](DigitalCertificatesCertificatesApi.md#createCertificate) | **POST** /workspace/tls/certificates | Create a certificate
[**deleteCertificate**](DigitalCertificatesCertificatesApi.md#deleteCertificate) | **DELETE** /workspace/tls/certificates/{certificate_id} | Delete a certificate
[**listCertificates**](DigitalCertificatesCertificatesApi.md#listCertificates) | **GET** /workspace/tls/certificates | List certificates
[**partialUpdateCertificate**](DigitalCertificatesCertificatesApi.md#partialUpdateCertificate) | **PATCH** /workspace/tls/certificates/{certificate_id} | Partially update a certificate
[**retrieveCertificate**](DigitalCertificatesCertificatesApi.md#retrieveCertificate) | **GET** /workspace/tls/certificates/{certificate_id} | Retrieve details from a certificate
[**updateCertificate**](DigitalCertificatesCertificatesApi.md#updateCertificate) | **PUT** /workspace/tls/certificates/{certificate_id} | Update a certificate


# **createCertificate**
> CertificateResponse createCertificate(certificate)

Create a new certificate for your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiCreateCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiCreateCertificateRequest = {
  
  certificate: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    certificate: "jUR,rZ#UM/?R,Fp^l6$ARj",
    privateKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "certificate",
    active: true,
  },
};

const data = await apiInstance.createCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | **Certificate**|  |


### Return type

**CertificateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Certificate created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCertificate**
> DeleteResponse deleteCertificate()

Delete a specific certificate in your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiDeleteCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiDeleteCertificateRequest = {
    // The unique identifier of the certificate
  certificateId: 1,
};

const data = await apiInstance.deleteCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateId** | [**number**] | The unique identifier of the certificate | defaults to undefined


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
**200** | Certificate deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCertificates**
> PaginatedCertificateList listCertificates()

List all certificates owned by your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiListCertificatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiListCertificatesRequest = {
    // Filter by certificate type (accepts comma-separated values). (optional)
  certificateType: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by certificate ID (accepts comma-separated values). (optional)
  id: 1,
    // Filter by issuer (case-insensitive, partial match). (optional)
  issuer: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by exact last modified date and time. (optional)
  lastModified: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by managed status. (optional)
  managed: true,
    // Filter by certificate name (case-insensitive, partial match). (optional)
  name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // Filter by exact renewed date and time. (optional)
  renewedAt: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by renewed date (greater than or equal). (optional)
  renewedAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by renewed date (less than or equal). (optional)
  renewedAtLte: new Date('1970-01-01T00:00:00.00Z'),
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listCertificates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateType** | [**string**] | Filter by certificate type (accepts comma-separated values). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by certificate ID (accepts comma-separated values). | (optional) defaults to undefined
 **issuer** | [**string**] | Filter by issuer (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModified** | [**Date**] | Filter by exact last modified date and time. | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **managed** | [**boolean**] | Filter by managed status. | (optional) defaults to undefined
 **name** | [**string**] | Filter by certificate name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **renewedAt** | [**Date**] | Filter by exact renewed date and time. | (optional) defaults to undefined
 **renewedAtGte** | [**Date**] | Filter by renewed date (greater than or equal). | (optional) defaults to undefined
 **renewedAtLte** | [**Date**] | Filter by renewed date (less than or equal). | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCertificateList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of certificates retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCertificate**
> CertificateResponse partialUpdateCertificate()

Update one or more fields of an existing certificate without affecting other fields.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiPartialUpdateCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiPartialUpdateCertificateRequest = {
    // The unique identifier of the certificate
  certificateId: 1,
  
  patchedCertificate: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    certificate: "jUR,rZ#UM/?R,Fp^l6$ARj",
    privateKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "certificate",
    active: true,
  },
};

const data = await apiInstance.partialUpdateCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedCertificate** | **PatchedCertificate**|  |
 **certificateId** | [**number**] | The unique identifier of the certificate | defaults to undefined


### Return type

**CertificateResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCertificate**
> CertificateResponse retrieveCertificate()

Retrieve details from a specific certificate in your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiRetrieveCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiRetrieveCertificateRequest = {
    // The unique identifier of the certificate
  certificateId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateId** | [**number**] | The unique identifier of the certificate | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CertificateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Certificate details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCertificate**
> CertificateResponse updateCertificate(certificate)

Update an existing certificate. This replaces the entire certificate with the new data provided.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificatesApi } from '';
import type { DigitalCertificatesCertificatesApiUpdateCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificatesApi(configuration);

const request: DigitalCertificatesCertificatesApiUpdateCertificateRequest = {
    // The unique identifier of the certificate
  certificateId: 1,
  
  certificate: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    certificate: "jUR,rZ#UM/?R,Fp^l6$ARj",
    privateKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "certificate",
    active: true,
  },
};

const data = await apiInstance.updateCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate** | **Certificate**|  |
 **certificateId** | [**number**] | The unique identifier of the certificate | defaults to undefined


### Return type

**CertificateResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


