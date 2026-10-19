# WorkloadDeploymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Current** | Pointer to **bool** |  | [optional] [default to true]
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Strategy** | [**DeploymentStrategyDefaultDeploymentStrategyRequest**](DeploymentStrategyDefaultDeploymentStrategyRequest.md) |  | 

## Methods

### NewWorkloadDeploymentRequest

`func NewWorkloadDeploymentRequest(name string, strategy DeploymentStrategyDefaultDeploymentStrategyRequest, ) *WorkloadDeploymentRequest`

NewWorkloadDeploymentRequest instantiates a new WorkloadDeploymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkloadDeploymentRequestWithDefaults

`func NewWorkloadDeploymentRequestWithDefaults() *WorkloadDeploymentRequest`

NewWorkloadDeploymentRequestWithDefaults instantiates a new WorkloadDeploymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *WorkloadDeploymentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkloadDeploymentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkloadDeploymentRequest) SetName(v string)`

SetName sets Name field to given value.


### GetCurrent

`func (o *WorkloadDeploymentRequest) GetCurrent() bool`

GetCurrent returns the Current field if non-nil, zero value otherwise.

### GetCurrentOk

`func (o *WorkloadDeploymentRequest) GetCurrentOk() (*bool, bool)`

GetCurrentOk returns a tuple with the Current field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrent

`func (o *WorkloadDeploymentRequest) SetCurrent(v bool)`

SetCurrent sets Current field to given value.

### HasCurrent

`func (o *WorkloadDeploymentRequest) HasCurrent() bool`

HasCurrent returns a boolean if a field has been set.

### GetActive

`func (o *WorkloadDeploymentRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *WorkloadDeploymentRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *WorkloadDeploymentRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *WorkloadDeploymentRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetStrategy

`func (o *WorkloadDeploymentRequest) GetStrategy() DeploymentStrategyDefaultDeploymentStrategyRequest`

GetStrategy returns the Strategy field if non-nil, zero value otherwise.

### GetStrategyOk

`func (o *WorkloadDeploymentRequest) GetStrategyOk() (*DeploymentStrategyDefaultDeploymentStrategyRequest, bool)`

GetStrategyOk returns a tuple with the Strategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategy

`func (o *WorkloadDeploymentRequest) SetStrategy(v DeploymentStrategyDefaultDeploymentStrategyRequest)`

SetStrategy sets Strategy field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


