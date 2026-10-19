# KBAskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Question** | **string** |  | 
**TopK** | Pointer to **int64** |  | [optional] [default to 5]
**Model** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewKBAskRequest

`func NewKBAskRequest(question string, ) *KBAskRequest`

NewKBAskRequest instantiates a new KBAskRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKBAskRequestWithDefaults

`func NewKBAskRequestWithDefaults() *KBAskRequest`

NewKBAskRequestWithDefaults instantiates a new KBAskRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuestion

`func (o *KBAskRequest) GetQuestion() string`

GetQuestion returns the Question field if non-nil, zero value otherwise.

### GetQuestionOk

`func (o *KBAskRequest) GetQuestionOk() (*string, bool)`

GetQuestionOk returns a tuple with the Question field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestion

`func (o *KBAskRequest) SetQuestion(v string)`

SetQuestion sets Question field to given value.


### GetTopK

`func (o *KBAskRequest) GetTopK() int64`

GetTopK returns the TopK field if non-nil, zero value otherwise.

### GetTopKOk

`func (o *KBAskRequest) GetTopKOk() (*int64, bool)`

GetTopKOk returns a tuple with the TopK field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopK

`func (o *KBAskRequest) SetTopK(v int64)`

SetTopK sets TopK field to given value.

### HasTopK

`func (o *KBAskRequest) HasTopK() bool`

HasTopK returns a boolean if a field has been set.

### GetModel

`func (o *KBAskRequest) GetModel() string`

GetModel returns the Model field if non-nil, zero value otherwise.

### GetModelOk

`func (o *KBAskRequest) GetModelOk() (*string, bool)`

GetModelOk returns a tuple with the Model field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModel

`func (o *KBAskRequest) SetModel(v string)`

SetModel sets Model field to given value.

### HasModel

`func (o *KBAskRequest) HasModel() bool`

HasModel returns a boolean if a field has been set.

### SetModelNil

`func (o *KBAskRequest) SetModelNil(b bool)`

 SetModelNil sets the value for Model to be an explicit nil

### UnsetModel
`func (o *KBAskRequest) UnsetModel()`

UnsetModel ensures that no value is present for Model, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


