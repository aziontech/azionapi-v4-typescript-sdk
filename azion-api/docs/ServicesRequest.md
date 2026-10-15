# ServicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**MinVersion** | Pointer to **string** |  | [optional] 
**Permissions** | Pointer to **int64** |  | [optional] 

## Methods

### NewServicesRequest

`func NewServicesRequest() *ServicesRequest`

NewServicesRequest instantiates a new ServicesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServicesRequestWithDefaults

`func NewServicesRequestWithDefaults() *ServicesRequest`

NewServicesRequestWithDefaults instantiates a new ServicesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServicesRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServicesRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServicesRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ServicesRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *ServicesRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServicesRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServicesRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ServicesRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetMinVersion

`func (o *ServicesRequest) GetMinVersion() string`

GetMinVersion returns the MinVersion field if non-nil, zero value otherwise.

### GetMinVersionOk

`func (o *ServicesRequest) GetMinVersionOk() (*string, bool)`

GetMinVersionOk returns a tuple with the MinVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVersion

`func (o *ServicesRequest) SetMinVersion(v string)`

SetMinVersion sets MinVersion field to given value.

### HasMinVersion

`func (o *ServicesRequest) HasMinVersion() bool`

HasMinVersion returns a boolean if a field has been set.

### GetPermissions

`func (o *ServicesRequest) GetPermissions() int64`

GetPermissions returns the Permissions field if non-nil, zero value otherwise.

### GetPermissionsOk

`func (o *ServicesRequest) GetPermissionsOk() (*int64, bool)`

GetPermissionsOk returns a tuple with the Permissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissions

`func (o *ServicesRequest) SetPermissions(v int64)`

SetPermissions sets Permissions field to given value.

### HasPermissions

`func (o *ServicesRequest) HasPermissions() bool`

HasPermissions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


