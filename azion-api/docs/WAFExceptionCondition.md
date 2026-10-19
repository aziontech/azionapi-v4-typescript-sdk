# WAFExceptionCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Match** | [**WAFExceptionSpecificConditionOnValueMatchEnum**](WAFExceptionSpecificConditionOnValueMatchEnum.md) |  | 
**Name** | **string** |  | 
**Value** | **string** |  | 

## Methods

### NewWAFExceptionCondition

`func NewWAFExceptionCondition(match WAFExceptionSpecificConditionOnValueMatchEnum, name string, value string, ) *WAFExceptionCondition`

NewWAFExceptionCondition instantiates a new WAFExceptionCondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFExceptionConditionWithDefaults

`func NewWAFExceptionConditionWithDefaults() *WAFExceptionCondition`

NewWAFExceptionConditionWithDefaults instantiates a new WAFExceptionCondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatch

`func (o *WAFExceptionCondition) GetMatch() WAFExceptionSpecificConditionOnValueMatchEnum`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *WAFExceptionCondition) GetMatchOk() (*WAFExceptionSpecificConditionOnValueMatchEnum, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *WAFExceptionCondition) SetMatch(v WAFExceptionSpecificConditionOnValueMatchEnum)`

SetMatch sets Match field to given value.


### GetName

`func (o *WAFExceptionCondition) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WAFExceptionCondition) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WAFExceptionCondition) SetName(v string)`

SetName sets Name field to given value.


### GetValue

`func (o *WAFExceptionCondition) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *WAFExceptionCondition) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *WAFExceptionCondition) SetValue(v string)`

SetValue sets Value field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


