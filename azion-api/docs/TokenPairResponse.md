# TokenPairResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] [default to "executed"]
**Data** | [**TokenPair**](TokenPair.md) |  | 

## Methods

### NewTokenPairResponse

`func NewTokenPairResponse(data TokenPair, ) *TokenPairResponse`

NewTokenPairResponse instantiates a new TokenPairResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenPairResponseWithDefaults

`func NewTokenPairResponseWithDefaults() *TokenPairResponse`

NewTokenPairResponseWithDefaults instantiates a new TokenPairResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *TokenPairResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *TokenPairResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *TokenPairResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *TokenPairResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetData

`func (o *TokenPairResponse) GetData() TokenPair`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *TokenPairResponse) GetDataOk() (*TokenPair, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *TokenPairResponse) SetData(v TokenPair)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


