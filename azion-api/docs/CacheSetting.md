# CacheSetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**BrowserCache** | Pointer to [**BrowserCacheModule**](BrowserCacheModule.md) |  | [optional] 
**Modules** | Pointer to [**CacheSettingsModules**](CacheSettingsModules.md) |  | [optional] 
**CreatedAt** | **NullableTime** |  | [readonly] 

## Methods

### NewCacheSetting

`func NewCacheSetting(id int64, name string, createdAt NullableTime, ) *CacheSetting`

NewCacheSetting instantiates a new CacheSetting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingWithDefaults

`func NewCacheSettingWithDefaults() *CacheSetting`

NewCacheSettingWithDefaults instantiates a new CacheSetting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CacheSetting) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CacheSetting) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CacheSetting) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *CacheSetting) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CacheSetting) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CacheSetting) SetName(v string)`

SetName sets Name field to given value.


### GetBrowserCache

`func (o *CacheSetting) GetBrowserCache() BrowserCacheModule`

GetBrowserCache returns the BrowserCache field if non-nil, zero value otherwise.

### GetBrowserCacheOk

`func (o *CacheSetting) GetBrowserCacheOk() (*BrowserCacheModule, bool)`

GetBrowserCacheOk returns a tuple with the BrowserCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrowserCache

`func (o *CacheSetting) SetBrowserCache(v BrowserCacheModule)`

SetBrowserCache sets BrowserCache field to given value.

### HasBrowserCache

`func (o *CacheSetting) HasBrowserCache() bool`

HasBrowserCache returns a boolean if a field has been set.

### GetModules

`func (o *CacheSetting) GetModules() CacheSettingsModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *CacheSetting) GetModulesOk() (*CacheSettingsModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *CacheSetting) SetModules(v CacheSettingsModules)`

SetModules sets Modules field to given value.

### HasModules

`func (o *CacheSetting) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetCreatedAt

`func (o *CacheSetting) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CacheSetting) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CacheSetting) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *CacheSetting) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *CacheSetting) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


