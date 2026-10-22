# .ConnectorsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnector**](ConnectorsApi.md#createConnector) | **POST** /workspace/connectors | Create a Connector
[**deleteConnector**](ConnectorsApi.md#deleteConnector) | **DELETE** /workspace/connectors/{connector_id} | Delete a Connector
[**listConnectors**](ConnectorsApi.md#listConnectors) | **GET** /workspace/connectors | List Connectors
[**partialUpdateConnector**](ConnectorsApi.md#partialUpdateConnector) | **PATCH** /workspace/connectors/{connector_id} | Partially update a Connector
[**retrieveConnector**](ConnectorsApi.md#retrieveConnector) | **GET** /workspace/connectors/{connector_id} | Retrieve details of a Connector
[**updateConnector**](ConnectorsApi.md#updateConnector) | **PUT** /workspace/connectors/{connector_id} | Update a Connector


# **createConnector**
> ConnectorResponse createConnector()

Create a new Connector in your account.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiCreateConnectorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiCreateConnectorRequest = {
  
  connectorRequest: null,
};

const data = await apiInstance.createConnector(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorRequest** | **ConnectorRequest**|  |


### Return type

**ConnectorResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Connector created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteConnector**
> DeleteResponse deleteConnector()

Delete a specific Connector in your account.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiDeleteConnectorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiDeleteConnectorRequest = {
    // A unique integer value identifying the connector.
  connectorId: 1,
};

const data = await apiInstance.deleteConnector(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorId** | [**number**] | A unique integer value identifying the connector. | defaults to undefined


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
**200** | Connector deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnectors**
> PaginatedConnectorList listConnectors()

List all Connectors owned by your account.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiListConnectorsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiListConnectorsRequest = {
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
    // Filter by type (accepts comma-separated values). (optional)
  typeIn: "type__in_example",
};

const data = await apiInstance.listConnectors(request);
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
 **typeIn** | [**string**] | Filter by type (accepts comma-separated values). | (optional) defaults to undefined


### Return type

**PaginatedConnectorList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of connectors retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdateConnector**
> ConnectorResponse partialUpdateConnector()

Update one or more fields of an existing Connector without affecting other fields.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiPartialUpdateConnectorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiPartialUpdateConnectorRequest = {
    // A unique integer value identifying the connector.
  connectorId: 1,
  
  patchedConnectorRequest: null,
};

const data = await apiInstance.partialUpdateConnector(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedConnectorRequest** | **PatchedConnectorRequest**|  |
 **connectorId** | [**number**] | A unique integer value identifying the connector. | defaults to undefined


### Return type

**ConnectorResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveConnector**
> ConnectorResponse retrieveConnector()

Retrieve details of a specific Connector in your account.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiRetrieveConnectorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiRetrieveConnectorRequest = {
    // A unique integer value identifying the connector.
  connectorId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveConnector(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorId** | [**number**] | A unique integer value identifying the connector. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ConnectorResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateConnector**
> ConnectorResponse updateConnector()

Update an existing Connector. This replaces the entire Connector with the new data provided.

### Example


```typescript
import { createConfiguration, ConnectorsApi } from '';
import type { ConnectorsApiUpdateConnectorRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectorsApi(configuration);

const request: ConnectorsApiUpdateConnectorRequest = {
    // A unique integer value identifying the connector.
  connectorId: 1,
  
  connectorRequest: null,
};

const data = await apiInstance.updateConnector(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectorRequest** | **ConnectorRequest**|  |
 **connectorId** | [**number**] | A unique integer value identifying the connector. | defaults to undefined


### Return type

**ConnectorResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


