# OutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SplunkEndpointAttributesTypeEnum**](SplunkEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**SplunkEndpointRequest**](SplunkEndpointRequest.md) |  | 

## Methods

### NewOutputRequest

`func NewOutputRequest(type_ SplunkEndpointAttributesTypeEnum, attributes SplunkEndpointRequest, ) *OutputRequest`

NewOutputRequest instantiates a new OutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutputRequestWithDefaults

`func NewOutputRequestWithDefaults() *OutputRequest`

NewOutputRequestWithDefaults instantiates a new OutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *OutputRequest) GetType() SplunkEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OutputRequest) GetTypeOk() (*SplunkEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OutputRequest) SetType(v SplunkEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *OutputRequest) GetAttributes() SplunkEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *OutputRequest) GetAttributesOk() (*SplunkEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *OutputRequest) SetAttributes(v SplunkEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


