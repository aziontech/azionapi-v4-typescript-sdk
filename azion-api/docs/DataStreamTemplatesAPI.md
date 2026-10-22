# .DataStreamTemplatesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplate**](DataStreamTemplatesApi.md#createTemplate) | **POST** /workspace/stream/templates | Create a Template
[**deleteTemplate**](DataStreamTemplatesApi.md#deleteTemplate) | **DELETE** /workspace/stream/templates/{template_id} | Delete a Template
[**listTemplates**](DataStreamTemplatesApi.md#listTemplates) | **GET** /workspace/stream/templates | List Templates
[**partialUpdateTemplate**](DataStreamTemplatesApi.md#partialUpdateTemplate) | **PATCH** /workspace/stream/templates/{template_id} | Partially update a Template
[**retrieveTemplate**](DataStreamTemplatesApi.md#retrieveTemplate) | **GET** /workspace/stream/templates/{template_id} | Retrieve details of a Template
[**updateTemplate**](DataStreamTemplatesApi.md#updateTemplate) | **PUT** /workspace/stream/templates/{template_id} | Update a Template


# **createTemplate**
> TemplateResponse createTemplate(templateRequest)

Create a new custom Template in your account.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiCreateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiCreateTemplateRequest = {
  
  templateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    dataSet: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateRequest** | **TemplateRequest**|  |


### Return type

**TemplateResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTemplate**
> DeleteResponse deleteTemplate()

Delete a specific custom Template in your account.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiDeleteTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiDeleteTemplateRequest = {
    // A unique integer value identifying the template.
  templateId: 1,
};

const data = await apiInstance.deleteTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**number**] | A unique integer value identifying the template. | defaults to undefined


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

# **listTemplates**
> PaginatedTemplateList listTemplates()

List all Templates owned by your account.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiListTemplatesRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by created date (greater than or equal). (optional)
  createdAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created date (less than or equal). (optional)
  createdAtLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by custom status (true for custom templates, false for default templates). (optional)
  custom: true,
    // Filter by data set (case-insensitive, partial match). (optional)
  dataSet: "data_set_example",
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

const data = await apiInstance.listTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **createdAtGte** | [**Date**] | Filter by created date (greater than or equal). | (optional) defaults to undefined
 **createdAtLte** | [**Date**] | Filter by created date (less than or equal). | (optional) defaults to undefined
 **custom** | [**boolean**] | Filter by custom status (true for custom templates, false for default templates). | (optional) defaults to undefined
 **dataSet** | [**string**] | Filter by data set (case-insensitive, partial match). | (optional) defaults to undefined
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

**PaginatedTemplateList**

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

# **partialUpdateTemplate**
> TemplateResponse partialUpdateTemplate()

Update one or more fields of an existing custom Template.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiPartialUpdateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiPartialUpdateTemplateRequest = {
    // A unique integer value identifying the template.
  templateId: 1,
  
  patchedTemplateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    dataSet: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedTemplateRequest** | **PatchedTemplateRequest**|  |
 **templateId** | [**number**] | A unique integer value identifying the template. | defaults to undefined


### Return type

**TemplateResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveTemplate**
> TemplateResponse retrieveTemplate()

Retrieve details from a specific Template in your account.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiRetrieveTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiRetrieveTemplateRequest = {
    // A unique integer value identifying the template.
  templateId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**number**] | A unique integer value identifying the template. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**TemplateResponse**

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

# **updateTemplate**
> TemplateResponse updateTemplate(templateRequest)

Update an existing custom Template.

### Example


```typescript
import { createConfiguration, DataStreamTemplatesApi } from '';
import type { DataStreamTemplatesApiUpdateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataStreamTemplatesApi(configuration);

const request: DataStreamTemplatesApiUpdateTemplateRequest = {
    // A unique integer value identifying the template.
  templateId: 1,
  
  templateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    dataSet: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateRequest** | **TemplateRequest**|  |
 **templateId** | [**number**] | A unique integer value identifying the template. | defaults to undefined


### Return type

**TemplateResponse**

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


