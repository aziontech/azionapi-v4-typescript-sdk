# Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Custom** | **bool** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**DataSet** | **string** |  | 

## Methods

### NewTemplate

`func NewTemplate(id int64, name string, lastEditor string, createdAt time.Time, lastModified time.Time, custom bool, dataSet string, ) *Template`

NewTemplate instantiates a new Template object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateWithDefaults

`func NewTemplateWithDefaults() *Template`

NewTemplateWithDefaults instantiates a new Template object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Template) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Template) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Template) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Template) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Template) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Template) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *Template) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Template) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Template) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetCreatedAt

`func (o *Template) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Template) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Template) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastModified

`func (o *Template) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Template) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Template) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCustom

`func (o *Template) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *Template) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *Template) SetCustom(v bool)`

SetCustom sets Custom field to given value.


### GetActive

`func (o *Template) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Template) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Template) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Template) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDataSet

`func (o *Template) GetDataSet() string`

GetDataSet returns the DataSet field if non-nil, zero value otherwise.

### GetDataSetOk

`func (o *Template) GetDataSetOk() (*string, bool)`

GetDataSetOk returns a tuple with the DataSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSet

`func (o *Template) SetDataSet(v string)`

SetDataSet sets DataSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


