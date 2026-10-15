# LoginResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessToken** | **string** | The access_token is a short-lived token (e.g., 10 minutes) used for API authentication in the Authorization: Bearer &lt;access_token&gt; header. | [readonly] 
**RefreshToken** | **string** | A long-lived JWT token used to refresh the access_token without requiring the user to authenticate again. | [readonly] 
**ResponseType** | **string** | Discriminator field for LoginResponse | 
**TwoFactorRequired** | **bool** | Specifies the type of two-factor authentication configured. Currently supports &#39;TOTP&#39; (Time-based One-Time Password). | [readonly] 
**TwoFactorType** | **string** | Indicates whether the user has an active TOTP device configured. If false, the user must register a device before using MFA authentication. | [readonly] 
**HasActiveDevice** | **bool** | Indicates whether the user already has an active TOTP device configured. If false, the user needs to set up a new device before using MFA authentication. | [readonly] 

## Methods

### NewLoginResponse

`func NewLoginResponse(accessToken string, refreshToken string, responseType string, twoFactorRequired bool, twoFactorType string, hasActiveDevice bool, ) *LoginResponse`

NewLoginResponse instantiates a new LoginResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoginResponseWithDefaults

`func NewLoginResponseWithDefaults() *LoginResponse`

NewLoginResponseWithDefaults instantiates a new LoginResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessToken

`func (o *LoginResponse) GetAccessToken() string`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *LoginResponse) GetAccessTokenOk() (*string, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *LoginResponse) SetAccessToken(v string)`

SetAccessToken sets AccessToken field to given value.


### GetRefreshToken

`func (o *LoginResponse) GetRefreshToken() string`

GetRefreshToken returns the RefreshToken field if non-nil, zero value otherwise.

### GetRefreshTokenOk

`func (o *LoginResponse) GetRefreshTokenOk() (*string, bool)`

GetRefreshTokenOk returns a tuple with the RefreshToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshToken

`func (o *LoginResponse) SetRefreshToken(v string)`

SetRefreshToken sets RefreshToken field to given value.


### GetResponseType

`func (o *LoginResponse) GetResponseType() string`

GetResponseType returns the ResponseType field if non-nil, zero value otherwise.

### GetResponseTypeOk

`func (o *LoginResponse) GetResponseTypeOk() (*string, bool)`

GetResponseTypeOk returns a tuple with the ResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseType

`func (o *LoginResponse) SetResponseType(v string)`

SetResponseType sets ResponseType field to given value.


### GetTwoFactorRequired

`func (o *LoginResponse) GetTwoFactorRequired() bool`

GetTwoFactorRequired returns the TwoFactorRequired field if non-nil, zero value otherwise.

### GetTwoFactorRequiredOk

`func (o *LoginResponse) GetTwoFactorRequiredOk() (*bool, bool)`

GetTwoFactorRequiredOk returns a tuple with the TwoFactorRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorRequired

`func (o *LoginResponse) SetTwoFactorRequired(v bool)`

SetTwoFactorRequired sets TwoFactorRequired field to given value.


### GetTwoFactorType

`func (o *LoginResponse) GetTwoFactorType() string`

GetTwoFactorType returns the TwoFactorType field if non-nil, zero value otherwise.

### GetTwoFactorTypeOk

`func (o *LoginResponse) GetTwoFactorTypeOk() (*string, bool)`

GetTwoFactorTypeOk returns a tuple with the TwoFactorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoFactorType

`func (o *LoginResponse) SetTwoFactorType(v string)`

SetTwoFactorType sets TwoFactorType field to given value.


### GetHasActiveDevice

`func (o *LoginResponse) GetHasActiveDevice() bool`

GetHasActiveDevice returns the HasActiveDevice field if non-nil, zero value otherwise.

### GetHasActiveDeviceOk

`func (o *LoginResponse) GetHasActiveDeviceOk() (*bool, bool)`

GetHasActiveDeviceOk returns a tuple with the HasActiveDevice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasActiveDevice

`func (o *LoginResponse) SetHasActiveDevice(v bool)`

SetHasActiveDevice sets HasActiveDevice field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


