# PolicyRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Effect** | **string** | * &#x60;allow&#x60; - allow * &#x60;deny&#x60; - deny | 
**Resource** | **string** | Resource pattern (regex supported) | 
**Actions** | **[]string** |  | 
**Condition** | [**PolicyRuleCondition**](PolicyRuleCondition.md) |  | 

## Methods

### NewPolicyRule

`func NewPolicyRule(name string, effect string, resource string, actions []string, condition PolicyRuleCondition, ) *PolicyRule`

NewPolicyRule instantiates a new PolicyRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyRuleWithDefaults

`func NewPolicyRuleWithDefaults() *PolicyRule`

NewPolicyRuleWithDefaults instantiates a new PolicyRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PolicyRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PolicyRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PolicyRule) SetName(v string)`

SetName sets Name field to given value.


### GetEffect

`func (o *PolicyRule) GetEffect() string`

GetEffect returns the Effect field if non-nil, zero value otherwise.

### GetEffectOk

`func (o *PolicyRule) GetEffectOk() (*string, bool)`

GetEffectOk returns a tuple with the Effect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffect

`func (o *PolicyRule) SetEffect(v string)`

SetEffect sets Effect field to given value.


### GetResource

`func (o *PolicyRule) GetResource() string`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *PolicyRule) GetResourceOk() (*string, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *PolicyRule) SetResource(v string)`

SetResource sets Resource field to given value.


### GetActions

`func (o *PolicyRule) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *PolicyRule) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *PolicyRule) SetActions(v []string)`

SetActions sets Actions field to given value.


### GetCondition

`func (o *PolicyRule) GetCondition() PolicyRuleCondition`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *PolicyRule) GetConditionOk() (*PolicyRuleCondition, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *PolicyRule) SetCondition(v PolicyRuleCondition)`

SetCondition sets Condition field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


