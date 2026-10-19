# IntegrationListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Scope** | **string** |  | [readonly] 
**ScopeType** | **string** |  | [readonly] 
**Provider** | [**Platform**](Platform.md) |  | 
**CreatedAt** | **NullableTime** | Created date of the integration. | [readonly] 

## Methods

### NewIntegrationListResponse

`func NewIntegrationListResponse(id int64, scope string, scopeType string, provider Platform, createdAt NullableTime, ) *IntegrationListResponse`

NewIntegrationListResponse instantiates a new IntegrationListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntegrationListResponseWithDefaults

`func NewIntegrationListResponseWithDefaults() *IntegrationListResponse`

NewIntegrationListResponseWithDefaults instantiates a new IntegrationListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IntegrationListResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IntegrationListResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IntegrationListResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetScope

`func (o *IntegrationListResponse) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *IntegrationListResponse) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *IntegrationListResponse) SetScope(v string)`

SetScope sets Scope field to given value.


### GetScopeType

`func (o *IntegrationListResponse) GetScopeType() string`

GetScopeType returns the ScopeType field if non-nil, zero value otherwise.

### GetScopeTypeOk

`func (o *IntegrationListResponse) GetScopeTypeOk() (*string, bool)`

GetScopeTypeOk returns a tuple with the ScopeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeType

`func (o *IntegrationListResponse) SetScopeType(v string)`

SetScopeType sets ScopeType field to given value.


### GetProvider

`func (o *IntegrationListResponse) GetProvider() Platform`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *IntegrationListResponse) GetProviderOk() (*Platform, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *IntegrationListResponse) SetProvider(v Platform)`

SetProvider sets Provider field to given value.


### GetCreatedAt

`func (o *IntegrationListResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *IntegrationListResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *IntegrationListResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### SetCreatedAtNil

`func (o *IntegrationListResponse) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *IntegrationListResponse) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


