# DatabaseDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** | Unique identifier for the database | [readonly] 
**Name** | **string** | Name of the database | 
**Status** | **string** | Current status of the database  * &#x60;creating&#x60; - creating * &#x60;created&#x60; - created * &#x60;deleting&#x60; - deleting | [readonly] [default to "creating"]
**Active** | Pointer to **bool** | Whether the database is active | [optional] [default to true]
**LastModified** | **time.Time** | Last modification timestamp | [readonly] 
**LastEditor** | **NullableString** | Last editor of the schema. | [readonly] 
**ProductVersion** | **string** | Product version | [readonly] 

## Methods

### NewDatabaseDetail

`func NewDatabaseDetail(id int64, name string, status string, lastModified time.Time, lastEditor NullableString, productVersion string, ) *DatabaseDetail`

NewDatabaseDetail instantiates a new DatabaseDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabaseDetailWithDefaults

`func NewDatabaseDetailWithDefaults() *DatabaseDetail`

NewDatabaseDetailWithDefaults instantiates a new DatabaseDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DatabaseDetail) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DatabaseDetail) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DatabaseDetail) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *DatabaseDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DatabaseDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DatabaseDetail) SetName(v string)`

SetName sets Name field to given value.


### GetStatus

`func (o *DatabaseDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DatabaseDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DatabaseDetail) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetActive

`func (o *DatabaseDetail) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DatabaseDetail) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DatabaseDetail) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *DatabaseDetail) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastModified

`func (o *DatabaseDetail) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *DatabaseDetail) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *DatabaseDetail) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetLastEditor

`func (o *DatabaseDetail) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *DatabaseDetail) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *DatabaseDetail) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### SetLastEditorNil

`func (o *DatabaseDetail) SetLastEditorNil(b bool)`

 SetLastEditorNil sets the value for LastEditor to be an explicit nil

### UnsetLastEditor
`func (o *DatabaseDetail) UnsetLastEditor()`

UnsetLastEditor ensures that no value is present for LastEditor, not even an explicit nil
### GetProductVersion

`func (o *DatabaseDetail) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *DatabaseDetail) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *DatabaseDetail) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


