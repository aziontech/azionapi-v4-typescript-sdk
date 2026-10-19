# \ApplicationVersionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ArchiveApplicationVersion**](ApplicationVersionsAPI.md#ArchiveApplicationVersion) | **Post** /workspace/applications/{application_id}/versions/{version_id}/archive | Archive an Application version
[**BuildApplicationVersion**](ApplicationVersionsAPI.md#BuildApplicationVersion) | **Post** /workspace/applications/{application_id}/versions/{version_id}/build | Build an Application version
[**CancelApplicationVersionBuild**](ApplicationVersionsAPI.md#CancelApplicationVersionBuild) | **Post** /workspace/applications/{application_id}/versions/{version_id}/cancel | Cancel an Application version build
[**CreateApplicationVersion**](ApplicationVersionsAPI.md#CreateApplicationVersion) | **Post** /workspace/applications/{application_id}/versions | Create a new Application version
[**DeleteApplicationVersion**](ApplicationVersionsAPI.md#DeleteApplicationVersion) | **Delete** /workspace/applications/{application_id}/versions/{version_id} | Delete an Application version
[**ListApplicationVersions**](ApplicationVersionsAPI.md#ListApplicationVersions) | **Get** /workspace/applications/{application_id}/versions | List Application versions
[**PartialUpdateApplicationVersion**](ApplicationVersionsAPI.md#PartialUpdateApplicationVersion) | **Patch** /workspace/applications/{application_id}/versions/{version_id} | Partially update an Application version
[**RetrieveApplicationVersion**](ApplicationVersionsAPI.md#RetrieveApplicationVersion) | **Get** /workspace/applications/{application_id}/versions/{version_id} | Retrieve an Application version
[**UpdateApplicationVersion**](ApplicationVersionsAPI.md#UpdateApplicationVersion) | **Put** /workspace/applications/{application_id}/versions/{version_id} | Update an Application version



## ArchiveApplicationVersion

> ArchiveApplicationVersion(ctx, applicationId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()

Archive an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionArchiveRequest := *openapiclient.NewVersionArchiveRequest() // VersionArchiveRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.ArchiveApplicationVersion(context.Background(), applicationId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.ArchiveApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiArchiveApplicationVersionRequest struct via the builder pattern


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


## BuildApplicationVersion

> BuildApplicationVersion(ctx, applicationId, versionId).VersionBuildRequest(versionBuildRequest).Execute()

Build an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionBuildRequest := *openapiclient.NewVersionBuildRequest() // VersionBuildRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.BuildApplicationVersion(context.Background(), applicationId, versionId).VersionBuildRequest(versionBuildRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.BuildApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBuildApplicationVersionRequest struct via the builder pattern


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


## CancelApplicationVersionBuild

> CancelApplicationVersionBuild(ctx, applicationId, versionId).VersionBuildRequest(versionBuildRequest).Execute()

Cancel an Application version build



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionBuildRequest := *openapiclient.NewVersionBuildRequest() // VersionBuildRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.CancelApplicationVersionBuild(context.Background(), applicationId, versionId).VersionBuildRequest(versionBuildRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.CancelApplicationVersionBuild``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelApplicationVersionBuildRequest struct via the builder pattern


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


## CreateApplicationVersion

> CreateApplicationVersion(ctx, applicationId).VersionCreateRequest(versionCreateRequest).Execute()

Create a new Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.CreateApplicationVersion(context.Background(), applicationId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.CreateApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationVersionRequest struct via the builder pattern


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


## DeleteApplicationVersion

> DeleteApplicationVersion(ctx, applicationId, versionId).Execute()

Delete an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.DeleteApplicationVersion(context.Background(), applicationId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.DeleteApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationVersionRequest struct via the builder pattern


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


## ListApplicationVersions

> ListApplicationVersions(ctx, applicationId).Fields(fields).Execute()

List Application versions



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.ListApplicationVersions(context.Background(), applicationId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.ListApplicationVersions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListApplicationVersionsRequest struct via the builder pattern


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


## PartialUpdateApplicationVersion

> PartialUpdateApplicationVersion(ctx, applicationId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()

Partially update an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	patchedVersionCreateRequest := *openapiclient.NewPatchedVersionCreateRequest() // PatchedVersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.PartialUpdateApplicationVersion(context.Background(), applicationId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.PartialUpdateApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateApplicationVersionRequest struct via the builder pattern


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


## RetrieveApplicationVersion

> RetrieveApplicationVersion(ctx, applicationId, versionId).Fields(fields).Execute()

Retrieve an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.RetrieveApplicationVersion(context.Background(), applicationId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.RetrieveApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveApplicationVersionRequest struct via the builder pattern


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


## UpdateApplicationVersion

> UpdateApplicationVersion(ctx, applicationId, versionId).VersionCreateRequest(versionCreateRequest).Execute()

Update an Application version



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
	applicationId := int64(789) // int64 | The ID (global_id) of the Application resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApplicationVersionsAPI.UpdateApplicationVersion(context.Background(), applicationId, versionId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionsAPI.UpdateApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | The ID (global_id) of the Application resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationVersionRequest struct via the builder pattern


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

