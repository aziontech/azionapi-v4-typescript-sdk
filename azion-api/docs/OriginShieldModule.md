# OriginShieldModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** |  | [optional] [default to false]
**Config** | Pointer to [**NullableOriginShieldConfig**](OriginShieldConfig.md) |  | [optional] 

## Methods

### NewOriginShieldModule

`func NewOriginShieldModule() *OriginShieldModule`

NewOriginShieldModule instantiates a new OriginShieldModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOriginShieldModuleWithDefaults

`func NewOriginShieldModuleWithDefaults() *OriginShieldModule`

NewOriginShieldModuleWithDefaults instantiates a new OriginShieldModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *OriginShieldModule) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *OriginShieldModule) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *OriginShieldModule) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *OriginShieldModule) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetConfig

`func (o *OriginShieldModule) GetConfig() OriginShieldConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *OriginShieldModule) GetConfigOk() (*OriginShieldConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *OriginShieldModule) SetConfig(v OriginShieldConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *OriginShieldModule) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### SetConfigNil

`func (o *OriginShieldModule) SetConfigNil(b bool)`

 SetConfigNil sets the value for Config to be an explicit nil

### UnsetConfig
`func (o *OriginShieldModule) UnsetConfig()`

UnsetConfig ensures that no value is present for Config, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


