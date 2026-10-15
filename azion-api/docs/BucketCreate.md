# BucketCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**WorkloadsAccess** | **string** | * &#x60;read_only&#x60; - read_only * &#x60;read_write&#x60; - read_write * &#x60;restricted&#x60; - restricted | 
**LastEditor** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**ProductVersion** | **string** |  | [readonly] [default to "1.0"]

## Methods

### NewBucketCreate

`func NewBucketCreate(name string, workloadsAccess string, lastEditor string, lastModified time.Time, productVersion string, ) *BucketCreate`

NewBucketCreate instantiates a new BucketCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBucketCreateWithDefaults

`func NewBucketCreateWithDefaults() *BucketCreate`

NewBucketCreateWithDefaults instantiates a new BucketCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *BucketCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BucketCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BucketCreate) SetName(v string)`

SetName sets Name field to given value.


### GetWorkloadsAccess

`func (o *BucketCreate) GetWorkloadsAccess() string`

GetWorkloadsAccess returns the WorkloadsAccess field if non-nil, zero value otherwise.

### GetWorkloadsAccessOk

`func (o *BucketCreate) GetWorkloadsAccessOk() (*string, bool)`

GetWorkloadsAccessOk returns a tuple with the WorkloadsAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadsAccess

`func (o *BucketCreate) SetWorkloadsAccess(v string)`

SetWorkloadsAccess sets WorkloadsAccess field to given value.


### GetLastEditor

`func (o *BucketCreate) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *BucketCreate) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *BucketCreate) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetLastModified

`func (o *BucketCreate) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *BucketCreate) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *BucketCreate) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetProductVersion

`func (o *BucketCreate) GetProductVersion() string`

GetProductVersion returns the ProductVersion field if non-nil, zero value otherwise.

### GetProductVersionOk

`func (o *BucketCreate) GetProductVersionOk() (*string, bool)`

GetProductVersionOk returns a tuple with the ProductVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductVersion

`func (o *BucketCreate) SetProductVersion(v string)`

SetProductVersion sets ProductVersion field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


