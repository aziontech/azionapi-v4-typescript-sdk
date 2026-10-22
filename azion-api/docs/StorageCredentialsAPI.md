# .StorageCredentialsApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredential**](StorageCredentialsApi.md#createCredential) | **POST** /workspace/storage/credentials | Create a new credential
[**deleteCredential**](StorageCredentialsApi.md#deleteCredential) | **DELETE** /workspace/storage/credentials/{credential_id} | Delete a credential
[**listCredentials**](StorageCredentialsApi.md#listCredentials) | **GET** /workspace/storage/credentials | List credentials
[**retrieveCredential**](StorageCredentialsApi.md#retrieveCredential) | **GET** /workspace/storage/credentials/{credential_id} | Retrieve details from a credential


# **createCredential**
> CredentialResponse createCredential(credentialCreateRequest)

Create a new credential.

### Example


```typescript
import { createConfiguration, StorageCredentialsApi } from '';
import type { StorageCredentialsApiCreateCredentialRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageCredentialsApi(configuration);

const request: StorageCredentialsApiCreateCredentialRequest = {
  
  credentialCreateRequest: {
    name: "G",
    capabilities: [
      "listFiles",
    ],
    buckets: [
      "jUR,rZ#UM/?R,Fp^l6$ARj",
    ],
    expirationDate: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createCredential(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialCreateRequest** | **CredentialCreateRequest**|  |


### Return type

**CredentialResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Credential created successfully. |  -  |
**202** | Credential creation request accepted and is being processed. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCredential**
> DeleteResponse deleteCredential()

Delete a specific credential.

### Example


```typescript
import { createConfiguration, StorageCredentialsApi } from '';
import type { StorageCredentialsApiDeleteCredentialRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageCredentialsApi(configuration);

const request: StorageCredentialsApiDeleteCredentialRequest = {
    // The unique identifier of the credential
  credentialId: 1,
};

const data = await apiInstance.deleteCredential(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | [**number**] | The unique identifier of the credential | defaults to undefined


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
**200** | Credential deleted successfully. |  -  |
**202** | Credential deletion request accepted and is being processed. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCredentials**
> PaginatedCredentialList listCredentials()

List all credentials.

### Example


```typescript
import { createConfiguration, StorageCredentialsApi } from '';
import type { StorageCredentialsApiListCredentialsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageCredentialsApi(configuration);

const request: StorageCredentialsApiListCredentialsRequest = {
    // Filter by access key (exact match). (optional)
  accessKey: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by bucket name (exact match). (optional)
  buckets: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by multiple bucket names (comma-separated). (optional)
  bucketsIn: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
    // Filter by id (accepts comma-separated values). (optional)
  id: 1,
    // Filter by last editor (case-insensitive, partial match). (optional)
  lastEditor: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Filter by last modified date (exact match). (optional)
  lastModified: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (greater than or equal). (optional)
  lastModifiedGte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by last modified date (less than or equal). (optional)
  lastModifiedLte: new Date('1970-01-01T00:00:00.00Z'),
    // Filter by name (case-insensitive, partial match). (optional)
  name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
};

const data = await apiInstance.listCredentials(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessKey** | [**string**] | Filter by access key (exact match). | (optional) defaults to undefined
 **buckets** | [**string**] | Filter by bucket name (exact match). | (optional) defaults to undefined
 **bucketsIn** | [**string**] | Filter by multiple bucket names (comma-separated). | (optional) defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] | Filter by id (accepts comma-separated values). | (optional) defaults to undefined
 **lastEditor** | [**string**] | Filter by last editor (case-insensitive, partial match). | (optional) defaults to undefined
 **lastModified** | [**Date**] | Filter by last modified date (exact match). | (optional) defaults to undefined
 **lastModifiedGte** | [**Date**] | Filter by last modified date (greater than or equal). | (optional) defaults to undefined
 **lastModifiedLte** | [**Date**] | Filter by last modified date (less than or equal). | (optional) defaults to undefined
 **name** | [**string**] | Filter by name (case-insensitive, partial match). | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedCredentialList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of credentials retrieved successfully. |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCredential**
> CredentialResponse retrieveCredential()

Retrieve details from a specific credential.

### Example


```typescript
import { createConfiguration, StorageCredentialsApi } from '';
import type { StorageCredentialsApiRetrieveCredentialRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageCredentialsApi(configuration);

const request: StorageCredentialsApiRetrieveCredentialRequest = {
    // The unique identifier of the credential
  credentialId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrieveCredential(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialId** | [**number**] | The unique identifier of the credential | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**CredentialResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Credential details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


