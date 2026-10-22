# .CustomPagesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomPage**](CustomPagesApi.md#createCustomPage) | **POST** /workspace/custom_pages | Create a Custom Page
[**deleteCustomPage**](CustomPagesApi.md#deleteCustomPage) | **DELETE** /workspace/custom_pages/{custom_page_id} | Delete a Custom Page
[**listCustomPages**](CustomPagesApi.md#listCustomPages) | **GET** /workspace/custom_pages | List Custom Pages
[**partialUpdateCustomPage**](CustomPagesApi.md#partialUpdateCustomPage) | **PATCH** /workspace/custom_pages/{custom_page_id} | Partially update a Custom Page
[**retrieveCustomPage**](CustomPagesApi.md#retrieveCustomPage) | **GET** /workspace/custom_pages/{custom_page_id} | Retrieve details of a Custom Page
[**updateCustomPage**](CustomPagesApi.md#updateCustomPage) | **PUT** /workspace/custom_pages/{custom_page_id} | Update a Custom Page


# **createCustomPage**
> CustomPageResponse createCustomPage(customPageRequest)

Create a new Custom Page in your account.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiCreateCustomPageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiCreateCustomPageRequest = {
  
  customPageRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    pages: [
      {
        code: "default",
        page: {
          type: "page_connector",
          attributes: {
            connector: 1,
            ttl: 0,
            uri: "jUR,rZ#UM/?R,Fp^l6$ARj",
            customStatusCode: 100,
          },
        },
      },
    ],
  },
};

const data = await apiInstance.createCustomPage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageRequest** | **CustomPageRequest**|  |


### Return type

**CustomPageResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Custom page created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomPage**
> DeleteResponse deleteCustomPage()

Delete a specific Custom Page in your account.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiDeleteCustomPageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiDeleteCustomPageRequest = {
    // A unique integer value identifying the custom page.
  customPageId: 1,
};

const data = await apiInstance.deleteCustomPage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageId** | [**number**] | A unique integer value identifying the custom page. | defaults to undefined


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
**200** | Custom page deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomPages**
> PaginatedCustomPageList listCustomPages()

List all Custom Pages owned by your account.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiListCustomPagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiListCustomPagesRequest = {
    // Filter by active status. (optional)
  active: true,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
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

const data = await apiInstance.listCustomPages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCustomPageList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of custom pages retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateCustomPage**
> CustomPageResponse partialUpdateCustomPage()

Update one or more fields of an existing Custom Page without affecting other fields.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiPartialUpdateCustomPageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiPartialUpdateCustomPageRequest = {
    // A unique integer value identifying the custom page.
  customPageId: 1,
  
  patchedCustomPageRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    pages: [
      {
        code: "default",
        page: {
          type: "page_connector",
          attributes: {
            connector: 1,
            ttl: 0,
            uri: "jUR,rZ#UM/?R,Fp^l6$ARj",
            customStatusCode: 100,
          },
        },
      },
    ],
  },
};

const data = await apiInstance.partialUpdateCustomPage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedCustomPageRequest** | **PatchedCustomPageRequest**|  |
 **customPageId** | [**number**] | A unique integer value identifying the custom page. | defaults to undefined


### Return type

**CustomPageResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Custom page partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCustomPage**
> CustomPageResponse retrieveCustomPage()

Retrieve details of a specific Custom Page in your account.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiRetrieveCustomPageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiRetrieveCustomPageRequest = {
    // A unique integer value identifying the custom page.
  customPageId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCustomPage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageId** | [**number**] | A unique integer value identifying the custom page. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CustomPageResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Custom page details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomPage**
> CustomPageResponse updateCustomPage(customPageRequest)

Update an existing Custom Page. This replaces the entire Custom Page with the new data provided.

### Example


```typescript
import { createConfiguration, CustomPagesApi } from '';
import type { CustomPagesApiUpdateCustomPageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CustomPagesApi(configuration);

const request: CustomPagesApiUpdateCustomPageRequest = {
    // A unique integer value identifying the custom page.
  customPageId: 1,
  
  customPageRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    pages: [
      {
        code: "default",
        page: {
          type: "page_connector",
          attributes: {
            connector: 1,
            ttl: 0,
            uri: "jUR,rZ#UM/?R,Fp^l6$ARj",
            customStatusCode: 100,
          },
        },
      },
    ],
  },
};

const data = await apiInstance.updateCustomPage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customPageRequest** | **CustomPageRequest**|  |
 **customPageId** | [**number**] | A unique integer value identifying the custom page. | defaults to undefined


### Return type

**CustomPageResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Custom page updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


