# ResponseGrant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**StateEnum**](StateEnum.md) |  | 
**Data** | [**Grant**](Grant.md) |  | 

## Methods

### NewResponseGrant

`func NewResponseGrant(state StateEnum, data Grant, ) *ResponseGrant`

NewResponseGrant instantiates a new ResponseGrant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseGrantWithDefaults

`func NewResponseGrantWithDefaults() *ResponseGrant`

NewResponseGrantWithDefaults instantiates a new ResponseGrant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseGrant) GetState() StateEnum`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseGrant) GetStateOk() (*StateEnum, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseGrant) SetState(v StateEnum)`

SetState sets State field to given value.


### GetData

`func (o *ResponseGrant) GetData() Grant`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseGrant) GetDataOk() (*Grant, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseGrant) SetData(v Grant)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


