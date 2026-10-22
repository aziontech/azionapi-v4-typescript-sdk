# .IdentityGrantsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGrant**](IdentityGrantsApi.md#createGrant) | **POST** /identity/grants | Create a new grant
[**deleteGrant**](IdentityGrantsApi.md#deleteGrant) | **DELETE** /identity/grants/{grant_id} | Delete a grant
[**listGrants**](IdentityGrantsApi.md#listGrants) | **GET** /identity/grants | List grants for the account
[**partialUpdateGrant**](IdentityGrantsApi.md#partialUpdateGrant) | **PATCH** /identity/grants/{grant_id} | Partially update a grant
[**retrieveGrant**](IdentityGrantsApi.md#retrieveGrant) | **GET** /identity/grants/{grant_id} | Retrieve grant details
[**updateGrant**](IdentityGrantsApi.md#updateGrant) | **PUT** /identity/grants/{grant_id} | Update a grant


# **createGrant**
> ResponseGrant createGrant(grantRequest)

Creates a new grant, optionally linked to an identity, for the logged-in account or its descendant accounts.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiCreateGrantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiCreateGrantRequest = {
  
  grantRequest: {
    identity: 1,
    roles: [
      1,
    ],
    policies: [
      1,
    ],
    expires: new Date('1970-01-01T00:00:00.00Z'),
    owner: true,
    accountId: 0,
  },
};

const data = await apiInstance.createGrant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantRequest** | **GrantRequest**|  |


### Return type

**ResponseGrant**

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
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteGrant**
> ResponseDeleteGrant deleteGrant()

Delete a specific grant from the logged-in account or its descendant accounts.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiDeleteGrantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiDeleteGrantRequest = {
  
  grantId: "grant_id_example",
};

const data = await apiInstance.deleteGrant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantId** | [**string**] |  | defaults to undefined


### Return type

**ResponseDeleteGrant**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** | Accepted |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listGrants**
> PaginatedGrantList listGrants()

Retrieves a list of all grants associated with the logged-in account or its descendant accounts.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiListGrantsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiListGrantsRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listGrants(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedGrantList**

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

# **partialUpdateGrant**
> ResponseGrant partialUpdateGrant()

Updates specific fields of an existing grant within the logged-in account or its descendant accounts, leaving other fields unchanged.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiPartialUpdateGrantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiPartialUpdateGrantRequest = {
  
  grantId: "grant_id_example",
  
  patchedGrantRequest: {
    identity: 1,
    roles: [
      1,
    ],
    policies: [
      1,
    ],
    expires: new Date('1970-01-01T00:00:00.00Z'),
    owner: true,
    accountId: 0,
  },
};

const data = await apiInstance.partialUpdateGrant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedGrantRequest** | **PatchedGrantRequest**|  |
 **grantId** | [**string**] |  | defaults to undefined


### Return type

**ResponseGrant**

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
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveGrant**
> ResponseRetrieveGrant retrieveGrant()

Fetches detailed information about a specific grant within the logged-in account or its descendant accounts.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiRetrieveGrantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiRetrieveGrantRequest = {
  
  grantId: "grant_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveGrant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantId** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveGrant**

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

# **updateGrant**
> ResponseGrant updateGrant(grantRequest)

Updates an existing grant within the logged-in account or its descendant accounts. This operation replaces the entire grant with the provided data.

### Example


```typescript
import { createConfiguration, IdentityGrantsApi } from '';
import type { IdentityGrantsApiUpdateGrantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityGrantsApi(configuration);

const request: IdentityGrantsApiUpdateGrantRequest = {
  
  grantId: "grant_id_example",
  
  grantRequest: {
    identity: 1,
    roles: [
      1,
    ],
    policies: [
      1,
    ],
    expires: new Date('1970-01-01T00:00:00.00Z'),
    owner: true,
    accountId: 0,
  },
};

const data = await apiInstance.updateGrant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantRequest** | **GrantRequest**|  |
 **grantId** | [**string**] |  | defaults to undefined


### Return type

**ResponseGrant**

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
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


