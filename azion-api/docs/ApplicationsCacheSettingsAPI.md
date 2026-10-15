# \ApplicationsCacheSettingsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCacheSetting**](ApplicationsCacheSettingsAPI.md#CreateCacheSetting) | **Post** /workspace/applications/{application_id}/cache_settings | Create an Applications Cache Setting
[**CreateCacheSetting2**](ApplicationsCacheSettingsAPI.md#CreateCacheSetting2) | **Post** /workspace/applications/{application_id}/versions/{version_id}/cache_settings | Create an Applications Cache Setting
[**DeleteCacheSetting**](ApplicationsCacheSettingsAPI.md#DeleteCacheSetting) | **Delete** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Delete an Applications Cache Setting
[**DeleteCacheSetting2**](ApplicationsCacheSettingsAPI.md#DeleteCacheSetting2) | **Delete** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Delete an Applications Cache Setting
[**ListCacheSettings**](ApplicationsCacheSettingsAPI.md#ListCacheSettings) | **Get** /workspace/applications/{application_id}/cache_settings | List all Applications Cache Settings
[**ListCacheSettings2**](ApplicationsCacheSettingsAPI.md#ListCacheSettings2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/cache_settings | List all Applications Cache Settings
[**PartialUpdateCacheSetting**](ApplicationsCacheSettingsAPI.md#PartialUpdateCacheSetting) | **Patch** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Partially update an Applications Cache Setting
[**PartialUpdateCacheSetting2**](ApplicationsCacheSettingsAPI.md#PartialUpdateCacheSetting2) | **Patch** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Partially update an Applications Cache Setting
[**RetrieveCacheSetting**](ApplicationsCacheSettingsAPI.md#RetrieveCacheSetting) | **Get** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Retrieve details of an Applications Cache Setting
[**RetrieveCacheSetting2**](ApplicationsCacheSettingsAPI.md#RetrieveCacheSetting2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Retrieve details of an Applications Cache Setting
[**UpdateCacheSetting**](ApplicationsCacheSettingsAPI.md#UpdateCacheSetting) | **Put** /workspace/applications/{application_id}/cache_settings/{cache_setting_id} | Update an Applications Cache Setting
[**UpdateCacheSetting2**](ApplicationsCacheSettingsAPI.md#UpdateCacheSetting2) | **Put** /workspace/applications/{application_id}/versions/{version_id}/cache_settings/{cache_setting_id} | Update an Applications Cache Setting



## CreateCacheSetting

> CacheSettingResponse CreateCacheSetting(ctx, applicationId).CacheSettingRequest(cacheSettingRequest).Execute()

Create an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingRequest := *openapiclient.NewCacheSettingRequest("Name_example") // CacheSettingRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.CreateCacheSetting(context.Background(), applicationId).CacheSettingRequest(cacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.CreateCacheSetting``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCacheSetting`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.CreateCacheSetting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateCacheSettingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cacheSettingRequest** | [**CacheSettingRequest**](CacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateCacheSetting2

> CacheSettingResponse CreateCacheSetting2(ctx, applicationId, versionId).CacheSettingRequest(cacheSettingRequest).Execute()

Create an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	cacheSettingRequest := *openapiclient.NewCacheSettingRequest("Name_example") // CacheSettingRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.CreateCacheSetting2(context.Background(), applicationId, versionId).CacheSettingRequest(cacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.CreateCacheSetting2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCacheSetting2`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.CreateCacheSetting2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateCacheSetting2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cacheSettingRequest** | [**CacheSettingRequest**](CacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCacheSetting

> DeleteResponse DeleteCacheSetting(ctx, applicationId, cacheSettingId).Execute()

Delete an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.DeleteCacheSetting(context.Background(), applicationId, cacheSettingId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.DeleteCacheSetting``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCacheSetting`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.DeleteCacheSetting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCacheSettingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCacheSetting2

> DeleteResponse DeleteCacheSetting2(ctx, applicationId, cacheSettingId, versionId).Execute()

Delete an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	versionId := "versionId_example" // string | The ULID identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.DeleteCacheSetting2(context.Background(), applicationId, cacheSettingId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.DeleteCacheSetting2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteCacheSetting2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.DeleteCacheSetting2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCacheSetting2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCacheSettings

> PaginatedCacheSettingList ListCacheSettings(ctx, applicationId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List all Applications Cache Settings



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.ListCacheSettings(context.Background(), applicationId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.ListCacheSettings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCacheSettings`: PaginatedCacheSettingList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.ListCacheSettings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListCacheSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedCacheSettingList**](PaginatedCacheSettingList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCacheSettings2

> PaginatedCacheSettingList ListCacheSettings2(ctx, applicationId, versionId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List all Applications Cache Settings



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.ListCacheSettings2(context.Background(), applicationId, versionId).Fields(fields).Id(id).Name(name).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.ListCacheSettings2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCacheSettings2`: PaginatedCacheSettingList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.ListCacheSettings2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListCacheSettings2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedCacheSettingList**](PaginatedCacheSettingList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCacheSetting

> CacheSettingResponse PartialUpdateCacheSetting(ctx, applicationId, cacheSettingId).PatchedCacheSettingRequest(patchedCacheSettingRequest).Execute()

Partially update an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	patchedCacheSettingRequest := *openapiclient.NewPatchedCacheSettingRequest() // PatchedCacheSettingRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting(context.Background(), applicationId, cacheSettingId).PatchedCacheSettingRequest(patchedCacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCacheSetting`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCacheSettingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedCacheSettingRequest** | [**PatchedCacheSettingRequest**](PatchedCacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCacheSetting2

> CacheSettingResponse PartialUpdateCacheSetting2(ctx, applicationId, cacheSettingId, versionId).PatchedCacheSettingRequest(patchedCacheSettingRequest).Execute()

Partially update an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	patchedCacheSettingRequest := *openapiclient.NewPatchedCacheSettingRequest() // PatchedCacheSettingRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting2(context.Background(), applicationId, cacheSettingId, versionId).PatchedCacheSettingRequest(patchedCacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCacheSetting2`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.PartialUpdateCacheSetting2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCacheSetting2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedCacheSettingRequest** | [**PatchedCacheSettingRequest**](PatchedCacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCacheSetting

> CacheSettingResponse RetrieveCacheSetting(ctx, applicationId, cacheSettingId).Fields(fields).Execute()

Retrieve details of an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.RetrieveCacheSetting(context.Background(), applicationId, cacheSettingId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.RetrieveCacheSetting``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCacheSetting`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.RetrieveCacheSetting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCacheSettingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCacheSetting2

> CacheSettingResponse RetrieveCacheSetting2(ctx, applicationId, cacheSettingId, versionId).Fields(fields).Execute()

Retrieve details of an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.RetrieveCacheSetting2(context.Background(), applicationId, cacheSettingId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.RetrieveCacheSetting2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCacheSetting2`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.RetrieveCacheSetting2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCacheSetting2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCacheSetting

> CacheSettingResponse UpdateCacheSetting(ctx, applicationId, cacheSettingId).CacheSettingRequest(cacheSettingRequest).Execute()

Update an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	cacheSettingRequest := *openapiclient.NewCacheSettingRequest("Name_example") // CacheSettingRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.UpdateCacheSetting(context.Background(), applicationId, cacheSettingId).CacheSettingRequest(cacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.UpdateCacheSetting``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCacheSetting`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.UpdateCacheSetting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCacheSettingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cacheSettingRequest** | [**CacheSettingRequest**](CacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCacheSetting2

> CacheSettingResponse UpdateCacheSetting2(ctx, applicationId, cacheSettingId, versionId).CacheSettingRequest(cacheSettingRequest).Execute()

Update an Applications Cache Setting



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
	cacheSettingId := int64(789) // int64 | A unique integer value identifying the cache setting.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	cacheSettingRequest := *openapiclient.NewCacheSettingRequest("Name_example") // CacheSettingRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsCacheSettingsAPI.UpdateCacheSetting2(context.Background(), applicationId, cacheSettingId, versionId).CacheSettingRequest(cacheSettingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsCacheSettingsAPI.UpdateCacheSetting2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCacheSetting2`: CacheSettingResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsCacheSettingsAPI.UpdateCacheSetting2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**cacheSettingId** | **int64** | A unique integer value identifying the cache setting. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCacheSetting2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **cacheSettingRequest** | [**CacheSettingRequest**](CacheSettingRequest.md) |  | 

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

