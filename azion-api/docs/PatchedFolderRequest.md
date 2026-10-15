# PatchedFolderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **string** | * &#x60;azion&#x60; - Items that have Azion scope can be shared to any account that has access permission. * &#x60;account&#x60; - Items that have Account scope can only be shared with account users. * &#x60;user&#x60; - Items that have User scope will only be available to the account user. | [optional] 

## Methods

### NewPatchedFolderRequest

`func NewPatchedFolderRequest() *PatchedFolderRequest`

NewPatchedFolderRequest instantiates a new PatchedFolderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedFolderRequestWithDefaults

`func NewPatchedFolderRequestWithDefaults() *PatchedFolderRequest`

NewPatchedFolderRequestWithDefaults instantiates a new PatchedFolderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedFolderRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedFolderRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedFolderRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedFolderRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *PatchedFolderRequest) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *PatchedFolderRequest) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *PatchedFolderRequest) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *PatchedFolderRequest) HasScope() bool`

HasScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


