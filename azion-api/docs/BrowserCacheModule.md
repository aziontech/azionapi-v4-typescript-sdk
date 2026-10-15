# BrowserCacheModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**BrowserCacheModuleBehaviorEnum**](BrowserCacheModuleBehaviorEnum.md) |  | [optional] [default to HONOR]
**MaxAge** | Pointer to **int64** |  | [optional] [default to 0]

## Methods

### NewBrowserCacheModule

`func NewBrowserCacheModule() *BrowserCacheModule`

NewBrowserCacheModule instantiates a new BrowserCacheModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrowserCacheModuleWithDefaults

`func NewBrowserCacheModuleWithDefaults() *BrowserCacheModule`

NewBrowserCacheModuleWithDefaults instantiates a new BrowserCacheModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *BrowserCacheModule) GetBehavior() BrowserCacheModuleBehaviorEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *BrowserCacheModule) GetBehaviorOk() (*BrowserCacheModuleBehaviorEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *BrowserCacheModule) SetBehavior(v BrowserCacheModuleBehaviorEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *BrowserCacheModule) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetMaxAge

`func (o *BrowserCacheModule) GetMaxAge() int64`

GetMaxAge returns the MaxAge field if non-nil, zero value otherwise.

### GetMaxAgeOk

`func (o *BrowserCacheModule) GetMaxAgeOk() (*int64, bool)`

GetMaxAgeOk returns a tuple with the MaxAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAge

`func (o *BrowserCacheModule) SetMaxAge(v int64)`

SetMaxAge sets MaxAge field to given value.

### HasMaxAge

`func (o *BrowserCacheModule) HasMaxAge() bool`

HasMaxAge returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


