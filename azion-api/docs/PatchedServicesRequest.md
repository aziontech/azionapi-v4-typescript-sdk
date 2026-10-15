# PatchedServicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**MinVersion** | Pointer to **string** |  | [optional] 
**Permissions** | Pointer to **int64** |  | [optional] 

## Methods

### NewPatchedServicesRequest

`func NewPatchedServicesRequest() *PatchedServicesRequest`

NewPatchedServicesRequest instantiates a new PatchedServicesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedServicesRequestWithDefaults

`func NewPatchedServicesRequestWithDefaults() *PatchedServicesRequest`

NewPatchedServicesRequestWithDefaults instantiates a new PatchedServicesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedServicesRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedServicesRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedServicesRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedServicesRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedServicesRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedServicesRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedServicesRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedServicesRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetMinVersion

`func (o *PatchedServicesRequest) GetMinVersion() string`

GetMinVersion returns the MinVersion field if non-nil, zero value otherwise.

### GetMinVersionOk

`func (o *PatchedServicesRequest) GetMinVersionOk() (*string, bool)`

GetMinVersionOk returns a tuple with the MinVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVersion

`func (o *PatchedServicesRequest) SetMinVersion(v string)`

SetMinVersion sets MinVersion field to given value.

### HasMinVersion

`func (o *PatchedServicesRequest) HasMinVersion() bool`

HasMinVersion returns a boolean if a field has been set.

### GetPermissions

`func (o *PatchedServicesRequest) GetPermissions() int64`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *PatchedServicesRequest) GetPermissionsOk() (*int64, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *PatchedServicesRequest) SetPermissions(v int64)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *PatchedServicesRequest) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


