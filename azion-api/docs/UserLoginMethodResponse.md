# UserLoginMethodResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **string** | Login method type (lowercase with underscores) | 
**Url** | **string** |  | 

## Methods

### NewUserLoginMethodResponse

`func NewUserLoginMethodResponse(method string, url string, ) *UserLoginMethodResponse`

NewUserLoginMethodResponse instantiates a new UserLoginMethodResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserLoginMethodResponseWithDefaults

`func NewUserLoginMethodResponseWithDefaults() *UserLoginMethodResponse`

NewUserLoginMethodResponseWithDefaults instantiates a new UserLoginMethodResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *UserLoginMethodResponse) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *UserLoginMethodResponse) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *UserLoginMethodResponse) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetUrl

`func (o *UserLoginMethodResponse) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *UserLoginMethodResponse) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *UserLoginMethodResponse) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


