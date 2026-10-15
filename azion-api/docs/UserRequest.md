# UserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Email** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] 
**TwoFactorEnabled** | Pointer to **bool** |  | [optional] [default to false]
**Preferences** | Pointer to **map[string]interface{}** | User-specific preferences in JSON format. | [optional] 
**Phone** | Pointer to **string** |  | [optional] 

## Methods

### NewUserRequest

`func NewUserRequest(name string, email string, ) *UserRequest`

NewUserRequest instantiates a new UserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserRequestWithDefaults

`func NewUserRequestWithDefaults() *UserRequest`

NewUserRequestWithDefaults instantiates a new UserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UserRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserRequest) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *UserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetActive

`func (o *UserRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *UserRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *UserRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *UserRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetTwoFactorEnabled

`func (o *UserRequest) GetTwoFactorEnabled() bool`

GetTwoFactorEnabled returns the TwoFactorEnabled field if non-nil, zero value otherwise.

### GetTwoFactorEnabledOk

`func (o *UserRequest) GetTwoFactorEnabledOk() (*bool, bool)`

GetTwoFactorEnabledOk returns a tuple with the TwoFactorEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorEnabled

`func (o *UserRequest) SetTwoFactorEnabled(v bool)`

SetTwoFactorEnabled sets TwoFactorEnabled field to given value.

### HasTwoFactorEnabled

`func (o *UserRequest) HasTwoFactorEnabled() bool`

HasTwoFactorEnabled returns a boolean if a field has been set.

### GetPreferences

`func (o *UserRequest) GetPreferences() map[string]interface{}`

GetPreferences returns the Preferences field if non-nil, zero value otherwise.

### GetPreferencesOk

`func (o *UserRequest) GetPreferencesOk() (*map[string]interface{}, bool)`

GetPreferencesOk returns a tuple with the Preferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferences

`func (o *UserRequest) SetPreferences(v map[string]interface{})`

SetPreferences sets Preferences field to given value.

### HasPreferences

`func (o *UserRequest) HasPreferences() bool`

HasPreferences returns a boolean if a field has been set.

### GetPhone

`func (o *UserRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *UserRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *UserRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *UserRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


