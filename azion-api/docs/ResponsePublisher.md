# ResponsePublisher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**StateEnum**](StateEnum.md) |  | 
**Data** | [**Publisher**](Publisher.md) |  | 

## Methods

### NewResponsePublisher

`func NewResponsePublisher(state StateEnum, data Publisher, ) *ResponsePublisher`

NewResponsePublisher instantiates a new ResponsePublisher object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponsePublisherWithDefaults

`func NewResponsePublisherWithDefaults() *ResponsePublisher`

NewResponsePublisherWithDefaults instantiates a new ResponsePublisher object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponsePublisher) GetState() StateEnum`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponsePublisher) GetStateOk() (*StateEnum, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponsePublisher) SetState(v StateEnum)`

SetState sets State field to given value.


### GetData

`func (o *ResponsePublisher) GetData() Publisher`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponsePublisher) GetDataOk() (*Publisher, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponsePublisher) SetData(v Publisher)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


