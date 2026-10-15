# ResponseLogin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**LoginResponse**](LoginResponse.md) |  | 
**State** | Pointer to **string** |  | [optional] [default to "executed"]

## Methods

### NewResponseLogin

`func NewResponseLogin(data LoginResponse, ) *ResponseLogin`

NewResponseLogin instantiates a new ResponseLogin object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseLoginWithDefaults

`func NewResponseLoginWithDefaults() *ResponseLogin`

NewResponseLoginWithDefaults instantiates a new ResponseLogin object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ResponseLogin) GetData() LoginResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseLogin) GetDataOk() (*LoginResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseLogin) SetData(v LoginResponse)`

SetData sets Data field to given value.


### GetState

`func (o *ResponseLogin) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseLogin) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseLogin) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ResponseLogin) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


