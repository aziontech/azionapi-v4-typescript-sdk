# ElasticsearchEndpointAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**ElasticsearchEndpointAttributesTypeEnum**](ElasticsearchEndpointAttributesTypeEnum.md) |  | 
**Attributes** | [**ElasticsearchEndpoint**](ElasticsearchEndpoint.md) |  | 

## Methods

### NewElasticsearchEndpointAttributes

`func NewElasticsearchEndpointAttributes(type_ ElasticsearchEndpointAttributesTypeEnum, attributes ElasticsearchEndpoint, ) *ElasticsearchEndpointAttributes`

NewElasticsearchEndpointAttributes instantiates a new ElasticsearchEndpointAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchEndpointAttributesWithDefaults

`func NewElasticsearchEndpointAttributesWithDefaults() *ElasticsearchEndpointAttributes`

NewElasticsearchEndpointAttributesWithDefaults instantiates a new ElasticsearchEndpointAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ElasticsearchEndpointAttributes) GetType() ElasticsearchEndpointAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ElasticsearchEndpointAttributes) GetTypeOk() (*ElasticsearchEndpointAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ElasticsearchEndpointAttributes) SetType(v ElasticsearchEndpointAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *ElasticsearchEndpointAttributes) GetAttributes() ElasticsearchEndpoint`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ElasticsearchEndpointAttributes) GetAttributesOk() (*ElasticsearchEndpoint, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ElasticsearchEndpointAttributes) SetAttributes(v ElasticsearchEndpoint)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


