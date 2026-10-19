# JSONAPIErrorObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | The HTTP status code applicable to this problem | [optional] 
**Code** | Pointer to **string** | An application-specific error code | [optional] 
**Title** | Pointer to **string** | A short, human-readable summary of the problem | [optional] 
**Detail** | Pointer to **string** | A human-readable explanation specific to this occurrence of the problem | [optional] 
**Source** | Pointer to [**JSONAPIErrorSource**](JSONAPIErrorSource.md) | References to the primary source of the error | [optional] 
**Meta** | Pointer to **map[string]interface{}** | Non-standard meta-information about the error | [optional] 

## Methods

### NewJSONAPIErrorObject

`func NewJSONAPIErrorObject() *JSONAPIErrorObject`

NewJSONAPIErrorObject instantiates a new JSONAPIErrorObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJSONAPIErrorObjectWithDefaults

`func NewJSONAPIErrorObjectWithDefaults() *JSONAPIErrorObject`

NewJSONAPIErrorObjectWithDefaults instantiates a new JSONAPIErrorObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *JSONAPIErrorObject) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *JSONAPIErrorObject) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *JSONAPIErrorObject) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *JSONAPIErrorObject) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCode

`func (o *JSONAPIErrorObject) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *JSONAPIErrorObject) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *JSONAPIErrorObject) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *JSONAPIErrorObject) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTitle

`func (o *JSONAPIErrorObject) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *JSONAPIErrorObject) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *JSONAPIErrorObject) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *JSONAPIErrorObject) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDetail

`func (o *JSONAPIErrorObject) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *JSONAPIErrorObject) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *JSONAPIErrorObject) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *JSONAPIErrorObject) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetSource

`func (o *JSONAPIErrorObject) GetSource() JSONAPIErrorSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *JSONAPIErrorObject) GetSourceOk() (*JSONAPIErrorSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *JSONAPIErrorObject) SetSource(v JSONAPIErrorSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *JSONAPIErrorObject) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetMeta

`func (o *JSONAPIErrorObject) GetMeta() map[string]interface{}`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *JSONAPIErrorObject) GetMetaOk() (*map[string]interface{}, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *JSONAPIErrorObject) SetMeta(v map[string]interface{})`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *JSONAPIErrorObject) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


