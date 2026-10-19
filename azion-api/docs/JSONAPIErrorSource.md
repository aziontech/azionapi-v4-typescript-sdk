# JSONAPIErrorSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pointer** | Pointer to **string** | JSON Pointer to the value in the request document that caused the error | [optional] 
**Parameter** | Pointer to **string** | URI query parameter that caused the error | [optional] 
**Header** | Pointer to **string** | Request header name that caused the error | [optional] 

## Methods

### NewJSONAPIErrorSource

`func NewJSONAPIErrorSource() *JSONAPIErrorSource`

NewJSONAPIErrorSource instantiates a new JSONAPIErrorSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJSONAPIErrorSourceWithDefaults

`func NewJSONAPIErrorSourceWithDefaults() *JSONAPIErrorSource`

NewJSONAPIErrorSourceWithDefaults instantiates a new JSONAPIErrorSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPointer

`func (o *JSONAPIErrorSource) GetPointer() string`

GetPointer returns the Pointer field if non-nil, zero value otherwise.

### GetPointerOk

`func (o *JSONAPIErrorSource) GetPointerOk() (*string, bool)`

GetPointerOk returns a tuple with the Pointer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointer

`func (o *JSONAPIErrorSource) SetPointer(v string)`

SetPointer sets Pointer field to given value.

### HasPointer

`func (o *JSONAPIErrorSource) HasPointer() bool`

HasPointer returns a boolean if a field has been set.

### GetParameter

`func (o *JSONAPIErrorSource) GetParameter() string`

GetParameter returns the Parameter field if non-nil, zero value otherwise.

### GetParameterOk

`func (o *JSONAPIErrorSource) GetParameterOk() (*string, bool)`

GetParameterOk returns a tuple with the Parameter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameter

`func (o *JSONAPIErrorSource) SetParameter(v string)`

SetParameter sets Parameter field to given value.

### HasParameter

`func (o *JSONAPIErrorSource) HasParameter() bool`

HasParameter returns a boolean if a field has been set.

### GetHeader

`func (o *JSONAPIErrorSource) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *JSONAPIErrorSource) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *JSONAPIErrorSource) SetHeader(v string)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *JSONAPIErrorSource) HasHeader() bool`

HasHeader returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


