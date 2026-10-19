# PaymentMethodRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardHolder** | **string** |  | 
**CardBrand** | **string** |  | 
**CardExpirationMonth** | **int64** |  | 
**CardExpirationYear** | **int64** |  | 
**CardLast4Digits** | **string** |  | 
**CardAddressZip** | **string** |  | 
**CardCountry** | **string** |  | 
**CardAddressLine1** | Pointer to **string** |  | [optional] 
**CardAddressLine2** | Pointer to **string** |  | [optional] 
**StripeToken** | **string** |  | 
**CardId** | **string** |  | 
**IsDefault** | Pointer to **bool** |  | [optional] 

## Methods

### NewPaymentMethodRequest

`func NewPaymentMethodRequest(cardHolder string, cardBrand string, cardExpirationMonth int64, cardExpirationYear int64, cardLast4Digits string, cardAddressZip string, cardCountry string, stripeToken string, cardId string, ) *PaymentMethodRequest`

NewPaymentMethodRequest instantiates a new PaymentMethodRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodRequestWithDefaults

`func NewPaymentMethodRequestWithDefaults() *PaymentMethodRequest`

NewPaymentMethodRequestWithDefaults instantiates a new PaymentMethodRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardHolder

`func (o *PaymentMethodRequest) GetCardHolder() string`

GetCardHolder returns the CardHolder field if non-nil, zero value otherwise.

### GetCardHolderOk

`func (o *PaymentMethodRequest) GetCardHolderOk() (*string, bool)`

GetCardHolderOk returns a tuple with the CardHolder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardHolder

`func (o *PaymentMethodRequest) SetCardHolder(v string)`

SetCardHolder sets CardHolder field to given value.


### GetCardBrand

`func (o *PaymentMethodRequest) GetCardBrand() string`

GetCardBrand returns the CardBrand field if non-nil, zero value otherwise.

### GetCardBrandOk

`func (o *PaymentMethodRequest) GetCardBrandOk() (*string, bool)`

GetCardBrandOk returns a tuple with the CardBrand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardBrand

`func (o *PaymentMethodRequest) SetCardBrand(v string)`

SetCardBrand sets CardBrand field to given value.


### GetCardExpirationMonth

`func (o *PaymentMethodRequest) GetCardExpirationMonth() int64`

GetCardExpirationMonth returns the CardExpirationMonth field if non-nil, zero value otherwise.

### GetCardExpirationMonthOk

`func (o *PaymentMethodRequest) GetCardExpirationMonthOk() (*int64, bool)`

GetCardExpirationMonthOk returns a tuple with the CardExpirationMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationMonth

`func (o *PaymentMethodRequest) SetCardExpirationMonth(v int64)`

SetCardExpirationMonth sets CardExpirationMonth field to given value.


### GetCardExpirationYear

`func (o *PaymentMethodRequest) GetCardExpirationYear() int64`

GetCardExpirationYear returns the CardExpirationYear field if non-nil, zero value otherwise.

### GetCardExpirationYearOk

`func (o *PaymentMethodRequest) GetCardExpirationYearOk() (*int64, bool)`

GetCardExpirationYearOk returns a tuple with the CardExpirationYear field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationYear

`func (o *PaymentMethodRequest) SetCardExpirationYear(v int64)`

SetCardExpirationYear sets CardExpirationYear field to given value.


### GetCardLast4Digits

`func (o *PaymentMethodRequest) GetCardLast4Digits() string`

GetCardLast4Digits returns the CardLast4Digits field if non-nil, zero value otherwise.

### GetCardLast4DigitsOk

`func (o *PaymentMethodRequest) GetCardLast4DigitsOk() (*string, bool)`

GetCardLast4DigitsOk returns a tuple with the CardLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardLast4Digits

`func (o *PaymentMethodRequest) SetCardLast4Digits(v string)`

SetCardLast4Digits sets CardLast4Digits field to given value.


### GetCardAddressZip

`func (o *PaymentMethodRequest) GetCardAddressZip() string`

GetCardAddressZip returns the CardAddressZip field if non-nil, zero value otherwise.

### GetCardAddressZipOk

`func (o *PaymentMethodRequest) GetCardAddressZipOk() (*string, bool)`

GetCardAddressZipOk returns a tuple with the CardAddressZip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressZip

`func (o *PaymentMethodRequest) SetCardAddressZip(v string)`

SetCardAddressZip sets CardAddressZip field to given value.


### GetCardCountry

`func (o *PaymentMethodRequest) GetCardCountry() string`

GetCardCountry returns the CardCountry field if non-nil, zero value otherwise.

### GetCardCountryOk

`func (o *PaymentMethodRequest) GetCardCountryOk() (*string, bool)`

GetCardCountryOk returns a tuple with the CardCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardCountry

`func (o *PaymentMethodRequest) SetCardCountry(v string)`

SetCardCountry sets CardCountry field to given value.


### GetCardAddressLine1

`func (o *PaymentMethodRequest) GetCardAddressLine1() string`

GetCardAddressLine1 returns the CardAddressLine1 field if non-nil, zero value otherwise.

### GetCardAddressLine1Ok

`func (o *PaymentMethodRequest) GetCardAddressLine1Ok() (*string, bool)`

GetCardAddressLine1Ok returns a tuple with the CardAddressLine1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressLine1

`func (o *PaymentMethodRequest) SetCardAddressLine1(v string)`

SetCardAddressLine1 sets CardAddressLine1 field to given value.

### HasCardAddressLine1

`func (o *PaymentMethodRequest) HasCardAddressLine1() bool`

HasCardAddressLine1 returns a boolean if a field has been set.

### GetCardAddressLine2

`func (o *PaymentMethodRequest) GetCardAddressLine2() string`

GetCardAddressLine2 returns the CardAddressLine2 field if non-nil, zero value otherwise.

### GetCardAddressLine2Ok

`func (o *PaymentMethodRequest) GetCardAddressLine2Ok() (*string, bool)`

GetCardAddressLine2Ok returns a tuple with the CardAddressLine2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressLine2

`func (o *PaymentMethodRequest) SetCardAddressLine2(v string)`

SetCardAddressLine2 sets CardAddressLine2 field to given value.

### HasCardAddressLine2

`func (o *PaymentMethodRequest) HasCardAddressLine2() bool`

HasCardAddressLine2 returns a boolean if a field has been set.

### GetStripeToken

`func (o *PaymentMethodRequest) GetStripeToken() string`

GetStripeToken returns the StripeToken field if non-nil, zero value otherwise.

### GetStripeTokenOk

`func (o *PaymentMethodRequest) GetStripeTokenOk() (*string, bool)`

GetStripeTokenOk returns a tuple with the StripeToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStripeToken

`func (o *PaymentMethodRequest) SetStripeToken(v string)`

SetStripeToken sets StripeToken field to given value.


### GetCardId

`func (o *PaymentMethodRequest) GetCardId() string`

GetCardId returns the CardId field if non-nil, zero value otherwise.

### GetCardIdOk

`func (o *PaymentMethodRequest) GetCardIdOk() (*string, bool)`

GetCardIdOk returns a tuple with the CardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardId

`func (o *PaymentMethodRequest) SetCardId(v string)`

SetCardId sets CardId field to given value.


### GetIsDefault

`func (o *PaymentMethodRequest) GetIsDefault() bool`

GetIsDefault returns the IsDefault field if non-nil, zero value otherwise.

### GetIsDefaultOk

`func (o *PaymentMethodRequest) GetIsDefaultOk() (*bool, bool)`

GetIsDefaultOk returns a tuple with the IsDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDefault

`func (o *PaymentMethodRequest) SetIsDefault(v bool)`

SetIsDefault sets IsDefault field to given value.

### HasIsDefault

`func (o *PaymentMethodRequest) HasIsDefault() bool`

HasIsDefault returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


