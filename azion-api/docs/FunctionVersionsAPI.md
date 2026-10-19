# \FunctionVersionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ArchiveFunctionVersion**](FunctionVersionsAPI.md#ArchiveFunctionVersion) | **Post** /workspace/functions/{function_id}/versions/{version_id}/archive | Archive a Function version
[**BuildFunctionVersion**](FunctionVersionsAPI.md#BuildFunctionVersion) | **Post** /workspace/functions/{function_id}/versions/{version_id}/build | Build a Function version
[**CancelFunctionVersionBuild**](FunctionVersionsAPI.md#CancelFunctionVersionBuild) | **Post** /workspace/functions/{function_id}/versions/{version_id}/cancel | Cancel a Function version build
[**CreateFunctionVersion**](FunctionVersionsAPI.md#CreateFunctionVersion) | **Post** /workspace/functions/{function_id}/versions | Create a new Function version
[**DeleteFunctionVersion**](FunctionVersionsAPI.md#DeleteFunctionVersion) | **Delete** /workspace/functions/{function_id}/versions/{version_id} | Delete a Function version
[**ListFunctionVersions**](FunctionVersionsAPI.md#ListFunctionVersions) | **Get** /workspace/functions/{function_id}/versions | List Function versions
[**PartialUpdateFunctionVersion**](FunctionVersionsAPI.md#PartialUpdateFunctionVersion) | **Patch** /workspace/functions/{function_id}/versions/{version_id} | Partially update a Function version
[**RetrieveFunctionVersion**](FunctionVersionsAPI.md#RetrieveFunctionVersion) | **Get** /workspace/functions/{function_id}/versions/{version_id} | Retrieve a Function version
[**UpdateFunctionVersion**](FunctionVersionsAPI.md#UpdateFunctionVersion) | **Put** /workspace/functions/{function_id}/versions/{version_id} | Update a Function version



## ArchiveFunctionVersion

> ArchiveFunctionVersion(ctx, functionId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()

Archive a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionArchiveRequest := *openapiclient.NewVersionArchiveRequest() // VersionArchiveRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.ArchiveFunctionVersion(context.Background(), functionId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.ArchiveFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiArchiveFunctionVersionRequest struct via the builder pattern


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


## BuildFunctionVersion

> BuildFunctionVersion(ctx, functionId, versionId).VersionBuildRequest(versionBuildRequest).Execute()

Build a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionBuildRequest := *openapiclient.NewVersionBuildRequest() // VersionBuildRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.BuildFunctionVersion(context.Background(), functionId, versionId).VersionBuildRequest(versionBuildRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.BuildFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBuildFunctionVersionRequest struct via the builder pattern


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


## CancelFunctionVersionBuild

> CancelFunctionVersionBuild(ctx, functionId, versionId).VersionCancelRequest(versionCancelRequest).Execute()

Cancel a Function version build



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionCancelRequest := *openapiclient.NewVersionCancelRequest() // VersionCancelRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.CancelFunctionVersionBuild(context.Background(), functionId, versionId).VersionCancelRequest(versionCancelRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.CancelFunctionVersionBuild``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelFunctionVersionBuildRequest struct via the builder pattern


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


## CreateFunctionVersion

> CreateFunctionVersion(ctx, functionId).VersionCreateRequest(versionCreateRequest).Execute()

Create a new Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.CreateFunctionVersion(context.Background(), functionId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.CreateFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFunctionVersionRequest struct via the builder pattern


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


## DeleteFunctionVersion

> DeleteFunctionVersion(ctx, functionId, versionId).Execute()

Delete a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.DeleteFunctionVersion(context.Background(), functionId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.DeleteFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFunctionVersionRequest struct via the builder pattern


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


## ListFunctionVersions

> ListFunctionVersions(ctx, functionId).Fields(fields).Execute()

List Function versions



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.ListFunctionVersions(context.Background(), functionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.ListFunctionVersions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListFunctionVersionsRequest struct via the builder pattern


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


## PartialUpdateFunctionVersion

> PartialUpdateFunctionVersion(ctx, functionId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()

Partially update a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	patchedVersionCreateRequest := *openapiclient.NewPatchedVersionCreateRequest() // PatchedVersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.PartialUpdateFunctionVersion(context.Background(), functionId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.PartialUpdateFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFunctionVersionRequest struct via the builder pattern


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


## RetrieveFunctionVersion

> RetrieveFunctionVersion(ctx, functionId, versionId).Fields(fields).Execute()

Retrieve a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.RetrieveFunctionVersion(context.Background(), functionId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.RetrieveFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFunctionVersionRequest struct via the builder pattern


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


## UpdateFunctionVersion

> UpdateFunctionVersion(ctx, functionId, versionId).VersionCreateRequest(versionCreateRequest).Execute()

Update a Function version



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
	functionId := int64(789) // int64 | The ID of the Function resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.FunctionVersionsAPI.UpdateFunctionVersion(context.Background(), functionId, versionId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FunctionVersionsAPI.UpdateFunctionVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionId** | **int64** | The ID of the Function resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFunctionVersionRequest struct via the builder pattern


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

