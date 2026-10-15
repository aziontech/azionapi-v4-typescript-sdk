# PaginatedChunkList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]Chunk**](Chunk.md) |  | [optional] 

## Methods

### NewPaginatedChunkList

`func NewPaginatedChunkList() *PaginatedChunkList`

NewPaginatedChunkList instantiates a new PaginatedChunkList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedChunkListWithDefaults

`func NewPaginatedChunkListWithDefaults() *PaginatedChunkList`

NewPaginatedChunkListWithDefaults instantiates a new PaginatedChunkList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedChunkList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedChunkList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedChunkList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedChunkList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedChunkList) GetResults() []Chunk`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedChunkList) GetResultsOk() (*[]Chunk, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedChunkList) SetResults(v []Chunk)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedChunkList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


