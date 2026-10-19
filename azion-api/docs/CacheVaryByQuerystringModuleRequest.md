# CacheVaryByQuerystringModuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Behavior** | Pointer to [**FirewallBehaviorModeEnum**](FirewallBehaviorModeEnum.md) |  | [optional] [default to IGNORE]
**Fields** | Pointer to **[]string** |  | [optional] [default to {}]
**SortEnabled** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewCacheVaryByQuerystringModuleRequest

`func NewCacheVaryByQuerystringModuleRequest() *CacheVaryByQuerystringModuleRequest`

NewCacheVaryByQuerystringModuleRequest instantiates a new CacheVaryByQuerystringModuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCacheVaryByQuerystringModuleRequestWithDefaults

`func NewCacheVaryByQuerystringModuleRequestWithDefaults() *CacheVaryByQuerystringModuleRequest`

NewCacheVaryByQuerystringModuleRequestWithDefaults instantiates a new CacheVaryByQuerystringModuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBehavior

`func (o *CacheVaryByQuerystringModuleRequest) GetBehavior() FirewallBehaviorModeEnum`

GetBehavior returns the Behavior field if non-nil, zero value otherwise.

### GetBehaviorOk

`func (o *CacheVaryByQuerystringModuleRequest) GetBehaviorOk() (*FirewallBehaviorModeEnum, bool)`

GetBehaviorOk returns a tuple with the Behavior field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehavior

`func (o *CacheVaryByQuerystringModuleRequest) SetBehavior(v FirewallBehaviorModeEnum)`

SetBehavior sets Behavior field to given value.

### HasBehavior

`func (o *CacheVaryByQuerystringModuleRequest) HasBehavior() bool`

HasBehavior returns a boolean if a field has been set.

### GetFields

`func (o *CacheVaryByQuerystringModuleRequest) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *CacheVaryByQuerystringModuleRequest) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *CacheVaryByQuerystringModuleRequest) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *CacheVaryByQuerystringModuleRequest) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetSortEnabled

`func (o *CacheVaryByQuerystringModuleRequest) GetSortEnabled() bool`

GetSortEnabled returns the SortEnabled field if non-nil, zero value otherwise.

### GetSortEnabledOk

`func (o *CacheVaryByQuerystringModuleRequest) GetSortEnabledOk() (*bool, bool)`

GetSortEnabledOk returns a tuple with the SortEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortEnabled

`func (o *CacheVaryByQuerystringModuleRequest) SetSortEnabled(v bool)`

SetSortEnabled sets SortEnabled field to given value.

### HasSortEnabled

`func (o *CacheVaryByQuerystringModuleRequest) HasSortEnabled() bool`

HasSortEnabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


