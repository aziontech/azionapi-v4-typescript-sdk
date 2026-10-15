# ResponseFavorite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**StateEnum**](StateEnum.md) |  | 
**Data** | [**Favorite**](Favorite.md) |  | 

## Methods

### NewResponseFavorite

`func NewResponseFavorite(state StateEnum, data Favorite, ) *ResponseFavorite`

NewResponseFavorite instantiates a new ResponseFavorite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseFavoriteWithDefaults

`func NewResponseFavoriteWithDefaults() *ResponseFavorite`

NewResponseFavoriteWithDefaults instantiates a new ResponseFavorite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ResponseFavorite) GetState() StateEnum`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ResponseFavorite) GetStateOk() (*StateEnum, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ResponseFavorite) SetState(v StateEnum)`

SetState sets State field to given value.


### GetData

`func (o *ResponseFavorite) GetData() Favorite`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResponseFavorite) GetDataOk() (*Favorite, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResponseFavorite) SetData(v Favorite)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


