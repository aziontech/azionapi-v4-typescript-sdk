# PatchedCertificateRevocationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** | Indicates if the certificate revocation list is active. This field cannot be set to false. | [optional] [default to true]
**LastEditor** | Pointer to **string** |  | [optional] [readonly] 
**CreatedAt** | Pointer to **NullableTime** | Timestamp of the certificate revocation list creation on the platform. | [optional] [readonly] 
**LastModified** | Pointer to **time.Time** | Timestamp of the last modification made to the certificate content on the platform. | [optional] [readonly] 
**ProductVersion** | Pointer to **string** |  | [optional] [readonly] 
**Issuer** | Pointer to **string** |  | [optional] [readonly] 
**LastUpdate** | Pointer to **time.Time** | Timestamp of the last update issued by the certification revocation list issuer. | [optional] [readonly] 
**NextUpdate** | Pointer to **time.Time** | Timestamp of the next scheduled update from the certification revocation list issuer. | [optional] [readonly] 
**Crl** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedCertificateRevocationList

`func NewPatchedCertificateRevocationList() *PatchedCertificateRevocationList`

NewPatchedCertificateRevocationList instantiates a new PatchedCertificateRevocationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedCertificateRevocationListWithDefaults

`func NewPatchedCertificateRevocationListWithDefaults() *PatchedCertificateRevocationList`

NewPatchedCertificateRevocationListWithDefaults instantiates a new PatchedCertificateRevocationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PatchedCertificateRevocationList) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PatchedCertificateRevocationList) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PatchedCertificateRevocationList) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *PatchedCertificateRevocationList) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PatchedCertificateRevocationList) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedCertificateRevocationList) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedCertificateRevocationList) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedCertificateRevocationList) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedCertificateRevocationList) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedCertificateRevocationList) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedCertificateRevocationList) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedCertificateRevocationList) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *PatchedCertificateRevocationList) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *PatchedCertificateRevocationList) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *PatchedCertificateRevocationList) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.

### HasLastEditor

`func (o *PatchedCertificateRevocationList) HasLastEditor() bool`

HasLastEditor returns a boolean if a field has been set.

### GetCreatedAt

`func (o *PatchedCertificateRevocationList) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PatchedCertificateRevocationList) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PatchedCertificateRevocationList) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *PatchedCertificateRevocationList) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *PatchedCertificateRevocationList) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *PatchedCertificateRevocationList) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetLastModified

`func (o *PatchedCertificateRevocationList) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *PatchedCertificateRevocationList) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *PatchedCertificateRevocationList) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *PatchedCertificateRevocationList) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetProductVersion

`func (o *PatchedCertificateRevocationList) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *PatchedCertificateRevocationList) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *PatchedCertificateRevocationList) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.

### HasProductVersion

`func (o *PatchedCertificateRevocationList) HasProductVersion() bool`

HasProductVersion returns a boolean if a field has been set.

### GetIssuer

`func (o *PatchedCertificateRevocationList) GetIssuer() string`

GetIssuer returns the Issuer field if non-nil, zero value otherwise.

### GetIssuerOk

`func (o *PatchedCertificateRevocationList) GetIssuerOk() (*string, bool)`

GetIssuerOk returns a tuple with the Issuer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuer

`func (o *PatchedCertificateRevocationList) SetIssuer(v string)`

SetIssuer sets Issuer field to given value.

### HasIssuer

`func (o *PatchedCertificateRevocationList) HasIssuer() bool`

HasIssuer returns a boolean if a field has been set.

### GetLastUpdate

`func (o *PatchedCertificateRevocationList) GetLastUpdate() time.Time`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *PatchedCertificateRevocationList) GetLastUpdateOk() (*time.Time, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *PatchedCertificateRevocationList) SetLastUpdate(v time.Time)`

SetLastUpdate sets LastUpdate field to given value.

### HasLastUpdate

`func (o *PatchedCertificateRevocationList) HasLastUpdate() bool`

HasLastUpdate returns a boolean if a field has been set.

### GetNextUpdate

`func (o *PatchedCertificateRevocationList) GetNextUpdate() time.Time`

GetNextUpdate returns the NextUpdate field if non-nil, zero value otherwise.

### GetNextUpdateOk

`func (o *PatchedCertificateRevocationList) GetNextUpdateOk() (*time.Time, bool)`

GetNextUpdateOk returns a tuple with the NextUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextUpdate

`func (o *PatchedCertificateRevocationList) SetNextUpdate(v time.Time)`

SetNextUpdate sets NextUpdate field to given value.

### HasNextUpdate

`func (o *PatchedCertificateRevocationList) HasNextUpdate() bool`

HasNextUpdate returns a boolean if a field has been set.

### GetCrl

`func (o *PatchedCertificateRevocationList) GetCrl() string`

GetCrl returns the Crl field if non-nil, zero value otherwise.

### GetCrlOk

`func (o *PatchedCertificateRevocationList) GetCrlOk() (*string, bool)`

GetCrlOk returns a tuple with the Crl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCrl

`func (o *PatchedCertificateRevocationList) SetCrl(v string)`

SetCrl sets Crl field to given value.

### HasCrl

`func (o *PatchedCertificateRevocationList) HasCrl() bool`

HasCrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


