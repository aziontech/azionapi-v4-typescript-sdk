# .WAFsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneWaf**](WAFsApi.md#cloneWaf) | **POST** /workspace/wafs/{waf_id}/clone | Clone a Web Application Firewall (WAF)
[**createWaf**](WAFsApi.md#createWaf) | **POST** /workspace/wafs | Create a Web Application Firewall (WAF)
[**deleteWaf**](WAFsApi.md#deleteWaf) | **DELETE** /workspace/wafs/{waf_id} | Delete a Web Application Firewall (WAF)
[**listWafs**](WAFsApi.md#listWafs) | **GET** /workspace/wafs | List Web Application Firewalls (WAFs)
[**partialUpdateWaf**](WAFsApi.md#partialUpdateWaf) | **PATCH** /workspace/wafs/{waf_id} | Partially update a Web Application Firewall (WAF)
[**retrieveWaf**](WAFsApi.md#retrieveWaf) | **GET** /workspace/wafs/{waf_id} | Retrieve details from a Web Application Firewall (WAF)
[**updateWaf**](WAFsApi.md#updateWaf) | **PUT** /workspace/wafs/{waf_id} | Update a Web Application Firewall (WAF)


# **cloneWaf**
> WAFResponse cloneWaf(cloneWAFRequest)

Create a new WAF by performing a deep copy of an existing WAF, including its Exceptions.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiCloneWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiCloneWafRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  cloneWAFRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.cloneWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloneWAFRequest** | **CloneWAFRequest**|  |
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | WAF cloned successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWaf**
> WAFResponse createWaf(wAFRequest)

Create a new WAF for your account.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiCreateWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiCreateWafRequest = {
  
  wAFRequest: {
    active: true,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    productVersion: "1.0",
    engineSettings: {
      engineVersion: null,
      type: null,
      attributes: {
        rulesets: [
          1,
        ],
        thresholds: [
          {
            threat: "cross_site_scripting",
            sensitivity: null,
          },
        ],
      },
    },
  },
};

const data = await apiInstance.createWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRequest** | **WAFRequest**|  |


### Return type

**WAFResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | WAF created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWaf**
> DeleteResponse deleteWaf()

Delete a specific WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiDeleteWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiDeleteWafRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
};

const data = await apiInstance.deleteWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**DeleteResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWafs**
> PaginatedWAFList listWafs()

List all WAFs owned by your account.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiListWafsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiListWafsRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by name (case-insensitive, partial match). (optional)
  name: "name_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listWafs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedWAFList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of WAFs retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateWaf**
> WAFResponse partialUpdateWaf()

Update one or more fields of an existing WAF without affecting other fields.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiPartialUpdateWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiPartialUpdateWafRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  patchedWAFRequest: {
    active: true,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    productVersion: "1.0",
    engineSettings: {
      engineVersion: null,
      type: null,
      attributes: {
        rulesets: [
          1,
        ],
        thresholds: [
          {
            threat: "cross_site_scripting",
            sensitivity: null,
          },
        ],
      },
    },
  },
};

const data = await apiInstance.partialUpdateWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedWAFRequest** | **PatchedWAFRequest**|  |
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWaf**
> WAFResponse retrieveWaf()

Retrieve details from a specific WAF in your account.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiRetrieveWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiRetrieveWafRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**WAFResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWaf**
> WAFResponse updateWaf(wAFRequest)

Update an existing WAF. This replaces the entire WAF with the new data provided.

### Example


```typescript
import { createConfiguration, WAFsApi } from '';
import type { WAFsApiUpdateWafRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WAFsApi(configuration);

const request: WAFsApiUpdateWafRequest = {
    // A unique integer value identifying the WAF.
  wafId: 1,
  
  wAFRequest: {
    active: true,
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    productVersion: "1.0",
    engineSettings: {
      engineVersion: null,
      type: null,
      attributes: {
        rulesets: [
          1,
        ],
        thresholds: [
          {
            threat: "cross_site_scripting",
            sensitivity: null,
          },
        ],
      },
    },
  },
};

const data = await apiInstance.updateWaf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wAFRequest** | **WAFRequest**|  |
 **wafId** | [**number**] | A unique integer value identifying the WAF. | defaults to undefined


### Return type

**WAFResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WAF updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


