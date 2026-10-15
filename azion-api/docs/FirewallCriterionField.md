# FirewallCriterionField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditional** | [**ConditionalEnum**](ConditionalEnum.md) |  | 
**Variable** | [**FirewallCriterionFieldVariableEnum**](FirewallCriterionFieldVariableEnum.md) |  | 
**Operator** | [**CriterionOperatorEnum**](CriterionOperatorEnum.md) |  | 
**Argument** | Pointer to [**NullableFirewallCriterionArgument**](FirewallCriterionArgument.md) |  | [optional] 

## Methods

### NewFirewallCriterionField

`func NewFirewallCriterionField(conditional ConditionalEnum, variable FirewallCriterionFieldVariableEnum, operator CriterionOperatorEnum, ) *FirewallCriterionField`

NewFirewallCriterionField instantiates a new FirewallCriterionField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallCriterionFieldWithDefaults

`func NewFirewallCriterionFieldWithDefaults() *FirewallCriterionField`

NewFirewallCriterionFieldWithDefaults instantiates a new FirewallCriterionField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditional

`func (o *FirewallCriterionField) GetConditional() ConditionalEnum`

GetConditional returns the Conditional field if non-nil, zero value otherwise.

### GetConditionalOk

`func (o *FirewallCriterionField) GetConditionalOk() (*ConditionalEnum, bool)`

GetConditionalOk returns a tuple with the Conditional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditional

`func (o *FirewallCriterionField) SetConditional(v ConditionalEnum)`

SetConditional sets Conditional field to given value.


### GetVariable

`func (o *FirewallCriterionField) GetVariable() FirewallCriterionFieldVariableEnum`

GetVariable returns the Variable field if non-nil, zero value otherwise.

### GetVariableOk

`func (o *FirewallCriterionField) GetVariableOk() (*FirewallCriterionFieldVariableEnum, bool)`

GetVariableOk returns a tuple with the Variable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariable

`func (o *FirewallCriterionField) SetVariable(v FirewallCriterionFieldVariableEnum)`

SetVariable sets Variable field to given value.


### GetOperator

`func (o *FirewallCriterionField) GetOperator() CriterionOperatorEnum`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *FirewallCriterionField) GetOperatorOk() (*CriterionOperatorEnum, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *FirewallCriterionField) SetOperator(v CriterionOperatorEnum)`

SetOperator sets Operator field to given value.


### GetArgument

`func (o *FirewallCriterionField) GetArgument() FirewallCriterionArgument`

GetArgument returns the Argument field if non-nil, zero value otherwise.

### GetArgumentOk

`func (o *FirewallCriterionField) GetArgumentOk() (*FirewallCriterionArgument, bool)`

GetArgumentOk returns a tuple with the Argument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgument

`func (o *FirewallCriterionField) SetArgument(v FirewallCriterionArgument)`

SetArgument sets Argument field to given value.

### HasArgument

`func (o *FirewallCriterionField) HasArgument() bool`

HasArgument returns a boolean if a field has been set.

### SetArgumentNil

`func (o *FirewallCriterionField) SetArgumentNil(b bool)`

 SetArgumentNil sets the value for Argument to be an explicit nil

### UnsetArgument
`func (o *FirewallCriterionField) UnsetArgument()`

UnsetArgument ensures that no value is present for Argument, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


