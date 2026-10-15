# Publisher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Icon** | **string** |  | 
**OrganizationId** | **int64** |  | [readonly] 
**Created** | **time.Time** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 
**Vendor** | **bool** |  | [readonly] 

## Methods

### NewPublisher

`func NewPublisher(id int64, icon string, organizationId int64, created time.Time, lastModified time.Time, lastEditor string, vendor bool, ) *Publisher`

NewPublisher instantiates a new Publisher object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublisherWithDefaults

`func NewPublisherWithDefaults() *Publisher`

NewPublisherWithDefaults instantiates a new Publisher object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Publisher) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Publisher) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Publisher) SetId(v int64)`

SetId sets Id field to given value.


### GetIcon

`func (o *Publisher) GetIcon() string`

GetIcon returns the Icon field if non-nil, zero value otherwise.

### GetIconOk

`func (o *Publisher) GetIconOk() (*string, bool)`

GetIconOk returns a tuple with the Icon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIcon

`func (o *Publisher) SetIcon(v string)`

SetIcon sets Icon field to given value.


### GetOrganizationId

`func (o *Publisher) GetOrganizationId() int64`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *Publisher) GetOrganizationIdOk() (*int64, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *Publisher) SetOrganizationId(v int64)`

SetOrganizationId sets OrganizationId field to given value.


### GetCreated

`func (o *Publisher) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Publisher) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Publisher) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetLastModified

`func (o *Publisher) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Publisher) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Publisher) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetLastEditor

`func (o *Publisher) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *Publisher) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *Publisher) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetVendor

`func (o *Publisher) GetVendor() bool`

GetVendor returns the Vendor field if non-nil, zero value otherwise.

### GetVendorOk

`func (o *Publisher) GetVendorOk() (*bool, bool)`

GetVendorOk returns a tuple with the Vendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendor

`func (o *Publisher) SetVendor(v bool)`

SetVendor sets Vendor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


