# ResponseDeleteUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**StateEnum**](StateEnum.md) |  | 
**Data** | [**NullableUser**](User.md) |  | 

## Methods

### NewResponseDeleteUser

`func NewResponseDeleteUser(state StateEnum, data NullableUser, ) *ResponseDeleteUser`

NewResponseDeleteUser instantiates a new ResponseDeleteUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseDeleteUserWithDefaults

`func NewResponseDeleteUserWithDefaults() *ResponseDeleteUser`

NewResponseDeleteUserWithDefaults instantiates a new ResponseDeleteUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseDeleteUser) GetState() StateEnum`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseDeleteUser) GetStateOk() (*StateEnum, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseDeleteUser) SetState(v StateEnum)`

SetState sets State field to given value.


### GetData

`func (o *ResponseDeleteUser) GetData() User`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseDeleteUser) GetDataOk() (*User, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseDeleteUser) SetData(v User)`

SetData sets Data field to given value.


### SetDataNil

`func (o *ResponseDeleteUser) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *ResponseDeleteUser) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


