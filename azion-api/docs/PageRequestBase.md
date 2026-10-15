# PageRequestBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | [**CodeEnum**](CodeEnum.md) |  | 
**Page** | [**PageConnectorRequest**](PageConnectorRequest.md) |  | 

## Methods

### NewPageRequestBase

`func NewPageRequestBase(code CodeEnum, page PageConnectorRequest, ) *PageRequestBase`

NewPageRequestBase instantiates a new PageRequestBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageRequestBaseWithDefaults

`func NewPageRequestBaseWithDefaults() *PageRequestBase`

NewPageRequestBaseWithDefaults instantiates a new PageRequestBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *PageRequestBase) GetCode() CodeEnum`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PageRequestBase) GetCodeOk() (*CodeEnum, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PageRequestBase) SetCode(v CodeEnum)`

SetCode sets Code field to given value.


### GetPage

`func (o *PageRequestBase) GetPage() PageConnectorRequest`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *PageRequestBase) GetPageOk() (*PageConnectorRequest, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *PageRequestBase) SetPage(v PageConnectorRequest)`

SetPage sets Page field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


