# InputInputDataSourceAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type identifier for this endpoint (raw_logs) | 
**Attributes** | [**InputDataSource**](InputDataSource.md) |  | 

## Methods

### NewInputInputDataSourceAttributes

`func NewInputInputDataSourceAttributes(type_ string, attributes InputDataSource, ) *InputInputDataSourceAttributes`

NewInputInputDataSourceAttributes instantiates a new InputInputDataSourceAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputInputDataSourceAttributesWithDefaults

`func NewInputInputDataSourceAttributesWithDefaults() *InputInputDataSourceAttributes`

NewInputInputDataSourceAttributesWithDefaults instantiates a new InputInputDataSourceAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *InputInputDataSourceAttributes) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InputInputDataSourceAttributes) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InputInputDataSourceAttributes) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *InputInputDataSourceAttributes) GetAttributes() InputDataSource`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *InputInputDataSourceAttributes) GetAttributesOk() (*InputDataSource, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *InputInputDataSourceAttributes) SetAttributes(v InputDataSource)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


