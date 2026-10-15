# PatchedWAFRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Name** | Pointer to **string** |  | [optional] 
**ProductVersion** | Pointer to **NullableString** |  | [optional] [default to "1.0"]
**EngineSettings** | Pointer to [**WAFEngineSettingsFieldRequest**](WAFEngineSettingsFieldRequest.md) |  | [optional] 

## Methods

### NewPatchedWAFRequest

`func NewPatchedWAFRequest() *PatchedWAFRequest`

NewPatchedWAFRequest instantiates a new PatchedWAFRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedWAFRequestWithDefaults

`func NewPatchedWAFRequestWithDefaults() *PatchedWAFRequest`

NewPatchedWAFRequestWithDefaults instantiates a new PatchedWAFRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *PatchedWAFRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedWAFRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedWAFRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedWAFRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetName

`func (o *PatchedWAFRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedWAFRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedWAFRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedWAFRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProductVersion

`func (o *PatchedWAFRequest) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *PatchedWAFRequest) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *PatchedWAFRequest) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.

### HasProductVersion

`func (o *PatchedWAFRequest) HasProductVersion() bool`

HasProductVersion returns a boolean if a field has been set.

### SetProductVersionNil

`func (o *PatchedWAFRequest) SetProductVersionNil(b bool)`

 SetProductVersionNil sets the value for ProductVersion to be an explicit nil

### UnsetProductVersion
`func (o *PatchedWAFRequest) UnsetProductVersion()`

UnsetProductVersion ensures that no value is present for ProductVersion, not even an explicit nil
### GetEngineSettings

`func (o *PatchedWAFRequest) GetEngineSettings() WAFEngineSettingsFieldRequest`

GetEngineSettings returns the EngineSettings field if non-nil, zero value otherwise.

### GetEngineSettingsOk

`func (o *PatchedWAFRequest) GetEngineSettingsOk() (*WAFEngineSettingsFieldRequest, bool)`

GetEngineSettingsOk returns a tuple with the EngineSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEngineSettings

`func (o *PatchedWAFRequest) SetEngineSettings(v WAFEngineSettingsFieldRequest)`

SetEngineSettings sets EngineSettings field to given value.

### HasEngineSettings

`func (o *PatchedWAFRequest) HasEngineSettings() bool`

HasEngineSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


