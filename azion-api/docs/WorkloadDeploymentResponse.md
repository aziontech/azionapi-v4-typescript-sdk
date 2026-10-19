# WorkloadDeploymentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**WorkloadDeployment**](WorkloadDeployment.md) |  | 

## Methods

### NewWorkloadDeploymentResponse

`func NewWorkloadDeploymentResponse(data WorkloadDeployment, ) *WorkloadDeploymentResponse`

NewWorkloadDeploymentResponse instantiates a new WorkloadDeploymentResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkloadDeploymentResponseWithDefaults

`func NewWorkloadDeploymentResponseWithDefaults() *WorkloadDeploymentResponse`

NewWorkloadDeploymentResponseWithDefaults instantiates a new WorkloadDeploymentResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *WorkloadDeploymentResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *WorkloadDeploymentResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *WorkloadDeploymentResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *WorkloadDeploymentResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *WorkloadDeploymentResponse) GetData() WorkloadDeployment`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *WorkloadDeploymentResponse) GetDataOk() (*WorkloadDeployment, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *WorkloadDeploymentResponse) SetData(v WorkloadDeployment)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


