# ExecutionScriptListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**TemplateUuid** | **string** |  | 
**CreatedAt** | **NullableTime** | Created date of the execution script. | [readonly] 

## Methods

### NewExecutionScriptListResponse

`func NewExecutionScriptListResponse(id int64, name string, templateUuid string, createdAt NullableTime, ) *ExecutionScriptListResponse`

NewExecutionScriptListResponse instantiates a new ExecutionScriptListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExecutionScriptListResponseWithDefaults

`func NewExecutionScriptListResponseWithDefaults() *ExecutionScriptListResponse`

NewExecutionScriptListResponseWithDefaults instantiates a new ExecutionScriptListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ExecutionScriptListResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExecutionScriptListResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExecutionScriptListResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ExecutionScriptListResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExecutionScriptListResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExecutionScriptListResponse) SetName(v string)`

SetName sets Name field to given value.


### GetTemplateUuid

`func (o *ExecutionScriptListResponse) GetTemplateUuid() string`

GetTemplateUuid returns the TemplateUuid field if non-nil, zero value otherwise.

### GetTemplateUuidOk

`func (o *ExecutionScriptListResponse) GetTemplateUuidOk() (*string, bool)`

GetTemplateUuidOk returns a tuple with the TemplateUuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateUuid

`func (o *ExecutionScriptListResponse) SetTemplateUuid(v string)`

SetTemplateUuid sets TemplateUuid field to given value.


### GetCreatedAt

`func (o *ExecutionScriptListResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ExecutionScriptListResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ExecutionScriptListResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *ExecutionScriptListResponse) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *ExecutionScriptListResponse) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


