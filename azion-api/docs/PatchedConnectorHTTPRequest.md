# PatchedConnectorHTTPRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | [**OriginTypeEnum**](OriginTypeEnum.md) |  | 
**Attributes** | Pointer to [**ConnectorHTTPAttributesRequest**](ConnectorHTTPAttributesRequest.md) |  | [optional] 

## Methods

### NewPatchedConnectorHTTPRequest

`func NewPatchedConnectorHTTPRequest(type_ OriginTypeEnum, ) *PatchedConnectorHTTPRequest`

NewPatchedConnectorHTTPRequest instantiates a new PatchedConnectorHTTPRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedConnectorHTTPRequestWithDefaults

`func NewPatchedConnectorHTTPRequestWithDefaults() *PatchedConnectorHTTPRequest`

NewPatchedConnectorHTTPRequestWithDefaults instantiates a new PatchedConnectorHTTPRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedConnectorHTTPRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedConnectorHTTPRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedConnectorHTTPRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedConnectorHTTPRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedConnectorHTTPRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedConnectorHTTPRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedConnectorHTTPRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedConnectorHTTPRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *PatchedConnectorHTTPRequest) GetType() OriginTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedConnectorHTTPRequest) GetTypeOk() (*OriginTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedConnectorHTTPRequest) SetType(v OriginTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PatchedConnectorHTTPRequest) GetAttributes() ConnectorHTTPAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PatchedConnectorHTTPRequest) GetAttributesOk() (*ConnectorHTTPAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PatchedConnectorHTTPRequest) SetAttributes(v ConnectorHTTPAttributesRequest)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PatchedConnectorHTTPRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


