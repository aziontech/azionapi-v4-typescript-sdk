# .FirewallsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneFirewall**](FirewallsApi.md#cloneFirewall) | **POST** /workspace/firewalls/{firewall_id}/clone | Clone a Firewall
[**createFirewall**](FirewallsApi.md#createFirewall) | **POST** /workspace/firewalls | Create a Firewall
[**deleteFirewall**](FirewallsApi.md#deleteFirewall) | **DELETE** /workspace/firewalls/{firewall_id} | Delete a Firewall
[**listFirewalls**](FirewallsApi.md#listFirewalls) | **GET** /workspace/firewalls | List Firewalls
[**partialUpdateFirewall**](FirewallsApi.md#partialUpdateFirewall) | **PATCH** /workspace/firewalls/{firewall_id} | Partially update a Firewall
[**retrieveFirewall**](FirewallsApi.md#retrieveFirewall) | **GET** /workspace/firewalls/{firewall_id} | Retrieve details from a Firewall
[**updateFirewall**](FirewallsApi.md#updateFirewall) | **PUT** /workspace/firewalls/{firewall_id} | Update a Firewall


# **cloneFirewall**
> FirewallResponse cloneFirewall(cloneFirewallRequest)

Create a new Firewall by performing a deep copy of an existing Firewall, including its Function Instances and Rules Engine.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiCloneFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiCloneFirewallRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  cloneFirewallRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.cloneFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloneFirewallRequest** | **CloneFirewallRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


### Return type

**FirewallResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall cloned successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFirewall**
> FirewallResponse createFirewall(firewallRequest)

Create a new Firewall for your account.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiCreateFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiCreateFirewallRequest = {
  
  firewallRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      functions: null,
      networkProtection: null,
      waf: null,
    },
    debug: false,
    active: true,
  },
};

const data = await apiInstance.createFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRequest** | **FirewallRequest**|  |


### Return type

**FirewallResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFirewall**
> DeleteResponse deleteFirewall()

Delete a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiDeleteFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiDeleteFirewallRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
};

const data = await apiInstance.deleteFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


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
**200** | Firewall deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFirewalls**
> PaginatedFirewallList listFirewalls()

List all Firewalls owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiListFirewallsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiListFirewallsRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by debug rules status. (optional)
  debug: true,
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

const data = await apiInstance.listFirewalls(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **debug** | [**boolean**] | Filter by debug rules status. | (optional) defaults to undefined
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

**PaginatedFirewallList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of firewalls retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFirewall**
> FirewallResponse partialUpdateFirewall()

Update one or more fields of an existing Firewall without affecting other fields.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiPartialUpdateFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiPartialUpdateFirewallRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  patchedFirewallRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      functions: null,
      networkProtection: null,
      waf: null,
    },
    debug: false,
    active: true,
  },
};

const data = await apiInstance.partialUpdateFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFirewallRequest** | **PatchedFirewallRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


### Return type

**FirewallResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFirewall**
> FirewallResponse retrieveFirewall()

Retrieve details from a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiRetrieveFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiRetrieveFirewallRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FirewallResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFirewall**
> FirewallResponse updateFirewall(firewallRequest)

Update an existing Firewall. This replaces the entire Firewall with the new data provided.

### Example


```typescript
import { createConfiguration, FirewallsApi } from '';
import type { FirewallsApiUpdateFirewallRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsApi(configuration);

const request: FirewallsApiUpdateFirewallRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  firewallRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    modules: {
      functions: null,
      networkProtection: null,
      waf: null,
    },
    debug: false,
    active: true,
  },
};

const data = await apiInstance.updateFirewall(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRequest** | **FirewallRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


### Return type

**FirewallResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


