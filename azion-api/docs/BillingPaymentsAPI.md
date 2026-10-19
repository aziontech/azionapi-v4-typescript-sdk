# \BillingPaymentsAPI

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddCredits**](BillingPaymentsAPI.md#AddCredits) | **Post** /payments/credits | Add credits using the default credit card
[**CreateCreditCard**](BillingPaymentsAPI.md#CreateCreditCard) | **Post** /payments/credit_cards | Create a new credit card
[**DestroyCreditCard**](BillingPaymentsAPI.md#DestroyCreditCard) | **Delete** /payments/credit_cards/{id} | Destroy a credit card
[**ListCreditCards**](BillingPaymentsAPI.md#ListCreditCards) | **Get** /payments/credit_cards | List of the credit cards
[**ListPaymentHistory**](BillingPaymentsAPI.md#ListPaymentHistory) | **Get** /payments/history | List of the payment history
[**PartialUpdateCreditCard**](BillingPaymentsAPI.md#PartialUpdateCreditCard) | **Patch** /payments/credit_cards/{id} | Partially update a credit card
[**RetrieveCreditCard**](BillingPaymentsAPI.md#RetrieveCreditCard) | **Get** /payments/credit_cards/{id} | Retrieve details from a credit card



## AddCredits

> CreditResponse AddCredits(ctx).CreditRequest(creditRequest).Execute()

Add credits using the default credit card



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
	creditRequest := *openapiclient.NewCreditRequest("Amount_example") // CreditRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.AddCredits(context.Background()).CreditRequest(creditRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.AddCredits``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddCredits`: CreditResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.AddCredits`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddCreditsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditRequest** | [**CreditRequest**](CreditRequest.md) |  | 

### Return type

[**CreditResponse**](CreditResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateCreditCard

> PaymentMethodResponse CreateCreditCard(ctx).PaymentMethodRequest(paymentMethodRequest).Execute()

Create a new credit card



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
	paymentMethodRequest := *openapiclient.NewPaymentMethodRequest("CardHolder_example", "CardBrand_example", int64(123), int64(123), "CardLast4Digits_example", "CardAddressZip_example", "CardCountry_example", "StripeToken_example", "CardId_example") // PaymentMethodRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.CreateCreditCard(context.Background()).PaymentMethodRequest(paymentMethodRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.CreateCreditCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCreditCard`: PaymentMethodResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.CreateCreditCard`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCreditCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodRequest** | [**PaymentMethodRequest**](PaymentMethodRequest.md) |  | 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DestroyCreditCard

> DeleteResponse DestroyCreditCard(ctx, id).Execute()

Destroy a credit card



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
	id := "id_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.DestroyCreditCard(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.DestroyCreditCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DestroyCreditCard`: DeleteResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.DestroyCreditCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDestroyCreditCardRequest struct via the builder pattern


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


## ListCreditCards

> PaginatedPaymentMethodResponseList ListCreditCards(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of the credit cards



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
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.ListCreditCards(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.ListCreditCards``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCreditCards`: PaginatedPaymentMethodResponseList
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.ListCreditCards`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCreditCardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedPaymentMethodResponseList**](PaginatedPaymentMethodResponseList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPaymentHistory

> PaginatedPaymentHistoryList ListPaymentHistory(ctx).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()

List of the payment history



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
	ordering := "ordering_example" // string | Which field to use when ordering the results. (optional)
	page := int64(789) // int64 | A page number within the paginated result set. (optional)
	pageSize := int64(789) // int64 | A numeric value that indicates the number of items per page. (optional)
	search := "search_example" // string | A search term. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.ListPaymentHistory(context.Background()).Fields(fields).Ordering(ordering).Page(page).PageSize(pageSize).Search(search).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.ListPaymentHistory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPaymentHistory`: PaginatedPaymentHistoryList
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.ListPaymentHistory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPaymentHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 
 **ordering** | **string** | Which field to use when ordering the results. | 
 **page** | **int64** | A page number within the paginated result set. | 
 **pageSize** | **int64** | A numeric value that indicates the number of items per page. | 
 **search** | **string** | A search term. | 

### Return type

[**PaginatedPaymentHistoryList**](PaginatedPaymentHistoryList.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PartialUpdateCreditCard

> PaymentMethodResponse PartialUpdateCreditCard(ctx, id).PatchedPartialUpdateRequest(patchedPartialUpdateRequest).Execute()

Partially update a credit card



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
	id := "id_example" // string | 
	patchedPartialUpdateRequest := *openapiclient.NewPatchedPartialUpdateRequest() // PatchedPartialUpdateRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.PartialUpdateCreditCard(context.Background(), id).PatchedPartialUpdateRequest(patchedPartialUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.PartialUpdateCreditCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PartialUpdateCreditCard`: PaymentMethodResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.PartialUpdateCreditCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPartialUpdateCreditCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedPartialUpdateRequest** | [**PatchedPartialUpdateRequest**](PatchedPartialUpdateRequest.md) |  | 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RetrieveCreditCard

> PaymentMethodResponse RetrieveCreditCard(ctx, id).Fields(fields).Execute()

Retrieve details from a credit card



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
	id := "id_example" // string | 
	fields := "fields_example" // string | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingPaymentsAPI.RetrieveCreditCard(context.Background(), id).Fields(fields).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingPaymentsAPI.RetrieveCreditCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RetrieveCreditCard`: PaymentMethodResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingPaymentsAPI.RetrieveCreditCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRetrieveCreditCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fields** | **string** | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | 

### Return type

[**PaymentMethodResponse**](PaymentMethodResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

