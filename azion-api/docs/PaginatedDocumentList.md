# PaginatedDocumentList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]Document**](Document.md) |  | [optional] 

## Methods

### NewPaginatedDocumentList

`func NewPaginatedDocumentList() *PaginatedDocumentList`

NewPaginatedDocumentList instantiates a new PaginatedDocumentList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedDocumentListWithDefaults

`func NewPaginatedDocumentListWithDefaults() *PaginatedDocumentList`

NewPaginatedDocumentListWithDefaults instantiates a new PaginatedDocumentList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedDocumentList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedDocumentList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedDocumentList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedDocumentList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedDocumentList) GetResults() []Document`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedDocumentList) GetResultsOk() (*[]Document, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedDocumentList) SetResults(v []Document)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedDocumentList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


