# CustomPageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Active** | Pointer to **bool** |  | [optional] [default to true]
**Pages** | [**[]PageRequestBase**](PageRequestBase.md) |  | 

## Methods

### NewCustomPageRequest

`func NewCustomPageRequest(name string, pages []PageRequestBase, ) *CustomPageRequest`

NewCustomPageRequest instantiates a new CustomPageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomPageRequestWithDefaults

`func NewCustomPageRequestWithDefaults() *CustomPageRequest`

NewCustomPageRequestWithDefaults instantiates a new CustomPageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CustomPageRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CustomPageRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CustomPageRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *CustomPageRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CustomPageRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CustomPageRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CustomPageRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetPages

`func (o *CustomPageRequest) GetPages() []PageRequestBase`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *CustomPageRequest) GetPagesOk() (*[]PageRequestBase, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *CustomPageRequest) SetPages(v []PageRequestBase)`

SetPages sets Pages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


