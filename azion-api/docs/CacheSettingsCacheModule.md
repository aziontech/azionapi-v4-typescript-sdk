# CacheSettingsCacheModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**CacheSettingsCacheModuleBehaviorEnum**](CacheSettingsCacheModuleBehaviorEnum.md) |  | [optional] [default to HONOR]
**MaxAge** | Pointer to **int64** | To use a value lower than 60s, the Application Acceleration module must be enabled on the Application. | [optional] [default to 60]
**StaleCache** | Pointer to [**StateCacheModule**](StateCacheModule.md) |  | [optional] 
**LargeFileCache** | Pointer to [**LargeFileCacheModule**](LargeFileCacheModule.md) |  | [optional] 
**TieredCache** | Pointer to [**NullableCacheSettingsTieredCacheModule**](CacheSettingsTieredCacheModule.md) |  | [optional] 

## Methods

### NewCacheSettingsCacheModule

`func NewCacheSettingsCacheModule() *CacheSettingsCacheModule`

NewCacheSettingsCacheModule instantiates a new CacheSettingsCacheModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingsCacheModuleWithDefaults

`func NewCacheSettingsCacheModuleWithDefaults() *CacheSettingsCacheModule`

NewCacheSettingsCacheModuleWithDefaults instantiates a new CacheSettingsCacheModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *CacheSettingsCacheModule) GetBehavior() CacheSettingsCacheModuleBehaviorEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *CacheSettingsCacheModule) GetBehaviorOk() (*CacheSettingsCacheModuleBehaviorEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *CacheSettingsCacheModule) SetBehavior(v CacheSettingsCacheModuleBehaviorEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *CacheSettingsCacheModule) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetMaxAge

`func (o *CacheSettingsCacheModule) GetMaxAge() int64`

GetMaxAge returns the MaxAge field if non-nil, zero value otherwise.

### GetMaxAgeOk

`func (o *CacheSettingsCacheModule) GetMaxAgeOk() (*int64, bool)`

GetMaxAgeOk returns a tuple with the MaxAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAge

`func (o *CacheSettingsCacheModule) SetMaxAge(v int64)`

SetMaxAge sets MaxAge field to given value.

### HasMaxAge

`func (o *CacheSettingsCacheModule) HasMaxAge() bool`

HasMaxAge returns a boolean if a field has been set.

### GetStaleCache

`func (o *CacheSettingsCacheModule) GetStaleCache() StateCacheModule`

GetStaleCache returns the StaleCache field if non-nil, zero value otherwise.

### GetStaleCacheOk

`func (o *CacheSettingsCacheModule) GetStaleCacheOk() (*StateCacheModule, bool)`

GetStaleCacheOk returns a tuple with the StaleCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaleCache

`func (o *CacheSettingsCacheModule) SetStaleCache(v StateCacheModule)`

SetStaleCache sets StaleCache field to given value.

### HasStaleCache

`func (o *CacheSettingsCacheModule) HasStaleCache() bool`

HasStaleCache returns a boolean if a field has been set.

### GetLargeFileCache

`func (o *CacheSettingsCacheModule) GetLargeFileCache() LargeFileCacheModule`

GetLargeFileCache returns the LargeFileCache field if non-nil, zero value otherwise.

### GetLargeFileCacheOk

`func (o *CacheSettingsCacheModule) GetLargeFileCacheOk() (*LargeFileCacheModule, bool)`

GetLargeFileCacheOk returns a tuple with the LargeFileCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLargeFileCache

`func (o *CacheSettingsCacheModule) SetLargeFileCache(v LargeFileCacheModule)`

SetLargeFileCache sets LargeFileCache field to given value.

### HasLargeFileCache

`func (o *CacheSettingsCacheModule) HasLargeFileCache() bool`

HasLargeFileCache returns a boolean if a field has been set.

### GetTieredCache

`func (o *CacheSettingsCacheModule) GetTieredCache() CacheSettingsTieredCacheModule`

GetTieredCache returns the TieredCache field if non-nil, zero value otherwise.

### GetTieredCacheOk

`func (o *CacheSettingsCacheModule) GetTieredCacheOk() (*CacheSettingsTieredCacheModule, bool)`

GetTieredCacheOk returns a tuple with the TieredCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTieredCache

`func (o *CacheSettingsCacheModule) SetTieredCache(v CacheSettingsTieredCacheModule)`

SetTieredCache sets TieredCache field to given value.

### HasTieredCache

`func (o *CacheSettingsCacheModule) HasTieredCache() bool`

HasTieredCache returns a boolean if a field has been set.

### SetTieredCacheNil

`func (o *CacheSettingsCacheModule) SetTieredCacheNil(b bool)`

 SetTieredCacheNil sets the value for TieredCache to be an explicit nil

### UnsetTieredCache
`func (o *CacheSettingsCacheModule) UnsetTieredCache()`

UnsetTieredCache ensures that no value is present for TieredCache, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


