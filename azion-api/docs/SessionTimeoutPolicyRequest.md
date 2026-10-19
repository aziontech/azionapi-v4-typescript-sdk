# SessionTimeoutPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | **int64** |  | 
**MaxSessionTime** | **int64** |  | 

## Methods

### NewSessionTimeoutPolicyRequest

`func NewSessionTimeoutPolicyRequest(maxIdleTime int64, maxSessionTime int64, ) *SessionTimeoutPolicyRequest`

NewSessionTimeoutPolicyRequest instantiates a new SessionTimeoutPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSessionTimeoutPolicyRequestWithDefaults

`func NewSessionTimeoutPolicyRequestWithDefaults() *SessionTimeoutPolicyRequest`

NewSessionTimeoutPolicyRequestWithDefaults instantiates a new SessionTimeoutPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxIdleTime

`func (o *SessionTimeoutPolicyRequest) GetMaxIdleTime() int64`

GetMaxIdleTime returns the MaxIdleTime field if non-nil, zero value otherwise.

### GetMaxIdleTimeOk

`func (o *SessionTimeoutPolicyRequest) GetMaxIdleTimeOk() (*int64, bool)`

GetMaxIdleTimeOk returns a tuple with the MaxIdleTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxIdleTime

`func (o *SessionTimeoutPolicyRequest) SetMaxIdleTime(v int64)`

SetMaxIdleTime sets MaxIdleTime field to given value.


### GetMaxSessionTime

`func (o *SessionTimeoutPolicyRequest) GetMaxSessionTime() int64`

GetMaxSessionTime returns the MaxSessionTime field if non-nil, zero value otherwise.

### GetMaxSessionTimeOk

`func (o *SessionTimeoutPolicyRequest) GetMaxSessionTimeOk() (*int64, bool)`

GetMaxSessionTimeOk returns a tuple with the MaxSessionTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSessionTime

`func (o *SessionTimeoutPolicyRequest) SetMaxSessionTime(v int64)`

SetMaxSessionTime sets MaxSessionTime field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


