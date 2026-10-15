# WAFEngineSettingsAttributesField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rulesets** | Pointer to [**[]RulesetsEnum**](RulesetsEnum.md) |  | [optional] 
**Thresholds** | Pointer to [**[]ThresholdsConfigField**](ThresholdsConfigField.md) |  | [optional] 

## Methods

### NewWAFEngineSettingsAttributesField

`func NewWAFEngineSettingsAttributesField() *WAFEngineSettingsAttributesField`

NewWAFEngineSettingsAttributesField instantiates a new WAFEngineSettingsAttributesField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFEngineSettingsAttributesFieldWithDefaults

`func NewWAFEngineSettingsAttributesFieldWithDefaults() *WAFEngineSettingsAttributesField`

NewWAFEngineSettingsAttributesFieldWithDefaults instantiates a new WAFEngineSettingsAttributesField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRulesets

`func (o *WAFEngineSettingsAttributesField) GetRulesets() []RulesetsEnum`

GetRulesets returns the Rulesets field if non-nil, zero value otherwise.

### GetRulesetsOk

`func (o *WAFEngineSettingsAttributesField) GetRulesetsOk() (*[]RulesetsEnum, bool)`

GetRulesetsOk returns a tuple with the Rulesets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRulesets

`func (o *WAFEngineSettingsAttributesField) SetRulesets(v []RulesetsEnum)`

SetRulesets sets Rulesets field to given value.

### HasRulesets

`func (o *WAFEngineSettingsAttributesField) HasRulesets() bool`

HasRulesets returns a boolean if a field has been set.

### GetThresholds

`func (o *WAFEngineSettingsAttributesField) GetThresholds() []ThresholdsConfigField`

GetThresholds returns the Thresholds field if non-nil, zero value otherwise.

### GetThresholdsOk

`func (o *WAFEngineSettingsAttributesField) GetThresholdsOk() (*[]ThresholdsConfigField, bool)`

GetThresholdsOk returns a tuple with the Thresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholds

`func (o *WAFEngineSettingsAttributesField) SetThresholds(v []ThresholdsConfigField)`

SetThresholds sets Thresholds field to given value.

### HasThresholds

`func (o *WAFEngineSettingsAttributesField) HasThresholds() bool`

HasThresholds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


