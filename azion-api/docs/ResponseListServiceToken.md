# ResponseListServiceToken

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

## Methods

### NewResponseListServiceToken

`func NewResponseListServiceToken(id int64, name string, email string, created time.Time, lastEditor string, lastModified time.Time, accountId int64, expires time.Time, lastUsed time.Time, ) *ResponseListServiceToken`

NewResponseListServiceToken instantiates a new ResponseListServiceToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListServiceTokenWithDefaults

`func NewResponseListServiceTokenWithDefaults() *ResponseListServiceToken`

NewResponseListServiceTokenWithDefaults instantiates a new ResponseListServiceToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListServiceToken) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListServiceToken) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListServiceToken) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ResponseListServiceToken) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponseListServiceToken) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponseListServiceToken) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *ResponseListServiceToken) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ResponseListServiceToken) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ResponseListServiceToken) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCreated

`func (o *ResponseListServiceToken) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ResponseListServiceToken) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ResponseListServiceToken) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastEditor

`func (o *ResponseListServiceToken) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListServiceToken) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListServiceToken) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListServiceToken) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListServiceToken) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListServiceToken) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetActive

`func (o *ResponseListServiceToken) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListServiceToken) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListServiceToken) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ResponseListServiceToken) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAccountId

`func (o *ResponseListServiceToken) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ResponseListServiceToken) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ResponseListServiceToken) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### GetDescription

`func (o *ResponseListServiceToken) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ResponseListServiceToken) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ResponseListServiceToken) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ResponseListServiceToken) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExpires

`func (o *ResponseListServiceToken) GetExpires() time.Time`

GetExpires returns the Expires field if non-nil, zero value otherwise.

### GetExpiresOk

`func (o *ResponseListServiceToken) GetExpiresOk() (*time.Time, bool)`

GetExpiresOk returns a tuple with the Expires field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpires

`func (o *ResponseListServiceToken) SetExpires(v time.Time)`

SetExpires sets Expires field to given value.


### GetLastUsed

`func (o *ResponseListServiceToken) GetLastUsed() time.Time`

GetLastUsed returns the LastUsed field if non-nil, zero value otherwise.

### GetLastUsedOk

`func (o *ResponseListServiceToken) GetLastUsedOk() (*time.Time, bool)`

GetLastUsedOk returns a tuple with the LastUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsed

`func (o *ResponseListServiceToken) SetLastUsed(v time.Time)`

SetLastUsed sets LastUsed field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


