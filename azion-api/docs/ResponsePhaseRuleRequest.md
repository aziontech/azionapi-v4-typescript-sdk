# ResponsePhaseRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | [**[][]ApplicationCriterionFieldRequest**]([]ApplicationCriterionFieldRequest.md) |  | 
**Behaviors** | [**[]ResponsePhaseBehaviorRequest**](ResponsePhaseBehaviorRequest.md) |  | 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewResponsePhaseRuleRequest

`func NewResponsePhaseRuleRequest(name string, criteria [][]ApplicationCriterionFieldRequest, behaviors []ResponsePhaseBehaviorRequest, ) *ResponsePhaseRuleRequest`

NewResponsePhaseRuleRequest instantiates a new ResponsePhaseRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponsePhaseRuleRequestWithDefaults

`func NewResponsePhaseRuleRequestWithDefaults() *ResponsePhaseRuleRequest`

NewResponsePhaseRuleRequestWithDefaults instantiates a new ResponsePhaseRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ResponsePhaseRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponsePhaseRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponsePhaseRuleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ResponsePhaseRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponsePhaseRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponsePhaseRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ResponsePhaseRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *ResponsePhaseRuleRequest) GetCriteria() [][]ApplicationCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ResponsePhaseRuleRequest) GetCriteriaOk() (*[][]ApplicationCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ResponsePhaseRuleRequest) SetCriteria(v [][]ApplicationCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.


### GetBehaviors

`func (o *ResponsePhaseRuleRequest) GetBehaviors() []ResponsePhaseBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *ResponsePhaseRuleRequest) GetBehaviorsOk() (*[]ResponsePhaseBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *ResponsePhaseRuleRequest) SetBehaviors(v []ResponsePhaseBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.


### GetDescription

`func (o *ResponsePhaseRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ResponsePhaseRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ResponsePhaseRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ResponsePhaseRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


