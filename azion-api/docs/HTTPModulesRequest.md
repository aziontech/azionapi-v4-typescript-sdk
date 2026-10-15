# HTTPModulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LoadBalancer** | Pointer to [**LoadBalancerModuleRequest**](LoadBalancerModuleRequest.md) |  | [optional] 
**OriginShield** | Pointer to [**OriginShieldModuleRequest**](OriginShieldModuleRequest.md) |  | [optional] 

## Methods

### NewHTTPModulesRequest

`func NewHTTPModulesRequest() *HTTPModulesRequest`

NewHTTPModulesRequest instantiates a new HTTPModulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHTTPModulesRequestWithDefaults

`func NewHTTPModulesRequestWithDefaults() *HTTPModulesRequest`

NewHTTPModulesRequestWithDefaults instantiates a new HTTPModulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLoadBalancer

`func (o *HTTPModulesRequest) GetLoadBalancer() LoadBalancerModuleRequest`

GetLoadBalancer returns the LoadBalancer field if non-nil, zero value otherwise.

### GetLoadBalancerOk

`func (o *HTTPModulesRequest) GetLoadBalancerOk() (*LoadBalancerModuleRequest, bool)`

GetLoadBalancerOk returns a tuple with the LoadBalancer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadBalancer

`func (o *HTTPModulesRequest) SetLoadBalancer(v LoadBalancerModuleRequest)`

SetLoadBalancer sets LoadBalancer field to given value.

### HasLoadBalancer

`func (o *HTTPModulesRequest) HasLoadBalancer() bool`

HasLoadBalancer returns a boolean if a field has been set.

### GetOriginShield

`func (o *HTTPModulesRequest) GetOriginShield() OriginShieldModuleRequest`

GetOriginShield returns the OriginShield field if non-nil, zero value otherwise.

### GetOriginShieldOk

`func (o *HTTPModulesRequest) GetOriginShieldOk() (*OriginShieldModuleRequest, bool)`

GetOriginShieldOk returns a tuple with the OriginShield field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginShield

`func (o *HTTPModulesRequest) SetOriginShield(v OriginShieldModuleRequest)`

SetOriginShield sets OriginShield field to given value.

### HasOriginShield

`func (o *HTTPModulesRequest) HasOriginShield() bool`

HasOriginShield returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


