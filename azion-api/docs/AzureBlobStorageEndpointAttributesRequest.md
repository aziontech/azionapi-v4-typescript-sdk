# AzureBlobStorageEndpointAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**AzureBlobStorageEndpointAttributesTypeEnum**](AzureBlobStorageEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**AzureBlobStorageEndpointRequest**](AzureBlobStorageEndpointRequest.md) |  | 

## Methods

### NewAzureBlobStorageEndpointAttributesRequest

`func NewAzureBlobStorageEndpointAttributesRequest(type_ AzureBlobStorageEndpointAttributesTypeEnum, attributes AzureBlobStorageEndpointRequest, ) *AzureBlobStorageEndpointAttributesRequest`

NewAzureBlobStorageEndpointAttributesRequest instantiates a new AzureBlobStorageEndpointAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobStorageEndpointAttributesRequestWithDefaults

`func NewAzureBlobStorageEndpointAttributesRequestWithDefaults() *AzureBlobStorageEndpointAttributesRequest`

NewAzureBlobStorageEndpointAttributesRequestWithDefaults instantiates a new AzureBlobStorageEndpointAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AzureBlobStorageEndpointAttributesRequest) GetType() AzureBlobStorageEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AzureBlobStorageEndpointAttributesRequest) GetTypeOk() (*AzureBlobStorageEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AzureBlobStorageEndpointAttributesRequest) SetType(v AzureBlobStorageEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *AzureBlobStorageEndpointAttributesRequest) GetAttributes() AzureBlobStorageEndpointRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AzureBlobStorageEndpointAttributesRequest) GetAttributesOk() (*AzureBlobStorageEndpointRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AzureBlobStorageEndpointAttributesRequest) SetAttributes(v AzureBlobStorageEndpointRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


