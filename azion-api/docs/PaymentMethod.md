# PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**CardHolder** | **string** |  | 
**CardBrand** | **string** |  | 
**CardExpirationMonth** | **int64** |  | 
**CardExpirationYear** | **int64** |  | 
**CardLast4Digits** | **string** |  | 
**CardAddressZip** | **string** |  | 
**CardCountry** | **string** |  | 
**CardAddressLine1** | Pointer to **string** |  | [optional] 
**CardAddressLine2** | Pointer to **string** |  | [optional] 
**CardId** | **string** |  | 
**IsDefault** | Pointer to **bool** |  | [optional] 
**CreatedAt** | **NullableTime** |  | [readonly] 

## Methods

### NewPaymentMethod

`func NewPaymentMethod(id int64, cardHolder string, cardBrand string, cardExpirationMonth int64, cardExpirationYear int64, cardLast4Digits string, cardAddressZip string, cardCountry string, cardId string, createdAt NullableTime, ) *PaymentMethod`

NewPaymentMethod instantiates a new PaymentMethod object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodWithDefaults

`func NewPaymentMethodWithDefaults() *PaymentMethod`

NewPaymentMethodWithDefaults instantiates a new PaymentMethod object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PaymentMethod) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PaymentMethod) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PaymentMethod) SetId(v int64)`

SetId sets Id field to given value.


### GetCardHolder

`func (o *PaymentMethod) GetCardHolder() string`

GetCardHolder returns the CardHolder field if non-nil, zero value otherwise.

### GetCardHolderOk

`func (o *PaymentMethod) GetCardHolderOk() (*string, bool)`

GetCardHolderOk returns a tuple with the CardHolder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardHolder

`func (o *PaymentMethod) SetCardHolder(v string)`

SetCardHolder sets CardHolder field to given value.


### GetCardBrand

`func (o *PaymentMethod) GetCardBrand() string`

GetCardBrand returns the CardBrand field if non-nil, zero value otherwise.

### GetCardBrandOk

`func (o *PaymentMethod) GetCardBrandOk() (*string, bool)`

GetCardBrandOk returns a tuple with the CardBrand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardBrand

`func (o *PaymentMethod) SetCardBrand(v string)`

SetCardBrand sets CardBrand field to given value.


### GetCardExpirationMonth

`func (o *PaymentMethod) GetCardExpirationMonth() int64`

GetCardExpirationMonth returns the CardExpirationMonth field if non-nil, zero value otherwise.

### GetCardExpirationMonthOk

`func (o *PaymentMethod) GetCardExpirationMonthOk() (*int64, bool)`

GetCardExpirationMonthOk returns a tuple with the CardExpirationMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationMonth

`func (o *PaymentMethod) SetCardExpirationMonth(v int64)`

SetCardExpirationMonth sets CardExpirationMonth field to given value.


### GetCardExpirationYear

`func (o *PaymentMethod) GetCardExpirationYear() int64`

GetCardExpirationYear returns the CardExpirationYear field if non-nil, zero value otherwise.

### GetCardExpirationYearOk

`func (o *PaymentMethod) GetCardExpirationYearOk() (*int64, bool)`

GetCardExpirationYearOk returns a tuple with the CardExpirationYear field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardExpirationYear

`func (o *PaymentMethod) SetCardExpirationYear(v int64)`

SetCardExpirationYear sets CardExpirationYear field to given value.


### GetCardLast4Digits

`func (o *PaymentMethod) GetCardLast4Digits() string`

GetCardLast4Digits returns the CardLast4Digits field if non-nil, zero value otherwise.

### GetCardLast4DigitsOk

`func (o *PaymentMethod) GetCardLast4DigitsOk() (*string, bool)`

GetCardLast4DigitsOk returns a tuple with the CardLast4Digits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardLast4Digits

`func (o *PaymentMethod) SetCardLast4Digits(v string)`

SetCardLast4Digits sets CardLast4Digits field to given value.


### GetCardAddressZip

`func (o *PaymentMethod) GetCardAddressZip() string`

GetCardAddressZip returns the CardAddressZip field if non-nil, zero value otherwise.

### GetCardAddressZipOk

`func (o *PaymentMethod) GetCardAddressZipOk() (*string, bool)`

GetCardAddressZipOk returns a tuple with the CardAddressZip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressZip

`func (o *PaymentMethod) SetCardAddressZip(v string)`

SetCardAddressZip sets CardAddressZip field to given value.


### GetCardCountry

`func (o *PaymentMethod) GetCardCountry() string`

GetCardCountry returns the CardCountry field if non-nil, zero value otherwise.

### GetCardCountryOk

`func (o *PaymentMethod) GetCardCountryOk() (*string, bool)`

GetCardCountryOk returns a tuple with the CardCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardCountry

`func (o *PaymentMethod) SetCardCountry(v string)`

SetCardCountry sets CardCountry field to given value.


### GetCardAddressLine1

`func (o *PaymentMethod) GetCardAddressLine1() string`

GetCardAddressLine1 returns the CardAddressLine1 field if non-nil, zero value otherwise.

### GetCardAddressLine1Ok

`func (o *PaymentMethod) GetCardAddressLine1Ok() (*string, bool)`

GetCardAddressLine1Ok returns a tuple with the CardAddressLine1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressLine1

`func (o *PaymentMethod) SetCardAddressLine1(v string)`

SetCardAddressLine1 sets CardAddressLine1 field to given value.

### HasCardAddressLine1

`func (o *PaymentMethod) HasCardAddressLine1() bool`

HasCardAddressLine1 returns a boolean if a field has been set.

### GetCardAddressLine2

`func (o *PaymentMethod) GetCardAddressLine2() string`

GetCardAddressLine2 returns the CardAddressLine2 field if non-nil, zero value otherwise.

### GetCardAddressLine2Ok

`func (o *PaymentMethod) GetCardAddressLine2Ok() (*string, bool)`

GetCardAddressLine2Ok returns a tuple with the CardAddressLine2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardAddressLine2

`func (o *PaymentMethod) SetCardAddressLine2(v string)`

SetCardAddressLine2 sets CardAddressLine2 field to given value.

### HasCardAddressLine2

`func (o *PaymentMethod) HasCardAddressLine2() bool`

HasCardAddressLine2 returns a boolean if a field has been set.

### GetCardId

`func (o *PaymentMethod) GetCardId() string`

GetCardId returns the CardId field if non-nil, zero value otherwise.

### GetCardIdOk

`func (o *PaymentMethod) GetCardIdOk() (*string, bool)`

GetCardIdOk returns a tuple with the CardId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardId

`func (o *PaymentMethod) SetCardId(v string)`

SetCardId sets CardId field to given value.


### GetIsDefault

`func (o *PaymentMethod) GetIsDefault() bool`

GetIsDefault returns the IsDefault field if non-nil, zero value otherwise.

### GetIsDefaultOk

`func (o *PaymentMethod) GetIsDefaultOk() (*bool, bool)`

GetIsDefaultOk returns a tuple with the IsDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDefault

`func (o *PaymentMethod) SetIsDefault(v bool)`

SetIsDefault sets IsDefault field to given value.

### HasIsDefault

`func (o *PaymentMethod) HasIsDefault() bool`

HasIsDefault returns a boolean if a field has been set.

### GetCreatedAt

`func (o *PaymentMethod) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PaymentMethod) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PaymentMethod) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *PaymentMethod) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *PaymentMethod) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


