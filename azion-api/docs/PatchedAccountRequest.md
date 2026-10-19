# PatchedAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 
**CurrencyIsoCode** | Pointer to **string** | * &#x60;USD&#x60; - USD * &#x60;BRL&#x60; - BRL | [optional] 
**TermsOfServiceUrl** | Pointer to **string** |  | [optional] [default to "https://www.azion.com/pt-br/documentacao/contratos/tds/"]

## Methods

### NewPatchedAccountRequest

`func NewPatchedAccountRequest(type_ string, ) *PatchedAccountRequest`

NewPatchedAccountRequest instantiates a new PatchedAccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedAccountRequestWithDefaults

`func NewPatchedAccountRequestWithDefaults() *PatchedAccountRequest`

NewPatchedAccountRequestWithDefaults instantiates a new PatchedAccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedAccountRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedAccountRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedAccountRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedAccountRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *PatchedAccountRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedAccountRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedAccountRequest) SetType(v string)`

SetType sets Type field to given value.


### GetCurrencyIsoCode

`func (o *PatchedAccountRequest) GetCurrencyIsoCode() string`

GetCurrencyIsoCode returns the CurrencyIsoCode field if non-nil, zero value otherwise.

### GetCurrencyIsoCodeOk

`func (o *PatchedAccountRequest) GetCurrencyIsoCodeOk() (*string, bool)`

GetCurrencyIsoCodeOk returns a tuple with the CurrencyIsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyIsoCode

`func (o *PatchedAccountRequest) SetCurrencyIsoCode(v string)`

SetCurrencyIsoCode sets CurrencyIsoCode field to given value.

### HasCurrencyIsoCode

`func (o *PatchedAccountRequest) HasCurrencyIsoCode() bool`

HasCurrencyIsoCode returns a boolean if a field has been set.

### GetTermsOfServiceUrl

`func (o *PatchedAccountRequest) GetTermsOfServiceUrl() string`

GetTermsOfServiceUrl returns the TermsOfServiceUrl field if non-nil, zero value otherwise.

### GetTermsOfServiceUrlOk

`func (o *PatchedAccountRequest) GetTermsOfServiceUrlOk() (*string, bool)`

GetTermsOfServiceUrlOk returns a tuple with the TermsOfServiceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsOfServiceUrl

`func (o *PatchedAccountRequest) SetTermsOfServiceUrl(v string)`

SetTermsOfServiceUrl sets TermsOfServiceUrl field to given value.

### HasTermsOfServiceUrl

`func (o *PatchedAccountRequest) HasTermsOfServiceUrl() bool`

HasTermsOfServiceUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


