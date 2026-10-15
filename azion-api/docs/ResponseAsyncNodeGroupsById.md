# ResponseAsyncNodeGroupsById

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "pending"]
**Data** | [**NodeGroupsById**](NodeGroupsById.md) |  | 

## Methods

### NewResponseAsyncNodeGroupsById

`func NewResponseAsyncNodeGroupsById(data NodeGroupsById, ) *ResponseAsyncNodeGroupsById`

NewResponseAsyncNodeGroupsById instantiates a new ResponseAsyncNodeGroupsById object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseAsyncNodeGroupsByIdWithDefaults

`func NewResponseAsyncNodeGroupsByIdWithDefaults() *ResponseAsyncNodeGroupsById`

NewResponseAsyncNodeGroupsByIdWithDefaults instantiates a new ResponseAsyncNodeGroupsById object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseAsyncNodeGroupsById) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseAsyncNodeGroupsById) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseAsyncNodeGroupsById) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ResponseAsyncNodeGroupsById) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *ResponseAsyncNodeGroupsById) GetData() NodeGroupsById`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseAsyncNodeGroupsById) GetDataOk() (*NodeGroupsById, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseAsyncNodeGroupsById) SetData(v NodeGroupsById)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


