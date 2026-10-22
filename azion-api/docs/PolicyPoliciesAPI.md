# .PolicyPoliciesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPolicy**](PolicyPoliciesApi.md#createPolicy) | **POST** /auth/policies | Create a new policy
[**deletePolicy**](PolicyPoliciesApi.md#deletePolicy) | **DELETE** /auth/policies/{policy_id} | Delete a policy
[**listPolicy**](PolicyPoliciesApi.md#listPolicy) | **GET** /auth/policies | List of account policies
[**partialUpdatePolicy**](PolicyPoliciesApi.md#partialUpdatePolicy) | **PATCH** /auth/policies/{policy_id} | Partially update a policy
[**retrievePolicy**](PolicyPoliciesApi.md#retrievePolicy) | **GET** /auth/policies/{policy_id} | Retrieve details from a policy
[**updatePolicy**](PolicyPoliciesApi.md#updatePolicy) | **PUT** /auth/policies/{policy_id} | Update a policy


# **createPolicy**
> PolicyResponse createPolicy(policyRequest)

Create a new policy for your account.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiCreatePolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiCreatePolicyRequest = {
  
  policyRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    rules: [
      {
        name: "jUR,rZ#UM/?R,Fp^l6$ARj",
        effect: "allow",
        resource: "j",
        actions: [
          "actions_example",
        ],
        condition: {
          ipAddress: [
            "ipAddress_example",
          ],
        },
      },
    ],
  },
};

const data = await apiInstance.createPolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRequest** | **PolicyRequest**|  |


### Return type

**PolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Policy created successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePolicy**
> DeleteResponse deletePolicy()

Delete a specific policy from your account.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiDeletePolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiDeletePolicyRequest = {
    // A unique integer value identifying the policy.
  policyId: 1,
};

const data = await apiInstance.deletePolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**number**] | A unique integer value identifying the policy. | defaults to undefined


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
**200** | Policy deleted successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPolicy**
> PaginatedPolicyList listPolicy()

List all your account policies.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiListPolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiListPolicyRequest = {
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

const data = await apiInstance.listPolicy(request);
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

**PaginatedPolicyList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of policies retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **partialUpdatePolicy**
> PolicyResponse partialUpdatePolicy()

Update one or more fields of an existing policy without affecting other fields.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiPartialUpdatePolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiPartialUpdatePolicyRequest = {
    // A unique integer value identifying the policy.
  policyId: 1,
  
  patchedPolicyRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    rules: [
      {
        name: "jUR,rZ#UM/?R,Fp^l6$ARj",
        effect: "allow",
        resource: "j",
        actions: [
          "actions_example",
        ],
        condition: {
          ipAddress: [
            "ipAddress_example",
          ],
        },
      },
    ],
  },
};

const data = await apiInstance.partialUpdatePolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPolicyRequest** | **PatchedPolicyRequest**|  |
 **policyId** | [**number**] | A unique integer value identifying the policy. | defaults to undefined


### Return type

**PolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy partially updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePolicy**
> PolicyResponse retrievePolicy()

Retrieve details from a specific policy from your account.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiRetrievePolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiRetrievePolicyRequest = {
    // A unique integer value identifying the policy.
  policyId: 1,
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
};

const data = await apiInstance.retrievePolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**number**] | A unique integer value identifying the policy. | defaults to undefined
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined


### Return type

**PolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy details retrieved successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePolicy**
> PolicyResponse updatePolicy(policyRequest)

Update an existing policy. This replaces all policy rules with the new data provided.

### Example


```typescript
import { createConfiguration, PolicyPoliciesApi } from '';
import type { PolicyPoliciesApiUpdatePolicyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PolicyPoliciesApi(configuration);

const request: PolicyPoliciesApiUpdatePolicyRequest = {
    // A unique integer value identifying the policy.
  policyId: 1,
  
  policyRequest: {
    name: "jUR,rZ#UM/?R,Fp^l6$ARj",
    active: true,
    rules: [
      {
        name: "jUR,rZ#UM/?R,Fp^l6$ARj",
        effect: "allow",
        resource: "j",
        actions: [
          "actions_example",
        ],
        condition: {
          ipAddress: [
            "ipAddress_example",
          ],
        },
      },
    ],
  },
};

const data = await apiInstance.updatePolicy(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRequest** | **PolicyRequest**|  |
 **policyId** | [**number**] | A unique integer value identifying the policy. | defaults to undefined


### Return type

**PolicyResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy updated successfully. |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


