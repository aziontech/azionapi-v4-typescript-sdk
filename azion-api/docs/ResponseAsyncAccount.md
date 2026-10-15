# ResponseAsyncAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "pending"]
**Data** | [**Account**](Account.md) |  | 

## Methods

### NewResponseAsyncAccount

`func NewResponseAsyncAccount(data Account, ) *ResponseAsyncAccount`

NewResponseAsyncAccount instantiates a new ResponseAsyncAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseAsyncAccountWithDefaults

`func NewResponseAsyncAccountWithDefaults() *ResponseAsyncAccount`

NewResponseAsyncAccountWithDefaults instantiates a new ResponseAsyncAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseAsyncAccount) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseAsyncAccount) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseAsyncAccount) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ResponseAsyncAccount) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *ResponseAsyncAccount) GetData() Account`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseAsyncAccount) GetDataOk() (*Account, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseAsyncAccount) SetData(v Account)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


