# FirewallFunctionInstanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Args** | Pointer to [**FirewallFunctionInstanceArgs**](FirewallFunctionInstanceArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Function** | **int64** |  | 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewFirewallFunctionInstanceRequest

`func NewFirewallFunctionInstanceRequest(name string, function int64, ) *FirewallFunctionInstanceRequest`

NewFirewallFunctionInstanceRequest instantiates a new FirewallFunctionInstanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallFunctionInstanceRequestWithDefaults

`func NewFirewallFunctionInstanceRequestWithDefaults() *FirewallFunctionInstanceRequest`

NewFirewallFunctionInstanceRequestWithDefaults instantiates a new FirewallFunctionInstanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FirewallFunctionInstanceRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FirewallFunctionInstanceRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FirewallFunctionInstanceRequest) SetName(v string)`

SetName sets Name field to given value.


### GetArgs

`func (o *FirewallFunctionInstanceRequest) GetArgs() FirewallFunctionInstanceArgs`

GetArgs returns the Args field if non-nil, zero value otherwise.

### GetArgsOk

`func (o *FirewallFunctionInstanceRequest) GetArgsOk() (*FirewallFunctionInstanceArgs, bool)`

GetArgsOk returns a tuple with the Args field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgs

`func (o *FirewallFunctionInstanceRequest) SetArgs(v FirewallFunctionInstanceArgs)`

SetArgs sets Args field to given value.

### HasArgs

`func (o *FirewallFunctionInstanceRequest) HasArgs() bool`

HasArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *FirewallFunctionInstanceRequest) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *FirewallFunctionInstanceRequest) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *FirewallFunctionInstanceRequest) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *FirewallFunctionInstanceRequest) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetFunction

`func (o *FirewallFunctionInstanceRequest) GetFunction() int64`

GetFunction returns the Function field if non-nil, zero value otherwise.

### GetFunctionOk

`func (o *FirewallFunctionInstanceRequest) GetFunctionOk() (*int64, bool)`

GetFunctionOk returns a tuple with the Function field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunction

`func (o *FirewallFunctionInstanceRequest) SetFunction(v int64)`

SetFunction sets Function field to given value.


### GetActive

`func (o *FirewallFunctionInstanceRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FirewallFunctionInstanceRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FirewallFunctionInstanceRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FirewallFunctionInstanceRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


