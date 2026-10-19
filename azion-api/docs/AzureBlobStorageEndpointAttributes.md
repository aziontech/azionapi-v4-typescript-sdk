# AzureBlobStorageEndpointAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**AzureBlobStorageEndpointAttributesTypeEnum**](AzureBlobStorageEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**AzureBlobStorageEndpoint**](AzureBlobStorageEndpoint.md) |  | 

## Methods

### NewAzureBlobStorageEndpointAttributes

`func NewAzureBlobStorageEndpointAttributes(type_ AzureBlobStorageEndpointAttributesTypeEnum, attributes AzureBlobStorageEndpoint, ) *AzureBlobStorageEndpointAttributes`

NewAzureBlobStorageEndpointAttributes instantiates a new AzureBlobStorageEndpointAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobStorageEndpointAttributesWithDefaults

`func NewAzureBlobStorageEndpointAttributesWithDefaults() *AzureBlobStorageEndpointAttributes`

NewAzureBlobStorageEndpointAttributesWithDefaults instantiates a new AzureBlobStorageEndpointAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AzureBlobStorageEndpointAttributes) GetType() AzureBlobStorageEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AzureBlobStorageEndpointAttributes) GetTypeOk() (*AzureBlobStorageEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AzureBlobStorageEndpointAttributes) SetType(v AzureBlobStorageEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *AzureBlobStorageEndpointAttributes) GetAttributes() AzureBlobStorageEndpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AzureBlobStorageEndpointAttributes) GetAttributesOk() (*AzureBlobStorageEndpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AzureBlobStorageEndpointAttributes) SetAttributes(v AzureBlobStorageEndpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


