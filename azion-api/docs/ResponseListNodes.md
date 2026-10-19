# ResponseListNodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**HashId** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Status** | [**StatusEnum**](StatusEnum.md) |  | 
**Active** | **bool** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **string** |  | [readonly] 
**Modules** | Pointer to **interface{}** |  | [optional] 
**ProductVersion** | **string** |  | [readonly] 

## Methods

### NewResponseListNodes

`func NewResponseListNodes(id int64, hashId string, name string, status StatusEnum, active bool, lastEditor string, lastModified string, productVersion string, ) *ResponseListNodes`

NewResponseListNodes instantiates a new ResponseListNodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseListNodesWithDefaults

`func NewResponseListNodesWithDefaults() *ResponseListNodes`

NewResponseListNodesWithDefaults instantiates a new ResponseListNodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ResponseListNodes) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResponseListNodes) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResponseListNodes) SetId(v int64)`

SetId sets Id field to given value.


### GetHashId

`func (o *ResponseListNodes) GetHashId() string`

GetHashId returns the HashId field if non-nil, zero value otherwise.

### GetHashIdOk

`func (o *ResponseListNodes) GetHashIdOk() (*string, bool)`

GetHashIdOk returns a tuple with the HashId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHashId

`func (o *ResponseListNodes) SetHashId(v string)`

SetHashId sets HashId field to given value.


### GetName

`func (o *ResponseListNodes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResponseListNodes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResponseListNodes) SetName(v string)`

SetName sets Name field to given value.


### GetStatus

`func (o *ResponseListNodes) GetStatus() StatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ResponseListNodes) GetStatusOk() (*StatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ResponseListNodes) SetStatus(v StatusEnum)`

SetStatus sets Status field to given value.


### GetActive

`func (o *ResponseListNodes) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ResponseListNodes) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ResponseListNodes) SetActive(v bool)`

SetActive sets Active field to given value.


### GetLastEditor

`func (o *ResponseListNodes) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ResponseListNodes) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ResponseListNodes) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *ResponseListNodes) GetLastModified() string`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ResponseListNodes) GetLastModifiedOk() (*string, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ResponseListNodes) SetLastModified(v string)`

SetLastModified sets LastModified field to given value.


### GetModules

`func (o *ResponseListNodes) GetModules() interface{}`

GetModules returns the Modules field if non-nil, zero value otherwise.

### GetModulesOk

`func (o *ResponseListNodes) GetModulesOk() (*interface{}, bool)`

GetModulesOk returns a tuple with the Modules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModules

`func (o *ResponseListNodes) SetModules(v interface{})`

SetModules sets Modules field to given value.

### HasModules

`func (o *ResponseListNodes) HasModules() bool`

HasModules returns a boolean if a field has been set.

### SetModulesNil

`func (o *ResponseListNodes) SetModulesNil(b bool)`

 SetModulesNil sets the value for Modules to be an explicit nil

### UnsetModules
`func (o *ResponseListNodes) UnsetModules()`

UnsetModules ensures that no value is present for Modules, not even an explicit nil
### GetProductVersion

`func (o *ResponseListNodes) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *ResponseListNodes) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *ResponseListNodes) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


