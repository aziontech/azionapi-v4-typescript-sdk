# ResponseAsyncChatThread

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "pending"]
**Data** | [**ChatThread**](ChatThread.md) |  | 

## Methods

### NewResponseAsyncChatThread

`func NewResponseAsyncChatThread(data ChatThread, ) *ResponseAsyncChatThread`

NewResponseAsyncChatThread instantiates a new ResponseAsyncChatThread object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseAsyncChatThreadWithDefaults

`func NewResponseAsyncChatThreadWithDefaults() *ResponseAsyncChatThread`

NewResponseAsyncChatThreadWithDefaults instantiates a new ResponseAsyncChatThread object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseAsyncChatThread) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseAsyncChatThread) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseAsyncChatThread) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ResponseAsyncChatThread) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *ResponseAsyncChatThread) GetData() ChatThread`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseAsyncChatThread) GetDataOk() (*ChatThread, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseAsyncChatThread) SetData(v ChatThread)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


