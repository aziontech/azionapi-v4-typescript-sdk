# CreateWorkspaceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**ParentId** | **int64** |  | 
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 

## Methods

### NewCreateWorkspaceRequest

`func NewCreateWorkspaceRequest(name string, parentId int64, type_ string, ) *CreateWorkspaceRequest`

NewCreateWorkspaceRequest instantiates a new CreateWorkspaceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWorkspaceRequestWithDefaults

`func NewCreateWorkspaceRequestWithDefaults() *CreateWorkspaceRequest`

NewCreateWorkspaceRequestWithDefaults instantiates a new CreateWorkspaceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateWorkspaceRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateWorkspaceRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateWorkspaceRequest) SetName(v string)`

SetName sets Name field to given value.


### GetParentId

`func (o *CreateWorkspaceRequest) GetParentId() int64`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *CreateWorkspaceRequest) GetParentIdOk() (*int64, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *CreateWorkspaceRequest) SetParentId(v int64)`

SetParentId sets ParentId field to given value.


### GetType

`func (o *CreateWorkspaceRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateWorkspaceRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateWorkspaceRequest) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


