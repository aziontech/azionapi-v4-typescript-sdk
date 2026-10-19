# AccountInfoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Industry** | Pointer to **map[string]interface{}** | The industry type. Common values: Education, Energy, Finance, Games, Health, Media, Public Sector, Retail, Services, Technology, Telecom, Transportation, Other. | [optional] 
**CompanySize** | Pointer to **int64** | The size of the company. Must be an integer greater than or equal to 1. | [optional] 

## Methods

### NewAccountInfoRequest

`func NewAccountInfoRequest() *AccountInfoRequest`

NewAccountInfoRequest instantiates a new AccountInfoRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountInfoRequestWithDefaults

`func NewAccountInfoRequestWithDefaults() *AccountInfoRequest`

NewAccountInfoRequestWithDefaults instantiates a new AccountInfoRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndustry

`func (o *AccountInfoRequest) GetIndustry() map[string]interface{}`

GetIndustry returns the Industry field if non-nil, zero value otherwise.

### GetIndustryOk

`func (o *AccountInfoRequest) GetIndustryOk() (*map[string]interface{}, bool)`

GetIndustryOk returns a tuple with the Industry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndustry

`func (o *AccountInfoRequest) SetIndustry(v map[string]interface{})`

SetIndustry sets Industry field to given value.

### HasIndustry

`func (o *AccountInfoRequest) HasIndustry() bool`

HasIndustry returns a boolean if a field has been set.

### GetCompanySize

`func (o *AccountInfoRequest) GetCompanySize() int64`

GetCompanySize returns the CompanySize field if non-nil, zero value otherwise.

### GetCompanySizeOk

`func (o *AccountInfoRequest) GetCompanySizeOk() (*int64, bool)`

GetCompanySizeOk returns a tuple with the CompanySize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanySize

`func (o *AccountInfoRequest) SetCompanySize(v int64)`

SetCompanySize sets CompanySize field to given value.

### HasCompanySize

`func (o *AccountInfoRequest) HasCompanySize() bool`

HasCompanySize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


