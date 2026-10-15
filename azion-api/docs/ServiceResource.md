# ServiceResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**ContentHash** | **string** |  | [readonly] 
**ContentType** | **string** |  | 
**FileGroup** | **string** |  | 
**FileMode** | **string** |  | 
**FileOwner** | **string** |  | 
**IsTemplate** | **bool** |  | [readonly] 
**Active** | **bool** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 
**RefCount** | **int64** |  | [readonly] 

## Methods

### NewServiceResource

`func NewServiceResource(id int64, name string, contentHash string, contentType string, fileGroup string, fileMode string, fileOwner string, isTemplate bool, active bool, lastEditor string, lastModified string, refCount int64, ) *ServiceResource`

NewServiceResource instantiates a new ServiceResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceResourceWithDefaults

`func NewServiceResourceWithDefaults() *ServiceResource`

NewServiceResourceWithDefaults instantiates a new ServiceResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceResource) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceResource) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceResource) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ServiceResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceResource) SetName(v string)`

SetName sets Name field to given value.


### GetContentHash

`func (o *ServiceResource) GetContentHash() string`

GetContentHash returns the ContentHash field if non-nil, zero value otherwise.

### GetContentHashOk

`func (o *ServiceResource) GetContentHashOk() (*string, bool)`

GetContentHashOk returns a tuple with the ContentHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentHash

`func (o *ServiceResource) SetContentHash(v string)`

SetContentHash sets ContentHash field to given value.


### GetContentType

`func (o *ServiceResource) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *ServiceResource) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *ServiceResource) SetContentType(v string)`

SetContentType sets ContentType field to given value.


### GetFileGroup

`func (o *ServiceResource) GetFileGroup() string`

GetFileGroup returns the FileGroup field if non-nil, zero value otherwise.

### GetFileGroupOk

`func (o *ServiceResource) GetFileGroupOk() (*string, bool)`

GetFileGroupOk returns a tuple with the FileGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileGroup

`func (o *ServiceResource) SetFileGroup(v string)`

SetFileGroup sets FileGroup field to given value.


### GetFileMode

`func (o *ServiceResource) GetFileMode() string`

GetFileMode returns the FileMode field if non-nil, zero value otherwise.

### GetFileModeOk

`func (o *ServiceResource) GetFileModeOk() (*string, bool)`

GetFileModeOk returns a tuple with the FileMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileMode

`func (o *ServiceResource) SetFileMode(v string)`

SetFileMode sets FileMode field to given value.


### GetFileOwner

`func (o *ServiceResource) GetFileOwner() string`

GetFileOwner returns the FileOwner field if non-nil, zero value otherwise.

### GetFileOwnerOk

`func (o *ServiceResource) GetFileOwnerOk() (*string, bool)`

GetFileOwnerOk returns a tuple with the FileOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileOwner

`func (o *ServiceResource) SetFileOwner(v string)`

SetFileOwner sets FileOwner field to given value.


### GetIsTemplate

`func (o *ServiceResource) GetIsTemplate() bool`

GetIsTemplate returns the IsTemplate field if non-nil, zero value otherwise.

### GetIsTemplateOk

`func (o *ServiceResource) GetIsTemplateOk() (*bool, bool)`

GetIsTemplateOk returns a tuple with the IsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsTemplate

`func (o *ServiceResource) SetIsTemplate(v bool)`

SetIsTemplate sets IsTemplate field to given value.


### GetActive

`func (o *ServiceResource) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceResource) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceResource) SetActive(v bool)`

SetActive sets Active field to given value.


### GetLastEditor

`func (o *ServiceResource) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ServiceResource) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ServiceResource) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ServiceResource) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ServiceResource) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ServiceResource) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.


### GetRefCount

`func (o *ServiceResource) GetRefCount() int64`

GetRefCount returns the RefCount field if non-nil, zero value otherwise.

### GetRefCountOk

`func (o *ServiceResource) GetRefCountOk() (*int64, bool)`

GetRefCountOk returns a tuple with the RefCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefCount

`func (o *ServiceResource) SetRefCount(v int64)`

SetRefCount sets RefCount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


