# PageConnectorAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Connector** | **int64** |  | 
**Ttl** | Pointer to **int64** |  | [optional] [default to 0]
**Uri** | Pointer to **NullableString** |  | [optional] 
**CustomStatusCode** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewPageConnectorAttributesRequest

`func NewPageConnectorAttributesRequest(connector int64, ) *PageConnectorAttributesRequest`

NewPageConnectorAttributesRequest instantiates a new PageConnectorAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageConnectorAttributesRequestWithDefaults

`func NewPageConnectorAttributesRequestWithDefaults() *PageConnectorAttributesRequest`

NewPageConnectorAttributesRequestWithDefaults instantiates a new PageConnectorAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnector

`func (o *PageConnectorAttributesRequest) GetConnector() int64`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *PageConnectorAttributesRequest) GetConnectorOk() (*int64, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *PageConnectorAttributesRequest) SetConnector(v int64)`

SetConnector sets Connector field to given value.


### GetTtl

`func (o *PageConnectorAttributesRequest) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *PageConnectorAttributesRequest) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *PageConnectorAttributesRequest) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *PageConnectorAttributesRequest) HasTtl() bool`

HasTtl returns a boolean if a field has been set.

### GetUri

`func (o *PageConnectorAttributesRequest) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *PageConnectorAttributesRequest) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *PageConnectorAttributesRequest) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *PageConnectorAttributesRequest) HasUri() bool`

HasUri returns a boolean if a field has been set.

### SetUriNil

`func (o *PageConnectorAttributesRequest) SetUriNil(b bool)`

 SetUriNil sets the value for Uri to be an explicit nil

### UnsetUri
`func (o *PageConnectorAttributesRequest) UnsetUri()`

UnsetUri ensures that no value is present for Uri, not even an explicit nil
### GetCustomStatusCode

`func (o *PageConnectorAttributesRequest) GetCustomStatusCode() int64`

GetCustomStatusCode returns the CustomStatusCode field if non-nil, zero value otherwise.

### GetCustomStatusCodeOk

`func (o *PageConnectorAttributesRequest) GetCustomStatusCodeOk() (*int64, bool)`

GetCustomStatusCodeOk returns a tuple with the CustomStatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomStatusCode

`func (o *PageConnectorAttributesRequest) SetCustomStatusCode(v int64)`

SetCustomStatusCode sets CustomStatusCode field to given value.

### HasCustomStatusCode

`func (o *PageConnectorAttributesRequest) HasCustomStatusCode() bool`

HasCustomStatusCode returns a boolean if a field has been set.

### SetCustomStatusCodeNil

`func (o *PageConnectorAttributesRequest) SetCustomStatusCodeNil(b bool)`

 SetCustomStatusCodeNil sets the value for CustomStatusCode to be an explicit nil

### UnsetCustomStatusCode
`func (o *PageConnectorAttributesRequest) UnsetCustomStatusCode()`

UnsetCustomStatusCode ensures that no value is present for CustomStatusCode, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


