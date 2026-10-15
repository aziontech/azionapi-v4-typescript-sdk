# PatchedConnectorStorageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | [**OriginTypeEnum**](OriginTypeEnum.md) |  | 
**Attributes** | Pointer to [**ConnectorStorageAttributesRequest**](ConnectorStorageAttributesRequest.md) |  | [optional] 

## Methods

### NewPatchedConnectorStorageRequest

`func NewPatchedConnectorStorageRequest(type_ OriginTypeEnum, ) *PatchedConnectorStorageRequest`

NewPatchedConnectorStorageRequest instantiates a new PatchedConnectorStorageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedConnectorStorageRequestWithDefaults

`func NewPatchedConnectorStorageRequestWithDefaults() *PatchedConnectorStorageRequest`

NewPatchedConnectorStorageRequestWithDefaults instantiates a new PatchedConnectorStorageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedConnectorStorageRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedConnectorStorageRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedConnectorStorageRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedConnectorStorageRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedConnectorStorageRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedConnectorStorageRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedConnectorStorageRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedConnectorStorageRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *PatchedConnectorStorageRequest) GetType() OriginTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PatchedConnectorStorageRequest) GetTypeOk() (*OriginTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PatchedConnectorStorageRequest) SetType(v OriginTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *PatchedConnectorStorageRequest) GetAttributes() ConnectorStorageAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PatchedConnectorStorageRequest) GetAttributesOk() (*ConnectorStorageAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PatchedConnectorStorageRequest) SetAttributes(v ConnectorStorageAttributesRequest)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PatchedConnectorStorageRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


