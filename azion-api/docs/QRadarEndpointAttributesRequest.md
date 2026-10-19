# QRadarEndpointAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**QRadarEndpointAttributesTypeEnum**](QRadarEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**QRadarEndpointRequest**](QRadarEndpointRequest.md) |  | 

## Methods

### NewQRadarEndpointAttributesRequest

`func NewQRadarEndpointAttributesRequest(type_ QRadarEndpointAttributesTypeEnum, attributes QRadarEndpointRequest, ) *QRadarEndpointAttributesRequest`

NewQRadarEndpointAttributesRequest instantiates a new QRadarEndpointAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQRadarEndpointAttributesRequestWithDefaults

`func NewQRadarEndpointAttributesRequestWithDefaults() *QRadarEndpointAttributesRequest`

NewQRadarEndpointAttributesRequestWithDefaults instantiates a new QRadarEndpointAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *QRadarEndpointAttributesRequest) GetType() QRadarEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *QRadarEndpointAttributesRequest) GetTypeOk() (*QRadarEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *QRadarEndpointAttributesRequest) SetType(v QRadarEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *QRadarEndpointAttributesRequest) GetAttributes() QRadarEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *QRadarEndpointAttributesRequest) GetAttributesOk() (*QRadarEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *QRadarEndpointAttributesRequest) SetAttributes(v QRadarEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


