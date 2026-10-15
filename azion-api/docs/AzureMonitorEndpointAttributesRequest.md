# AzureMonitorEndpointAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**AzureMonitorEndpointAttributesTypeEnum**](AzureMonitorEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**AzureMonitorEndpointRequest**](AzureMonitorEndpointRequest.md) |  | 

## Methods

### NewAzureMonitorEndpointAttributesRequest

`func NewAzureMonitorEndpointAttributesRequest(type_ AzureMonitorEndpointAttributesTypeEnum, attributes AzureMonitorEndpointRequest, ) *AzureMonitorEndpointAttributesRequest`

NewAzureMonitorEndpointAttributesRequest instantiates a new AzureMonitorEndpointAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureMonitorEndpointAttributesRequestWithDefaults

`func NewAzureMonitorEndpointAttributesRequestWithDefaults() *AzureMonitorEndpointAttributesRequest`

NewAzureMonitorEndpointAttributesRequestWithDefaults instantiates a new AzureMonitorEndpointAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AzureMonitorEndpointAttributesRequest) GetType() AzureMonitorEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AzureMonitorEndpointAttributesRequest) GetTypeOk() (*AzureMonitorEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AzureMonitorEndpointAttributesRequest) SetType(v AzureMonitorEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *AzureMonitorEndpointAttributesRequest) GetAttributes() AzureMonitorEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AzureMonitorEndpointAttributesRequest) GetAttributesOk() (*AzureMonitorEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AzureMonitorEndpointAttributesRequest) SetAttributes(v AzureMonitorEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


