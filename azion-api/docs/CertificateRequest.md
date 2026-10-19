# CertificateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] [readonly] 
**Name** | **string** |  | 
**Certificate** | Pointer to **NullableString** |  | [optional] 
**PrivateKey** | Pointer to **NullableString** |  | [optional] 
**Issuer** | Pointer to **NullableString** |  | [optional] [readonly] 
**SubjectName** | Pointer to **[]string** |  | [optional] [readonly] 
**Validity** | Pointer to **NullableString** |  | [optional] [readonly] 
**Type** | Pointer to **string** | The value can&#39;t be changed after the certificate creation.  * &#x60;certificate&#x60; - Certificate * &#x60;trusted_ca_certificate&#x60; - Trusted CA Certificate | [optional] [default to "certificate"]
**Managed** | Pointer to **bool** |  | [optional] [readonly] [default to false]
**Status** | Pointer to **string** | * &#x60;pending&#x60; - Pending * &#x60;challenge_verification&#x60; - Challenge Verification * &#x60;active&#x60; - Active * &#x60;inactive&#x60; - Inactive * &#x60;expired&#x60; - Expired * &#x60;failed&#x60; - Failed | [optional] [readonly] 
**StatusDetail** | Pointer to **string** |  | [optional] [readonly] [default to ""]
**Csr** | Pointer to **NullableString** |  | [optional] [readonly] 
**Challenge** | **string** | * &#x60;dns&#x60; - Uses DNS to solve the ACME challenge. * &#x60;http&#x60; - Uses HTTP to solve the ACME challenge. | 
**Authority** | **string** | * &#x60;lets_encrypt&#x60; - lets_encrypt | 
**KeyAlgorithm** | Pointer to **string** | * &#x60;rsa_2048&#x60; - 2048-bit RSA * &#x60;rsa_4096&#x60; - 4096-bit RSA * &#x60;ecc_384&#x60; - 384-bit Prime Field Curve | [optional] [default to "ecc_384"]
**Active** | Pointer to **bool** |  | [optional] 
**ProductVersion** | Pointer to **string** |  | [optional] [readonly] 
**LastEditor** | Pointer to **string** |  | [optional] [readonly] 
**CreatedAt** | Pointer to **NullableTime** | Timestamp of the certificate creation on the platform. | [optional] [readonly] 
**LastModified** | Pointer to **time.Time** | Timestamp of the last modification made to the certificate content on the platform. | [optional] [readonly] 
**RenewedAt** | Pointer to **NullableTime** | Timestamp indicating when the managed certificate was renewed on our platform. | [optional] [readonly] 
**CommonName** | **string** |  | 
**AlternativeNames** | Pointer to **[]string** |  | [optional] 
**SourceCertificate** | Pointer to **NullableInt64** |  | [optional] 

## Methods

### NewCertificateRequest

`func NewCertificateRequest(name string, challenge string, authority string, commonName string, ) *CertificateRequest`

NewCertificateRequest instantiates a new CertificateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateRequestWithDefaults

`func NewCertificateRequestWithDefaults() *CertificateRequest`

NewCertificateRequestWithDefaults instantiates a new CertificateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificateRequest) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificateRequest) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificateRequest) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *CertificateRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CertificateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetCertificate

`func (o *CertificateRequest) GetCertificate() string`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *CertificateRequest) GetCertificateOk() (*string, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *CertificateRequest) SetCertificate(v string)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *CertificateRequest) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### SetCertificateNil

`func (o *CertificateRequest) SetCertificateNil(b bool)`

 SetCertificateNil sets the value for Certificate to be an explicit nil

### UnsetCertificate
`func (o *CertificateRequest) UnsetCertificate()`

UnsetCertificate ensures that no value is present for Certificate, not even an explicit nil
### GetPrivateKey

`func (o *CertificateRequest) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *CertificateRequest) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *CertificateRequest) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *CertificateRequest) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### SetPrivateKeyNil

`func (o *CertificateRequest) SetPrivateKeyNil(b bool)`

 SetPrivateKeyNil sets the value for PrivateKey to be an explicit nil

### UnsetPrivateKey
`func (o *CertificateRequest) UnsetPrivateKey()`

UnsetPrivateKey ensures that no value is present for PrivateKey, not even an explicit nil
### GetIssuer

`func (o *CertificateRequest) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *CertificateRequest) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *CertificateRequest) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.

### HasIssuer

`func (o *CertificateRequest) HasIssuer() bool`

HasIssuer returns a boolean if a field has been set.

### SetIssuerNil

`func (o *CertificateRequest) SetIssuerNil(b bool)`

 SetIssuerNil sets the value for Issuer to be an explicit nil

### UnsetIssuer
`func (o *CertificateRequest) UnsetIssuer()`

UnsetIssuer ensures that no value is present for Issuer, not even an explicit nil
### GetSubjectName

`func (o *CertificateRequest) GetSubjectName() []string`

GetSubjectName returns the SubjectName field if non-nil, zero value otherwise.

### GetSubjectNameOk

`func (o *CertificateRequest) GetSubjectNameOk() (*[]string, bool)`

GetSubjectNameOk returns a tuple with the SubjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectName

`func (o *CertificateRequest) SetSubjectName(v []string)`

SetSubjectName sets SubjectName field to given value.

### HasSubjectName

`func (o *CertificateRequest) HasSubjectName() bool`

HasSubjectName returns a boolean if a field has been set.

### GetValidity

`func (o *CertificateRequest) GetValidity() string`

GetValidity returns the Validity field if non-nil, zero value otherwise.

### GetValidityOk

`func (o *CertificateRequest) GetValidityOk() (*string, bool)`

GetValidityOk returns a tuple with the Validity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidity

`func (o *CertificateRequest) SetValidity(v string)`

SetValidity sets Validity field to given value.

### HasValidity

`func (o *CertificateRequest) HasValidity() bool`

HasValidity returns a boolean if a field has been set.

### SetValidityNil

`func (o *CertificateRequest) SetValidityNil(b bool)`

 SetValidityNil sets the value for Validity to be an explicit nil

### UnsetValidity
`func (o *CertificateRequest) UnsetValidity()`

UnsetValidity ensures that no value is present for Validity, not even an explicit nil
### GetType

`func (o *CertificateRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificateRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificateRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificateRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetManaged

`func (o *CertificateRequest) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *CertificateRequest) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *CertificateRequest) SetManaged(v bool)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *CertificateRequest) HasManaged() bool`

HasManaged returns a boolean if a field has been set.

### GetStatus

`func (o *CertificateRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CertificateRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CertificateRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CertificateRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDetail

`func (o *CertificateRequest) GetStatusDetail() string`

GetStatusDetail returns the StatusDetail field if non-nil, zero value otherwise.

### GetStatusDetailOk

`func (o *CertificateRequest) GetStatusDetailOk() (*string, bool)`

GetStatusDetailOk returns a tuple with the StatusDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDetail

`func (o *CertificateRequest) SetStatusDetail(v string)`

SetStatusDetail sets StatusDetail field to given value.

### HasStatusDetail

`func (o *CertificateRequest) HasStatusDetail() bool`

HasStatusDetail returns a boolean if a field has been set.

### GetCsr

`func (o *CertificateRequest) GetCsr() string`

GetCsr returns the Csr field if non-nil, zero value otherwise.

### GetCsrOk

`func (o *CertificateRequest) GetCsrOk() (*string, bool)`

GetCsrOk returns a tuple with the Csr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsr

`func (o *CertificateRequest) SetCsr(v string)`

SetCsr sets Csr field to given value.

### HasCsr

`func (o *CertificateRequest) HasCsr() bool`

HasCsr returns a boolean if a field has been set.

### SetCsrNil

`func (o *CertificateRequest) SetCsrNil(b bool)`

 SetCsrNil sets the value for Csr to be an explicit nil

### UnsetCsr
`func (o *CertificateRequest) UnsetCsr()`

UnsetCsr ensures that no value is present for Csr, not even an explicit nil
### GetChallenge

`func (o *CertificateRequest) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *CertificateRequest) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *CertificateRequest) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.


### GetAuthority

`func (o *CertificateRequest) GetAuthority() string`

GetAuthority returns the Authority field if non-nil, zero value otherwise.

### GetAuthorityOk

`func (o *CertificateRequest) GetAuthorityOk() (*string, bool)`

GetAuthorityOk returns a tuple with the Authority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthority

`func (o *CertificateRequest) SetAuthority(v string)`

SetAuthority sets Authority field to given value.


### GetKeyAlgorithm

`func (o *CertificateRequest) GetKeyAlgorithm() string`

GetKeyAlgorithm returns the KeyAlgorithm field if non-nil, zero value otherwise.

### GetKeyAlgorithmOk

`func (o *CertificateRequest) GetKeyAlgorithmOk() (*string, bool)`

GetKeyAlgorithmOk returns a tuple with the KeyAlgorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyAlgorithm

`func (o *CertificateRequest) SetKeyAlgorithm(v string)`

SetKeyAlgorithm sets KeyAlgorithm field to given value.

### HasKeyAlgorithm

`func (o *CertificateRequest) HasKeyAlgorithm() bool`

HasKeyAlgorithm returns a boolean if a field has been set.

### GetActive

`func (o *CertificateRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CertificateRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CertificateRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CertificateRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProductVersion

`func (o *CertificateRequest) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *CertificateRequest) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *CertificateRequest) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.

### HasProductVersion

`func (o *CertificateRequest) HasProductVersion() bool`

HasProductVersion returns a boolean if a field has been set.

### GetLastEditor

`func (o *CertificateRequest) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *CertificateRequest) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *CertificateRequest) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.

### HasLastEditor

`func (o *CertificateRequest) HasLastEditor() bool`

HasLastEditor returns a boolean if a field has been set.

### GetCreatedAt

`func (o *CertificateRequest) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CertificateRequest) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CertificateRequest) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CertificateRequest) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *CertificateRequest) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *CertificateRequest) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetLastModified

`func (o *CertificateRequest) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *CertificateRequest) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *CertificateRequest) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *CertificateRequest) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetRenewedAt

`func (o *CertificateRequest) GetRenewedAt() time.Time`

GetRenewedAt returns the RenewedAt field if non-nil, zero value otherwise.

### GetRenewedAtOk

`func (o *CertificateRequest) GetRenewedAtOk() (*time.Time, bool)`

GetRenewedAtOk returns a tuple with the RenewedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewedAt

`func (o *CertificateRequest) SetRenewedAt(v time.Time)`

SetRenewedAt sets RenewedAt field to given value.

### HasRenewedAt

`func (o *CertificateRequest) HasRenewedAt() bool`

HasRenewedAt returns a boolean if a field has been set.

### SetRenewedAtNil

`func (o *CertificateRequest) SetRenewedAtNil(b bool)`

 SetRenewedAtNil sets the value for RenewedAt to be an explicit nil

### UnsetRenewedAt
`func (o *CertificateRequest) UnsetRenewedAt()`

UnsetRenewedAt ensures that no value is present for RenewedAt, not even an explicit nil
### GetCommonName

`func (o *CertificateRequest) GetCommonName() string`

GetCommonName returns the CommonName field if non-nil, zero value otherwise.

### GetCommonNameOk

`func (o *CertificateRequest) GetCommonNameOk() (*string, bool)`

GetCommonNameOk returns a tuple with the CommonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommonName

`func (o *CertificateRequest) SetCommonName(v string)`

SetCommonName sets CommonName field to given value.


### GetAlternativeNames

`func (o *CertificateRequest) GetAlternativeNames() []string`

GetAlternativeNames returns the AlternativeNames field if non-nil, zero value otherwise.

### GetAlternativeNamesOk

`func (o *CertificateRequest) GetAlternativeNamesOk() (*[]string, bool)`

GetAlternativeNamesOk returns a tuple with the AlternativeNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternativeNames

`func (o *CertificateRequest) SetAlternativeNames(v []string)`

SetAlternativeNames sets AlternativeNames field to given value.

### HasAlternativeNames

`func (o *CertificateRequest) HasAlternativeNames() bool`

HasAlternativeNames returns a boolean if a field has been set.

### GetSourceCertificate

`func (o *CertificateRequest) GetSourceCertificate() int64`

GetSourceCertificate returns the SourceCertificate field if non-nil, zero value otherwise.

### GetSourceCertificateOk

`func (o *CertificateRequest) GetSourceCertificateOk() (*int64, bool)`

GetSourceCertificateOk returns a tuple with the SourceCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCertificate

`func (o *CertificateRequest) SetSourceCertificate(v int64)`

SetSourceCertificate sets SourceCertificate field to given value.

### HasSourceCertificate

`func (o *CertificateRequest) HasSourceCertificate() bool`

HasSourceCertificate returns a boolean if a field has been set.

### SetSourceCertificateNil

`func (o *CertificateRequest) SetSourceCertificateNil(b bool)`

 SetSourceCertificateNil sets the value for SourceCertificate to be an explicit nil

### UnsetSourceCertificate
`func (o *CertificateRequest) UnsetSourceCertificate()`

UnsetSourceCertificate ensures that no value is present for SourceCertificate, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


