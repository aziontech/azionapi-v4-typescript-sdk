# .KVNamespacesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNamespace**](KVNamespacesApi.md#createNamespace) | **POST** /workspace/kv/namespaces | Create namespace
[**listNamespaces**](KVNamespacesApi.md#listNamespaces) | **GET** /workspace/kv/namespaces | List namespaces
[**retrieveNamespace**](KVNamespacesApi.md#retrieveNamespace) | **GET** /workspace/kv/namespaces/{namespace} | Retrieve namespace


# **createNamespace**
> Namespace createNamespace(namespaceCreateRequest)

Creates a new namespace in the authenticated account.

### Example


```typescript
import { createConfiguration, KVNamespacesApi } from '';
import type { KVNamespacesApiCreateNamespaceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KVNamespacesApi(configuration);

const request: KVNamespacesApiCreateNamespaceRequest = {
  
  namespaceCreateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createNamespace(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespaceCreateRequest** | **NamespaceCreateRequest**|  |


### Return type

**Namespace**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Namespace created |  -  |
**400** | Validation Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespaces**
> NamespaceList listNamespaces()

Returns a paginated list of namespaces for the authenticated account.

### Example


```typescript
import { createConfiguration, KVNamespacesApi } from '';
import type { KVNamespacesApiListNamespacesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KVNamespacesApi(configuration);

const request: KVNamespacesApiListNamespacesRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
};

const data = await apiInstance.listNamespaces(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined


### Return type

**NamespaceList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated list of namespaces |  -  |
**400** | Validation Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNamespace**
> Namespace retrieveNamespace()

Returns a specific namespace by name, if it belongs to the authenticated account.

### Example


```typescript
import { createConfiguration, KVNamespacesApi } from '';
import type { KVNamespacesApiRetrieveNamespaceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KVNamespacesApi(configuration);

const request: KVNamespacesApiRetrieveNamespaceRequest = {
    // The unique identifier (name) of the namespace
  namespace: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveNamespace(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | The unique identifier (name) of the namespace | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**Namespace**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Namespace details |  -  |
**404** | Not Found |  -  |
**400** | Validation Error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


