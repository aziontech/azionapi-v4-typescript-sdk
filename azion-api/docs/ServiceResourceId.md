# ServiceResourceId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**ContentHash** | **string** |  | [readonly] 
**ContentType** | Pointer to **string** |  | [optional] 
**Trigger** | Pointer to [**TriggerEnum**](TriggerEnum.md) |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**IsTemplate** | **bool** |  | [readonly] 
**Active** | **bool** |  | [readonly] 
**FileGroup** | **string** |  | 
**FileMode** | **string** |  | 
**FileOwner** | **string** |  | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 

## Methods

### NewServiceResourceId

`func NewServiceResourceId(id int64, name string, contentHash string, isTemplate bool, active bool, fileGroup string, fileMode string, fileOwner string, lastEditor string, lastModified string, ) *ServiceResourceId`

NewServiceResourceId instantiates a new ServiceResourceId object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceResourceIdWithDefaults

`func NewServiceResourceIdWithDefaults() *ServiceResourceId`

NewServiceResourceIdWithDefaults instantiates a new ServiceResourceId object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceResourceId) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceResourceId) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceResourceId) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ServiceResourceId) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceResourceId) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceResourceId) SetName(v string)`

SetName sets Name field to given value.


### GetContentHash

`func (o *ServiceResourceId) GetContentHash() string`

GetContentHash returns the ContentHash field if non-nil, zero value otherwise.

### GetContentHashOk

`func (o *ServiceResourceId) GetContentHashOk() (*string, bool)`

GetContentHashOk returns a tuple with the ContentHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentHash

`func (o *ServiceResourceId) SetContentHash(v string)`

SetContentHash sets ContentHash field to given value.


### GetContentType

`func (o *ServiceResourceId) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *ServiceResourceId) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *ServiceResourceId) SetContentType(v string)`

SetContentType sets ContentType field to given value.

### HasContentType

`func (o *ServiceResourceId) HasContentType() bool`

HasContentType returns a boolean if a field has been set.

### GetTrigger

`func (o *ServiceResourceId) GetTrigger() TriggerEnum`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *ServiceResourceId) GetTriggerOk() (*TriggerEnum, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *ServiceResourceId) SetTrigger(v TriggerEnum)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *ServiceResourceId) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.

### GetContent

`func (o *ServiceResourceId) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ServiceResourceId) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ServiceResourceId) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *ServiceResourceId) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetIsTemplate

`func (o *ServiceResourceId) GetIsTemplate() bool`

GetIsTemplate returns the IsTemplate field if non-nil, zero value otherwise.

### GetIsTemplateOk

`func (o *ServiceResourceId) GetIsTemplateOk() (*bool, bool)`

GetIsTemplateOk returns a tuple with the IsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTemplate

`func (o *ServiceResourceId) SetIsTemplate(v bool)`

SetIsTemplate sets IsTemplate field to given value.


### GetActive

`func (o *ServiceResourceId) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceResourceId) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceResourceId) SetActive(v bool)`

SetActive sets Active field to given value.


### GetFileGroup

`func (o *ServiceResourceId) GetFileGroup() string`

GetFileGroup returns the FileGroup field if non-nil, zero value otherwise.

### GetFileGroupOk

`func (o *ServiceResourceId) GetFileGroupOk() (*string, bool)`

GetFileGroupOk returns a tuple with the FileGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileGroup

`func (o *ServiceResourceId) SetFileGroup(v string)`

SetFileGroup sets FileGroup field to given value.


### GetFileMode

`func (o *ServiceResourceId) GetFileMode() string`

GetFileMode returns the FileMode field if non-nil, zero value otherwise.

### GetFileModeOk

`func (o *ServiceResourceId) GetFileModeOk() (*string, bool)`

GetFileModeOk returns a tuple with the FileMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileMode

`func (o *ServiceResourceId) SetFileMode(v string)`

SetFileMode sets FileMode field to given value.


### GetFileOwner

`func (o *ServiceResourceId) GetFileOwner() string`

GetFileOwner returns the FileOwner field if non-nil, zero value otherwise.

### GetFileOwnerOk

`func (o *ServiceResourceId) GetFileOwnerOk() (*string, bool)`

GetFileOwnerOk returns a tuple with the FileOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileOwner

`func (o *ServiceResourceId) SetFileOwner(v string)`

SetFileOwner sets FileOwner field to given value.


### GetLastEditor

`func (o *ServiceResourceId) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ServiceResourceId) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ServiceResourceId) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ServiceResourceId) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ServiceResourceId) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ServiceResourceId) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


