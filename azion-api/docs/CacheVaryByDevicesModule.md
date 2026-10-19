# CacheVaryByDevicesModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**CacheVaryByDevicesModuleBehaviorEnum**](CacheVaryByDevicesModuleBehaviorEnum.md) |  | [optional] [default to IGNORE]
**DeviceGroup** | Pointer to **[]int64** |  | [optional] 

## Methods

### NewCacheVaryByDevicesModule

`func NewCacheVaryByDevicesModule() *CacheVaryByDevicesModule`

NewCacheVaryByDevicesModule instantiates a new CacheVaryByDevicesModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheVaryByDevicesModuleWithDefaults

`func NewCacheVaryByDevicesModuleWithDefaults() *CacheVaryByDevicesModule`

NewCacheVaryByDevicesModuleWithDefaults instantiates a new CacheVaryByDevicesModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *CacheVaryByDevicesModule) GetBehavior() CacheVaryByDevicesModuleBehaviorEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *CacheVaryByDevicesModule) GetBehaviorOk() (*CacheVaryByDevicesModuleBehaviorEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *CacheVaryByDevicesModule) SetBehavior(v CacheVaryByDevicesModuleBehaviorEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *CacheVaryByDevicesModule) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetDeviceGroup

`func (o *CacheVaryByDevicesModule) GetDeviceGroup() []int64`

GetDeviceGroup returns the DeviceGroup field if non-nil, zero value otherwise.

### GetDeviceGroupOk

`func (o *CacheVaryByDevicesModule) GetDeviceGroupOk() (*[]int64, bool)`

GetDeviceGroupOk returns a tuple with the DeviceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceGroup

`func (o *CacheVaryByDevicesModule) SetDeviceGroup(v []int64)`

SetDeviceGroup sets DeviceGroup field to given value.

### HasDeviceGroup

`func (o *CacheVaryByDevicesModule) HasDeviceGroup() bool`

HasDeviceGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


