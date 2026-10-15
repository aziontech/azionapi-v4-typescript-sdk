# NetworkListRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Type** | [**NetworkListTypeEnum**](NetworkListTypeEnum.md) |  | 
**Items** | **[]string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewNetworkListRequest

`func NewNetworkListRequest(name string, type_ NetworkListTypeEnum, items []string, ) *NetworkListRequest`

NewNetworkListRequest instantiates a new NetworkListRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNetworkListRequestWithDefaults

`func NewNetworkListRequestWithDefaults() *NetworkListRequest`

NewNetworkListRequestWithDefaults instantiates a new NetworkListRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *NetworkListRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NetworkListRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NetworkListRequest) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *NetworkListRequest) GetType() NetworkListTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NetworkListRequest) GetTypeOk() (*NetworkListTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NetworkListRequest) SetType(v NetworkListTypeEnum)`

SetType sets Type field to given value.


### GetItems

`func (o *NetworkListRequest) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *NetworkListRequest) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *NetworkListRequest) SetItems(v []string)`

SetItems sets Items field to given value.


### GetActive

`func (o *NetworkListRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *NetworkListRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *NetworkListRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *NetworkListRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


