# ConnectorStorageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | **string** |  | 
**Attributes** | [**ConnectorStorageAttributesRequest**](ConnectorStorageAttributesRequest.md) |  | 

## Methods

### NewConnectorStorageRequest

`func NewConnectorStorageRequest(name string, type_ string, attributes ConnectorStorageAttributesRequest, ) *ConnectorStorageRequest`

NewConnectorStorageRequest instantiates a new ConnectorStorageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorStorageRequestWithDefaults

`func NewConnectorStorageRequestWithDefaults() *ConnectorStorageRequest`

NewConnectorStorageRequestWithDefaults instantiates a new ConnectorStorageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorStorageRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorStorageRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorStorageRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ConnectorStorageRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConnectorStorageRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConnectorStorageRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConnectorStorageRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *ConnectorStorageRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorStorageRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorStorageRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *ConnectorStorageRequest) GetAttributes() ConnectorStorageAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorStorageRequest) GetAttributesOk() (*ConnectorStorageAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorStorageRequest) SetAttributes(v ConnectorStorageAttributesRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


