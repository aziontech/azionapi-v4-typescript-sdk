# ServiceResourceIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**ContentType** | Pointer to **string** |  | [optional] 
**Trigger** | Pointer to [**TriggerEnum**](TriggerEnum.md) |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 
**FileGroup** | **string** |  | 
**FileMode** | **string** |  | 
**FileOwner** | **string** |  | 

## Methods

### NewServiceResourceIdRequest

`func NewServiceResourceIdRequest(name string, fileGroup string, fileMode string, fileOwner string, ) *ServiceResourceIdRequest`

NewServiceResourceIdRequest instantiates a new ServiceResourceIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceResourceIdRequestWithDefaults

`func NewServiceResourceIdRequestWithDefaults() *ServiceResourceIdRequest`

NewServiceResourceIdRequestWithDefaults instantiates a new ServiceResourceIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServiceResourceIdRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceResourceIdRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceResourceIdRequest) SetName(v string)`

SetName sets Name field to given value.


### GetContentType

`func (o *ServiceResourceIdRequest) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *ServiceResourceIdRequest) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *ServiceResourceIdRequest) SetContentType(v string)`

SetContentType sets ContentType field to given value.

### HasContentType

`func (o *ServiceResourceIdRequest) HasContentType() bool`

HasContentType returns a boolean if a field has been set.

### GetTrigger

`func (o *ServiceResourceIdRequest) GetTrigger() TriggerEnum`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *ServiceResourceIdRequest) GetTriggerOk() (*TriggerEnum, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *ServiceResourceIdRequest) SetTrigger(v TriggerEnum)`

SetTrigger sets Trigger field to given value.

### HasTrigger

`func (o *ServiceResourceIdRequest) HasTrigger() bool`

HasTrigger returns a boolean if a field has been set.

### GetContent

`func (o *ServiceResourceIdRequest) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ServiceResourceIdRequest) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ServiceResourceIdRequest) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *ServiceResourceIdRequest) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetFileGroup

`func (o *ServiceResourceIdRequest) GetFileGroup() string`

GetFileGroup returns the FileGroup field if non-nil, zero value otherwise.

### GetFileGroupOk

`func (o *ServiceResourceIdRequest) GetFileGroupOk() (*string, bool)`

GetFileGroupOk returns a tuple with the FileGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileGroup

`func (o *ServiceResourceIdRequest) SetFileGroup(v string)`

SetFileGroup sets FileGroup field to given value.


### GetFileMode

`func (o *ServiceResourceIdRequest) GetFileMode() string`

GetFileMode returns the FileMode field if non-nil, zero value otherwise.

### GetFileModeOk

`func (o *ServiceResourceIdRequest) GetFileModeOk() (*string, bool)`

GetFileModeOk returns a tuple with the FileMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileMode

`func (o *ServiceResourceIdRequest) SetFileMode(v string)`

SetFileMode sets FileMode field to given value.


### GetFileOwner

`func (o *ServiceResourceIdRequest) GetFileOwner() string`

GetFileOwner returns the FileOwner field if non-nil, zero value otherwise.

### GetFileOwnerOk

`func (o *ServiceResourceIdRequest) GetFileOwnerOk() (*string, bool)`

GetFileOwnerOk returns a tuple with the FileOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileOwner

`func (o *ServiceResourceIdRequest) SetFileOwner(v string)`

SetFileOwner sets FileOwner field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


