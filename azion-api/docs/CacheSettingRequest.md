# CacheSettingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**BrowserCache** | Pointer to [**BrowserCacheModuleRequest**](BrowserCacheModuleRequest.md) |  | [optional] 
**Modules** | Pointer to [**CacheSettingsModulesRequest**](CacheSettingsModulesRequest.md) |  | [optional] 

## Methods

### NewCacheSettingRequest

`func NewCacheSettingRequest(name string, ) *CacheSettingRequest`

NewCacheSettingRequest instantiates a new CacheSettingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheSettingRequestWithDefaults

`func NewCacheSettingRequestWithDefaults() *CacheSettingRequest`

NewCacheSettingRequestWithDefaults instantiates a new CacheSettingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CacheSettingRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CacheSettingRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CacheSettingRequest) SetName(v string)`

SetName sets Name field to given value.


### GetBrowserCache

`func (o *CacheSettingRequest) GetBrowserCache() BrowserCacheModuleRequest`

GetBrowserCache returns the BrowserCache field if non-nil, zero value otherwise.

### GetBrowserCacheOk

`func (o *CacheSettingRequest) GetBrowserCacheOk() (*BrowserCacheModuleRequest, bool)`

GetBrowserCacheOk returns a tuple with the BrowserCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrowserCache

`func (o *CacheSettingRequest) SetBrowserCache(v BrowserCacheModuleRequest)`

SetBrowserCache sets BrowserCache field to given value.

### HasBrowserCache

`func (o *CacheSettingRequest) HasBrowserCache() bool`

HasBrowserCache returns a boolean if a field has been set.

### GetModules

`func (o *CacheSettingRequest) GetModules() CacheSettingsModulesRequest`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *CacheSettingRequest) GetModulesOk() (*CacheSettingsModulesRequest, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *CacheSettingRequest) SetModules(v CacheSettingsModulesRequest)`

SetModules sets Modules field to given value.

### HasModules

`func (o *CacheSettingRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


