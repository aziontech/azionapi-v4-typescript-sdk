# .DigitalCertificatesCertificateSigningRequestsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificateSigningRequest**](DigitalCertificatesCertificateSigningRequestsApi.md#createCertificateSigningRequest) | **POST** /workspace/tls/csr | Create a certificate signing request (CSR)


# **createCertificateSigningRequest**
> CertificateResponse createCertificateSigningRequest(certificateSigningRequest)

Create a new certificate signing request (CSR) for your account.

### Example


```typescript
import { createConfiguration, DigitalCertificatesCertificateSigningRequestsApi } from '';
import type { DigitalCertificatesCertificateSigningRequestsApiCreateCertificateSigningRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DigitalCertificatesCertificateSigningRequestsApi(configuration);

const request: DigitalCertificatesCertificateSigningRequestsApiCreateCertificateSigningRequestRequest = {
  
  certificateSigningRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    certificate: "jUR,rZ#UM/?R,Fp^l6$ARj",
    privateKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "certificate",
    keyAlgorithm: "rsa_2048",
    active: true,
    commonName: "*.u.T",
    alternativeNames: [
      "*.u.T",
    ],
    country: "AE",
    state: "jUR,rZ#UM/?R,Fp^l6$ARj",
    locality: "jUR,rZ#UM/?R,Fp^l6$ARj",
    organization: "jUR,rZ#UM/?R,Fp^l6$ARj",
    organizationUnity: "jUR,rZ#UM/?R,Fp^l6$ARj",
    email: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createCertificateSigningRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificateSigningRequest** | **CertificateSigningRequest**|  |


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
**201** | Certificate signing request created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


