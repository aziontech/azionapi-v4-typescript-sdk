# Credit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float64** |  | 
**ClientId** | **string** |  | [readonly] 
**Currency** | **string** |  | [readonly] 
**EntryType** | **string** |  | [readonly] 
**ExpirationDate** | **string** |  | [readonly] 
**Created** | **string** |  | [readonly] 
**CustomerStripeId** | **string** |  | [readonly] 
**Description** | **string** |  | [readonly] 

## Methods

### NewCredit

`func NewCredit(amount float64, clientId string, currency string, entryType string, expirationDate string, created string, customerStripeId string, description string, ) *Credit`

NewCredit instantiates a new Credit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditWithDefaults

`func NewCreditWithDefaults() *Credit`

NewCreditWithDefaults instantiates a new Credit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *Credit) GetAmount() float64`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Credit) GetAmountOk() (*float64, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Credit) SetAmount(v float64)`

SetAmount sets Amount field to given value.


### GetClientId

`func (o *Credit) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *Credit) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *Credit) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCurrency

`func (o *Credit) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Credit) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Credit) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetEntryType

`func (o *Credit) GetEntryType() string`

GetEntryType returns the EntryType field if non-nil, zero value otherwise.

### GetEntryTypeOk

`func (o *Credit) GetEntryTypeOk() (*string, bool)`

GetEntryTypeOk returns a tuple with the EntryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryType

`func (o *Credit) SetEntryType(v string)`

SetEntryType sets EntryType field to given value.


### GetExpirationDate

`func (o *Credit) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *Credit) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *Credit) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.


### GetCreated

`func (o *Credit) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Credit) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Credit) SetCreated(v string)`

SetCreated sets Created field to given value.


### GetCustomerStripeId

`func (o *Credit) GetCustomerStripeId() string`

GetCustomerStripeId returns the CustomerStripeId field if non-nil, zero value otherwise.

### GetCustomerStripeIdOk

`func (o *Credit) GetCustomerStripeIdOk() (*string, bool)`

GetCustomerStripeIdOk returns a tuple with the CustomerStripeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerStripeId

`func (o *Credit) SetCustomerStripeId(v string)`

SetCustomerStripeId sets CustomerStripeId field to given value.


### GetDescription

`func (o *Credit) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Credit) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Credit) SetDescription(v string)`

SetDescription sets Description field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


