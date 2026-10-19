# FunctionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**Functions**](Functions.md) |  | 

## Methods

### NewFunctionResponse

`func NewFunctionResponse(data Functions, ) *FunctionResponse`

NewFunctionResponse instantiates a new FunctionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionResponseWithDefaults

`func NewFunctionResponseWithDefaults() *FunctionResponse`

NewFunctionResponseWithDefaults instantiates a new FunctionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *FunctionResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *FunctionResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *FunctionResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *FunctionResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *FunctionResponse) GetData() Functions`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *FunctionResponse) GetDataOk() (*Functions, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *FunctionResponse) SetData(v Functions)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


