# PatchedDataStreamRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Inputs** | Pointer to [**[]InputInputDataSourceAttributesRequest**](InputInputDataSourceAttributesRequest.md) |  | [optional] 
**Transform** | Pointer to [**[]TransformRequest**](TransformRequest.md) |  | [optional] 

## Methods

### NewPatchedDataStreamRequest

`func NewPatchedDataStreamRequest() *PatchedDataStreamRequest`

NewPatchedDataStreamRequest instantiates a new PatchedDataStreamRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedDataStreamRequestWithDefaults

`func NewPatchedDataStreamRequestWithDefaults() *PatchedDataStreamRequest`

NewPatchedDataStreamRequestWithDefaults instantiates a new PatchedDataStreamRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedDataStreamRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedDataStreamRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedDataStreamRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedDataStreamRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedDataStreamRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedDataStreamRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedDataStreamRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedDataStreamRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetInputs

`func (o *PatchedDataStreamRequest) GetInputs() []InputInputDataSourceAttributesRequest`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *PatchedDataStreamRequest) GetInputsOk() (*[]InputInputDataSourceAttributesRequest, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *PatchedDataStreamRequest) SetInputs(v []InputInputDataSourceAttributesRequest)`

SetInputs sets Inputs field to given value.

### HasInputs

`func (o *PatchedDataStreamRequest) HasInputs() bool`

HasInputs returns a boolean if a field has been set.

### GetTransform

`func (o *PatchedDataStreamRequest) GetTransform() []TransformRequest`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *PatchedDataStreamRequest) GetTransformOk() (*[]TransformRequest, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *PatchedDataStreamRequest) SetTransform(v []TransformRequest)`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *PatchedDataStreamRequest) HasTransform() bool`

HasTransform returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


