# PatchedNetworkListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to [**NetworkListTypeEnum**](NetworkListTypeEnum.md) |  | [optional] 
**Items** | Pointer to **[]string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewPatchedNetworkListRequest

`func NewPatchedNetworkListRequest() *PatchedNetworkListRequest`

NewPatchedNetworkListRequest instantiates a new PatchedNetworkListRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedNetworkListRequestWithDefaults

`func NewPatchedNetworkListRequestWithDefaults() *PatchedNetworkListRequest`

NewPatchedNetworkListRequestWithDefaults instantiates a new PatchedNetworkListRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedNetworkListRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedNetworkListRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedNetworkListRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedNetworkListRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *PatchedNetworkListRequest) GetType() NetworkListTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedNetworkListRequest) GetTypeOk() (*NetworkListTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedNetworkListRequest) SetType(v NetworkListTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *PatchedNetworkListRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetItems

`func (o *PatchedNetworkListRequest) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PatchedNetworkListRequest) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PatchedNetworkListRequest) SetItems(v []string)`

SetItems sets Items field to given value.

### HasItems

`func (o *PatchedNetworkListRequest) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetActive

`func (o *PatchedNetworkListRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedNetworkListRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedNetworkListRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedNetworkListRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


