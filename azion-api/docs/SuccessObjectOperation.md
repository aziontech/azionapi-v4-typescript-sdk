# SuccessObjectOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**ObjectResponseData**](ObjectResponseData.md) |  | 

## Methods

### NewSuccessObjectOperation

`func NewSuccessObjectOperation(data ObjectResponseData, ) *SuccessObjectOperation`

NewSuccessObjectOperation instantiates a new SuccessObjectOperation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuccessObjectOperationWithDefaults

`func NewSuccessObjectOperationWithDefaults() *SuccessObjectOperation`

NewSuccessObjectOperationWithDefaults instantiates a new SuccessObjectOperation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *SuccessObjectOperation) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SuccessObjectOperation) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SuccessObjectOperation) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SuccessObjectOperation) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *SuccessObjectOperation) GetData() ObjectResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SuccessObjectOperation) GetDataOk() (*ObjectResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SuccessObjectOperation) SetData(v ObjectResponseData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


