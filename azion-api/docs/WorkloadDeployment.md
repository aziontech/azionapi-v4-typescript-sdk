# WorkloadDeployment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Current** | Pointer to **bool** |  | [optional] [default to true]
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Strategy** | [**DeploymentStrategyDefaultDeploymentStrategy**](DeploymentStrategyDefaultDeploymentStrategy.md) |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewWorkloadDeployment

`func NewWorkloadDeployment(id int64, name string, strategy DeploymentStrategyDefaultDeploymentStrategy, lastEditor string, lastModified time.Time, createdAt time.Time, ) *WorkloadDeployment`

NewWorkloadDeployment instantiates a new WorkloadDeployment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkloadDeploymentWithDefaults

`func NewWorkloadDeploymentWithDefaults() *WorkloadDeployment`

NewWorkloadDeploymentWithDefaults instantiates a new WorkloadDeployment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkloadDeployment) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkloadDeployment) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkloadDeployment) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *WorkloadDeployment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkloadDeployment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkloadDeployment) SetName(v string)`

SetName sets Name field to given value.


### GetCurrent

`func (o *WorkloadDeployment) GetCurrent() bool`

GetCurrent returns the Current field if non-nil, zero value otherwise.

### GetCurrentOk

`func (o *WorkloadDeployment) GetCurrentOk() (*bool, bool)`

GetCurrentOk returns a tuple with the Current field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrent

`func (o *WorkloadDeployment) SetCurrent(v bool)`

SetCurrent sets Current field to given value.

### HasCurrent

`func (o *WorkloadDeployment) HasCurrent() bool`

HasCurrent returns a boolean if a field has been set.

### GetActive

`func (o *WorkloadDeployment) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *WorkloadDeployment) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *WorkloadDeployment) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *WorkloadDeployment) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetStrategy

`func (o *WorkloadDeployment) GetStrategy() DeploymentStrategyDefaultDeploymentStrategy`

GetStrategy returns the Strategy field if non-nil, zero value otherwise.

### GetStrategyOk

`func (o *WorkloadDeployment) GetStrategyOk() (*DeploymentStrategyDefaultDeploymentStrategy, bool)`

GetStrategyOk returns a tuple with the Strategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategy

`func (o *WorkloadDeployment) SetStrategy(v DeploymentStrategyDefaultDeploymentStrategy)`

SetStrategy sets Strategy field to given value.


### GetLastEditor

`func (o *WorkloadDeployment) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *WorkloadDeployment) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *WorkloadDeployment) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *WorkloadDeployment) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *WorkloadDeployment) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *WorkloadDeployment) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *WorkloadDeployment) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkloadDeployment) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkloadDeployment) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


