# DeploymentStrategyDefaultDeploymentStrategy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Discriminator field for DeploymentStrategy | 
**Attributes** | [**DefaultDeploymentStrategyAttrs**](DefaultDeploymentStrategyAttrs.md) |  | 

## Methods

### NewDeploymentStrategyDefaultDeploymentStrategy

`func NewDeploymentStrategyDefaultDeploymentStrategy(type_ string, attributes DefaultDeploymentStrategyAttrs, ) *DeploymentStrategyDefaultDeploymentStrategy`

NewDeploymentStrategyDefaultDeploymentStrategy instantiates a new DeploymentStrategyDefaultDeploymentStrategy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeploymentStrategyDefaultDeploymentStrategyWithDefaults

`func NewDeploymentStrategyDefaultDeploymentStrategyWithDefaults() *DeploymentStrategyDefaultDeploymentStrategy`

NewDeploymentStrategyDefaultDeploymentStrategyWithDefaults instantiates a new DeploymentStrategyDefaultDeploymentStrategy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeploymentStrategyDefaultDeploymentStrategy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeploymentStrategyDefaultDeploymentStrategy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeploymentStrategyDefaultDeploymentStrategy) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *DeploymentStrategyDefaultDeploymentStrategy) GetAttributes() DefaultDeploymentStrategyAttrs`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *DeploymentStrategyDefaultDeploymentStrategy) GetAttributesOk() (*DefaultDeploymentStrategyAttrs, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *DeploymentStrategyDefaultDeploymentStrategy) SetAttributes(v DefaultDeploymentStrategyAttrs)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


