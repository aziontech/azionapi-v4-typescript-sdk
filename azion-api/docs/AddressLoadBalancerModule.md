# AddressLoadBalancerModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServerRole** | Pointer to [**ServerRoleEnum**](ServerRoleEnum.md) | Role of the address in load balancing  * &#x60;primary&#x60; - Primary * &#x60;backup&#x60; - Backup | [optional] [default to PRIMARY]
**Weight** | Pointer to **int64** | Weight used in load balancing strategy | [optional] [default to 1]

## Methods

### NewAddressLoadBalancerModule

`func NewAddressLoadBalancerModule() *AddressLoadBalancerModule`

NewAddressLoadBalancerModule instantiates a new AddressLoadBalancerModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressLoadBalancerModuleWithDefaults

`func NewAddressLoadBalancerModuleWithDefaults() *AddressLoadBalancerModule`

NewAddressLoadBalancerModuleWithDefaults instantiates a new AddressLoadBalancerModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServerRole

`func (o *AddressLoadBalancerModule) GetServerRole() ServerRoleEnum`

GetServerRole returns the ServerRole field if non-nil, zero value otherwise.

### GetServerRoleOk

`func (o *AddressLoadBalancerModule) GetServerRoleOk() (*ServerRoleEnum, bool)`

GetServerRoleOk returns a tuple with the ServerRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerRole

`func (o *AddressLoadBalancerModule) SetServerRole(v ServerRoleEnum)`

SetServerRole sets ServerRole field to given value.

### HasServerRole

`func (o *AddressLoadBalancerModule) HasServerRole() bool`

HasServerRole returns a boolean if a field has been set.

### GetWeight

`func (o *AddressLoadBalancerModule) GetWeight() int64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *AddressLoadBalancerModule) GetWeightOk() (*int64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *AddressLoadBalancerModule) SetWeight(v int64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *AddressLoadBalancerModule) HasWeight() bool`

HasWeight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


