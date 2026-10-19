# ResponseGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**StateEnum**](StateEnum.md) |  | 
**Data** | [**Group**](Group.md) |  | 

## Methods

### NewResponseGroup

`func NewResponseGroup(state StateEnum, data Group, ) *ResponseGroup`

NewResponseGroup instantiates a new ResponseGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseGroupWithDefaults

`func NewResponseGroupWithDefaults() *ResponseGroup`

NewResponseGroupWithDefaults instantiates a new ResponseGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseGroup) GetState() StateEnum`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseGroup) GetStateOk() (*StateEnum, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseGroup) SetState(v StateEnum)`

SetState sets State field to given value.


### GetData

`func (o *ResponseGroup) GetData() Group`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseGroup) GetDataOk() (*Group, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseGroup) SetData(v Group)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


