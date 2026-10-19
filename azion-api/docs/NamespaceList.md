# NamespaceList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]Namespace**](Namespace.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Methods

### NewNamespaceList

`func NewNamespaceList(results []Namespace, pagination Pagination, ) *NamespaceList`

NewNamespaceList instantiates a new NamespaceList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNamespaceListWithDefaults

`func NewNamespaceListWithDefaults() *NamespaceList`

NewNamespaceListWithDefaults instantiates a new NamespaceList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *NamespaceList) GetResults() []Namespace`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *NamespaceList) GetResultsOk() (*[]Namespace, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *NamespaceList) SetResults(v []Namespace)`

SetResults sets Results field to given value.


### GetPagination

`func (o *NamespaceList) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *NamespaceList) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *NamespaceList) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


