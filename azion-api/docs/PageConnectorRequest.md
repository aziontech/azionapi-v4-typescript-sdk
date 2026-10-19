# PageConnectorRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | [default to "page_connector"]
**Attributes** | [**PageConnectorAttributesRequest**](PageConnectorAttributesRequest.md) |  | 

## Methods

### NewPageConnectorRequest

`func NewPageConnectorRequest(type_ string, attributes PageConnectorAttributesRequest, ) *PageConnectorRequest`

NewPageConnectorRequest instantiates a new PageConnectorRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageConnectorRequestWithDefaults

`func NewPageConnectorRequestWithDefaults() *PageConnectorRequest`

NewPageConnectorRequestWithDefaults instantiates a new PageConnectorRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PageConnectorRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PageConnectorRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PageConnectorRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PageConnectorRequest) GetAttributes() PageConnectorAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PageConnectorRequest) GetAttributesOk() (*PageConnectorAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PageConnectorRequest) SetAttributes(v PageConnectorAttributesRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


