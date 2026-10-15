# ResponseBucketObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContinuationToken** | **NullableString** |  | 
**Results** | [**[]BucketObject**](BucketObject.md) |  | 

## Methods

### NewResponseBucketObject

`func NewResponseBucketObject(continuationToken NullableString, results []BucketObject, ) *ResponseBucketObject`

NewResponseBucketObject instantiates a new ResponseBucketObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponseBucketObjectWithDefaults

`func NewResponseBucketObjectWithDefaults() *ResponseBucketObject`

NewResponseBucketObjectWithDefaults instantiates a new ResponseBucketObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContinuationToken

`func (o *ResponseBucketObject) GetContinuationToken() string`

GetContinuationToken returns the ContinuationToken field if non-nil, zero value otherwise.

### GetContinuationTokenOk

`func (o *ResponseBucketObject) GetContinuationTokenOk() (*string, bool)`

GetContinuationTokenOk returns a tuple with the ContinuationToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinuationToken

`func (o *ResponseBucketObject) SetContinuationToken(v string)`

SetContinuationToken sets ContinuationToken field to given value.


### SetContinuationTokenNil

`func (o *ResponseBucketObject) SetContinuationTokenNil(b bool)`

 SetContinuationTokenNil sets the value for ContinuationToken to be an explicit nil

### UnsetContinuationToken
`func (o *ResponseBucketObject) UnsetContinuationToken()`

UnsetContinuationToken ensures that no value is present for ContinuationToken, not even an explicit nil
### GetResults

`func (o *ResponseBucketObject) GetResults() []BucketObject`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *ResponseBucketObject) GetResultsOk() (*[]BucketObject, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *ResponseBucketObject) SetResults(v []BucketObject)`

SetResults sets Results field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


