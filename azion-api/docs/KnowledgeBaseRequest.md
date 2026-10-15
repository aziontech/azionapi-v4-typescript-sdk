# KnowledgeBaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**EmbeddingModel** | Pointer to [**EmbeddingModelEnum**](EmbeddingModelEnum.md) |  | [optional] [default to TEXT_EMBEDDING_3_SMALL]

## Methods

### NewKnowledgeBaseRequest

`func NewKnowledgeBaseRequest(name string, ) *KnowledgeBaseRequest`

NewKnowledgeBaseRequest instantiates a new KnowledgeBaseRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKnowledgeBaseRequestWithDefaults

`func NewKnowledgeBaseRequestWithDefaults() *KnowledgeBaseRequest`

NewKnowledgeBaseRequestWithDefaults instantiates a new KnowledgeBaseRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *KnowledgeBaseRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *KnowledgeBaseRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *KnowledgeBaseRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *KnowledgeBaseRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *KnowledgeBaseRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *KnowledgeBaseRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *KnowledgeBaseRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEmbeddingModel

`func (o *KnowledgeBaseRequest) GetEmbeddingModel() EmbeddingModelEnum`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *KnowledgeBaseRequest) GetEmbeddingModelOk() (*EmbeddingModelEnum, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *KnowledgeBaseRequest) SetEmbeddingModel(v EmbeddingModelEnum)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *KnowledgeBaseRequest) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


