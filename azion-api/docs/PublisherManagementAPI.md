# \PublisherManagementAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPublisherDetails**](PublisherManagementAPI.md#GetPublisherDetails) | **Get** /marketplace/publisher | Get publisher details
[**UpdatePublisherDetails**](PublisherManagementAPI.md#UpdatePublisherDetails) | **Put** /marketplace/publisher | Update publisher details



## GetPublisherDetails

> ResponseRetrievePublisher GetPublisherDetails(ctx).Fields(fields).Execute()

Get publisher details



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
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PublisherManagementAPI.GetPublisherDetails(context.Background()).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PublisherManagementAPI.GetPublisherDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPublisherDetails`: ResponseRetrievePublisher
	fmt.Fprintf(os.Stdout, "Response from `PublisherManagementAPI.GetPublisherDetails`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPublisherDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponseRetrievePublisher**](ResponseRetrievePublisher.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePublisherDetails

> ResponsePublisher UpdatePublisherDetails(ctx).PublisherRequest(publisherRequest).Execute()

Update publisher details



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
	publisherRequest := *openapiclient.NewPublisherRequest("Icon_example") // PublisherRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PublisherManagementAPI.UpdatePublisherDetails(context.Background()).PublisherRequest(publisherRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PublisherManagementAPI.UpdatePublisherDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePublisherDetails`: ResponsePublisher
	fmt.Fprintf(os.Stdout, "Response from `PublisherManagementAPI.UpdatePublisherDetails`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePublisherDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publisherRequest** | [**PublisherRequest**](PublisherRequest.md) |  | 

### Return type

[**ResponsePublisher**](ResponsePublisher.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

