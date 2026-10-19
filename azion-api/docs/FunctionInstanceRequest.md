# FunctionInstanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Args** | Pointer to [**FirewallFunctionInstanceArgs**](FirewallFunctionInstanceArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Function** | **int64** |  | 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewFunctionInstanceRequest

`func NewFunctionInstanceRequest(name string, function int64, ) *FunctionInstanceRequest`

NewFunctionInstanceRequest instantiates a new FunctionInstanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionInstanceRequestWithDefaults

`func NewFunctionInstanceRequestWithDefaults() *FunctionInstanceRequest`

NewFunctionInstanceRequestWithDefaults instantiates a new FunctionInstanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FunctionInstanceRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FunctionInstanceRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FunctionInstanceRequest) SetName(v string)`

SetName sets Name field to given value.


### GetArgs

`func (o *FunctionInstanceRequest) GetArgs() FirewallFunctionInstanceArgs`

GetArgs returns the Args field if non-nil, zero value otherwise.

### GetArgsOk

`func (o *FunctionInstanceRequest) GetArgsOk() (*FirewallFunctionInstanceArgs, bool)`

GetArgsOk returns a tuple with the Args field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgs

`func (o *FunctionInstanceRequest) SetArgs(v FirewallFunctionInstanceArgs)`

SetArgs sets Args field to given value.

### HasArgs

`func (o *FunctionInstanceRequest) HasArgs() bool`

HasArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *FunctionInstanceRequest) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *FunctionInstanceRequest) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *FunctionInstanceRequest) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *FunctionInstanceRequest) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetFunction

`func (o *FunctionInstanceRequest) GetFunction() int64`

GetFunction returns the Function field if non-nil, zero value otherwise.

### GetFunctionOk

`func (o *FunctionInstanceRequest) GetFunctionOk() (*int64, bool)`

GetFunctionOk returns a tuple with the Function field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunction

`func (o *FunctionInstanceRequest) SetFunction(v int64)`

SetFunction sets Function field to given value.


### GetActive

`func (o *FunctionInstanceRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FunctionInstanceRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FunctionInstanceRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FunctionInstanceRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


