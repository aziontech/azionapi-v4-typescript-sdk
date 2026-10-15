# PatchedFirewallFunctionInstanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Args** | Pointer to [**FirewallFunctionInstanceArgs**](FirewallFunctionInstanceArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Function** | Pointer to **int64** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewPatchedFirewallFunctionInstanceRequest

`func NewPatchedFirewallFunctionInstanceRequest() *PatchedFirewallFunctionInstanceRequest`

NewPatchedFirewallFunctionInstanceRequest instantiates a new PatchedFirewallFunctionInstanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedFirewallFunctionInstanceRequestWithDefaults

`func NewPatchedFirewallFunctionInstanceRequestWithDefaults() *PatchedFirewallFunctionInstanceRequest`

NewPatchedFirewallFunctionInstanceRequestWithDefaults instantiates a new PatchedFirewallFunctionInstanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedFirewallFunctionInstanceRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedFirewallFunctionInstanceRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedFirewallFunctionInstanceRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedFirewallFunctionInstanceRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetArgs

`func (o *PatchedFirewallFunctionInstanceRequest) GetArgs() FirewallFunctionInstanceArgs`

GetArgs returns the Args field if non-nil, zero value otherwise.

### GetArgsOk

`func (o *PatchedFirewallFunctionInstanceRequest) GetArgsOk() (*FirewallFunctionInstanceArgs, bool)`

GetArgsOk returns a tuple with the Args field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgs

`func (o *PatchedFirewallFunctionInstanceRequest) SetArgs(v FirewallFunctionInstanceArgs)`

SetArgs sets Args field to given value.

### HasArgs

`func (o *PatchedFirewallFunctionInstanceRequest) HasArgs() bool`

HasArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *PatchedFirewallFunctionInstanceRequest) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *PatchedFirewallFunctionInstanceRequest) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *PatchedFirewallFunctionInstanceRequest) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *PatchedFirewallFunctionInstanceRequest) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetFunction

`func (o *PatchedFirewallFunctionInstanceRequest) GetFunction() int64`

GetFunction returns the Function field if non-nil, zero value otherwise.

### GetFunctionOk

`func (o *PatchedFirewallFunctionInstanceRequest) GetFunctionOk() (*int64, bool)`

GetFunctionOk returns a tuple with the Function field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunction

`func (o *PatchedFirewallFunctionInstanceRequest) SetFunction(v int64)`

SetFunction sets Function field to given value.

### HasFunction

`func (o *PatchedFirewallFunctionInstanceRequest) HasFunction() bool`

HasFunction returns a boolean if a field has been set.

### GetActive

`func (o *PatchedFirewallFunctionInstanceRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedFirewallFunctionInstanceRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedFirewallFunctionInstanceRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedFirewallFunctionInstanceRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


