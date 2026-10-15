# \PurgeAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePurgeRequest**](PurgeAPI.md#CreatePurgeRequest) | **Post** /workspace/purge/{purge_type} | Create a Purge Request



## CreatePurgeRequest

> PurgeResponse CreatePurgeRequest(ctx, purgeType).PurgeRequest(purgeRequest).Execute()

Create a Purge Request



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
	purgeType := "purgeType_example" // string | type of purge: URL, Wildcard or Cachekey
	purgeRequest := *openapiclient.NewPurgeRequest([]string{"Items_example"}) // PurgeRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PurgeAPI.CreatePurgeRequest(context.Background(), purgeType).PurgeRequest(purgeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PurgeAPI.CreatePurgeRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePurgeRequest`: PurgeResponse
	fmt.Fprintf(os.Stdout, "Response from `PurgeAPI.CreatePurgeRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**purgeType** | **string** | type of purge: URL, Wildcard or Cachekey | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreatePurgeRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **purgeRequest** | [**PurgeRequest**](PurgeRequest.md) |  | 

### Return type

[**PurgeResponse**](PurgeResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

