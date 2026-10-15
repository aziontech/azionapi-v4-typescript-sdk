# TLSWorkload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Certificate** | Pointer to **NullableInt64** |  | [optional] 
**Ciphers** | Pointer to [**CiphersEnum**](CiphersEnum.md) | Allow to configure which set of ciphers will be used when TLS ciphers negotiation.  * &#x60;1&#x60; - TLSv1.2_2018 - TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-SHA384:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256 * &#x60;2&#x60; - TLSv1.2_2019 - ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:TLS_AES_128_GCM_SHA256 * &#x60;3&#x60; - TLSv1.3_2022 - ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-GCM-SHA256 * &#x60;4&#x60; - TLSv1.2_2021 - ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:TLS_AES_128_GCM_SHA256 * &#x60;5&#x60; - Legacy_v2025Q1 - TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:AES128-SHA256:AES256-SHA:AES128-SHA * &#x60;6&#x60; - Compatible_v2025Q1 - TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256 * &#x60;7&#x60; - Modern_v2025Q1 - TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-CHACHA20-POLY1305 * &#x60;8&#x60; - Legacy_v2017Q1 - AES128-CCM:AES128-CCM8:AES128-GCM-SHA256:AES128-SHA:AES128-SHA256:AES256-CCM:AES256-CCM8:AES256-GCM-SHA384:AES256-SHA:AES256-SHA256:ECDHE-ECDSA-AES128-CCM:ECDHE-ECDSA-AES128-CCM8:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA256:ECDHE-ECDSA-AES256-CCM:ECDHE-ECDSA-AES256-CCM8:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384:TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256 | [optional] 
**MinimumVersion** | Pointer to [**NullableMinimumVersionEnum**](MinimumVersionEnum.md) |  | [optional] 

## Methods

### NewTLSWorkload

`func NewTLSWorkload() *TLSWorkload`

NewTLSWorkload instantiates a new TLSWorkload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTLSWorkloadWithDefaults

`func NewTLSWorkloadWithDefaults() *TLSWorkload`

NewTLSWorkloadWithDefaults instantiates a new TLSWorkload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificate

`func (o *TLSWorkload) GetCertificate() int64`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *TLSWorkload) GetCertificateOk() (*int64, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *TLSWorkload) SetCertificate(v int64)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *TLSWorkload) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### SetCertificateNil

`func (o *TLSWorkload) SetCertificateNil(b bool)`

 SetCertificateNil sets the value for Certificate to be an explicit nil

### UnsetCertificate
`func (o *TLSWorkload) UnsetCertificate()`

UnsetCertificate ensures that no value is present for Certificate, not even an explicit nil
### GetCiphers

`func (o *TLSWorkload) GetCiphers() CiphersEnum`

GetCiphers returns the Ciphers field if non-nil, zero value otherwise.

### GetCiphersOk

`func (o *TLSWorkload) GetCiphersOk() (*CiphersEnum, bool)`

GetCiphersOk returns a tuple with the Ciphers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCiphers

`func (o *TLSWorkload) SetCiphers(v CiphersEnum)`

SetCiphers sets Ciphers field to given value.

### HasCiphers

`func (o *TLSWorkload) HasCiphers() bool`

HasCiphers returns a boolean if a field has been set.

### GetMinimumVersion

`func (o *TLSWorkload) GetMinimumVersion() MinimumVersionEnum`

GetMinimumVersion returns the MinimumVersion field if non-nil, zero value otherwise.

### GetMinimumVersionOk

`func (o *TLSWorkload) GetMinimumVersionOk() (*MinimumVersionEnum, bool)`

GetMinimumVersionOk returns a tuple with the MinimumVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumVersion

`func (o *TLSWorkload) SetMinimumVersion(v MinimumVersionEnum)`

SetMinimumVersion sets MinimumVersion field to given value.

### HasMinimumVersion

`func (o *TLSWorkload) HasMinimumVersion() bool`

HasMinimumVersion returns a boolean if a field has been set.

### SetMinimumVersionNil

`func (o *TLSWorkload) SetMinimumVersionNil(b bool)`

 SetMinimumVersionNil sets the value for MinimumVersion to be an explicit nil

### UnsetMinimumVersion
`func (o *TLSWorkload) UnsetMinimumVersion()`

UnsetMinimumVersion ensures that no value is present for MinimumVersion, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


