# ServiceTokenCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Email** | **string** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**AccountId** | **int64** |  | [readonly] 
**Description** | Pointer to **string** |  | [optional] 
**Expires** | **time.Time** |  | 
**LastUsed** | **time.Time** |  | [readonly] 
**Token** | **string** |  | [readonly] 

## Methods

### NewServiceTokenCreate

`func NewServiceTokenCreate(id int64, name string, email string, created time.Time, lastEditor string, lastModified time.Time, accountId int64, expires time.Time, lastUsed time.Time, token string, ) *ServiceTokenCreate`

NewServiceTokenCreate instantiates a new ServiceTokenCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTokenCreateWithDefaults

`func NewServiceTokenCreateWithDefaults() *ServiceTokenCreate`

NewServiceTokenCreateWithDefaults instantiates a new ServiceTokenCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceTokenCreate) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceTokenCreate) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceTokenCreate) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ServiceTokenCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceTokenCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceTokenCreate) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *ServiceTokenCreate) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ServiceTokenCreate) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ServiceTokenCreate) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCreated

`func (o *ServiceTokenCreate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ServiceTokenCreate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ServiceTokenCreate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastEditor

`func (o *ServiceTokenCreate) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ServiceTokenCreate) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ServiceTokenCreate) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ServiceTokenCreate) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ServiceTokenCreate) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ServiceTokenCreate) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetActive

`func (o *ServiceTokenCreate) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ServiceTokenCreate) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ServiceTokenCreate) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ServiceTokenCreate) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAccountId

`func (o *ServiceTokenCreate) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ServiceTokenCreate) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ServiceTokenCreate) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### GetDescription

`func (o *ServiceTokenCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ServiceTokenCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ServiceTokenCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ServiceTokenCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExpires

`func (o *ServiceTokenCreate) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *ServiceTokenCreate) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *ServiceTokenCreate) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.


### GetLastUsed

`func (o *ServiceTokenCreate) GetLastUsed() time.Time`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *ServiceTokenCreate) GetLastUsedOk() (*time.Time, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *ServiceTokenCreate) SetLastUsed(v time.Time)`

SetLastUsed sets LastUsed field to given value.


### GetToken

`func (o *ServiceTokenCreate) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *ServiceTokenCreate) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *ServiceTokenCreate) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


