# Record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Description** | Pointer to **string** |  | [optional] [default to ""]
**Name** | **string** |  | 
**Ttl** | Pointer to **int64** |  | [optional] [default to 3600]
**Type** | **string** | * &#x60;A&#x60; - A * &#x60;AAAA&#x60; - AAAA * &#x60;ANAME&#x60; - ANAME * &#x60;CNAME&#x60; - CNAME * &#x60;MX&#x60; - MX * &#x60;NS&#x60; - NS * &#x60;PTR&#x60; - PTR * &#x60;SRV&#x60; - SRV * &#x60;TXT&#x60; - TXT * &#x60;CAA&#x60; - CAA * &#x60;DS&#x60; - DS | 
**Rdata** | **[]string** |  | 
**Policy** | Pointer to **string** | * &#x60;simple&#x60; - simple * &#x60;weighted&#x60; - weighted | [optional] [default to "simple"]
**Weight** | Pointer to **int64** |  | [optional] [default to 255]

## Methods

### NewRecord

`func NewRecord(id int64, name string, type_ string, rdata []string, ) *Record`

NewRecord instantiates a new Record object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecordWithDefaults

`func NewRecordWithDefaults() *Record`

NewRecordWithDefaults instantiates a new Record object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Record) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Record) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Record) SetId(v int64)`

SetId sets Id field to given value.


### GetDescription

`func (o *Record) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Record) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Record) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Record) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *Record) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Record) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Record) SetName(v string)`

SetName sets Name field to given value.


### GetTtl

`func (o *Record) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *Record) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *Record) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *Record) HasTtl() bool`

HasTtl returns a boolean if a field has been set.

### GetType

`func (o *Record) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Record) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Record) SetType(v string)`

SetType sets Type field to given value.


### GetRdata

`func (o *Record) GetRdata() []string`

GetRdata returns the Rdata field if non-nil, zero value otherwise.

### GetRdataOk

`func (o *Record) GetRdataOk() (*[]string, bool)`

GetRdataOk returns a tuple with the Rdata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRdata

`func (o *Record) SetRdata(v []string)`

SetRdata sets Rdata field to given value.


### GetPolicy

`func (o *Record) GetPolicy() string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *Record) GetPolicyOk() (*string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *Record) SetPolicy(v string)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *Record) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetWeight

`func (o *Record) GetWeight() int64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *Record) GetWeightOk() (*int64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *Record) SetWeight(v int64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *Record) HasWeight() bool`

HasWeight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


