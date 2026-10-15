# DelegationSigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlgorithmType** | [**AlgType**](AlgType.md) |  | 
**Digest** | **string** |  | 
**DigestType** | [**AlgType**](AlgType.md) |  | 
**KeyTag** | **int64** |  | 

## Methods

### NewDelegationSigner

`func NewDelegationSigner(algorithmType AlgType, digest string, digestType AlgType, keyTag int64, ) *DelegationSigner`

NewDelegationSigner instantiates a new DelegationSigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDelegationSignerWithDefaults

`func NewDelegationSignerWithDefaults() *DelegationSigner`

NewDelegationSignerWithDefaults instantiates a new DelegationSigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlgorithmType

`func (o *DelegationSigner) GetAlgorithmType() AlgType`

GetAlgorithmType returns the AlgorithmType field if non-nil, zero value otherwise.

### GetAlgorithmTypeOk

`func (o *DelegationSigner) GetAlgorithmTypeOk() (*AlgType, bool)`

GetAlgorithmTypeOk returns a tuple with the AlgorithmType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlgorithmType

`func (o *DelegationSigner) SetAlgorithmType(v AlgType)`

SetAlgorithmType sets AlgorithmType field to given value.


### GetDigest

`func (o *DelegationSigner) GetDigest() string`

GetDigest returns the Digest field if non-nil, zero value otherwise.

### GetDigestOk

`func (o *DelegationSigner) GetDigestOk() (*string, bool)`

GetDigestOk returns a tuple with the Digest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigest

`func (o *DelegationSigner) SetDigest(v string)`

SetDigest sets Digest field to given value.


### GetDigestType

`func (o *DelegationSigner) GetDigestType() AlgType`

GetDigestType returns the DigestType field if non-nil, zero value otherwise.

### GetDigestTypeOk

`func (o *DelegationSigner) GetDigestTypeOk() (*AlgType, bool)`

GetDigestTypeOk returns a tuple with the DigestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigestType

`func (o *DelegationSigner) SetDigestType(v AlgType)`

SetDigestType sets DigestType field to given value.


### GetKeyTag

`func (o *DelegationSigner) GetKeyTag() int64`

GetKeyTag returns the KeyTag field if non-nil, zero value otherwise.

### GetKeyTagOk

`func (o *DelegationSigner) GetKeyTagOk() (*int64, bool)`

GetKeyTagOk returns a tuple with the KeyTag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTag

`func (o *DelegationSigner) SetKeyTag(v int64)`

SetKeyTag sets KeyTag field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


