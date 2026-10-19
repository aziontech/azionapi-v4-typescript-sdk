# PageConnector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | [default to "page_connector"]
**Attributes** | [**PageConnectorAttributes**](PageConnectorAttributes.md) |  | 

## Methods

### NewPageConnector

`func NewPageConnector(type_ string, attributes PageConnectorAttributes, ) *PageConnector`

NewPageConnector instantiates a new PageConnector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageConnectorWithDefaults

`func NewPageConnectorWithDefaults() *PageConnector`

NewPageConnectorWithDefaults instantiates a new PageConnector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PageConnector) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageConnector) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageConnector) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PageConnector) GetAttributes() PageConnectorAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PageConnector) GetAttributesOk() (*PageConnectorAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PageConnector) SetAttributes(v PageConnectorAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


