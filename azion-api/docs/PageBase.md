# PageBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | [**CodeEnum**](CodeEnum.md) |  | 
**Page** | [**PageConnector**](PageConnector.md) |  | 

## Methods

### NewPageBase

`func NewPageBase(code CodeEnum, page PageConnector, ) *PageBase`

NewPageBase instantiates a new PageBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageBaseWithDefaults

`func NewPageBaseWithDefaults() *PageBase`

NewPageBaseWithDefaults instantiates a new PageBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *PageBase) GetCode() CodeEnum`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PageBase) GetCodeOk() (*CodeEnum, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PageBase) SetCode(v CodeEnum)`

SetCode sets Code field to given value.


### GetPage

`func (o *PageBase) GetPage() PageConnector`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *PageBase) GetPageOk() (*PageConnector, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *PageBase) SetPage(v PageConnector)`

SetPage sets Page field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


