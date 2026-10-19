# Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Modules** | Pointer to [**ApplicationModules**](ApplicationModules.md) |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Debug** | Pointer to **bool** |  | [optional] [default to false]
**ProductVersion** | **string** |  | [readonly] 
**IsVersioned** | **bool** |  | [readonly] [default to false]
**Version** | **int64** |  | [readonly] 
**VersionState** | **NullableString** |  | [readonly] 
**VersionId** | **NullableString** |  | [readonly] 

## Methods

### NewApplication

`func NewApplication(id int64, name string, lastEditor string, lastModified time.Time, productVersion string, isVersioned bool, version int64, versionState NullableString, versionId NullableString, ) *Application`

NewApplication instantiates a new Application object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationWithDefaults

`func NewApplicationWithDefaults() *Application`

NewApplicationWithDefaults instantiates a new Application object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Application) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Application) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Application) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Application) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Application) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Application) SetName(v string)`

SetName sets Name field to given value.


### GetLastEditor

`func (o *Application) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Application) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Application) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *Application) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Application) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Application) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetModules

`func (o *Application) GetModules() ApplicationModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *Application) GetModulesOk() (*ApplicationModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *Application) SetModules(v ApplicationModules)`

SetModules sets Modules field to given value.

### HasModules

`func (o *Application) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetActive

`func (o *Application) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Application) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Application) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Application) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDebug

`func (o *Application) GetDebug() bool`

GetDebug returns the Debug field if non-nil, zero value otherwise.

### GetDebugOk

`func (o *Application) GetDebugOk() (*bool, bool)`

GetDebugOk returns a tuple with the Debug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebug

`func (o *Application) SetDebug(v bool)`

SetDebug sets Debug field to given value.

### HasDebug

`func (o *Application) HasDebug() bool`

HasDebug returns a boolean if a field has been set.

### GetProductVersion

`func (o *Application) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *Application) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *Application) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetIsVersioned

`func (o *Application) GetIsVersioned() bool`

GetIsVersioned returns the IsVersioned field if non-nil, zero value otherwise.

### GetIsVersionedOk

`func (o *Application) GetIsVersionedOk() (*bool, bool)`

GetIsVersionedOk returns a tuple with the IsVersioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVersioned

`func (o *Application) SetIsVersioned(v bool)`

SetIsVersioned sets IsVersioned field to given value.


### GetVersion

`func (o *Application) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Application) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Application) SetVersion(v int64)`

SetVersion sets Version field to given value.


### GetVersionState

`func (o *Application) GetVersionState() string`

GetVersionState returns the VersionState field if non-nil, zero value otherwise.

### GetVersionStateOk

`func (o *Application) GetVersionStateOk() (*string, bool)`

GetVersionStateOk returns a tuple with the VersionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionState

`func (o *Application) SetVersionState(v string)`

SetVersionState sets VersionState field to given value.


### SetVersionStateNil

`func (o *Application) SetVersionStateNil(b bool)`

 SetVersionStateNil sets the value for VersionState to be an explicit nil

### UnsetVersionState
`func (o *Application) UnsetVersionState()`

UnsetVersionState ensures that no value is present for VersionState, not even an explicit nil
### GetVersionId

`func (o *Application) GetVersionId() string`

GetVersionId returns the VersionId field if non-nil, zero value otherwise.

### GetVersionIdOk

`func (o *Application) GetVersionIdOk() (*string, bool)`

GetVersionIdOk returns a tuple with the VersionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionId

`func (o *Application) SetVersionId(v string)`

SetVersionId sets VersionId field to given value.


### SetVersionIdNil

`func (o *Application) SetVersionIdNil(b bool)`

 SetVersionIdNil sets the value for VersionId to be an explicit nil

### UnsetVersionId
`func (o *Application) UnsetVersionId()`

UnsetVersionId ensures that no value is present for VersionId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


