# ConnectorHTTPRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | **string** |  | 
**Attributes** | [**ConnectorHTTPAttributesRequest**](ConnectorHTTPAttributesRequest.md) |  | 

## Methods

### NewConnectorHTTPRequest

`func NewConnectorHTTPRequest(name string, type_ string, attributes ConnectorHTTPAttributesRequest, ) *ConnectorHTTPRequest`

NewConnectorHTTPRequest instantiates a new ConnectorHTTPRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorHTTPRequestWithDefaults

`func NewConnectorHTTPRequestWithDefaults() *ConnectorHTTPRequest`

NewConnectorHTTPRequestWithDefaults instantiates a new ConnectorHTTPRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorHTTPRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorHTTPRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorHTTPRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ConnectorHTTPRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConnectorHTTPRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConnectorHTTPRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConnectorHTTPRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *ConnectorHTTPRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorHTTPRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorHTTPRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *ConnectorHTTPRequest) GetAttributes() ConnectorHTTPAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorHTTPRequest) GetAttributesOk() (*ConnectorHTTPAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorHTTPRequest) SetAttributes(v ConnectorHTTPAttributesRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


