# ApplicationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Modules** | Pointer to [**ApplicationModulesRequest**](ApplicationModulesRequest.md) |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Debug** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewApplicationRequest

`func NewApplicationRequest(name string, ) *ApplicationRequest`

NewApplicationRequest instantiates a new ApplicationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationRequestWithDefaults

`func NewApplicationRequestWithDefaults() *ApplicationRequest`

NewApplicationRequestWithDefaults instantiates a new ApplicationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ApplicationRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApplicationRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApplicationRequest) SetName(v string)`

SetName sets Name field to given value.


### GetModules

`func (o *ApplicationRequest) GetModules() ApplicationModulesRequest`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *ApplicationRequest) GetModulesOk() (*ApplicationModulesRequest, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *ApplicationRequest) SetModules(v ApplicationModulesRequest)`

SetModules sets Modules field to given value.

### HasModules

`func (o *ApplicationRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetActive

`func (o *ApplicationRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ApplicationRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ApplicationRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ApplicationRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDebug

`func (o *ApplicationRequest) GetDebug() bool`

GetDebug returns the Debug field if non-nil, zero value otherwise.

### GetDebugOk

`func (o *ApplicationRequest) GetDebugOk() (*bool, bool)`

GetDebugOk returns a tuple with the Debug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebug

`func (o *ApplicationRequest) SetDebug(v bool)`

SetDebug sets Debug field to given value.

### HasDebug

`func (o *ApplicationRequest) HasDebug() bool`

HasDebug returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


