# PatchedConnectorRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | [**OriginTypeEnum**](OriginTypeEnum.md) |  | 
**Attributes** | Pointer to [**ConnectorLiveIngestAttributesRequest**](ConnectorLiveIngestAttributesRequest.md) |  | [optional] 

## Methods

### NewPatchedConnectorRequest

`func NewPatchedConnectorRequest(type_ OriginTypeEnum, ) *PatchedConnectorRequest`

NewPatchedConnectorRequest instantiates a new PatchedConnectorRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedConnectorRequestWithDefaults

`func NewPatchedConnectorRequestWithDefaults() *PatchedConnectorRequest`

NewPatchedConnectorRequestWithDefaults instantiates a new PatchedConnectorRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedConnectorRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedConnectorRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedConnectorRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedConnectorRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedConnectorRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedConnectorRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedConnectorRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedConnectorRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *PatchedConnectorRequest) GetType() OriginTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedConnectorRequest) GetTypeOk() (*OriginTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedConnectorRequest) SetType(v OriginTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PatchedConnectorRequest) GetAttributes() ConnectorLiveIngestAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PatchedConnectorRequest) GetAttributesOk() (*ConnectorLiveIngestAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PatchedConnectorRequest) SetAttributes(v ConnectorLiveIngestAttributesRequest)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PatchedConnectorRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


