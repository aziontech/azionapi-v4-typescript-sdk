# VersionBuildRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TraceId** | Pointer to **string** | Trace ID for observability | [optional] [default to ""]
**Comment** | Pointer to **string** | Comment for this build request | [optional] [default to ""]

## Methods

### NewVersionBuildRequest

`func NewVersionBuildRequest() *VersionBuildRequest`

NewVersionBuildRequest instantiates a new VersionBuildRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionBuildRequestWithDefaults

`func NewVersionBuildRequestWithDefaults() *VersionBuildRequest`

NewVersionBuildRequestWithDefaults instantiates a new VersionBuildRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTraceId

`func (o *VersionBuildRequest) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *VersionBuildRequest) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *VersionBuildRequest) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *VersionBuildRequest) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### GetComment

`func (o *VersionBuildRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *VersionBuildRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *VersionBuildRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *VersionBuildRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


