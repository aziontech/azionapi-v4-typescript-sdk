# ContinuousDeploymentListResponse

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

### NewContinuousDeploymentListResponse

`func NewContinuousDeploymentListResponse(id int64, name string, repository string, branch string, buildContext []BuildContextField, integration Integration, executionScript ExecutionScript, created NullableTime, lastEditor NullableString, lastModified NullableTime, ) *ContinuousDeploymentListResponse`

NewContinuousDeploymentListResponse instantiates a new ContinuousDeploymentListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContinuousDeploymentListResponseWithDefaults

`func NewContinuousDeploymentListResponseWithDefaults() *ContinuousDeploymentListResponse`

NewContinuousDeploymentListResponseWithDefaults instantiates a new ContinuousDeploymentListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ContinuousDeploymentListResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ContinuousDeploymentListResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ContinuousDeploymentListResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ContinuousDeploymentListResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ContinuousDeploymentListResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ContinuousDeploymentListResponse) SetName(v string)`

SetName sets Name field to given value.


### GetRepository

`func (o *ContinuousDeploymentListResponse) GetRepository() string`

GetRepository returns the Repository field if non-nil, zero value otherwise.

### GetRepositoryOk

`func (o *ContinuousDeploymentListResponse) GetRepositoryOk() (*string, bool)`

GetRepositoryOk returns a tuple with the Repository field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepository

`func (o *ContinuousDeploymentListResponse) SetRepository(v string)`

SetRepository sets Repository field to given value.


### GetBranch

`func (o *ContinuousDeploymentListResponse) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *ContinuousDeploymentListResponse) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *ContinuousDeploymentListResponse) SetBranch(v string)`

SetBranch sets Branch field to given value.


### GetBuildContext

`func (o *ContinuousDeploymentListResponse) GetBuildContext() []BuildContextField`

GetBuildContext returns the BuildContext field if non-nil, zero value otherwise.

### GetBuildContextOk

`func (o *ContinuousDeploymentListResponse) GetBuildContextOk() (*[]BuildContextField, bool)`

GetBuildContextOk returns a tuple with the BuildContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildContext

`func (o *ContinuousDeploymentListResponse) SetBuildContext(v []BuildContextField)`

SetBuildContext sets BuildContext field to given value.


### GetDeployContext

`func (o *ContinuousDeploymentListResponse) GetDeployContext() map[string]interface{}`

GetDeployContext returns the DeployContext field if non-nil, zero value otherwise.

### GetDeployContextOk

`func (o *ContinuousDeploymentListResponse) GetDeployContextOk() (*map[string]interface{}, bool)`

GetDeployContextOk returns a tuple with the DeployContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeployContext

`func (o *ContinuousDeploymentListResponse) SetDeployContext(v map[string]interface{})`

SetDeployContext sets DeployContext field to given value.

### HasDeployContext

`func (o *ContinuousDeploymentListResponse) HasDeployContext() bool`

HasDeployContext returns a boolean if a field has been set.

### GetIntegration

`func (o *ContinuousDeploymentListResponse) GetIntegration() Integration`

GetIntegration returns the Integration field if non-nil, zero value otherwise.

### GetIntegrationOk

`func (o *ContinuousDeploymentListResponse) GetIntegrationOk() (*Integration, bool)`

GetIntegrationOk returns a tuple with the Integration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegration

`func (o *ContinuousDeploymentListResponse) SetIntegration(v Integration)`

SetIntegration sets Integration field to given value.


### GetExecutionScript

`func (o *ContinuousDeploymentListResponse) GetExecutionScript() ExecutionScript`

GetExecutionScript returns the ExecutionScript field if non-nil, zero value otherwise.

### GetExecutionScriptOk

`func (o *ContinuousDeploymentListResponse) GetExecutionScriptOk() (*ExecutionScript, bool)`

GetExecutionScriptOk returns a tuple with the ExecutionScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionScript

`func (o *ContinuousDeploymentListResponse) SetExecutionScript(v ExecutionScript)`

SetExecutionScript sets ExecutionScript field to given value.


### GetCreated

`func (o *ContinuousDeploymentListResponse) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ContinuousDeploymentListResponse) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ContinuousDeploymentListResponse) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### SetCreatedNil

`func (o *ContinuousDeploymentListResponse) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ContinuousDeploymentListResponse) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetLastEditor

`func (o *ContinuousDeploymentListResponse) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ContinuousDeploymentListResponse) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ContinuousDeploymentListResponse) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### SetLastEditorNil

`func (o *ContinuousDeploymentListResponse) SetLastEditorNil(b bool)`

 SetLastEditorNil sets the value for LastEditor to be an explicit nil

### UnsetLastEditor
`func (o *ContinuousDeploymentListResponse) UnsetLastEditor()`

UnsetLastEditor ensures that no value is present for LastEditor, not even an explicit nil
### GetLastModified

`func (o *ContinuousDeploymentListResponse) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ContinuousDeploymentListResponse) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ContinuousDeploymentListResponse) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### SetLastModifiedNil

`func (o *ContinuousDeploymentListResponse) SetLastModifiedNil(b bool)`

 SetLastModifiedNil sets the value for LastModified to be an explicit nil

### UnsetLastModified
`func (o *ContinuousDeploymentListResponse) UnsetLastModified()`

UnsetLastModified ensures that no value is present for LastModified, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


