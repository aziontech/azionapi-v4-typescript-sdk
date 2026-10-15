# LockoutPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** |  | 
**MaxAttempts** | **int64** | Maximum number of failed login attempts before lockout | 
**BlockingPeriod** | **int64** | Blocking period in minutes | 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewLockoutPolicy

`func NewLockoutPolicy(active bool, maxAttempts int64, blockingPeriod int64, createdAt time.Time, ) *LockoutPolicy`

NewLockoutPolicy instantiates a new LockoutPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLockoutPolicyWithDefaults

`func NewLockoutPolicyWithDefaults() *LockoutPolicy`

NewLockoutPolicyWithDefaults instantiates a new LockoutPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *LockoutPolicy) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *LockoutPolicy) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *LockoutPolicy) SetActive(v bool)`

SetActive sets Active field to given value.


### GetMaxAttempts

`func (o *LockoutPolicy) GetMaxAttempts() int64`

GetMaxAttempts returns the MaxAttempts field if non-nil, zero value otherwise.

### GetMaxAttemptsOk

`func (o *LockoutPolicy) GetMaxAttemptsOk() (*int64, bool)`

GetMaxAttemptsOk returns a tuple with the MaxAttempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAttempts

`func (o *LockoutPolicy) SetMaxAttempts(v int64)`

SetMaxAttempts sets MaxAttempts field to given value.


### GetBlockingPeriod

`func (o *LockoutPolicy) GetBlockingPeriod() int64`

GetBlockingPeriod returns the BlockingPeriod field if non-nil, zero value otherwise.

### GetBlockingPeriodOk

`func (o *LockoutPolicy) GetBlockingPeriodOk() (*int64, bool)`

GetBlockingPeriodOk returns a tuple with the BlockingPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockingPeriod

`func (o *LockoutPolicy) SetBlockingPeriod(v int64)`

SetBlockingPeriod sets BlockingPeriod field to given value.


### GetCreatedAt

`func (o *LockoutPolicy) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *LockoutPolicy) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *LockoutPolicy) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


