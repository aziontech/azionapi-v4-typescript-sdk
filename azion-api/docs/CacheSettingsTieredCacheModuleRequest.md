# CacheSettingsTieredCacheModuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Topology** | Pointer to [**TopologyEnum**](TopologyEnum.md) |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewCacheSettingsTieredCacheModuleRequest

`func NewCacheSettingsTieredCacheModuleRequest() *CacheSettingsTieredCacheModuleRequest`

NewCacheSettingsTieredCacheModuleRequest instantiates a new CacheSettingsTieredCacheModuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingsTieredCacheModuleRequestWithDefaults

`func NewCacheSettingsTieredCacheModuleRequestWithDefaults() *CacheSettingsTieredCacheModuleRequest`

NewCacheSettingsTieredCacheModuleRequestWithDefaults instantiates a new CacheSettingsTieredCacheModuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTopology

`func (o *CacheSettingsTieredCacheModuleRequest) GetTopology() TopologyEnum`

GetTopology returns the Topology field if non-nil, zero value otherwise.

### GetTopologyOk

`func (o *CacheSettingsTieredCacheModuleRequest) GetTopologyOk() (*TopologyEnum, bool)`

GetTopologyOk returns a tuple with the Topology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopology

`func (o *CacheSettingsTieredCacheModuleRequest) SetTopology(v TopologyEnum)`

SetTopology sets Topology field to given value.

### HasTopology

`func (o *CacheSettingsTieredCacheModuleRequest) HasTopology() bool`

HasTopology returns a boolean if a field has been set.

### GetEnabled

`func (o *CacheSettingsTieredCacheModuleRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CacheSettingsTieredCacheModuleRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CacheSettingsTieredCacheModuleRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *CacheSettingsTieredCacheModuleRequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


