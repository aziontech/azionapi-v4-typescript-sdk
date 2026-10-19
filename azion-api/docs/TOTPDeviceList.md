# TOTPDeviceList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** | User&#39;s full name (alphanumeric, spaces, hyphens, dots) | 
**Email** | **string** | User&#39;s email address | 
**Confirmed** | Pointer to **bool** | Is this device ready for use? | [optional] 
**UserId** | **int64** | The user that this device belongs to. | [readonly] 

## Methods

### NewTOTPDeviceList

`func NewTOTPDeviceList(id int64, name string, email string, userId int64, ) *TOTPDeviceList`

NewTOTPDeviceList instantiates a new TOTPDeviceList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTOTPDeviceListWithDefaults

`func NewTOTPDeviceListWithDefaults() *TOTPDeviceList`

NewTOTPDeviceListWithDefaults instantiates a new TOTPDeviceList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TOTPDeviceList) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TOTPDeviceList) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TOTPDeviceList) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *TOTPDeviceList) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TOTPDeviceList) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TOTPDeviceList) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *TOTPDeviceList) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *TOTPDeviceList) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *TOTPDeviceList) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetConfirmed

`func (o *TOTPDeviceList) GetConfirmed() bool`

GetConfirmed returns the Confirmed field if non-nil, zero value otherwise.

### GetConfirmedOk

`func (o *TOTPDeviceList) GetConfirmedOk() (*bool, bool)`

GetConfirmedOk returns a tuple with the Confirmed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmed

`func (o *TOTPDeviceList) SetConfirmed(v bool)`

SetConfirmed sets Confirmed field to given value.

### HasConfirmed

`func (o *TOTPDeviceList) HasConfirmed() bool`

HasConfirmed returns a boolean if a field has been set.

### GetUserId

`func (o *TOTPDeviceList) GetUserId() int64`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *TOTPDeviceList) GetUserIdOk() (*int64, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *TOTPDeviceList) SetUserId(v int64)`

SetUserId sets UserId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


