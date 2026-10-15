# ApplicationModules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cache** | Pointer to [**CacheModule**](CacheModule.md) |  | [optional] 
**Functions** | Pointer to [**FunctionModule**](FunctionModule.md) |  | [optional] 
**ApplicationAccelerator** | Pointer to [**ApplicationAcceleratorModule**](ApplicationAcceleratorModule.md) |  | [optional] 
**ImageProcessor** | Pointer to [**ImageProcessorModule**](ImageProcessorModule.md) |  | [optional] 

## Methods

### NewApplicationModules

`func NewApplicationModules() *ApplicationModules`

NewApplicationModules instantiates a new ApplicationModules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplicationModulesWithDefaults

`func NewApplicationModulesWithDefaults() *ApplicationModules`

NewApplicationModulesWithDefaults instantiates a new ApplicationModules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCache

`func (o *ApplicationModules) GetCache() CacheModule`

GetCache returns the Cache field if non-nil, zero value otherwise.

### GetCacheOk

`func (o *ApplicationModules) GetCacheOk() (*CacheModule, bool)`

GetCacheOk returns a tuple with the Cache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCache

`func (o *ApplicationModules) SetCache(v CacheModule)`

SetCache sets Cache field to given value.

### HasCache

`func (o *ApplicationModules) HasCache() bool`

HasCache returns a boolean if a field has been set.

### GetFunctions

`func (o *ApplicationModules) GetFunctions() FunctionModule`

GetFunctions returns the Functions field if non-nil, zero value otherwise.

### GetFunctionsOk

`func (o *ApplicationModules) GetFunctionsOk() (*FunctionModule, bool)`

GetFunctionsOk returns a tuple with the Functions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctions

`func (o *ApplicationModules) SetFunctions(v FunctionModule)`

SetFunctions sets Functions field to given value.

### HasFunctions

`func (o *ApplicationModules) HasFunctions() bool`

HasFunctions returns a boolean if a field has been set.

### GetApplicationAccelerator

`func (o *ApplicationModules) GetApplicationAccelerator() ApplicationAcceleratorModule`

GetApplicationAccelerator returns the ApplicationAccelerator field if non-nil, zero value otherwise.

### GetApplicationAcceleratorOk

`func (o *ApplicationModules) GetApplicationAcceleratorOk() (*ApplicationAcceleratorModule, bool)`

GetApplicationAcceleratorOk returns a tuple with the ApplicationAccelerator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationAccelerator

`func (o *ApplicationModules) SetApplicationAccelerator(v ApplicationAcceleratorModule)`

SetApplicationAccelerator sets ApplicationAccelerator field to given value.

### HasApplicationAccelerator

`func (o *ApplicationModules) HasApplicationAccelerator() bool`

HasApplicationAccelerator returns a boolean if a field has been set.

### GetImageProcessor

`func (o *ApplicationModules) GetImageProcessor() ImageProcessorModule`

GetImageProcessor returns the ImageProcessor field if non-nil, zero value otherwise.

### GetImageProcessorOk

`func (o *ApplicationModules) GetImageProcessorOk() (*ImageProcessorModule, bool)`

GetImageProcessorOk returns a tuple with the ImageProcessor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageProcessor

`func (o *ApplicationModules) SetImageProcessor(v ImageProcessorModule)`

SetImageProcessor sets ImageProcessor field to given value.

### HasImageProcessor

`func (o *ApplicationModules) HasImageProcessor() bool`

HasImageProcessor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


