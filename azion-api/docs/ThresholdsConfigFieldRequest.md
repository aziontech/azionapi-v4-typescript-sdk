# ThresholdsConfigFieldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Threat** | [**ThreatEnum**](ThreatEnum.md) |  | 
**Sensitivity** | Pointer to [**SensitivityEnum**](SensitivityEnum.md) |  | [optional] [default to MEDIUM]

## Methods

### NewThresholdsConfigFieldRequest

`func NewThresholdsConfigFieldRequest(threat ThreatEnum, ) *ThresholdsConfigFieldRequest`

NewThresholdsConfigFieldRequest instantiates a new ThresholdsConfigFieldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdsConfigFieldRequestWithDefaults

`func NewThresholdsConfigFieldRequestWithDefaults() *ThresholdsConfigFieldRequest`

NewThresholdsConfigFieldRequestWithDefaults instantiates a new ThresholdsConfigFieldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetThreat

`func (o *ThresholdsConfigFieldRequest) GetThreat() ThreatEnum`

GetThreat returns the Threat field if non-nil, zero value otherwise.

### GetThreatOk

`func (o *ThresholdsConfigFieldRequest) GetThreatOk() (*ThreatEnum, bool)`

GetThreatOk returns a tuple with the Threat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreat

`func (o *ThresholdsConfigFieldRequest) SetThreat(v ThreatEnum)`

SetThreat sets Threat field to given value.


### GetSensitivity

`func (o *ThresholdsConfigFieldRequest) GetSensitivity() SensitivityEnum`

GetSensitivity returns the Sensitivity field if non-nil, zero value otherwise.

### GetSensitivityOk

`func (o *ThresholdsConfigFieldRequest) GetSensitivityOk() (*SensitivityEnum, bool)`

GetSensitivityOk returns a tuple with the Sensitivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSensitivity

`func (o *ThresholdsConfigFieldRequest) SetSensitivity(v SensitivityEnum)`

SetSensitivity sets Sensitivity field to given value.

### HasSensitivity

`func (o *ThresholdsConfigFieldRequest) HasSensitivity() bool`

HasSensitivity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


