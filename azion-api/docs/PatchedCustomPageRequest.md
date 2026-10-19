# PatchedCustomPageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Pages** | Pointer to [**[]PageRequestBase**](PageRequestBase.md) |  | [optional] 

## Methods

### NewPatchedCustomPageRequest

`func NewPatchedCustomPageRequest() *PatchedCustomPageRequest`

NewPatchedCustomPageRequest instantiates a new PatchedCustomPageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedCustomPageRequestWithDefaults

`func NewPatchedCustomPageRequestWithDefaults() *PatchedCustomPageRequest`

NewPatchedCustomPageRequestWithDefaults instantiates a new PatchedCustomPageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedCustomPageRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedCustomPageRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedCustomPageRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedCustomPageRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedCustomPageRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedCustomPageRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedCustomPageRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedCustomPageRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetPages

`func (o *PatchedCustomPageRequest) GetPages() []PageRequestBase`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *PatchedCustomPageRequest) GetPagesOk() (*[]PageRequestBase, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *PatchedCustomPageRequest) SetPages(v []PageRequestBase)`

SetPages sets Pages field to given value.

### HasPages

`func (o *PatchedCustomPageRequest) HasPages() bool`

HasPages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


