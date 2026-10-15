# FirewallBehaviorSetWafAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WafId** | **int64** |  | 
**Mode** | [**ModeEnum**](ModeEnum.md) |  | 

## Methods

### NewFirewallBehaviorSetWafAttributesRequest

`func NewFirewallBehaviorSetWafAttributesRequest(wafId int64, mode ModeEnum, ) *FirewallBehaviorSetWafAttributesRequest`

NewFirewallBehaviorSetWafAttributesRequest instantiates a new FirewallBehaviorSetWafAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorSetWafAttributesRequestWithDefaults

`func NewFirewallBehaviorSetWafAttributesRequestWithDefaults() *FirewallBehaviorSetWafAttributesRequest`

NewFirewallBehaviorSetWafAttributesRequestWithDefaults instantiates a new FirewallBehaviorSetWafAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWafId

`func (o *FirewallBehaviorSetWafAttributesRequest) GetWafId() int64`

GetWafId returns the WafId field if non-nil, zero value otherwise.

### GetWafIdOk

`func (o *FirewallBehaviorSetWafAttributesRequest) GetWafIdOk() (*int64, bool)`

GetWafIdOk returns a tuple with the WafId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWafId

`func (o *FirewallBehaviorSetWafAttributesRequest) SetWafId(v int64)`

SetWafId sets WafId field to given value.


### GetMode

`func (o *FirewallBehaviorSetWafAttributesRequest) GetMode() ModeEnum`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *FirewallBehaviorSetWafAttributesRequest) GetModeOk() (*ModeEnum, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *FirewallBehaviorSetWafAttributesRequest) SetMode(v ModeEnum)`

SetMode sets Mode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


