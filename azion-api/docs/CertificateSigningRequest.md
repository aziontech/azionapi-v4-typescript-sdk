# CertificateSigningRequest

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
**Challenge** | Pointer to **string** | * &#x60;dns&#x60; - Uses DNS to solve the ACME challenge. * &#x60;http&#x60; - Uses HTTP to solve the ACME challenge. | [optional] [readonly] 
**Authority** | Pointer to **string** | * &#x60;lets_encrypt&#x60; - lets_encrypt | [optional] [readonly] 
**KeyAlgorithm** | Pointer to **string** | * &#x60;rsa_2048&#x60; - 2048-bit RSA * &#x60;rsa_4096&#x60; - 4096-bit RSA * &#x60;ecc_384&#x60; - 384-bit Prime Field Curve | [optional] [default to "rsa_2048"]
**Active** | Pointer to **bool** |  | [optional] 
**ProductVersion** | Pointer to **string** |  | [optional] [readonly] 
**LastEditor** | Pointer to **string** |  | [optional] [readonly] 
**CreatedAt** | Pointer to **NullableTime** | Timestamp of the certificate creation on the platform. | [optional] [readonly] 
**LastModified** | Pointer to **time.Time** | Timestamp of the last modification made to the certificate content on the platform. | [optional] [readonly] 
**RenewedAt** | Pointer to **NullableTime** | Timestamp indicating when the managed certificate was renewed on our platform. | [optional] [readonly] 
**CommonName** | **string** |  | 
**AlternativeNames** | Pointer to **[]string** |  | [optional] 
**Country** | **string** |  | 
**State** | **string** |  | 
**Locality** | **string** |  | 
**Organization** | **string** |  | 
**OrganizationUnity** | **string** |  | 
**Email** | **string** |  | 

## Methods

### NewCertificateSigningRequest

`func NewCertificateSigningRequest(name string, commonName string, country string, state string, locality string, organization string, organizationUnity string, email string, ) *CertificateSigningRequest`

NewCertificateSigningRequest instantiates a new CertificateSigningRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateSigningRequestWithDefaults

`func NewCertificateSigningRequestWithDefaults() *CertificateSigningRequest`

NewCertificateSigningRequestWithDefaults instantiates a new CertificateSigningRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificateSigningRequest) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificateSigningRequest) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificateSigningRequest) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *CertificateSigningRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CertificateSigningRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificateSigningRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificateSigningRequest) SetName(v string)`

SetName sets Name field to given value.


### GetCertificate

`func (o *CertificateSigningRequest) GetCertificate() string`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *CertificateSigningRequest) GetCertificateOk() (*string, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *CertificateSigningRequest) SetCertificate(v string)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *CertificateSigningRequest) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### SetCertificateNil

`func (o *CertificateSigningRequest) SetCertificateNil(b bool)`

 SetCertificateNil sets the value for Certificate to be an explicit nil

### UnsetCertificate
`func (o *CertificateSigningRequest) UnsetCertificate()`

UnsetCertificate ensures that no value is present for Certificate, not even an explicit nil
### GetPrivateKey

`func (o *CertificateSigningRequest) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *CertificateSigningRequest) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *CertificateSigningRequest) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *CertificateSigningRequest) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### SetPrivateKeyNil

`func (o *CertificateSigningRequest) SetPrivateKeyNil(b bool)`

 SetPrivateKeyNil sets the value for PrivateKey to be an explicit nil

### UnsetPrivateKey
`func (o *CertificateSigningRequest) UnsetPrivateKey()`

UnsetPrivateKey ensures that no value is present for PrivateKey, not even an explicit nil
### GetIssuer

`func (o *CertificateSigningRequest) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *CertificateSigningRequest) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *CertificateSigningRequest) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.

### HasIssuer

`func (o *CertificateSigningRequest) HasIssuer() bool`

HasIssuer returns a boolean if a field has been set.

### SetIssuerNil

`func (o *CertificateSigningRequest) SetIssuerNil(b bool)`

 SetIssuerNil sets the value for Issuer to be an explicit nil

### UnsetIssuer
`func (o *CertificateSigningRequest) UnsetIssuer()`

UnsetIssuer ensures that no value is present for Issuer, not even an explicit nil
### GetSubjectName

`func (o *CertificateSigningRequest) GetSubjectName() []string`

GetSubjectName returns the SubjectName field if non-nil, zero value otherwise.

### GetSubjectNameOk

`func (o *CertificateSigningRequest) GetSubjectNameOk() (*[]string, bool)`

GetSubjectNameOk returns a tuple with the SubjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectName

`func (o *CertificateSigningRequest) SetSubjectName(v []string)`

SetSubjectName sets SubjectName field to given value.

### HasSubjectName

`func (o *CertificateSigningRequest) HasSubjectName() bool`

HasSubjectName returns a boolean if a field has been set.

### GetValidity

`func (o *CertificateSigningRequest) GetValidity() string`

GetValidity returns the Validity field if non-nil, zero value otherwise.

### GetValidityOk

`func (o *CertificateSigningRequest) GetValidityOk() (*string, bool)`

GetValidityOk returns a tuple with the Validity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidity

`func (o *CertificateSigningRequest) SetValidity(v string)`

SetValidity sets Validity field to given value.

### HasValidity

`func (o *CertificateSigningRequest) HasValidity() bool`

HasValidity returns a boolean if a field has been set.

### SetValidityNil

`func (o *CertificateSigningRequest) SetValidityNil(b bool)`

 SetValidityNil sets the value for Validity to be an explicit nil

### UnsetValidity
`func (o *CertificateSigningRequest) UnsetValidity()`

UnsetValidity ensures that no value is present for Validity, not even an explicit nil
### GetType

`func (o *CertificateSigningRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificateSigningRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificateSigningRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificateSigningRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetManaged

`func (o *CertificateSigningRequest) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *CertificateSigningRequest) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *CertificateSigningRequest) SetManaged(v bool)`

SetManaged sets Managed field to given value.

### HasManaged

`func (o *CertificateSigningRequest) HasManaged() bool`

HasManaged returns a boolean if a field has been set.

### GetStatus

`func (o *CertificateSigningRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CertificateSigningRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CertificateSigningRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CertificateSigningRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDetail

`func (o *CertificateSigningRequest) GetStatusDetail() string`

GetStatusDetail returns the StatusDetail field if non-nil, zero value otherwise.

### GetStatusDetailOk

`func (o *CertificateSigningRequest) GetStatusDetailOk() (*string, bool)`

GetStatusDetailOk returns a tuple with the StatusDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDetail

`func (o *CertificateSigningRequest) SetStatusDetail(v string)`

SetStatusDetail sets StatusDetail field to given value.

### HasStatusDetail

`func (o *CertificateSigningRequest) HasStatusDetail() bool`

HasStatusDetail returns a boolean if a field has been set.

### GetCsr

`func (o *CertificateSigningRequest) GetCsr() string`

GetCsr returns the Csr field if non-nil, zero value otherwise.

### GetCsrOk

`func (o *CertificateSigningRequest) GetCsrOk() (*string, bool)`

GetCsrOk returns a tuple with the Csr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsr

`func (o *CertificateSigningRequest) SetCsr(v string)`

SetCsr sets Csr field to given value.

### HasCsr

`func (o *CertificateSigningRequest) HasCsr() bool`

HasCsr returns a boolean if a field has been set.

### SetCsrNil

`func (o *CertificateSigningRequest) SetCsrNil(b bool)`

 SetCsrNil sets the value for Csr to be an explicit nil

### UnsetCsr
`func (o *CertificateSigningRequest) UnsetCsr()`

UnsetCsr ensures that no value is present for Csr, not even an explicit nil
### GetChallenge

`func (o *CertificateSigningRequest) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *CertificateSigningRequest) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *CertificateSigningRequest) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.

### HasChallenge

`func (o *CertificateSigningRequest) HasChallenge() bool`

HasChallenge returns a boolean if a field has been set.

### GetAuthority

`func (o *CertificateSigningRequest) GetAuthority() string`

GetAuthority returns the Authority field if non-nil, zero value otherwise.

### GetAuthorityOk

`func (o *CertificateSigningRequest) GetAuthorityOk() (*string, bool)`

GetAuthorityOk returns a tuple with the Authority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthority

`func (o *CertificateSigningRequest) SetAuthority(v string)`

SetAuthority sets Authority field to given value.

### HasAuthority

`func (o *CertificateSigningRequest) HasAuthority() bool`

HasAuthority returns a boolean if a field has been set.

### GetKeyAlgorithm

`func (o *CertificateSigningRequest) GetKeyAlgorithm() string`

GetKeyAlgorithm returns the KeyAlgorithm field if non-nil, zero value otherwise.

### GetKeyAlgorithmOk

`func (o *CertificateSigningRequest) GetKeyAlgorithmOk() (*string, bool)`

GetKeyAlgorithmOk returns a tuple with the KeyAlgorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyAlgorithm

`func (o *CertificateSigningRequest) SetKeyAlgorithm(v string)`

SetKeyAlgorithm sets KeyAlgorithm field to given value.

### HasKeyAlgorithm

`func (o *CertificateSigningRequest) HasKeyAlgorithm() bool`

HasKeyAlgorithm returns a boolean if a field has been set.

### GetActive

`func (o *CertificateSigningRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CertificateSigningRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CertificateSigningRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CertificateSigningRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProductVersion

`func (o *CertificateSigningRequest) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *CertificateSigningRequest) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *CertificateSigningRequest) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.

### HasProductVersion

`func (o *CertificateSigningRequest) HasProductVersion() bool`

HasProductVersion returns a boolean if a field has been set.

### GetLastEditor

`func (o *CertificateSigningRequest) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *CertificateSigningRequest) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *CertificateSigningRequest) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.

### HasLastEditor

`func (o *CertificateSigningRequest) HasLastEditor() bool`

HasLastEditor returns a boolean if a field has been set.

### GetCreatedAt

`func (o *CertificateSigningRequest) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CertificateSigningRequest) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CertificateSigningRequest) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CertificateSigningRequest) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *CertificateSigningRequest) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *CertificateSigningRequest) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetLastModified

`func (o *CertificateSigningRequest) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *CertificateSigningRequest) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *CertificateSigningRequest) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *CertificateSigningRequest) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetRenewedAt

`func (o *CertificateSigningRequest) GetRenewedAt() time.Time`

GetRenewedAt returns the RenewedAt field if non-nil, zero value otherwise.

### GetRenewedAtOk

`func (o *CertificateSigningRequest) GetRenewedAtOk() (*time.Time, bool)`

GetRenewedAtOk returns a tuple with the RenewedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewedAt

`func (o *CertificateSigningRequest) SetRenewedAt(v time.Time)`

SetRenewedAt sets RenewedAt field to given value.

### HasRenewedAt

`func (o *CertificateSigningRequest) HasRenewedAt() bool`

HasRenewedAt returns a boolean if a field has been set.

### SetRenewedAtNil

`func (o *CertificateSigningRequest) SetRenewedAtNil(b bool)`

 SetRenewedAtNil sets the value for RenewedAt to be an explicit nil

### UnsetRenewedAt
`func (o *CertificateSigningRequest) UnsetRenewedAt()`

UnsetRenewedAt ensures that no value is present for RenewedAt, not even an explicit nil
### GetCommonName

`func (o *CertificateSigningRequest) GetCommonName() string`

GetCommonName returns the CommonName field if non-nil, zero value otherwise.

### GetCommonNameOk

`func (o *CertificateSigningRequest) GetCommonNameOk() (*string, bool)`

GetCommonNameOk returns a tuple with the CommonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommonName

`func (o *CertificateSigningRequest) SetCommonName(v string)`

SetCommonName sets CommonName field to given value.


### GetAlternativeNames

`func (o *CertificateSigningRequest) GetAlternativeNames() []string`

GetAlternativeNames returns the AlternativeNames field if non-nil, zero value otherwise.

### GetAlternativeNamesOk

`func (o *CertificateSigningRequest) GetAlternativeNamesOk() (*[]string, bool)`

GetAlternativeNamesOk returns a tuple with the AlternativeNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternativeNames

`func (o *CertificateSigningRequest) SetAlternativeNames(v []string)`

SetAlternativeNames sets AlternativeNames field to given value.

### HasAlternativeNames

`func (o *CertificateSigningRequest) HasAlternativeNames() bool`

HasAlternativeNames returns a boolean if a field has been set.

### GetCountry

`func (o *CertificateSigningRequest) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *CertificateSigningRequest) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *CertificateSigningRequest) SetCountry(v string)`

SetCountry sets Country field to given value.


### GetState

`func (o *CertificateSigningRequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CertificateSigningRequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CertificateSigningRequest) SetState(v string)`

SetState sets State field to given value.


### GetLocality

`func (o *CertificateSigningRequest) GetLocality() string`

GetLocality returns the Locality field if non-nil, zero value otherwise.

### GetLocalityOk

`func (o *CertificateSigningRequest) GetLocalityOk() (*string, bool)`

GetLocalityOk returns a tuple with the Locality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocality

`func (o *CertificateSigningRequest) SetLocality(v string)`

SetLocality sets Locality field to given value.


### GetOrganization

`func (o *CertificateSigningRequest) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *CertificateSigningRequest) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *CertificateSigningRequest) SetOrganization(v string)`

SetOrganization sets Organization field to given value.


### GetOrganizationUnity

`func (o *CertificateSigningRequest) GetOrganizationUnity() string`

GetOrganizationUnity returns the OrganizationUnity field if non-nil, zero value otherwise.

### GetOrganizationUnityOk

`func (o *CertificateSigningRequest) GetOrganizationUnityOk() (*string, bool)`

GetOrganizationUnityOk returns a tuple with the OrganizationUnity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUnity

`func (o *CertificateSigningRequest) SetOrganizationUnity(v string)`

SetOrganizationUnity sets OrganizationUnity field to given value.


### GetEmail

`func (o *CertificateSigningRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CertificateSigningRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CertificateSigningRequest) SetEmail(v string)`

SetEmail sets Email field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


