# DocumentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**SourceUri** | Pointer to **string** |  | [optional] 
**ChunkStrategy** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewDocumentRequest

`func NewDocumentRequest() *DocumentRequest`

NewDocumentRequest instantiates a new DocumentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDocumentRequestWithDefaults

`func NewDocumentRequestWithDefaults() *DocumentRequest`

NewDocumentRequestWithDefaults instantiates a new DocumentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DocumentRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DocumentRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DocumentRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DocumentRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *DocumentRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DocumentRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DocumentRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DocumentRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *DocumentRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DocumentRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DocumentRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DocumentRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceUri

`func (o *DocumentRequest) GetSourceUri() string`

GetSourceUri returns the SourceUri field if non-nil, zero value otherwise.

### GetSourceUriOk

`func (o *DocumentRequest) GetSourceUriOk() (*string, bool)`

GetSourceUriOk returns a tuple with the SourceUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceUri

`func (o *DocumentRequest) SetSourceUri(v string)`

SetSourceUri sets SourceUri field to given value.

### HasSourceUri

`func (o *DocumentRequest) HasSourceUri() bool`

HasSourceUri returns a boolean if a field has been set.

### GetChunkStrategy

`func (o *DocumentRequest) GetChunkStrategy() map[string]interface{}`

GetChunkStrategy returns the ChunkStrategy field if non-nil, zero value otherwise.

### GetChunkStrategyOk

`func (o *DocumentRequest) GetChunkStrategyOk() (*map[string]interface{}, bool)`

GetChunkStrategyOk returns a tuple with the ChunkStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkStrategy

`func (o *DocumentRequest) SetChunkStrategy(v map[string]interface{})`

SetChunkStrategy sets ChunkStrategy field to given value.

### HasChunkStrategy

`func (o *DocumentRequest) HasChunkStrategy() bool`

HasChunkStrategy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


