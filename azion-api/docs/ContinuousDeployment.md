# ContinuousDeployment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Repository** | **string** |  | 
**Branch** | **string** |  | 
**BuildContext** | [**[]BuildContextField**](BuildContextField.md) |  | 
**DeployContext** | Pointer to **map[string]interface{}** |  | [optional] 
**Integration** | [**Integration**](Integration.md) |  | [readonly] 
**ExecutionScript** | [**ExecutionScript**](ExecutionScript.md) |  | [readonly] 
**Created** | **NullableTime** | Created date of the continuous deployment. | [readonly] 
**LastEditor** | **NullableString** | Last editor of the continuous deployment. | [readonly] 
**LastModified** | **NullableTime** | Last modified date of the continuous deployment. | [readonly] 

## Methods

### NewContinuousDeployment

`func NewContinuousDeployment(id int64, name string, repository string, branch string, buildContext []BuildContextField, integration Integration, executionScript ExecutionScript, created NullableTime, lastEditor NullableString, lastModified NullableTime, ) *ContinuousDeployment`

NewContinuousDeployment instantiates a new ContinuousDeployment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContinuousDeploymentWithDefaults

`func NewContinuousDeploymentWithDefaults() *ContinuousDeployment`

NewContinuousDeploymentWithDefaults instantiates a new ContinuousDeployment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ContinuousDeployment) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ContinuousDeployment) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ContinuousDeployment) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ContinuousDeployment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ContinuousDeployment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ContinuousDeployment) SetName(v string)`

SetName sets Name field to given value.


### GetRepository

`func (o *ContinuousDeployment) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *ContinuousDeployment) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *ContinuousDeployment) SetRepository(v string)`

SetRepository sets Repository field to given value.


### GetBranch

`func (o *ContinuousDeployment) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *ContinuousDeployment) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *ContinuousDeployment) SetBranch(v string)`

SetBranch sets Branch field to given value.


### GetBuildContext

`func (o *ContinuousDeployment) GetBuildContext() []BuildContextField`

GetBuildContext returns the BuildContext field if non-nil, zero value otherwise.

### GetBuildContextOk

`func (o *ContinuousDeployment) GetBuildContextOk() (*[]BuildContextField, bool)`

GetBuildContextOk returns a tuple with the BuildContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildContext

`func (o *ContinuousDeployment) SetBuildContext(v []BuildContextField)`

SetBuildContext sets BuildContext field to given value.


### GetDeployContext

`func (o *ContinuousDeployment) GetDeployContext() map[string]interface{}`

GetDeployContext returns the DeployContext field if non-nil, zero value otherwise.

### GetDeployContextOk

`func (o *ContinuousDeployment) GetDeployContextOk() (*map[string]interface{}, bool)`

GetDeployContextOk returns a tuple with the DeployContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeployContext

`func (o *ContinuousDeployment) SetDeployContext(v map[string]interface{})`

SetDeployContext sets DeployContext field to given value.

### HasDeployContext

`func (o *ContinuousDeployment) HasDeployContext() bool`

HasDeployContext returns a boolean if a field has been set.

### GetIntegration

`func (o *ContinuousDeployment) GetIntegration() Integration`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ContinuousDeployment) GetIntegrationOk() (*Integration, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ContinuousDeployment) SetIntegration(v Integration)`

SetIntegration sets Integration field to given value.


### GetExecutionScript

`func (o *ContinuousDeployment) GetExecutionScript() ExecutionScript`

GetExecutionScript returns the ExecutionScript field if non-nil, zero value otherwise.

### GetExecutionScriptOk

`func (o *ContinuousDeployment) GetExecutionScriptOk() (*ExecutionScript, bool)`

GetExecutionScriptOk returns a tuple with the ExecutionScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionScript

`func (o *ContinuousDeployment) SetExecutionScript(v ExecutionScript)`

SetExecutionScript sets ExecutionScript field to given value.


### GetCreated

`func (o *ContinuousDeployment) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ContinuousDeployment) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ContinuousDeployment) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### SetCreatedNil

`func (o *ContinuousDeployment) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ContinuousDeployment) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetLastEditor

`func (o *ContinuousDeployment) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ContinuousDeployment) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ContinuousDeployment) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### SetLastEditorNil

`func (o *ContinuousDeployment) SetLastEditorNil(b bool)`

 SetLastEditorNil sets the value for LastEditor to be an explicit nil

### UnsetLastEditor
`func (o *ContinuousDeployment) UnsetLastEditor()`

UnsetLastEditor ensures that no value is present for LastEditor, not even an explicit nil
### GetLastModified

`func (o *ContinuousDeployment) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ContinuousDeployment) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ContinuousDeployment) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### SetLastModifiedNil

`func (o *ContinuousDeployment) SetLastModifiedNil(b bool)`

 SetLastModifiedNil sets the value for LastModified to be an explicit nil

### UnsetLastModified
`func (o *ContinuousDeployment) UnsetLastModified()`

UnsetLastModified ensures that no value is present for LastModified, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


