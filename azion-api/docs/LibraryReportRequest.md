# LibraryReportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **string** |  | 
**Type** | **string** | * &#x60;big-numbers&#x60; - Big numbers report type, used for key performance indicators (KPIs).             Ideal for highlighting a single numeric value in a visually striking way. * &#x60;line&#x60; - Line report type, used for time series analysis, ideal for showing trends, growth or decrease. * &#x60;map&#x60; - Map report type, used for geographic analysis, visualization of demographic data,             monitoring of events in different locations. * &#x60;ordered-bar&#x60; - Ordered bar report type, used for category ranking, performance comparison,             frequency distribution analysis, ideal for highlighting highest or lowest values. * &#x60;pie&#x60; - Pie chart report type, used for composition analysis, comparing parts of a whole,             visualizing percentages. Ideal for showing the distribution of a data set into parts. | 
**XAxis** | Pointer to **string** |  | [optional] 
**AggregationType** | **string** | * &#x60;avg&#x60; - Aggregation by average. * &#x60;sum&#x60; - Aggregation by sum. | 
**DataUnit** | **string** | * &#x60;bits-per-second&#x60; - Sets the data unit to bits per second. * &#x60;bytes&#x60; - Sets the data unit to bytes. * &#x60;count&#x60; - Sets the data unit to counter. * &#x60;per-second&#x60; - Sets the data unit to per second. * &#x60;percentage&#x60; - Sets the data unit to percentage. | 
**Queries** | [**[]BaseQueryRequest**](BaseQueryRequest.md) |  | 
**Library** | Pointer to **bool** |  | [optional] [default to true]
**Name** | **string** |  | 
**Scope** | **string** | * &#x60;azion&#x60; - Items that have Azion scope can be shared to any account that has access permission. * &#x60;account&#x60; - Items that have Account scope can only be shared with account users. * &#x60;user&#x60; - Items that have User scope will only be available to the account user. | 
**Rotated** | Pointer to **bool** |  | [optional] 
**ComparisonType** | Pointer to **string** | * &#x60;inverse&#x60; - The lower the value, the better the result or performance. * &#x60;neutral&#x60; - There is no general rule to say whether a value is good or bad, as it depends on the context. * &#x60;regular&#x60; - The higher the value, the better the result or performance. | [optional] 
**HelpCenterPath** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewLibraryReportRequest

`func NewLibraryReportRequest(description string, type_ string, aggregationType string, dataUnit string, queries []BaseQueryRequest, name string, scope string, ) *LibraryReportRequest`

NewLibraryReportRequest instantiates a new LibraryReportRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLibraryReportRequestWithDefaults

`func NewLibraryReportRequestWithDefaults() *LibraryReportRequest`

NewLibraryReportRequestWithDefaults instantiates a new LibraryReportRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *LibraryReportRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LibraryReportRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LibraryReportRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *LibraryReportRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LibraryReportRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LibraryReportRequest) SetType(v string)`

SetType sets Type field to given value.


### GetXAxis

`func (o *LibraryReportRequest) GetXAxis() string`

GetXAxis returns the XAxis field if non-nil, zero value otherwise.

### GetXAxisOk

`func (o *LibraryReportRequest) GetXAxisOk() (*string, bool)`

GetXAxisOk returns a tuple with the XAxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXAxis

`func (o *LibraryReportRequest) SetXAxis(v string)`

SetXAxis sets XAxis field to given value.

### HasXAxis

`func (o *LibraryReportRequest) HasXAxis() bool`

HasXAxis returns a boolean if a field has been set.

### GetAggregationType

`func (o *LibraryReportRequest) GetAggregationType() string`

GetAggregationType returns the AggregationType field if non-nil, zero value otherwise.

### GetAggregationTypeOk

`func (o *LibraryReportRequest) GetAggregationTypeOk() (*string, bool)`

GetAggregationTypeOk returns a tuple with the AggregationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationType

`func (o *LibraryReportRequest) SetAggregationType(v string)`

SetAggregationType sets AggregationType field to given value.


### GetDataUnit

`func (o *LibraryReportRequest) GetDataUnit() string`

GetDataUnit returns the DataUnit field if non-nil, zero value otherwise.

### GetDataUnitOk

`func (o *LibraryReportRequest) GetDataUnitOk() (*string, bool)`

GetDataUnitOk returns a tuple with the DataUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataUnit

`func (o *LibraryReportRequest) SetDataUnit(v string)`

SetDataUnit sets DataUnit field to given value.


### GetQueries

`func (o *LibraryReportRequest) GetQueries() []BaseQueryRequest`

GetQueries returns the Queries field if non-nil, zero value otherwise.

### GetQueriesOk

`func (o *LibraryReportRequest) GetQueriesOk() (*[]BaseQueryRequest, bool)`

GetQueriesOk returns a tuple with the Queries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueries

`func (o *LibraryReportRequest) SetQueries(v []BaseQueryRequest)`

SetQueries sets Queries field to given value.


### GetLibrary

`func (o *LibraryReportRequest) GetLibrary() bool`

GetLibrary returns the Library field if non-nil, zero value otherwise.

### GetLibraryOk

`func (o *LibraryReportRequest) GetLibraryOk() (*bool, bool)`

GetLibraryOk returns a tuple with the Library field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLibrary

`func (o *LibraryReportRequest) SetLibrary(v bool)`

SetLibrary sets Library field to given value.

### HasLibrary

`func (o *LibraryReportRequest) HasLibrary() bool`

HasLibrary returns a boolean if a field has been set.

### GetName

`func (o *LibraryReportRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LibraryReportRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LibraryReportRequest) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *LibraryReportRequest) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *LibraryReportRequest) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *LibraryReportRequest) SetScope(v string)`

SetScope sets Scope field to given value.


### GetRotated

`func (o *LibraryReportRequest) GetRotated() bool`

GetRotated returns the Rotated field if non-nil, zero value otherwise.

### GetRotatedOk

`func (o *LibraryReportRequest) GetRotatedOk() (*bool, bool)`

GetRotatedOk returns a tuple with the Rotated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotated

`func (o *LibraryReportRequest) SetRotated(v bool)`

SetRotated sets Rotated field to given value.

### HasRotated

`func (o *LibraryReportRequest) HasRotated() bool`

HasRotated returns a boolean if a field has been set.

### GetComparisonType

`func (o *LibraryReportRequest) GetComparisonType() string`

GetComparisonType returns the ComparisonType field if non-nil, zero value otherwise.

### GetComparisonTypeOk

`func (o *LibraryReportRequest) GetComparisonTypeOk() (*string, bool)`

GetComparisonTypeOk returns a tuple with the ComparisonType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComparisonType

`func (o *LibraryReportRequest) SetComparisonType(v string)`

SetComparisonType sets ComparisonType field to given value.

### HasComparisonType

`func (o *LibraryReportRequest) HasComparisonType() bool`

HasComparisonType returns a boolean if a field has been set.

### GetHelpCenterPath

`func (o *LibraryReportRequest) GetHelpCenterPath() string`

GetHelpCenterPath returns the HelpCenterPath field if non-nil, zero value otherwise.

### GetHelpCenterPathOk

`func (o *LibraryReportRequest) GetHelpCenterPathOk() (*string, bool)`

GetHelpCenterPathOk returns a tuple with the HelpCenterPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpCenterPath

`func (o *LibraryReportRequest) SetHelpCenterPath(v string)`

SetHelpCenterPath sets HelpCenterPath field to given value.

### HasHelpCenterPath

`func (o *LibraryReportRequest) HasHelpCenterPath() bool`

HasHelpCenterPath returns a boolean if a field has been set.

### SetHelpCenterPathNil

`func (o *LibraryReportRequest) SetHelpCenterPathNil(b bool)`

 SetHelpCenterPathNil sets the value for HelpCenterPath to be an explicit nil

### UnsetHelpCenterPath
`func (o *LibraryReportRequest) UnsetHelpCenterPath()`

UnsetHelpCenterPath ensures that no value is present for HelpCenterPath, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


