# DefaultDeploymentStrategyAttrsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **int64** |  | 
**Firewall** | Pointer to **NullableInt64** |  | [optional] 
**CustomPage** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewDefaultDeploymentStrategyAttrsRequest

`func NewDefaultDeploymentStrategyAttrsRequest(application int64, ) *DefaultDeploymentStrategyAttrsRequest`

NewDefaultDeploymentStrategyAttrsRequest instantiates a new DefaultDeploymentStrategyAttrsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefaultDeploymentStrategyAttrsRequestWithDefaults

`func NewDefaultDeploymentStrategyAttrsRequestWithDefaults() *DefaultDeploymentStrategyAttrsRequest`

NewDefaultDeploymentStrategyAttrsRequestWithDefaults instantiates a new DefaultDeploymentStrategyAttrsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplication

`func (o *DefaultDeploymentStrategyAttrsRequest) GetApplication() int64`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *DefaultDeploymentStrategyAttrsRequest) GetApplicationOk() (*int64, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *DefaultDeploymentStrategyAttrsRequest) SetApplication(v int64)`

SetApplication sets Application field to given value.


### GetFirewall

`func (o *DefaultDeploymentStrategyAttrsRequest) GetFirewall() int64`

GetFirewall returns the Firewall field if non-nil, zero value otherwise.

### GetFirewallOk

`func (o *DefaultDeploymentStrategyAttrsRequest) GetFirewallOk() (*int64, bool)`

GetFirewallOk returns a tuple with the Firewall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirewall

`func (o *DefaultDeploymentStrategyAttrsRequest) SetFirewall(v int64)`

SetFirewall sets Firewall field to given value.

### HasFirewall

`func (o *DefaultDeploymentStrategyAttrsRequest) HasFirewall() bool`

HasFirewall returns a boolean if a field has been set.

### SetFirewallNil

`func (o *DefaultDeploymentStrategyAttrsRequest) SetFirewallNil(b bool)`

 SetFirewallNil sets the value for Firewall to be an explicit nil

### UnsetFirewall
`func (o *DefaultDeploymentStrategyAttrsRequest) UnsetFirewall()`

UnsetFirewall ensures that no value is present for Firewall, not even an explicit nil
### GetCustomPage

`func (o *DefaultDeploymentStrategyAttrsRequest) GetCustomPage() int64`

GetCustomPage returns the CustomPage field if non-nil, zero value otherwise.

### GetCustomPageOk

`func (o *DefaultDeploymentStrategyAttrsRequest) GetCustomPageOk() (*int64, bool)`

GetCustomPageOk returns a tuple with the CustomPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomPage

`func (o *DefaultDeploymentStrategyAttrsRequest) SetCustomPage(v int64)`

SetCustomPage sets CustomPage field to given value.

### HasCustomPage

`func (o *DefaultDeploymentStrategyAttrsRequest) HasCustomPage() bool`

HasCustomPage returns a boolean if a field has been set.

### SetCustomPageNil

`func (o *DefaultDeploymentStrategyAttrsRequest) SetCustomPageNil(b bool)`

 SetCustomPageNil sets the value for CustomPage to be an explicit nil

### UnsetCustomPage
`func (o *DefaultDeploymentStrategyAttrsRequest) UnsetCustomPage()`

UnsetCustomPage ensures that no value is present for CustomPage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


