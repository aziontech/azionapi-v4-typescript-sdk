# Workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**Infrastructure** | Pointer to [**InfrastructureEnum**](InfrastructureEnum.md) |  | [optional] [default to ProductionInfrastructure]
**Tls** | Pointer to [**TLSWorkload**](TLSWorkload.md) |  | [optional] 
**Protocols** | Pointer to [**Protocols**](Protocols.md) |  | [optional] 
**Mtls** | Pointer to [**MTLS**](MTLS.md) |  | [optional] 
**Domains** | Pointer to **[]string** |  | [optional] 
**WorkloadDomainAllowAccess** | Pointer to **bool** |  | [optional] 
**WorkloadDomain** | **string** |  | [readonly] [default to ""]
**ProductVersion** | **string** |  | [readonly] 

## Methods

### NewWorkload

`func NewWorkload(id int64, name string, lastEditor string, lastModified time.Time, createdAt time.Time, workloadDomain string, productVersion string, ) *Workload`

NewWorkload instantiates a new Workload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkloadWithDefaults

`func NewWorkloadWithDefaults() *Workload`

NewWorkloadWithDefaults instantiates a new Workload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workload) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workload) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workload) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Workload) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workload) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workload) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *Workload) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Workload) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Workload) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Workload) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetLastEditor

`func (o *Workload) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Workload) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Workload) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *Workload) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Workload) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Workload) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetCreatedAt

`func (o *Workload) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Workload) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Workload) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetInfrastructure

`func (o *Workload) GetInfrastructure() InfrastructureEnum`

GetInfrastructure returns the Infrastructure field if non-nil, zero value otherwise.

### GetInfrastructureOk

`func (o *Workload) GetInfrastructureOk() (*InfrastructureEnum, bool)`

GetInfrastructureOk returns a tuple with the Infrastructure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfrastructure

`func (o *Workload) SetInfrastructure(v InfrastructureEnum)`

SetInfrastructure sets Infrastructure field to given value.

### HasInfrastructure

`func (o *Workload) HasInfrastructure() bool`

HasInfrastructure returns a boolean if a field has been set.

### GetTls

`func (o *Workload) GetTls() TLSWorkload`

GetTls returns the Tls field if non-nil, zero value otherwise.

### GetTlsOk

`func (o *Workload) GetTlsOk() (*TLSWorkload, bool)`

GetTlsOk returns a tuple with the Tls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTls

`func (o *Workload) SetTls(v TLSWorkload)`

SetTls sets Tls field to given value.

### HasTls

`func (o *Workload) HasTls() bool`

HasTls returns a boolean if a field has been set.

### GetProtocols

`func (o *Workload) GetProtocols() Protocols`

GetProtocols returns the Protocols field if non-nil, zero value otherwise.

### GetProtocolsOk

`func (o *Workload) GetProtocolsOk() (*Protocols, bool)`

GetProtocolsOk returns a tuple with the Protocols field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocols

`func (o *Workload) SetProtocols(v Protocols)`

SetProtocols sets Protocols field to given value.

### HasProtocols

`func (o *Workload) HasProtocols() bool`

HasProtocols returns a boolean if a field has been set.

### GetMtls

`func (o *Workload) GetMtls() MTLS`

GetMtls returns the Mtls field if non-nil, zero value otherwise.

### GetMtlsOk

`func (o *Workload) GetMtlsOk() (*MTLS, bool)`

GetMtlsOk returns a tuple with the Mtls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMtls

`func (o *Workload) SetMtls(v MTLS)`

SetMtls sets Mtls field to given value.

### HasMtls

`func (o *Workload) HasMtls() bool`

HasMtls returns a boolean if a field has been set.

### GetDomains

`func (o *Workload) GetDomains() []string`

GetDomains returns the Domains field if non-nil, zero value otherwise.

### GetDomainsOk

`func (o *Workload) GetDomainsOk() (*[]string, bool)`

GetDomainsOk returns a tuple with the Domains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomains

`func (o *Workload) SetDomains(v []string)`

SetDomains sets Domains field to given value.

### HasDomains

`func (o *Workload) HasDomains() bool`

HasDomains returns a boolean if a field has been set.

### GetWorkloadDomainAllowAccess

`func (o *Workload) GetWorkloadDomainAllowAccess() bool`

GetWorkloadDomainAllowAccess returns the WorkloadDomainAllowAccess field if non-nil, zero value otherwise.

### GetWorkloadDomainAllowAccessOk

`func (o *Workload) GetWorkloadDomainAllowAccessOk() (*bool, bool)`

GetWorkloadDomainAllowAccessOk returns a tuple with the WorkloadDomainAllowAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadDomainAllowAccess

`func (o *Workload) SetWorkloadDomainAllowAccess(v bool)`

SetWorkloadDomainAllowAccess sets WorkloadDomainAllowAccess field to given value.

### HasWorkloadDomainAllowAccess

`func (o *Workload) HasWorkloadDomainAllowAccess() bool`

HasWorkloadDomainAllowAccess returns a boolean if a field has been set.

### GetWorkloadDomain

`func (o *Workload) GetWorkloadDomain() string`

GetWorkloadDomain returns the WorkloadDomain field if non-nil, zero value otherwise.

### GetWorkloadDomainOk

`func (o *Workload) GetWorkloadDomainOk() (*string, bool)`

GetWorkloadDomainOk returns a tuple with the WorkloadDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadDomain

`func (o *Workload) SetWorkloadDomain(v string)`

SetWorkloadDomain sets WorkloadDomain field to given value.


### GetProductVersion

`func (o *Workload) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *Workload) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *Workload) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


