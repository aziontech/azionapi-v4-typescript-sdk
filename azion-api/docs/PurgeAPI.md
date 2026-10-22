# .PurgeApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPurgeRequest**](PurgeApi.md#createPurgeRequest) | **POST** /workspace/purge/{purge_type} | Create a Purge Request


# **createPurgeRequest**
> PurgeResponse createPurgeRequest(purgeRequest)

Create a new Purge Request in your account.

### Example


```typescript
import { createConfiguration, PurgeApi } from '';
import type { PurgeApiCreatePurgeRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PurgeApi(configuration);

const request: PurgeApiCreatePurgeRequestRequest = {
    // type of purge: URL, Wildcard or Cachekey
  purgeType: "cachekey",
  
  purgeRequest: {
    items: [
      "items_example",
    ],
    layer: null,
  },
};

const data = await apiInstance.createPurgeRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purgeRequest** | **PurgeRequest**|  |
 **purgeType** | [**&#39;cachekey&#39; | &#39;url&#39; | &#39;wildcard&#39;**]**Array<&#39;cachekey&#39; &#124; &#39;url&#39; &#124; &#39;wildcard&#39;>** | type of purge: URL, Wildcard or Cachekey | defaults to undefined


### Return type

**PurgeResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Purge request created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


