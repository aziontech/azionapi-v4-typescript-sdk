# ConnectorHTTPAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | [**[]Address**](Address.md) |  | 
**ConnectionOptions** | Pointer to [**HTTPConnectionOptions**](HTTPConnectionOptions.md) |  | [optional] 
**Modules** | Pointer to [**HTTPModules**](HTTPModules.md) |  | [optional] 

## Methods

### NewConnectorHTTPAttributes

`func NewConnectorHTTPAttributes(addresses []Address, ) *ConnectorHTTPAttributes`

NewConnectorHTTPAttributes instantiates a new ConnectorHTTPAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorHTTPAttributesWithDefaults

`func NewConnectorHTTPAttributesWithDefaults() *ConnectorHTTPAttributes`

NewConnectorHTTPAttributesWithDefaults instantiates a new ConnectorHTTPAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresses

`func (o *ConnectorHTTPAttributes) GetAddresses() []Address`

GetAddresses returns the Addresses field if non-nil, zero value otherwise.

### GetAddressesOk

`func (o *ConnectorHTTPAttributes) GetAddressesOk() (*[]Address, bool)`

GetAddressesOk returns a tuple with the Addresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresses

`func (o *ConnectorHTTPAttributes) SetAddresses(v []Address)`

SetAddresses sets Addresses field to given value.


### GetConnectionOptions

`func (o *ConnectorHTTPAttributes) GetConnectionOptions() HTTPConnectionOptions`

GetConnectionOptions returns the ConnectionOptions field if non-nil, zero value otherwise.

### GetConnectionOptionsOk

`func (o *ConnectorHTTPAttributes) GetConnectionOptionsOk() (*HTTPConnectionOptions, bool)`

GetConnectionOptionsOk returns a tuple with the ConnectionOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionOptions

`func (o *ConnectorHTTPAttributes) SetConnectionOptions(v HTTPConnectionOptions)`

SetConnectionOptions sets ConnectionOptions field to given value.

### HasConnectionOptions

`func (o *ConnectorHTTPAttributes) HasConnectionOptions() bool`

HasConnectionOptions returns a boolean if a field has been set.

### GetModules

`func (o *ConnectorHTTPAttributes) GetModules() HTTPModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *ConnectorHTTPAttributes) GetModulesOk() (*HTTPModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *ConnectorHTTPAttributes) SetModules(v HTTPModules)`

SetModules sets Modules field to given value.

### HasModules

`func (o *ConnectorHTTPAttributes) HasModules() bool`

HasModules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


