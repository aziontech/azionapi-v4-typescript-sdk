# FirewallBehaviorObjectArgsRequestAttributes

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

### NewFirewallBehaviorObjectArgsRequestAttributes

`func NewFirewallBehaviorObjectArgsRequestAttributes(statusCode int64, limitBy LimitByEnum, averageRateLimit int64, wafId int64, mode ModeEnum, ) *FirewallBehaviorObjectArgsRequestAttributes`

NewFirewallBehaviorObjectArgsRequestAttributes instantiates a new FirewallBehaviorObjectArgsRequestAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorObjectArgsRequestAttributesWithDefaults

`func NewFirewallBehaviorObjectArgsRequestAttributesWithDefaults() *FirewallBehaviorObjectArgsRequestAttributes`

NewFirewallBehaviorObjectArgsRequestAttributesWithDefaults instantiates a new FirewallBehaviorObjectArgsRequestAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusCode

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.


### GetContentType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetContentType(v string)`

SetContentType sets ContentType field to given value.

### HasContentType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) HasContentType() bool`

HasContentType returns a boolean if a field has been set.

### GetContentBody

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetContentBody() string`

GetContentBody returns the ContentBody field if non-nil, zero value otherwise.

### GetContentBodyOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetContentBodyOk() (*string, bool)`

GetContentBodyOk returns a tuple with the ContentBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentBody

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetContentBody(v string)`

SetContentBody sets ContentBody field to given value.

### HasContentBody

`func (o *FirewallBehaviorObjectArgsRequestAttributes) HasContentBody() bool`

HasContentBody returns a boolean if a field has been set.

### GetType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetType() FirewallBehaviorSetRateLimitAttributesTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetTypeOk() (*FirewallBehaviorSetRateLimitAttributesTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetType(v FirewallBehaviorSetRateLimitAttributesTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *FirewallBehaviorObjectArgsRequestAttributes) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLimitBy

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetLimitBy() LimitByEnum`

GetLimitBy returns the LimitBy field if non-nil, zero value otherwise.

### GetLimitByOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetLimitByOk() (*LimitByEnum, bool)`

GetLimitByOk returns a tuple with the LimitBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitBy

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetLimitBy(v LimitByEnum)`

SetLimitBy sets LimitBy field to given value.


### GetAverageRateLimit

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetAverageRateLimit() int64`

GetAverageRateLimit returns the AverageRateLimit field if non-nil, zero value otherwise.

### GetAverageRateLimitOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetAverageRateLimitOk() (*int64, bool)`

GetAverageRateLimitOk returns a tuple with the AverageRateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRateLimit

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetAverageRateLimit(v int64)`

SetAverageRateLimit sets AverageRateLimit field to given value.


### GetMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetMaximumBurstSize() int64`

GetMaximumBurstSize returns the MaximumBurstSize field if non-nil, zero value otherwise.

### GetMaximumBurstSizeOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetMaximumBurstSizeOk() (*int64, bool)`

GetMaximumBurstSizeOk returns a tuple with the MaximumBurstSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetMaximumBurstSize(v int64)`

SetMaximumBurstSize sets MaximumBurstSize field to given value.

### HasMaximumBurstSize

`func (o *FirewallBehaviorObjectArgsRequestAttributes) HasMaximumBurstSize() bool`

HasMaximumBurstSize returns a boolean if a field has been set.

### SetMaximumBurstSizeNil

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetMaximumBurstSizeNil(b bool)`

 SetMaximumBurstSizeNil sets the value for MaximumBurstSize to be an explicit nil

### UnsetMaximumBurstSize
`func (o *FirewallBehaviorObjectArgsRequestAttributes) UnsetMaximumBurstSize()`

UnsetMaximumBurstSize ensures that no value is present for MaximumBurstSize, not even an explicit nil
### GetWafId

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetWafId() int64`

GetWafId returns the WafId field if non-nil, zero value otherwise.

### GetWafIdOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetWafIdOk() (*int64, bool)`

GetWafIdOk returns a tuple with the WafId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWafId

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetWafId(v int64)`

SetWafId sets WafId field to given value.


### GetMode

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetMode() ModeEnum`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *FirewallBehaviorObjectArgsRequestAttributes) GetModeOk() (*ModeEnum, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *FirewallBehaviorObjectArgsRequestAttributes) SetMode(v ModeEnum)`

SetMode sets Mode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


