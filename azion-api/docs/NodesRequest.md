# NodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Status** | [**StatusEnum**](StatusEnum.md) |  | 
**Modules** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewNodesRequest

`func NewNodesRequest(name string, status StatusEnum, ) *NodesRequest`

NewNodesRequest instantiates a new NodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodesRequestWithDefaults

`func NewNodesRequestWithDefaults() *NodesRequest`

NewNodesRequestWithDefaults instantiates a new NodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *NodesRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NodesRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NodesRequest) SetName(v string)`

SetName sets Name field to given value.


### GetStatus

`func (o *NodesRequest) GetStatus() StatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *NodesRequest) GetStatusOk() (*StatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *NodesRequest) SetStatus(v StatusEnum)`

SetStatus sets Status field to given value.


### GetModules

`func (o *NodesRequest) GetModules() interface{}`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *NodesRequest) GetModulesOk() (*interface{}, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *NodesRequest) SetModules(v interface{})`

SetModules sets Modules field to given value.

### HasModules

`func (o *NodesRequest) HasModules() bool`

HasModules returns a boolean if a field has been set.

### SetModulesNil

`func (o *NodesRequest) SetModulesNil(b bool)`

 SetModulesNil sets the value for Modules to be an explicit nil

### UnsetModules
`func (o *NodesRequest) UnsetModules()`

UnsetModules ensures that no value is present for Modules, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


