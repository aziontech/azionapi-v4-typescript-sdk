# BigQueryEndpointAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**BigQueryEndpointAttributesTypeEnum**](BigQueryEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**BigQueryEndpointRequest**](BigQueryEndpointRequest.md) |  | 

## Methods

### NewBigQueryEndpointAttributesRequest

`func NewBigQueryEndpointAttributesRequest(type_ BigQueryEndpointAttributesTypeEnum, attributes BigQueryEndpointRequest, ) *BigQueryEndpointAttributesRequest`

NewBigQueryEndpointAttributesRequest instantiates a new BigQueryEndpointAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBigQueryEndpointAttributesRequestWithDefaults

`func NewBigQueryEndpointAttributesRequestWithDefaults() *BigQueryEndpointAttributesRequest`

NewBigQueryEndpointAttributesRequestWithDefaults instantiates a new BigQueryEndpointAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BigQueryEndpointAttributesRequest) GetType() BigQueryEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BigQueryEndpointAttributesRequest) GetTypeOk() (*BigQueryEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BigQueryEndpointAttributesRequest) SetType(v BigQueryEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *BigQueryEndpointAttributesRequest) GetAttributes() BigQueryEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *BigQueryEndpointAttributesRequest) GetAttributesOk() (*BigQueryEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *BigQueryEndpointAttributesRequest) SetAttributes(v BigQueryEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


