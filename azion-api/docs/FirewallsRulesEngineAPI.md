# .FirewallsRulesEngineApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFirewallRule**](FirewallsRulesEngineApi.md#createFirewallRule) | **POST** /workspace/firewalls/{firewall_id}/request_rules | Create an Firewall Rule
[**createFirewallRule2**](FirewallsRulesEngineApi.md#createFirewallRule2) | **POST** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules | Create an Firewall Rule
[**deleteFirewallRule**](FirewallsRulesEngineApi.md#deleteFirewallRule) | **DELETE** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Delete an Firewall Rule
[**deleteFirewallRule2**](FirewallsRulesEngineApi.md#deleteFirewallRule2) | **DELETE** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Delete an Firewall Rule
[**listFirewallRules**](FirewallsRulesEngineApi.md#listFirewallRules) | **GET** /workspace/firewalls/{firewall_id}/request_rules | List Firewall Rules
[**listFirewallRules2**](FirewallsRulesEngineApi.md#listFirewallRules2) | **GET** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules | List Firewall Rules
[**orderFirewallRules**](FirewallsRulesEngineApi.md#orderFirewallRules) | **PUT** /workspace/firewalls/{firewall_id}/request_rules/order | Ordering Firewall Rules
[**orderFirewallRules2**](FirewallsRulesEngineApi.md#orderFirewallRules2) | **PUT** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/order | Ordering Firewall Rules
[**partialUpdateFirewallRule**](FirewallsRulesEngineApi.md#partialUpdateFirewallRule) | **PATCH** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Partially update an Firewall Rule
[**partialUpdateFirewallRule2**](FirewallsRulesEngineApi.md#partialUpdateFirewallRule2) | **PATCH** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Partially update an Firewall Rule
[**retrieveFirewallRule**](FirewallsRulesEngineApi.md#retrieveFirewallRule) | **GET** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Retrieve details of an Firewall Rule
[**retrieveFirewallRule2**](FirewallsRulesEngineApi.md#retrieveFirewallRule2) | **GET** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Retrieve details of an Firewall Rule
[**updateFirewallRule**](FirewallsRulesEngineApi.md#updateFirewallRule) | **PUT** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Update an Firewall Rule
[**updateFirewallRule2**](FirewallsRulesEngineApi.md#updateFirewallRule2) | **PUT** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Update an Firewall Rule


# **createFirewallRule**
> FirewallRuleResponse createFirewallRule(firewallRuleRequest)

Create a new Rule for a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiCreateFirewallRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiCreateFirewallRuleRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  firewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createFirewallRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleRequest** | **FirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFirewallRule2**
> FirewallRuleResponse createFirewallRule2(firewallRuleRequest)

Create a new Rule for a specific Firewall in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiCreateFirewallRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiCreateFirewallRule2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  firewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.createFirewallRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleRequest** | **FirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Firewall rule created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFirewallRule**
> DeleteResponse deleteFirewallRule()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiDeleteFirewallRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiDeleteFirewallRuleRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
};

const data = await apiInstance.deleteFirewallRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


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
**200** | Firewall rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFirewallRule2**
> DeleteResponse deleteFirewallRule2()

Delete a specific Rule in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiDeleteFirewallRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiDeleteFirewallRule2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
};

const data = await apiInstance.deleteFirewallRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
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
**200** | Firewall rule deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFirewallRules**
> PaginatedFirewallRuleList listFirewallRules()

List all Rules for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiListFirewallRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiListFirewallRulesRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // Filter by description (case-insensitive, partial match). (optional)
  description: "description_example",
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
    // Filter by order (greater than or equal). (optional)
  orderGte: 1,
    // Filter by order (less than or equal). (optional)
  orderLte: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listFirewallRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **orderGte** | [**number**] | Filter by order (greater than or equal). | (optional) defaults to undefined
 **orderLte** | [**number**] | Filter by order (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFirewallRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of firewall rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFirewallRules2**
> PaginatedFirewallRuleList listFirewallRules2()

List all Rules for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiListFirewallRules2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiListFirewallRules2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Filter by description (case-insensitive, partial match). (optional)
  description: "description_example",
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
    // Filter by order (greater than or equal). (optional)
  orderGte: 1,
    // Filter by order (less than or equal). (optional)
  orderLte: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listFirewallRules2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **description** | [**string**] | Filter by description (case-insensitive, partial match). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **orderGte** | [**number**] | Filter by order (greater than or equal). | (optional) defaults to undefined
 **orderLte** | [**number**] | Filter by order (less than or equal). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFirewallRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of firewall rules retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderFirewallRules**
> PaginatedFirewallRuleList orderFirewallRules(firewallRuleEngineOrderRequest)

Reorder all Rules for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiOrderFirewallRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiOrderFirewallRulesRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
  
  firewallRuleEngineOrderRequest: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.orderFirewallRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleEngineOrderRequest** | **FirewallRuleEngineOrderRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFirewallRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderFirewallRules2**
> PaginatedFirewallRuleList orderFirewallRules2(firewallRuleEngineOrderRequest)

Reorder all Rules for a specific Firewall owned by your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiOrderFirewallRules2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiOrderFirewallRules2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  firewallRuleEngineOrderRequest: {
    order: [
      1,
    ],
  },
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.orderFirewallRules2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleEngineOrderRequest** | **FirewallRuleEngineOrderRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedFirewallRuleList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rules order updated successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFirewallRule**
> FirewallRuleResponse partialUpdateFirewallRule()

Update one or more fields of an existing Firewall Rule without affecting other fields.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiPartialUpdateFirewallRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiPartialUpdateFirewallRuleRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
  
  patchedFirewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateFirewallRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFirewallRuleRequest** | **PatchedFirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateFirewallRule2**
> FirewallRuleResponse partialUpdateFirewallRule2()

Update one or more fields of an existing Firewall Rule without affecting other fields.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiPartialUpdateFirewallRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiPartialUpdateFirewallRule2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  patchedFirewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateFirewallRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedFirewallRuleRequest** | **PatchedFirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFirewallRule**
> FirewallRuleResponse retrieveFirewallRule()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiRetrieveFirewallRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiRetrieveFirewallRuleRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewallRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFirewallRule2**
> FirewallRuleResponse retrieveFirewallRule2()

Retrieve details of a specific Rule in your account.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiRetrieveFirewallRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiRetrieveFirewallRule2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveFirewallRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFirewallRule**
> FirewallRuleResponse updateFirewallRule(firewallRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiUpdateFirewallRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiUpdateFirewallRuleRequest = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
  
  firewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateFirewallRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleRequest** | **FirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFirewallRule2**
> FirewallRuleResponse updateFirewallRule2(firewallRuleRequest)

Update an existing Rule. This replaces the entire Rule with the new data provided.

### Example


```typescript
import { createConfiguration, FirewallsRulesEngineApi } from '';
import type { FirewallsRulesEngineApiUpdateFirewallRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new FirewallsRulesEngineApi(configuration);

const request: FirewallsRulesEngineApiUpdateFirewallRule2Request = {
    // A unique integer value identifying the firewall.
  firewallId: 1,
    // A unique integer value identifying the request rule.
  requestRuleId: 1,
    // The ULID identifier of the version.
  versionId: "version_id_example",
  
  firewallRuleRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    criteria: [
      [
        {
          conditional: "if",
          variable: "$(header_accept)",
          operator: "does_not_exist",
          argument: ,
        },
      ],
    ],
    behaviors: [
      null,
    ],
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateFirewallRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleRequest** | **FirewallRuleRequest**|  |
 **firewallId** | [**number**] | A unique integer value identifying the firewall. | defaults to undefined
 **requestRuleId** | [**number**] | A unique integer value identifying the request rule. | defaults to undefined
 **versionId** | [**string**] | The ULID identifier of the version. | defaults to undefined


### Return type

**FirewallRuleResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Firewall rule updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


