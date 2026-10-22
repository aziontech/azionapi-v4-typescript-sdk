# .IdentityServiceTokensApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceToken**](IdentityServiceTokensApi.md#createServiceToken) | **POST** /identity/service-tokens | Create a new service token
[**deleteServiceToken**](IdentityServiceTokensApi.md#deleteServiceToken) | **DELETE** /identity/service-tokens/{token_id} | Delete a service token
[**listServiceToken**](IdentityServiceTokensApi.md#listServiceToken) | **GET** /identity/service-tokens | List of the account service tokens
[**partialUpdateServiceToken**](IdentityServiceTokensApi.md#partialUpdateServiceToken) | **PATCH** /identity/service-tokens/{token_id} | Partially update a service token
[**retrieveServiceToken**](IdentityServiceTokensApi.md#retrieveServiceToken) | **GET** /identity/service-tokens/{token_id} | Retrieve details from a service token
[**updateServiceToken**](IdentityServiceTokensApi.md#updateServiceToken) | **PUT** /identity/service-tokens/{token_id} | Update a service token


# **createServiceToken**
> ResponseServiceTokenCreate createServiceToken(serviceTokenCreateRequest)

Create a new service token for your account.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiCreateServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiCreateServiceTokenRequest = {
  
  serviceTokenCreateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
    expires: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceTokenCreateRequest** | **ServiceTokenCreateRequest**|  |


### Return type

**ResponseServiceTokenCreate**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteServiceToken**
> ResponseDeleteServiceToken deleteServiceToken()

Delete a specific service token in your account.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiDeleteServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiDeleteServiceTokenRequest = {
  
  tokenId: "token_id_example",
};

const data = await apiInstance.deleteServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] |  | defaults to undefined


### Return type

**ResponseDeleteServiceToken**

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

# **listServiceToken**
> PaginatedServiceTokenList listServiceToken()

List all services tokens owned by your account.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiListServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiListServiceTokenRequest = {
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

const data = await apiInstance.listServiceToken(request);
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

**PaginatedServiceTokenList**

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

# **partialUpdateServiceToken**
> ResponseServiceToken partialUpdateServiceToken()

Update one or more fields of an existing service token without affecting other fields.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiPartialUpdateServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiPartialUpdateServiceTokenRequest = {
  
  tokenId: "token_id_example",
  
  patchedServiceTokenUpdateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.partialUpdateServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedServiceTokenUpdateRequest** | **PatchedServiceTokenUpdateRequest**|  |
 **tokenId** | [**string**] |  | defaults to undefined


### Return type

**ResponseServiceToken**

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

# **retrieveServiceToken**
> ResponseRetrieveServiceToken retrieveServiceToken()

Retrieve details from a specific service token in your account.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiRetrieveServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiRetrieveServiceTokenRequest = {
  
  tokenId: "token_id_example",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | [**string**] |  | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**ResponseRetrieveServiceToken**

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

# **updateServiceToken**
> ResponseServiceToken updateServiceToken(serviceTokenUpdateRequest)

Update an existing service token. This replaces the entire service token with the new data provided.

### Example


```typescript
import { createConfiguration, IdentityServiceTokensApi } from '';
import type { IdentityServiceTokensApiUpdateServiceTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new IdentityServiceTokensApi(configuration);

const request: IdentityServiceTokensApiUpdateServiceTokenRequest = {
  
  tokenId: "token_id_example",
  
  serviceTokenUpdateRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    description: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
};

const data = await apiInstance.updateServiceToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceTokenUpdateRequest** | **ServiceTokenUpdateRequest**|  |
 **tokenId** | [**string**] |  | defaults to undefined


### Return type

**ResponseServiceToken**

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


