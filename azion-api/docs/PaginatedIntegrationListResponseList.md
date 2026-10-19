# PaginatedIntegrationListResponseList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int64** | Total number of items | [optional] 
**TotalPages** | Pointer to **int64** | Total number of pages | [optional] 
**Page** | Pointer to **int64** | Current page number | [optional] 
**PageSize** | Pointer to **int64** | Number of items per page | [optional] 
**Next** | Pointer to **NullableString** | URL to the next page of results | [optional] 
**Previous** | Pointer to **NullableString** | URL to the previous page of results | [optional] 
**Results** | Pointer to [**[]IntegrationListResponse**](IntegrationListResponse.md) |  | [optional] 

## Methods

### NewPaginatedIntegrationListResponseList

`func NewPaginatedIntegrationListResponseList() *PaginatedIntegrationListResponseList`

NewPaginatedIntegrationListResponseList instantiates a new PaginatedIntegrationListResponseList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedIntegrationListResponseListWithDefaults

`func NewPaginatedIntegrationListResponseListWithDefaults() *PaginatedIntegrationListResponseList`

NewPaginatedIntegrationListResponseListWithDefaults instantiates a new PaginatedIntegrationListResponseList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedIntegrationListResponseList) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedIntegrationListResponseList) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedIntegrationListResponseList) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *PaginatedIntegrationListResponseList) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetTotalPages

`func (o *PaginatedIntegrationListResponseList) GetTotalPages() int64`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *PaginatedIntegrationListResponseList) GetTotalPagesOk() (*int64, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *PaginatedIntegrationListResponseList) SetTotalPages(v int64)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *PaginatedIntegrationListResponseList) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPage

`func (o *PaginatedIntegrationListResponseList) GetPage() int64`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *PaginatedIntegrationListResponseList) GetPageOk() (*int64, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *PaginatedIntegrationListResponseList) SetPage(v int64)`

SetPage sets Page field to given value.

### HasPage

`func (o *PaginatedIntegrationListResponseList) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *PaginatedIntegrationListResponseList) GetPageSize() int64`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *PaginatedIntegrationListResponseList) GetPageSizeOk() (*int64, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *PaginatedIntegrationListResponseList) SetPageSize(v int64)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *PaginatedIntegrationListResponseList) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetNext

`func (o *PaginatedIntegrationListResponseList) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *PaginatedIntegrationListResponseList) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *PaginatedIntegrationListResponseList) SetNext(v string)`

SetNext sets Next field to given value.

### HasNext

`func (o *PaginatedIntegrationListResponseList) HasNext() bool`

HasNext returns a boolean if a field has been set.

### SetNextNil

`func (o *PaginatedIntegrationListResponseList) SetNextNil(b bool)`

 SetNextNil sets the value for Next to be an explicit nil

### UnsetNext
`func (o *PaginatedIntegrationListResponseList) UnsetNext()`

UnsetNext ensures that no value is present for Next, not even an explicit nil
### GetPrevious

`func (o *PaginatedIntegrationListResponseList) GetPrevious() string`

GetPrevious returns the Previous field if non-nil, zero value otherwise.

### GetPreviousOk

`func (o *PaginatedIntegrationListResponseList) GetPreviousOk() (*string, bool)`

GetPreviousOk returns a tuple with the Previous field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevious

`func (o *PaginatedIntegrationListResponseList) SetPrevious(v string)`

SetPrevious sets Previous field to given value.

### HasPrevious

`func (o *PaginatedIntegrationListResponseList) HasPrevious() bool`

HasPrevious returns a boolean if a field has been set.

### SetPreviousNil

`func (o *PaginatedIntegrationListResponseList) SetPreviousNil(b bool)`

 SetPreviousNil sets the value for Previous to be an explicit nil

### UnsetPrevious
`func (o *PaginatedIntegrationListResponseList) UnsetPrevious()`

UnsetPrevious ensures that no value is present for Previous, not even an explicit nil
### GetResults

`func (o *PaginatedIntegrationListResponseList) GetResults() []IntegrationListResponse`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedIntegrationListResponseList) GetResultsOk() (*[]IntegrationListResponse, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedIntegrationListResponseList) SetResults(v []IntegrationListResponse)`

SetResults sets Results field to given value.

### HasResults

`func (o *PaginatedIntegrationListResponseList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


