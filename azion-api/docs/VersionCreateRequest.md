# VersionCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceVersion** | Pointer to **NullableString** | ID of the version to clone from. If omitted, clones latest ready. | [optional] 
**Comment** | Pointer to **string** | Description for the new version | [optional] [default to ""]
**Override** | Pointer to **map[string]interface{}** | Field overrides to apply on the cloned version. | [optional] 

## Methods

### NewVersionCreateRequest

`func NewVersionCreateRequest() *VersionCreateRequest`

NewVersionCreateRequest instantiates a new VersionCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionCreateRequestWithDefaults

`func NewVersionCreateRequestWithDefaults() *VersionCreateRequest`

NewVersionCreateRequestWithDefaults instantiates a new VersionCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceVersion

`func (o *VersionCreateRequest) GetSourceVersion() string`

GetSourceVersion returns the SourceVersion field if non-nil, zero value otherwise.

### GetSourceVersionOk

`func (o *VersionCreateRequest) GetSourceVersionOk() (*string, bool)`

GetSourceVersionOk returns a tuple with the SourceVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceVersion

`func (o *VersionCreateRequest) SetSourceVersion(v string)`

SetSourceVersion sets SourceVersion field to given value.

### HasSourceVersion

`func (o *VersionCreateRequest) HasSourceVersion() bool`

HasSourceVersion returns a boolean if a field has been set.

### SetSourceVersionNil

`func (o *VersionCreateRequest) SetSourceVersionNil(b bool)`

 SetSourceVersionNil sets the value for SourceVersion to be an explicit nil

### UnsetSourceVersion
`func (o *VersionCreateRequest) UnsetSourceVersion()`

UnsetSourceVersion ensures that no value is present for SourceVersion, not even an explicit nil
### GetComment

`func (o *VersionCreateRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *VersionCreateRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *VersionCreateRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *VersionCreateRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetOverride

`func (o *VersionCreateRequest) GetOverride() map[string]interface{}`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *VersionCreateRequest) GetOverrideOk() (*map[string]interface{}, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *VersionCreateRequest) SetOverride(v map[string]interface{})`

SetOverride sets Override field to given value.

### HasOverride

`func (o *VersionCreateRequest) HasOverride() bool`

HasOverride returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


