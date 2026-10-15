# TOTPVerificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | 6-digit TOTP code | 

## Methods

### NewTOTPVerificationRequest

`func NewTOTPVerificationRequest(code string, ) *TOTPVerificationRequest`

NewTOTPVerificationRequest instantiates a new TOTPVerificationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTOTPVerificationRequestWithDefaults

`func NewTOTPVerificationRequestWithDefaults() *TOTPVerificationRequest`

NewTOTPVerificationRequestWithDefaults instantiates a new TOTPVerificationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TOTPVerificationRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TOTPVerificationRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TOTPVerificationRequest) SetCode(v string)`

SetCode sets Code field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


