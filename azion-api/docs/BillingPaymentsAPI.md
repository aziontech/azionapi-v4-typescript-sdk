# .BillingPaymentsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredits**](BillingPaymentsApi.md#addCredits) | **POST** /payments/credits | Add credits using the default credit card
[**createCreditCard**](BillingPaymentsApi.md#createCreditCard) | **POST** /payments/credit_cards | Create a new credit card
[**destroyCreditCard**](BillingPaymentsApi.md#destroyCreditCard) | **DELETE** /payments/credit_cards/{id} | Destroy a credit card
[**listCreditCards**](BillingPaymentsApi.md#listCreditCards) | **GET** /payments/credit_cards | List of the credit cards
[**listPaymentHistory**](BillingPaymentsApi.md#listPaymentHistory) | **GET** /payments/history | List of the payment history
[**partialUpdateCreditCard**](BillingPaymentsApi.md#partialUpdateCreditCard) | **PATCH** /payments/credit_cards/{id} | Partially update a credit card
[**retrieveCreditCard**](BillingPaymentsApi.md#retrieveCreditCard) | **GET** /payments/credit_cards/{id} | Retrieve details from a credit card


# **addCredits**
> CreditResponse addCredits(creditRequest)

Add credit into the default credit card in US Dollars.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiAddCreditsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiAddCreditsRequest = {
  
  creditRequest: {
    amount: "-807",
  },
};

const data = await apiInstance.addCredits(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditRequest** | **CreditRequest**|  |


### Return type

**CreditResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**202** |  |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCreditCard**
> PaymentMethodResponse createCreditCard(paymentMethodRequest)

Create a new credit card for your account.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiCreateCreditCardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiCreateCreditCardRequest = {
  
  paymentMethodRequest: {
    cardHolder: "Z",
    cardBrand: "Z",
    cardExpirationMonth: 1,
    cardExpirationYear: 2022,
    cardLast4Digits: "0480",
    cardAddressZip: "H",
    cardCountry: "Z",
    cardAddressLine1: "jUR,rZ#UM/?R,Fp^l6$ARj",
    cardAddressLine2: "jUR,rZ#UM/?R,Fp^l6$ARj",
    stripeToken: "jUR,rZ#UM/?R,Fp^l6$ARj",
    cardId: "jUR,rZ#UM/?R,Fp^l6$ARj",
    isDefault: true,
  },
};

const data = await apiInstance.createCreditCard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodRequest** | **PaymentMethodRequest**|  |


### Return type

**PaymentMethodResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**202** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **destroyCreditCard**
> DeleteResponse destroyCreditCard()

Destruction of a specific credit card in your account.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiDestroyCreditCardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiDestroyCreditCardRequest = {
  
  id: "id_example",
};

const data = await apiInstance.destroyCreditCard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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
**200** |  |  -  |
**202** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCreditCards**
> PaginatedPaymentMethodResponseList listCreditCards()

List all credit cards owned by your account.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiListCreditCardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiListCreditCardsRequest = {
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

const data = await apiInstance.listCreditCards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedPaymentMethodResponseList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPaymentHistory**
> PaginatedPaymentHistoryList listPaymentHistory()

List all details of the payment history.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiListPaymentHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiListPaymentHistoryRequest = {
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

const data = await apiInstance.listPaymentHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedPaymentHistoryList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCreditCard**
> PaymentMethodResponse partialUpdateCreditCard()

Update the field \'is_default\' to enable of an existing credit card. Only the field \'is_default\' is editable for an existing card.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiPartialUpdateCreditCardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiPartialUpdateCreditCardRequest = {
  
  id: "id_example",
  
  patchedPartialUpdateRequest: {
    isDefault: true,
  },
};

const data = await apiInstance.partialUpdateCreditCard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPartialUpdateRequest** | **PatchedPartialUpdateRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**PaymentMethodResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCreditCard**
> PaymentMethodResponse retrieveCreditCard()

Retrieve details from a specific credit card in your account.

### Example


```typescript
import { createConfiguration, BillingPaymentsApi } from '';
import type { BillingPaymentsApiRetrieveCreditCardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingPaymentsApi(configuration);

const request: BillingPaymentsApiRetrieveCreditCardRequest = {
  
  id: "id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCreditCard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**PaymentMethodResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


