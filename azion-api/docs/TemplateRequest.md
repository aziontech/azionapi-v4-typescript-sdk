# TemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**DataSet** | **string** |  | 

## Methods

### NewTemplateRequest

`func NewTemplateRequest(name string, dataSet string, ) *TemplateRequest`

NewTemplateRequest instantiates a new TemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRequestWithDefaults

`func NewTemplateRequestWithDefaults() *TemplateRequest`

NewTemplateRequestWithDefaults instantiates a new TemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TemplateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *TemplateRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *TemplateRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *TemplateRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *TemplateRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDataSet

`func (o *TemplateRequest) GetDataSet() string`

GetDataSet returns the DataSet field if non-nil, zero value otherwise.

### GetDataSetOk

`func (o *TemplateRequest) GetDataSetOk() (*string, bool)`

GetDataSetOk returns a tuple with the DataSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSet

`func (o *TemplateRequest) SetDataSet(v string)`

SetDataSet sets DataSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


