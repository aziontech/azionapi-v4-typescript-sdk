# .FirewallsFunctionApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFirewallFunction**](FirewallsFunctionApi.md#createFirewallFunction) | **POST** /workspace/firewalls/{firewall_id}/functions | Create an Firewall Function
[**createFirewallFunction2**](FirewallsFunctionApi.md#createFirewallFunction2) | **POST** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions | Create an Firewall Function
[**deleteFirewallFunction**](FirewallsFunctionApi.md#deleteFirewallFunction) | **DELETE** /workspace/firewalls/{firewall_id}/functions/{function_id} | Delete an Firewall Function
[**deleteFirewallFunction2**](FirewallsFunctionApi.md#deleteFirewallFunction2) | **DELETE** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Delete an Firewall Function
[**listFirewallFunction**](FirewallsFunctionApi.md#listFirewallFunction) | **GET** /workspace/firewalls/{firewall_id}/functions | List Firewall Function
[**listFirewallFunction2**](FirewallsFunctionApi.md#listFirewallFunction2) | **GET** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions | List Firewall Function
[**partialUpdateFirewallFunction**](FirewallsFunctionApi.md#partialUpdateFirewallFunction) | **PATCH** /workspace/firewalls/{firewall_id}/functions/{function_id} | Partially update an Firewall Function
[**partialUpdateFirewallFunction2**](FirewallsFunctionApi.md#partialUpdateFirewallFunction2) | **PATCH** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Partially update an Firewall Function
[**retrieveFirewallFunction**](FirewallsFunctionApi.md#retrieveFirewallFunction) | **GET** /workspace/firewalls/{firewall_id}/functions/{function_id} | Retrieve details of an Firewall Function
[**retrieveFirewallFunction2**](FirewallsFunctionApi.md#retrieveFirewallFunction2) | **GET** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Retrieve details of an Firewall Function
[**updateFirewallFunction**](FirewallsFunctionApi.md#updateFirewallFunction) | **PUT** /workspace/firewalls/{firewall_id}/functions/{function_id} | Update an Firewall Function
[**updateFirewallFunction2**](FirewallsFunctionApi.md#updateFirewallFunction2) | **PUT** /workspace/firewalls/{firewall_id}/versions/{version_id}/functions/{function_id} | Update an Firewall Function


# **createFirewallFunction**
> FirewallFunctionInstanceResponse createFirewallFunction(firewallFunctionInstanceRequest)

Create a new Function Instance for a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiCreateFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiCreateFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  firewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.createFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallFunctionInstanceRequest** | **FirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall function instance created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFirewallFunction2**
> FirewallFunctionInstanceResponse createFirewallFunction2(firewallFunctionInstanceRequest)

Create a new Function Instance for a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiCreateFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiCreateFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  firewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.createFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallFunctionInstanceRequest** | **FirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall function instance created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFirewallFunction**
> DeleteResponse deleteFirewallFunction()

Delete a specific Firewall Function Instance in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiDeleteFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiDeleteFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
};

const data = await apiInstance.deleteFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


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
**200** | Firewall function instance deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFirewallFunction2**
> DeleteResponse deleteFirewallFunction2()

Delete a specific Firewall Function Instance in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiDeleteFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiDeleteFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


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
**200** | Firewall function instance deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFirewallFunction**
> PaginatedFirewallFunctionInstanceList listFirewallFunction()

List all Function Instances for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiListFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiListFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
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

const data = await apiInstance.listFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
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

**PaginatedFirewallFunctionInstanceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of firewall function instances retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFirewallFunction2**
> PaginatedFirewallFunctionInstanceList listFirewallFunction2()

List all Function Instances for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiListFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiListFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
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

const data = await apiInstance.listFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
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

**PaginatedFirewallFunctionInstanceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of firewall function instances retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFirewallFunction**
> FirewallFunctionInstanceResponse partialUpdateFirewallFunction()

Update one or more fields of an existing Firewall Function Instance without affecting other fields.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiPartialUpdateFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiPartialUpdateFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
  
  patchedFirewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.partialUpdateFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFirewallFunctionInstanceRequest** | **PatchedFirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFirewallFunction2**
> FirewallFunctionInstanceResponse partialUpdateFirewallFunction2()

Update one or more fields of an existing Firewall Function Instance without affecting other fields.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiPartialUpdateFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiPartialUpdateFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedFirewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.partialUpdateFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFirewallFunctionInstanceRequest** | **PatchedFirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFirewallFunction**
> FirewallFunctionInstanceResponse retrieveFirewallFunction()

Retrieve details of a specific Firewall Function Instance in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiRetrieveFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiRetrieveFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFirewallFunction2**
> FirewallFunctionInstanceResponse retrieveFirewallFunction2()

Retrieve details of a specific Firewall Function Instance in your account.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiRetrieveFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiRetrieveFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFirewallFunction**
> FirewallFunctionInstanceResponse updateFirewallFunction(firewallFunctionInstanceRequest)

Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiUpdateFirewallFunctionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiUpdateFirewallFunctionRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
  
  firewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.updateFirewallFunction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallFunctionInstanceRequest** | **FirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFirewallFunction2**
> FirewallFunctionInstanceResponse updateFirewallFunction2(firewallFunctionInstanceRequest)

Update an existing Firewall Function Instance. This replaces the entire Function Instance with the new data provided.

### Example


```typescript
import { createConfiguration, FirewallsFunctionApi } from '';
import type { FirewallsFunctionApiUpdateFirewallFunction2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsFunctionApi(configuration);

const request: FirewallsFunctionApiUpdateFirewallFunction2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the function instance.
  functionId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  firewallFunctionInstanceRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    args: {
      arg: {},
    },
    azionForm: {
      arg: {},
    },
    _function: 1,
    active: true,
  },
};

const data = await apiInstance.updateFirewallFunction2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallFunctionInstanceRequest** | **FirewallFunctionInstanceRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **functionId** | [**number**] | A unique integer value identifying the function instance. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallFunctionInstanceResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall function instance updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


