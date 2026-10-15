# ProtocolsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Http** | Pointer to [**HttpProtocolRequest**](HttpProtocolRequest.md) |  | [optional] 

## Methods

### NewProtocolsRequest

`func NewProtocolsRequest() *ProtocolsRequest`

NewProtocolsRequest instantiates a new ProtocolsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProtocolsRequestWithDefaults

`func NewProtocolsRequestWithDefaults() *ProtocolsRequest`

NewProtocolsRequestWithDefaults instantiates a new ProtocolsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHttp

`func (o *ProtocolsRequest) GetHttp() HttpProtocolRequest`

GetHttp returns the Http field if non-nil, zero value otherwise.

### GetHttpOk

`func (o *ProtocolsRequest) GetHttpOk() (*HttpProtocolRequest, bool)`

GetHttpOk returns a tuple with the Http field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttp

`func (o *ProtocolsRequest) SetHttp(v HttpProtocolRequest)`

SetHttp sets Http field to given value.

### HasHttp

`func (o *ProtocolsRequest) HasHttp() bool`

HasHttp returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


