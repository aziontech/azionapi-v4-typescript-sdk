# DashboardRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Scope** | **string** | * &#x60;azion&#x60; - Items that have Azion scope can be shared to any account that has access permission. * &#x60;account&#x60; - Items that have Account scope can only be shared with account users. * &#x60;user&#x60; - Items that have User scope will only be available to the account user. | 

## Methods

### NewDashboardRequest

`func NewDashboardRequest(name string, scope string, ) *DashboardRequest`

NewDashboardRequest instantiates a new DashboardRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDashboardRequestWithDefaults

`func NewDashboardRequestWithDefaults() *DashboardRequest`

NewDashboardRequestWithDefaults instantiates a new DashboardRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DashboardRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DashboardRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DashboardRequest) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *DashboardRequest) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *DashboardRequest) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *DashboardRequest) SetScope(v string)`

SetScope sets Scope field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


