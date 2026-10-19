# PaginatedGrantList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]ResponseListGrant**](ResponseListGrant.md) |  | [optional] 

## Methods

### NewPaginatedGrantList

`func NewPaginatedGrantList() *PaginatedGrantList`

NewPaginatedGrantList instantiates a new PaginatedGrantList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedGrantListWithDefaults

`func NewPaginatedGrantListWithDefaults() *PaginatedGrantList`

NewPaginatedGrantListWithDefaults instantiates a new PaginatedGrantList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedGrantList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedGrantList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedGrantList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedGrantList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedGrantList) GetResults() []ResponseListGrant`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedGrantList) GetResultsOk() (*[]ResponseListGrant, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedGrantList) SetResults(v []ResponseListGrant)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedGrantList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


