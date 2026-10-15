# \WAFVersionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ArchiveWafVersion**](WAFVersionsAPI.md#ArchiveWafVersion) | **Post** /workspace/wafs/{waf_id}/versions/{version_id}/archive | Archive a WAF version
[**BuildWafVersion**](WAFVersionsAPI.md#BuildWafVersion) | **Post** /workspace/wafs/{waf_id}/versions/{version_id}/build | Build a WAF version
[**CancelWafVersionBuild**](WAFVersionsAPI.md#CancelWafVersionBuild) | **Post** /workspace/wafs/{waf_id}/versions/{version_id}/cancel | Cancel a WAF version build
[**CreateWafVersion**](WAFVersionsAPI.md#CreateWafVersion) | **Post** /workspace/wafs/{waf_id}/versions | Create a new WAF version
[**DeleteWafVersion**](WAFVersionsAPI.md#DeleteWafVersion) | **Delete** /workspace/wafs/{waf_id}/versions/{version_id} | Delete a WAF version
[**ListWafVersions**](WAFVersionsAPI.md#ListWafVersions) | **Get** /workspace/wafs/{waf_id}/versions | List WAF versions
[**PartialUpdateWafVersion**](WAFVersionsAPI.md#PartialUpdateWafVersion) | **Patch** /workspace/wafs/{waf_id}/versions/{version_id} | Partially update a WAF version
[**RetrieveWafVersion**](WAFVersionsAPI.md#RetrieveWafVersion) | **Get** /workspace/wafs/{waf_id}/versions/{version_id} | Retrieve a WAF version
[**UpdateWafVersion**](WAFVersionsAPI.md#UpdateWafVersion) | **Put** /workspace/wafs/{waf_id}/versions/{version_id} | Update a WAF version



## ArchiveWafVersion

> ArchiveWafVersion(ctx, versionId, wafId).VersionArchiveRequest(versionArchiveRequest).Execute()

Archive a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	versionArchiveRequest := *openapiclient.NewVersionArchiveRequest() // VersionArchiveRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.ArchiveWafVersion(context.Background(), versionId, wafId).VersionArchiveRequest(versionArchiveRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.ArchiveWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiArchiveWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **versionArchiveRequest** | [**VersionArchiveRequest**](VersionArchiveRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BuildWafVersion

> BuildWafVersion(ctx, versionId, wafId).VersionBuildRequest(versionBuildRequest).Execute()

Build a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	versionBuildRequest := *openapiclient.NewVersionBuildRequest() // VersionBuildRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.BuildWafVersion(context.Background(), versionId, wafId).VersionBuildRequest(versionBuildRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.BuildWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBuildWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **versionBuildRequest** | [**VersionBuildRequest**](VersionBuildRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CancelWafVersionBuild

> CancelWafVersionBuild(ctx, versionId, wafId).VersionCancelRequest(versionCancelRequest).Execute()

Cancel a WAF version build



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	versionCancelRequest := *openapiclient.NewVersionCancelRequest() // VersionCancelRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.CancelWafVersionBuild(context.Background(), versionId, wafId).VersionCancelRequest(versionCancelRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.CancelWafVersionBuild``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelWafVersionBuildRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **versionCancelRequest** | [**VersionCancelRequest**](VersionCancelRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateWafVersion

> CreateWafVersion(ctx, wafId).VersionCreateRequest(versionCreateRequest).Execute()

Create a new WAF version



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
	wafId := int64(789) // int64 | The ID of the WAF resource.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.CreateWafVersion(context.Background(), wafId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.CreateWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **versionCreateRequest** | [**VersionCreateRequest**](VersionCreateRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWafVersion

> DeleteWafVersion(ctx, versionId, wafId).Execute()

Delete a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.DeleteWafVersion(context.Background(), versionId, wafId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.DeleteWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWafVersions

> ListWafVersions(ctx, wafId).Fields(fields).Execute()

List WAF versions



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
	wafId := int64(789) // int64 | The ID of the WAF resource.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.ListWafVersions(context.Background(), wafId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.ListWafVersions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListWafVersionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateWafVersion

> PartialUpdateWafVersion(ctx, versionId, wafId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()

Partially update a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	patchedVersionCreateRequest := *openapiclient.NewPatchedVersionCreateRequest() // PatchedVersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.PartialUpdateWafVersion(context.Background(), versionId, wafId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.PartialUpdateWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedVersionCreateRequest** | [**PatchedVersionCreateRequest**](PatchedVersionCreateRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveWafVersion

> RetrieveWafVersion(ctx, versionId, wafId).Fields(fields).Execute()

Retrieve a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.RetrieveWafVersion(context.Background(), versionId, wafId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.RetrieveWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWafVersion

> UpdateWafVersion(ctx, versionId, wafId).VersionCreateRequest(versionCreateRequest).Execute()

Update a WAF version



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
	versionId := "versionId_example" // string | The identifier of the version.
	wafId := int64(789) // int64 | The ID of the WAF resource.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WAFVersionsAPI.UpdateWafVersion(context.Background(), versionId, wafId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WAFVersionsAPI.UpdateWafVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**versionId** | **string** | The identifier of the version. | 
**wafId** | **int64** | The ID of the WAF resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWafVersionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **versionCreateRequest** | [**VersionCreateRequest**](VersionCreateRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

