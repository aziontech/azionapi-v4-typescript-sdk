# BucketObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** |  | [readonly] 
**LastModified** | **time.Time** |  | [readonly] 
**Size** | **int64** | Size of the object in bytes | [readonly] 
**IsFolder** | **bool** | Whether this entry represents a folder | [readonly] 

## Methods

### NewBucketObject

`func NewBucketObject(key string, lastModified time.Time, size int64, isFolder bool, ) *BucketObject`

NewBucketObject instantiates a new BucketObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBucketObjectWithDefaults

`func NewBucketObjectWithDefaults() *BucketObject`

NewBucketObjectWithDefaults instantiates a new BucketObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *BucketObject) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *BucketObject) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *BucketObject) SetKey(v string)`

SetKey sets Key field to given value.


### GetLastModified

`func (o *BucketObject) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *BucketObject) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *BucketObject) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetSize

`func (o *BucketObject) GetSize() int64`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *BucketObject) GetSizeOk() (*int64, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *BucketObject) SetSize(v int64)`

SetSize sets Size field to given value.


### GetIsFolder

`func (o *BucketObject) GetIsFolder() bool`

GetIsFolder returns the IsFolder field if non-nil, zero value otherwise.

### GetIsFolderOk

`func (o *BucketObject) GetIsFolderOk() (*bool, bool)`

GetIsFolderOk returns a tuple with the IsFolder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsFolder

`func (o *BucketObject) SetIsFolder(v bool)`

SetIsFolder sets IsFolder field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


