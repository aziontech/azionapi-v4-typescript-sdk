# SQLStatementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Statements** | **[]string** | List of SQL statements to execute | 

## Methods

### NewSQLStatementsRequest

`func NewSQLStatementsRequest(statements []string, ) *SQLStatementsRequest`

NewSQLStatementsRequest instantiates a new SQLStatementsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSQLStatementsRequestWithDefaults

`func NewSQLStatementsRequestWithDefaults() *SQLStatementsRequest`

NewSQLStatementsRequestWithDefaults instantiates a new SQLStatementsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatements

`func (o *SQLStatementsRequest) GetStatements() []string`

GetStatements returns the Statements field if non-nil, zero value otherwise.

### GetStatementsOk

`func (o *SQLStatementsRequest) GetStatementsOk() (*[]string, bool)`

GetStatementsOk returns a tuple with the Statements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatements

`func (o *SQLStatementsRequest) SetStatements(v []string)`

SetStatements sets Statements field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


