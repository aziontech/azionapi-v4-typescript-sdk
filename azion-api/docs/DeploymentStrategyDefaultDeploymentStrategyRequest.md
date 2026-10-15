# DeploymentStrategyDefaultDeploymentStrategyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Discriminator field for DeploymentStrategyRequest | 
**Attributes** | [**DefaultDeploymentStrategyAttrsRequest**](DefaultDeploymentStrategyAttrsRequest.md) |  | 

## Methods

### NewDeploymentStrategyDefaultDeploymentStrategyRequest

`func NewDeploymentStrategyDefaultDeploymentStrategyRequest(type_ string, attributes DefaultDeploymentStrategyAttrsRequest, ) *DeploymentStrategyDefaultDeploymentStrategyRequest`

NewDeploymentStrategyDefaultDeploymentStrategyRequest instantiates a new DeploymentStrategyDefaultDeploymentStrategyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeploymentStrategyDefaultDeploymentStrategyRequestWithDefaults

`func NewDeploymentStrategyDefaultDeploymentStrategyRequestWithDefaults() *DeploymentStrategyDefaultDeploymentStrategyRequest`

NewDeploymentStrategyDefaultDeploymentStrategyRequestWithDefaults instantiates a new DeploymentStrategyDefaultDeploymentStrategyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) GetAttributes() DefaultDeploymentStrategyAttrsRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) GetAttributesOk() (*DefaultDeploymentStrategyAttrsRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *DeploymentStrategyDefaultDeploymentStrategyRequest) SetAttributes(v DefaultDeploymentStrategyAttrsRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


