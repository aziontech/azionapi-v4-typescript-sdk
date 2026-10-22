# .DigitalCertificatesRequestACertificateApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestCertificate**](DigitalCertificatesRequestACertificateApi.md#requestCertificate) | **POST** /workspace/tls/certificates/request | Request a certificate


# **requestCertificate**
> CertificateResponse requestCertificate(certificateRequest)

Request a new certificate for your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesRequestACertificateApi } from '';
import type { DigitalCertificatesRequestACertificateApiRequestCertificateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesRequestACertificateApi(configuration);

const request: DigitalCertificatesRequestACertificateApiRequestCertificateRequest = {
  
  certificateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    certificate: "jUR,rZ#UM/?R,Fp^l6$ARj",
    privateKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "certificate",
    challenge: "dns",
    authority: "lets_encrypt",
    keyAlgorithm: "ecc_384",
    active: true,
    commonName: "*.u.T",
    alternativeNames: [
      "*.u.T",
    ],
    sourceCertificate: 1,
  },
};

const data = await apiInstance.requestCertificate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateRequest** | **CertificateRequest**|  |


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
**201** | Certificate request submitted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


