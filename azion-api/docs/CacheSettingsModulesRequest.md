# CacheSettingsModulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cache** | Pointer to [**CacheSettingsCacheModuleRequest**](CacheSettingsCacheModuleRequest.md) |  | [optional] 
**ApplicationAccelerator** | Pointer to [**CacheSettingsApplicationAcceleratorModuleRequest**](CacheSettingsApplicationAcceleratorModuleRequest.md) |  | [optional] 

## Methods

### NewCacheSettingsModulesRequest

`func NewCacheSettingsModulesRequest() *CacheSettingsModulesRequest`

NewCacheSettingsModulesRequest instantiates a new CacheSettingsModulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingsModulesRequestWithDefaults

`func NewCacheSettingsModulesRequestWithDefaults() *CacheSettingsModulesRequest`

NewCacheSettingsModulesRequestWithDefaults instantiates a new CacheSettingsModulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCache

`func (o *CacheSettingsModulesRequest) GetCache() CacheSettingsCacheModuleRequest`

GetCache returns the Cache field if non-nil, zero value otherwise.

### GetCacheOk

`func (o *CacheSettingsModulesRequest) GetCacheOk() (*CacheSettingsCacheModuleRequest, bool)`

GetCacheOk returns a tuple with the Cache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCache

`func (o *CacheSettingsModulesRequest) SetCache(v CacheSettingsCacheModuleRequest)`

SetCache sets Cache field to given value.

### HasCache

`func (o *CacheSettingsModulesRequest) HasCache() bool`

HasCache returns a boolean if a field has been set.

### GetApplicationAccelerator

`func (o *CacheSettingsModulesRequest) GetApplicationAccelerator() CacheSettingsApplicationAcceleratorModuleRequest`

GetApplicationAccelerator returns the ApplicationAccelerator field if non-nil, zero value otherwise.

### GetApplicationAcceleratorOk

`func (o *CacheSettingsModulesRequest) GetApplicationAcceleratorOk() (*CacheSettingsApplicationAcceleratorModuleRequest, bool)`

GetApplicationAcceleratorOk returns a tuple with the ApplicationAccelerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAccelerator

`func (o *CacheSettingsModulesRequest) SetApplicationAccelerator(v CacheSettingsApplicationAcceleratorModuleRequest)`

SetApplicationAccelerator sets ApplicationAccelerator field to given value.

### HasApplicationAccelerator

`func (o *CacheSettingsModulesRequest) HasApplicationAccelerator() bool`

HasApplicationAccelerator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


