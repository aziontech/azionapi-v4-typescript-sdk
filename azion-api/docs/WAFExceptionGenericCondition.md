# WAFExceptionGenericCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Match** | [**WAFExceptionGenericConditionMatchEnum**](WAFExceptionGenericConditionMatchEnum.md) |  | 

## Methods

### NewWAFExceptionGenericCondition

`func NewWAFExceptionGenericCondition(match WAFExceptionGenericConditionMatchEnum, ) *WAFExceptionGenericCondition`

NewWAFExceptionGenericCondition instantiates a new WAFExceptionGenericCondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFExceptionGenericConditionWithDefaults

`func NewWAFExceptionGenericConditionWithDefaults() *WAFExceptionGenericCondition`

NewWAFExceptionGenericConditionWithDefaults instantiates a new WAFExceptionGenericCondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatch

`func (o *WAFExceptionGenericCondition) GetMatch() WAFExceptionGenericConditionMatchEnum`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *WAFExceptionGenericCondition) GetMatchOk() (*WAFExceptionGenericConditionMatchEnum, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *WAFExceptionGenericCondition) SetMatch(v WAFExceptionGenericConditionMatchEnum)`

SetMatch sets Match field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


