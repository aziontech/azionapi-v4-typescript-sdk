# ServiceTokenCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Description** | Pointer to **string** |  | [optional] 
**Expires** | **time.Time** |  | 

## Methods

### NewServiceTokenCreateRequest

`func NewServiceTokenCreateRequest(name string, expires time.Time, ) *ServiceTokenCreateRequest`

NewServiceTokenCreateRequest instantiates a new ServiceTokenCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTokenCreateRequestWithDefaults

`func NewServiceTokenCreateRequestWithDefaults() *ServiceTokenCreateRequest`

NewServiceTokenCreateRequestWithDefaults instantiates a new ServiceTokenCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServiceTokenCreateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceTokenCreateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceTokenCreateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ServiceTokenCreateRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceTokenCreateRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceTokenCreateRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ServiceTokenCreateRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDescription

`func (o *ServiceTokenCreateRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceTokenCreateRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceTokenCreateRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ServiceTokenCreateRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExpires

`func (o *ServiceTokenCreateRequest) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *ServiceTokenCreateRequest) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *ServiceTokenCreateRequest) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


