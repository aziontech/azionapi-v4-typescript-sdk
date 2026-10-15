# TransformTransformSamplingAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type identifier for this endpoint (sampling) | 
**Attributes** | [**TransformSamplingRequest**](TransformSamplingRequest.md) |  | 

## Methods

### NewTransformTransformSamplingAttributesRequest

`func NewTransformTransformSamplingAttributesRequest(type_ string, attributes TransformSamplingRequest, ) *TransformTransformSamplingAttributesRequest`

NewTransformTransformSamplingAttributesRequest instantiates a new TransformTransformSamplingAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformTransformSamplingAttributesRequestWithDefaults

`func NewTransformTransformSamplingAttributesRequestWithDefaults() *TransformTransformSamplingAttributesRequest`

NewTransformTransformSamplingAttributesRequestWithDefaults instantiates a new TransformTransformSamplingAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TransformTransformSamplingAttributesRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransformTransformSamplingAttributesRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransformTransformSamplingAttributesRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *TransformTransformSamplingAttributesRequest) GetAttributes() TransformSamplingRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TransformTransformSamplingAttributesRequest) GetAttributesOk() (*TransformSamplingRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TransformTransformSamplingAttributesRequest) SetAttributes(v TransformSamplingRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


