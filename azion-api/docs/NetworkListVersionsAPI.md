# \NetworkListVersionsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ArchiveNetworkListVersion**](NetworkListVersionsAPI.md#ArchiveNetworkListVersion) | **Post** /workspace/network_lists/{network_list_id}/versions/{version_id}/archive | Archive a Network List version
[**BuildNetworkListVersion**](NetworkListVersionsAPI.md#BuildNetworkListVersion) | **Post** /workspace/network_lists/{network_list_id}/versions/{version_id}/build | Build a Network List version
[**CancelNetworkListVersionBuild**](NetworkListVersionsAPI.md#CancelNetworkListVersionBuild) | **Post** /workspace/network_lists/{network_list_id}/versions/{version_id}/cancel | Cancel a Network List version build
[**CreateNetworkListVersion**](NetworkListVersionsAPI.md#CreateNetworkListVersion) | **Post** /workspace/network_lists/{network_list_id}/versions | Create a new Network List version
[**DeleteNetworkListVersion**](NetworkListVersionsAPI.md#DeleteNetworkListVersion) | **Delete** /workspace/network_lists/{network_list_id}/versions/{version_id} | Delete a Network List version
[**ListNetworkListVersions**](NetworkListVersionsAPI.md#ListNetworkListVersions) | **Get** /workspace/network_lists/{network_list_id}/versions | List Network List versions
[**PartialUpdateNetworkListVersion**](NetworkListVersionsAPI.md#PartialUpdateNetworkListVersion) | **Patch** /workspace/network_lists/{network_list_id}/versions/{version_id} | Partially update a Network List version
[**RetrieveNetworkListVersion**](NetworkListVersionsAPI.md#RetrieveNetworkListVersion) | **Get** /workspace/network_lists/{network_list_id}/versions/{version_id} | Retrieve a Network List version
[**UpdateNetworkListVersion**](NetworkListVersionsAPI.md#UpdateNetworkListVersion) | **Put** /workspace/network_lists/{network_list_id}/versions/{version_id} | Update a Network List version



## ArchiveNetworkListVersion

> ArchiveNetworkListVersion(ctx, networkListId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()

Archive a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionArchiveRequest := *openapiclient.NewVersionArchiveRequest() // VersionArchiveRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.ArchiveNetworkListVersion(context.Background(), networkListId, versionId).VersionArchiveRequest(versionArchiveRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.ArchiveNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiArchiveNetworkListVersionRequest struct via the builder pattern


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


## BuildNetworkListVersion

> BuildNetworkListVersion(ctx, networkListId, versionId).VersionBuildRequest(versionBuildRequest).Execute()

Build a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionBuildRequest := *openapiclient.NewVersionBuildRequest() // VersionBuildRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.BuildNetworkListVersion(context.Background(), networkListId, versionId).VersionBuildRequest(versionBuildRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.BuildNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBuildNetworkListVersionRequest struct via the builder pattern


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


## CancelNetworkListVersionBuild

> CancelNetworkListVersionBuild(ctx, networkListId, versionId).VersionCancelRequest(versionCancelRequest).Execute()

Cancel a Network List version build



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionCancelRequest := *openapiclient.NewVersionCancelRequest() // VersionCancelRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.CancelNetworkListVersionBuild(context.Background(), networkListId, versionId).VersionCancelRequest(versionCancelRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.CancelNetworkListVersionBuild``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelNetworkListVersionBuildRequest struct via the builder pattern


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


## CreateNetworkListVersion

> CreateNetworkListVersion(ctx, networkListId).VersionCreateRequest(versionCreateRequest).Execute()

Create a new Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.CreateNetworkListVersion(context.Background(), networkListId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.CreateNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateNetworkListVersionRequest struct via the builder pattern


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


## DeleteNetworkListVersion

> DeleteNetworkListVersion(ctx, networkListId, versionId).Execute()

Delete a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.DeleteNetworkListVersion(context.Background(), networkListId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.DeleteNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNetworkListVersionRequest struct via the builder pattern


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


## ListNetworkListVersions

> ListNetworkListVersions(ctx, networkListId).Fields(fields).Execute()

List Network List versions



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.ListNetworkListVersions(context.Background(), networkListId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.ListNetworkListVersions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListNetworkListVersionsRequest struct via the builder pattern


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


## PartialUpdateNetworkListVersion

> PartialUpdateNetworkListVersion(ctx, networkListId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()

Partially update a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	patchedVersionCreateRequest := *openapiclient.NewPatchedVersionCreateRequest() // PatchedVersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.PartialUpdateNetworkListVersion(context.Background(), networkListId, versionId).PatchedVersionCreateRequest(patchedVersionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.PartialUpdateNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateNetworkListVersionRequest struct via the builder pattern


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


## RetrieveNetworkListVersion

> RetrieveNetworkListVersion(ctx, networkListId, versionId).Fields(fields).Execute()

Retrieve a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.RetrieveNetworkListVersion(context.Background(), networkListId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.RetrieveNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveNetworkListVersionRequest struct via the builder pattern


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


## UpdateNetworkListVersion

> UpdateNetworkListVersion(ctx, networkListId, versionId).VersionCreateRequest(versionCreateRequest).Execute()

Update a Network List version



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
	networkListId := int64(789) // int64 | The ID of the Network List resource.
	versionId := "versionId_example" // string | The identifier of the version.
	versionCreateRequest := *openapiclient.NewVersionCreateRequest() // VersionCreateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.NetworkListVersionsAPI.UpdateNetworkListVersion(context.Background(), networkListId, versionId).VersionCreateRequest(versionCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `NetworkListVersionsAPI.UpdateNetworkListVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**networkListId** | **int64** | The ID of the Network List resource. | 
**versionId** | **string** | The identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateNetworkListVersionRequest struct via the builder pattern


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

