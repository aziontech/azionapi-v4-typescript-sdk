# AddressLoadBalancerModuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServerRole** | Pointer to [**ServerRoleEnum**](ServerRoleEnum.md) | Role of the address in load balancing  * &#x60;primary&#x60; - Primary * &#x60;backup&#x60; - Backup | [optional] [default to PRIMARY]
**Weight** | Pointer to **int64** | Weight used in load balancing strategy | [optional] [default to 1]

## Methods

### NewAddressLoadBalancerModuleRequest

`func NewAddressLoadBalancerModuleRequest() *AddressLoadBalancerModuleRequest`

NewAddressLoadBalancerModuleRequest instantiates a new AddressLoadBalancerModuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressLoadBalancerModuleRequestWithDefaults

`func NewAddressLoadBalancerModuleRequestWithDefaults() *AddressLoadBalancerModuleRequest`

NewAddressLoadBalancerModuleRequestWithDefaults instantiates a new AddressLoadBalancerModuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServerRole

`func (o *AddressLoadBalancerModuleRequest) GetServerRole() ServerRoleEnum`

GetServerRole returns the ServerRole field if non-nil, zero value otherwise.

### GetServerRoleOk

`func (o *AddressLoadBalancerModuleRequest) GetServerRoleOk() (*ServerRoleEnum, bool)`

GetServerRoleOk returns a tuple with the ServerRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerRole

`func (o *AddressLoadBalancerModuleRequest) SetServerRole(v ServerRoleEnum)`

SetServerRole sets ServerRole field to given value.

### HasServerRole

`func (o *AddressLoadBalancerModuleRequest) HasServerRole() bool`

HasServerRole returns a boolean if a field has been set.

### GetWeight

`func (o *AddressLoadBalancerModuleRequest) GetWeight() int64`

GetWeight returns the Weight field if non-nil, zero value otherwise.

### GetWeightOk

`func (o *AddressLoadBalancerModuleRequest) GetWeightOk() (*int64, bool)`

GetWeightOk returns a tuple with the Weight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeight

`func (o *AddressLoadBalancerModuleRequest) SetWeight(v int64)`

SetWeight sets Weight field to given value.

### HasWeight

`func (o *AddressLoadBalancerModuleRequest) HasWeight() bool`

HasWeight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


