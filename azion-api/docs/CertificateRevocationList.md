# CertificateRevocationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Active** | Pointer to **bool** | Indicates if the certificate revocation list is active. This field cannot be set to false. | [optional] [default to true]
**LastEditor** | **string** |  | [readonly] 
**CreatedAt** | **NullableTime** | Timestamp of the certificate revocation list creation on the platform. | [readonly] 
**LastModified** | **time.Time** | Timestamp of the last modification made to the certificate content on the platform. | [readonly] 
**ProductVersion** | **string** |  | [readonly] 
**Issuer** | **string** |  | [readonly] 
**LastUpdate** | **time.Time** | Timestamp of the last update issued by the certification revocation list issuer. | [readonly] 
**NextUpdate** | **time.Time** | Timestamp of the next scheduled update from the certification revocation list issuer. | [readonly] 
**Crl** | **string** |  | 

## Methods

### NewCertificateRevocationList

`func NewCertificateRevocationList(id int64, name string, lastEditor string, createdAt NullableTime, lastModified time.Time, productVersion string, issuer string, lastUpdate time.Time, nextUpdate time.Time, crl string, ) *CertificateRevocationList`

NewCertificateRevocationList instantiates a new CertificateRevocationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateRevocationListWithDefaults

`func NewCertificateRevocationListWithDefaults() *CertificateRevocationList`

NewCertificateRevocationListWithDefaults instantiates a new CertificateRevocationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificateRevocationList) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificateRevocationList) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificateRevocationList) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *CertificateRevocationList) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificateRevocationList) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificateRevocationList) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *CertificateRevocationList) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CertificateRevocationList) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CertificateRevocationList) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CertificateRevocationList) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *CertificateRevocationList) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *CertificateRevocationList) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *CertificateRevocationList) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetCreatedAt

`func (o *CertificateRevocationList) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CertificateRevocationList) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CertificateRevocationList) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *CertificateRevocationList) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *CertificateRevocationList) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetLastModified

`func (o *CertificateRevocationList) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *CertificateRevocationList) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *CertificateRevocationList) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetProductVersion

`func (o *CertificateRevocationList) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *CertificateRevocationList) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *CertificateRevocationList) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.


### GetIssuer

`func (o *CertificateRevocationList) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *CertificateRevocationList) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *CertificateRevocationList) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.


### GetLastUpdate

`func (o *CertificateRevocationList) GetLastUpdate() time.Time`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *CertificateRevocationList) GetLastUpdateOk() (*time.Time, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *CertificateRevocationList) SetLastUpdate(v time.Time)`

SetLastUpdate sets LastUpdate field to given value.


### GetNextUpdate

`func (o *CertificateRevocationList) GetNextUpdate() time.Time`

GetNextUpdate returns the NextUpdate field if non-nil, zero value otherwise.

### GetNextUpdateOk

`func (o *CertificateRevocationList) GetNextUpdateOk() (*time.Time, bool)`

GetNextUpdateOk returns a tuple with the NextUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextUpdate

`func (o *CertificateRevocationList) SetNextUpdate(v time.Time)`

SetNextUpdate sets NextUpdate field to given value.


### GetCrl

`func (o *CertificateRevocationList) GetCrl() string`

GetCrl returns the Crl field if non-nil, zero value otherwise.

### GetCrlOk

`func (o *CertificateRevocationList) GetCrlOk() (*string, bool)`

GetCrlOk returns a tuple with the Crl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrl

`func (o *CertificateRevocationList) SetCrl(v string)`

SetCrl sets Crl field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


