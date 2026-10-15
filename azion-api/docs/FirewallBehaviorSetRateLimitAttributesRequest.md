# FirewallBehaviorSetRateLimitAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**FirewallBehaviorSetRateLimitAttributesTypeEnum**](FirewallBehaviorSetRateLimitAttributesTypeEnum.md) |  | [optional] [default to SECOND]
**LimitBy** | [**LimitByEnum**](LimitByEnum.md) |  | 
**AverageRateLimit** | **int64** |  | 
**MaximumBurstSize** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewFirewallBehaviorSetRateLimitAttributesRequest

`func NewFirewallBehaviorSetRateLimitAttributesRequest(limitBy LimitByEnum, averageRateLimit int64, ) *FirewallBehaviorSetRateLimitAttributesRequest`

NewFirewallBehaviorSetRateLimitAttributesRequest instantiates a new FirewallBehaviorSetRateLimitAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorSetRateLimitAttributesRequestWithDefaults

`func NewFirewallBehaviorSetRateLimitAttributesRequestWithDefaults() *FirewallBehaviorSetRateLimitAttributesRequest`

NewFirewallBehaviorSetRateLimitAttributesRequestWithDefaults instantiates a new FirewallBehaviorSetRateLimitAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetType() FirewallBehaviorSetRateLimitAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetTypeOk() (*FirewallBehaviorSetRateLimitAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) SetType(v FirewallBehaviorSetRateLimitAttributesTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLimitBy

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetLimitBy() LimitByEnum`

GetLimitBy returns the LimitBy field if non-nil, zero value otherwise.

### GetLimitByOk

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetLimitByOk() (*LimitByEnum, bool)`

GetLimitByOk returns a tuple with the LimitBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitBy

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) SetLimitBy(v LimitByEnum)`

SetLimitBy sets LimitBy field to given value.


### GetAverageRateLimit

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetAverageRateLimit() int64`

GetAverageRateLimit returns the AverageRateLimit field if non-nil, zero value otherwise.

### GetAverageRateLimitOk

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetAverageRateLimitOk() (*int64, bool)`

GetAverageRateLimitOk returns a tuple with the AverageRateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRateLimit

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) SetAverageRateLimit(v int64)`

SetAverageRateLimit sets AverageRateLimit field to given value.


### GetMaximumBurstSize

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetMaximumBurstSize() int64`

GetMaximumBurstSize returns the MaximumBurstSize field if non-nil, zero value otherwise.

### GetMaximumBurstSizeOk

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) GetMaximumBurstSizeOk() (*int64, bool)`

GetMaximumBurstSizeOk returns a tuple with the MaximumBurstSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumBurstSize

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) SetMaximumBurstSize(v int64)`

SetMaximumBurstSize sets MaximumBurstSize field to given value.

### HasMaximumBurstSize

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) HasMaximumBurstSize() bool`

HasMaximumBurstSize returns a boolean if a field has been set.

### SetMaximumBurstSizeNil

`func (o *FirewallBehaviorSetRateLimitAttributesRequest) SetMaximumBurstSizeNil(b bool)`

 SetMaximumBurstSizeNil sets the value for MaximumBurstSize to be an explicit nil

### UnsetMaximumBurstSize
`func (o *FirewallBehaviorSetRateLimitAttributesRequest) UnsetMaximumBurstSize()`

UnsetMaximumBurstSize ensures that no value is present for MaximumBurstSize, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


