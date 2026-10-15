# PaginatedChatThreadList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]ChatThread**](ChatThread.md) |  | [optional] 

## Methods

### NewPaginatedChatThreadList

`func NewPaginatedChatThreadList() *PaginatedChatThreadList`

NewPaginatedChatThreadList instantiates a new PaginatedChatThreadList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedChatThreadListWithDefaults

`func NewPaginatedChatThreadListWithDefaults() *PaginatedChatThreadList`

NewPaginatedChatThreadListWithDefaults instantiates a new PaginatedChatThreadList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedChatThreadList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedChatThreadList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedChatThreadList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedChatThreadList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedChatThreadList) GetResults() []ChatThread`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedChatThreadList) GetResultsOk() (*[]ChatThread, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedChatThreadList) SetResults(v []ChatThread)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedChatThreadList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


