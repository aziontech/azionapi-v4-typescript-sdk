# Nodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**HashId** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Status** | [**StatusEnum**](StatusEnum.md) |  | 
**Active** | **bool** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 
**Modules** | Pointer to **interface{}** |  | [optional] 
**ProductVersion** | **string** |  | [readonly] 

## Methods

### NewNodes

`func NewNodes(id int64, hashId string, name string, status StatusEnum, active bool, lastEditor string, lastModified string, productVersion string, ) *Nodes`

NewNodes instantiates a new Nodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodesWithDefaults

`func NewNodesWithDefaults() *Nodes`

NewNodesWithDefaults instantiates a new Nodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nodes) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nodes) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nodes) SetId(v int64)`

SetId sets Id field to given value.


### GetHashId

`func (o *Nodes) GetHashId() string`

GetHashId returns the HashId field if non-nil, zero value otherwise.

### GetHashIdOk

`func (o *Nodes) GetHashIdOk() (*string, bool)`

GetHashIdOk returns a tuple with the HashId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHashId

`func (o *Nodes) SetHashId(v string)`

SetHashId sets HashId field to given value.


### GetName

`func (o *Nodes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nodes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nodes) SetName(v string)`

SetName sets Name field to given value.


### GetStatus

`func (o *Nodes) GetStatus() StatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Nodes) GetStatusOk() (*StatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Nodes) SetStatus(v StatusEnum)`

SetStatus sets Status field to given value.


### GetActive

`func (o *Nodes) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Nodes) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Nodes) SetActive(v bool)`

SetActive sets Active field to given value.


### GetLastEditor

`func (o *Nodes) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Nodes) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Nodes) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *Nodes) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Nodes) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Nodes) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.


### GetModules

`func (o *Nodes) GetModules() interface{}`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *Nodes) GetModulesOk() (*interface{}, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *Nodes) SetModules(v interface{})`

SetModules sets Modules field to given value.

### HasModules

`func (o *Nodes) HasModules() bool`

HasModules returns a boolean if a field has been set.

### SetModulesNil

`func (o *Nodes) SetModulesNil(b bool)`

 SetModulesNil sets the value for Modules to be an explicit nil

### UnsetModules
`func (o *Nodes) UnsetModules()`

UnsetModules ensures that no value is present for Modules, not even an explicit nil
### GetProductVersion

`func (o *Nodes) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *Nodes) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *Nodes) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


