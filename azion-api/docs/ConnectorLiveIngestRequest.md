# ConnectorLiveIngestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Type** | **string** |  | 
**Attributes** | [**ConnectorLiveIngestAttributesRequest**](ConnectorLiveIngestAttributesRequest.md) |  | 

## Methods

### NewConnectorLiveIngestRequest

`func NewConnectorLiveIngestRequest(name string, type_ string, attributes ConnectorLiveIngestAttributesRequest, ) *ConnectorLiveIngestRequest`

NewConnectorLiveIngestRequest instantiates a new ConnectorLiveIngestRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorLiveIngestRequestWithDefaults

`func NewConnectorLiveIngestRequestWithDefaults() *ConnectorLiveIngestRequest`

NewConnectorLiveIngestRequestWithDefaults instantiates a new ConnectorLiveIngestRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorLiveIngestRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorLiveIngestRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorLiveIngestRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ConnectorLiveIngestRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ConnectorLiveIngestRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ConnectorLiveIngestRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ConnectorLiveIngestRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetType

`func (o *ConnectorLiveIngestRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectorLiveIngestRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectorLiveIngestRequest) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *ConnectorLiveIngestRequest) GetAttributes() ConnectorLiveIngestAttributesRequest`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ConnectorLiveIngestRequest) GetAttributesOk() (*ConnectorLiveIngestAttributesRequest, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ConnectorLiveIngestRequest) SetAttributes(v ConnectorLiveIngestAttributesRequest)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


