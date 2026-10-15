# AzureBlobStorageEndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StorageAccount** | **string** |  | 
**ContainerName** | **string** |  | 
**BlobSasToken** | **string** |  | 

## Methods

### NewAzureBlobStorageEndpointRequest

`func NewAzureBlobStorageEndpointRequest(storageAccount string, containerName string, blobSasToken string, ) *AzureBlobStorageEndpointRequest`

NewAzureBlobStorageEndpointRequest instantiates a new AzureBlobStorageEndpointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureBlobStorageEndpointRequestWithDefaults

`func NewAzureBlobStorageEndpointRequestWithDefaults() *AzureBlobStorageEndpointRequest`

NewAzureBlobStorageEndpointRequestWithDefaults instantiates a new AzureBlobStorageEndpointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStorageAccount

`func (o *AzureBlobStorageEndpointRequest) GetStorageAccount() string`

GetStorageAccount returns the StorageAccount field if non-nil, zero value otherwise.

### GetStorageAccountOk

`func (o *AzureBlobStorageEndpointRequest) GetStorageAccountOk() (*string, bool)`

GetStorageAccountOk returns a tuple with the StorageAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageAccount

`func (o *AzureBlobStorageEndpointRequest) SetStorageAccount(v string)`

SetStorageAccount sets StorageAccount field to given value.


### GetContainerName

`func (o *AzureBlobStorageEndpointRequest) GetContainerName() string`

GetContainerName returns the ContainerName field if non-nil, zero value otherwise.

### GetContainerNameOk

`func (o *AzureBlobStorageEndpointRequest) GetContainerNameOk() (*string, bool)`

GetContainerNameOk returns a tuple with the ContainerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainerName

`func (o *AzureBlobStorageEndpointRequest) SetContainerName(v string)`

SetContainerName sets ContainerName field to given value.


### GetBlobSasToken

`func (o *AzureBlobStorageEndpointRequest) GetBlobSasToken() string`

GetBlobSasToken returns the BlobSasToken field if non-nil, zero value otherwise.

### GetBlobSasTokenOk

`func (o *AzureBlobStorageEndpointRequest) GetBlobSasTokenOk() (*string, bool)`

GetBlobSasTokenOk returns a tuple with the BlobSasToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlobSasToken

`func (o *AzureBlobStorageEndpointRequest) SetBlobSasToken(v string)`

SetBlobSasToken sets BlobSasToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


