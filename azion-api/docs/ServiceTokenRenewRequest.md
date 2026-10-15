# ServiceTokenRenewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expires** | **time.Time** |  | 

## Methods

### NewServiceTokenRenewRequest

`func NewServiceTokenRenewRequest(expires time.Time, ) *ServiceTokenRenewRequest`

NewServiceTokenRenewRequest instantiates a new ServiceTokenRenewRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTokenRenewRequestWithDefaults

`func NewServiceTokenRenewRequestWithDefaults() *ServiceTokenRenewRequest`

NewServiceTokenRenewRequestWithDefaults instantiates a new ServiceTokenRenewRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpires

`func (o *ServiceTokenRenewRequest) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *ServiceTokenRenewRequest) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *ServiceTokenRenewRequest) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


