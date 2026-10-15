# ApplicationCriterionField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditional** | [**ConditionalEnum**](ConditionalEnum.md) |  | 
**Variable** | [**ApplicationCriterionFieldVariableEnum**](ApplicationCriterionFieldVariableEnum.md) |  | 
**Operator** | [**CriterionOperatorEnum**](CriterionOperatorEnum.md) |  | 
**Argument** | Pointer to [**NullableApplicationCriterionArgument**](ApplicationCriterionArgument.md) |  | [optional] 

## Methods

### NewApplicationCriterionField

`func NewApplicationCriterionField(conditional ConditionalEnum, variable ApplicationCriterionFieldVariableEnum, operator CriterionOperatorEnum, ) *ApplicationCriterionField`

NewApplicationCriterionField instantiates a new ApplicationCriterionField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationCriterionFieldWithDefaults

`func NewApplicationCriterionFieldWithDefaults() *ApplicationCriterionField`

NewApplicationCriterionFieldWithDefaults instantiates a new ApplicationCriterionField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditional

`func (o *ApplicationCriterionField) GetConditional() ConditionalEnum`

GetConditional returns the Conditional field if non-nil, zero value otherwise.

### GetConditionalOk

`func (o *ApplicationCriterionField) GetConditionalOk() (*ConditionalEnum, bool)`

GetConditionalOk returns a tuple with the Conditional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditional

`func (o *ApplicationCriterionField) SetConditional(v ConditionalEnum)`

SetConditional sets Conditional field to given value.


### GetVariable

`func (o *ApplicationCriterionField) GetVariable() ApplicationCriterionFieldVariableEnum`

GetVariable returns the Variable field if non-nil, zero value otherwise.

### GetVariableOk

`func (o *ApplicationCriterionField) GetVariableOk() (*ApplicationCriterionFieldVariableEnum, bool)`

GetVariableOk returns a tuple with the Variable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariable

`func (o *ApplicationCriterionField) SetVariable(v ApplicationCriterionFieldVariableEnum)`

SetVariable sets Variable field to given value.


### GetOperator

`func (o *ApplicationCriterionField) GetOperator() CriterionOperatorEnum`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ApplicationCriterionField) GetOperatorOk() (*CriterionOperatorEnum, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ApplicationCriterionField) SetOperator(v CriterionOperatorEnum)`

SetOperator sets Operator field to given value.


### GetArgument

`func (o *ApplicationCriterionField) GetArgument() ApplicationCriterionArgument`

GetArgument returns the Argument field if non-nil, zero value otherwise.

### GetArgumentOk

`func (o *ApplicationCriterionField) GetArgumentOk() (*ApplicationCriterionArgument, bool)`

GetArgumentOk returns a tuple with the Argument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgument

`func (o *ApplicationCriterionField) SetArgument(v ApplicationCriterionArgument)`

SetArgument sets Argument field to given value.

### HasArgument

`func (o *ApplicationCriterionField) HasArgument() bool`

HasArgument returns a boolean if a field has been set.

### SetArgumentNil

`func (o *ApplicationCriterionField) SetArgumentNil(b bool)`

 SetArgumentNil sets the value for Argument to be an explicit nil

### UnsetArgument
`func (o *ApplicationCriterionField) UnsetArgument()`

UnsetArgument ensures that no value is present for Argument, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


