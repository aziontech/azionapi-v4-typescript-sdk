# InputDataSourceAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**InputDataSourceAttributesTypeEnum**](InputDataSourceAttributesTypeEnum.md) |  | 
**Attributes** | [**InputDataSource**](InputDataSource.md) |  | 

## Methods

### NewInputDataSourceAttributes

`func NewInputDataSourceAttributes(type_ InputDataSourceAttributesTypeEnum, attributes InputDataSource, ) *InputDataSourceAttributes`

NewInputDataSourceAttributes instantiates a new InputDataSourceAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputDataSourceAttributesWithDefaults

`func NewInputDataSourceAttributesWithDefaults() *InputDataSourceAttributes`

NewInputDataSourceAttributesWithDefaults instantiates a new InputDataSourceAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *InputDataSourceAttributes) GetType() InputDataSourceAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InputDataSourceAttributes) GetTypeOk() (*InputDataSourceAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InputDataSourceAttributes) SetType(v InputDataSourceAttributesTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *InputDataSourceAttributes) GetAttributes() InputDataSource`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *InputDataSourceAttributes) GetAttributesOk() (*InputDataSource, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *InputDataSourceAttributes) SetAttributes(v InputDataSource)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


