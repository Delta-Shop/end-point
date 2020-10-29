# AdminApi

All URIs are relative to *https://delta-shop.github.io/end-point*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePendingItemsByUserId**](AdminApi.md#deletePendingItemsByUserId) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
[**deleteUserById**](AdminApi.md#deleteUserById) | **DELETE** /users/{user_id} | delet user account by id
[**getUserById**](AdminApi.md#getUserById) | **GET** /users/{user_id} | Returns a User by ID.
[**listAdminTotalProfit**](AdminApi.md#listAdminTotalProfit) | **GET** /admin/profits | admin profit in defined period
[**listPendingItems**](AdminApi.md#listPendingItems) | **GET** /pending_items | list all pending items
[**listPendingItemsByUserId**](AdminApi.md#listPendingItemsByUserId) | **GET** /users/{user_id}/pending_items | list pending items for user
[**listProductsAnalytics**](AdminApi.md#listProductsAnalytics) | **GET** /products/analytics | products data of number being sold in period
[**listUsers**](AdminApi.md#listUsers) | **GET** /users | Returns all regesterd users.
[**updateUserById**](AdminApi.md#updateUserById) | **POST** /users/{user_id} | updating/create user


<a name="deletePendingItemsByUserId"></a>
# **deletePendingItemsByUserId**
> deletePendingItemsByUserId(userId, cartId)

remove item from pending as mean to cancel order

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **cartId** | **Integer**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteUserById"></a>
# **deleteUserById**
> deleteUserById(userId)

delet user account by id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserById"></a>
# **getUserById**
> UserClient getUserById(userId)

Returns a User by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**UserClient**](../\Models/UserClient.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listAdminTotalProfit"></a>
# **listAdminTotalProfit**
> BigDecimal listAdminTotalProfit(startPeriod, endPeriod)

admin profit in defined period

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startPeriod** | **date**|  | [optional] [default to null]
 **endPeriod** | **date**|  | [optional] [default to null]

### Return type

[**BigDecimal**](../\Models/number.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPendingItems"></a>
# **listPendingItems**
> List listPendingItems(category, sort, minPrice, maxPrice, startPeriod, endPeriod, limit, after, before)

list all pending items

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] [default to null]
 **sort** | **String**|  | [optional] [default to null] [enum: newest, oldest, high_to_low, low_to_hight, popularity]
 **minPrice** | **BigDecimal**|  | [optional] [default to null]
 **maxPrice** | **BigDecimal**|  | [optional] [default to null]
 **startPeriod** | **date**|  | [optional] [default to null]
 **endPeriod** | **date**|  | [optional] [default to null]
 **limit** | **Long**| This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. | [optional] [default to 30]
 **after** | **String**| This is the cursor that points to the end of the page use for next page | [optional] [default to null]
 **before** | **String**| This is the cursor that points to the start of the page for prev page | [optional] [default to null]

### Return type

[**List**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPendingItemsByUserId"></a>
# **listPendingItemsByUserId**
> List listPendingItemsByUserId(userId)

list pending items for user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**List**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listProductsAnalytics"></a>
# **listProductsAnalytics**
> inline_response_200_1 listProductsAnalytics(startPeriod, endPeriod, q, timeAggregation, limit, after, before)

products data of number being sold in period

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startPeriod** | **date**|  | [optional] [default to null]
 **endPeriod** | **date**|  | [optional] [default to null]
 **q** | **String**|  | [optional] [default to null]
 **timeAggregation** | **String**|  | [optional] [default to null] [enum: year, month, day]
 **limit** | **Long**| This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. | [optional] [default to 30]
 **after** | **String**| This is the cursor that points to the end of the page use for next page | [optional] [default to null]
 **before** | **String**| This is the cursor that points to the start of the page for prev page | [optional] [default to null]

### Return type

[**inline_response_200_1**](../\Models/inline_response_200_1.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listUsers"></a>
# **listUsers**
> UserClient listUsers()

Returns all regesterd users.

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserClient**](../\Models/UserClient.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUserById"></a>
# **updateUserById**
> UserClient updateUserById(userId, userClient)

updating/create user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **userClient** | [**UserClient**](../\Models/UserClient.md)|  |

### Return type

[**UserClient**](../\Models/UserClient.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

