# .NetworkListsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkList**](NetworkListsApi.md#createNetworkList) | **POST** /workspace/network_lists | Create a Network List
[**deleteNetworkList**](NetworkListsApi.md#deleteNetworkList) | **DELETE** /workspace/network_lists/{network_list_id} | Delete a Network List
[**listNetworkLists**](NetworkListsApi.md#listNetworkLists) | **GET** /workspace/network_lists | List Network Lists
[**partialUpdateNetworkList**](NetworkListsApi.md#partialUpdateNetworkList) | **PATCH** /workspace/network_lists/{network_list_id} | Partially update a Network List
[**retrieveNetworkList**](NetworkListsApi.md#retrieveNetworkList) | **GET** /workspace/network_lists/{network_list_id} | Retrieve details of a Network List
[**updateNetworkList**](NetworkListsApi.md#updateNetworkList) | **PUT** /workspace/network_lists/{network_list_id} | Update a Network List


# **createNetworkList**
> NetworkListResponse createNetworkList(networkListRequest)

Create a new Network List in your account.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiCreateNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiCreateNetworkListRequest = {
  
  networkListRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "asn",
    items: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    active: true,
  },
};

const data = await apiInstance.createNetworkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListRequest** | **NetworkListRequest**|  |


### Return type

**NetworkListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Network list created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNetworkList**
> DeleteResponse deleteNetworkList()

Delete a specific Network List in your account.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiDeleteNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiDeleteNetworkListRequest = {
    // A unique integer value identifying the network list.
  networkListId: 1,
};

const data = await apiInstance.deleteNetworkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListId** | [**number**] | A unique integer value identifying the network list. | defaults to undefined


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
**200** | Network list deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNetworkLists**
> PaginatedNetworkListSummaryList listNetworkLists()

List all Network Lists owned by your account.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiListNetworkListsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiListNetworkListsRequest = {
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
    // Filter by list type (accepts comma-separated values). (optional)
  listTypeIn: "list_type__in_example",
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

const data = await apiInstance.listNetworkLists(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **listTypeIn** | [**string**] | Filter by list type (accepts comma-separated values). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedNetworkListSummaryList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of network lists retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateNetworkList**
> NetworkListResponse partialUpdateNetworkList()

Update one or more fields of an existing Network List without affecting other fields.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiPartialUpdateNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiPartialUpdateNetworkListRequest = {
    // A unique integer value identifying the network list.
  networkListId: 1,
  
  patchedNetworkListRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "asn",
    items: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    active: true,
  },
};

const data = await apiInstance.partialUpdateNetworkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedNetworkListRequest** | **PatchedNetworkListRequest**|  |
 **networkListId** | [**number**] | A unique integer value identifying the network list. | defaults to undefined


### Return type

**NetworkListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network list partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNetworkList**
> NetworkListResponse retrieveNetworkList()

Retrieve details of a specific Network List in your account.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiRetrieveNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiRetrieveNetworkListRequest = {
    // A unique integer value identifying the network list.
  networkListId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by IPv4. Only applicable for network lists of type \'ip_cidr\'. (optional)
  ipv4: true,
    // Filter by IPv6. Only applicable for network lists of type \'ip_cidr\'. (optional)
  ipv6: true,
};

const data = await apiInstance.retrieveNetworkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListId** | [**number**] | A unique integer value identifying the network list. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ipv4** | [**boolean**] | Filter by IPv4. Only applicable for network lists of type \&#39;ip_cidr\&#39;. | (optional) defaults to undefined
 **ipv6** | [**boolean**] | Filter by IPv6. Only applicable for network lists of type \&#39;ip_cidr\&#39;. | (optional) defaults to undefined


### Return type

**NetworkListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network list details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNetworkList**
> NetworkListResponse updateNetworkList(networkListRequest)

Update an existing Network List. This replaces the entire Network List with the new data provided.

### Example


```typescript
import { createConfiguration, NetworkListsApi } from '';
import type { NetworkListsApiUpdateNetworkListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NetworkListsApi(configuration);

const request: NetworkListsApiUpdateNetworkListRequest = {
    // A unique integer value identifying the network list.
  networkListId: 1,
  
  networkListRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    type: "asn",
    items: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    active: true,
  },
};

const data = await apiInstance.updateNetworkList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkListRequest** | **NetworkListRequest**|  |
 **networkListId** | [**number**] | A unique integer value identifying the network list. | defaults to undefined


### Return type

**NetworkListResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network list updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


