# FirewallRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | [**[][]FirewallCriterionFieldRequest**]([]FirewallCriterionFieldRequest.md) |  | 
**Behaviors** | [**[]FirewallBehaviorRequest**](FirewallBehaviorRequest.md) |  | 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewFirewallRuleRequest

`func NewFirewallRuleRequest(name string, criteria [][]FirewallCriterionFieldRequest, behaviors []FirewallBehaviorRequest, ) *FirewallRuleRequest`

NewFirewallRuleRequest instantiates a new FirewallRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallRuleRequestWithDefaults

`func NewFirewallRuleRequestWithDefaults() *FirewallRuleRequest`

NewFirewallRuleRequestWithDefaults instantiates a new FirewallRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FirewallRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FirewallRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FirewallRuleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *FirewallRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FirewallRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FirewallRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FirewallRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *FirewallRuleRequest) GetCriteria() [][]FirewallCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *FirewallRuleRequest) GetCriteriaOk() (*[][]FirewallCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *FirewallRuleRequest) SetCriteria(v [][]FirewallCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.


### GetBehaviors

`func (o *FirewallRuleRequest) GetBehaviors() []FirewallBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *FirewallRuleRequest) GetBehaviorsOk() (*[]FirewallBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *FirewallRuleRequest) SetBehaviors(v []FirewallBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.


### GetDescription

`func (o *FirewallRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FirewallRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FirewallRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FirewallRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


