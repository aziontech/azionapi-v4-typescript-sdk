# KBAskResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Answer** | **string** |  | 
**Context** | [**[]KBQueryResult**](KBQueryResult.md) |  | 

## Methods

### NewKBAskResponse

`func NewKBAskResponse(answer string, context []KBQueryResult, ) *KBAskResponse`

NewKBAskResponse instantiates a new KBAskResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKBAskResponseWithDefaults

`func NewKBAskResponseWithDefaults() *KBAskResponse`

NewKBAskResponseWithDefaults instantiates a new KBAskResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnswer

`func (o *KBAskResponse) GetAnswer() string`

GetAnswer returns the Answer field if non-nil, zero value otherwise.

### GetAnswerOk

`func (o *KBAskResponse) GetAnswerOk() (*string, bool)`

GetAnswerOk returns a tuple with the Answer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnswer

`func (o *KBAskResponse) SetAnswer(v string)`

SetAnswer sets Answer field to given value.


### GetContext

`func (o *KBAskResponse) GetContext() []KBQueryResult`

GetContext returns the Context field if non-nil, zero value otherwise.

### GetContextOk

`func (o *KBAskResponse) GetContextOk() (*[]KBQueryResult, bool)`

GetContextOk returns a tuple with the Context field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContext

`func (o *KBAskResponse) SetContext(v []KBQueryResult)`

SetContext sets Context field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


