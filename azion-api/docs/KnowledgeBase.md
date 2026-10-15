# KnowledgeBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KbId** | **int64** |  | [readonly] 
**AccountId** | **NullableInt64** |  | [readonly] 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**EmbeddingModel** | Pointer to [**EmbeddingModelEnum**](EmbeddingModelEnum.md) |  | [optional] [default to TEXT_EMBEDDING_3_SMALL]
**SqlId** | **string** |  | [readonly] 
**SqlDbName** | **string** |  | [readonly] 
**StorageName** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 

## Methods

### NewKnowledgeBase

`func NewKnowledgeBase(kbId int64, accountId NullableInt64, name string, sqlId string, sqlDbName string, storageName string, lastModified time.Time, lastEditor string, ) *KnowledgeBase`

NewKnowledgeBase instantiates a new KnowledgeBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKnowledgeBaseWithDefaults

`func NewKnowledgeBaseWithDefaults() *KnowledgeBase`

NewKnowledgeBaseWithDefaults instantiates a new KnowledgeBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKbId

`func (o *KnowledgeBase) GetKbId() int64`

GetKbId returns the KbId field if non-nil, zero value otherwise.

### GetKbIdOk

`func (o *KnowledgeBase) GetKbIdOk() (*int64, bool)`

GetKbIdOk returns a tuple with the KbId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKbId

`func (o *KnowledgeBase) SetKbId(v int64)`

SetKbId sets KbId field to given value.


### GetAccountId

`func (o *KnowledgeBase) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *KnowledgeBase) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *KnowledgeBase) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### SetAccountIdNil

`func (o *KnowledgeBase) SetAccountIdNil(b bool)`

 SetAccountIdNil sets the value for AccountId to be an explicit nil

### UnsetAccountId
`func (o *KnowledgeBase) UnsetAccountId()`

UnsetAccountId ensures that no value is present for AccountId, not even an explicit nil
### GetName

`func (o *KnowledgeBase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *KnowledgeBase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *KnowledgeBase) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *KnowledgeBase) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *KnowledgeBase) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *KnowledgeBase) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *KnowledgeBase) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEmbeddingModel

`func (o *KnowledgeBase) GetEmbeddingModel() EmbeddingModelEnum`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *KnowledgeBase) GetEmbeddingModelOk() (*EmbeddingModelEnum, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *KnowledgeBase) SetEmbeddingModel(v EmbeddingModelEnum)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *KnowledgeBase) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### GetSqlId

`func (o *KnowledgeBase) GetSqlId() string`

GetSqlId returns the SqlId field if non-nil, zero value otherwise.

### GetSqlIdOk

`func (o *KnowledgeBase) GetSqlIdOk() (*string, bool)`

GetSqlIdOk returns a tuple with the SqlId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlId

`func (o *KnowledgeBase) SetSqlId(v string)`

SetSqlId sets SqlId field to given value.


### GetSqlDbName

`func (o *KnowledgeBase) GetSqlDbName() string`

GetSqlDbName returns the SqlDbName field if non-nil, zero value otherwise.

### GetSqlDbNameOk

`func (o *KnowledgeBase) GetSqlDbNameOk() (*string, bool)`

GetSqlDbNameOk returns a tuple with the SqlDbName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlDbName

`func (o *KnowledgeBase) SetSqlDbName(v string)`

SetSqlDbName sets SqlDbName field to given value.


### GetStorageName

`func (o *KnowledgeBase) GetStorageName() string`

GetStorageName returns the StorageName field if non-nil, zero value otherwise.

### GetStorageNameOk

`func (o *KnowledgeBase) GetStorageNameOk() (*string, bool)`

GetStorageNameOk returns a tuple with the StorageName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageName

`func (o *KnowledgeBase) SetStorageName(v string)`

SetStorageName sets StorageName field to given value.


### GetLastModified

`func (o *KnowledgeBase) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *KnowledgeBase) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *KnowledgeBase) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetLastEditor

`func (o *KnowledgeBase) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *KnowledgeBase) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *KnowledgeBase) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


