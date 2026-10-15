# AWS4HMACAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Region** | **string** |  | 
**Service** | Pointer to **string** |  | [optional] [default to "s3"]
**AccessKey** | **string** |  | 
**SecretKey** | **string** |  | 

## Methods

### NewAWS4HMACAttributes

`func NewAWS4HMACAttributes(region string, accessKey string, secretKey string, ) *AWS4HMACAttributes`

NewAWS4HMACAttributes instantiates a new AWS4HMACAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAWS4HMACAttributesWithDefaults

`func NewAWS4HMACAttributesWithDefaults() *AWS4HMACAttributes`

NewAWS4HMACAttributesWithDefaults instantiates a new AWS4HMACAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegion

`func (o *AWS4HMACAttributes) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AWS4HMACAttributes) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AWS4HMACAttributes) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetService

`func (o *AWS4HMACAttributes) GetService() string`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *AWS4HMACAttributes) GetServiceOk() (*string, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *AWS4HMACAttributes) SetService(v string)`

SetService sets Service field to given value.

### HasService

`func (o *AWS4HMACAttributes) HasService() bool`

HasService returns a boolean if a field has been set.

### GetAccessKey

`func (o *AWS4HMACAttributes) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *AWS4HMACAttributes) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *AWS4HMACAttributes) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


### GetSecretKey

`func (o *AWS4HMACAttributes) GetSecretKey() string`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *AWS4HMACAttributes) GetSecretKeyOk() (*string, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *AWS4HMACAttributes) SetSecretKey(v string)`

SetSecretKey sets SecretKey field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


