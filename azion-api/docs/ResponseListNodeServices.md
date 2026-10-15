# ResponseListNodeServices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**ServiceName** | Pointer to **string** |  | [optional] 
**ServiceId** | **int64** |  | 
**Active** | Pointer to **bool** |  | [optional] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 

## Methods

### NewResponseListNodeServices

`func NewResponseListNodeServices(serviceId int64, lastEditor string, lastModified string, ) *ResponseListNodeServices`

NewResponseListNodeServices instantiates a new ResponseListNodeServices object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListNodeServicesWithDefaults

`func NewResponseListNodeServicesWithDefaults() *ResponseListNodeServices`

NewResponseListNodeServicesWithDefaults instantiates a new ResponseListNodeServices object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListNodeServices) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListNodeServices) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListNodeServices) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *ResponseListNodeServices) HasId() bool`

HasId returns a boolean if a field has been set.

### GetServiceName

`func (o *ResponseListNodeServices) GetServiceName() string`

GetServiceName returns the ServiceName field if non-nil, zero value otherwise.

### GetServiceNameOk

`func (o *ResponseListNodeServices) GetServiceNameOk() (*string, bool)`

GetServiceNameOk returns a tuple with the ServiceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceName

`func (o *ResponseListNodeServices) SetServiceName(v string)`

SetServiceName sets ServiceName field to given value.

### HasServiceName

`func (o *ResponseListNodeServices) HasServiceName() bool`

HasServiceName returns a boolean if a field has been set.

### GetServiceId

`func (o *ResponseListNodeServices) GetServiceId() int64`

GetServiceId returns the ServiceId field if non-nil, zero value otherwise.

### GetServiceIdOk

`func (o *ResponseListNodeServices) GetServiceIdOk() (*int64, bool)`

GetServiceIdOk returns a tuple with the ServiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceId

`func (o *ResponseListNodeServices) SetServiceId(v int64)`

SetServiceId sets ServiceId field to given value.


### GetActive

`func (o *ResponseListNodeServices) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListNodeServices) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListNodeServices) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ResponseListNodeServices) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *ResponseListNodeServices) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListNodeServices) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListNodeServices) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListNodeServices) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListNodeServices) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListNodeServices) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


