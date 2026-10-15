# \ApplicationsRequestRulesAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateApplicationRequestRule**](ApplicationsRequestRulesAPI.md#CreateApplicationRequestRule) | **Post** /workspace/applications/{application_id}/request_rules | Create an Application Request Rule
[**CreateApplicationRequestRule2**](ApplicationsRequestRulesAPI.md#CreateApplicationRequestRule2) | **Post** /workspace/applications/{application_id}/versions/{version_id}/request_rules | Create an Application Request Rule
[**DeleteApplicationRequestRule**](ApplicationsRequestRulesAPI.md#DeleteApplicationRequestRule) | **Delete** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Delete an Application Request Rule
[**DeleteApplicationRequestRule2**](ApplicationsRequestRulesAPI.md#DeleteApplicationRequestRule2) | **Delete** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Delete an Application Request Rule
[**ListApplicationRequestRules**](ApplicationsRequestRulesAPI.md#ListApplicationRequestRules) | **Get** /workspace/applications/{application_id}/request_rules | List Application Request Rules
[**ListApplicationRequestRules2**](ApplicationsRequestRulesAPI.md#ListApplicationRequestRules2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/request_rules | List Application Request Rules
[**PartialUpdateApplicationRequestRule**](ApplicationsRequestRulesAPI.md#PartialUpdateApplicationRequestRule) | **Patch** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Partially update an Application Request Rule
[**PartialUpdateApplicationRequestRule2**](ApplicationsRequestRulesAPI.md#PartialUpdateApplicationRequestRule2) | **Patch** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Partially update an Application Request Rule
[**RetrieveApplicationRequestRule**](ApplicationsRequestRulesAPI.md#RetrieveApplicationRequestRule) | **Get** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Retrieve details of an Application Request Rule
[**RetrieveApplicationRequestRule2**](ApplicationsRequestRulesAPI.md#RetrieveApplicationRequestRule2) | **Get** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Retrieve details of an Application Request Rule
[**UpdateApplicationRequestRule**](ApplicationsRequestRulesAPI.md#UpdateApplicationRequestRule) | **Put** /workspace/applications/{application_id}/request_rules/{request_rule_id} | Update an Application Request Rule
[**UpdateApplicationRequestRule2**](ApplicationsRequestRulesAPI.md#UpdateApplicationRequestRule2) | **Put** /workspace/applications/{application_id}/versions/{version_id}/request_rules/{request_rule_id} | Update an Application Request Rule
[**UpdateApplicationRequestRulesOrder**](ApplicationsRequestRulesAPI.md#UpdateApplicationRequestRulesOrder) | **Put** /workspace/applications/{application_id}/request_rules/order | Ordering Application Request Rules
[**UpdateApplicationRequestRulesOrder2**](ApplicationsRequestRulesAPI.md#UpdateApplicationRequestRulesOrder2) | **Put** /workspace/applications/{application_id}/versions/{version_id}/request_rules/order | Ordering Application Request Rules



## CreateApplicationRequestRule

> RequestPhaseRuleResponse CreateApplicationRequestRule(ctx, applicationId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()

Create an Application Request Rule



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
	requestPhaseRuleRequest := *openapiclient.NewRequestPhaseRuleRequest("Name_example", [][]ApplicationCriterionFieldRequest{[]openapiclient.ApplicationCriterionFieldRequest{*openapiclient.NewApplicationCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.ApplicationCriterionFieldVariableEnum("$(arg_<name>)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.RequestPhaseBehaviorRequest{openapiclient.RequestPhaseBehaviorRequest{BehaviorArgs: openapiclient.NewBehaviorArgs("Type_example", *openapiclient.NewBehaviorArgsAttributes(*openapiclient.NewBehaviorArgsAttributesValue()))}}) // RequestPhaseRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.CreateApplicationRequestRule(context.Background(), applicationId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.CreateApplicationRequestRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateApplicationRequestRule`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.CreateApplicationRequestRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationRequestRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestPhaseRuleRequest** | [**RequestPhaseRuleRequest**](RequestPhaseRuleRequest.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateApplicationRequestRule2

> RequestPhaseRuleResponse CreateApplicationRequestRule2(ctx, applicationId, versionId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()

Create an Application Request Rule



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
	requestPhaseRuleRequest := *openapiclient.NewRequestPhaseRuleRequest("Name_example", [][]ApplicationCriterionFieldRequest{[]openapiclient.ApplicationCriterionFieldRequest{*openapiclient.NewApplicationCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.ApplicationCriterionFieldVariableEnum("$(arg_<name>)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.RequestPhaseBehaviorRequest{openapiclient.RequestPhaseBehaviorRequest{BehaviorArgs: openapiclient.NewBehaviorArgs("Type_example", *openapiclient.NewBehaviorArgsAttributes(*openapiclient.NewBehaviorArgsAttributesValue()))}}) // RequestPhaseRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.CreateApplicationRequestRule2(context.Background(), applicationId, versionId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.CreateApplicationRequestRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateApplicationRequestRule2`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.CreateApplicationRequestRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateApplicationRequestRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **requestPhaseRuleRequest** | [**RequestPhaseRuleRequest**](RequestPhaseRuleRequest.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteApplicationRequestRule

> DeleteResponse DeleteApplicationRequestRule(ctx, applicationId, requestRuleId).Execute()

Delete an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.DeleteApplicationRequestRule(context.Background(), applicationId, requestRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.DeleteApplicationRequestRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteApplicationRequestRule`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.DeleteApplicationRequestRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationRequestRuleRequest struct via the builder pattern


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


## DeleteApplicationRequestRule2

> DeleteResponse DeleteApplicationRequestRule2(ctx, applicationId, requestRuleId, versionId).Execute()

Delete an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.DeleteApplicationRequestRule2(context.Background(), applicationId, requestRuleId, versionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.DeleteApplicationRequestRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteApplicationRequestRule2`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.DeleteApplicationRequestRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApplicationRequestRule2Request struct via the builder pattern


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


## ListApplicationRequestRules

> PaginatedRequestPhaseRuleList ListApplicationRequestRules(ctx, applicationId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Application Request Rules



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
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
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.ListApplicationRequestRules(context.Background(), applicationId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.ListApplicationRequestRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApplicationRequestRules`: PaginatedRequestPhaseRuleList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.ListApplicationRequestRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListApplicationRequestRulesRequest struct via the builder pattern


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

[**PaginatedRequestPhaseRuleList**](PaginatedRequestPhaseRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListApplicationRequestRules2

> PaginatedRequestPhaseRuleList ListApplicationRequestRules2(ctx, applicationId, versionId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List Application Request Rules



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
	applicationId := int64(789) // int64 | A unique integer value identifying the application.
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
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.ListApplicationRequestRules2(context.Background(), applicationId, versionId).Description(description).Fields(fields).Id(id).LastEditor(lastEditor).LastModifiedGte(lastModifiedGte).LastModifiedLte(lastModifiedLte).Name(name).OrderGte(orderGte).OrderLte(orderLte).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.ListApplicationRequestRules2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApplicationRequestRules2`: PaginatedRequestPhaseRuleList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.ListApplicationRequestRules2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListApplicationRequestRules2Request struct via the builder pattern


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

[**PaginatedRequestPhaseRuleList**](PaginatedRequestPhaseRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateApplicationRequestRule

> RequestPhaseRuleResponse PartialUpdateApplicationRequestRule(ctx, applicationId, requestRuleId).PatchedRequestPhaseRule(patchedRequestPhaseRule).Execute()

Partially update an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	patchedRequestPhaseRule := *openapiclient.NewPatchedRequestPhaseRule() // PatchedRequestPhaseRule |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule(context.Background(), applicationId, requestRuleId).PatchedRequestPhaseRule(patchedRequestPhaseRule).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateApplicationRequestRule`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateApplicationRequestRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **patchedRequestPhaseRule** | [**PatchedRequestPhaseRule**](PatchedRequestPhaseRule.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateApplicationRequestRule2

> RequestPhaseRuleResponse PartialUpdateApplicationRequestRule2(ctx, applicationId, requestRuleId, versionId).PatchedRequestPhaseRule(patchedRequestPhaseRule).Execute()

Partially update an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	patchedRequestPhaseRule := *openapiclient.NewPatchedRequestPhaseRule() // PatchedRequestPhaseRule |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule2(context.Background(), applicationId, requestRuleId, versionId).PatchedRequestPhaseRule(patchedRequestPhaseRule).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateApplicationRequestRule2`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.PartialUpdateApplicationRequestRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateApplicationRequestRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **patchedRequestPhaseRule** | [**PatchedRequestPhaseRule**](PatchedRequestPhaseRule.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveApplicationRequestRule

> ResponsePhaseRuleResponse RetrieveApplicationRequestRule(ctx, applicationId, requestRuleId).Fields(fields).Execute()

Retrieve details of an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule(context.Background(), applicationId, requestRuleId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveApplicationRequestRule`: ResponsePhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveApplicationRequestRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponsePhaseRuleResponse**](ResponsePhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveApplicationRequestRule2

> ResponsePhaseRuleResponse RetrieveApplicationRequestRule2(ctx, applicationId, requestRuleId, versionId).Fields(fields).Execute()

Retrieve details of an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule2(context.Background(), applicationId, requestRuleId, versionId).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveApplicationRequestRule2`: ResponsePhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.RetrieveApplicationRequestRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveApplicationRequestRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**ResponsePhaseRuleResponse**](ResponsePhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationRequestRule

> RequestPhaseRuleResponse UpdateApplicationRequestRule(ctx, applicationId, requestRuleId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()

Update an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	requestPhaseRuleRequest := *openapiclient.NewRequestPhaseRuleRequest("Name_example", [][]ApplicationCriterionFieldRequest{[]openapiclient.ApplicationCriterionFieldRequest{*openapiclient.NewApplicationCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.ApplicationCriterionFieldVariableEnum("$(arg_<name>)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.RequestPhaseBehaviorRequest{openapiclient.RequestPhaseBehaviorRequest{BehaviorArgs: openapiclient.NewBehaviorArgs("Type_example", *openapiclient.NewBehaviorArgsAttributes(*openapiclient.NewBehaviorArgsAttributesValue()))}}) // RequestPhaseRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.UpdateApplicationRequestRule(context.Background(), applicationId, requestRuleId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.UpdateApplicationRequestRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationRequestRule`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.UpdateApplicationRequestRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationRequestRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **requestPhaseRuleRequest** | [**RequestPhaseRuleRequest**](RequestPhaseRuleRequest.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationRequestRule2

> RequestPhaseRuleResponse UpdateApplicationRequestRule2(ctx, applicationId, requestRuleId, versionId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()

Update an Application Request Rule



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
	requestRuleId := int64(789) // int64 | A unique integer value identifying the request rule.
	versionId := "versionId_example" // string | The ULID identifier of the version.
	requestPhaseRuleRequest := *openapiclient.NewRequestPhaseRuleRequest("Name_example", [][]ApplicationCriterionFieldRequest{[]openapiclient.ApplicationCriterionFieldRequest{*openapiclient.NewApplicationCriterionFieldRequest(openapiclient.ConditionalEnum("if"), openapiclient.ApplicationCriterionFieldVariableEnum("$(arg_<name>)"), openapiclient.CriterionOperatorEnum("does_not_exist"))}}, []openapiclient.RequestPhaseBehaviorRequest{openapiclient.RequestPhaseBehaviorRequest{BehaviorArgs: openapiclient.NewBehaviorArgs("Type_example", *openapiclient.NewBehaviorArgsAttributes(*openapiclient.NewBehaviorArgsAttributesValue()))}}) // RequestPhaseRuleRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.UpdateApplicationRequestRule2(context.Background(), applicationId, requestRuleId, versionId).RequestPhaseRuleRequest(requestPhaseRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.UpdateApplicationRequestRule2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationRequestRule2`: RequestPhaseRuleResponse
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.UpdateApplicationRequestRule2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**requestRuleId** | **int64** | A unique integer value identifying the request rule. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationRequestRule2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **requestPhaseRuleRequest** | [**RequestPhaseRuleRequest**](RequestPhaseRuleRequest.md) |  | 

### Return type

[**RequestPhaseRuleResponse**](RequestPhaseRuleResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationRequestRulesOrder

> PaginatedRequestPhaseRuleList UpdateApplicationRequestRulesOrder(ctx, applicationId).ApplicationRequestPhaseRuleEngineOrder(applicationRequestPhaseRuleEngineOrder).Search(search).Execute()

Ordering Application Request Rules



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
	applicationRequestPhaseRuleEngineOrder := *openapiclient.NewApplicationRequestPhaseRuleEngineOrder([]int64{int64(123)}) // ApplicationRequestPhaseRuleEngineOrder | 
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder(context.Background(), applicationId).ApplicationRequestPhaseRuleEngineOrder(applicationRequestPhaseRuleEngineOrder).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationRequestRulesOrder`: PaginatedRequestPhaseRuleList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationRequestRulesOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **applicationRequestPhaseRuleEngineOrder** | [**ApplicationRequestPhaseRuleEngineOrder**](ApplicationRequestPhaseRuleEngineOrder.md) |  | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedRequestPhaseRuleList**](PaginatedRequestPhaseRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApplicationRequestRulesOrder2

> PaginatedRequestPhaseRuleList UpdateApplicationRequestRulesOrder2(ctx, applicationId, versionId).ApplicationRequestPhaseRuleEngineOrder(applicationRequestPhaseRuleEngineOrder).Search(search).Execute()

Ordering Application Request Rules



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
	applicationRequestPhaseRuleEngineOrder := *openapiclient.NewApplicationRequestPhaseRuleEngineOrder([]int64{int64(123)}) // ApplicationRequestPhaseRuleEngineOrder | 
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder2(context.Background(), applicationId, versionId).ApplicationRequestPhaseRuleEngineOrder(applicationRequestPhaseRuleEngineOrder).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateApplicationRequestRulesOrder2`: PaginatedRequestPhaseRuleList
	fmt.Fprintf(os.Stdout, "Response from `ApplicationsRequestRulesAPI.UpdateApplicationRequestRulesOrder2`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **int64** | A unique integer value identifying the application. | 
**versionId** | **string** | The ULID identifier of the version. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApplicationRequestRulesOrder2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **applicationRequestPhaseRuleEngineOrder** | [**ApplicationRequestPhaseRuleEngineOrder**](ApplicationRequestPhaseRuleEngineOrder.md) |  | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedRequestPhaseRuleList**](PaginatedRequestPhaseRuleList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

