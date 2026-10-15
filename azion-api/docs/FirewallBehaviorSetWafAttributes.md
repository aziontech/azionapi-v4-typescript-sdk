# FirewallBehaviorSetWafAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WafId** | **int64** |  | 
**Mode** | [**ModeEnum**](ModeEnum.md) |  | 

## Methods

### NewFirewallBehaviorSetWafAttributes

`func NewFirewallBehaviorSetWafAttributes(wafId int64, mode ModeEnum, ) *FirewallBehaviorSetWafAttributes`

NewFirewallBehaviorSetWafAttributes instantiates a new FirewallBehaviorSetWafAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorSetWafAttributesWithDefaults

`func NewFirewallBehaviorSetWafAttributesWithDefaults() *FirewallBehaviorSetWafAttributes`

NewFirewallBehaviorSetWafAttributesWithDefaults instantiates a new FirewallBehaviorSetWafAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWafId

`func (o *FirewallBehaviorSetWafAttributes) GetWafId() int64`

GetWafId returns the WafId field if non-nil, zero value otherwise.

### GetWafIdOk

`func (o *FirewallBehaviorSetWafAttributes) GetWafIdOk() (*int64, bool)`

GetWafIdOk returns a tuple with the WafId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWafId

`func (o *FirewallBehaviorSetWafAttributes) SetWafId(v int64)`

SetWafId sets WafId field to given value.


### GetMode

`func (o *FirewallBehaviorSetWafAttributes) GetMode() ModeEnum`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *FirewallBehaviorSetWafAttributes) GetModeOk() (*ModeEnum, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *FirewallBehaviorSetWafAttributes) SetMode(v ModeEnum)`

SetMode sets Mode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


