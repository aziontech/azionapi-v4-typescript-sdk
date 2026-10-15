# ResponseListUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Email** | **string** |  | 
**Created** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Active** | Pointer to **bool** |  | [optional] 
**AccountId** | **int64** |  | [readonly] 
**LastLogin** | **time.Time** |  | [readonly] 
**TwoFactorEnabled** | Pointer to **bool** |  | [optional] [default to false]
**Preferences** | Pointer to **map[string]interface{}** | User-specific preferences in JSON format. | [optional] 
**Phone** | Pointer to **string** |  | [optional] 
**Info** | **map[string]interface{}** |  | [readonly] 
**Lockout** | **string** |  | [readonly] 

## Methods

### NewResponseListUser

`func NewResponseListUser(id int64, name string, email string, created time.Time, lastEditor string, lastModified time.Time, accountId int64, lastLogin time.Time, info map[string]interface{}, lockout string, ) *ResponseListUser`

NewResponseListUser instantiates a new ResponseListUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListUserWithDefaults

`func NewResponseListUserWithDefaults() *ResponseListUser`

NewResponseListUserWithDefaults instantiates a new ResponseListUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListUser) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListUser) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListUser) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ResponseListUser) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponseListUser) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponseListUser) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *ResponseListUser) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ResponseListUser) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ResponseListUser) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetCreated

`func (o *ResponseListUser) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ResponseListUser) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ResponseListUser) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastEditor

`func (o *ResponseListUser) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListUser) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListUser) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListUser) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListUser) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListUser) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetActive

`func (o *ResponseListUser) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListUser) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListUser) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ResponseListUser) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetAccountId

`func (o *ResponseListUser) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ResponseListUser) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ResponseListUser) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### GetLastLogin

`func (o *ResponseListUser) GetLastLogin() time.Time`

GetLastLogin returns the LastLogin field if non-nil, zero value otherwise.

### GetLastLoginOk

`func (o *ResponseListUser) GetLastLoginOk() (*time.Time, bool)`

GetLastLoginOk returns a tuple with the LastLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastLogin

`func (o *ResponseListUser) SetLastLogin(v time.Time)`

SetLastLogin sets LastLogin field to given value.


### GetTwoFactorEnabled

`func (o *ResponseListUser) GetTwoFactorEnabled() bool`

GetTwoFactorEnabled returns the TwoFactorEnabled field if non-nil, zero value otherwise.

### GetTwoFactorEnabledOk

`func (o *ResponseListUser) GetTwoFactorEnabledOk() (*bool, bool)`

GetTwoFactorEnabledOk returns a tuple with the TwoFactorEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorEnabled

`func (o *ResponseListUser) SetTwoFactorEnabled(v bool)`

SetTwoFactorEnabled sets TwoFactorEnabled field to given value.

### HasTwoFactorEnabled

`func (o *ResponseListUser) HasTwoFactorEnabled() bool`

HasTwoFactorEnabled returns a boolean if a field has been set.

### GetPreferences

`func (o *ResponseListUser) GetPreferences() map[string]interface{}`

GetPreferences returns the Preferences field if non-nil, zero value otherwise.

### GetPreferencesOk

`func (o *ResponseListUser) GetPreferencesOk() (*map[string]interface{}, bool)`

GetPreferencesOk returns a tuple with the Preferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferences

`func (o *ResponseListUser) SetPreferences(v map[string]interface{})`

SetPreferences sets Preferences field to given value.

### HasPreferences

`func (o *ResponseListUser) HasPreferences() bool`

HasPreferences returns a boolean if a field has been set.

### GetPhone

`func (o *ResponseListUser) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ResponseListUser) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ResponseListUser) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *ResponseListUser) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetInfo

`func (o *ResponseListUser) GetInfo() map[string]interface{}`

GetInfo returns the Info field if non-nil, zero value otherwise.

### GetInfoOk

`func (o *ResponseListUser) GetInfoOk() (*map[string]interface{}, bool)`

GetInfoOk returns a tuple with the Info field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfo

`func (o *ResponseListUser) SetInfo(v map[string]interface{})`

SetInfo sets Info field to given value.


### GetLockout

`func (o *ResponseListUser) GetLockout() string`

GetLockout returns the Lockout field if non-nil, zero value otherwise.

### GetLockoutOk

`func (o *ResponseListUser) GetLockoutOk() (*string, bool)`

GetLockoutOk returns a tuple with the Lockout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockout

`func (o *ResponseListUser) SetLockout(v string)`

SetLockout sets Lockout field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


