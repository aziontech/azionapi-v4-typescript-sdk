# PatchedWorkloadDeploymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Current** | Pointer to **bool** |  | [optional] [default to true]
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Strategy** | Pointer to [**DeploymentStrategyDefaultDeploymentStrategyRequest**](DeploymentStrategyDefaultDeploymentStrategyRequest.md) |  | [optional] 

## Methods

### NewPatchedWorkloadDeploymentRequest

`func NewPatchedWorkloadDeploymentRequest() *PatchedWorkloadDeploymentRequest`

NewPatchedWorkloadDeploymentRequest instantiates a new PatchedWorkloadDeploymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedWorkloadDeploymentRequestWithDefaults

`func NewPatchedWorkloadDeploymentRequestWithDefaults() *PatchedWorkloadDeploymentRequest`

NewPatchedWorkloadDeploymentRequestWithDefaults instantiates a new PatchedWorkloadDeploymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedWorkloadDeploymentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedWorkloadDeploymentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedWorkloadDeploymentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedWorkloadDeploymentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCurrent

`func (o *PatchedWorkloadDeploymentRequest) GetCurrent() bool`

GetCurrent returns the Current field if non-nil, zero value otherwise.

### GetCurrentOk

`func (o *PatchedWorkloadDeploymentRequest) GetCurrentOk() (*bool, bool)`

GetCurrentOk returns a tuple with the Current field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrent

`func (o *PatchedWorkloadDeploymentRequest) SetCurrent(v bool)`

SetCurrent sets Current field to given value.

### HasCurrent

`func (o *PatchedWorkloadDeploymentRequest) HasCurrent() bool`

HasCurrent returns a boolean if a field has been set.

### GetActive

`func (o *PatchedWorkloadDeploymentRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedWorkloadDeploymentRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedWorkloadDeploymentRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedWorkloadDeploymentRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetStrategy

`func (o *PatchedWorkloadDeploymentRequest) GetStrategy() DeploymentStrategyDefaultDeploymentStrategyRequest`

GetStrategy returns the Strategy field if non-nil, zero value otherwise.

### GetStrategyOk

`func (o *PatchedWorkloadDeploymentRequest) GetStrategyOk() (*DeploymentStrategyDefaultDeploymentStrategyRequest, bool)`

GetStrategyOk returns a tuple with the Strategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategy

`func (o *PatchedWorkloadDeploymentRequest) SetStrategy(v DeploymentStrategyDefaultDeploymentStrategyRequest)`

SetStrategy sets Strategy field to given value.

### HasStrategy

`func (o *PatchedWorkloadDeploymentRequest) HasStrategy() bool`

HasStrategy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


