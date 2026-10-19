# ResponseListAccount

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
**Info** | **map[string]map[string]interface{}** |  | [readonly] 
**Type** | **string** | * &#x60;Brand&#x60; - Brand * &#x60;Reseller&#x60; - Reseller * &#x60;Organization&#x60; - Organization * &#x60;Workspace&#x60; - Workspace | 
**Status** | **string** | * &#x60;active&#x60; - Active account status, can be used for regular operations. * &#x60;suspended&#x60; - Suspended account status, for accounts with limited access to support and payments only. * &#x60;disabled&#x60; - Disabled account status, services are offline, user can only access support. * &#x60;closed&#x60; - Closed account status, services are offline but can be reactivated. | [readonly] 
**Reason** | **string** | * &#x60;trial&#x60; - Trial account status, currently on a trial period. * &#x60;online&#x60; - Online account status, used for online sales operations. * &#x60;regular&#x60; - Regular account status, indicates the customer has an active contract. * &#x60;overdue&#x60; - Overdue status, the account failed necessary payments after retries. * &#x60;quarantine&#x60; - Quarantine status, the account is suspended due to suspected misuse or security breach. * &#x60;violation&#x60; - Violation status, temporarily suspended due to administrative, technical, security, or policy violations. * &#x60;idle&#x60; - Idle status, the account was removed due to inactivity. * &#x60;terminated&#x60; - Terminated status, the account was shut down by the service provider. * &#x60;voluntary&#x60; - Voluntary status, the account was canceled by its owner. | [readonly] 
**CurrencyIsoCode** | **string** | * &#x60;USD&#x60; - USD * &#x60;BRL&#x60; - BRL | 
**TermsOfServiceUrl** | Pointer to **string** |  | [optional] [default to "https://www.azion.com/pt-br/documentacao/contratos/tds/"]
**WorkspaceId** | **string** |  | [readonly] 

## Methods

### NewResponseListAccount

`func NewResponseListAccount(id int64, name string, active bool, lastEditor string, lastModified time.Time, parentId int64, created time.Time, info map[string]map[string]interface{}, type_ string, status string, reason string, currencyIsoCode string, workspaceId string, ) *ResponseListAccount`

NewResponseListAccount instantiates a new ResponseListAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListAccountWithDefaults

`func NewResponseListAccountWithDefaults() *ResponseListAccount`

NewResponseListAccountWithDefaults instantiates a new ResponseListAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListAccount) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListAccount) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListAccount) SetId(v int64)`

SetId sets Id field to given value.


### GetName

`func (o *ResponseListAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponseListAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponseListAccount) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *ResponseListAccount) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListAccount) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListAccount) SetActive(v bool)`

SetActive sets Active field to given value.


### GetLastEditor

`func (o *ResponseListAccount) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListAccount) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListAccount) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListAccount) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListAccount) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListAccount) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetParentId

`func (o *ResponseListAccount) GetParentId() int64`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *ResponseListAccount) GetParentIdOk() (*int64, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *ResponseListAccount) SetParentId(v int64)`

SetParentId sets ParentId field to given value.


### GetCreated

`func (o *ResponseListAccount) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ResponseListAccount) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ResponseListAccount) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetInfo

`func (o *ResponseListAccount) GetInfo() map[string]map[string]interface{}`

GetInfo returns the Info field if non-nil, zero value otherwise.

### GetInfoOk

`func (o *ResponseListAccount) GetInfoOk() (*map[string]map[string]interface{}, bool)`

GetInfoOk returns a tuple with the Info field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfo

`func (o *ResponseListAccount) SetInfo(v map[string]map[string]interface{})`

SetInfo sets Info field to given value.


### GetType

`func (o *ResponseListAccount) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResponseListAccount) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResponseListAccount) SetType(v string)`

SetType sets Type field to given value.


### GetStatus

`func (o *ResponseListAccount) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ResponseListAccount) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ResponseListAccount) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetReason

`func (o *ResponseListAccount) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ResponseListAccount) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ResponseListAccount) SetReason(v string)`

SetReason sets Reason field to given value.


### GetCurrencyIsoCode

`func (o *ResponseListAccount) GetCurrencyIsoCode() string`

GetCurrencyIsoCode returns the CurrencyIsoCode field if non-nil, zero value otherwise.

### GetCurrencyIsoCodeOk

`func (o *ResponseListAccount) GetCurrencyIsoCodeOk() (*string, bool)`

GetCurrencyIsoCodeOk returns a tuple with the CurrencyIsoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyIsoCode

`func (o *ResponseListAccount) SetCurrencyIsoCode(v string)`

SetCurrencyIsoCode sets CurrencyIsoCode field to given value.


### GetTermsOfServiceUrl

`func (o *ResponseListAccount) GetTermsOfServiceUrl() string`

GetTermsOfServiceUrl returns the TermsOfServiceUrl field if non-nil, zero value otherwise.

### GetTermsOfServiceUrlOk

`func (o *ResponseListAccount) GetTermsOfServiceUrlOk() (*string, bool)`

GetTermsOfServiceUrlOk returns a tuple with the TermsOfServiceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsOfServiceUrl

`func (o *ResponseListAccount) SetTermsOfServiceUrl(v string)`

SetTermsOfServiceUrl sets TermsOfServiceUrl field to given value.

### HasTermsOfServiceUrl

`func (o *ResponseListAccount) HasTermsOfServiceUrl() bool`

HasTermsOfServiceUrl returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *ResponseListAccount) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *ResponseListAccount) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *ResponseListAccount) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


