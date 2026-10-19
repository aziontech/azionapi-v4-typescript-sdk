# Organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Name** | **string** |  | 
**Active** | **bool** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**ParentId** | **int64** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**Info** | **map[string]interface{}** |  | [readonly] 
**Status** | **string** | * &#x60;active&#x60; - Active account status, can be used for regular operations. * &#x60;suspended&#x60; - Suspended account status, for accounts with limited access to support and payments only. * &#x60;disabled&#x60; - Disabled account status, services are offline, user can only access support. * &#x60;closed&#x60; - Closed account status, services are offline but can be reactivated. | [readonly] 
**Reason** | **string** | * &#x60;trial&#x60; - Trial account status, currently on a trial period. * &#x60;online&#x60; - Online account status, used for online sales operations. * &#x60;regular&#x60; - Regular account status, indicates the customer has an active contract. * &#x60;overdue&#x60; - Overdue status, the account failed necessary payments after retries. * &#x60;quarantine&#x60; - Quarantine status, the account is suspended due to suspected misuse or security breach. * &#x60;violation&#x60; - Violation status, temporarily suspended due to administrative, technical, security, or policy violations. * &#x60;idle&#x60; - Idle status, the account was removed due to inactivity. * &#x60;terminated&#x60; - Terminated status, the account was shut down by the service provider. * &#x60;voluntary&#x60; - Voluntary status, the account was canceled by its owner. | [readonly] 
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 

## Methods

### NewOrganization

`func NewOrganization(id int64, name string, active bool, lastEditor string, lastModified time.Time, parentId int64, created time.Time, info map[string]interface{}, status string, reason string, type_ string, ) *Organization`

NewOrganization instantiates a new Organization object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationWithDefaults

`func NewOrganizationWithDefaults() *Organization`

NewOrganizationWithDefaults instantiates a new Organization object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Organization) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Organization) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Organization) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *Organization) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Organization) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Organization) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *Organization) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Organization) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Organization) SetActive(v bool)`

SetActive sets Active field to given value.


### GetLastEditor

`func (o *Organization) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Organization) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Organization) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *Organization) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Organization) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Organization) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetParentId

`func (o *Organization) GetParentId() int64`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *Organization) GetParentIdOk() (*int64, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *Organization) SetParentId(v int64)`

SetParentId sets ParentId field to given value.


### GetCreated

`func (o *Organization) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Organization) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Organization) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetInfo

`func (o *Organization) GetInfo() map[string]interface{}`

GetInfo returns the Info field if non-nil, zero value otherwise.

### GetInfoOk

`func (o *Organization) GetInfoOk() (*map[string]interface{}, bool)`

GetInfoOk returns a tuple with the Info field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfo

`func (o *Organization) SetInfo(v map[string]interface{})`

SetInfo sets Info field to given value.


### GetStatus

`func (o *Organization) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Organization) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Organization) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReason

`func (o *Organization) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Organization) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Organization) SetReason(v string)`

SetReason sets Reason field to given value.


### GetType

`func (o *Organization) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Organization) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Organization) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


