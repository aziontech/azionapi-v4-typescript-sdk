# NodeGroupsByIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**NodeGroup** | Pointer to **int64** |  | [optional] 

## Methods

### NewNodeGroupsByIdRequest

`func NewNodeGroupsByIdRequest() *NodeGroupsByIdRequest`

NewNodeGroupsByIdRequest instantiates a new NodeGroupsByIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodeGroupsByIdRequestWithDefaults

`func NewNodeGroupsByIdRequestWithDefaults() *NodeGroupsByIdRequest`

NewNodeGroupsByIdRequestWithDefaults instantiates a new NodeGroupsByIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *NodeGroupsByIdRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NodeGroupsByIdRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NodeGroupsByIdRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NodeGroupsByIdRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNodeGroup

`func (o *NodeGroupsByIdRequest) GetNodeGroup() int64`

GetNodeGroup returns the NodeGroup field if non-nil, zero value otherwise.

### GetNodeGroupOk

`func (o *NodeGroupsByIdRequest) GetNodeGroupOk() (*int64, bool)`

GetNodeGroupOk returns a tuple with the NodeGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeGroup

`func (o *NodeGroupsByIdRequest) SetNodeGroup(v int64)`

SetNodeGroup sets NodeGroup field to given value.

### HasNodeGroup

`func (o *NodeGroupsByIdRequest) HasNodeGroup() bool`

HasNodeGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


