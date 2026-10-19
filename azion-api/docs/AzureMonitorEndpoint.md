# AzureMonitorEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LogType** | **string** |  | 
**SharedKey** | **string** |  | 
**TimeGeneratedField** | Pointer to **NullableString** |  | [optional] 
**WorkspaceId** | **string** |  | 

## Methods

### NewAzureMonitorEndpoint

`func NewAzureMonitorEndpoint(logType string, sharedKey string, workspaceId string, ) *AzureMonitorEndpoint`

NewAzureMonitorEndpoint instantiates a new AzureMonitorEndpoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureMonitorEndpointWithDefaults

`func NewAzureMonitorEndpointWithDefaults() *AzureMonitorEndpoint`

NewAzureMonitorEndpointWithDefaults instantiates a new AzureMonitorEndpoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogType

`func (o *AzureMonitorEndpoint) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *AzureMonitorEndpoint) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *AzureMonitorEndpoint) SetLogType(v string)`

SetLogType sets LogType field to given value.


### GetSharedKey

`func (o *AzureMonitorEndpoint) GetSharedKey() string`

GetSharedKey returns the SharedKey field if non-nil, zero value otherwise.

### GetSharedKeyOk

`func (o *AzureMonitorEndpoint) GetSharedKeyOk() (*string, bool)`

GetSharedKeyOk returns a tuple with the SharedKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedKey

`func (o *AzureMonitorEndpoint) SetSharedKey(v string)`

SetSharedKey sets SharedKey field to given value.


### GetTimeGeneratedField

`func (o *AzureMonitorEndpoint) GetTimeGeneratedField() string`

GetTimeGeneratedField returns the TimeGeneratedField field if non-nil, zero value otherwise.

### GetTimeGeneratedFieldOk

`func (o *AzureMonitorEndpoint) GetTimeGeneratedFieldOk() (*string, bool)`

GetTimeGeneratedFieldOk returns a tuple with the TimeGeneratedField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeGeneratedField

`func (o *AzureMonitorEndpoint) SetTimeGeneratedField(v string)`

SetTimeGeneratedField sets TimeGeneratedField field to given value.

### HasTimeGeneratedField

`func (o *AzureMonitorEndpoint) HasTimeGeneratedField() bool`

HasTimeGeneratedField returns a boolean if a field has been set.

### SetTimeGeneratedFieldNil

`func (o *AzureMonitorEndpoint) SetTimeGeneratedFieldNil(b bool)`

 SetTimeGeneratedFieldNil sets the value for TimeGeneratedField to be an explicit nil

### UnsetTimeGeneratedField
`func (o *AzureMonitorEndpoint) UnsetTimeGeneratedField()`

UnsetTimeGeneratedField ensures that no value is present for TimeGeneratedField, not even an explicit nil
### GetWorkspaceId

`func (o *AzureMonitorEndpoint) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *AzureMonitorEndpoint) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *AzureMonitorEndpoint) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


