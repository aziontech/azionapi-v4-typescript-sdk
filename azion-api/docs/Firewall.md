# Firewall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Modules** | Pointer to [**FirewallModules**](FirewallModules.md) |  | [optional] 
**Debug** | Pointer to **bool** |  | [optional] [default to false]
**Active** | Pointer to **bool** |  | [optional] [default to true]
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**ProductVersion** | **string** |  | [readonly] 
**IsVersioned** | **bool** |  | [readonly] 
**Version** | **NullableInt64** |  | [readonly] 
**VersionState** | **NullableString** |  | [readonly] 
**VersionId** | **NullableString** |  | [readonly] 

## Methods

### NewFirewall

`func NewFirewall(id int64, name string, lastEditor string, lastModified time.Time, createdAt time.Time, productVersion string, isVersioned bool, version NullableInt64, versionState NullableString, versionId NullableString, ) *Firewall`

NewFirewall instantiates a new Firewall object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallWithDefaults

`func NewFirewallWithDefaults() *Firewall`

NewFirewallWithDefaults instantiates a new Firewall object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Firewall) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Firewall) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Firewall) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Firewall) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Firewall) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Firewall) SetName(v string)`

SetName sets Name field to given value.


### GetModules

`func (o *Firewall) GetModules() FirewallModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *Firewall) GetModulesOk() (*FirewallModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *Firewall) SetModules(v FirewallModules)`

SetModules sets Modules field to given value.

### HasModules

`func (o *Firewall) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetDebug

`func (o *Firewall) GetDebug() bool`

GetDebug returns the Debug field if non-nil, zero value otherwise.

### GetDebugOk

`func (o *Firewall) GetDebugOk() (*bool, bool)`

GetDebugOk returns a tuple with the Debug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebug

`func (o *Firewall) SetDebug(v bool)`

SetDebug sets Debug field to given value.

### HasDebug

`func (o *Firewall) HasDebug() bool`

HasDebug returns a boolean if a field has been set.

### GetActive

`func (o *Firewall) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Firewall) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Firewall) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Firewall) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *Firewall) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Firewall) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Firewall) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *Firewall) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Firewall) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Firewall) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *Firewall) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Firewall) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Firewall) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetProductVersion

`func (o *Firewall) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *Firewall) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *Firewall) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetIsVersioned

`func (o *Firewall) GetIsVersioned() bool`

GetIsVersioned returns the IsVersioned field if non-nil, zero value otherwise.

### GetIsVersionedOk

`func (o *Firewall) GetIsVersionedOk() (*bool, bool)`

GetIsVersionedOk returns a tuple with the IsVersioned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVersioned

`func (o *Firewall) SetIsVersioned(v bool)`

SetIsVersioned sets IsVersioned field to given value.


### GetVersion

`func (o *Firewall) GetVersion() int64`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Firewall) GetVersionOk() (*int64, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Firewall) SetVersion(v int64)`

SetVersion sets Version field to given value.


### SetVersionNil

`func (o *Firewall) SetVersionNil(b bool)`

 SetVersionNil sets the value for Version to be an explicit nil

### UnsetVersion
`func (o *Firewall) UnsetVersion()`

UnsetVersion ensures that no value is present for Version, not even an explicit nil
### GetVersionState

`func (o *Firewall) GetVersionState() string`

GetVersionState returns the VersionState field if non-nil, zero value otherwise.

### GetVersionStateOk

`func (o *Firewall) GetVersionStateOk() (*string, bool)`

GetVersionStateOk returns a tuple with the VersionState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionState

`func (o *Firewall) SetVersionState(v string)`

SetVersionState sets VersionState field to given value.


### SetVersionStateNil

`func (o *Firewall) SetVersionStateNil(b bool)`

 SetVersionStateNil sets the value for VersionState to be an explicit nil

### UnsetVersionState
`func (o *Firewall) UnsetVersionState()`

UnsetVersionState ensures that no value is present for VersionState, not even an explicit nil
### GetVersionId

`func (o *Firewall) GetVersionId() string`

GetVersionId returns the VersionId field if non-nil, zero value otherwise.

### GetVersionIdOk

`func (o *Firewall) GetVersionIdOk() (*string, bool)`

GetVersionIdOk returns a tuple with the VersionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionId

`func (o *Firewall) SetVersionId(v string)`

SetVersionId sets VersionId field to given value.


### SetVersionIdNil

`func (o *Firewall) SetVersionIdNil(b bool)`

 SetVersionIdNil sets the value for VersionId to be an explicit nil

### UnsetVersionId
`func (o *Firewall) UnsetVersionId()`

UnsetVersionId ensures that no value is present for VersionId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


