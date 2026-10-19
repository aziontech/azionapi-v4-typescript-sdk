# CreateResellerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**ParentId** | **int64** |  | 
**CurrencyIsoCode** | **string** | * &#x60;USD&#x60; - USD * &#x60;BRL&#x60; - BRL | 
**TermsOfServiceUrl** | Pointer to **string** |  | [optional] [default to "https://www.azion.com/pt-br/documentacao/contratos/tds/"]
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 

## Methods

### NewCreateResellerRequest

`func NewCreateResellerRequest(name string, parentId int64, currencyIsoCode string, type_ string, ) *CreateResellerRequest`

NewCreateResellerRequest instantiates a new CreateResellerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateResellerRequestWithDefaults

`func NewCreateResellerRequestWithDefaults() *CreateResellerRequest`

NewCreateResellerRequestWithDefaults instantiates a new CreateResellerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateResellerRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateResellerRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateResellerRequest) SetName(v string)`

SetName sets Name field to given value.


### GetParentId

`func (o *CreateResellerRequest) GetParentId() int64`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *CreateResellerRequest) GetParentIdOk() (*int64, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *CreateResellerRequest) SetParentId(v int64)`

SetParentId sets ParentId field to given value.


### GetCurrencyIsoCode

`func (o *CreateResellerRequest) GetCurrencyIsoCode() string`

GetCurrencyIsoCode returns the CurrencyIsoCode field if non-nil, zero value otherwise.

### GetCurrencyIsoCodeOk

`func (o *CreateResellerRequest) GetCurrencyIsoCodeOk() (*string, bool)`

GetCurrencyIsoCodeOk returns a tuple with the CurrencyIsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyIsoCode

`func (o *CreateResellerRequest) SetCurrencyIsoCode(v string)`

SetCurrencyIsoCode sets CurrencyIsoCode field to given value.


### GetTermsOfServiceUrl

`func (o *CreateResellerRequest) GetTermsOfServiceUrl() string`

GetTermsOfServiceUrl returns the TermsOfServiceUrl field if non-nil, zero value otherwise.

### GetTermsOfServiceUrlOk

`func (o *CreateResellerRequest) GetTermsOfServiceUrlOk() (*string, bool)`

GetTermsOfServiceUrlOk returns a tuple with the TermsOfServiceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsOfServiceUrl

`func (o *CreateResellerRequest) SetTermsOfServiceUrl(v string)`

SetTermsOfServiceUrl sets TermsOfServiceUrl field to given value.

### HasTermsOfServiceUrl

`func (o *CreateResellerRequest) HasTermsOfServiceUrl() bool`

HasTermsOfServiceUrl returns a boolean if a field has been set.

### GetType

`func (o *CreateResellerRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateResellerRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateResellerRequest) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


