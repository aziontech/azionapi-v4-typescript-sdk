# OriginShieldConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OriginIpAcl** | Pointer to [**OriginIPACL**](OriginIPACL.md) |  | [optional] 
**Hmac** | Pointer to [**HMAC**](HMAC.md) |  | [optional] 

## Methods

### NewOriginShieldConfig

`func NewOriginShieldConfig() *OriginShieldConfig`

NewOriginShieldConfig instantiates a new OriginShieldConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOriginShieldConfigWithDefaults

`func NewOriginShieldConfigWithDefaults() *OriginShieldConfig`

NewOriginShieldConfigWithDefaults instantiates a new OriginShieldConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOriginIpAcl

`func (o *OriginShieldConfig) GetOriginIpAcl() OriginIPACL`

GetOriginIpAcl returns the OriginIpAcl field if non-nil, zero value otherwise.

### GetOriginIpAclOk

`func (o *OriginShieldConfig) GetOriginIpAclOk() (*OriginIPACL, bool)`

GetOriginIpAclOk returns a tuple with the OriginIpAcl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginIpAcl

`func (o *OriginShieldConfig) SetOriginIpAcl(v OriginIPACL)`

SetOriginIpAcl sets OriginIpAcl field to given value.

### HasOriginIpAcl

`func (o *OriginShieldConfig) HasOriginIpAcl() bool`

HasOriginIpAcl returns a boolean if a field has been set.

### GetHmac

`func (o *OriginShieldConfig) GetHmac() HMAC`

GetHmac returns the Hmac field if non-nil, zero value otherwise.

### GetHmacOk

`func (o *OriginShieldConfig) GetHmacOk() (*HMAC, bool)`

GetHmacOk returns a tuple with the Hmac field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHmac

`func (o *OriginShieldConfig) SetHmac(v HMAC)`

SetHmac sets Hmac field to given value.

### HasHmac

`func (o *OriginShieldConfig) HasHmac() bool`

HasHmac returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


