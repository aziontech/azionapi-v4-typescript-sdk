# AWS4HMAC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**AWS4HMACTypeEnum**](AWS4HMACTypeEnum.md) |  | [optional] [default to AWS4_HMAC_SHA256]
**Attributes** | [**AWS4HMACAttributes**](AWS4HMACAttributes.md) |  | 

## Methods

### NewAWS4HMAC

`func NewAWS4HMAC(attributes AWS4HMACAttributes, ) *AWS4HMAC`

NewAWS4HMAC instantiates a new AWS4HMAC object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAWS4HMACWithDefaults

`func NewAWS4HMACWithDefaults() *AWS4HMAC`

NewAWS4HMACWithDefaults instantiates a new AWS4HMAC object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AWS4HMAC) GetType() AWS4HMACTypeEnum`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AWS4HMAC) GetTypeOk() (*AWS4HMACTypeEnum, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AWS4HMAC) SetType(v AWS4HMACTypeEnum)`

SetType sets Type field to given value.

### HasType

`func (o *AWS4HMAC) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *AWS4HMAC) GetAttributes() AWS4HMACAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AWS4HMAC) GetAttributesOk() (*AWS4HMACAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AWS4HMAC) SetAttributes(v AWS4HMACAttributes)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


