# Tool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ToolId** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Type** | **string** |  | 
**JsonSchema** | Pointer to **map[string]interface{}** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**Kbs** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 

## Methods

### NewTool

`func NewTool(toolId int64, name string, type_ string, kbs string, lastModified time.Time, lastEditor string, ) *Tool`

NewTool instantiates a new Tool object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToolWithDefaults

`func NewToolWithDefaults() *Tool`

NewToolWithDefaults instantiates a new Tool object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToolId

`func (o *Tool) GetToolId() int64`

GetToolId returns the ToolId field if non-nil, zero value otherwise.

### GetToolIdOk

`func (o *Tool) GetToolIdOk() (*int64, bool)`

GetToolIdOk returns a tuple with the ToolId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolId

`func (o *Tool) SetToolId(v int64)`

SetToolId sets ToolId field to given value.


### GetName

`func (o *Tool) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tool) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tool) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Tool) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Tool) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Tool) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Tool) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Tool) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Tool) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Tool) SetType(v string)`

SetType sets Type field to given value.


### GetJsonSchema

`func (o *Tool) GetJsonSchema() map[string]interface{}`

GetJsonSchema returns the JsonSchema field if non-nil, zero value otherwise.

### GetJsonSchemaOk

`func (o *Tool) GetJsonSchemaOk() (*map[string]interface{}, bool)`

GetJsonSchemaOk returns a tuple with the JsonSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonSchema

`func (o *Tool) SetJsonSchema(v map[string]interface{})`

SetJsonSchema sets JsonSchema field to given value.

### HasJsonSchema

`func (o *Tool) HasJsonSchema() bool`

HasJsonSchema returns a boolean if a field has been set.

### GetActive

`func (o *Tool) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Tool) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Tool) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Tool) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetKbs

`func (o *Tool) GetKbs() string`

GetKbs returns the Kbs field if non-nil, zero value otherwise.

### GetKbsOk

`func (o *Tool) GetKbsOk() (*string, bool)`

GetKbsOk returns a tuple with the Kbs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKbs

`func (o *Tool) SetKbs(v string)`

SetKbs sets Kbs field to given value.


### GetLastModified

`func (o *Tool) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Tool) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Tool) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetLastEditor

`func (o *Tool) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Tool) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Tool) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


