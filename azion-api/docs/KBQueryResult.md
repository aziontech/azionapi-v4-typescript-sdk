# KBQueryResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkId** | **string** |  | 
**Title** | **string** |  | 
**Content** | **string** |  | 
**Source** | **string** |  | 
**Similarity** | Pointer to **NullableFloat64** |  | [optional] 
**SearchType** | **string** |  | 

## Methods

### NewKBQueryResult

`func NewKBQueryResult(chunkId string, title string, content string, source string, searchType string, ) *KBQueryResult`

NewKBQueryResult instantiates a new KBQueryResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKBQueryResultWithDefaults

`func NewKBQueryResultWithDefaults() *KBQueryResult`

NewKBQueryResultWithDefaults instantiates a new KBQueryResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChunkId

`func (o *KBQueryResult) GetChunkId() string`

GetChunkId returns the ChunkId field if non-nil, zero value otherwise.

### GetChunkIdOk

`func (o *KBQueryResult) GetChunkIdOk() (*string, bool)`

GetChunkIdOk returns a tuple with the ChunkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkId

`func (o *KBQueryResult) SetChunkId(v string)`

SetChunkId sets ChunkId field to given value.


### GetTitle

`func (o *KBQueryResult) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *KBQueryResult) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *KBQueryResult) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetContent

`func (o *KBQueryResult) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *KBQueryResult) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *KBQueryResult) SetContent(v string)`

SetContent sets Content field to given value.


### GetSource

`func (o *KBQueryResult) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *KBQueryResult) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *KBQueryResult) SetSource(v string)`

SetSource sets Source field to given value.


### GetSimilarity

`func (o *KBQueryResult) GetSimilarity() float64`

GetSimilarity returns the Similarity field if non-nil, zero value otherwise.

### GetSimilarityOk

`func (o *KBQueryResult) GetSimilarityOk() (*float64, bool)`

GetSimilarityOk returns a tuple with the Similarity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimilarity

`func (o *KBQueryResult) SetSimilarity(v float64)`

SetSimilarity sets Similarity field to given value.

### HasSimilarity

`func (o *KBQueryResult) HasSimilarity() bool`

HasSimilarity returns a boolean if a field has been set.

### SetSimilarityNil

`func (o *KBQueryResult) SetSimilarityNil(b bool)`

 SetSimilarityNil sets the value for Similarity to be an explicit nil

### UnsetSimilarity
`func (o *KBQueryResult) UnsetSimilarity()`

UnsetSimilarity ensures that no value is present for Similarity, not even an explicit nil
### GetSearchType

`func (o *KBQueryResult) GetSearchType() string`

GetSearchType returns the SearchType field if non-nil, zero value otherwise.

### GetSearchTypeOk

`func (o *KBQueryResult) GetSearchTypeOk() (*string, bool)`

GetSearchTypeOk returns a tuple with the SearchType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchType

`func (o *KBQueryResult) SetSearchType(v string)`

SetSearchType sets SearchType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


