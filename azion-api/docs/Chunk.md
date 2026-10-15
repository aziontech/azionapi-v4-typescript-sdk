# Chunk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkId** | **int64** |  | [readonly] 
**DocumentId** | **int64** |  | [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Embedding** | Pointer to **map[string]interface{}** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Content** | **string** |  | 

## Methods

### NewChunk

`func NewChunk(chunkId int64, documentId int64, content string, ) *Chunk`

NewChunk instantiates a new Chunk object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChunkWithDefaults

`func NewChunkWithDefaults() *Chunk`

NewChunkWithDefaults instantiates a new Chunk object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChunkId

`func (o *Chunk) GetChunkId() int64`

GetChunkId returns the ChunkId field if non-nil, zero value otherwise.

### GetChunkIdOk

`func (o *Chunk) GetChunkIdOk() (*int64, bool)`

GetChunkIdOk returns a tuple with the ChunkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkId

`func (o *Chunk) SetChunkId(v int64)`

SetChunkId sets ChunkId field to given value.


### GetDocumentId

`func (o *Chunk) GetDocumentId() int64`

GetDocumentId returns the DocumentId field if non-nil, zero value otherwise.

### GetDocumentIdOk

`func (o *Chunk) GetDocumentIdOk() (*int64, bool)`

GetDocumentIdOk returns a tuple with the DocumentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentId

`func (o *Chunk) SetDocumentId(v int64)`

SetDocumentId sets DocumentId field to given value.


### GetName

`func (o *Chunk) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Chunk) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Chunk) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Chunk) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Chunk) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Chunk) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Chunk) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Chunk) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEmbedding

`func (o *Chunk) GetEmbedding() map[string]interface{}`

GetEmbedding returns the Embedding field if non-nil, zero value otherwise.

### GetEmbeddingOk

`func (o *Chunk) GetEmbeddingOk() (*map[string]interface{}, bool)`

GetEmbeddingOk returns a tuple with the Embedding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedding

`func (o *Chunk) SetEmbedding(v map[string]interface{})`

SetEmbedding sets Embedding field to given value.

### HasEmbedding

`func (o *Chunk) HasEmbedding() bool`

HasEmbedding returns a boolean if a field has been set.

### GetMetadata

`func (o *Chunk) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Chunk) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Chunk) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Chunk) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetContent

`func (o *Chunk) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *Chunk) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *Chunk) SetContent(v string)`

SetContent sets Content field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


