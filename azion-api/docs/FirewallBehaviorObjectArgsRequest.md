# FirewallBehaviorObjectArgsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Behavior type | 
**Attributes** | [**FirewallBehaviorObjectArgsRequestAttributes**](FirewallBehaviorObjectArgsRequestAttributes.md) |  | 

## Methods

### NewFirewallBehaviorObjectArgsRequest

`func NewFirewallBehaviorObjectArgsRequest(type_ string, attributes FirewallBehaviorObjectArgsRequestAttributes, ) *FirewallBehaviorObjectArgsRequest`

NewFirewallBehaviorObjectArgsRequest instantiates a new FirewallBehaviorObjectArgsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorObjectArgsRequestWithDefaults

`func NewFirewallBehaviorObjectArgsRequestWithDefaults() *FirewallBehaviorObjectArgsRequest`

NewFirewallBehaviorObjectArgsRequestWithDefaults instantiates a new FirewallBehaviorObjectArgsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FirewallBehaviorObjectArgsRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FirewallBehaviorObjectArgsRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FirewallBehaviorObjectArgsRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *FirewallBehaviorObjectArgsRequest) GetAttributes() FirewallBehaviorObjectArgsRequestAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *FirewallBehaviorObjectArgsRequest) GetAttributesOk() (*FirewallBehaviorObjectArgsRequestAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *FirewallBehaviorObjectArgsRequest) SetAttributes(v FirewallBehaviorObjectArgsRequestAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


