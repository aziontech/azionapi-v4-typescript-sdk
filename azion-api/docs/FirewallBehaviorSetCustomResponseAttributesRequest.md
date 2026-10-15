# FirewallBehaviorSetCustomResponseAttributesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusCode** | **int64** |  | 
**ContentType** | Pointer to **string** |  | [optional] [default to ""]
**ContentBody** | Pointer to **string** |  | [optional] [default to ""]

## Methods

### NewFirewallBehaviorSetCustomResponseAttributesRequest

`func NewFirewallBehaviorSetCustomResponseAttributesRequest(statusCode int64, ) *FirewallBehaviorSetCustomResponseAttributesRequest`

NewFirewallBehaviorSetCustomResponseAttributesRequest instantiates a new FirewallBehaviorSetCustomResponseAttributesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFirewallBehaviorSetCustomResponseAttributesRequestWithDefaults

`func NewFirewallBehaviorSetCustomResponseAttributesRequestWithDefaults() *FirewallBehaviorSetCustomResponseAttributesRequest`

NewFirewallBehaviorSetCustomResponseAttributesRequestWithDefaults instantiates a new FirewallBehaviorSetCustomResponseAttributesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusCode

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetStatusCode() int64`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetStatusCodeOk() (*int64, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) SetStatusCode(v int64)`

SetStatusCode sets StatusCode field to given value.


### GetContentType

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) SetContentType(v string)`

SetContentType sets ContentType field to given value.

### HasContentType

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) HasContentType() bool`

HasContentType returns a boolean if a field has been set.

### GetContentBody

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetContentBody() string`

GetContentBody returns the ContentBody field if non-nil, zero value otherwise.

### GetContentBodyOk

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) GetContentBodyOk() (*string, bool)`

GetContentBodyOk returns a tuple with the ContentBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentBody

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) SetContentBody(v string)`

SetContentBody sets ContentBody field to given value.

### HasContentBody

`func (o *FirewallBehaviorSetCustomResponseAttributesRequest) HasContentBody() bool`

HasContentBody returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


