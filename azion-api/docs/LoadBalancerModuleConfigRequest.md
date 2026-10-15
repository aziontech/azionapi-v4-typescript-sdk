# LoadBalancerModuleConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to [**MethodEnum**](MethodEnum.md) | Load balancing method to use (e.g., round-robin, least_conn).  * &#x60;round_robin&#x60; - Round Robin * &#x60;least_conn&#x60; - Least Connections * &#x60;ip_hash&#x60; - IP Hash | [optional] [default to ROUND_ROBIN]
**MaxRetries** | Pointer to **int64** | Maximum number of retry attempts on connection failure. | [optional] [default to 0]
**ConnectionTimeout** | Pointer to **int64** | Maximum time (in seconds) to wait for a connection to be established. | [optional] [default to 60]
**ReadWriteTimeout** | Pointer to **int64** | Maximum time (in seconds) to wait for data read/write after connection. | [optional] [default to 120]

## Methods

### NewLoadBalancerModuleConfigRequest

`func NewLoadBalancerModuleConfigRequest() *LoadBalancerModuleConfigRequest`

NewLoadBalancerModuleConfigRequest instantiates a new LoadBalancerModuleConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadBalancerModuleConfigRequestWithDefaults

`func NewLoadBalancerModuleConfigRequestWithDefaults() *LoadBalancerModuleConfigRequest`

NewLoadBalancerModuleConfigRequestWithDefaults instantiates a new LoadBalancerModuleConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *LoadBalancerModuleConfigRequest) GetMethod() MethodEnum`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *LoadBalancerModuleConfigRequest) GetMethodOk() (*MethodEnum, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *LoadBalancerModuleConfigRequest) SetMethod(v MethodEnum)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *LoadBalancerModuleConfigRequest) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetMaxRetries

`func (o *LoadBalancerModuleConfigRequest) GetMaxRetries() int64`

GetMaxRetries returns the MaxRetries field if non-nil, zero value otherwise.

### GetMaxRetriesOk

`func (o *LoadBalancerModuleConfigRequest) GetMaxRetriesOk() (*int64, bool)`

GetMaxRetriesOk returns a tuple with the MaxRetries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRetries

`func (o *LoadBalancerModuleConfigRequest) SetMaxRetries(v int64)`

SetMaxRetries sets MaxRetries field to given value.

### HasMaxRetries

`func (o *LoadBalancerModuleConfigRequest) HasMaxRetries() bool`

HasMaxRetries returns a boolean if a field has been set.

### GetConnectionTimeout

`func (o *LoadBalancerModuleConfigRequest) GetConnectionTimeout() int64`

GetConnectionTimeout returns the ConnectionTimeout field if non-nil, zero value otherwise.

### GetConnectionTimeoutOk

`func (o *LoadBalancerModuleConfigRequest) GetConnectionTimeoutOk() (*int64, bool)`

GetConnectionTimeoutOk returns a tuple with the ConnectionTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionTimeout

`func (o *LoadBalancerModuleConfigRequest) SetConnectionTimeout(v int64)`

SetConnectionTimeout sets ConnectionTimeout field to given value.

### HasConnectionTimeout

`func (o *LoadBalancerModuleConfigRequest) HasConnectionTimeout() bool`

HasConnectionTimeout returns a boolean if a field has been set.

### GetReadWriteTimeout

`func (o *LoadBalancerModuleConfigRequest) GetReadWriteTimeout() int64`

GetReadWriteTimeout returns the ReadWriteTimeout field if non-nil, zero value otherwise.

### GetReadWriteTimeoutOk

`func (o *LoadBalancerModuleConfigRequest) GetReadWriteTimeoutOk() (*int64, bool)`

GetReadWriteTimeoutOk returns a tuple with the ReadWriteTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadWriteTimeout

`func (o *LoadBalancerModuleConfigRequest) SetReadWriteTimeout(v int64)`

SetReadWriteTimeout sets ReadWriteTimeout field to given value.

### HasReadWriteTimeout

`func (o *LoadBalancerModuleConfigRequest) HasReadWriteTimeout() bool`

HasReadWriteTimeout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


