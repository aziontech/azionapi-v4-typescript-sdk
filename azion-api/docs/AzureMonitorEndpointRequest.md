# AzureMonitorEndpointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LogType** | **string** |  | 
**SharedKey** | **string** |  | 
**TimeGeneratedField** | Pointer to **NullableString** |  | [optional] 
**WorkspaceId** | **string** |  | 

## Methods

### NewAzureMonitorEndpointRequest

`func NewAzureMonitorEndpointRequest(logType string, sharedKey string, workspaceId string, ) *AzureMonitorEndpointRequest`

NewAzureMonitorEndpointRequest instantiates a new AzureMonitorEndpointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureMonitorEndpointRequestWithDefaults

`func NewAzureMonitorEndpointRequestWithDefaults() *AzureMonitorEndpointRequest`

NewAzureMonitorEndpointRequestWithDefaults instantiates a new AzureMonitorEndpointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogType

`func (o *AzureMonitorEndpointRequest) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *AzureMonitorEndpointRequest) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *AzureMonitorEndpointRequest) SetLogType(v string)`

SetLogType sets LogType field to given value.


### GetSharedKey

`func (o *AzureMonitorEndpointRequest) GetSharedKey() string`

GetSharedKey returns the SharedKey field if non-nil, zero value otherwise.

### GetSharedKeyOk

`func (o *AzureMonitorEndpointRequest) GetSharedKeyOk() (*string, bool)`

GetSharedKeyOk returns a tuple with the SharedKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedKey

`func (o *AzureMonitorEndpointRequest) SetSharedKey(v string)`

SetSharedKey sets SharedKey field to given value.


### GetTimeGeneratedField

`func (o *AzureMonitorEndpointRequest) GetTimeGeneratedField() string`

GetTimeGeneratedField returns the TimeGeneratedField field if non-nil, zero value otherwise.

### GetTimeGeneratedFieldOk

`func (o *AzureMonitorEndpointRequest) GetTimeGeneratedFieldOk() (*string, bool)`

GetTimeGeneratedFieldOk returns a tuple with the TimeGeneratedField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeGeneratedField

`func (o *AzureMonitorEndpointRequest) SetTimeGeneratedField(v string)`

SetTimeGeneratedField sets TimeGeneratedField field to given value.

### HasTimeGeneratedField

`func (o *AzureMonitorEndpointRequest) HasTimeGeneratedField() bool`

HasTimeGeneratedField returns a boolean if a field has been set.

### SetTimeGeneratedFieldNil

`func (o *AzureMonitorEndpointRequest) SetTimeGeneratedFieldNil(b bool)`

 SetTimeGeneratedFieldNil sets the value for TimeGeneratedField to be an explicit nil

### UnsetTimeGeneratedField
`func (o *AzureMonitorEndpointRequest) UnsetTimeGeneratedField()`

UnsetTimeGeneratedField ensures that no value is present for TimeGeneratedField, not even an explicit nil
### GetWorkspaceId

`func (o *AzureMonitorEndpointRequest) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *AzureMonitorEndpointRequest) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *AzureMonitorEndpointRequest) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


