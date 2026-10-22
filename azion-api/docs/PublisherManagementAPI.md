# .PublisherManagementApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublisherDetails**](PublisherManagementApi.md#getPublisherDetails) | **GET** /marketplace/publisher | Get publisher details
[**updatePublisherDetails**](PublisherManagementApi.md#updatePublisherDetails) | **PUT** /marketplace/publisher | Update publisher details


# **getPublisherDetails**
> ResponseRetrievePublisher getPublisherDetails()

Get details of the publisher associated with the authenticated user\'s organization

### Example


```typescript
import { createConfiguration, PublisherManagementApi } from '';
import type { PublisherManagementApiGetPublisherDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PublisherManagementApi(configuration);

const request: PublisherManagementApiGetPublisherDetailsRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.getPublisherDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrievePublisher**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePublisherDetails**
> ResponsePublisher updatePublisherDetails(publisherRequest)

Update details of the publisher associated with the authenticated user\'s organization

### Example


```typescript
import { createConfiguration, PublisherManagementApi } from '';
import type { PublisherManagementApiUpdatePublisherDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PublisherManagementApi(configuration);

const request: PublisherManagementApiUpdatePublisherDetailsRequest = {
  
  publisherRequest: {
    icon: "icon_example",
  },
};

const data = await apiInstance.updatePublisherDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publisherRequest** | **PublisherRequest**|  |


### Return type

**ResponsePublisher**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


