# OriginShieldConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OriginIpAcl** | Pointer to [**OriginIPACLRequest**](OriginIPACLRequest.md) |  | [optional] 
**Hmac** | Pointer to [**HMACRequest**](HMACRequest.md) |  | [optional] 

## Methods

### NewOriginShieldConfigRequest

`func NewOriginShieldConfigRequest() *OriginShieldConfigRequest`

NewOriginShieldConfigRequest instantiates a new OriginShieldConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOriginShieldConfigRequestWithDefaults

`func NewOriginShieldConfigRequestWithDefaults() *OriginShieldConfigRequest`

NewOriginShieldConfigRequestWithDefaults instantiates a new OriginShieldConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOriginIpAcl

`func (o *OriginShieldConfigRequest) GetOriginIpAcl() OriginIPACLRequest`

GetOriginIpAcl returns the OriginIpAcl field if non-nil, zero value otherwise.

### GetOriginIpAclOk

`func (o *OriginShieldConfigRequest) GetOriginIpAclOk() (*OriginIPACLRequest, bool)`

GetOriginIpAclOk returns a tuple with the OriginIpAcl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginIpAcl

`func (o *OriginShieldConfigRequest) SetOriginIpAcl(v OriginIPACLRequest)`

SetOriginIpAcl sets OriginIpAcl field to given value.

### HasOriginIpAcl

`func (o *OriginShieldConfigRequest) HasOriginIpAcl() bool`

HasOriginIpAcl returns a boolean if a field has been set.

### GetHmac

`func (o *OriginShieldConfigRequest) GetHmac() HMACRequest`

GetHmac returns the Hmac field if non-nil, zero value otherwise.

### GetHmacOk

`func (o *OriginShieldConfigRequest) GetHmacOk() (*HMACRequest, bool)`

GetHmacOk returns a tuple with the Hmac field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHmac

`func (o *OriginShieldConfigRequest) SetHmac(v HMACRequest)`

SetHmac sets Hmac field to given value.

### HasHmac

`func (o *OriginShieldConfigRequest) HasHmac() bool`

HasHmac returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


