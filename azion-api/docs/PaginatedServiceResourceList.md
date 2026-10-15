# PaginatedServiceResourceList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** |  | [optional] 
**Results** | Pointer to [**[]ServiceResource**](ServiceResource.md) |  | [optional] 

## Methods

### NewPaginatedServiceResourceList

`func NewPaginatedServiceResourceList() *PaginatedServiceResourceList`

NewPaginatedServiceResourceList instantiates a new PaginatedServiceResourceList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedServiceResourceListWithDefaults

`func NewPaginatedServiceResourceListWithDefaults() *PaginatedServiceResourceList`

NewPaginatedServiceResourceListWithDefaults instantiates a new PaginatedServiceResourceList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedServiceResourceList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedServiceResourceList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedServiceResourceList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedServiceResourceList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetResults

`func (o *PaginatedServiceResourceList) GetResults() []ServiceResource`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedServiceResourceList) GetResultsOk() (*[]ServiceResource, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedServiceResourceList) SetResults(v []ServiceResource)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedServiceResourceList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


