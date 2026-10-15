# PatchedBucketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkloadsAccess** | Pointer to **string** | * &#x60;read_only&#x60; - read_only * &#x60;read_write&#x60; - read_write * &#x60;restricted&#x60; - restricted | [optional] 

## Methods

### NewPatchedBucketRequest

`func NewPatchedBucketRequest() *PatchedBucketRequest`

NewPatchedBucketRequest instantiates a new PatchedBucketRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedBucketRequestWithDefaults

`func NewPatchedBucketRequestWithDefaults() *PatchedBucketRequest`

NewPatchedBucketRequestWithDefaults instantiates a new PatchedBucketRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkloadsAccess

`func (o *PatchedBucketRequest) GetWorkloadsAccess() string`

GetWorkloadsAccess returns the WorkloadsAccess field if non-nil, zero value otherwise.

### GetWorkloadsAccessOk

`func (o *PatchedBucketRequest) GetWorkloadsAccessOk() (*string, bool)`

GetWorkloadsAccessOk returns a tuple with the WorkloadsAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadsAccess

`func (o *PatchedBucketRequest) SetWorkloadsAccess(v string)`

SetWorkloadsAccess sets WorkloadsAccess field to given value.

### HasWorkloadsAccess

`func (o *PatchedBucketRequest) HasWorkloadsAccess() bool`

HasWorkloadsAccess returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


