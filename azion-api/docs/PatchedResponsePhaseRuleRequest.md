# PatchedResponsePhaseRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | Pointer to [**[][]ApplicationCriterionFieldRequest**]([]ApplicationCriterionFieldRequest.md) |  | [optional] 
**Behaviors** | Pointer to [**[]ResponsePhaseBehaviorRequest**](ResponsePhaseBehaviorRequest.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedResponsePhaseRuleRequest

`func NewPatchedResponsePhaseRuleRequest() *PatchedResponsePhaseRuleRequest`

NewPatchedResponsePhaseRuleRequest instantiates a new PatchedResponsePhaseRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedResponsePhaseRuleRequestWithDefaults

`func NewPatchedResponsePhaseRuleRequestWithDefaults() *PatchedResponsePhaseRuleRequest`

NewPatchedResponsePhaseRuleRequestWithDefaults instantiates a new PatchedResponsePhaseRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedResponsePhaseRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedResponsePhaseRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedResponsePhaseRuleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedResponsePhaseRuleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedResponsePhaseRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedResponsePhaseRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedResponsePhaseRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedResponsePhaseRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *PatchedResponsePhaseRuleRequest) GetCriteria() [][]ApplicationCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PatchedResponsePhaseRuleRequest) GetCriteriaOk() (*[][]ApplicationCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PatchedResponsePhaseRuleRequest) SetCriteria(v [][]ApplicationCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PatchedResponsePhaseRuleRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetBehaviors

`func (o *PatchedResponsePhaseRuleRequest) GetBehaviors() []ResponsePhaseBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *PatchedResponsePhaseRuleRequest) GetBehaviorsOk() (*[]ResponsePhaseBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *PatchedResponsePhaseRuleRequest) SetBehaviors(v []ResponsePhaseBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.

### HasBehaviors

`func (o *PatchedResponsePhaseRuleRequest) HasBehaviors() bool`

HasBehaviors returns a boolean if a field has been set.

### GetDescription

`func (o *PatchedResponsePhaseRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PatchedResponsePhaseRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PatchedResponsePhaseRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PatchedResponsePhaseRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


