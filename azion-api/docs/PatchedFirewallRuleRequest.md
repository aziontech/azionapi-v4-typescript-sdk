# PatchedFirewallRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | Pointer to [**[][]FirewallCriterionFieldRequest**]([]FirewallCriterionFieldRequest.md) |  | [optional] 
**Behaviors** | Pointer to [**[]FirewallBehaviorRequest**](FirewallBehaviorRequest.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedFirewallRuleRequest

`func NewPatchedFirewallRuleRequest() *PatchedFirewallRuleRequest`

NewPatchedFirewallRuleRequest instantiates a new PatchedFirewallRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedFirewallRuleRequestWithDefaults

`func NewPatchedFirewallRuleRequestWithDefaults() *PatchedFirewallRuleRequest`

NewPatchedFirewallRuleRequestWithDefaults instantiates a new PatchedFirewallRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedFirewallRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedFirewallRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedFirewallRuleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedFirewallRuleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedFirewallRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedFirewallRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedFirewallRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedFirewallRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *PatchedFirewallRuleRequest) GetCriteria() [][]FirewallCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PatchedFirewallRuleRequest) GetCriteriaOk() (*[][]FirewallCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PatchedFirewallRuleRequest) SetCriteria(v [][]FirewallCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PatchedFirewallRuleRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetBehaviors

`func (o *PatchedFirewallRuleRequest) GetBehaviors() []FirewallBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *PatchedFirewallRuleRequest) GetBehaviorsOk() (*[]FirewallBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *PatchedFirewallRuleRequest) SetBehaviors(v []FirewallBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.

### HasBehaviors

`func (o *PatchedFirewallRuleRequest) HasBehaviors() bool`

HasBehaviors returns a boolean if a field has been set.

### GetDescription

`func (o *PatchedFirewallRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PatchedFirewallRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PatchedFirewallRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PatchedFirewallRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


