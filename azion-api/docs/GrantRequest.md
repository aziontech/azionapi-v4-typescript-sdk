# GrantRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | Pointer to **NullableInt64** |  | [optional] 
**Roles** | Pointer to **[]int64** |  | [optional] 
**Policies** | Pointer to **[]int64** |  | [optional] 
**Expires** | Pointer to **time.Time** |  | [optional] 
**Owner** | **bool** |  | 
**AccountId** | **int64** |  | 

## Methods

### NewGrantRequest

`func NewGrantRequest(owner bool, accountId int64, ) *GrantRequest`

NewGrantRequest instantiates a new GrantRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGrantRequestWithDefaults

`func NewGrantRequestWithDefaults() *GrantRequest`

NewGrantRequestWithDefaults instantiates a new GrantRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentity

`func (o *GrantRequest) GetIdentity() int64`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *GrantRequest) GetIdentityOk() (*int64, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *GrantRequest) SetIdentity(v int64)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *GrantRequest) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### SetIdentityNil

`func (o *GrantRequest) SetIdentityNil(b bool)`

 SetIdentityNil sets the value for Identity to be an explicit nil

### UnsetIdentity
`func (o *GrantRequest) UnsetIdentity()`

UnsetIdentity ensures that no value is present for Identity, not even an explicit nil
### GetRoles

`func (o *GrantRequest) GetRoles() []int64`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *GrantRequest) GetRolesOk() (*[]int64, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *GrantRequest) SetRoles(v []int64)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *GrantRequest) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetPolicies

`func (o *GrantRequest) GetPolicies() []int64`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *GrantRequest) GetPoliciesOk() (*[]int64, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *GrantRequest) SetPolicies(v []int64)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *GrantRequest) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetExpires

`func (o *GrantRequest) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *GrantRequest) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *GrantRequest) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.

### HasExpires

`func (o *GrantRequest) HasExpires() bool`

HasExpires returns a boolean if a field has been set.

### GetOwner

`func (o *GrantRequest) GetOwner() bool`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *GrantRequest) GetOwnerOk() (*bool, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *GrantRequest) SetOwner(v bool)`

SetOwner sets Owner field to given value.


### GetAccountId

`func (o *GrantRequest) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *GrantRequest) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *GrantRequest) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


