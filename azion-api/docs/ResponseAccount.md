# ResponseAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**Account**](Account.md) |  | 

## Methods

### NewResponseAccount

`func NewResponseAccount(data Account, ) *ResponseAccount`

NewResponseAccount instantiates a new ResponseAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseAccountWithDefaults

`func NewResponseAccountWithDefaults() *ResponseAccount`

NewResponseAccountWithDefaults instantiates a new ResponseAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseAccount) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseAccount) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseAccount) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ResponseAccount) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *ResponseAccount) GetData() Account`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseAccount) GetDataOk() (*Account, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseAccount) SetData(v Account)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


