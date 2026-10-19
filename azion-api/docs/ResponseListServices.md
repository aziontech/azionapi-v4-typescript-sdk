# ResponseListServices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**MinVersion** | Pointer to **string** |  | [optional] 
**Permissions** | Pointer to **int64** |  | [optional] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 
**RefCount** | **int64** |  | [readonly] 
**ProductVersion** | **string** |  | [readonly] 

## Methods

### NewResponseListServices

`func NewResponseListServices(id int64, lastEditor string, lastModified string, refCount int64, productVersion string, ) *ResponseListServices`

NewResponseListServices instantiates a new ResponseListServices object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListServicesWithDefaults

`func NewResponseListServicesWithDefaults() *ResponseListServices`

NewResponseListServicesWithDefaults instantiates a new ResponseListServices object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListServices) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListServices) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListServices) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ResponseListServices) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponseListServices) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponseListServices) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResponseListServices) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *ResponseListServices) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListServices) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListServices) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ResponseListServices) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetMinVersion

`func (o *ResponseListServices) GetMinVersion() string`

GetMinVersion returns the MinVersion field if non-nil, zero value otherwise.

### GetMinVersionOk

`func (o *ResponseListServices) GetMinVersionOk() (*string, bool)`

GetMinVersionOk returns a tuple with the MinVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVersion

`func (o *ResponseListServices) SetMinVersion(v string)`

SetMinVersion sets MinVersion field to given value.

### HasMinVersion

`func (o *ResponseListServices) HasMinVersion() bool`

HasMinVersion returns a boolean if a field has been set.

### GetPermissions

`func (o *ResponseListServices) GetPermissions() int64`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *ResponseListServices) GetPermissionsOk() (*int64, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *ResponseListServices) SetPermissions(v int64)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *ResponseListServices) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.

### GetLastEditor

`func (o *ResponseListServices) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListServices) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListServices) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListServices) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListServices) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListServices) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.


### GetRefCount

`func (o *ResponseListServices) GetRefCount() int64`

GetRefCount returns the RefCount field if non-nil, zero value otherwise.

### GetRefCountOk

`func (o *ResponseListServices) GetRefCountOk() (*int64, bool)`

GetRefCountOk returns a tuple with the RefCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefCount

`func (o *ResponseListServices) SetRefCount(v int64)`

SetRefCount sets RefCount field to given value.


### GetProductVersion

`func (o *ResponseListServices) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *ResponseListServices) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *ResponseListServices) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


