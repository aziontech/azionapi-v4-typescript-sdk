# ChatThread

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ThreadId** | **int64** |  | [readonly] 
**AccountId** | **NullableInt64** |  | [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**LastModified** | **time.Time** |  | [readonly] 
**LastEditor** | **string** |  | [readonly] 

## Methods

### NewChatThread

`func NewChatThread(threadId int64, accountId NullableInt64, lastModified time.Time, lastEditor string, ) *ChatThread`

NewChatThread instantiates a new ChatThread object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatThreadWithDefaults

`func NewChatThreadWithDefaults() *ChatThread`

NewChatThreadWithDefaults instantiates a new ChatThread object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetThreadId

`func (o *ChatThread) GetThreadId() int64`

GetThreadId returns the ThreadId field if non-nil, zero value otherwise.

### GetThreadIdOk

`func (o *ChatThread) GetThreadIdOk() (*int64, bool)`

GetThreadIdOk returns a tuple with the ThreadId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreadId

`func (o *ChatThread) SetThreadId(v int64)`

SetThreadId sets ThreadId field to given value.


### GetAccountId

`func (o *ChatThread) GetAccountId() int64`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ChatThread) GetAccountIdOk() (*int64, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ChatThread) SetAccountId(v int64)`

SetAccountId sets AccountId field to given value.


### SetAccountIdNil

`func (o *ChatThread) SetAccountIdNil(b bool)`

 SetAccountIdNil sets the value for AccountId to be an explicit nil

### UnsetAccountId
`func (o *ChatThread) UnsetAccountId()`

UnsetAccountId ensures that no value is present for AccountId, not even an explicit nil
### GetName

`func (o *ChatThread) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChatThread) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChatThread) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ChatThread) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ChatThread) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChatThread) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChatThread) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChatThread) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLastModified

`func (o *ChatThread) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *ChatThread) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *ChatThread) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.


### GetLastEditor

`func (o *ChatThread) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ChatThread) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ChatThread) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


