# PaginatedKnowledgeBaseList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]KnowledgeBase**](KnowledgeBase.md) |  | [optional] 

## Methods

### NewPaginatedKnowledgeBaseList

`func NewPaginatedKnowledgeBaseList() *PaginatedKnowledgeBaseList`

NewPaginatedKnowledgeBaseList instantiates a new PaginatedKnowledgeBaseList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedKnowledgeBaseListWithDefaults

`func NewPaginatedKnowledgeBaseListWithDefaults() *PaginatedKnowledgeBaseList`

NewPaginatedKnowledgeBaseListWithDefaults instantiates a new PaginatedKnowledgeBaseList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedKnowledgeBaseList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedKnowledgeBaseList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedKnowledgeBaseList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedKnowledgeBaseList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedKnowledgeBaseList) GetResults() []KnowledgeBase`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedKnowledgeBaseList) GetResultsOk() (*[]KnowledgeBase, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedKnowledgeBaseList) SetResults(v []KnowledgeBase)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedKnowledgeBaseList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


