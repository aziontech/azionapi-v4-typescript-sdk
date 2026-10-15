# LargeFileCacheModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** |  | [optional] [default to false]
**Offset** | Pointer to **int64** |  | [optional] [default to 1024]

## Methods

### NewLargeFileCacheModule

`func NewLargeFileCacheModule() *LargeFileCacheModule`

NewLargeFileCacheModule instantiates a new LargeFileCacheModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLargeFileCacheModuleWithDefaults

`func NewLargeFileCacheModuleWithDefaults() *LargeFileCacheModule`

NewLargeFileCacheModuleWithDefaults instantiates a new LargeFileCacheModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *LargeFileCacheModule) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *LargeFileCacheModule) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *LargeFileCacheModule) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *LargeFileCacheModule) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetOffset

`func (o *LargeFileCacheModule) GetOffset() int64`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *LargeFileCacheModule) GetOffsetOk() (*int64, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *LargeFileCacheModule) SetOffset(v int64)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *LargeFileCacheModule) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


