# S3EndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessKey** | **string** |  | 
**SecretKey** | **string** |  | 
**Region** | **string** |  | 
**ObjectKeyPrefix** | Pointer to **NullableString** |  | [optional] 
**BucketName** | **string** |  | 
**ContentType** | [**ContentTypeEnum**](ContentTypeEnum.md) |  | 
**HostUrl** | **string** |  | 

## Methods

### NewS3EndpointRequest

`func NewS3EndpointRequest(accessKey string, secretKey string, region string, bucketName string, contentType ContentTypeEnum, hostUrl string, ) *S3EndpointRequest`

NewS3EndpointRequest instantiates a new S3EndpointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewS3EndpointRequestWithDefaults

`func NewS3EndpointRequestWithDefaults() *S3EndpointRequest`

NewS3EndpointRequestWithDefaults instantiates a new S3EndpointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessKey

`func (o *S3EndpointRequest) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *S3EndpointRequest) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *S3EndpointRequest) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


### GetSecretKey

`func (o *S3EndpointRequest) GetSecretKey() string`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *S3EndpointRequest) GetSecretKeyOk() (*string, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *S3EndpointRequest) SetSecretKey(v string)`

SetSecretKey sets SecretKey field to given value.


### GetRegion

`func (o *S3EndpointRequest) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *S3EndpointRequest) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *S3EndpointRequest) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetObjectKeyPrefix

`func (o *S3EndpointRequest) GetObjectKeyPrefix() string`

GetObjectKeyPrefix returns the ObjectKeyPrefix field if non-nil, zero value otherwise.

### GetObjectKeyPrefixOk

`func (o *S3EndpointRequest) GetObjectKeyPrefixOk() (*string, bool)`

GetObjectKeyPrefixOk returns a tuple with the ObjectKeyPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectKeyPrefix

`func (o *S3EndpointRequest) SetObjectKeyPrefix(v string)`

SetObjectKeyPrefix sets ObjectKeyPrefix field to given value.

### HasObjectKeyPrefix

`func (o *S3EndpointRequest) HasObjectKeyPrefix() bool`

HasObjectKeyPrefix returns a boolean if a field has been set.

### SetObjectKeyPrefixNil

`func (o *S3EndpointRequest) SetObjectKeyPrefixNil(b bool)`

 SetObjectKeyPrefixNil sets the value for ObjectKeyPrefix to be an explicit nil

### UnsetObjectKeyPrefix
`func (o *S3EndpointRequest) UnsetObjectKeyPrefix()`

UnsetObjectKeyPrefix ensures that no value is present for ObjectKeyPrefix, not even an explicit nil
### GetBucketName

`func (o *S3EndpointRequest) GetBucketName() string`

GetBucketName returns the BucketName field if non-nil, zero value otherwise.

### GetBucketNameOk

`func (o *S3EndpointRequest) GetBucketNameOk() (*string, bool)`

GetBucketNameOk returns a tuple with the BucketName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketName

`func (o *S3EndpointRequest) SetBucketName(v string)`

SetBucketName sets BucketName field to given value.


### GetContentType

`func (o *S3EndpointRequest) GetContentType() ContentTypeEnum`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *S3EndpointRequest) GetContentTypeOk() (*ContentTypeEnum, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *S3EndpointRequest) SetContentType(v ContentTypeEnum)`

SetContentType sets ContentType field to given value.


### GetHostUrl

`func (o *S3EndpointRequest) GetHostUrl() string`

GetHostUrl returns the HostUrl field if non-nil, zero value otherwise.

### GetHostUrlOk

`func (o *S3EndpointRequest) GetHostUrlOk() (*string, bool)`

GetHostUrlOk returns a tuple with the HostUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostUrl

`func (o *S3EndpointRequest) SetHostUrl(v string)`

SetHostUrl sets HostUrl field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


