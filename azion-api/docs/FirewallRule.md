# FirewallRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Criteria** | [**[][]FirewallCriterionField**]([]FirewallCriterionField.md) |  | 
**Behaviors** | [**[]FirewallBehavior**](FirewallBehavior.md) |  | 
**Description** | Pointer to **string** |  | [optional] 
**Order** | **int64** |  | [readonly] 

## Methods

### NewFirewallRule

`func NewFirewallRule(id int64, name string, lastEditor string, lastModified time.Time, createdAt time.Time, criteria [][]FirewallCriterionField, behaviors []FirewallBehavior, order int64, ) *FirewallRule`

NewFirewallRule instantiates a new FirewallRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallRuleWithDefaults

`func NewFirewallRuleWithDefaults() *FirewallRule`

NewFirewallRuleWithDefaults instantiates a new FirewallRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FirewallRule) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FirewallRule) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FirewallRule) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *FirewallRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FirewallRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FirewallRule) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *FirewallRule) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *FirewallRule) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *FirewallRule) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *FirewallRule) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *FirewallRule) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *FirewallRule) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *FirewallRule) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *FirewallRule) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *FirewallRule) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetActive

`func (o *FirewallRule) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FirewallRule) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FirewallRule) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FirewallRule) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCriteria

`func (o *FirewallRule) GetCriteria() [][]FirewallCriterionField`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *FirewallRule) GetCriteriaOk() (*[][]FirewallCriterionField, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *FirewallRule) SetCriteria(v [][]FirewallCriterionField)`

SetCriteria sets Criteria field to given value.


### GetBehaviors

`func (o *FirewallRule) GetBehaviors() []FirewallBehavior`

GetBehaviors returns the Behaviors field if non-nil, zero value otherwise.

### GetBehaviorsOk

`func (o *FirewallRule) GetBehaviorsOk() (*[]FirewallBehavior, bool)`

GetBehaviorsOk returns a tuple with the Behaviors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBehaviors

`func (o *FirewallRule) SetBehaviors(v []FirewallBehavior)`

SetBehaviors sets Behaviors field to given value.


### GetDescription

`func (o *FirewallRule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FirewallRule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FirewallRule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FirewallRule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOrder

`func (o *FirewallRule) GetOrder() int64`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *FirewallRule) GetOrderOk() (*int64, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *FirewallRule) SetOrder(v int64)`

SetOrder sets Order field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


