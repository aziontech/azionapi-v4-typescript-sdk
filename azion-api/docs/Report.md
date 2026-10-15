# Report

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | [readonly] 
**Description** | **string** |  | 
**Type** | **string** | * &#x60;big-numbers&#x60; - Big numbers report type, used for key performance indicators (KPIs).             Ideal for highlighting a single numeric value in a visually striking way. * &#x60;line&#x60; - Line report type, used for time series analysis, ideal for showing trends, growth or decrease. * &#x60;map&#x60; - Map report type, used for geographic analysis, visualization of demographic data,             monitoring of events in different locations. * &#x60;ordered-bar&#x60; - Ordered bar report type, used for category ranking, performance comparison,             frequency distribution analysis, ideal for highlighting highest or lowest values. * &#x60;pie&#x60; - Pie chart report type, used for composition analysis, comparing parts of a whole,             visualizing percentages. Ideal for showing the distribution of a data set into parts. | 
**XAxis** | Pointer to **string** |  | [optional] 
**AggregationType** | **string** | * &#x60;avg&#x60; - Aggregation by average. * &#x60;sum&#x60; - Aggregation by sum. | 
**DataUnit** | **string** | * &#x60;bits-per-second&#x60; - Sets the data unit to bits per second. * &#x60;bytes&#x60; - Sets the data unit to bytes. * &#x60;count&#x60; - Sets the data unit to counter. * &#x60;per-second&#x60; - Sets the data unit to per second. * &#x60;percentage&#x60; - Sets the data unit to percentage. | 
**Queries** | [**[]BaseQuery**](BaseQuery.md) |  | 
**CreatedAt** | **time.Time** |  | [readonly] 
**Order** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Rotated** | Pointer to **bool** |  | [optional] 
**ComparisonType** | Pointer to **string** | * &#x60;inverse&#x60; - The lower the value, the better the result or performance. * &#x60;neutral&#x60; - There is no general rule to say whether a value is good or bad, as it depends on the context. * &#x60;regular&#x60; - The higher the value, the better the result or performance. | [optional] 
**HelpCenterPath** | Pointer to **NullableString** |  | [optional] 
**Library** | Pointer to **bool** |  | [optional] 

## Methods

### NewReport

`func NewReport(id int64, description string, type_ string, aggregationType string, dataUnit string, queries []BaseQuery, createdAt time.Time, order string, name string, ) *Report`

NewReport instantiates a new Report object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportWithDefaults

`func NewReportWithDefaults() *Report`

NewReportWithDefaults instantiates a new Report object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Report) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Report) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Report) SetId(v int64)`

SetId sets Id field to given value.


### GetDescription

`func (o *Report) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Report) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Report) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *Report) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Report) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Report) SetType(v string)`

SetType sets Type field to given value.


### GetXAxis

`func (o *Report) GetXAxis() string`

GetXAxis returns the XAxis field if non-nil, zero value otherwise.

### GetXAxisOk

`func (o *Report) GetXAxisOk() (*string, bool)`

GetXAxisOk returns a tuple with the XAxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXAxis

`func (o *Report) SetXAxis(v string)`

SetXAxis sets XAxis field to given value.

### HasXAxis

`func (o *Report) HasXAxis() bool`

HasXAxis returns a boolean if a field has been set.

### GetAggregationType

`func (o *Report) GetAggregationType() string`

GetAggregationType returns the AggregationType field if non-nil, zero value otherwise.

### GetAggregationTypeOk

`func (o *Report) GetAggregationTypeOk() (*string, bool)`

GetAggregationTypeOk returns a tuple with the AggregationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregationType

`func (o *Report) SetAggregationType(v string)`

SetAggregationType sets AggregationType field to given value.


### GetDataUnit

`func (o *Report) GetDataUnit() string`

GetDataUnit returns the DataUnit field if non-nil, zero value otherwise.

### GetDataUnitOk

`func (o *Report) GetDataUnitOk() (*string, bool)`

GetDataUnitOk returns a tuple with the DataUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataUnit

`func (o *Report) SetDataUnit(v string)`

SetDataUnit sets DataUnit field to given value.


### GetQueries

`func (o *Report) GetQueries() []BaseQuery`

GetQueries returns the Queries field if non-nil, zero value otherwise.

### GetQueriesOk

`func (o *Report) GetQueriesOk() (*[]BaseQuery, bool)`

GetQueriesOk returns a tuple with the Queries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueries

`func (o *Report) SetQueries(v []BaseQuery)`

SetQueries sets Queries field to given value.


### GetCreatedAt

`func (o *Report) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Report) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Report) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetOrder

`func (o *Report) GetOrder() string`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *Report) GetOrderOk() (*string, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *Report) SetOrder(v string)`

SetOrder sets Order field to given value.


### GetName

`func (o *Report) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Report) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Report) SetName(v string)`

SetName sets Name field to given value.


### GetRotated

`func (o *Report) GetRotated() bool`

GetRotated returns the Rotated field if non-nil, zero value otherwise.

### GetRotatedOk

`func (o *Report) GetRotatedOk() (*bool, bool)`

GetRotatedOk returns a tuple with the Rotated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotated

`func (o *Report) SetRotated(v bool)`

SetRotated sets Rotated field to given value.

### HasRotated

`func (o *Report) HasRotated() bool`

HasRotated returns a boolean if a field has been set.

### GetComparisonType

`func (o *Report) GetComparisonType() string`

GetComparisonType returns the ComparisonType field if non-nil, zero value otherwise.

### GetComparisonTypeOk

`func (o *Report) GetComparisonTypeOk() (*string, bool)`

GetComparisonTypeOk returns a tuple with the ComparisonType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComparisonType

`func (o *Report) SetComparisonType(v string)`

SetComparisonType sets ComparisonType field to given value.

### HasComparisonType

`func (o *Report) HasComparisonType() bool`

HasComparisonType returns a boolean if a field has been set.

### GetHelpCenterPath

`func (o *Report) GetHelpCenterPath() string`

GetHelpCenterPath returns the HelpCenterPath field if non-nil, zero value otherwise.

### GetHelpCenterPathOk

`func (o *Report) GetHelpCenterPathOk() (*string, bool)`

GetHelpCenterPathOk returns a tuple with the HelpCenterPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpCenterPath

`func (o *Report) SetHelpCenterPath(v string)`

SetHelpCenterPath sets HelpCenterPath field to given value.

### HasHelpCenterPath

`func (o *Report) HasHelpCenterPath() bool`

HasHelpCenterPath returns a boolean if a field has been set.

### SetHelpCenterPathNil

`func (o *Report) SetHelpCenterPathNil(b bool)`

 SetHelpCenterPathNil sets the value for HelpCenterPath to be an explicit nil

### UnsetHelpCenterPath
`func (o *Report) UnsetHelpCenterPath()`

UnsetHelpCenterPath ensures that no value is present for HelpCenterPath, not even an explicit nil
### GetLibrary

`func (o *Report) GetLibrary() bool`

GetLibrary returns the Library field if non-nil, zero value otherwise.

### GetLibraryOk

`func (o *Report) GetLibraryOk() (*bool, bool)`

GetLibraryOk returns a tuple with the Library field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLibrary

`func (o *Report) SetLibrary(v bool)`

SetLibrary sets Library field to given value.

### HasLibrary

`func (o *Report) HasLibrary() bool`

HasLibrary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


