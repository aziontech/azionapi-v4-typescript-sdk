# WAFExceptionSpecificConditionOnName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Match** | [**WAFExceptionSpecificConditionOnNameMatchEnum**](WAFExceptionSpecificConditionOnNameMatchEnum.md) |  | 
**Name** | **string** |  | 

## Methods

### NewWAFExceptionSpecificConditionOnName

`func NewWAFExceptionSpecificConditionOnName(match WAFExceptionSpecificConditionOnNameMatchEnum, name string, ) *WAFExceptionSpecificConditionOnName`

NewWAFExceptionSpecificConditionOnName instantiates a new WAFExceptionSpecificConditionOnName object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFExceptionSpecificConditionOnNameWithDefaults

`func NewWAFExceptionSpecificConditionOnNameWithDefaults() *WAFExceptionSpecificConditionOnName`

NewWAFExceptionSpecificConditionOnNameWithDefaults instantiates a new WAFExceptionSpecificConditionOnName object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatch

`func (o *WAFExceptionSpecificConditionOnName) GetMatch() WAFExceptionSpecificConditionOnNameMatchEnum`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *WAFExceptionSpecificConditionOnName) GetMatchOk() (*WAFExceptionSpecificConditionOnNameMatchEnum, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *WAFExceptionSpecificConditionOnName) SetMatch(v WAFExceptionSpecificConditionOnNameMatchEnum)`

SetMatch sets Match field to given value.


### GetName

`func (o *WAFExceptionSpecificConditionOnName) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WAFExceptionSpecificConditionOnName) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WAFExceptionSpecificConditionOnName) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


