# HTTPModules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LoadBalancer** | Pointer to [**LoadBalancerModule**](LoadBalancerModule.md) |  | [optional] 
**OriginShield** | Pointer to [**OriginShieldModule**](OriginShieldModule.md) |  | [optional] 

## Methods

### NewHTTPModules

`func NewHTTPModules() *HTTPModules`

NewHTTPModules instantiates a new HTTPModules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHTTPModulesWithDefaults

`func NewHTTPModulesWithDefaults() *HTTPModules`

NewHTTPModulesWithDefaults instantiates a new HTTPModules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLoadBalancer

`func (o *HTTPModules) GetLoadBalancer() LoadBalancerModule`

GetLoadBalancer returns the LoadBalancer field if non-nil, zero value otherwise.

### GetLoadBalancerOk

`func (o *HTTPModules) GetLoadBalancerOk() (*LoadBalancerModule, bool)`

GetLoadBalancerOk returns a tuple with the LoadBalancer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadBalancer

`func (o *HTTPModules) SetLoadBalancer(v LoadBalancerModule)`

SetLoadBalancer sets LoadBalancer field to given value.

### HasLoadBalancer

`func (o *HTTPModules) HasLoadBalancer() bool`

HasLoadBalancer returns a boolean if a field has been set.

### GetOriginShield

`func (o *HTTPModules) GetOriginShield() OriginShieldModule`

GetOriginShield returns the OriginShield field if non-nil, zero value otherwise.

### GetOriginShieldOk

`func (o *HTTPModules) GetOriginShieldOk() (*OriginShieldModule, bool)`

GetOriginShieldOk returns a tuple with the OriginShield field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginShield

`func (o *HTTPModules) SetOriginShield(v OriginShieldModule)`

SetOriginShield sets OriginShield field to given value.

### HasOriginShield

`func (o *HTTPModules) HasOriginShield() bool`

HasOriginShield returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


