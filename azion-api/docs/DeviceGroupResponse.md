# DeviceGroupResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**DeviceGroup**](DeviceGroup.md) |  | 

## Methods

### NewDeviceGroupResponse

`func NewDeviceGroupResponse(data DeviceGroup, ) *DeviceGroupResponse`

NewDeviceGroupResponse instantiates a new DeviceGroupResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceGroupResponseWithDefaults

`func NewDeviceGroupResponseWithDefaults() *DeviceGroupResponse`

NewDeviceGroupResponseWithDefaults instantiates a new DeviceGroupResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *DeviceGroupResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *DeviceGroupResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *DeviceGroupResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *DeviceGroupResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *DeviceGroupResponse) GetData() DeviceGroup`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DeviceGroupResponse) GetDataOk() (*DeviceGroup, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DeviceGroupResponse) SetData(v DeviceGroup)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


