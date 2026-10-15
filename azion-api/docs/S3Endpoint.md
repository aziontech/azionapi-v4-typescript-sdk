# S3Endpoint

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

### NewS3Endpoint

`func NewS3Endpoint(accessKey string, secretKey string, region string, bucketName string, contentType ContentTypeEnum, hostUrl string, ) *S3Endpoint`

NewS3Endpoint instantiates a new S3Endpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewS3EndpointWithDefaults

`func NewS3EndpointWithDefaults() *S3Endpoint`

NewS3EndpointWithDefaults instantiates a new S3Endpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessKey

`func (o *S3Endpoint) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *S3Endpoint) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *S3Endpoint) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


### GetSecretKey

`func (o *S3Endpoint) GetSecretKey() string`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *S3Endpoint) GetSecretKeyOk() (*string, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *S3Endpoint) SetSecretKey(v string)`

SetSecretKey sets SecretKey field to given value.


### GetRegion

`func (o *S3Endpoint) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *S3Endpoint) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *S3Endpoint) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetObjectKeyPrefix

`func (o *S3Endpoint) GetObjectKeyPrefix() string`

GetObjectKeyPrefix returns the ObjectKeyPrefix field if non-nil, zero value otherwise.

### GetObjectKeyPrefixOk

`func (o *S3Endpoint) GetObjectKeyPrefixOk() (*string, bool)`

GetObjectKeyPrefixOk returns a tuple with the ObjectKeyPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectKeyPrefix

`func (o *S3Endpoint) SetObjectKeyPrefix(v string)`

SetObjectKeyPrefix sets ObjectKeyPrefix field to given value.

### HasObjectKeyPrefix

`func (o *S3Endpoint) HasObjectKeyPrefix() bool`

HasObjectKeyPrefix returns a boolean if a field has been set.

### SetObjectKeyPrefixNil

`func (o *S3Endpoint) SetObjectKeyPrefixNil(b bool)`

 SetObjectKeyPrefixNil sets the value for ObjectKeyPrefix to be an explicit nil

### UnsetObjectKeyPrefix
`func (o *S3Endpoint) UnsetObjectKeyPrefix()`

UnsetObjectKeyPrefix ensures that no value is present for ObjectKeyPrefix, not even an explicit nil
### GetBucketName

`func (o *S3Endpoint) GetBucketName() string`

GetBucketName returns the BucketName field if non-nil, zero value otherwise.

### GetBucketNameOk

`func (o *S3Endpoint) GetBucketNameOk() (*string, bool)`

GetBucketNameOk returns a tuple with the BucketName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketName

`func (o *S3Endpoint) SetBucketName(v string)`

SetBucketName sets BucketName field to given value.


### GetContentType

`func (o *S3Endpoint) GetContentType() ContentTypeEnum`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *S3Endpoint) GetContentTypeOk() (*ContentTypeEnum, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *S3Endpoint) SetContentType(v ContentTypeEnum)`

SetContentType sets ContentType field to given value.


### GetHostUrl

`func (o *S3Endpoint) GetHostUrl() string`

GetHostUrl returns the HostUrl field if non-nil, zero value otherwise.

### GetHostUrlOk

`func (o *S3Endpoint) GetHostUrlOk() (*string, bool)`

GetHostUrlOk returns a tuple with the HostUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostUrl

`func (o *S3Endpoint) SetHostUrl(v string)`

SetHostUrl sets HostUrl field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


