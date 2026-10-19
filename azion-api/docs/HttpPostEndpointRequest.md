# HttpPostEndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** |  | 
**LogLineSeparator** | Pointer to **string** |  | [optional] 
**PayloadFormat** | Pointer to **string** |  | [optional] 
**MaxSize** | Pointer to **NullableInt64** |  | [optional] 
**Headers** | **map[string]string** |  | 

## Methods

### NewHttpPostEndpointRequest

`func NewHttpPostEndpointRequest(url string, headers map[string]string, ) *HttpPostEndpointRequest`

NewHttpPostEndpointRequest instantiates a new HttpPostEndpointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpPostEndpointRequestWithDefaults

`func NewHttpPostEndpointRequestWithDefaults() *HttpPostEndpointRequest`

NewHttpPostEndpointRequestWithDefaults instantiates a new HttpPostEndpointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *HttpPostEndpointRequest) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *HttpPostEndpointRequest) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *HttpPostEndpointRequest) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetLogLineSeparator

`func (o *HttpPostEndpointRequest) GetLogLineSeparator() string`

GetLogLineSeparator returns the LogLineSeparator field if non-nil, zero value otherwise.

### GetLogLineSeparatorOk

`func (o *HttpPostEndpointRequest) GetLogLineSeparatorOk() (*string, bool)`

GetLogLineSeparatorOk returns a tuple with the LogLineSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLineSeparator

`func (o *HttpPostEndpointRequest) SetLogLineSeparator(v string)`

SetLogLineSeparator sets LogLineSeparator field to given value.

### HasLogLineSeparator

`func (o *HttpPostEndpointRequest) HasLogLineSeparator() bool`

HasLogLineSeparator returns a boolean if a field has been set.

### GetPayloadFormat

`func (o *HttpPostEndpointRequest) GetPayloadFormat() string`

GetPayloadFormat returns the PayloadFormat field if non-nil, zero value otherwise.

### GetPayloadFormatOk

`func (o *HttpPostEndpointRequest) GetPayloadFormatOk() (*string, bool)`

GetPayloadFormatOk returns a tuple with the PayloadFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayloadFormat

`func (o *HttpPostEndpointRequest) SetPayloadFormat(v string)`

SetPayloadFormat sets PayloadFormat field to given value.

### HasPayloadFormat

`func (o *HttpPostEndpointRequest) HasPayloadFormat() bool`

HasPayloadFormat returns a boolean if a field has been set.

### GetMaxSize

`func (o *HttpPostEndpointRequest) GetMaxSize() int64`

GetMaxSize returns the MaxSize field if non-nil, zero value otherwise.

### GetMaxSizeOk

`func (o *HttpPostEndpointRequest) GetMaxSizeOk() (*int64, bool)`

GetMaxSizeOk returns a tuple with the MaxSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSize

`func (o *HttpPostEndpointRequest) SetMaxSize(v int64)`

SetMaxSize sets MaxSize field to given value.

### HasMaxSize

`func (o *HttpPostEndpointRequest) HasMaxSize() bool`

HasMaxSize returns a boolean if a field has been set.

### SetMaxSizeNil

`func (o *HttpPostEndpointRequest) SetMaxSizeNil(b bool)`

 SetMaxSizeNil sets the value for MaxSize to be an explicit nil

### UnsetMaxSize
`func (o *HttpPostEndpointRequest) UnsetMaxSize()`

UnsetMaxSize ensures that no value is present for MaxSize, not even an explicit nil
### GetHeaders

`func (o *HttpPostEndpointRequest) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *HttpPostEndpointRequest) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *HttpPostEndpointRequest) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


