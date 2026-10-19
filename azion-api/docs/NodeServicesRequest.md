# NodeServicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**ServiceName** | Pointer to **string** |  | [optional] 
**ServiceId** | **int64** |  | 
**Active** | Pointer to **bool** |  | [optional] 

## Methods

### NewNodeServicesRequest

`func NewNodeServicesRequest(serviceId int64, ) *NodeServicesRequest`

NewNodeServicesRequest instantiates a new NodeServicesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodeServicesRequestWithDefaults

`func NewNodeServicesRequestWithDefaults() *NodeServicesRequest`

NewNodeServicesRequestWithDefaults instantiates a new NodeServicesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NodeServicesRequest) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NodeServicesRequest) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NodeServicesRequest) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *NodeServicesRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetServiceName

`func (o *NodeServicesRequest) GetServiceName() string`

GetServiceName returns the ServiceName field if non-nil, zero value otherwise.

### GetServiceNameOk

`func (o *NodeServicesRequest) GetServiceNameOk() (*string, bool)`

GetServiceNameOk returns a tuple with the ServiceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceName

`func (o *NodeServicesRequest) SetServiceName(v string)`

SetServiceName sets ServiceName field to given value.

### HasServiceName

`func (o *NodeServicesRequest) HasServiceName() bool`

HasServiceName returns a boolean if a field has been set.

### GetServiceId

`func (o *NodeServicesRequest) GetServiceId() int64`

GetServiceId returns the ServiceId field if non-nil, zero value otherwise.

### GetServiceIdOk

`func (o *NodeServicesRequest) GetServiceIdOk() (*int64, bool)`

GetServiceIdOk returns a tuple with the ServiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceId

`func (o *NodeServicesRequest) SetServiceId(v int64)`

SetServiceId sets ServiceId field to given value.


### GetActive

`func (o *NodeServicesRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *NodeServicesRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *NodeServicesRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *NodeServicesRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


