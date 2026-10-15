# WAFRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Name** | **string** |  | 
**ProductVersion** | Pointer to **NullableString** |  | [optional] [default to "1.0"]
**EngineSettings** | Pointer to [**WAFEngineSettingsFieldRequest**](WAFEngineSettingsFieldRequest.md) |  | [optional] 

## Methods

### NewWAFRequest

`func NewWAFRequest(name string, ) *WAFRequest`

NewWAFRequest instantiates a new WAFRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFRequestWithDefaults

`func NewWAFRequestWithDefaults() *WAFRequest`

NewWAFRequestWithDefaults instantiates a new WAFRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *WAFRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *WAFRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *WAFRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *WAFRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetName

`func (o *WAFRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WAFRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WAFRequest) SetName(v string)`

SetName sets Name field to given value.


### GetProductVersion

`func (o *WAFRequest) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *WAFRequest) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *WAFRequest) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.

### HasProductVersion

`func (o *WAFRequest) HasProductVersion() bool`

HasProductVersion returns a boolean if a field has been set.

### SetProductVersionNil

`func (o *WAFRequest) SetProductVersionNil(b bool)`

 SetProductVersionNil sets the value for ProductVersion to be an explicit nil

### UnsetProductVersion
`func (o *WAFRequest) UnsetProductVersion()`

UnsetProductVersion ensures that no value is present for ProductVersion, not even an explicit nil
### GetEngineSettings

`func (o *WAFRequest) GetEngineSettings() WAFEngineSettingsFieldRequest`

GetEngineSettings returns the EngineSettings field if non-nil, zero value otherwise.

### GetEngineSettingsOk

`func (o *WAFRequest) GetEngineSettingsOk() (*WAFEngineSettingsFieldRequest, bool)`

GetEngineSettingsOk returns a tuple with the EngineSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEngineSettings

`func (o *WAFRequest) SetEngineSettings(v WAFEngineSettingsFieldRequest)`

SetEngineSettings sets EngineSettings field to given value.

### HasEngineSettings

`func (o *WAFRequest) HasEngineSettings() bool`

HasEngineSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


