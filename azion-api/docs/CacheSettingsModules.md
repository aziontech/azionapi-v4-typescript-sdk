# CacheSettingsModules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cache** | Pointer to [**CacheSettingsCacheModule**](CacheSettingsCacheModule.md) |  | [optional] 
**ApplicationAccelerator** | Pointer to [**CacheSettingsApplicationAcceleratorModule**](CacheSettingsApplicationAcceleratorModule.md) |  | [optional] 

## Methods

### NewCacheSettingsModules

`func NewCacheSettingsModules() *CacheSettingsModules`

NewCacheSettingsModules instantiates a new CacheSettingsModules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingsModulesWithDefaults

`func NewCacheSettingsModulesWithDefaults() *CacheSettingsModules`

NewCacheSettingsModulesWithDefaults instantiates a new CacheSettingsModules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCache

`func (o *CacheSettingsModules) GetCache() CacheSettingsCacheModule`

GetCache returns the Cache field if non-nil, zero value otherwise.

### GetCacheOk

`func (o *CacheSettingsModules) GetCacheOk() (*CacheSettingsCacheModule, bool)`

GetCacheOk returns a tuple with the Cache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCache

`func (o *CacheSettingsModules) SetCache(v CacheSettingsCacheModule)`

SetCache sets Cache field to given value.

### HasCache

`func (o *CacheSettingsModules) HasCache() bool`

HasCache returns a boolean if a field has been set.

### GetApplicationAccelerator

`func (o *CacheSettingsModules) GetApplicationAccelerator() CacheSettingsApplicationAcceleratorModule`

GetApplicationAccelerator returns the ApplicationAccelerator field if non-nil, zero value otherwise.

### GetApplicationAcceleratorOk

`func (o *CacheSettingsModules) GetApplicationAcceleratorOk() (*CacheSettingsApplicationAcceleratorModule, bool)`

GetApplicationAcceleratorOk returns a tuple with the ApplicationAccelerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAccelerator

`func (o *CacheSettingsModules) SetApplicationAccelerator(v CacheSettingsApplicationAcceleratorModule)`

SetApplicationAccelerator sets ApplicationAccelerator field to given value.

### HasApplicationAccelerator

`func (o *CacheSettingsModules) HasApplicationAccelerator() bool`

HasApplicationAccelerator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


