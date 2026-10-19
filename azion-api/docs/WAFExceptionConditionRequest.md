# WAFExceptionConditionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Match** | [**WAFExceptionSpecificConditionOnValueMatchEnum**](WAFExceptionSpecificConditionOnValueMatchEnum.md) |  | 
**Name** | **string** |  | 
**Value** | **string** |  | 

## Methods

### NewWAFExceptionConditionRequest

`func NewWAFExceptionConditionRequest(match WAFExceptionSpecificConditionOnValueMatchEnum, name string, value string, ) *WAFExceptionConditionRequest`

NewWAFExceptionConditionRequest instantiates a new WAFExceptionConditionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFExceptionConditionRequestWithDefaults

`func NewWAFExceptionConditionRequestWithDefaults() *WAFExceptionConditionRequest`

NewWAFExceptionConditionRequestWithDefaults instantiates a new WAFExceptionConditionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatch

`func (o *WAFExceptionConditionRequest) GetMatch() WAFExceptionSpecificConditionOnValueMatchEnum`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *WAFExceptionConditionRequest) GetMatchOk() (*WAFExceptionSpecificConditionOnValueMatchEnum, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *WAFExceptionConditionRequest) SetMatch(v WAFExceptionSpecificConditionOnValueMatchEnum)`

SetMatch sets Match field to given value.


### GetName

`func (o *WAFExceptionConditionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WAFExceptionConditionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WAFExceptionConditionRequest) SetName(v string)`

SetName sets Name field to given value.


### GetValue

`func (o *WAFExceptionConditionRequest) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *WAFExceptionConditionRequest) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *WAFExceptionConditionRequest) SetValue(v string)`

SetValue sets Value field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


