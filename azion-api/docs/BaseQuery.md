# BaseQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Dataset** | **string** |  | 
**Filters** | Pointer to **map[string]interface{}** |  | [optional] 
**GroupBy** | Pointer to **[]string** |  | [optional] 
**Limit** | **int64** |  | 
**AggregatedFields** | Pointer to [**[]AggregatedField**](AggregatedField.md) |  | [optional] 
**CalculatedFields** | Pointer to **[]string** |  | [optional] 
**OrderDirection** | **string** | * &#x60;asc&#x60; - Ascending order, sets the order from smallest to largest. * &#x60;desc&#x60; - Descending order, sets the order from largest to smallest. | 
**TopX** | Pointer to **bool** |  | [optional] 
**MaxYAxis** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewBaseQuery

`func NewBaseQuery(id int64, dataset string, limit int64, orderDirection string, ) *BaseQuery`

NewBaseQuery instantiates a new BaseQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseQueryWithDefaults

`func NewBaseQueryWithDefaults() *BaseQuery`

NewBaseQueryWithDefaults instantiates a new BaseQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseQuery) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseQuery) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseQuery) SetId(v int64)`

SetId sets Id field to given value.


### GetDataset

`func (o *BaseQuery) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *BaseQuery) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *BaseQuery) SetDataset(v string)`

SetDataset sets Dataset field to given value.


### GetFilters

`func (o *BaseQuery) GetFilters() map[string]interface{}`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *BaseQuery) GetFiltersOk() (*map[string]interface{}, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *BaseQuery) SetFilters(v map[string]interface{})`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *BaseQuery) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetGroupBy

`func (o *BaseQuery) GetGroupBy() []string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *BaseQuery) GetGroupByOk() (*[]string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *BaseQuery) SetGroupBy(v []string)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *BaseQuery) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.

### GetLimit

`func (o *BaseQuery) GetLimit() int64`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *BaseQuery) GetLimitOk() (*int64, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *BaseQuery) SetLimit(v int64)`

SetLimit sets Limit field to given value.


### GetAggregatedFields

`func (o *BaseQuery) GetAggregatedFields() []AggregatedField`

GetAggregatedFields returns the AggregatedFields field if non-nil, zero value otherwise.

### GetAggregatedFieldsOk

`func (o *BaseQuery) GetAggregatedFieldsOk() (*[]AggregatedField, bool)`

GetAggregatedFieldsOk returns a tuple with the AggregatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregatedFields

`func (o *BaseQuery) SetAggregatedFields(v []AggregatedField)`

SetAggregatedFields sets AggregatedFields field to given value.

### HasAggregatedFields

`func (o *BaseQuery) HasAggregatedFields() bool`

HasAggregatedFields returns a boolean if a field has been set.

### GetCalculatedFields

`func (o *BaseQuery) GetCalculatedFields() []string`

GetCalculatedFields returns the CalculatedFields field if non-nil, zero value otherwise.

### GetCalculatedFieldsOk

`func (o *BaseQuery) GetCalculatedFieldsOk() (*[]string, bool)`

GetCalculatedFieldsOk returns a tuple with the CalculatedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedFields

`func (o *BaseQuery) SetCalculatedFields(v []string)`

SetCalculatedFields sets CalculatedFields field to given value.

### HasCalculatedFields

`func (o *BaseQuery) HasCalculatedFields() bool`

HasCalculatedFields returns a boolean if a field has been set.

### GetOrderDirection

`func (o *BaseQuery) GetOrderDirection() string`

GetOrderDirection returns the OrderDirection field if non-nil, zero value otherwise.

### GetOrderDirectionOk

`func (o *BaseQuery) GetOrderDirectionOk() (*string, bool)`

GetOrderDirectionOk returns a tuple with the OrderDirection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDirection

`func (o *BaseQuery) SetOrderDirection(v string)`

SetOrderDirection sets OrderDirection field to given value.


### GetTopX

`func (o *BaseQuery) GetTopX() bool`

GetTopX returns the TopX field if non-nil, zero value otherwise.

### GetTopXOk

`func (o *BaseQuery) GetTopXOk() (*bool, bool)`

GetTopXOk returns a tuple with the TopX field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopX

`func (o *BaseQuery) SetTopX(v bool)`

SetTopX sets TopX field to given value.

### HasTopX

`func (o *BaseQuery) HasTopX() bool`

HasTopX returns a boolean if a field has been set.

### GetMaxYAxis

`func (o *BaseQuery) GetMaxYAxis() int64`

GetMaxYAxis returns the MaxYAxis field if non-nil, zero value otherwise.

### GetMaxYAxisOk

`func (o *BaseQuery) GetMaxYAxisOk() (*int64, bool)`

GetMaxYAxisOk returns a tuple with the MaxYAxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxYAxis

`func (o *BaseQuery) SetMaxYAxis(v int64)`

SetMaxYAxis sets MaxYAxis field to given value.

### HasMaxYAxis

`func (o *BaseQuery) HasMaxYAxis() bool`

HasMaxYAxis returns a boolean if a field has been set.

### SetMaxYAxisNil

`func (o *BaseQuery) SetMaxYAxisNil(b bool)`

 SetMaxYAxisNil sets the value for MaxYAxis to be an explicit nil

### UnsetMaxYAxis
`func (o *BaseQuery) UnsetMaxYAxis()`

UnsetMaxYAxis ensures that no value is present for MaxYAxis, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


