# SavedItemsApi

All URIs are relative to *https://delta-shop.github.io/end-point*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSavedItemsByUserId**](SavedItemsApi.md#addSavedItemsByUserId) | **POST** /users/{user_id}/saved_items | adding user SavedItems
[**deleteSavedItemsByUserIdAndProductId**](SavedItemsApi.md#deleteSavedItemsByUserIdAndProductId) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
[**listSavedItemsByUserId**](SavedItemsApi.md#listSavedItemsByUserId) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.


<a name="addSavedItemsByUserId"></a>
# **addSavedItemsByUserId**
> inline_response_200_3 addSavedItemsByUserId(userId, product)

adding user SavedItems

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **product** | [**Product**](../\Models/Product.md)|  |

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteSavedItemsByUserIdAndProductId"></a>
# **deleteSavedItemsByUserIdAndProductId**
> inline_response_200_3 deleteSavedItemsByUserIdAndProductId(userId, productId)

remove item from SavedItems

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **productId** | **Integer**|  | [default to null]

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listSavedItemsByUserId"></a>
# **listSavedItemsByUserId**
> inline_response_200_3 listSavedItemsByUserId(userId)

Returns SavedItems by User ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

