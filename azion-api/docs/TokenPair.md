# TokenPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessToken** | **string** | The access_token is a short-lived token (e.g., 10 minutes) used for API authentication in the Authorization: Bearer &lt;access_token&gt; header. | [readonly] 
**RefreshToken** | **string** | A long-lived JWT token used to refresh the access_token without requiring the user to authenticate again. | [readonly] 
**ResponseType** | **string** | Discriminator field for LoginResponse | 

## Methods

### NewTokenPair

`func NewTokenPair(accessToken string, refreshToken string, responseType string, ) *TokenPair`

NewTokenPair instantiates a new TokenPair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenPairWithDefaults

`func NewTokenPairWithDefaults() *TokenPair`

NewTokenPairWithDefaults instantiates a new TokenPair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessToken

`func (o *TokenPair) GetAccessToken() string`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *TokenPair) GetAccessTokenOk() (*string, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *TokenPair) SetAccessToken(v string)`

SetAccessToken sets AccessToken field to given value.


### GetRefreshToken

`func (o *TokenPair) GetRefreshToken() string`

GetRefreshToken returns the RefreshToken field if non-nil, zero value otherwise.

### GetRefreshTokenOk

`func (o *TokenPair) GetRefreshTokenOk() (*string, bool)`

GetRefreshTokenOk returns a tuple with the RefreshToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshToken

`func (o *TokenPair) SetRefreshToken(v string)`

SetRefreshToken sets RefreshToken field to given value.


### GetResponseType

`func (o *TokenPair) GetResponseType() string`

GetResponseType returns the ResponseType field if non-nil, zero value otherwise.

### GetResponseTypeOk

`func (o *TokenPair) GetResponseTypeOk() (*string, bool)`

GetResponseTypeOk returns a tuple with the ResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseType

`func (o *TokenPair) SetResponseType(v string)`

SetResponseType sets ResponseType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


