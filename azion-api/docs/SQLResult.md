# SQLResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Columns** | **[]interface{}** | List of column names | 
**Rows** | **[]interface{}** | List of result rows | 

## Methods

### NewSQLResult

`func NewSQLResult(columns []interface{}, rows []interface{}, ) *SQLResult`

NewSQLResult instantiates a new SQLResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSQLResultWithDefaults

`func NewSQLResultWithDefaults() *SQLResult`

NewSQLResultWithDefaults instantiates a new SQLResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumns

`func (o *SQLResult) GetColumns() []interface{}`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *SQLResult) GetColumnsOk() (*[]interface{}, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *SQLResult) SetColumns(v []interface{})`

SetColumns sets Columns field to given value.


### GetRows

`func (o *SQLResult) GetRows() []interface{}`

GetRows returns the Rows field if non-nil, zero value otherwise.

### GetRowsOk

`func (o *SQLResult) GetRowsOk() (*[]interface{}, bool)`

GetRowsOk returns a tuple with the Rows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRows

`func (o *SQLResult) SetRows(v []interface{})`

SetRows sets Rows field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


