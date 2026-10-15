# DashboardListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Scope** | **string** | * &#x60;azion&#x60; - Items that have Azion scope can be shared to any account that has access permission. * &#x60;account&#x60; - Items that have Account scope can only be shared with account users. * &#x60;user&#x60; - Items that have User scope will only be available to the account user. | 
**FolderId** | **int64** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewDashboardListResponse

`func NewDashboardListResponse(id int64, name string, scope string, folderId int64, createdAt time.Time, ) *DashboardListResponse`

NewDashboardListResponse instantiates a new DashboardListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDashboardListResponseWithDefaults

`func NewDashboardListResponseWithDefaults() *DashboardListResponse`

NewDashboardListResponseWithDefaults instantiates a new DashboardListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DashboardListResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DashboardListResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DashboardListResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *DashboardListResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DashboardListResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DashboardListResponse) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *DashboardListResponse) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *DashboardListResponse) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *DashboardListResponse) SetScope(v string)`

SetScope sets Scope field to given value.


### GetFolderId

`func (o *DashboardListResponse) GetFolderId() int64`

GetFolderId returns the FolderId field if non-nil, zero value otherwise.

### GetFolderIdOk

`func (o *DashboardListResponse) GetFolderIdOk() (*int64, bool)`

GetFolderIdOk returns a tuple with the FolderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolderId

`func (o *DashboardListResponse) SetFolderId(v int64)`

SetFolderId sets FolderId field to given value.


### GetCreatedAt

`func (o *DashboardListResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DashboardListResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DashboardListResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


