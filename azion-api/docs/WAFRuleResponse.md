# WAFRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**WAFRule**](WAFRule.md) |  | 

## Methods

### NewWAFRuleResponse

`func NewWAFRuleResponse(data WAFRule, ) *WAFRuleResponse`

NewWAFRuleResponse instantiates a new WAFRuleResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWAFRuleResponseWithDefaults

`func NewWAFRuleResponseWithDefaults() *WAFRuleResponse`

NewWAFRuleResponseWithDefaults instantiates a new WAFRuleResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *WAFRuleResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *WAFRuleResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *WAFRuleResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *WAFRuleResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *WAFRuleResponse) GetData() WAFRule`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *WAFRuleResponse) GetDataOk() (*WAFRule, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *WAFRuleResponse) SetData(v WAFRule)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


