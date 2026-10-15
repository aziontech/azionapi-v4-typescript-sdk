# \FirewallsRulesEngineAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFirewallRule**](FirewallsRulesEngineAPI.md#CreateFirewallRule) | **Post** /workspace/firewalls/{firewall_id}/request_rules | Create an Firewall Rule
[**CreateFirewallRule2**](FirewallsRulesEngineAPI.md#CreateFirewallRule2) | **Post** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules | Create an Firewall Rule
[**DeleteFirewallRule**](FirewallsRulesEngineAPI.md#DeleteFirewallRule) | **Delete** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Delete an Firewall Rule
[**DeleteFirewallRule2**](FirewallsRulesEngineAPI.md#DeleteFirewallRule2) | **Delete** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Delete an Firewall Rule
[**ListFirewallRules**](FirewallsRulesEngineAPI.md#ListFirewallRules) | **Get** /workspace/firewalls/{firewall_id}/request_rules | List Firewall Rules
[**ListFirewallRules2**](FirewallsRulesEngineAPI.md#ListFirewallRules2) | **Get** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules | List Firewall Rules
[**OrderFirewallRules**](FirewallsRulesEngineAPI.md#OrderFirewallRules) | **Put** /workspace/firewalls/{firewall_id}/request_rules/order | Ordering Firewall Rules
[**OrderFirewallRules2**](FirewallsRulesEngineAPI.md#OrderFirewallRules2) | **Put** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/order | Ordering Firewall Rules
[**PartialUpdateFirewallRule**](FirewallsRulesEngineAPI.md#PartialUpdateFirewallRule) | **Patch** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Partially update an Firewall Rule
[**PartialUpdateFirewallRule2**](FirewallsRulesEngineAPI.md#PartialUpdateFirewallRule2) | **Patch** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Partially update an Firewall Rule
[**RetrieveFirewallRule**](FirewallsRulesEngineAPI.md#RetrieveFirewallRule) | **Get** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Retrieve details of an Firewall Rule
[**RetrieveFirewallRule2**](FirewallsRulesEngineAPI.md#RetrieveFirewallRule2) | **Get** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Retrieve details of an Firewall Rule
[**UpdateFirewallRule**](FirewallsRulesEngineAPI.md#UpdateFirewallRule) | **Put** /workspace/firewalls/{firewall_id}/request_rules/{request_rule_id} | Update an Firewall Rule
[**UpdateFirewallRule2**](FirewallsRulesEngineAPI.md#UpdateFirewallRule2) | **Put** /workspace/firewalls/{firewall_id}/versions/{version_id}/request_rules/{request_rule_id} | Update an Firewall Rule



## CreateFirewallRule

> FirewallRuleResponse CreateFirewallRule(ctx, firewallId).FirewallRuleRequest(firewallRuleRequest).Execute()

Create an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	firewallRuleRequest := *openapiclient.NewFirewallRuleRequest("Name_example", [][]FirewallCriterionFieldRequest{[]openapiclient.FirewallCriterionFieldRequest{*openapiclient.NewFirewallCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.FirewallCriterionFieldVariableEnum("$(header_accept)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.FirewallBehaviorRequest{openapiclient.FirewallBehaviorRequest{FirewallBehaviorArgsRequest: openapiclient.NewFirewallBehaviorArgsRequest("Type_example", *openapiclient.NewFirewallBehaviorRunFunctionAttributesRequest(int64(123)))}}) // FirewallRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.CreateFirewallRule(context.Background(), firewallId).FirewallRuleRequest(firewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.CreateFirewallRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFirewallRule`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.CreateFirewallRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFirewallRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **firewallRuleRequest** | [**FirewallRuleRequest**](FirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFirewallRule2

> FirewallRuleResponse CreateFirewallRule2(ctx, firewallId, versionId).FirewallRuleRequest(firewallRuleRequest).Execute()

Create an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	firewallRuleRequest := *openapiclient.NewFirewallRuleRequest("Name_example", [][]FirewallCriterionFieldRequest{[]openapiclient.FirewallCriterionFieldRequest{*openapiclient.NewFirewallCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.FirewallCriterionFieldVariableEnum("$(header_accept)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.FirewallBehaviorRequest{openapiclient.FirewallBehaviorRequest{FirewallBehaviorArgsRequest: openapiclient.NewFirewallBehaviorArgsRequest("Type_example", *openapiclient.NewFirewallBehaviorRunFunctionAttributesRequest(int64(123)))}}) // FirewallRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.CreateFirewallRule2(context.Background(), firewallId, versionId).FirewallRuleRequest(firewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.CreateFirewallRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFirewallRule2`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.CreateFirewallRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateFirewallRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **firewallRuleRequest** | [**FirewallRuleRequest**](FirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFirewallRule

> DeleteResponse DeleteFirewallRule(ctx, firewallId, requestRuleId).Execute()

Delete an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.DeleteFirewallRule(context.Background(), firewallId, requestRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.DeleteFirewallRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFirewallRule`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.DeleteFirewallRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFirewallRuleRequest struct via the builder pattern


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


## DeleteFirewallRule2

> DeleteResponse DeleteFirewallRule2(ctx, firewallId, requestRuleId, versionId).Execute()

Delete an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.DeleteFirewallRule2(context.Background(), firewallId, requestRuleId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.DeleteFirewallRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteFirewallRule2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.DeleteFirewallRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFirewallRule2Request struct via the builder pattern


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


## ListFirewallRules

> PaginatedFirewallRuleList ListFirewallRules(ctx, firewallId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Firewall Rules



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	description := "description_example" // string | Filter by description (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	orderGte := int64(789) // int64 | Filter by order (greater than or equal). (optional)
	orderLte := int64(789) // int64 | Filter by order (less than or equal). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.ListFirewallRules(context.Background(), firewallId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.ListFirewallRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFirewallRules`: PaginatedFirewallRuleList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.ListFirewallRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListFirewallRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **description** | **string** | Filter by description (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **orderGte** | **int64** | Filter by order (greater than or equal). | 
 **orderLte** | **int64** | Filter by order (less than or equal). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallRuleList**](PaginatedFirewallRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFirewallRules2

> PaginatedFirewallRuleList ListFirewallRules2(ctx, firewallId, versionId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Firewall Rules



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	description := "description_example" // string | Filter by description (case-insensitive, partial match). (optional)
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
	id := int64(789) // int64 | Filter by id (accepts comma-separated values). (optional)
	lastEditor := "lastEditor_example" // string | Filter by last editor (case-insensitive, partial match). (optional)
	lastModifiedGte := time.Now() // time.Time | Filter by last modified date (greater than or equal). (optional)
	lastModifiedLte := time.Now() // time.Time | Filter by last modified date (less than or equal). (optional)
	name := "name_example" // string | Filter by name (case-insensitive, partial match). (optional)
	orderGte := int64(789) // int64 | Filter by order (greater than or equal). (optional)
	orderLte := int64(789) // int64 | Filter by order (less than or equal). (optional)
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.ListFirewallRules2(context.Background(), firewallId, versionId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.ListFirewallRules2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFirewallRules2`: PaginatedFirewallRuleList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.ListFirewallRules2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListFirewallRules2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **description** | **string** | Filter by description (case-insensitive, partial match). | 
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **id** | **int64** | Filter by id (accepts comma-separated values). | 
 **lastEditor** | **string** | Filter by last editor (case-insensitive, partial match). | 
 **lastModifiedGte** | **time.Time** | Filter by last modified date (greater than or equal). | 
 **lastModifiedLte** | **time.Time** | Filter by last modified date (less than or equal). | 
 **name** | **string** | Filter by name (case-insensitive, partial match). | 
 **orderGte** | **int64** | Filter by order (greater than or equal). | 
 **orderLte** | **int64** | Filter by order (less than or equal). | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallRuleList**](PaginatedFirewallRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderFirewallRules

> PaginatedFirewallRuleList OrderFirewallRules(ctx, firewallId).FirewallRuleEngineOrderRequest(firewallRuleEngineOrderRequest).Search(search).Execute()

Ordering Firewall Rules



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	firewallRuleEngineOrderRequest := *openapiclient.NewFirewallRuleEngineOrderRequest([]int64{int64(123)}) // FirewallRuleEngineOrderRequest | 
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.OrderFirewallRules(context.Background(), firewallId).FirewallRuleEngineOrderRequest(firewallRuleEngineOrderRequest).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.OrderFirewallRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderFirewallRules`: PaginatedFirewallRuleList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.OrderFirewallRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderFirewallRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **firewallRuleEngineOrderRequest** | [**FirewallRuleEngineOrderRequest**](FirewallRuleEngineOrderRequest.md) |  | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallRuleList**](PaginatedFirewallRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OrderFirewallRules2

> PaginatedFirewallRuleList OrderFirewallRules2(ctx, firewallId, versionId).FirewallRuleEngineOrderRequest(firewallRuleEngineOrderRequest).Search(search).Execute()

Ordering Firewall Rules



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	firewallRuleEngineOrderRequest := *openapiclient.NewFirewallRuleEngineOrderRequest([]int64{int64(123)}) // FirewallRuleEngineOrderRequest | 
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.OrderFirewallRules2(context.Background(), firewallId, versionId).FirewallRuleEngineOrderRequest(firewallRuleEngineOrderRequest).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.OrderFirewallRules2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `OrderFirewallRules2`: PaginatedFirewallRuleList
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.OrderFirewallRules2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiOrderFirewallRules2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **firewallRuleEngineOrderRequest** | [**FirewallRuleEngineOrderRequest**](FirewallRuleEngineOrderRequest.md) |  | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedFirewallRuleList**](PaginatedFirewallRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFirewallRule

> FirewallRuleResponse PartialUpdateFirewallRule(ctx, firewallId, requestRuleId).PatchedFirewallRuleRequest(patchedFirewallRuleRequest).Execute()

Partially update an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	patchedFirewallRuleRequest := *openapiclient.NewPatchedFirewallRuleRequest() // PatchedFirewallRuleRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.PartialUpdateFirewallRule(context.Background(), firewallId, requestRuleId).PatchedFirewallRuleRequest(patchedFirewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.PartialUpdateFirewallRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFirewallRule`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.PartialUpdateFirewallRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFirewallRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedFirewallRuleRequest** | [**PatchedFirewallRuleRequest**](PatchedFirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateFirewallRule2

> FirewallRuleResponse PartialUpdateFirewallRule2(ctx, firewallId, requestRuleId, versionId).PatchedFirewallRuleRequest(patchedFirewallRuleRequest).Execute()

Partially update an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	patchedFirewallRuleRequest := *openapiclient.NewPatchedFirewallRuleRequest() // PatchedFirewallRuleRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.PartialUpdateFirewallRule2(context.Background(), firewallId, requestRuleId, versionId).PatchedFirewallRuleRequest(patchedFirewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.PartialUpdateFirewallRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateFirewallRule2`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.PartialUpdateFirewallRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateFirewallRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedFirewallRuleRequest** | [**PatchedFirewallRuleRequest**](PatchedFirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFirewallRule

> FirewallRuleResponse RetrieveFirewallRule(ctx, firewallId, requestRuleId).Fields(fields).Execute()

Retrieve details of an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.RetrieveFirewallRule(context.Background(), firewallId, requestRuleId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.RetrieveFirewallRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFirewallRule`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.RetrieveFirewallRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFirewallRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveFirewallRule2

> FirewallRuleResponse RetrieveFirewallRule2(ctx, firewallId, requestRuleId, versionId).Fields(fields).Execute()

Retrieve details of an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.RetrieveFirewallRule2(context.Background(), firewallId, requestRuleId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.RetrieveFirewallRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveFirewallRule2`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.RetrieveFirewallRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveFirewallRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFirewallRule

> FirewallRuleResponse UpdateFirewallRule(ctx, firewallId, requestRuleId).FirewallRuleRequest(firewallRuleRequest).Execute()

Update an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	firewallRuleRequest := *openapiclient.NewFirewallRuleRequest("Name_example", [][]FirewallCriterionFieldRequest{[]openapiclient.FirewallCriterionFieldRequest{*openapiclient.NewFirewallCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.FirewallCriterionFieldVariableEnum("$(header_accept)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.FirewallBehaviorRequest{openapiclient.FirewallBehaviorRequest{FirewallBehaviorArgsRequest: openapiclient.NewFirewallBehaviorArgsRequest("Type_example", *openapiclient.NewFirewallBehaviorRunFunctionAttributesRequest(int64(123)))}}) // FirewallRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.UpdateFirewallRule(context.Background(), firewallId, requestRuleId).FirewallRuleRequest(firewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.UpdateFirewallRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFirewallRule`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.UpdateFirewallRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFirewallRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **firewallRuleRequest** | [**FirewallRuleRequest**](FirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFirewallRule2

> FirewallRuleResponse UpdateFirewallRule2(ctx, firewallId, requestRuleId, versionId).FirewallRuleRequest(firewallRuleRequest).Execute()

Update an Firewall Rule



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
	firewallId := int64(789) // int64 | A unique integer value identifying the firewall.
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	firewallRuleRequest := *openapiclient.NewFirewallRuleRequest("Name_example", [][]FirewallCriterionFieldRequest{[]openapiclient.FirewallCriterionFieldRequest{*openapiclient.NewFirewallCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.FirewallCriterionFieldVariableEnum("$(header_accept)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.FirewallBehaviorRequest{openapiclient.FirewallBehaviorRequest{FirewallBehaviorArgsRequest: openapiclient.NewFirewallBehaviorArgsRequest("Type_example", *openapiclient.NewFirewallBehaviorRunFunctionAttributesRequest(int64(123)))}}) // FirewallRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FirewallsRulesEngineAPI.UpdateFirewallRule2(context.Background(), firewallId, requestRuleId, versionId).FirewallRuleRequest(firewallRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FirewallsRulesEngineAPI.UpdateFirewallRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFirewallRule2`: FirewallRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `FirewallsRulesEngineAPI.UpdateFirewallRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**firewallId** | **int64** | A unique integer value identifying the firewall. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFirewallRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **firewallRuleRequest** | [**FirewallRuleRequest**](FirewallRuleRequest.md) |  | 

### Return type

[**FirewallRuleResponse**](FirewallRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

