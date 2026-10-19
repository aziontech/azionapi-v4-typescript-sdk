# FolderListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Scope** | **string** | * &#x60;azion&#x60; - Items that have Azion scope can be shared to any account that has access permission. * &#x60;account&#x60; - Items that have Account scope can only be shared with account users. * &#x60;user&#x60; - Items that have User scope will only be available to the account user. | 
**CreatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewFolderListResponse

`func NewFolderListResponse(id int64, name string, scope string, createdAt time.Time, ) *FolderListResponse`

NewFolderListResponse instantiates a new FolderListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolderListResponseWithDefaults

`func NewFolderListResponseWithDefaults() *FolderListResponse`

NewFolderListResponseWithDefaults instantiates a new FolderListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FolderListResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FolderListResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FolderListResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *FolderListResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FolderListResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FolderListResponse) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *FolderListResponse) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *FolderListResponse) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *FolderListResponse) SetScope(v string)`

SetScope sets Scope field to given value.


### GetCreatedAt

`func (o *FolderListResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *FolderListResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *FolderListResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


