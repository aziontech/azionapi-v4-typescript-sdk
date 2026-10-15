# KafkaEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BootstrapServers** | **string** |  | 
**KafkaTopic** | **string** |  | 
**UseTls** | **bool** |  | 

## Methods

### NewKafkaEndpoint

`func NewKafkaEndpoint(bootstrapServers string, kafkaTopic string, useTls bool, ) *KafkaEndpoint`

NewKafkaEndpoint instantiates a new KafkaEndpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKafkaEndpointWithDefaults

`func NewKafkaEndpointWithDefaults() *KafkaEndpoint`

NewKafkaEndpointWithDefaults instantiates a new KafkaEndpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBootstrapServers

`func (o *KafkaEndpoint) GetBootstrapServers() string`

GetBootstrapServers returns the BootstrapServers field if non-nil, zero value otherwise.

### GetBootstrapServersOk

`func (o *KafkaEndpoint) GetBootstrapServersOk() (*string, bool)`

GetBootstrapServersOk returns a tuple with the BootstrapServers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBootstrapServers

`func (o *KafkaEndpoint) SetBootstrapServers(v string)`

SetBootstrapServers sets BootstrapServers field to given value.


### GetKafkaTopic

`func (o *KafkaEndpoint) GetKafkaTopic() string`

GetKafkaTopic returns the KafkaTopic field if non-nil, zero value otherwise.

### GetKafkaTopicOk

`func (o *KafkaEndpoint) GetKafkaTopicOk() (*string, bool)`

GetKafkaTopicOk returns a tuple with the KafkaTopic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKafkaTopic

`func (o *KafkaEndpoint) SetKafkaTopic(v string)`

SetKafkaTopic sets KafkaTopic field to given value.


### GetUseTls

`func (o *KafkaEndpoint) GetUseTls() bool`

GetUseTls returns the UseTls field if non-nil, zero value otherwise.

### GetUseTlsOk

`func (o *KafkaEndpoint) GetUseTlsOk() (*bool, bool)`

GetUseTlsOk returns a tuple with the UseTls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTls

`func (o *KafkaEndpoint) SetUseTls(v bool)`

SetUseTls sets UseTls field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


