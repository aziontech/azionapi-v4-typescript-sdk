# FirewallBehaviorObjectArgsAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusCode** | **int64** |  | 
**ContentType** | Pointer to **string** |  | [optional] [default to ""]
**ContentBody** | Pointer to **string** |  | [optional] [default to ""]
**Type** | Pointer to [**FirewallBehaviorSetRateLimitAttributesTypeEnum**](FirewallBehaviorSetRateLimitAttributesTypeEnum.md) |  | [optional] [default to SECOND]
**LimitBy** | [**LimitByEnum**](LimitByEnum.md) |  | 
**AverageRateLimit** | **int64** |  | 
**MaximumBurstSize** | Pointer to **NullableInt64** |  | [optional] 
**WafId** | **int64** |  | 
**Mode** | [**ModeEnum**](ModeEnum.md) |  | 

## Methods

### NewFirewallBehaviorObjectArgsAttributes

`func NewFirewallBehaviorObjectArgsAttributes(statusCode int64, limitBy LimitByEnum, averageRateLimit int64, wafId int64, mode ModeEnum, ) *FirewallBehaviorObjectArgsAttributes`

NewFirewallBehaviorObjectArgsAttributes instantiates a new FirewallBehaviorObjectArgsAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorObjectArgsAttributesWithDefaults

`func NewFirewallBehaviorObjectArgsAttributesWithDefaults() *FirewallBehaviorObjectArgsAttributes`

NewFirewallBehaviorObjectArgsAttributesWithDefaults instantiates a new FirewallBehaviorObjectArgsAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusCode

`func (o *FirewallBehaviorObjectArgsAttributes) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *FirewallBehaviorObjectArgsAttributes) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.


### GetContentType

`func (o *FirewallBehaviorObjectArgsAttributes) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *FirewallBehaviorObjectArgsAttributes) SetContentType(v string)`

SetContentType sets ContentType field to given value.

### HasContentType

`func (o *FirewallBehaviorObjectArgsAttributes) HasContentType() bool`

HasContentType returns a boolean if a field has been set.

### GetContentBody

`func (o *FirewallBehaviorObjectArgsAttributes) GetContentBody() string`

GetContentBody returns the ContentBody field if non-nil, zero value otherwise.

### GetContentBodyOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetContentBodyOk() (*string, bool)`

GetContentBodyOk returns a tuple with the ContentBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentBody

`func (o *FirewallBehaviorObjectArgsAttributes) SetContentBody(v string)`

SetContentBody sets ContentBody field to given value.

### HasContentBody

`func (o *FirewallBehaviorObjectArgsAttributes) HasContentBody() bool`

HasContentBody returns a boolean if a field has been set.

### GetType

`func (o *FirewallBehaviorObjectArgsAttributes) GetType() FirewallBehaviorSetRateLimitAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetTypeOk() (*FirewallBehaviorSetRateLimitAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FirewallBehaviorObjectArgsAttributes) SetType(v FirewallBehaviorSetRateLimitAttributesTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *FirewallBehaviorObjectArgsAttributes) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLimitBy

`func (o *FirewallBehaviorObjectArgsAttributes) GetLimitBy() LimitByEnum`

GetLimitBy returns the LimitBy field if non-nil, zero value otherwise.

### GetLimitByOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetLimitByOk() (*LimitByEnum, bool)`

GetLimitByOk returns a tuple with the LimitBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitBy

`func (o *FirewallBehaviorObjectArgsAttributes) SetLimitBy(v LimitByEnum)`

SetLimitBy sets LimitBy field to given value.


### GetAverageRateLimit

`func (o *FirewallBehaviorObjectArgsAttributes) GetAverageRateLimit() int64`

GetAverageRateLimit returns the AverageRateLimit field if non-nil, zero value otherwise.

### GetAverageRateLimitOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetAverageRateLimitOk() (*int64, bool)`

GetAverageRateLimitOk returns a tuple with the AverageRateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRateLimit

`func (o *FirewallBehaviorObjectArgsAttributes) SetAverageRateLimit(v int64)`

SetAverageRateLimit sets AverageRateLimit field to given value.


### GetMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsAttributes) GetMaximumBurstSize() int64`

GetMaximumBurstSize returns the MaximumBurstSize field if non-nil, zero value otherwise.

### GetMaximumBurstSizeOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetMaximumBurstSizeOk() (*int64, bool)`

GetMaximumBurstSizeOk returns a tuple with the MaximumBurstSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsAttributes) SetMaximumBurstSize(v int64)`

SetMaximumBurstSize sets MaximumBurstSize field to given value.

### HasMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsAttributes) HasMaximumBurstSize() bool`

HasMaximumBurstSize returns a boolean if a field has been set.

### SetMaximumBurstSizeNil

`func (o *FirewallBehaviorObjectArgsAttributes) SetMaximumBurstSizeNil(b bool)`

 SetMaximumBurstSizeNil sets the value for MaximumBurstSize to be an explicit nil

### UnsetMaximumBurstSize
`func (o *FirewallBehaviorObjectArgsAttributes) UnsetMaximumBurstSize()`

UnsetMaximumBurstSize ensures that no value is present for MaximumBurstSize, not even an explicit nil
### GetWafId

`func (o *FirewallBehaviorObjectArgsAttributes) GetWafId() int64`

GetWafId returns the WafId field if non-nil, zero value otherwise.

### GetWafIdOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetWafIdOk() (*int64, bool)`

GetWafIdOk returns a tuple with the WafId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWafId

`func (o *FirewallBehaviorObjectArgsAttributes) SetWafId(v int64)`

SetWafId sets WafId field to given value.


### GetMode

`func (o *FirewallBehaviorObjectArgsAttributes) GetMode() ModeEnum`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *FirewallBehaviorObjectArgsAttributes) GetModeOk() (*ModeEnum, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *FirewallBehaviorObjectArgsAttributes) SetMode(v ModeEnum)`

SetMode sets Mode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


