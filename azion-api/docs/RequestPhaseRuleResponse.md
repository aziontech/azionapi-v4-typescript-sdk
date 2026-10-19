# RequestPhaseRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**RequestPhaseRule**](RequestPhaseRule.md) |  | 

## Methods

### NewRequestPhaseRuleResponse

`func NewRequestPhaseRuleResponse(data RequestPhaseRule, ) *RequestPhaseRuleResponse`

NewRequestPhaseRuleResponse instantiates a new RequestPhaseRuleResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestPhaseRuleResponseWithDefaults

`func NewRequestPhaseRuleResponseWithDefaults() *RequestPhaseRuleResponse`

NewRequestPhaseRuleResponseWithDefaults instantiates a new RequestPhaseRuleResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *RequestPhaseRuleResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *RequestPhaseRuleResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *RequestPhaseRuleResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *RequestPhaseRuleResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *RequestPhaseRuleResponse) GetData() RequestPhaseRule`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RequestPhaseRuleResponse) GetDataOk() (*RequestPhaseRule, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RequestPhaseRuleResponse) SetData(v RequestPhaseRule)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


