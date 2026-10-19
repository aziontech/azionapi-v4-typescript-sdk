# ToolRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Type** | **string** |  | 
**JsonSchema** | Pointer to **map[string]interface{}** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewToolRequest

`func NewToolRequest(name string, type_ string, ) *ToolRequest`

NewToolRequest instantiates a new ToolRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToolRequestWithDefaults

`func NewToolRequestWithDefaults() *ToolRequest`

NewToolRequestWithDefaults instantiates a new ToolRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ToolRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ToolRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ToolRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ToolRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ToolRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ToolRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ToolRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *ToolRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ToolRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ToolRequest) SetType(v string)`

SetType sets Type field to given value.


### GetJsonSchema

`func (o *ToolRequest) GetJsonSchema() map[string]interface{}`

GetJsonSchema returns the JsonSchema field if non-nil, zero value otherwise.

### GetJsonSchemaOk

`func (o *ToolRequest) GetJsonSchemaOk() (*map[string]interface{}, bool)`

GetJsonSchemaOk returns a tuple with the JsonSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonSchema

`func (o *ToolRequest) SetJsonSchema(v map[string]interface{})`

SetJsonSchema sets JsonSchema field to given value.

### HasJsonSchema

`func (o *ToolRequest) HasJsonSchema() bool`

HasJsonSchema returns a boolean if a field has been set.

### GetActive

`func (o *ToolRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ToolRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ToolRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ToolRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


