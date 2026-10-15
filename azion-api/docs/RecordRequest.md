# RecordRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] [default to ""]
**Name** | **string** |  | 
**Ttl** | Pointer to **int64** |  | [optional] [default to 3600]
**Type** | **string** | * &#x60;A&#x60; - A * &#x60;AAAA&#x60; - AAAA * &#x60;ANAME&#x60; - ANAME * &#x60;CNAME&#x60; - CNAME * &#x60;MX&#x60; - MX * &#x60;NS&#x60; - NS * &#x60;PTR&#x60; - PTR * &#x60;SRV&#x60; - SRV * &#x60;TXT&#x60; - TXT * &#x60;CAA&#x60; - CAA * &#x60;DS&#x60; - DS | 
**Rdata** | **[]string** |  | 
**Policy** | Pointer to **string** | * &#x60;simple&#x60; - simple * &#x60;weighted&#x60; - weighted | [optional] [default to "simple"]
**Weight** | Pointer to **int64** |  | [optional] [default to 255]

## Methods

### NewRecordRequest

`func NewRecordRequest(name string, type_ string, rdata []string, ) *RecordRequest`

NewRecordRequest instantiates a new RecordRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecordRequestWithDefaults

`func NewRecordRequestWithDefaults() *RecordRequest`

NewRecordRequestWithDefaults instantiates a new RecordRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RecordRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RecordRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RecordRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RecordRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RecordRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RecordRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RecordRequest) SetName(v string)`

SetName sets Name field to given value.


### GetTtl

`func (o *RecordRequest) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *RecordRequest) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *RecordRequest) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *RecordRequest) HasTtl() bool`

HasTtl returns a boolean if a field has been set.

### GetType

`func (o *RecordRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RecordRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RecordRequest) SetType(v string)`

SetType sets Type field to given value.


### GetRdata

`func (o *RecordRequest) GetRdata() []string`

GetRdata returns the Rdata field if non-nil, zero value otherwise.

### GetRdataOk

`func (o *RecordRequest) GetRdataOk() (*[]string, bool)`

GetRdataOk returns a tuple with the Rdata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRdata

`func (o *RecordRequest) SetRdata(v []string)`

SetRdata sets Rdata field to given value.


### GetPolicy

`func (o *RecordRequest) GetPolicy() string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *RecordRequest) GetPolicyOk() (*string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *RecordRequest) SetPolicy(v string)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *RecordRequest) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetWeight

`func (o *RecordRequest) GetWeight() int64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *RecordRequest) GetWeightOk() (*int64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *RecordRequest) SetWeight(v int64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *RecordRequest) HasWeight() bool`

HasWeight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


