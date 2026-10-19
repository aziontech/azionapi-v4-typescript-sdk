# DashboardResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**Dashboard**](Dashboard.md) |  | 

## Methods

### NewDashboardResponse

`func NewDashboardResponse(data Dashboard, ) *DashboardResponse`

NewDashboardResponse instantiates a new DashboardResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDashboardResponseWithDefaults

`func NewDashboardResponseWithDefaults() *DashboardResponse`

NewDashboardResponseWithDefaults instantiates a new DashboardResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *DashboardResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *DashboardResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *DashboardResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *DashboardResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *DashboardResponse) GetData() Dashboard`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DashboardResponse) GetDataOk() (*Dashboard, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DashboardResponse) SetData(v Dashboard)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


