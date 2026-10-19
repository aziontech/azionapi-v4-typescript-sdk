# PatchedCacheSettingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**BrowserCache** | Pointer to [**BrowserCacheModuleRequest**](BrowserCacheModuleRequest.md) |  | [optional] 
**Modules** | Pointer to [**CacheSettingsModulesRequest**](CacheSettingsModulesRequest.md) |  | [optional] 

## Methods

### NewPatchedCacheSettingRequest

`func NewPatchedCacheSettingRequest() *PatchedCacheSettingRequest`

NewPatchedCacheSettingRequest instantiates a new PatchedCacheSettingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedCacheSettingRequestWithDefaults

`func NewPatchedCacheSettingRequestWithDefaults() *PatchedCacheSettingRequest`

NewPatchedCacheSettingRequestWithDefaults instantiates a new PatchedCacheSettingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedCacheSettingRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedCacheSettingRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedCacheSettingRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedCacheSettingRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBrowserCache

`func (o *PatchedCacheSettingRequest) GetBrowserCache() BrowserCacheModuleRequest`

GetBrowserCache returns the BrowserCache field if non-nil, zero value otherwise.

### GetBrowserCacheOk

`func (o *PatchedCacheSettingRequest) GetBrowserCacheOk() (*BrowserCacheModuleRequest, bool)`

GetBrowserCacheOk returns a tuple with the BrowserCache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrowserCache

`func (o *PatchedCacheSettingRequest) SetBrowserCache(v BrowserCacheModuleRequest)`

SetBrowserCache sets BrowserCache field to given value.

### HasBrowserCache

`func (o *PatchedCacheSettingRequest) HasBrowserCache() bool`

HasBrowserCache returns a boolean if a field has been set.

### GetModules

`func (o *PatchedCacheSettingRequest) GetModules() CacheSettingsModulesRequest`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *PatchedCacheSettingRequest) GetModulesOk() (*CacheSettingsModulesRequest, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *PatchedCacheSettingRequest) SetModules(v CacheSettingsModulesRequest)`

SetModules sets Modules field to given value.

### HasModules

`func (o *PatchedCacheSettingRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


