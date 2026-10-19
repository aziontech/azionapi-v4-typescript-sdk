# HMACRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **bool** |  | 
**Config** | Pointer to [**NullableAWS4HMACRequest**](AWS4HMACRequest.md) |  | [optional] 

## Methods

### NewHMACRequest

`func NewHMACRequest(enabled bool, ) *HMACRequest`

NewHMACRequest instantiates a new HMACRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHMACRequestWithDefaults

`func NewHMACRequestWithDefaults() *HMACRequest`

NewHMACRequestWithDefaults instantiates a new HMACRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *HMACRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *HMACRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *HMACRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetConfig

`func (o *HMACRequest) GetConfig() AWS4HMACRequest`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *HMACRequest) GetConfigOk() (*AWS4HMACRequest, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *HMACRequest) SetConfig(v AWS4HMACRequest)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *HMACRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### SetConfigNil

`func (o *HMACRequest) SetConfigNil(b bool)`

 SetConfigNil sets the value for Config to be an explicit nil

### UnsetConfig
`func (o *HMACRequest) UnsetConfig()`

UnsetConfig ensures that no value is present for Config, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


