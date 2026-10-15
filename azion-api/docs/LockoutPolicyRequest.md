# LockoutPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** |  | 
**MaxAttempts** | **int64** | Maximum number of failed login attempts before lockout | 
**BlockingPeriod** | **int64** | Blocking period in minutes | 

## Methods

### NewLockoutPolicyRequest

`func NewLockoutPolicyRequest(active bool, maxAttempts int64, blockingPeriod int64, ) *LockoutPolicyRequest`

NewLockoutPolicyRequest instantiates a new LockoutPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLockoutPolicyRequestWithDefaults

`func NewLockoutPolicyRequestWithDefaults() *LockoutPolicyRequest`

NewLockoutPolicyRequestWithDefaults instantiates a new LockoutPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *LockoutPolicyRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *LockoutPolicyRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *LockoutPolicyRequest) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMaxAttempts

`func (o *LockoutPolicyRequest) GetMaxAttempts() int64`

GetMaxAttempts returns the MaxAttempts field if non-nil, zero value otherwise.

### GetMaxAttemptsOk

`func (o *LockoutPolicyRequest) GetMaxAttemptsOk() (*int64, bool)`

GetMaxAttemptsOk returns a tuple with the MaxAttempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAttempts

`func (o *LockoutPolicyRequest) SetMaxAttempts(v int64)`

SetMaxAttempts sets MaxAttempts field to given value.


### GetBlockingPeriod

`func (o *LockoutPolicyRequest) GetBlockingPeriod() int64`

GetBlockingPeriod returns the BlockingPeriod field if non-nil, zero value otherwise.

### GetBlockingPeriodOk

`func (o *LockoutPolicyRequest) GetBlockingPeriodOk() (*int64, bool)`

GetBlockingPeriodOk returns a tuple with the BlockingPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockingPeriod

`func (o *LockoutPolicyRequest) SetBlockingPeriod(v int64)`

SetBlockingPeriod sets BlockingPeriod field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


