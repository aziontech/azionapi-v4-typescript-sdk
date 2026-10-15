# DataStreamRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Inputs** | [**[]InputInputDataSourceAttributesRequest**](InputInputDataSourceAttributesRequest.md) |  | 
**Transform** | [**[]TransformRequest**](TransformRequest.md) |  | 
**Outputs** | [**[]OutputRequest**](OutputRequest.md) |  | 

## Methods

### NewDataStreamRequest

`func NewDataStreamRequest(name string, inputs []InputInputDataSourceAttributesRequest, transform []TransformRequest, outputs []OutputRequest, ) *DataStreamRequest`

NewDataStreamRequest instantiates a new DataStreamRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStreamRequestWithDefaults

`func NewDataStreamRequestWithDefaults() *DataStreamRequest`

NewDataStreamRequestWithDefaults instantiates a new DataStreamRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DataStreamRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataStreamRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataStreamRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *DataStreamRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DataStreamRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DataStreamRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *DataStreamRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetInputs

`func (o *DataStreamRequest) GetInputs() []InputInputDataSourceAttributesRequest`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *DataStreamRequest) GetInputsOk() (*[]InputInputDataSourceAttributesRequest, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *DataStreamRequest) SetInputs(v []InputInputDataSourceAttributesRequest)`

SetInputs sets Inputs field to given value.


### GetTransform

`func (o *DataStreamRequest) GetTransform() []TransformRequest`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *DataStreamRequest) GetTransformOk() (*[]TransformRequest, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *DataStreamRequest) SetTransform(v []TransformRequest)`

SetTransform sets Transform field to given value.


### GetOutputs

`func (o *DataStreamRequest) GetOutputs() []OutputRequest`

GetOutputs returns the Outputs field if non-nil, zero value otherwise.

### GetOutputsOk

`func (o *DataStreamRequest) GetOutputsOk() (*[]OutputRequest, bool)`

GetOutputsOk returns a tuple with the Outputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputs

`func (o *DataStreamRequest) SetOutputs(v []OutputRequest)`

SetOutputs sets Outputs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


