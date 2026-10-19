# DatabaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the database | 
**Active** | Pointer to **bool** | Whether the database is active | [optional] [default to true]

## Methods

### NewDatabaseRequest

`func NewDatabaseRequest(name string, ) *DatabaseRequest`

NewDatabaseRequest instantiates a new DatabaseRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabaseRequestWithDefaults

`func NewDatabaseRequestWithDefaults() *DatabaseRequest`

NewDatabaseRequestWithDefaults instantiates a new DatabaseRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DatabaseRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DatabaseRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DatabaseRequest) SetName(v string)`

SetName sets Name field to given value.


### GetActive

`func (o *DatabaseRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *DatabaseRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *DatabaseRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *DatabaseRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


