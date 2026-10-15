# KafkaEndpointAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**KafkaEndpointAttributesTypeEnum**](KafkaEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**KafkaEndpoint**](KafkaEndpoint.md) |  | 

## Methods

### NewKafkaEndpointAttributes

`func NewKafkaEndpointAttributes(type_ KafkaEndpointAttributesTypeEnum, attributes KafkaEndpoint, ) *KafkaEndpointAttributes`

NewKafkaEndpointAttributes instantiates a new KafkaEndpointAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaEndpointAttributesWithDefaults

`func NewKafkaEndpointAttributesWithDefaults() *KafkaEndpointAttributes`

NewKafkaEndpointAttributesWithDefaults instantiates a new KafkaEndpointAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *KafkaEndpointAttributes) GetType() KafkaEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *KafkaEndpointAttributes) GetTypeOk() (*KafkaEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *KafkaEndpointAttributes) SetType(v KafkaEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *KafkaEndpointAttributes) GetAttributes() KafkaEndpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *KafkaEndpointAttributes) GetAttributesOk() (*KafkaEndpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *KafkaEndpointAttributes) SetAttributes(v KafkaEndpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


