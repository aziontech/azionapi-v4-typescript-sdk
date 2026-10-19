# ServiceTokenUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Description** | Pointer to **string** |  | [optional] 

## Methods

### NewServiceTokenUpdateRequest

`func NewServiceTokenUpdateRequest(name string, ) *ServiceTokenUpdateRequest`

NewServiceTokenUpdateRequest instantiates a new ServiceTokenUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTokenUpdateRequestWithDefaults

`func NewServiceTokenUpdateRequestWithDefaults() *ServiceTokenUpdateRequest`

NewServiceTokenUpdateRequestWithDefaults instantiates a new ServiceTokenUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServiceTokenUpdateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceTokenUpdateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceTokenUpdateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ServiceTokenUpdateRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceTokenUpdateRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceTokenUpdateRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ServiceTokenUpdateRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDescription

`func (o *ServiceTokenUpdateRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceTokenUpdateRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceTokenUpdateRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ServiceTokenUpdateRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


