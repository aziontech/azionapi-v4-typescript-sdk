# DeviceGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**UserAgent** | **string** | Enter a valid regular expression pattern to identify user agents. | 

## Methods

### NewDeviceGroupRequest

`func NewDeviceGroupRequest(name string, userAgent string, ) *DeviceGroupRequest`

NewDeviceGroupRequest instantiates a new DeviceGroupRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceGroupRequestWithDefaults

`func NewDeviceGroupRequestWithDefaults() *DeviceGroupRequest`

NewDeviceGroupRequestWithDefaults instantiates a new DeviceGroupRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DeviceGroupRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeviceGroupRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeviceGroupRequest) SetName(v string)`

SetName sets Name field to given value.


### GetUserAgent

`func (o *DeviceGroupRequest) GetUserAgent() string`

GetUserAgent returns the UserAgent field if non-nil, zero value otherwise.

### GetUserAgentOk

`func (o *DeviceGroupRequest) GetUserAgentOk() (*string, bool)`

GetUserAgentOk returns a tuple with the UserAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserAgent

`func (o *DeviceGroupRequest) SetUserAgent(v string)`

SetUserAgent sets UserAgent field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


