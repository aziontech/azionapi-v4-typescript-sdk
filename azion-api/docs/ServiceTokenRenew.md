# ServiceTokenRenew

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | [readonly] 
**Email** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Active** | **bool** |  | [readonly] 
**AccountId** | **int64** |  | [readonly] 
**Description** | **string** |  | [readonly] 
**Expires** | **time.Time** |  | 
**LastUsed** | **time.Time** |  | [readonly] 
**Token** | **string** |  | [readonly] 

## Methods

### NewServiceTokenRenew

`func NewServiceTokenRenew(id int64, name string, email string, created time.Time, lastEditor string, lastModified time.Time, active bool, accountId int64, description string, expires time.Time, lastUsed time.Time, token string, ) *ServiceTokenRenew`

NewServiceTokenRenew instantiates a new ServiceTokenRenew object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTokenRenewWithDefaults

`func NewServiceTokenRenewWithDefaults() *ServiceTokenRenew`

NewServiceTokenRenewWithDefaults instantiates a new ServiceTokenRenew object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceTokenRenew) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceTokenRenew) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceTokenRenew) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ServiceTokenRenew) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceTokenRenew) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceTokenRenew) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *ServiceTokenRenew) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ServiceTokenRenew) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ServiceTokenRenew) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCreated

`func (o *ServiceTokenRenew) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ServiceTokenRenew) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ServiceTokenRenew) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastEditor

`func (o *ServiceTokenRenew) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ServiceTokenRenew) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ServiceTokenRenew) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ServiceTokenRenew) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ServiceTokenRenew) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ServiceTokenRenew) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetActive

`func (o *ServiceTokenRenew) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceTokenRenew) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceTokenRenew) SetActive(v bool)`

SetActive sets Active field to given value.


### GetAccountId

`func (o *ServiceTokenRenew) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ServiceTokenRenew) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ServiceTokenRenew) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### GetDescription

`func (o *ServiceTokenRenew) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceTokenRenew) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceTokenRenew) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetExpires

`func (o *ServiceTokenRenew) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *ServiceTokenRenew) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *ServiceTokenRenew) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.


### GetLastUsed

`func (o *ServiceTokenRenew) GetLastUsed() time.Time`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *ServiceTokenRenew) GetLastUsedOk() (*time.Time, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *ServiceTokenRenew) SetLastUsed(v time.Time)`

SetLastUsed sets LastUsed field to given value.


### GetToken

`func (o *ServiceTokenRenew) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *ServiceTokenRenew) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *ServiceTokenRenew) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


