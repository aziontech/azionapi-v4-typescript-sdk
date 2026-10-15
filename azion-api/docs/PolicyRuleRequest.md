# PolicyRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Effect** | **string** | * &#x60;allow&#x60; - allow * &#x60;deny&#x60; - deny | 
**Resource** | **string** | Resource pattern (regex supported) | 
**Actions** | **[]string** |  | 
**Condition** | [**PolicyRuleConditionRequest**](PolicyRuleConditionRequest.md) |  | 

## Methods

### NewPolicyRuleRequest

`func NewPolicyRuleRequest(name string, effect string, resource string, actions []string, condition PolicyRuleConditionRequest, ) *PolicyRuleRequest`

NewPolicyRuleRequest instantiates a new PolicyRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyRuleRequestWithDefaults

`func NewPolicyRuleRequestWithDefaults() *PolicyRuleRequest`

NewPolicyRuleRequestWithDefaults instantiates a new PolicyRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PolicyRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PolicyRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PolicyRuleRequest) SetName(v string)`

SetName sets Name field to given value.


### GetEffect

`func (o *PolicyRuleRequest) GetEffect() string`

GetEffect returns the Effect field if non-nil, zero value otherwise.

### GetEffectOk

`func (o *PolicyRuleRequest) GetEffectOk() (*string, bool)`

GetEffectOk returns a tuple with the Effect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffect

`func (o *PolicyRuleRequest) SetEffect(v string)`

SetEffect sets Effect field to given value.


### GetResource

`func (o *PolicyRuleRequest) GetResource() string`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *PolicyRuleRequest) GetResourceOk() (*string, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *PolicyRuleRequest) SetResource(v string)`

SetResource sets Resource field to given value.


### GetActions

`func (o *PolicyRuleRequest) GetActions() []string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *PolicyRuleRequest) GetActionsOk() (*[]string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *PolicyRuleRequest) SetActions(v []string)`

SetActions sets Actions field to given value.


### GetCondition

`func (o *PolicyRuleRequest) GetCondition() PolicyRuleConditionRequest`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *PolicyRuleRequest) GetConditionOk() (*PolicyRuleConditionRequest, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *PolicyRuleRequest) SetCondition(v PolicyRuleConditionRequest)`

SetCondition sets Condition field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


