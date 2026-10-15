# PatchedGrantRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to **NullableInt64** |  | [optional] 
**Roles** | Pointer to **[]int64** |  | [optional] 
**Policies** | Pointer to **[]int64** |  | [optional] 
**Expires** | Pointer to **time.Time** |  | [optional] 
**Owner** | Pointer to **bool** |  | [optional] 
**AccountId** | Pointer to **int64** |  | [optional] 

## Methods

### NewPatchedGrantRequest

`func NewPatchedGrantRequest() *PatchedGrantRequest`

NewPatchedGrantRequest instantiates a new PatchedGrantRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedGrantRequestWithDefaults

`func NewPatchedGrantRequestWithDefaults() *PatchedGrantRequest`

NewPatchedGrantRequestWithDefaults instantiates a new PatchedGrantRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *PatchedGrantRequest) GetIdentity() int64`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *PatchedGrantRequest) GetIdentityOk() (*int64, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *PatchedGrantRequest) SetIdentity(v int64)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *PatchedGrantRequest) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### SetIdentityNil

`func (o *PatchedGrantRequest) SetIdentityNil(b bool)`

 SetIdentityNil sets the value for Identity to be an explicit nil

### UnsetIdentity
`func (o *PatchedGrantRequest) UnsetIdentity()`

UnsetIdentity ensures that no value is present for Identity, not even an explicit nil
### GetRoles

`func (o *PatchedGrantRequest) GetRoles() []int64`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *PatchedGrantRequest) GetRolesOk() (*[]int64, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *PatchedGrantRequest) SetRoles(v []int64)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *PatchedGrantRequest) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetPolicies

`func (o *PatchedGrantRequest) GetPolicies() []int64`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *PatchedGrantRequest) GetPoliciesOk() (*[]int64, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *PatchedGrantRequest) SetPolicies(v []int64)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *PatchedGrantRequest) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetExpires

`func (o *PatchedGrantRequest) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *PatchedGrantRequest) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *PatchedGrantRequest) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.

### HasExpires

`func (o *PatchedGrantRequest) HasExpires() bool`

HasExpires returns a boolean if a field has been set.

### GetOwner

`func (o *PatchedGrantRequest) GetOwner() bool`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *PatchedGrantRequest) GetOwnerOk() (*bool, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *PatchedGrantRequest) SetOwner(v bool)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *PatchedGrantRequest) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetAccountId

`func (o *PatchedGrantRequest) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *PatchedGrantRequest) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *PatchedGrantRequest) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *PatchedGrantRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


