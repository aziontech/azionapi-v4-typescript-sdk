# AddressModulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LoadBalancer** | Pointer to [**AddressLoadBalancerModuleRequest**](AddressLoadBalancerModuleRequest.md) |  | [optional] 

## Methods

### NewAddressModulesRequest

`func NewAddressModulesRequest() *AddressModulesRequest`

NewAddressModulesRequest instantiates a new AddressModulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressModulesRequestWithDefaults

`func NewAddressModulesRequestWithDefaults() *AddressModulesRequest`

NewAddressModulesRequestWithDefaults instantiates a new AddressModulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLoadBalancer

`func (o *AddressModulesRequest) GetLoadBalancer() AddressLoadBalancerModuleRequest`

GetLoadBalancer returns the LoadBalancer field if non-nil, zero value otherwise.

### GetLoadBalancerOk

`func (o *AddressModulesRequest) GetLoadBalancerOk() (*AddressLoadBalancerModuleRequest, bool)`

GetLoadBalancerOk returns a tuple with the LoadBalancer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadBalancer

`func (o *AddressModulesRequest) SetLoadBalancer(v AddressLoadBalancerModuleRequest)`

SetLoadBalancer sets LoadBalancer field to given value.

### HasLoadBalancer

`func (o *AddressModulesRequest) HasLoadBalancer() bool`

HasLoadBalancer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


