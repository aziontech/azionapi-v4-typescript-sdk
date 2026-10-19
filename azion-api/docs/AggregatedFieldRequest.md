# AggregatedFieldRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Aggregation** | **string** |  | 
**Variable** | **string** |  | 

## Methods

### NewAggregatedFieldRequest

`func NewAggregatedFieldRequest(aggregation string, variable string, ) *AggregatedFieldRequest`

NewAggregatedFieldRequest instantiates a new AggregatedFieldRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregatedFieldRequestWithDefaults

`func NewAggregatedFieldRequestWithDefaults() *AggregatedFieldRequest`

NewAggregatedFieldRequestWithDefaults instantiates a new AggregatedFieldRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAggregation

`func (o *AggregatedFieldRequest) GetAggregation() string`

GetAggregation returns the Aggregation field if non-nil, zero value otherwise.

### GetAggregationOk

`func (o *AggregatedFieldRequest) GetAggregationOk() (*string, bool)`

GetAggregationOk returns a tuple with the Aggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregation

`func (o *AggregatedFieldRequest) SetAggregation(v string)`

SetAggregation sets Aggregation field to given value.


### GetVariable

`func (o *AggregatedFieldRequest) GetVariable() string`

GetVariable returns the Variable field if non-nil, zero value otherwise.

### GetVariableOk

`func (o *AggregatedFieldRequest) GetVariableOk() (*string, bool)`

GetVariableOk returns a tuple with the Variable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariable

`func (o *AggregatedFieldRequest) SetVariable(v string)`

SetVariable sets Variable field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


