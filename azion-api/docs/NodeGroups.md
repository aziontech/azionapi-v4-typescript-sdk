# NodeGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**RefCount** | **int64** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewNodeGroups

`func NewNodeGroups(id int64, name string, refCount int64, ) *NodeGroups`

NewNodeGroups instantiates a new NodeGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodeGroupsWithDefaults

`func NewNodeGroupsWithDefaults() *NodeGroups`

NewNodeGroupsWithDefaults instantiates a new NodeGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NodeGroups) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NodeGroups) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NodeGroups) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *NodeGroups) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NodeGroups) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NodeGroups) SetName(v string)`

SetName sets Name field to given value.


### GetRefCount

`func (o *NodeGroups) GetRefCount() int64`

GetRefCount returns the RefCount field if non-nil, zero value otherwise.

### GetRefCountOk

`func (o *NodeGroups) GetRefCountOk() (*int64, bool)`

GetRefCountOk returns a tuple with the RefCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefCount

`func (o *NodeGroups) SetRefCount(v int64)`

SetRefCount sets RefCount field to given value.


### GetActive

`func (o *NodeGroups) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *NodeGroups) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *NodeGroups) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *NodeGroups) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


