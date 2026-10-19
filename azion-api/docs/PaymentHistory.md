# PaymentHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountWithCurrency** | **string** |  | 
**InvoiceNumber** | **NullableString** |  | 
**InvoiceUrl** | **NullableString** |  | 
**Status** | **string** |  | 
**PaymentDue** | **string** |  | 
**CardBrand** | **NullableString** |  | 
**PaymentMethodDetails** | **NullableString** |  | 

## Methods

### NewPaymentHistory

`func NewPaymentHistory(amountWithCurrency string, invoiceNumber NullableString, invoiceUrl NullableString, status string, paymentDue string, cardBrand NullableString, paymentMethodDetails NullableString, ) *PaymentHistory`

NewPaymentHistory instantiates a new PaymentHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentHistoryWithDefaults

`func NewPaymentHistoryWithDefaults() *PaymentHistory`

NewPaymentHistoryWithDefaults instantiates a new PaymentHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountWithCurrency

`func (o *PaymentHistory) GetAmountWithCurrency() string`

GetAmountWithCurrency returns the AmountWithCurrency field if non-nil, zero value otherwise.

### GetAmountWithCurrencyOk

`func (o *PaymentHistory) GetAmountWithCurrencyOk() (*string, bool)`

GetAmountWithCurrencyOk returns a tuple with the AmountWithCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountWithCurrency

`func (o *PaymentHistory) SetAmountWithCurrency(v string)`

SetAmountWithCurrency sets AmountWithCurrency field to given value.


### GetInvoiceNumber

`func (o *PaymentHistory) GetInvoiceNumber() string`

GetInvoiceNumber returns the InvoiceNumber field if non-nil, zero value otherwise.

### GetInvoiceNumberOk

`func (o *PaymentHistory) GetInvoiceNumberOk() (*string, bool)`

GetInvoiceNumberOk returns a tuple with the InvoiceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNumber

`func (o *PaymentHistory) SetInvoiceNumber(v string)`

SetInvoiceNumber sets InvoiceNumber field to given value.


### SetInvoiceNumberNil

`func (o *PaymentHistory) SetInvoiceNumberNil(b bool)`

 SetInvoiceNumberNil sets the value for InvoiceNumber to be an explicit nil

### UnsetInvoiceNumber
`func (o *PaymentHistory) UnsetInvoiceNumber()`

UnsetInvoiceNumber ensures that no value is present for InvoiceNumber, not even an explicit nil
### GetInvoiceUrl

`func (o *PaymentHistory) GetInvoiceUrl() string`

GetInvoiceUrl returns the InvoiceUrl field if non-nil, zero value otherwise.

### GetInvoiceUrlOk

`func (o *PaymentHistory) GetInvoiceUrlOk() (*string, bool)`

GetInvoiceUrlOk returns a tuple with the InvoiceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceUrl

`func (o *PaymentHistory) SetInvoiceUrl(v string)`

SetInvoiceUrl sets InvoiceUrl field to given value.


### SetInvoiceUrlNil

`func (o *PaymentHistory) SetInvoiceUrlNil(b bool)`

 SetInvoiceUrlNil sets the value for InvoiceUrl to be an explicit nil

### UnsetInvoiceUrl
`func (o *PaymentHistory) UnsetInvoiceUrl()`

UnsetInvoiceUrl ensures that no value is present for InvoiceUrl, not even an explicit nil
### GetStatus

`func (o *PaymentHistory) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PaymentHistory) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PaymentHistory) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPaymentDue

`func (o *PaymentHistory) GetPaymentDue() string`

GetPaymentDue returns the PaymentDue field if non-nil, zero value otherwise.

### GetPaymentDueOk

`func (o *PaymentHistory) GetPaymentDueOk() (*string, bool)`

GetPaymentDueOk returns a tuple with the PaymentDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDue

`func (o *PaymentHistory) SetPaymentDue(v string)`

SetPaymentDue sets PaymentDue field to given value.


### GetCardBrand

`func (o *PaymentHistory) GetCardBrand() string`

GetCardBrand returns the CardBrand field if non-nil, zero value otherwise.

### GetCardBrandOk

`func (o *PaymentHistory) GetCardBrandOk() (*string, bool)`

GetCardBrandOk returns a tuple with the CardBrand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardBrand

`func (o *PaymentHistory) SetCardBrand(v string)`

SetCardBrand sets CardBrand field to given value.


### SetCardBrandNil

`func (o *PaymentHistory) SetCardBrandNil(b bool)`

 SetCardBrandNil sets the value for CardBrand to be an explicit nil

### UnsetCardBrand
`func (o *PaymentHistory) UnsetCardBrand()`

UnsetCardBrand ensures that no value is present for CardBrand, not even an explicit nil
### GetPaymentMethodDetails

`func (o *PaymentHistory) GetPaymentMethodDetails() string`

GetPaymentMethodDetails returns the PaymentMethodDetails field if non-nil, zero value otherwise.

### GetPaymentMethodDetailsOk

`func (o *PaymentHistory) GetPaymentMethodDetailsOk() (*string, bool)`

GetPaymentMethodDetailsOk returns a tuple with the PaymentMethodDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodDetails

`func (o *PaymentHistory) SetPaymentMethodDetails(v string)`

SetPaymentMethodDetails sets PaymentMethodDetails field to given value.


### SetPaymentMethodDetailsNil

`func (o *PaymentHistory) SetPaymentMethodDetailsNil(b bool)`

 SetPaymentMethodDetailsNil sets the value for PaymentMethodDetails to be an explicit nil

### UnsetPaymentMethodDetails
`func (o *PaymentHistory) UnsetPaymentMethodDetails()`

UnsetPaymentMethodDetails ensures that no value is present for PaymentMethodDetails, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


