# NetworkListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**NetworkList**](NetworkList.md) |  | 

## Methods

### NewNetworkListResponse

`func NewNetworkListResponse(data NetworkList, ) *NetworkListResponse`

NewNetworkListResponse instantiates a new NetworkListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNetworkListResponseWithDefaults

`func NewNetworkListResponseWithDefaults() *NetworkListResponse`

NewNetworkListResponseWithDefaults instantiates a new NetworkListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *NetworkListResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *NetworkListResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *NetworkListResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *NetworkListResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *NetworkListResponse) GetData() NetworkList`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *NetworkListResponse) GetDataOk() (*NetworkList, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *NetworkListResponse) SetData(v NetworkList)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


