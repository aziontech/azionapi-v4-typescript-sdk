# PatchedConnectorLiveIngestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | [**OriginTypeEnum**](OriginTypeEnum.md) |  | 
**Attributes** | Pointer to [**ConnectorLiveIngestAttributesRequest**](ConnectorLiveIngestAttributesRequest.md) |  | [optional] 

## Methods

### NewPatchedConnectorLiveIngestRequest

`func NewPatchedConnectorLiveIngestRequest(type_ OriginTypeEnum, ) *PatchedConnectorLiveIngestRequest`

NewPatchedConnectorLiveIngestRequest instantiates a new PatchedConnectorLiveIngestRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedConnectorLiveIngestRequestWithDefaults

`func NewPatchedConnectorLiveIngestRequestWithDefaults() *PatchedConnectorLiveIngestRequest`

NewPatchedConnectorLiveIngestRequestWithDefaults instantiates a new PatchedConnectorLiveIngestRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedConnectorLiveIngestRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedConnectorLiveIngestRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedConnectorLiveIngestRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedConnectorLiveIngestRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedConnectorLiveIngestRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedConnectorLiveIngestRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedConnectorLiveIngestRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedConnectorLiveIngestRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *PatchedConnectorLiveIngestRequest) GetType() OriginTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedConnectorLiveIngestRequest) GetTypeOk() (*OriginTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedConnectorLiveIngestRequest) SetType(v OriginTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PatchedConnectorLiveIngestRequest) GetAttributes() ConnectorLiveIngestAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PatchedConnectorLiveIngestRequest) GetAttributesOk() (*ConnectorLiveIngestAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PatchedConnectorLiveIngestRequest) SetAttributes(v ConnectorLiveIngestAttributesRequest)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PatchedConnectorLiveIngestRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


