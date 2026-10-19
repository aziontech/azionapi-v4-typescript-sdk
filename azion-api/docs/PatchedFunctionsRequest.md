# PatchedFunctionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Runtime** | Pointer to [**RuntimeEnum**](RuntimeEnum.md) |  | [optional] [default to AZION_JS]
**ExecutionEnvironment** | Pointer to [**ExecutionEnvironmentEnum**](ExecutionEnvironmentEnum.md) |  | [optional] [default to APPLICATION]
**DefaultArgs** | Pointer to [**FunctionDefaultArgs**](FunctionDefaultArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Code** | Pointer to **string** | String containing the function code. Maximum size: 50.0MB | [optional] 

## Methods

### NewPatchedFunctionsRequest

`func NewPatchedFunctionsRequest() *PatchedFunctionsRequest`

NewPatchedFunctionsRequest instantiates a new PatchedFunctionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedFunctionsRequestWithDefaults

`func NewPatchedFunctionsRequestWithDefaults() *PatchedFunctionsRequest`

NewPatchedFunctionsRequestWithDefaults instantiates a new PatchedFunctionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedFunctionsRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedFunctionsRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedFunctionsRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedFunctionsRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedFunctionsRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedFunctionsRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedFunctionsRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedFunctionsRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRuntime

`func (o *PatchedFunctionsRequest) GetRuntime() RuntimeEnum`

GetRuntime returns the Runtime field if non-nil, zero value otherwise.

### GetRuntimeOk

`func (o *PatchedFunctionsRequest) GetRuntimeOk() (*RuntimeEnum, bool)`

GetRuntimeOk returns a tuple with the Runtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuntime

`func (o *PatchedFunctionsRequest) SetRuntime(v RuntimeEnum)`

SetRuntime sets Runtime field to given value.

### HasRuntime

`func (o *PatchedFunctionsRequest) HasRuntime() bool`

HasRuntime returns a boolean if a field has been set.

### GetExecutionEnvironment

`func (o *PatchedFunctionsRequest) GetExecutionEnvironment() ExecutionEnvironmentEnum`

GetExecutionEnvironment returns the ExecutionEnvironment field if non-nil, zero value otherwise.

### GetExecutionEnvironmentOk

`func (o *PatchedFunctionsRequest) GetExecutionEnvironmentOk() (*ExecutionEnvironmentEnum, bool)`

GetExecutionEnvironmentOk returns a tuple with the ExecutionEnvironment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionEnvironment

`func (o *PatchedFunctionsRequest) SetExecutionEnvironment(v ExecutionEnvironmentEnum)`

SetExecutionEnvironment sets ExecutionEnvironment field to given value.

### HasExecutionEnvironment

`func (o *PatchedFunctionsRequest) HasExecutionEnvironment() bool`

HasExecutionEnvironment returns a boolean if a field has been set.

### GetDefaultArgs

`func (o *PatchedFunctionsRequest) GetDefaultArgs() FunctionDefaultArgs`

GetDefaultArgs returns the DefaultArgs field if non-nil, zero value otherwise.

### GetDefaultArgsOk

`func (o *PatchedFunctionsRequest) GetDefaultArgsOk() (*FunctionDefaultArgs, bool)`

GetDefaultArgsOk returns a tuple with the DefaultArgs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultArgs

`func (o *PatchedFunctionsRequest) SetDefaultArgs(v FunctionDefaultArgs)`

SetDefaultArgs sets DefaultArgs field to given value.

### HasDefaultArgs

`func (o *PatchedFunctionsRequest) HasDefaultArgs() bool`

HasDefaultArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *PatchedFunctionsRequest) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *PatchedFunctionsRequest) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *PatchedFunctionsRequest) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *PatchedFunctionsRequest) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetCode

`func (o *PatchedFunctionsRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PatchedFunctionsRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PatchedFunctionsRequest) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PatchedFunctionsRequest) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


