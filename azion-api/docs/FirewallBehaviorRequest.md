# FirewallBehaviorRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**FirewallBehaviorNoArgsTypeEnum**](FirewallBehaviorNoArgsTypeEnum.md) |  | 
**Attributes** | [**FirewallBehaviorObjectArgsRequestAttributes**](FirewallBehaviorObjectArgsRequestAttributes.md) |  | 

## Methods

### NewFirewallBehaviorRequest

`func NewFirewallBehaviorRequest(type_ FirewallBehaviorNoArgsTypeEnum, attributes FirewallBehaviorObjectArgsRequestAttributes, ) *FirewallBehaviorRequest`

NewFirewallBehaviorRequest instantiates a new FirewallBehaviorRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorRequestWithDefaults

`func NewFirewallBehaviorRequestWithDefaults() *FirewallBehaviorRequest`

NewFirewallBehaviorRequestWithDefaults instantiates a new FirewallBehaviorRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FirewallBehaviorRequest) GetType() FirewallBehaviorNoArgsTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FirewallBehaviorRequest) GetTypeOk() (*FirewallBehaviorNoArgsTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FirewallBehaviorRequest) SetType(v FirewallBehaviorNoArgsTypeEnum)`

SetType sets Type field to given value.


### GetAttributes

`func (o *FirewallBehaviorRequest) GetAttributes() FirewallBehaviorObjectArgsRequestAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *FirewallBehaviorRequest) GetAttributesOk() (*FirewallBehaviorObjectArgsRequestAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *FirewallBehaviorRequest) SetAttributes(v FirewallBehaviorObjectArgsRequestAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


