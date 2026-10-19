# PatchedResellerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**CurrencyIsoCode** | Pointer to **string** | * &#x60;USD&#x60; - USD * &#x60;BRL&#x60; - BRL | [optional] 
**TermsOfServiceUrl** | Pointer to **string** |  | [optional] [default to "https://www.azion.com/pt-br/documentacao/contratos/tds/"]
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 

## Methods

### NewPatchedResellerRequest

`func NewPatchedResellerRequest(type_ string, ) *PatchedResellerRequest`

NewPatchedResellerRequest instantiates a new PatchedResellerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedResellerRequestWithDefaults

`func NewPatchedResellerRequestWithDefaults() *PatchedResellerRequest`

NewPatchedResellerRequestWithDefaults instantiates a new PatchedResellerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedResellerRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedResellerRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedResellerRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedResellerRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCurrencyIsoCode

`func (o *PatchedResellerRequest) GetCurrencyIsoCode() string`

GetCurrencyIsoCode returns the CurrencyIsoCode field if non-nil, zero value otherwise.

### GetCurrencyIsoCodeOk

`func (o *PatchedResellerRequest) GetCurrencyIsoCodeOk() (*string, bool)`

GetCurrencyIsoCodeOk returns a tuple with the CurrencyIsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyIsoCode

`func (o *PatchedResellerRequest) SetCurrencyIsoCode(v string)`

SetCurrencyIsoCode sets CurrencyIsoCode field to given value.

### HasCurrencyIsoCode

`func (o *PatchedResellerRequest) HasCurrencyIsoCode() bool`

HasCurrencyIsoCode returns a boolean if a field has been set.

### GetTermsOfServiceUrl

`func (o *PatchedResellerRequest) GetTermsOfServiceUrl() string`

GetTermsOfServiceUrl returns the TermsOfServiceUrl field if non-nil, zero value otherwise.

### GetTermsOfServiceUrlOk

`func (o *PatchedResellerRequest) GetTermsOfServiceUrlOk() (*string, bool)`

GetTermsOfServiceUrlOk returns a tuple with the TermsOfServiceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsOfServiceUrl

`func (o *PatchedResellerRequest) SetTermsOfServiceUrl(v string)`

SetTermsOfServiceUrl sets TermsOfServiceUrl field to given value.

### HasTermsOfServiceUrl

`func (o *PatchedResellerRequest) HasTermsOfServiceUrl() bool`

HasTermsOfServiceUrl returns a boolean if a field has been set.

### GetType

`func (o *PatchedResellerRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedResellerRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedResellerRequest) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


