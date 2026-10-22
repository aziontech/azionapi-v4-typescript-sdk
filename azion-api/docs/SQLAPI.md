# .SQLApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDatabase**](SQLApi.md#createDatabase) | **POST** /workspace/sql/databases | Create a database
[**deleteDatabase**](SQLApi.md#deleteDatabase) | **DELETE** /workspace/sql/databases/{database_id} | Delete a database
[**executeQuery**](SQLApi.md#executeQuery) | **POST** /workspace/sql/databases/{database_id}/query | Execute a query into a database
[**listDatabases**](SQLApi.md#listDatabases) | **GET** /workspace/sql/databases | List databases
[**retrieveDatabase**](SQLApi.md#retrieveDatabase) | **GET** /workspace/sql/databases/{database_id} | Retrieve details from a database


# **createDatabase**
> DatabaseDetailResponse createDatabase(databaseRequest)

Create a new database for your account.

### Example


```typescript
import { createConfiguration, SQLApi } from '';
import type { SQLApiCreateDatabaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SQLApi(configuration);

const request: SQLApiCreateDatabaseRequest = {
  
  databaseRequest: {
    name: "GqWzyBAw2Zu",
    active: true,
  },
};

const data = await apiInstance.createDatabase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseRequest** | **DatabaseRequest**|  |


### Return type

**DatabaseDetailResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Database created successfully. |  -  |
**202** | Database creation request accepted and is being processed asynchronously. |  -  |
**422** | Unprocessable Entity |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDatabase**
> DeleteResponse deleteDatabase()

Schedule the deletion of a specific database in your account.

### Example


```typescript
import { createConfiguration, SQLApi } from '';
import type { SQLApiDeleteDatabaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SQLApi(configuration);

const request: SQLApiDeleteDatabaseRequest = {
    // A unique integer value identifying this database.
  databaseId: 1,
};

const data = await apiInstance.deleteDatabase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**number**] | A unique integer value identifying this database. | defaults to undefined


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
**200** | Database deleted successfully. |  -  |
**202** | Database deletion request accepted and is being processed asynchronously. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **executeQuery**
> SQLResultResponse executeQuery(sQLStatementsRequest)

Execute a query into a database for your account.

### Example


```typescript
import { createConfiguration, SQLApi } from '';
import type { SQLApiExecuteQueryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SQLApi(configuration);

const request: SQLApiExecuteQueryRequest = {
    // A unique integer value identifying this database.
  databaseId: 1,
  
  sQLStatementsRequest: {
    statements: [
      "statements_example",
    ],
  },
};

const data = await apiInstance.executeQuery(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sQLStatementsRequest** | **SQLStatementsRequest**|  |
 **databaseId** | [**number**] | A unique integer value identifying this database. | defaults to undefined


### Return type

**SQLResultResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SQL query executed successfully. |  -  |
**202** | SQL query execution request accepted and is being processed asynchronously. |  -  |
**422** | Unprocessable Entity |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDatabases**
> PaginatedDatabaseDetailList listDatabases()

List all databases owned by your account.

### Example


```typescript
import { createConfiguration, SQLApi } from '';
import type { SQLApiListDatabasesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SQLApi(configuration);

const request: SQLApiListDatabasesRequest = {
    // Filter by active status. (optional)
  active: true,
    // Filter by created_at (greater than or equal). (optional)
  createdAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by created_at (less than or equal). (optional)
  createdAtLte: new Date('1970-01-01T00:00:00.00Z'),
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "last_editor_example",
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
    // Filter by status (accepts comma-separated values). (optional)
  status: "status_example",
    // Filter by updated_at (greater than or equal). (optional)
  updatedAtGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by updated_at (less than or equal). (optional)
  updatedAtLte: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.listDatabases(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | [**boolean**] | Filter by active status. | (optional) defaults to undefined
 **createdAtGte** | [**Date**] | Filter by created_at (greater than or equal). | (optional) defaults to undefined
 **createdAtLte** | [**Date**] | Filter by created_at (less than or equal). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **status** | [**string**] | Filter by status (accepts comma-separated values). | (optional) defaults to undefined
 **updatedAtGte** | [**Date**] | Filter by updated_at (greater than or equal). | (optional) defaults to undefined
 **updatedAtLte** | [**Date**] | Filter by updated_at (less than or equal). | (optional) defaults to undefined


### Return type

**PaginatedDatabaseDetailList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of databases retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveDatabase**
> DatabaseDetailResponse retrieveDatabase()

Retrieve details from a specific database in your account.

### Example


```typescript
import { createConfiguration, SQLApi } from '';
import type { SQLApiRetrieveDatabaseRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SQLApi(configuration);

const request: SQLApiRetrieveDatabaseRequest = {
    // A unique integer value identifying this database.
  databaseId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveDatabase(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**number**] | A unique integer value identifying this database. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**DatabaseDetailResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Database details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


