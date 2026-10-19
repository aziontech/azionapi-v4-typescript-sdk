# S3EndpointAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**S3EndpointAttributesTypeEnum**](S3EndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**S3Endpoint**](S3Endpoint.md) |  | 

## Methods

### NewS3EndpointAttributes

`func NewS3EndpointAttributes(type_ S3EndpointAttributesTypeEnum, attributes S3Endpoint, ) *S3EndpointAttributes`

NewS3EndpointAttributes instantiates a new S3EndpointAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewS3EndpointAttributesWithDefaults

`func NewS3EndpointAttributesWithDefaults() *S3EndpointAttributes`

NewS3EndpointAttributesWithDefaults instantiates a new S3EndpointAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *S3EndpointAttributes) GetType() S3EndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *S3EndpointAttributes) GetTypeOk() (*S3EndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *S3EndpointAttributes) SetType(v S3EndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *S3EndpointAttributes) GetAttributes() S3Endpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *S3EndpointAttributes) GetAttributesOk() (*S3Endpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *S3EndpointAttributes) SetAttributes(v S3Endpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


