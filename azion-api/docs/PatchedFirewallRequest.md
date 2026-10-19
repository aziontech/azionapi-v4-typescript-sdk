# PatchedFirewallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Modules** | Pointer to [**FirewallModulesRequest**](FirewallModulesRequest.md) |  | [optional] 
**Debug** | Pointer to **bool** |  | [optional] [default to false]
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewPatchedFirewallRequest

`func NewPatchedFirewallRequest() *PatchedFirewallRequest`

NewPatchedFirewallRequest instantiates a new PatchedFirewallRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedFirewallRequestWithDefaults

`func NewPatchedFirewallRequestWithDefaults() *PatchedFirewallRequest`

NewPatchedFirewallRequestWithDefaults instantiates a new PatchedFirewallRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedFirewallRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedFirewallRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedFirewallRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedFirewallRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetModules

`func (o *PatchedFirewallRequest) GetModules() FirewallModulesRequest`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *PatchedFirewallRequest) GetModulesOk() (*FirewallModulesRequest, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *PatchedFirewallRequest) SetModules(v FirewallModulesRequest)`

SetModules sets Modules field to given value.

### HasModules

`func (o *PatchedFirewallRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetDebug

`func (o *PatchedFirewallRequest) GetDebug() bool`

GetDebug returns the Debug field if non-nil, zero value otherwise.

### GetDebugOk

`func (o *PatchedFirewallRequest) GetDebugOk() (*bool, bool)`

GetDebugOk returns a tuple with the Debug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebug

`func (o *PatchedFirewallRequest) SetDebug(v bool)`

SetDebug sets Debug field to given value.

### HasDebug

`func (o *PatchedFirewallRequest) HasDebug() bool`

HasDebug returns a boolean if a field has been set.

### GetActive

`func (o *PatchedFirewallRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedFirewallRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedFirewallRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedFirewallRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


