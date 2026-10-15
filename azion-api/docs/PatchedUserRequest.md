# PatchedUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Email** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**TwoFactorEnabled** | Pointer to **bool** |  | [optional] [default to false]
**Preferences** | Pointer to **map[string]interface{}** | User-specific preferences in JSON format. | [optional] 
**Phone** | Pointer to **string** |  | [optional] 

## Methods

### NewPatchedUserRequest

`func NewPatchedUserRequest() *PatchedUserRequest`

NewPatchedUserRequest instantiates a new PatchedUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedUserRequestWithDefaults

`func NewPatchedUserRequestWithDefaults() *PatchedUserRequest`

NewPatchedUserRequestWithDefaults instantiates a new PatchedUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedUserRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedUserRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedUserRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedUserRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *PatchedUserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *PatchedUserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *PatchedUserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *PatchedUserRequest) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetActive

`func (o *PatchedUserRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedUserRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedUserRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedUserRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetTwoFactorEnabled

`func (o *PatchedUserRequest) GetTwoFactorEnabled() bool`

GetTwoFactorEnabled returns the TwoFactorEnabled field if non-nil, zero value otherwise.

### GetTwoFactorEnabledOk

`func (o *PatchedUserRequest) GetTwoFactorEnabledOk() (*bool, bool)`

GetTwoFactorEnabledOk returns a tuple with the TwoFactorEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorEnabled

`func (o *PatchedUserRequest) SetTwoFactorEnabled(v bool)`

SetTwoFactorEnabled sets TwoFactorEnabled field to given value.

### HasTwoFactorEnabled

`func (o *PatchedUserRequest) HasTwoFactorEnabled() bool`

HasTwoFactorEnabled returns a boolean if a field has been set.

### GetPreferences

`func (o *PatchedUserRequest) GetPreferences() map[string]interface{}`

GetPreferences returns the Preferences field if non-nil, zero value otherwise.

### GetPreferencesOk

`func (o *PatchedUserRequest) GetPreferencesOk() (*map[string]interface{}, bool)`

GetPreferencesOk returns a tuple with the Preferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferences

`func (o *PatchedUserRequest) SetPreferences(v map[string]interface{})`

SetPreferences sets Preferences field to given value.

### HasPreferences

`func (o *PatchedUserRequest) HasPreferences() bool`

HasPreferences returns a boolean if a field has been set.

### GetPhone

`func (o *PatchedUserRequest) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *PatchedUserRequest) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *PatchedUserRequest) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *PatchedUserRequest) HasPhone() bool`

HasPhone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


