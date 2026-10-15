# PatchedRequestPhaseRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | Pointer to [**[][]ApplicationCriterionFieldRequest**]([]ApplicationCriterionFieldRequest.md) |  | [optional] 
**Behaviors** | Pointer to [**[]RequestPhaseBehaviorRequest**](RequestPhaseBehaviorRequest.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedRequestPhaseRule

`func NewPatchedRequestPhaseRule() *PatchedRequestPhaseRule`

NewPatchedRequestPhaseRule instantiates a new PatchedRequestPhaseRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedRequestPhaseRuleWithDefaults

`func NewPatchedRequestPhaseRuleWithDefaults() *PatchedRequestPhaseRule`

NewPatchedRequestPhaseRuleWithDefaults instantiates a new PatchedRequestPhaseRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedRequestPhaseRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedRequestPhaseRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedRequestPhaseRule) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedRequestPhaseRule) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedRequestPhaseRule) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedRequestPhaseRule) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedRequestPhaseRule) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedRequestPhaseRule) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *PatchedRequestPhaseRule) GetCriteria() [][]ApplicationCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PatchedRequestPhaseRule) GetCriteriaOk() (*[][]ApplicationCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PatchedRequestPhaseRule) SetCriteria(v [][]ApplicationCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PatchedRequestPhaseRule) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetBehaviors

`func (o *PatchedRequestPhaseRule) GetBehaviors() []RequestPhaseBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *PatchedRequestPhaseRule) GetBehaviorsOk() (*[]RequestPhaseBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *PatchedRequestPhaseRule) SetBehaviors(v []RequestPhaseBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.

### HasBehaviors

`func (o *PatchedRequestPhaseRule) HasBehaviors() bool`

HasBehaviors returns a boolean if a field has been set.

### GetDescription

`func (o *PatchedRequestPhaseRule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PatchedRequestPhaseRule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PatchedRequestPhaseRule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PatchedRequestPhaseRule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


