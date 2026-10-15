# BehaviorArgs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Behavior type | 
**Attributes** | [**BehaviorArgsAttributes**](BehaviorArgsAttributes.md) |  | 

## Methods

### NewBehaviorArgs

`func NewBehaviorArgs(type_ string, attributes BehaviorArgsAttributes, ) *BehaviorArgs`

NewBehaviorArgs instantiates a new BehaviorArgs object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBehaviorArgsWithDefaults

`func NewBehaviorArgsWithDefaults() *BehaviorArgs`

NewBehaviorArgsWithDefaults instantiates a new BehaviorArgs object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BehaviorArgs) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BehaviorArgs) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BehaviorArgs) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *BehaviorArgs) GetAttributes() BehaviorArgsAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *BehaviorArgs) GetAttributesOk() (*BehaviorArgsAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *BehaviorArgs) SetAttributes(v BehaviorArgsAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


