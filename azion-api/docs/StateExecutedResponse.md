# StateExecutedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** | State of the operation (lowercase with underscores) | [optional] [default to "executed"]

## Methods

### NewStateExecutedResponse

`func NewStateExecutedResponse() *StateExecutedResponse`

NewStateExecutedResponse instantiates a new StateExecutedResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStateExecutedResponseWithDefaults

`func NewStateExecutedResponseWithDefaults() *StateExecutedResponse`

NewStateExecutedResponseWithDefaults instantiates a new StateExecutedResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *StateExecutedResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *StateExecutedResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *StateExecutedResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *StateExecutedResponse) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


