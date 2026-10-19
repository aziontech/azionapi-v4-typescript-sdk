# PatchedContinuousDeploymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Repository** | Pointer to **string** |  | [optional] 
**Branch** | Pointer to **string** |  | [optional] 
**BuildContext** | Pointer to [**[]BuildContextFieldRequest**](BuildContextFieldRequest.md) |  | [optional] 
**DeployContext** | Pointer to **map[string]interface{}** |  | [optional] 
**IntegrationId** | Pointer to **int64** |  | [optional] 
**ExecutionScriptId** | Pointer to **int64** |  | [optional] 

## Methods

### NewPatchedContinuousDeploymentRequest

`func NewPatchedContinuousDeploymentRequest() *PatchedContinuousDeploymentRequest`

NewPatchedContinuousDeploymentRequest instantiates a new PatchedContinuousDeploymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedContinuousDeploymentRequestWithDefaults

`func NewPatchedContinuousDeploymentRequestWithDefaults() *PatchedContinuousDeploymentRequest`

NewPatchedContinuousDeploymentRequestWithDefaults instantiates a new PatchedContinuousDeploymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedContinuousDeploymentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedContinuousDeploymentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedContinuousDeploymentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedContinuousDeploymentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRepository

`func (o *PatchedContinuousDeploymentRequest) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *PatchedContinuousDeploymentRequest) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *PatchedContinuousDeploymentRequest) SetRepository(v string)`

SetRepository sets Repository field to given value.

### HasRepository

`func (o *PatchedContinuousDeploymentRequest) HasRepository() bool`

HasRepository returns a boolean if a field has been set.

### GetBranch

`func (o *PatchedContinuousDeploymentRequest) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *PatchedContinuousDeploymentRequest) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *PatchedContinuousDeploymentRequest) SetBranch(v string)`

SetBranch sets Branch field to given value.

### HasBranch

`func (o *PatchedContinuousDeploymentRequest) HasBranch() bool`

HasBranch returns a boolean if a field has been set.

### GetBuildContext

`func (o *PatchedContinuousDeploymentRequest) GetBuildContext() []BuildContextFieldRequest`

GetBuildContext returns the BuildContext field if non-nil, zero value otherwise.

### GetBuildContextOk

`func (o *PatchedContinuousDeploymentRequest) GetBuildContextOk() (*[]BuildContextFieldRequest, bool)`

GetBuildContextOk returns a tuple with the BuildContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildContext

`func (o *PatchedContinuousDeploymentRequest) SetBuildContext(v []BuildContextFieldRequest)`

SetBuildContext sets BuildContext field to given value.

### HasBuildContext

`func (o *PatchedContinuousDeploymentRequest) HasBuildContext() bool`

HasBuildContext returns a boolean if a field has been set.

### GetDeployContext

`func (o *PatchedContinuousDeploymentRequest) GetDeployContext() map[string]interface{}`

GetDeployContext returns the DeployContext field if non-nil, zero value otherwise.

### GetDeployContextOk

`func (o *PatchedContinuousDeploymentRequest) GetDeployContextOk() (*map[string]interface{}, bool)`

GetDeployContextOk returns a tuple with the DeployContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeployContext

`func (o *PatchedContinuousDeploymentRequest) SetDeployContext(v map[string]interface{})`

SetDeployContext sets DeployContext field to given value.

### HasDeployContext

`func (o *PatchedContinuousDeploymentRequest) HasDeployContext() bool`

HasDeployContext returns a boolean if a field has been set.

### GetIntegrationId

`func (o *PatchedContinuousDeploymentRequest) GetIntegrationId() int64`

GetIntegrationId returns the IntegrationId field if non-nil, zero value otherwise.

### GetIntegrationIdOk

`func (o *PatchedContinuousDeploymentRequest) GetIntegrationIdOk() (*int64, bool)`

GetIntegrationIdOk returns a tuple with the IntegrationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationId

`func (o *PatchedContinuousDeploymentRequest) SetIntegrationId(v int64)`

SetIntegrationId sets IntegrationId field to given value.

### HasIntegrationId

`func (o *PatchedContinuousDeploymentRequest) HasIntegrationId() bool`

HasIntegrationId returns a boolean if a field has been set.

### GetExecutionScriptId

`func (o *PatchedContinuousDeploymentRequest) GetExecutionScriptId() int64`

GetExecutionScriptId returns the ExecutionScriptId field if non-nil, zero value otherwise.

### GetExecutionScriptIdOk

`func (o *PatchedContinuousDeploymentRequest) GetExecutionScriptIdOk() (*int64, bool)`

GetExecutionScriptIdOk returns a tuple with the ExecutionScriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionScriptId

`func (o *PatchedContinuousDeploymentRequest) SetExecutionScriptId(v int64)`

SetExecutionScriptId sets ExecutionScriptId field to given value.

### HasExecutionScriptId

`func (o *PatchedContinuousDeploymentRequest) HasExecutionScriptId() bool`

HasExecutionScriptId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


