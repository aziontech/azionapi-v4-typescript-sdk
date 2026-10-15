# PatchedRecordRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] [default to ""]
**Name** | Pointer to **string** |  | [optional] 
**Ttl** | Pointer to **int64** |  | [optional] [default to 3600]
**Type** | Pointer to **string** | * &#x60;A&#x60; - A * &#x60;AAAA&#x60; - AAAA * &#x60;ANAME&#x60; - ANAME * &#x60;CNAME&#x60; - CNAME * &#x60;MX&#x60; - MX * &#x60;NS&#x60; - NS * &#x60;PTR&#x60; - PTR * &#x60;SRV&#x60; - SRV * &#x60;TXT&#x60; - TXT * &#x60;CAA&#x60; - CAA * &#x60;DS&#x60; - DS | [optional] 
**Rdata** | Pointer to **[]string** |  | [optional] 
**Policy** | Pointer to **string** | * &#x60;simple&#x60; - simple * &#x60;weighted&#x60; - weighted | [optional] [default to "simple"]
**Weight** | Pointer to **int64** |  | [optional] [default to 255]

## Methods

### NewPatchedRecordRequest

`func NewPatchedRecordRequest() *PatchedRecordRequest`

NewPatchedRecordRequest instantiates a new PatchedRecordRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedRecordRequestWithDefaults

`func NewPatchedRecordRequestWithDefaults() *PatchedRecordRequest`

NewPatchedRecordRequestWithDefaults instantiates a new PatchedRecordRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *PatchedRecordRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PatchedRecordRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PatchedRecordRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PatchedRecordRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *PatchedRecordRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedRecordRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedRecordRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedRecordRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTtl

`func (o *PatchedRecordRequest) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *PatchedRecordRequest) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *PatchedRecordRequest) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *PatchedRecordRequest) HasTtl() bool`

HasTtl returns a boolean if a field has been set.

### GetType

`func (o *PatchedRecordRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedRecordRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedRecordRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PatchedRecordRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRdata

`func (o *PatchedRecordRequest) GetRdata() []string`

GetRdata returns the Rdata field if non-nil, zero value otherwise.

### GetRdataOk

`func (o *PatchedRecordRequest) GetRdataOk() (*[]string, bool)`

GetRdataOk returns a tuple with the Rdata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRdata

`func (o *PatchedRecordRequest) SetRdata(v []string)`

SetRdata sets Rdata field to given value.

### HasRdata

`func (o *PatchedRecordRequest) HasRdata() bool`

HasRdata returns a boolean if a field has been set.

### GetPolicy

`func (o *PatchedRecordRequest) GetPolicy() string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *PatchedRecordRequest) GetPolicyOk() (*string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *PatchedRecordRequest) SetPolicy(v string)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *PatchedRecordRequest) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetWeight

`func (o *PatchedRecordRequest) GetWeight() int64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *PatchedRecordRequest) GetWeightOk() (*int64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *PatchedRecordRequest) SetWeight(v int64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *PatchedRecordRequest) HasWeight() bool`

HasWeight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


