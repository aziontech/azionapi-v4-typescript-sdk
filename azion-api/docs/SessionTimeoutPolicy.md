# SessionTimeoutPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | **int64** |  | 
**MaxSessionTime** | **int64** |  | 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewSessionTimeoutPolicy

`func NewSessionTimeoutPolicy(maxIdleTime int64, maxSessionTime int64, createdAt time.Time, ) *SessionTimeoutPolicy`

NewSessionTimeoutPolicy instantiates a new SessionTimeoutPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSessionTimeoutPolicyWithDefaults

`func NewSessionTimeoutPolicyWithDefaults() *SessionTimeoutPolicy`

NewSessionTimeoutPolicyWithDefaults instantiates a new SessionTimeoutPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxIdleTime

`func (o *SessionTimeoutPolicy) GetMaxIdleTime() int64`

GetMaxIdleTime returns the MaxIdleTime field if non-nil, zero value otherwise.

### GetMaxIdleTimeOk

`func (o *SessionTimeoutPolicy) GetMaxIdleTimeOk() (*int64, bool)`

GetMaxIdleTimeOk returns a tuple with the MaxIdleTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxIdleTime

`func (o *SessionTimeoutPolicy) SetMaxIdleTime(v int64)`

SetMaxIdleTime sets MaxIdleTime field to given value.


### GetMaxSessionTime

`func (o *SessionTimeoutPolicy) GetMaxSessionTime() int64`

GetMaxSessionTime returns the MaxSessionTime field if non-nil, zero value otherwise.

### GetMaxSessionTimeOk

`func (o *SessionTimeoutPolicy) GetMaxSessionTimeOk() (*int64, bool)`

GetMaxSessionTimeOk returns a tuple with the MaxSessionTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSessionTime

`func (o *SessionTimeoutPolicy) SetMaxSessionTime(v int64)`

SetMaxSessionTime sets MaxSessionTime field to given value.


### GetCreatedAt

`func (o *SessionTimeoutPolicy) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SessionTimeoutPolicy) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SessionTimeoutPolicy) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


