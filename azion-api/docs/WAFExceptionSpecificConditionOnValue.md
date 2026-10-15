# WAFExceptionSpecificConditionOnValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Match** | [**WAFExceptionSpecificConditionOnValueMatchEnum**](WAFExceptionSpecificConditionOnValueMatchEnum.md) |  | 
**Value** | **string** |  | 

## Methods

### NewWAFExceptionSpecificConditionOnValue

`func NewWAFExceptionSpecificConditionOnValue(match WAFExceptionSpecificConditionOnValueMatchEnum, value string, ) *WAFExceptionSpecificConditionOnValue`

NewWAFExceptionSpecificConditionOnValue instantiates a new WAFExceptionSpecificConditionOnValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFExceptionSpecificConditionOnValueWithDefaults

`func NewWAFExceptionSpecificConditionOnValueWithDefaults() *WAFExceptionSpecificConditionOnValue`

NewWAFExceptionSpecificConditionOnValueWithDefaults instantiates a new WAFExceptionSpecificConditionOnValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatch

`func (o *WAFExceptionSpecificConditionOnValue) GetMatch() WAFExceptionSpecificConditionOnValueMatchEnum`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *WAFExceptionSpecificConditionOnValue) GetMatchOk() (*WAFExceptionSpecificConditionOnValueMatchEnum, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *WAFExceptionSpecificConditionOnValue) SetMatch(v WAFExceptionSpecificConditionOnValueMatchEnum)`

SetMatch sets Match field to given value.


### GetValue

`func (o *WAFExceptionSpecificConditionOnValue) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *WAFExceptionSpecificConditionOnValue) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *WAFExceptionSpecificConditionOnValue) SetValue(v string)`

SetValue sets Value field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


