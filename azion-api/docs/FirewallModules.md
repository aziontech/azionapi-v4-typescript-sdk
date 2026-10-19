# FirewallModules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DdosProtection** | [**FirewallModule**](FirewallModule.md) |  | [readonly] 
**Functions** | Pointer to [**FirewallModule**](FirewallModule.md) |  | [optional] 
**NetworkProtection** | Pointer to [**FirewallModule**](FirewallModule.md) |  | [optional] 
**Waf** | Pointer to [**FirewallModule**](FirewallModule.md) |  | [optional] 

## Methods

### NewFirewallModules

`func NewFirewallModules(ddosProtection FirewallModule, ) *FirewallModules`

NewFirewallModules instantiates a new FirewallModules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallModulesWithDefaults

`func NewFirewallModulesWithDefaults() *FirewallModules`

NewFirewallModulesWithDefaults instantiates a new FirewallModules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDdosProtection

`func (o *FirewallModules) GetDdosProtection() FirewallModule`

GetDdosProtection returns the DdosProtection field if non-nil, zero value otherwise.

### GetDdosProtectionOk

`func (o *FirewallModules) GetDdosProtectionOk() (*FirewallModule, bool)`

GetDdosProtectionOk returns a tuple with the DdosProtection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDdosProtection

`func (o *FirewallModules) SetDdosProtection(v FirewallModule)`

SetDdosProtection sets DdosProtection field to given value.


### GetFunctions

`func (o *FirewallModules) GetFunctions() FirewallModule`

GetFunctions returns the Functions field if non-nil, zero value otherwise.

### GetFunctionsOk

`func (o *FirewallModules) GetFunctionsOk() (*FirewallModule, bool)`

GetFunctionsOk returns a tuple with the Functions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctions

`func (o *FirewallModules) SetFunctions(v FirewallModule)`

SetFunctions sets Functions field to given value.

### HasFunctions

`func (o *FirewallModules) HasFunctions() bool`

HasFunctions returns a boolean if a field has been set.

### GetNetworkProtection

`func (o *FirewallModules) GetNetworkProtection() FirewallModule`

GetNetworkProtection returns the NetworkProtection field if non-nil, zero value otherwise.

### GetNetworkProtectionOk

`func (o *FirewallModules) GetNetworkProtectionOk() (*FirewallModule, bool)`

GetNetworkProtectionOk returns a tuple with the NetworkProtection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetworkProtection

`func (o *FirewallModules) SetNetworkProtection(v FirewallModule)`

SetNetworkProtection sets NetworkProtection field to given value.

### HasNetworkProtection

`func (o *FirewallModules) HasNetworkProtection() bool`

HasNetworkProtection returns a boolean if a field has been set.

### GetWaf

`func (o *FirewallModules) GetWaf() FirewallModule`

GetWaf returns the Waf field if non-nil, zero value otherwise.

### GetWafOk

`func (o *FirewallModules) GetWafOk() (*FirewallModule, bool)`

GetWafOk returns a tuple with the Waf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaf

`func (o *FirewallModules) SetWaf(v FirewallModule)`

SetWaf sets Waf field to given value.

### HasWaf

`func (o *FirewallModules) HasWaf() bool`

HasWaf returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


