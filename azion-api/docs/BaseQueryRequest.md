# BaseQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Dataset** | **string** |  | 
**Filters** | Pointer to **map[string]interface{}** |  | [optional] 
**GroupBy** | Pointer to **[]string** |  | [optional] 
**Limit** | **int64** |  | 
**AggregatedFields** | Pointer to [**[]AggregatedFieldRequest**](AggregatedFieldRequest.md) |  | [optional] 
**CalculatedFields** | Pointer to **[]string** |  | [optional] 
**OrderDirection** | **string** | * &#x60;asc&#x60; - Ascending order, sets the order from smallest to largest. * &#x60;desc&#x60; - Descending order, sets the order from largest to smallest. | 
**TopX** | Pointer to **bool** |  | [optional] 
**MaxYAxis** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewBaseQueryRequest

`func NewBaseQueryRequest(dataset string, limit int64, orderDirection string, ) *BaseQueryRequest`

NewBaseQueryRequest instantiates a new BaseQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseQueryRequestWithDefaults

`func NewBaseQueryRequestWithDefaults() *BaseQueryRequest`

NewBaseQueryRequestWithDefaults instantiates a new BaseQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataset

`func (o *BaseQueryRequest) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *BaseQueryRequest) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *BaseQueryRequest) SetDataset(v string)`

SetDataset sets Dataset field to given value.


### GetFilters

`func (o *BaseQueryRequest) GetFilters() map[string]interface{}`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *BaseQueryRequest) GetFiltersOk() (*map[string]interface{}, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *BaseQueryRequest) SetFilters(v map[string]interface{})`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *BaseQueryRequest) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetGroupBy

`func (o *BaseQueryRequest) GetGroupBy() []string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *BaseQueryRequest) GetGroupByOk() (*[]string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *BaseQueryRequest) SetGroupBy(v []string)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *BaseQueryRequest) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.

### GetLimit

`func (o *BaseQueryRequest) GetLimit() int64`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BaseQueryRequest) GetLimitOk() (*int64, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BaseQueryRequest) SetLimit(v int64)`

SetLimit sets Limit field to given value.


### GetAggregatedFields

`func (o *BaseQueryRequest) GetAggregatedFields() []AggregatedFieldRequest`

GetAggregatedFields returns the AggregatedFields field if non-nil, zero value otherwise.

### GetAggregatedFieldsOk

`func (o *BaseQueryRequest) GetAggregatedFieldsOk() (*[]AggregatedFieldRequest, bool)`

GetAggregatedFieldsOk returns a tuple with the AggregatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregatedFields

`func (o *BaseQueryRequest) SetAggregatedFields(v []AggregatedFieldRequest)`

SetAggregatedFields sets AggregatedFields field to given value.

### HasAggregatedFields

`func (o *BaseQueryRequest) HasAggregatedFields() bool`

HasAggregatedFields returns a boolean if a field has been set.

### GetCalculatedFields

`func (o *BaseQueryRequest) GetCalculatedFields() []string`

GetCalculatedFields returns the CalculatedFields field if non-nil, zero value otherwise.

### GetCalculatedFieldsOk

`func (o *BaseQueryRequest) GetCalculatedFieldsOk() (*[]string, bool)`

GetCalculatedFieldsOk returns a tuple with the CalculatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedFields

`func (o *BaseQueryRequest) SetCalculatedFields(v []string)`

SetCalculatedFields sets CalculatedFields field to given value.

### HasCalculatedFields

`func (o *BaseQueryRequest) HasCalculatedFields() bool`

HasCalculatedFields returns a boolean if a field has been set.

### GetOrderDirection

`func (o *BaseQueryRequest) GetOrderDirection() string`

GetOrderDirection returns the OrderDirection field if non-nil, zero value otherwise.

### GetOrderDirectionOk

`func (o *BaseQueryRequest) GetOrderDirectionOk() (*string, bool)`

GetOrderDirectionOk returns a tuple with the OrderDirection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDirection

`func (o *BaseQueryRequest) SetOrderDirection(v string)`

SetOrderDirection sets OrderDirection field to given value.


### GetTopX

`func (o *BaseQueryRequest) GetTopX() bool`

GetTopX returns the TopX field if non-nil, zero value otherwise.

### GetTopXOk

`func (o *BaseQueryRequest) GetTopXOk() (*bool, bool)`

GetTopXOk returns a tuple with the TopX field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopX

`func (o *BaseQueryRequest) SetTopX(v bool)`

SetTopX sets TopX field to given value.

### HasTopX

`func (o *BaseQueryRequest) HasTopX() bool`

HasTopX returns a boolean if a field has been set.

### GetMaxYAxis

`func (o *BaseQueryRequest) GetMaxYAxis() int64`

GetMaxYAxis returns the MaxYAxis field if non-nil, zero value otherwise.

### GetMaxYAxisOk

`func (o *BaseQueryRequest) GetMaxYAxisOk() (*int64, bool)`

GetMaxYAxisOk returns a tuple with the MaxYAxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxYAxis

`func (o *BaseQueryRequest) SetMaxYAxis(v int64)`

SetMaxYAxis sets MaxYAxis field to given value.

### HasMaxYAxis

`func (o *BaseQueryRequest) HasMaxYAxis() bool`

HasMaxYAxis returns a boolean if a field has been set.

### SetMaxYAxisNil

`func (o *BaseQueryRequest) SetMaxYAxisNil(b bool)`

 SetMaxYAxisNil sets the value for MaxYAxis to be an explicit nil

### UnsetMaxYAxis
`func (o *BaseQueryRequest) UnsetMaxYAxis()`

UnsetMaxYAxis ensures that no value is present for MaxYAxis, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


