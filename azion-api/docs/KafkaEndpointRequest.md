# KafkaEndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BootstrapServers** | **string** |  | 
**KafkaTopic** | **string** |  | 
**UseTls** | **bool** |  | 

## Methods

### NewKafkaEndpointRequest

`func NewKafkaEndpointRequest(bootstrapServers string, kafkaTopic string, useTls bool, ) *KafkaEndpointRequest`

NewKafkaEndpointRequest instantiates a new KafkaEndpointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaEndpointRequestWithDefaults

`func NewKafkaEndpointRequestWithDefaults() *KafkaEndpointRequest`

NewKafkaEndpointRequestWithDefaults instantiates a new KafkaEndpointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBootstrapServers

`func (o *KafkaEndpointRequest) GetBootstrapServers() string`

GetBootstrapServers returns the BootstrapServers field if non-nil, zero value otherwise.

### GetBootstrapServersOk

`func (o *KafkaEndpointRequest) GetBootstrapServersOk() (*string, bool)`

GetBootstrapServersOk returns a tuple with the BootstrapServers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBootstrapServers

`func (o *KafkaEndpointRequest) SetBootstrapServers(v string)`

SetBootstrapServers sets BootstrapServers field to given value.


### GetKafkaTopic

`func (o *KafkaEndpointRequest) GetKafkaTopic() string`

GetKafkaTopic returns the KafkaTopic field if non-nil, zero value otherwise.

### GetKafkaTopicOk

`func (o *KafkaEndpointRequest) GetKafkaTopicOk() (*string, bool)`

GetKafkaTopicOk returns a tuple with the KafkaTopic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKafkaTopic

`func (o *KafkaEndpointRequest) SetKafkaTopic(v string)`

SetKafkaTopic sets KafkaTopic field to given value.


### GetUseTls

`func (o *KafkaEndpointRequest) GetUseTls() bool`

GetUseTls returns the UseTls field if non-nil, zero value otherwise.

### GetUseTlsOk

`func (o *KafkaEndpointRequest) GetUseTlsOk() (*bool, bool)`

GetUseTlsOk returns a tuple with the UseTls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTls

`func (o *KafkaEndpointRequest) SetUseTls(v bool)`

SetUseTls sets UseTls field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


