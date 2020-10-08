# CartApi

All URIs are relative to *https://delta-shop.github.io/end-point*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartByUserId**](CartApi.md#addCartByUserId) | **PUT** /users/{user_id}/cart | updating user cart
[**addCartItemByUserId**](CartApi.md#addCartItemByUserId) | **PUT** /users/{user_id}/cart/item | adding/change count of item
[**checkoutCart**](CartApi.md#checkoutCart) | **POST** /users/{user_id}/checkout | checkout user cart
[**deleteCartItemByUserIdAndProductId**](CartApi.md#deleteCartItemByUserIdAndProductId) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
[**deletePendingItemsByUserId**](CartApi.md#deletePendingItemsByUserId) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
[**editItemCountByUserIdAndProductId**](CartApi.md#editItemCountByUserIdAndProductId) | **PATCH** /users/{user_id}/cart/item/{product_id} | edit cart item
[**listCartByUserId**](CartApi.md#listCartByUserId) | **GET** /users/{user_id}/cart | Returns cart by User ID.
[**listPendingItemsByUserId**](CartApi.md#listPendingItemsByUserId) | **GET** /users/{user_id}/pending_items | list pending items for user


<a name="addCartByUserId"></a>
# **addCartByUserId**
> Cart addCartByUserId(userId, cartItems)

updating user cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **cartItems** | [**List**](../\Models/Cart_item.md)|  |

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addCartItemByUserId"></a>
# **addCartItemByUserId**
> Cart addCartItemByUserId(userId, cartItem)

adding/change count of item

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **cartItem** | [**CartItem**](../\Models/CartItem.md)|  |

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="checkoutCart"></a>
# **checkoutCart**
> inline_response_201_1 checkoutCart(userId)

checkout user cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**inline_response_201_1**](../\Models/inline_response_201_1.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteCartItemByUserIdAndProductId"></a>
# **deleteCartItemByUserIdAndProductId**
> Cart deleteCartItemByUserIdAndProductId(userId, productId)

remove item from cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **productId** | **Integer**|  | [default to null]

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

<a name="editItemCountByUserIdAndProductId"></a>
# **editItemCountByUserIdAndProductId**
> inline_response_201 editItemCountByUserIdAndProductId(userId, productId)

edit cart item

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **productId** | **Integer**|  | [default to null]

### Return type

[**inline_response_201**](../\Models/inline_response_201.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listCartByUserId"></a>
# **listCartByUserId**
> Cart listCartByUserId(userId)

Returns cart by User ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**Cart**](../\Models/Cart.md)

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

