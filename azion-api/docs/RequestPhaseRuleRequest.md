# RequestPhaseRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | [**[][]ApplicationCriterionFieldRequest**]([]ApplicationCriterionFieldRequest.md) |  | 
**Behaviors** | [**[]RequestPhaseBehaviorRequest**](RequestPhaseBehaviorRequest.md) |  | 
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewRequestPhaseRuleRequest

`func NewRequestPhaseRuleRequest(name string, criteria [][]ApplicationCriterionFieldRequest, behaviors []RequestPhaseBehaviorRequest, ) *RequestPhaseRuleRequest`

NewRequestPhaseRuleRequest instantiates a new RequestPhaseRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestPhaseRuleRequestWithDefaults

`func NewRequestPhaseRuleRequestWithDefaults() *RequestPhaseRuleRequest`

NewRequestPhaseRuleRequestWithDefaults instantiates a new RequestPhaseRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RequestPhaseRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RequestPhaseRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RequestPhaseRuleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *RequestPhaseRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *RequestPhaseRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *RequestPhaseRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *RequestPhaseRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *RequestPhaseRuleRequest) GetCriteria() [][]ApplicationCriterionFieldRequest`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RequestPhaseRuleRequest) GetCriteriaOk() (*[][]ApplicationCriterionFieldRequest, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RequestPhaseRuleRequest) SetCriteria(v [][]ApplicationCriterionFieldRequest)`

SetCriteria sets Criteria field to given value.


### GetBehaviors

`func (o *RequestPhaseRuleRequest) GetBehaviors() []RequestPhaseBehaviorRequest`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *RequestPhaseRuleRequest) GetBehaviorsOk() (*[]RequestPhaseBehaviorRequest, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *RequestPhaseRuleRequest) SetBehaviors(v []RequestPhaseBehaviorRequest)`

SetBehaviors sets Behaviors field to given value.


### GetDescription

`func (o *RequestPhaseRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RequestPhaseRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RequestPhaseRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RequestPhaseRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


