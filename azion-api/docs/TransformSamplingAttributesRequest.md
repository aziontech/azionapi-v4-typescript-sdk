# TransformSamplingAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**TransformSamplingAttributesTypeEnum**](TransformSamplingAttributesTypeEnum.md) |  | 
**Attributes** | [**TransformSamplingRequest**](TransformSamplingRequest.md) |  | 

## Methods

### NewTransformSamplingAttributesRequest

`func NewTransformSamplingAttributesRequest(type_ TransformSamplingAttributesTypeEnum, attributes TransformSamplingRequest, ) *TransformSamplingAttributesRequest`

NewTransformSamplingAttributesRequest instantiates a new TransformSamplingAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformSamplingAttributesRequestWithDefaults

`func NewTransformSamplingAttributesRequestWithDefaults() *TransformSamplingAttributesRequest`

NewTransformSamplingAttributesRequestWithDefaults instantiates a new TransformSamplingAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TransformSamplingAttributesRequest) GetType() TransformSamplingAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransformSamplingAttributesRequest) GetTypeOk() (*TransformSamplingAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransformSamplingAttributesRequest) SetType(v TransformSamplingAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *TransformSamplingAttributesRequest) GetAttributes() TransformSamplingRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TransformSamplingAttributesRequest) GetAttributesOk() (*TransformSamplingRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TransformSamplingAttributesRequest) SetAttributes(v TransformSamplingRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


