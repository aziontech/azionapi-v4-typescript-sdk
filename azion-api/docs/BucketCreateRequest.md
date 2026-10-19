# BucketCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**WorkloadsAccess** | **string** | * &#x60;read_only&#x60; - read_only * &#x60;read_write&#x60; - read_write * &#x60;restricted&#x60; - restricted | 

## Methods

### NewBucketCreateRequest

`func NewBucketCreateRequest(name string, workloadsAccess string, ) *BucketCreateRequest`

NewBucketCreateRequest instantiates a new BucketCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBucketCreateRequestWithDefaults

`func NewBucketCreateRequestWithDefaults() *BucketCreateRequest`

NewBucketCreateRequestWithDefaults instantiates a new BucketCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *BucketCreateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BucketCreateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BucketCreateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetWorkloadsAccess

`func (o *BucketCreateRequest) GetWorkloadsAccess() string`

GetWorkloadsAccess returns the WorkloadsAccess field if non-nil, zero value otherwise.

### GetWorkloadsAccessOk

`func (o *BucketCreateRequest) GetWorkloadsAccessOk() (*string, bool)`

GetWorkloadsAccessOk returns a tuple with the WorkloadsAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkloadsAccess

`func (o *BucketCreateRequest) SetWorkloadsAccess(v string)`

SetWorkloadsAccess sets WorkloadsAccess field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


