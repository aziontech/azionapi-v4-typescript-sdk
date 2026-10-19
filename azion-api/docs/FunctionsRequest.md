# FunctionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Runtime** | Pointer to [**RuntimeEnum**](RuntimeEnum.md) |  | [optional] [default to AZION_JS]
**ExecutionEnvironment** | Pointer to [**ExecutionEnvironmentEnum**](ExecutionEnvironmentEnum.md) |  | [optional] [default to APPLICATION]
**DefaultArgs** | Pointer to [**FunctionDefaultArgs**](FunctionDefaultArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Code** | **string** | String containing the function code. Maximum size: 50.0MB | 

## Methods

### NewFunctionsRequest

`func NewFunctionsRequest(name string, code string, ) *FunctionsRequest`

NewFunctionsRequest instantiates a new FunctionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionsRequestWithDefaults

`func NewFunctionsRequestWithDefaults() *FunctionsRequest`

NewFunctionsRequestWithDefaults instantiates a new FunctionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FunctionsRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FunctionsRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FunctionsRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *FunctionsRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FunctionsRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FunctionsRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FunctionsRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRuntime

`func (o *FunctionsRequest) GetRuntime() RuntimeEnum`

GetRuntime returns the Runtime field if non-nil, zero value otherwise.

### GetRuntimeOk

`func (o *FunctionsRequest) GetRuntimeOk() (*RuntimeEnum, bool)`

GetRuntimeOk returns a tuple with the Runtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuntime

`func (o *FunctionsRequest) SetRuntime(v RuntimeEnum)`

SetRuntime sets Runtime field to given value.

### HasRuntime

`func (o *FunctionsRequest) HasRuntime() bool`

HasRuntime returns a boolean if a field has been set.

### GetExecutionEnvironment

`func (o *FunctionsRequest) GetExecutionEnvironment() ExecutionEnvironmentEnum`

GetExecutionEnvironment returns the ExecutionEnvironment field if non-nil, zero value otherwise.

### GetExecutionEnvironmentOk

`func (o *FunctionsRequest) GetExecutionEnvironmentOk() (*ExecutionEnvironmentEnum, bool)`

GetExecutionEnvironmentOk returns a tuple with the ExecutionEnvironment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionEnvironment

`func (o *FunctionsRequest) SetExecutionEnvironment(v ExecutionEnvironmentEnum)`

SetExecutionEnvironment sets ExecutionEnvironment field to given value.

### HasExecutionEnvironment

`func (o *FunctionsRequest) HasExecutionEnvironment() bool`

HasExecutionEnvironment returns a boolean if a field has been set.

### GetDefaultArgs

`func (o *FunctionsRequest) GetDefaultArgs() FunctionDefaultArgs`

GetDefaultArgs returns the DefaultArgs field if non-nil, zero value otherwise.

### GetDefaultArgsOk

`func (o *FunctionsRequest) GetDefaultArgsOk() (*FunctionDefaultArgs, bool)`

GetDefaultArgsOk returns a tuple with the DefaultArgs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultArgs

`func (o *FunctionsRequest) SetDefaultArgs(v FunctionDefaultArgs)`

SetDefaultArgs sets DefaultArgs field to given value.

### HasDefaultArgs

`func (o *FunctionsRequest) HasDefaultArgs() bool`

HasDefaultArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *FunctionsRequest) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *FunctionsRequest) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *FunctionsRequest) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *FunctionsRequest) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetCode

`func (o *FunctionsRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FunctionsRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FunctionsRequest) SetCode(v string)`

SetCode sets Code field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


