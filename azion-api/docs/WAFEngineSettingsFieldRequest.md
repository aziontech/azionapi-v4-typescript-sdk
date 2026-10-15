# WAFEngineSettingsFieldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EngineVersion** | Pointer to [**EngineVersionEnum**](EngineVersionEnum.md) |  | [optional] [default to _2021_Q3]
**Type** | Pointer to [**WAFEngineSettingsFieldTypeEnum**](WAFEngineSettingsFieldTypeEnum.md) |  | [optional] [default to SCORE]
**Attributes** | Pointer to [**WAFEngineSettingsAttributesFieldRequest**](WAFEngineSettingsAttributesFieldRequest.md) |  | [optional] 

## Methods

### NewWAFEngineSettingsFieldRequest

`func NewWAFEngineSettingsFieldRequest() *WAFEngineSettingsFieldRequest`

NewWAFEngineSettingsFieldRequest instantiates a new WAFEngineSettingsFieldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFEngineSettingsFieldRequestWithDefaults

`func NewWAFEngineSettingsFieldRequestWithDefaults() *WAFEngineSettingsFieldRequest`

NewWAFEngineSettingsFieldRequestWithDefaults instantiates a new WAFEngineSettingsFieldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEngineVersion

`func (o *WAFEngineSettingsFieldRequest) GetEngineVersion() EngineVersionEnum`

GetEngineVersion returns the EngineVersion field if non-nil, zero value otherwise.

### GetEngineVersionOk

`func (o *WAFEngineSettingsFieldRequest) GetEngineVersionOk() (*EngineVersionEnum, bool)`

GetEngineVersionOk returns a tuple with the EngineVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEngineVersion

`func (o *WAFEngineSettingsFieldRequest) SetEngineVersion(v EngineVersionEnum)`

SetEngineVersion sets EngineVersion field to given value.

### HasEngineVersion

`func (o *WAFEngineSettingsFieldRequest) HasEngineVersion() bool`

HasEngineVersion returns a boolean if a field has been set.

### GetType

`func (o *WAFEngineSettingsFieldRequest) GetType() WAFEngineSettingsFieldTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WAFEngineSettingsFieldRequest) GetTypeOk() (*WAFEngineSettingsFieldTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WAFEngineSettingsFieldRequest) SetType(v WAFEngineSettingsFieldTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *WAFEngineSettingsFieldRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *WAFEngineSettingsFieldRequest) GetAttributes() WAFEngineSettingsAttributesFieldRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *WAFEngineSettingsFieldRequest) GetAttributesOk() (*WAFEngineSettingsAttributesFieldRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *WAFEngineSettingsFieldRequest) SetAttributes(v WAFEngineSettingsAttributesFieldRequest)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *WAFEngineSettingsFieldRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


