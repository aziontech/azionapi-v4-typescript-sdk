# InputDataSourceAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**InputDataSourceAttributesTypeEnum**](InputDataSourceAttributesTypeEnum.md) |  | 
**Attributes** | [**InputDataSourceRequest**](InputDataSourceRequest.md) |  | 

## Methods

### NewInputDataSourceAttributesRequest

`func NewInputDataSourceAttributesRequest(type_ InputDataSourceAttributesTypeEnum, attributes InputDataSourceRequest, ) *InputDataSourceAttributesRequest`

NewInputDataSourceAttributesRequest instantiates a new InputDataSourceAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputDataSourceAttributesRequestWithDefaults

`func NewInputDataSourceAttributesRequestWithDefaults() *InputDataSourceAttributesRequest`

NewInputDataSourceAttributesRequestWithDefaults instantiates a new InputDataSourceAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *InputDataSourceAttributesRequest) GetType() InputDataSourceAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InputDataSourceAttributesRequest) GetTypeOk() (*InputDataSourceAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InputDataSourceAttributesRequest) SetType(v InputDataSourceAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *InputDataSourceAttributesRequest) GetAttributes() InputDataSourceRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *InputDataSourceAttributesRequest) GetAttributesOk() (*InputDataSourceRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *InputDataSourceAttributesRequest) SetAttributes(v InputDataSourceRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


