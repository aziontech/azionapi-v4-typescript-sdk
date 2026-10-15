# AWSKinesisFirehoseEndpointAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**AWSKinesisFirehoseEndpointAttributesTypeEnum**](AWSKinesisFirehoseEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**AWSKinesisFirehoseEndpoint**](AWSKinesisFirehoseEndpoint.md) |  | 

## Methods

### NewAWSKinesisFirehoseEndpointAttributes

`func NewAWSKinesisFirehoseEndpointAttributes(type_ AWSKinesisFirehoseEndpointAttributesTypeEnum, attributes AWSKinesisFirehoseEndpoint, ) *AWSKinesisFirehoseEndpointAttributes`

NewAWSKinesisFirehoseEndpointAttributes instantiates a new AWSKinesisFirehoseEndpointAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAWSKinesisFirehoseEndpointAttributesWithDefaults

`func NewAWSKinesisFirehoseEndpointAttributesWithDefaults() *AWSKinesisFirehoseEndpointAttributes`

NewAWSKinesisFirehoseEndpointAttributesWithDefaults instantiates a new AWSKinesisFirehoseEndpointAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AWSKinesisFirehoseEndpointAttributes) GetType() AWSKinesisFirehoseEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AWSKinesisFirehoseEndpointAttributes) GetTypeOk() (*AWSKinesisFirehoseEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AWSKinesisFirehoseEndpointAttributes) SetType(v AWSKinesisFirehoseEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *AWSKinesisFirehoseEndpointAttributes) GetAttributes() AWSKinesisFirehoseEndpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AWSKinesisFirehoseEndpointAttributes) GetAttributesOk() (*AWSKinesisFirehoseEndpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AWSKinesisFirehoseEndpointAttributes) SetAttributes(v AWSKinesisFirehoseEndpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


