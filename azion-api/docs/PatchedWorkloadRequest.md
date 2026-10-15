# PatchedWorkloadRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Infrastructure** | Pointer to [**InfrastructureEnum**](InfrastructureEnum.md) |  | [optional] [default to ProductionInfrastructure]
**Tls** | Pointer to [**TLSWorkloadRequest**](TLSWorkloadRequest.md) |  | [optional] 
**Protocols** | Pointer to [**ProtocolsRequest**](ProtocolsRequest.md) |  | [optional] 
**Mtls** | Pointer to [**MTLSRequest**](MTLSRequest.md) |  | [optional] 
**Domains** | Pointer to **[]string** |  | [optional] 
**WorkloadDomainAllowAccess** | Pointer to **bool** |  | [optional] 

## Methods

### NewPatchedWorkloadRequest

`func NewPatchedWorkloadRequest() *PatchedWorkloadRequest`

NewPatchedWorkloadRequest instantiates a new PatchedWorkloadRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedWorkloadRequestWithDefaults

`func NewPatchedWorkloadRequestWithDefaults() *PatchedWorkloadRequest`

NewPatchedWorkloadRequestWithDefaults instantiates a new PatchedWorkloadRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedWorkloadRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedWorkloadRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedWorkloadRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedWorkloadRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedWorkloadRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedWorkloadRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedWorkloadRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedWorkloadRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetInfrastructure

`func (o *PatchedWorkloadRequest) GetInfrastructure() InfrastructureEnum`

GetInfrastructure returns the Infrastructure field if non-nil, zero value otherwise.

### GetInfrastructureOk

`func (o *PatchedWorkloadRequest) GetInfrastructureOk() (*InfrastructureEnum, bool)`

GetInfrastructureOk returns a tuple with the Infrastructure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfrastructure

`func (o *PatchedWorkloadRequest) SetInfrastructure(v InfrastructureEnum)`

SetInfrastructure sets Infrastructure field to given value.

### HasInfrastructure

`func (o *PatchedWorkloadRequest) HasInfrastructure() bool`

HasInfrastructure returns a boolean if a field has been set.

### GetTls

`func (o *PatchedWorkloadRequest) GetTls() TLSWorkloadRequest`

GetTls returns the Tls field if non-nil, zero value otherwise.

### GetTlsOk

`func (o *PatchedWorkloadRequest) GetTlsOk() (*TLSWorkloadRequest, bool)`

GetTlsOk returns a tuple with the Tls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTls

`func (o *PatchedWorkloadRequest) SetTls(v TLSWorkloadRequest)`

SetTls sets Tls field to given value.

### HasTls

`func (o *PatchedWorkloadRequest) HasTls() bool`

HasTls returns a boolean if a field has been set.

### GetProtocols

`func (o *PatchedWorkloadRequest) GetProtocols() ProtocolsRequest`

GetProtocols returns the Protocols field if non-nil, zero value otherwise.

### GetProtocolsOk

`func (o *PatchedWorkloadRequest) GetProtocolsOk() (*ProtocolsRequest, bool)`

GetProtocolsOk returns a tuple with the Protocols field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocols

`func (o *PatchedWorkloadRequest) SetProtocols(v ProtocolsRequest)`

SetProtocols sets Protocols field to given value.

### HasProtocols

`func (o *PatchedWorkloadRequest) HasProtocols() bool`

HasProtocols returns a boolean if a field has been set.

### GetMtls

`func (o *PatchedWorkloadRequest) GetMtls() MTLSRequest`

GetMtls returns the Mtls field if non-nil, zero value otherwise.

### GetMtlsOk

`func (o *PatchedWorkloadRequest) GetMtlsOk() (*MTLSRequest, bool)`

GetMtlsOk returns a tuple with the Mtls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMtls

`func (o *PatchedWorkloadRequest) SetMtls(v MTLSRequest)`

SetMtls sets Mtls field to given value.

### HasMtls

`func (o *PatchedWorkloadRequest) HasMtls() bool`

HasMtls returns a boolean if a field has been set.

### GetDomains

`func (o *PatchedWorkloadRequest) GetDomains() []string`

GetDomains returns the Domains field if non-nil, zero value otherwise.

### GetDomainsOk

`func (o *PatchedWorkloadRequest) GetDomainsOk() (*[]string, bool)`

GetDomainsOk returns a tuple with the Domains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomains

`func (o *PatchedWorkloadRequest) SetDomains(v []string)`

SetDomains sets Domains field to given value.

### HasDomains

`func (o *PatchedWorkloadRequest) HasDomains() bool`

HasDomains returns a boolean if a field has been set.

### GetWorkloadDomainAllowAccess

`func (o *PatchedWorkloadRequest) GetWorkloadDomainAllowAccess() bool`

GetWorkloadDomainAllowAccess returns the WorkloadDomainAllowAccess field if non-nil, zero value otherwise.

### GetWorkloadDomainAllowAccessOk

`func (o *PatchedWorkloadRequest) GetWorkloadDomainAllowAccessOk() (*bool, bool)`

GetWorkloadDomainAllowAccessOk returns a tuple with the WorkloadDomainAllowAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadDomainAllowAccess

`func (o *PatchedWorkloadRequest) SetWorkloadDomainAllowAccess(v bool)`

SetWorkloadDomainAllowAccess sets WorkloadDomainAllowAccess field to given value.

### HasWorkloadDomainAllowAccess

`func (o *PatchedWorkloadRequest) HasWorkloadDomainAllowAccess() bool`

HasWorkloadDomainAllowAccess returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


