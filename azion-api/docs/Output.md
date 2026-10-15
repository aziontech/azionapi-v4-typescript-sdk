# Output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SplunkEndpointAttributesTypeEnum**](SplunkEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**SplunkEndpoint**](SplunkEndpoint.md) |  | 

## Methods

### NewOutput

`func NewOutput(type_ SplunkEndpointAttributesTypeEnum, attributes SplunkEndpoint, ) *Output`

NewOutput instantiates a new Output object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOutputWithDefaults

`func NewOutputWithDefaults() *Output`

NewOutputWithDefaults instantiates a new Output object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Output) GetType() SplunkEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Output) GetTypeOk() (*SplunkEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Output) SetType(v SplunkEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *Output) GetAttributes() SplunkEndpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Output) GetAttributesOk() (*SplunkEndpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Output) SetAttributes(v SplunkEndpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


