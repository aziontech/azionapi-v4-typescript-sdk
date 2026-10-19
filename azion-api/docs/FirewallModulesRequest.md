# FirewallModulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Functions** | Pointer to [**FirewallModuleRequest**](FirewallModuleRequest.md) |  | [optional] 
**NetworkProtection** | Pointer to [**FirewallModuleRequest**](FirewallModuleRequest.md) |  | [optional] 
**Waf** | Pointer to [**FirewallModuleRequest**](FirewallModuleRequest.md) |  | [optional] 

## Methods

### NewFirewallModulesRequest

`func NewFirewallModulesRequest() *FirewallModulesRequest`

NewFirewallModulesRequest instantiates a new FirewallModulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallModulesRequestWithDefaults

`func NewFirewallModulesRequestWithDefaults() *FirewallModulesRequest`

NewFirewallModulesRequestWithDefaults instantiates a new FirewallModulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctions

`func (o *FirewallModulesRequest) GetFunctions() FirewallModuleRequest`

GetFunctions returns the Functions field if non-nil, zero value otherwise.

### GetFunctionsOk

`func (o *FirewallModulesRequest) GetFunctionsOk() (*FirewallModuleRequest, bool)`

GetFunctionsOk returns a tuple with the Functions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctions

`func (o *FirewallModulesRequest) SetFunctions(v FirewallModuleRequest)`

SetFunctions sets Functions field to given value.

### HasFunctions

`func (o *FirewallModulesRequest) HasFunctions() bool`

HasFunctions returns a boolean if a field has been set.

### GetNetworkProtection

`func (o *FirewallModulesRequest) GetNetworkProtection() FirewallModuleRequest`

GetNetworkProtection returns the NetworkProtection field if non-nil, zero value otherwise.

### GetNetworkProtectionOk

`func (o *FirewallModulesRequest) GetNetworkProtectionOk() (*FirewallModuleRequest, bool)`

GetNetworkProtectionOk returns a tuple with the NetworkProtection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetworkProtection

`func (o *FirewallModulesRequest) SetNetworkProtection(v FirewallModuleRequest)`

SetNetworkProtection sets NetworkProtection field to given value.

### HasNetworkProtection

`func (o *FirewallModulesRequest) HasNetworkProtection() bool`

HasNetworkProtection returns a boolean if a field has been set.

### GetWaf

`func (o *FirewallModulesRequest) GetWaf() FirewallModuleRequest`

GetWaf returns the Waf field if non-nil, zero value otherwise.

### GetWafOk

`func (o *FirewallModulesRequest) GetWafOk() (*FirewallModuleRequest, bool)`

GetWafOk returns a tuple with the Waf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaf

`func (o *FirewallModulesRequest) SetWaf(v FirewallModuleRequest)`

SetWaf sets Waf field to given value.

### HasWaf

`func (o *FirewallModulesRequest) HasWaf() bool`

HasWaf returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


