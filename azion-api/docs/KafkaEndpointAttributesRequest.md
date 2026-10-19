# KafkaEndpointAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**KafkaEndpointAttributesTypeEnum**](KafkaEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**KafkaEndpointRequest**](KafkaEndpointRequest.md) |  | 

## Methods

### NewKafkaEndpointAttributesRequest

`func NewKafkaEndpointAttributesRequest(type_ KafkaEndpointAttributesTypeEnum, attributes KafkaEndpointRequest, ) *KafkaEndpointAttributesRequest`

NewKafkaEndpointAttributesRequest instantiates a new KafkaEndpointAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaEndpointAttributesRequestWithDefaults

`func NewKafkaEndpointAttributesRequestWithDefaults() *KafkaEndpointAttributesRequest`

NewKafkaEndpointAttributesRequestWithDefaults instantiates a new KafkaEndpointAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *KafkaEndpointAttributesRequest) GetType() KafkaEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *KafkaEndpointAttributesRequest) GetTypeOk() (*KafkaEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *KafkaEndpointAttributesRequest) SetType(v KafkaEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *KafkaEndpointAttributesRequest) GetAttributes() KafkaEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *KafkaEndpointAttributesRequest) GetAttributesOk() (*KafkaEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *KafkaEndpointAttributesRequest) SetAttributes(v KafkaEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


