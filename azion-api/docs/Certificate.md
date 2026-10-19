# Certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Certificate** | Pointer to **NullableString** |  | [optional] 
**PrivateKey** | Pointer to **NullableString** |  | [optional] 
**Issuer** | **NullableString** |  | [readonly] 
**SubjectName** | **[]string** |  | [readonly] 
**Validity** | **NullableString** |  | [readonly] 
**Type** | Pointer to **string** | The value can&#39;t be changed after the certificate creation.  * &#x60;certificate&#x60; - Certificate * &#x60;trusted_ca_certificate&#x60; - Trusted CA Certificate | [optional] [default to "certificate"]
**Managed** | **bool** |  | [readonly] [default to false]
**Status** | **string** | * &#x60;pending&#x60; - Pending * &#x60;challenge_verification&#x60; - Challenge Verification * &#x60;active&#x60; - Active * &#x60;inactive&#x60; - Inactive * &#x60;expired&#x60; - Expired * &#x60;failed&#x60; - Failed | [readonly] 
**StatusDetail** | **string** |  | [readonly] [default to ""]
**Csr** | **NullableString** |  | [readonly] 
**Challenge** | **string** | * &#x60;dns&#x60; - Uses DNS to solve the ACME challenge. * &#x60;http&#x60; - Uses HTTP to solve the ACME challenge. | [readonly] 
**Authority** | **string** | * &#x60;lets_encrypt&#x60; - lets_encrypt | [readonly] 
**KeyAlgorithm** | **string** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] 
**ProductVersion** | **string** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**CreatedAt** | **NullableTime** | Timestamp of the certificate creation on the platform. | [readonly] 
**LastModified** | **time.Time** | Timestamp of the last modification made to the certificate content on the platform. | [readonly] 
**RenewedAt** | **NullableTime** | Timestamp indicating when the managed certificate was renewed on our platform. | [readonly] 

## Methods

### NewCertificate

`func NewCertificate(id int64, name string, issuer NullableString, subjectName []string, validity NullableString, managed bool, status string, statusDetail string, csr NullableString, challenge string, authority string, keyAlgorithm string, productVersion string, lastEditor string, createdAt NullableTime, lastModified time.Time, renewedAt NullableTime, ) *Certificate`

NewCertificate instantiates a new Certificate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateWithDefaults

`func NewCertificateWithDefaults() *Certificate`

NewCertificateWithDefaults instantiates a new Certificate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certificate) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certificate) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certificate) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Certificate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certificate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certificate) SetName(v string)`

SetName sets Name field to given value.


### GetCertificate

`func (o *Certificate) GetCertificate() string`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *Certificate) GetCertificateOk() (*string, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *Certificate) SetCertificate(v string)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *Certificate) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### SetCertificateNil

`func (o *Certificate) SetCertificateNil(b bool)`

 SetCertificateNil sets the value for Certificate to be an explicit nil

### UnsetCertificate
`func (o *Certificate) UnsetCertificate()`

UnsetCertificate ensures that no value is present for Certificate, not even an explicit nil
### GetPrivateKey

`func (o *Certificate) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *Certificate) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *Certificate) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *Certificate) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### SetPrivateKeyNil

`func (o *Certificate) SetPrivateKeyNil(b bool)`

 SetPrivateKeyNil sets the value for PrivateKey to be an explicit nil

### UnsetPrivateKey
`func (o *Certificate) UnsetPrivateKey()`

UnsetPrivateKey ensures that no value is present for PrivateKey, not even an explicit nil
### GetIssuer

`func (o *Certificate) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *Certificate) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *Certificate) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.


### SetIssuerNil

`func (o *Certificate) SetIssuerNil(b bool)`

 SetIssuerNil sets the value for Issuer to be an explicit nil

### UnsetIssuer
`func (o *Certificate) UnsetIssuer()`

UnsetIssuer ensures that no value is present for Issuer, not even an explicit nil
### GetSubjectName

`func (o *Certificate) GetSubjectName() []string`

GetSubjectName returns the SubjectName field if non-nil, zero value otherwise.

### GetSubjectNameOk

`func (o *Certificate) GetSubjectNameOk() (*[]string, bool)`

GetSubjectNameOk returns a tuple with the SubjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubjectName

`func (o *Certificate) SetSubjectName(v []string)`

SetSubjectName sets SubjectName field to given value.


### GetValidity

`func (o *Certificate) GetValidity() string`

GetValidity returns the Validity field if non-nil, zero value otherwise.

### GetValidityOk

`func (o *Certificate) GetValidityOk() (*string, bool)`

GetValidityOk returns a tuple with the Validity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidity

`func (o *Certificate) SetValidity(v string)`

SetValidity sets Validity field to given value.


### SetValidityNil

`func (o *Certificate) SetValidityNil(b bool)`

 SetValidityNil sets the value for Validity to be an explicit nil

### UnsetValidity
`func (o *Certificate) UnsetValidity()`

UnsetValidity ensures that no value is present for Validity, not even an explicit nil
### GetType

`func (o *Certificate) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Certificate) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Certificate) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Certificate) HasType() bool`

HasType returns a boolean if a field has been set.

### GetManaged

`func (o *Certificate) GetManaged() bool`

GetManaged returns the Managed field if non-nil, zero value otherwise.

### GetManagedOk

`func (o *Certificate) GetManagedOk() (*bool, bool)`

GetManagedOk returns a tuple with the Managed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManaged

`func (o *Certificate) SetManaged(v bool)`

SetManaged sets Managed field to given value.


### GetStatus

`func (o *Certificate) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Certificate) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Certificate) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStatusDetail

`func (o *Certificate) GetStatusDetail() string`

GetStatusDetail returns the StatusDetail field if non-nil, zero value otherwise.

### GetStatusDetailOk

`func (o *Certificate) GetStatusDetailOk() (*string, bool)`

GetStatusDetailOk returns a tuple with the StatusDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDetail

`func (o *Certificate) SetStatusDetail(v string)`

SetStatusDetail sets StatusDetail field to given value.


### GetCsr

`func (o *Certificate) GetCsr() string`

GetCsr returns the Csr field if non-nil, zero value otherwise.

### GetCsrOk

`func (o *Certificate) GetCsrOk() (*string, bool)`

GetCsrOk returns a tuple with the Csr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsr

`func (o *Certificate) SetCsr(v string)`

SetCsr sets Csr field to given value.


### SetCsrNil

`func (o *Certificate) SetCsrNil(b bool)`

 SetCsrNil sets the value for Csr to be an explicit nil

### UnsetCsr
`func (o *Certificate) UnsetCsr()`

UnsetCsr ensures that no value is present for Csr, not even an explicit nil
### GetChallenge

`func (o *Certificate) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *Certificate) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *Certificate) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.


### GetAuthority

`func (o *Certificate) GetAuthority() string`

GetAuthority returns the Authority field if non-nil, zero value otherwise.

### GetAuthorityOk

`func (o *Certificate) GetAuthorityOk() (*string, bool)`

GetAuthorityOk returns a tuple with the Authority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthority

`func (o *Certificate) SetAuthority(v string)`

SetAuthority sets Authority field to given value.


### GetKeyAlgorithm

`func (o *Certificate) GetKeyAlgorithm() string`

GetKeyAlgorithm returns the KeyAlgorithm field if non-nil, zero value otherwise.

### GetKeyAlgorithmOk

`func (o *Certificate) GetKeyAlgorithmOk() (*string, bool)`

GetKeyAlgorithmOk returns a tuple with the KeyAlgorithm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyAlgorithm

`func (o *Certificate) SetKeyAlgorithm(v string)`

SetKeyAlgorithm sets KeyAlgorithm field to given value.


### GetActive

`func (o *Certificate) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Certificate) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Certificate) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Certificate) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProductVersion

`func (o *Certificate) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *Certificate) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *Certificate) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetLastEditor

`func (o *Certificate) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Certificate) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Certificate) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetCreatedAt

`func (o *Certificate) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Certificate) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Certificate) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *Certificate) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *Certificate) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetLastModified

`func (o *Certificate) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Certificate) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Certificate) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetRenewedAt

`func (o *Certificate) GetRenewedAt() time.Time`

GetRenewedAt returns the RenewedAt field if non-nil, zero value otherwise.

### GetRenewedAtOk

`func (o *Certificate) GetRenewedAtOk() (*time.Time, bool)`

GetRenewedAtOk returns a tuple with the RenewedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewedAt

`func (o *Certificate) SetRenewedAt(v time.Time)`

SetRenewedAt sets RenewedAt field to given value.


### SetRenewedAtNil

`func (o *Certificate) SetRenewedAtNil(b bool)`

 SetRenewedAtNil sets the value for RenewedAt to be an explicit nil

### UnsetRenewedAt
`func (o *Certificate) UnsetRenewedAt()`

UnsetRenewedAt ensures that no value is present for RenewedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


