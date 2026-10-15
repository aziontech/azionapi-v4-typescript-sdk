# CacheVaryByDevicesModuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**CacheVaryByDevicesModuleBehaviorEnum**](CacheVaryByDevicesModuleBehaviorEnum.md) |  | [optional] [default to IGNORE]
**DeviceGroup** | Pointer to **[]int64** |  | [optional] 

## Methods

### NewCacheVaryByDevicesModuleRequest

`func NewCacheVaryByDevicesModuleRequest() *CacheVaryByDevicesModuleRequest`

NewCacheVaryByDevicesModuleRequest instantiates a new CacheVaryByDevicesModuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheVaryByDevicesModuleRequestWithDefaults

`func NewCacheVaryByDevicesModuleRequestWithDefaults() *CacheVaryByDevicesModuleRequest`

NewCacheVaryByDevicesModuleRequestWithDefaults instantiates a new CacheVaryByDevicesModuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *CacheVaryByDevicesModuleRequest) GetBehavior() CacheVaryByDevicesModuleBehaviorEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *CacheVaryByDevicesModuleRequest) GetBehaviorOk() (*CacheVaryByDevicesModuleBehaviorEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *CacheVaryByDevicesModuleRequest) SetBehavior(v CacheVaryByDevicesModuleBehaviorEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *CacheVaryByDevicesModuleRequest) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetDeviceGroup

`func (o *CacheVaryByDevicesModuleRequest) GetDeviceGroup() []int64`

GetDeviceGroup returns the DeviceGroup field if non-nil, zero value otherwise.

### GetDeviceGroupOk

`func (o *CacheVaryByDevicesModuleRequest) GetDeviceGroupOk() (*[]int64, bool)`

GetDeviceGroupOk returns a tuple with the DeviceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceGroup

`func (o *CacheVaryByDevicesModuleRequest) SetDeviceGroup(v []int64)`

SetDeviceGroup sets DeviceGroup field to given value.

### HasDeviceGroup

`func (o *CacheVaryByDevicesModuleRequest) HasDeviceGroup() bool`

HasDeviceGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


