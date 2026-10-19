# FirewallFunctionInstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Args** | Pointer to [**FirewallFunctionInstanceArgs**](FirewallFunctionInstanceArgs.md) |  | [optional] 
**AzionForm** | Pointer to [**FunctionAzionForm**](FunctionAzionForm.md) |  | [optional] 
**Function** | **int64** |  | 
**Active** | Pointer to **bool** |  | [optional] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewFirewallFunctionInstance

`func NewFirewallFunctionInstance(id int64, name string, function int64, lastEditor string, lastModified time.Time, createdAt time.Time, ) *FirewallFunctionInstance`

NewFirewallFunctionInstance instantiates a new FirewallFunctionInstance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallFunctionInstanceWithDefaults

`func NewFirewallFunctionInstanceWithDefaults() *FirewallFunctionInstance`

NewFirewallFunctionInstanceWithDefaults instantiates a new FirewallFunctionInstance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FirewallFunctionInstance) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FirewallFunctionInstance) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FirewallFunctionInstance) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *FirewallFunctionInstance) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FirewallFunctionInstance) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FirewallFunctionInstance) SetName(v string)`

SetName sets Name field to given value.


### GetArgs

`func (o *FirewallFunctionInstance) GetArgs() FirewallFunctionInstanceArgs`

GetArgs returns the Args field if non-nil, zero value otherwise.

### GetArgsOk

`func (o *FirewallFunctionInstance) GetArgsOk() (*FirewallFunctionInstanceArgs, bool)`

GetArgsOk returns a tuple with the Args field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArgs

`func (o *FirewallFunctionInstance) SetArgs(v FirewallFunctionInstanceArgs)`

SetArgs sets Args field to given value.

### HasArgs

`func (o *FirewallFunctionInstance) HasArgs() bool`

HasArgs returns a boolean if a field has been set.

### GetAzionForm

`func (o *FirewallFunctionInstance) GetAzionForm() FunctionAzionForm`

GetAzionForm returns the AzionForm field if non-nil, zero value otherwise.

### GetAzionFormOk

`func (o *FirewallFunctionInstance) GetAzionFormOk() (*FunctionAzionForm, bool)`

GetAzionFormOk returns a tuple with the AzionForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAzionForm

`func (o *FirewallFunctionInstance) SetAzionForm(v FunctionAzionForm)`

SetAzionForm sets AzionForm field to given value.

### HasAzionForm

`func (o *FirewallFunctionInstance) HasAzionForm() bool`

HasAzionForm returns a boolean if a field has been set.

### GetFunction

`func (o *FirewallFunctionInstance) GetFunction() int64`

GetFunction returns the Function field if non-nil, zero value otherwise.

### GetFunctionOk

`func (o *FirewallFunctionInstance) GetFunctionOk() (*int64, bool)`

GetFunctionOk returns a tuple with the Function field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunction

`func (o *FirewallFunctionInstance) SetFunction(v int64)`

SetFunction sets Function field to given value.


### GetActive

`func (o *FirewallFunctionInstance) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *FirewallFunctionInstance) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *FirewallFunctionInstance) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *FirewallFunctionInstance) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *FirewallFunctionInstance) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *FirewallFunctionInstance) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *FirewallFunctionInstance) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *FirewallFunctionInstance) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *FirewallFunctionInstance) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *FirewallFunctionInstance) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *FirewallFunctionInstance) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *FirewallFunctionInstance) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *FirewallFunctionInstance) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


