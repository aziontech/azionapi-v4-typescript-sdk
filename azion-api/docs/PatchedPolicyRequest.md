# PatchedPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**Rules** | Pointer to [**[]PolicyRuleRequest**](PolicyRuleRequest.md) |  | [optional] 

## Methods

### NewPatchedPolicyRequest

`func NewPatchedPolicyRequest() *PatchedPolicyRequest`

NewPatchedPolicyRequest instantiates a new PatchedPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatchedPolicyRequestWithDefaults

`func NewPatchedPolicyRequestWithDefaults() *PatchedPolicyRequest`

NewPatchedPolicyRequestWithDefaults instantiates a new PatchedPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatchedPolicyRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatchedPolicyRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatchedPolicyRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PatchedPolicyRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *PatchedPolicyRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PatchedPolicyRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PatchedPolicyRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PatchedPolicyRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRules

`func (o *PatchedPolicyRequest) GetRules() []PolicyRuleRequest`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *PatchedPolicyRequest) GetRulesOk() (*[]PolicyRuleRequest, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *PatchedPolicyRequest) SetRules(v []PolicyRuleRequest)`

SetRules sets Rules field to given value.

### HasRules

`func (o *PatchedPolicyRequest) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


