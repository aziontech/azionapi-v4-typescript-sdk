# CacheSettingsCacheModuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**CacheSettingsCacheModuleBehaviorEnum**](CacheSettingsCacheModuleBehaviorEnum.md) |  | [optional] [default to HONOR]
**MaxAge** | Pointer to **int64** | To use a value lower than 60s, the Application Acceleration module must be enabled on the Application. | [optional] [default to 60]
**StaleCache** | Pointer to [**StateCacheModuleRequest**](StateCacheModuleRequest.md) |  | [optional] 
**LargeFileCache** | Pointer to [**LargeFileCacheModuleRequest**](LargeFileCacheModuleRequest.md) |  | [optional] 
**TieredCache** | Pointer to [**NullableCacheSettingsTieredCacheModuleRequest**](CacheSettingsTieredCacheModuleRequest.md) |  | [optional] 

## Methods

### NewCacheSettingsCacheModuleRequest

`func NewCacheSettingsCacheModuleRequest() *CacheSettingsCacheModuleRequest`

NewCacheSettingsCacheModuleRequest instantiates a new CacheSettingsCacheModuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingsCacheModuleRequestWithDefaults

`func NewCacheSettingsCacheModuleRequestWithDefaults() *CacheSettingsCacheModuleRequest`

NewCacheSettingsCacheModuleRequestWithDefaults instantiates a new CacheSettingsCacheModuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *CacheSettingsCacheModuleRequest) GetBehavior() CacheSettingsCacheModuleBehaviorEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *CacheSettingsCacheModuleRequest) GetBehaviorOk() (*CacheSettingsCacheModuleBehaviorEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *CacheSettingsCacheModuleRequest) SetBehavior(v CacheSettingsCacheModuleBehaviorEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *CacheSettingsCacheModuleRequest) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetMaxAge

`func (o *CacheSettingsCacheModuleRequest) GetMaxAge() int64`

GetMaxAge returns the MaxAge field if non-nil, zero value otherwise.

### GetMaxAgeOk

`func (o *CacheSettingsCacheModuleRequest) GetMaxAgeOk() (*int64, bool)`

GetMaxAgeOk returns a tuple with the MaxAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAge

`func (o *CacheSettingsCacheModuleRequest) SetMaxAge(v int64)`

SetMaxAge sets MaxAge field to given value.

### HasMaxAge

`func (o *CacheSettingsCacheModuleRequest) HasMaxAge() bool`

HasMaxAge returns a boolean if a field has been set.

### GetStaleCache

`func (o *CacheSettingsCacheModuleRequest) GetStaleCache() StateCacheModuleRequest`

GetStaleCache returns the StaleCache field if non-nil, zero value otherwise.

### GetStaleCacheOk

`func (o *CacheSettingsCacheModuleRequest) GetStaleCacheOk() (*StateCacheModuleRequest, bool)`

GetStaleCacheOk returns a tuple with the StaleCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaleCache

`func (o *CacheSettingsCacheModuleRequest) SetStaleCache(v StateCacheModuleRequest)`

SetStaleCache sets StaleCache field to given value.

### HasStaleCache

`func (o *CacheSettingsCacheModuleRequest) HasStaleCache() bool`

HasStaleCache returns a boolean if a field has been set.

### GetLargeFileCache

`func (o *CacheSettingsCacheModuleRequest) GetLargeFileCache() LargeFileCacheModuleRequest`

GetLargeFileCache returns the LargeFileCache field if non-nil, zero value otherwise.

### GetLargeFileCacheOk

`func (o *CacheSettingsCacheModuleRequest) GetLargeFileCacheOk() (*LargeFileCacheModuleRequest, bool)`

GetLargeFileCacheOk returns a tuple with the LargeFileCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLargeFileCache

`func (o *CacheSettingsCacheModuleRequest) SetLargeFileCache(v LargeFileCacheModuleRequest)`

SetLargeFileCache sets LargeFileCache field to given value.

### HasLargeFileCache

`func (o *CacheSettingsCacheModuleRequest) HasLargeFileCache() bool`

HasLargeFileCache returns a boolean if a field has been set.

### GetTieredCache

`func (o *CacheSettingsCacheModuleRequest) GetTieredCache() CacheSettingsTieredCacheModuleRequest`

GetTieredCache returns the TieredCache field if non-nil, zero value otherwise.

### GetTieredCacheOk

`func (o *CacheSettingsCacheModuleRequest) GetTieredCacheOk() (*CacheSettingsTieredCacheModuleRequest, bool)`

GetTieredCacheOk returns a tuple with the TieredCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTieredCache

`func (o *CacheSettingsCacheModuleRequest) SetTieredCache(v CacheSettingsTieredCacheModuleRequest)`

SetTieredCache sets TieredCache field to given value.

### HasTieredCache

`func (o *CacheSettingsCacheModuleRequest) HasTieredCache() bool`

HasTieredCache returns a boolean if a field has been set.

### SetTieredCacheNil

`func (o *CacheSettingsCacheModuleRequest) SetTieredCacheNil(b bool)`

 SetTieredCacheNil sets the value for TieredCache to be an explicit nil

### UnsetTieredCache
`func (o *CacheSettingsCacheModuleRequest) UnsetTieredCache()`

UnsetTieredCache ensures that no value is present for TieredCache, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


