# .BillingInvoicesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveInvoice**](BillingInvoicesApi.md#retrieveInvoice) | **GET** /billing/invoices/{period} | Retrieve details of an invoice


# **retrieveInvoice**
> void retrieveInvoice()

Retrieve invoice data for a specific period.

### Example


```typescript
import { createConfiguration, BillingInvoicesApi } from '';
import type { BillingInvoicesApiRetrieveInvoiceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingInvoicesApi(configuration);

const request: BillingInvoicesApiRetrieveInvoiceRequest = {
    // Invoice period in MM-YYYY format (e.g., 01-2024 for January 2024)
  period: "04-8072",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveInvoice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | [**string**] | Invoice period in MM-YYYY format (e.g., 01-2024 for January 2024) | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invoice details (application/pdf) |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**404** | Not Found |  -  |
**400** | Validation Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


