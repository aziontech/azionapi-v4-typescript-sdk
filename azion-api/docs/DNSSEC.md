# DNSSEC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **bool** |  | 
**Status** | **string** | * &#x60;unconfigured&#x60; - unconfigured * &#x60;waiting&#x60; - waiting * &#x60;ready&#x60; - ready | [readonly] 
**DelegationSigner** | [**NullableDelegationSigner**](DelegationSigner.md) |  | [readonly] 

## Methods

### NewDNSSEC

`func NewDNSSEC(enabled bool, status string, delegationSigner NullableDelegationSigner, ) *DNSSEC`

NewDNSSEC instantiates a new DNSSEC object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDNSSECWithDefaults

`func NewDNSSECWithDefaults() *DNSSEC`

NewDNSSECWithDefaults instantiates a new DNSSEC object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *DNSSEC) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *DNSSEC) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *DNSSEC) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetStatus

`func (o *DNSSEC) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DNSSEC) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DNSSEC) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetDelegationSigner

`func (o *DNSSEC) GetDelegationSigner() DelegationSigner`

GetDelegationSigner returns the DelegationSigner field if non-nil, zero value otherwise.

### GetDelegationSignerOk

`func (o *DNSSEC) GetDelegationSignerOk() (*DelegationSigner, bool)`

GetDelegationSignerOk returns a tuple with the DelegationSigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelegationSigner

`func (o *DNSSEC) SetDelegationSigner(v DelegationSigner)`

SetDelegationSigner sets DelegationSigner field to given value.


### SetDelegationSignerNil

`func (o *DNSSEC) SetDelegationSignerNil(b bool)`

 SetDelegationSignerNil sets the value for DelegationSigner to be an explicit nil

### UnsetDelegationSigner
`func (o *DNSSEC) UnsetDelegationSigner()`

UnsetDelegationSigner ensures that no value is present for DelegationSigner, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


