# DataStream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**ProductVersion** | **string** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Inputs** | [**[]InputInputDataSourceAttributes**](InputInputDataSourceAttributes.md) |  | 
**Transform** | [**[]Transform**](Transform.md) |  | 
**Outputs** | [**[]Output**](Output.md) |  | 

## Methods

### NewDataStream

`func NewDataStream(id int64, name string, lastEditor string, created time.Time, lastModified time.Time, productVersion string, inputs []InputInputDataSourceAttributes, transform []Transform, outputs []Output, ) *DataStream`

NewDataStream instantiates a new DataStream object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStreamWithDefaults

`func NewDataStreamWithDefaults() *DataStream`

NewDataStreamWithDefaults instantiates a new DataStream object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DataStream) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DataStream) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DataStream) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *DataStream) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataStream) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataStream) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *DataStream) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *DataStream) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *DataStream) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetCreated

`func (o *DataStream) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *DataStream) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *DataStream) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastModified

`func (o *DataStream) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *DataStream) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *DataStream) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetProductVersion

`func (o *DataStream) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *DataStream) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *DataStream) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetActive

`func (o *DataStream) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DataStream) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DataStream) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *DataStream) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetInputs

`func (o *DataStream) GetInputs() []InputInputDataSourceAttributes`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *DataStream) GetInputsOk() (*[]InputInputDataSourceAttributes, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *DataStream) SetInputs(v []InputInputDataSourceAttributes)`

SetInputs sets Inputs field to given value.


### GetTransform

`func (o *DataStream) GetTransform() []Transform`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *DataStream) GetTransformOk() (*[]Transform, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *DataStream) SetTransform(v []Transform)`

SetTransform sets Transform field to given value.


### GetOutputs

`func (o *DataStream) GetOutputs() []Output`

GetOutputs returns the Outputs field if non-nil, zero value otherwise.

### GetOutputsOk

`func (o *DataStream) GetOutputsOk() (*[]Output, bool)`

GetOutputsOk returns a tuple with the Outputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputs

`func (o *DataStream) SetOutputs(v []Output)`

SetOutputs sets Outputs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


