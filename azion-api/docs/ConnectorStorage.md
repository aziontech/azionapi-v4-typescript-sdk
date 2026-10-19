# ConnectorStorage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**ProductVersion** | **string** |  | [readonly] 
**Type** | **string** |  | 
**IsVersioned** | **bool** |  | [readonly] 
**Version** | **NullableInt64** |  | [readonly] 
**VersionState** | **NullableString** |  | [readonly] 
**VersionId** | **NullableString** |  | [readonly] 
**Attributes** | [**ConnectorStorageAttributes**](ConnectorStorageAttributes.md) |  | 

## Methods

### NewConnectorStorage

`func NewConnectorStorage(id int64, name string, lastEditor string, lastModified time.Time, createdAt time.Time, productVersion string, type_ string, isVersioned bool, version NullableInt64, versionState NullableString, versionId NullableString, attributes ConnectorStorageAttributes, ) *ConnectorStorage`

NewConnectorStorage instantiates a new ConnectorStorage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorStorageWithDefaults

`func NewConnectorStorageWithDefaults() *ConnectorStorage`

NewConnectorStorageWithDefaults instantiates a new ConnectorStorage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectorStorage) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectorStorage) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectorStorage) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ConnectorStorage) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorStorage) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorStorage) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *ConnectorStorage) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ConnectorStorage) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ConnectorStorage) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ConnectorStorage) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ConnectorStorage) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ConnectorStorage) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *ConnectorStorage) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ConnectorStorage) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ConnectorStorage) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetActive

`func (o *ConnectorStorage) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConnectorStorage) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConnectorStorage) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConnectorStorage) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProductVersion

`func (o *ConnectorStorage) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *ConnectorStorage) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *ConnectorStorage) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetType

`func (o *ConnectorStorage) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorStorage) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorStorage) SetType(v string)`

SetType sets Type field to given value.


### GetIsVersioned

`func (o *ConnectorStorage) GetIsVersioned() bool`

GetIsVersioned returns the IsVersioned field if non-nil, zero value otherwise.

### GetIsVersionedOk

`func (o *ConnectorStorage) GetIsVersionedOk() (*bool, bool)`

GetIsVersionedOk returns a tuple with the IsVersioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVersioned

`func (o *ConnectorStorage) SetIsVersioned(v bool)`

SetIsVersioned sets IsVersioned field to given value.


### GetVersion

`func (o *ConnectorStorage) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ConnectorStorage) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ConnectorStorage) SetVersion(v int64)`

SetVersion sets Version field to given value.


### SetVersionNil

`func (o *ConnectorStorage) SetVersionNil(b bool)`

 SetVersionNil sets the value for Version to be an explicit nil

### UnsetVersion
`func (o *ConnectorStorage) UnsetVersion()`

UnsetVersion ensures that no value is present for Version, not even an explicit nil
### GetVersionState

`func (o *ConnectorStorage) GetVersionState() string`

GetVersionState returns the VersionState field if non-nil, zero value otherwise.

### GetVersionStateOk

`func (o *ConnectorStorage) GetVersionStateOk() (*string, bool)`

GetVersionStateOk returns a tuple with the VersionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionState

`func (o *ConnectorStorage) SetVersionState(v string)`

SetVersionState sets VersionState field to given value.


### SetVersionStateNil

`func (o *ConnectorStorage) SetVersionStateNil(b bool)`

 SetVersionStateNil sets the value for VersionState to be an explicit nil

### UnsetVersionState
`func (o *ConnectorStorage) UnsetVersionState()`

UnsetVersionState ensures that no value is present for VersionState, not even an explicit nil
### GetVersionId

`func (o *ConnectorStorage) GetVersionId() string`

GetVersionId returns the VersionId field if non-nil, zero value otherwise.

### GetVersionIdOk

`func (o *ConnectorStorage) GetVersionIdOk() (*string, bool)`

GetVersionIdOk returns a tuple with the VersionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionId

`func (o *ConnectorStorage) SetVersionId(v string)`

SetVersionId sets VersionId field to given value.


### SetVersionIdNil

`func (o *ConnectorStorage) SetVersionIdNil(b bool)`

 SetVersionIdNil sets the value for VersionId to be an explicit nil

### UnsetVersionId
`func (o *ConnectorStorage) UnsetVersionId()`

UnsetVersionId ensures that no value is present for VersionId, not even an explicit nil
### GetAttributes

`func (o *ConnectorStorage) GetAttributes() ConnectorStorageAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorStorage) GetAttributesOk() (*ConnectorStorageAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorStorage) SetAttributes(v ConnectorStorageAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


