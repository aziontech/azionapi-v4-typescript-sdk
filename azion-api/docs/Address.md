# Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Indicates if the address is active for use | [optional] [default to true]
**Address** | **string** | IPv4/IPv6 address or CNAME to resolve | 
**HttpPort** | Pointer to **int64** | Port number for HTTP connections | [optional] [default to 80]
**HttpsPort** | Pointer to **int64** | Port number for HTTPS connections | [optional] [default to 443]
**Modules** | Pointer to [**NullableAddressModules**](AddressModules.md) |  | [optional] 

## Methods

### NewAddress

`func NewAddress(address string, ) *Address`

NewAddress instantiates a new Address object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddressWithDefaults

`func NewAddressWithDefaults() *Address`

NewAddressWithDefaults instantiates a new Address object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *Address) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Address) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Address) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Address) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAddress

`func (o *Address) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Address) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Address) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetHttpPort

`func (o *Address) GetHttpPort() int64`

GetHttpPort returns the HttpPort field if non-nil, zero value otherwise.

### GetHttpPortOk

`func (o *Address) GetHttpPortOk() (*int64, bool)`

GetHttpPortOk returns a tuple with the HttpPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpPort

`func (o *Address) SetHttpPort(v int64)`

SetHttpPort sets HttpPort field to given value.

### HasHttpPort

`func (o *Address) HasHttpPort() bool`

HasHttpPort returns a boolean if a field has been set.

### GetHttpsPort

`func (o *Address) GetHttpsPort() int64`

GetHttpsPort returns the HttpsPort field if non-nil, zero value otherwise.

### GetHttpsPortOk

`func (o *Address) GetHttpsPortOk() (*int64, bool)`

GetHttpsPortOk returns a tuple with the HttpsPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpsPort

`func (o *Address) SetHttpsPort(v int64)`

SetHttpsPort sets HttpsPort field to given value.

### HasHttpsPort

`func (o *Address) HasHttpsPort() bool`

HasHttpsPort returns a boolean if a field has been set.

### GetModules

`func (o *Address) GetModules() AddressModules`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *Address) GetModulesOk() (*AddressModules, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *Address) SetModules(v AddressModules)`

SetModules sets Modules field to given value.

### HasModules

`func (o *Address) HasModules() bool`

HasModules returns a boolean if a field has been set.

### SetModulesNil

`func (o *Address) SetModulesNil(b bool)`

 SetModulesNil sets the value for Modules to be an explicit nil

### UnsetModules
`func (o *Address) UnsetModules()`

UnsetModules ensures that no value is present for Modules, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


