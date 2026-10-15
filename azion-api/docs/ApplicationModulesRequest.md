# ApplicationModulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cache** | Pointer to [**CacheModuleRequest**](CacheModuleRequest.md) |  | [optional] 
**Functions** | Pointer to [**FunctionModuleRequest**](FunctionModuleRequest.md) |  | [optional] 
**ApplicationAccelerator** | Pointer to [**ApplicationAcceleratorModuleRequest**](ApplicationAcceleratorModuleRequest.md) |  | [optional] 
**ImageProcessor** | Pointer to [**ImageProcessorModuleRequest**](ImageProcessorModuleRequest.md) |  | [optional] 

## Methods

### NewApplicationModulesRequest

`func NewApplicationModulesRequest() *ApplicationModulesRequest`

NewApplicationModulesRequest instantiates a new ApplicationModulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationModulesRequestWithDefaults

`func NewApplicationModulesRequestWithDefaults() *ApplicationModulesRequest`

NewApplicationModulesRequestWithDefaults instantiates a new ApplicationModulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCache

`func (o *ApplicationModulesRequest) GetCache() CacheModuleRequest`

GetCache returns the Cache field if non-nil, zero value otherwise.

### GetCacheOk

`func (o *ApplicationModulesRequest) GetCacheOk() (*CacheModuleRequest, bool)`

GetCacheOk returns a tuple with the Cache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCache

`func (o *ApplicationModulesRequest) SetCache(v CacheModuleRequest)`

SetCache sets Cache field to given value.

### HasCache

`func (o *ApplicationModulesRequest) HasCache() bool`

HasCache returns a boolean if a field has been set.

### GetFunctions

`func (o *ApplicationModulesRequest) GetFunctions() FunctionModuleRequest`

GetFunctions returns the Functions field if non-nil, zero value otherwise.

### GetFunctionsOk

`func (o *ApplicationModulesRequest) GetFunctionsOk() (*FunctionModuleRequest, bool)`

GetFunctionsOk returns a tuple with the Functions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctions

`func (o *ApplicationModulesRequest) SetFunctions(v FunctionModuleRequest)`

SetFunctions sets Functions field to given value.

### HasFunctions

`func (o *ApplicationModulesRequest) HasFunctions() bool`

HasFunctions returns a boolean if a field has been set.

### GetApplicationAccelerator

`func (o *ApplicationModulesRequest) GetApplicationAccelerator() ApplicationAcceleratorModuleRequest`

GetApplicationAccelerator returns the ApplicationAccelerator field if non-nil, zero value otherwise.

### GetApplicationAcceleratorOk

`func (o *ApplicationModulesRequest) GetApplicationAcceleratorOk() (*ApplicationAcceleratorModuleRequest, bool)`

GetApplicationAcceleratorOk returns a tuple with the ApplicationAccelerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAccelerator

`func (o *ApplicationModulesRequest) SetApplicationAccelerator(v ApplicationAcceleratorModuleRequest)`

SetApplicationAccelerator sets ApplicationAccelerator field to given value.

### HasApplicationAccelerator

`func (o *ApplicationModulesRequest) HasApplicationAccelerator() bool`

HasApplicationAccelerator returns a boolean if a field has been set.

### GetImageProcessor

`func (o *ApplicationModulesRequest) GetImageProcessor() ImageProcessorModuleRequest`

GetImageProcessor returns the ImageProcessor field if non-nil, zero value otherwise.

### GetImageProcessorOk

`func (o *ApplicationModulesRequest) GetImageProcessorOk() (*ImageProcessorModuleRequest, bool)`

GetImageProcessorOk returns a tuple with the ImageProcessor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageProcessor

`func (o *ApplicationModulesRequest) SetImageProcessor(v ImageProcessorModuleRequest)`

SetImageProcessor sets ImageProcessor field to given value.

### HasImageProcessor

`func (o *ApplicationModulesRequest) HasImageProcessor() bool`

HasImageProcessor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


