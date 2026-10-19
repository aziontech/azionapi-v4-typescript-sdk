# PurgeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]string** |  | 
**Layer** | Pointer to [**LayerEnum**](LayerEnum.md) |  | [optional] [default to CACHE]

## Methods

### NewPurgeRequest

`func NewPurgeRequest(items []string, ) *PurgeRequest`

NewPurgeRequest instantiates a new PurgeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPurgeRequestWithDefaults

`func NewPurgeRequestWithDefaults() *PurgeRequest`

NewPurgeRequestWithDefaults instantiates a new PurgeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *PurgeRequest) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PurgeRequest) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PurgeRequest) SetItems(v []string)`

SetItems sets Items field to given value.


### GetLayer

`func (o *PurgeRequest) GetLayer() LayerEnum`

GetLayer returns the Layer field if non-nil, zero value otherwise.

### GetLayerOk

`func (o *PurgeRequest) GetLayerOk() (*LayerEnum, bool)`

GetLayerOk returns a tuple with the Layer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLayer

`func (o *PurgeRequest) SetLayer(v LayerEnum)`

SetLayer sets Layer field to given value.

### HasLayer

`func (o *PurgeRequest) HasLayer() bool`

HasLayer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


