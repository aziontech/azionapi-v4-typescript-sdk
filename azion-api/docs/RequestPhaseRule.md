# RequestPhaseRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | [**[][]ApplicationCriterionField**]([]ApplicationCriterionField.md) |  | 
**Behaviors** | [**[]RequestPhaseBehavior**](RequestPhaseBehavior.md) |  | 
**Description** | Pointer to **string** |  | [optional] 
**Order** | **int64** |  | [readonly] 
**LastEditor** | **NullableString** |  | [readonly] 
**LastModified** | **NullableTime** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewRequestPhaseRule

`func NewRequestPhaseRule(id int64, name string, criteria [][]ApplicationCriterionField, behaviors []RequestPhaseBehavior, order int64, lastEditor NullableString, lastModified NullableTime, createdAt time.Time, ) *RequestPhaseRule`

NewRequestPhaseRule instantiates a new RequestPhaseRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestPhaseRuleWithDefaults

`func NewRequestPhaseRuleWithDefaults() *RequestPhaseRule`

NewRequestPhaseRuleWithDefaults instantiates a new RequestPhaseRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RequestPhaseRule) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestPhaseRule) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestPhaseRule) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *RequestPhaseRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RequestPhaseRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RequestPhaseRule) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *RequestPhaseRule) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *RequestPhaseRule) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *RequestPhaseRule) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *RequestPhaseRule) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *RequestPhaseRule) GetCriteria() [][]ApplicationCriterionField`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RequestPhaseRule) GetCriteriaOk() (*[][]ApplicationCriterionField, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RequestPhaseRule) SetCriteria(v [][]ApplicationCriterionField)`

SetCriteria sets Criteria field to given value.


### GetBehaviors

`func (o *RequestPhaseRule) GetBehaviors() []RequestPhaseBehavior`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *RequestPhaseRule) GetBehaviorsOk() (*[]RequestPhaseBehavior, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *RequestPhaseRule) SetBehaviors(v []RequestPhaseBehavior)`

SetBehaviors sets Behaviors field to given value.


### GetDescription

`func (o *RequestPhaseRule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RequestPhaseRule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RequestPhaseRule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RequestPhaseRule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOrder

`func (o *RequestPhaseRule) GetOrder() int64`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *RequestPhaseRule) GetOrderOk() (*int64, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *RequestPhaseRule) SetOrder(v int64)`

SetOrder sets Order field to given value.


### GetLastEditor

`func (o *RequestPhaseRule) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *RequestPhaseRule) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *RequestPhaseRule) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### SetLastEditorNil

`func (o *RequestPhaseRule) SetLastEditorNil(b bool)`

 SetLastEditorNil sets the value for LastEditor to be an explicit nil

### UnsetLastEditor
`func (o *RequestPhaseRule) UnsetLastEditor()`

UnsetLastEditor ensures that no value is present for LastEditor, not even an explicit nil
### GetLastModified

`func (o *RequestPhaseRule) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *RequestPhaseRule) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *RequestPhaseRule) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### SetLastModifiedNil

`func (o *RequestPhaseRule) SetLastModifiedNil(b bool)`

 SetLastModifiedNil sets the value for LastModified to be an explicit nil

### UnsetLastModified
`func (o *RequestPhaseRule) UnsetLastModified()`

UnsetLastModified ensures that no value is present for LastModified, not even an explicit nil
### GetCreatedAt

`func (o *RequestPhaseRule) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RequestPhaseRule) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RequestPhaseRule) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


