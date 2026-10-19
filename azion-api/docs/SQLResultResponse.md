# SQLResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**SQLResult**](SQLResult.md) |  | 

## Methods

### NewSQLResultResponse

`func NewSQLResultResponse(data SQLResult, ) *SQLResultResponse`

NewSQLResultResponse instantiates a new SQLResultResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSQLResultResponseWithDefaults

`func NewSQLResultResponseWithDefaults() *SQLResultResponse`

NewSQLResultResponseWithDefaults instantiates a new SQLResultResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *SQLResultResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SQLResultResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SQLResultResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SQLResultResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *SQLResultResponse) GetData() SQLResult`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SQLResultResponse) GetDataOk() (*SQLResult, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SQLResultResponse) SetData(v SQLResult)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


