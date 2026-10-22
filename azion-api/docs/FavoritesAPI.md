# .FavoritesApi

All URIs are relative to *https://stage-api.azion.com/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFavorite**](FavoritesApi.md#createFavorite) | **POST** /identity/user/favorites | Create a new favorite
[**deleteFavorite**](FavoritesApi.md#deleteFavorite) | **DELETE** /identity/user/favorites/{favorite_id} | Delete a favorite
[**listFavorites**](FavoritesApi.md#listFavorites) | **GET** /identity/user/favorites | List of the favorites


# **createFavorite**
> ResponseFavorite createFavorite(favoriteRequest)

Create a new favorite for your account.

### Example


```typescript
import { createConfiguration, FavoritesApi } from '';
import type { FavoritesApiCreateFavoriteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FavoritesApi(configuration);

const request: FavoritesApiCreateFavoriteRequest = {
  
  favoriteRequest: {
    uri: "/v0/BAMDT/",
  },
};

const data = await apiInstance.createFavorite(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **favoriteRequest** | **FavoriteRequest**|  |


### Return type

**ResponseFavorite**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**202** | Accepted |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFavorite**
> ResponseDeleteFavorite deleteFavorite()

Delete a specific favorite in your account.

### Example


```typescript
import { createConfiguration, FavoritesApi } from '';
import type { FavoritesApiDeleteFavoriteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FavoritesApi(configuration);

const request: FavoritesApiDeleteFavoriteRequest = {
    // A unique integer value identifying this Favorite.
  favoriteId: 1,
};

const data = await apiInstance.deleteFavorite(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **favoriteId** | [**number**] | A unique integer value identifying this Favorite. | defaults to undefined


### Return type

**ResponseDeleteFavorite**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** | Accepted |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFavorites**
> PaginatedFavoriteList listFavorites()

List all favorites by your account.

### Example


```typescript
import { createConfiguration, FavoritesApi } from '';
import type { FavoritesApiListFavoritesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FavoritesApi(configuration);

const request: FavoritesApiListFavoritesRequest = {
    // Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. (optional)
  fields: "fields_example",
  
  id: 1,
    // Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
    // A page number within the paginated result set. (optional)
  page: 1,
    // A numeric value that indicates the number of items per page. (optional)
  pageSize: 1,
    // A search term. (optional)
  search: "search_example",
  
  type: "type_example",
  
  uri: "uri_example",
};

const data = await apiInstance.listFavorites(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | [**string**] | Comma-separated list of field names to include in the response. Nested fields can be accessed using dot notation. | (optional) defaults to undefined
 **id** | [**number**] |  | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | A numeric value that indicates the number of items per page. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **uri** | [**string**] |  | (optional) defaults to undefined


### Return type

**PaginatedFavoriteList**

### Authorization

[TokenAuth](README.md#TokenAuth), [BearerAuth](README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**400** | Validation Error |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**406** | Not Acceptable |  -  |
**429** | Throttled |  -  |
**401** | Authentication Failed |  -  |
**403** | Permission Denied |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


