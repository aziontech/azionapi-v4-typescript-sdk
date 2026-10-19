# ContinuousDeploymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Repository** | **string** |  | 
**Branch** | **string** |  | 
**BuildContext** | [**[]BuildContextFieldRequest**](BuildContextFieldRequest.md) |  | 
**DeployContext** | Pointer to **map[string]interface{}** |  | [optional] 
**IntegrationId** | **int64** |  | 
**ExecutionScriptId** | **int64** |  | 

## Methods

### NewContinuousDeploymentRequest

`func NewContinuousDeploymentRequest(name string, repository string, branch string, buildContext []BuildContextFieldRequest, integrationId int64, executionScriptId int64, ) *ContinuousDeploymentRequest`

NewContinuousDeploymentRequest instantiates a new ContinuousDeploymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContinuousDeploymentRequestWithDefaults

`func NewContinuousDeploymentRequestWithDefaults() *ContinuousDeploymentRequest`

NewContinuousDeploymentRequestWithDefaults instantiates a new ContinuousDeploymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ContinuousDeploymentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ContinuousDeploymentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ContinuousDeploymentRequest) SetName(v string)`

SetName sets Name field to given value.


### GetRepository

`func (o *ContinuousDeploymentRequest) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *ContinuousDeploymentRequest) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *ContinuousDeploymentRequest) SetRepository(v string)`

SetRepository sets Repository field to given value.


### GetBranch

`func (o *ContinuousDeploymentRequest) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *ContinuousDeploymentRequest) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *ContinuousDeploymentRequest) SetBranch(v string)`

SetBranch sets Branch field to given value.


### GetBuildContext

`func (o *ContinuousDeploymentRequest) GetBuildContext() []BuildContextFieldRequest`

GetBuildContext returns the BuildContext field if non-nil, zero value otherwise.

### GetBuildContextOk

`func (o *ContinuousDeploymentRequest) GetBuildContextOk() (*[]BuildContextFieldRequest, bool)`

GetBuildContextOk returns a tuple with the BuildContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildContext

`func (o *ContinuousDeploymentRequest) SetBuildContext(v []BuildContextFieldRequest)`

SetBuildContext sets BuildContext field to given value.


### GetDeployContext

`func (o *ContinuousDeploymentRequest) GetDeployContext() map[string]interface{}`

GetDeployContext returns the DeployContext field if non-nil, zero value otherwise.

### GetDeployContextOk

`func (o *ContinuousDeploymentRequest) GetDeployContextOk() (*map[string]interface{}, bool)`

GetDeployContextOk returns a tuple with the DeployContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeployContext

`func (o *ContinuousDeploymentRequest) SetDeployContext(v map[string]interface{})`

SetDeployContext sets DeployContext field to given value.

### HasDeployContext

`func (o *ContinuousDeploymentRequest) HasDeployContext() bool`

HasDeployContext returns a boolean if a field has been set.

### GetIntegrationId

`func (o *ContinuousDeploymentRequest) GetIntegrationId() int64`

GetIntegrationId returns the IntegrationId field if non-nil, zero value otherwise.

### GetIntegrationIdOk

`func (o *ContinuousDeploymentRequest) GetIntegrationIdOk() (*int64, bool)`

GetIntegrationIdOk returns a tuple with the IntegrationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationId

`func (o *ContinuousDeploymentRequest) SetIntegrationId(v int64)`

SetIntegrationId sets IntegrationId field to given value.


### GetExecutionScriptId

`func (o *ContinuousDeploymentRequest) GetExecutionScriptId() int64`

GetExecutionScriptId returns the ExecutionScriptId field if non-nil, zero value otherwise.

### GetExecutionScriptIdOk

`func (o *ContinuousDeploymentRequest) GetExecutionScriptIdOk() (*int64, bool)`

GetExecutionScriptIdOk returns a tuple with the ExecutionScriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionScriptId

`func (o *ContinuousDeploymentRequest) SetExecutionScriptId(v int64)`

SetExecutionScriptId sets ExecutionScriptId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


