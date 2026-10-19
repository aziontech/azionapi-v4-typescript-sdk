# CustomPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**ProductVersion** | **string** |  | [readonly] [default to "1.0"]
**Pages** | [**[]PageBase**](PageBase.md) |  | 
**IsVersioned** | **bool** |  | [readonly] 
**Version** | **NullableInt64** |  | [readonly] 
**VersionState** | **NullableString** |  | [readonly] 
**VersionId** | **NullableString** |  | [readonly] 

## Methods

### NewCustomPage

`func NewCustomPage(id int64, name string, lastEditor string, lastModified time.Time, createdAt time.Time, productVersion string, pages []PageBase, isVersioned bool, version NullableInt64, versionState NullableString, versionId NullableString, ) *CustomPage`

NewCustomPage instantiates a new CustomPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomPageWithDefaults

`func NewCustomPageWithDefaults() *CustomPage`

NewCustomPageWithDefaults instantiates a new CustomPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CustomPage) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomPage) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomPage) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *CustomPage) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CustomPage) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CustomPage) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *CustomPage) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *CustomPage) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *CustomPage) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *CustomPage) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *CustomPage) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *CustomPage) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *CustomPage) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CustomPage) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CustomPage) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetActive

`func (o *CustomPage) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CustomPage) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CustomPage) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CustomPage) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProductVersion

`func (o *CustomPage) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *CustomPage) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *CustomPage) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetPages

`func (o *CustomPage) GetPages() []PageBase`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *CustomPage) GetPagesOk() (*[]PageBase, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *CustomPage) SetPages(v []PageBase)`

SetPages sets Pages field to given value.


### GetIsVersioned

`func (o *CustomPage) GetIsVersioned() bool`

GetIsVersioned returns the IsVersioned field if non-nil, zero value otherwise.

### GetIsVersionedOk

`func (o *CustomPage) GetIsVersionedOk() (*bool, bool)`

GetIsVersionedOk returns a tuple with the IsVersioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVersioned

`func (o *CustomPage) SetIsVersioned(v bool)`

SetIsVersioned sets IsVersioned field to given value.


### GetVersion

`func (o *CustomPage) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *CustomPage) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *CustomPage) SetVersion(v int64)`

SetVersion sets Version field to given value.


### SetVersionNil

`func (o *CustomPage) SetVersionNil(b bool)`

 SetVersionNil sets the value for Version to be an explicit nil

### UnsetVersion
`func (o *CustomPage) UnsetVersion()`

UnsetVersion ensures that no value is present for Version, not even an explicit nil
### GetVersionState

`func (o *CustomPage) GetVersionState() string`

GetVersionState returns the VersionState field if non-nil, zero value otherwise.

### GetVersionStateOk

`func (o *CustomPage) GetVersionStateOk() (*string, bool)`

GetVersionStateOk returns a tuple with the VersionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionState

`func (o *CustomPage) SetVersionState(v string)`

SetVersionState sets VersionState field to given value.


### SetVersionStateNil

`func (o *CustomPage) SetVersionStateNil(b bool)`

 SetVersionStateNil sets the value for VersionState to be an explicit nil

### UnsetVersionState
`func (o *CustomPage) UnsetVersionState()`

UnsetVersionState ensures that no value is present for VersionState, not even an explicit nil
### GetVersionId

`func (o *CustomPage) GetVersionId() string`

GetVersionId returns the VersionId field if non-nil, zero value otherwise.

### GetVersionIdOk

`func (o *CustomPage) GetVersionIdOk() (*string, bool)`

GetVersionIdOk returns a tuple with the VersionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionId

`func (o *CustomPage) SetVersionId(v string)`

SetVersionId sets VersionId field to given value.


### SetVersionIdNil

`func (o *CustomPage) SetVersionIdNil(b bool)`

 SetVersionIdNil sets the value for VersionId to be an explicit nil

### UnsetVersionId
`func (o *CustomPage) UnsetVersionId()`

UnsetVersionId ensures that no value is present for VersionId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


