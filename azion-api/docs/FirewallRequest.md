# FirewallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Modules** | Pointer to [**FirewallModulesRequest**](FirewallModulesRequest.md) |  | [optional] 
**Debug** | Pointer to **bool** |  | [optional] [default to false]
**Active** | Pointer to **bool** |  | [optional] [default to true]

## Methods

### NewFirewallRequest

`func NewFirewallRequest(name string, ) *FirewallRequest`

NewFirewallRequest instantiates a new FirewallRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallRequestWithDefaults

`func NewFirewallRequestWithDefaults() *FirewallRequest`

NewFirewallRequestWithDefaults instantiates a new FirewallRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FirewallRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FirewallRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FirewallRequest) SetName(v string)`

SetName sets Name field to given value.


### GetModules

`func (o *FirewallRequest) GetModules() FirewallModulesRequest`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *FirewallRequest) GetModulesOk() (*FirewallModulesRequest, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *FirewallRequest) SetModules(v FirewallModulesRequest)`

SetModules sets Modules field to given value.

### HasModules

`func (o *FirewallRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.

### GetDebug

`func (o *FirewallRequest) GetDebug() bool`

GetDebug returns the Debug field if non-nil, zero value otherwise.

### GetDebugOk

`func (o *FirewallRequest) GetDebugOk() (*bool, bool)`

GetDebugOk returns a tuple with the Debug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebug

`func (o *FirewallRequest) SetDebug(v bool)`

SetDebug sets Debug field to given value.

### HasDebug

`func (o *FirewallRequest) HasDebug() bool`

HasDebug returns a boolean if a field has been set.

### GetActive

`func (o *FirewallRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FirewallRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FirewallRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FirewallRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


