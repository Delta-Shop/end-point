# DelatShop.CartApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCartByUserId**](CartApi.md#addCartByUserId) | **PUT** /users/{user_id}/cart | updating user cart
[**addCartItemByUserId**](CartApi.md#addCartItemByUserId) | **PUT** /users/{user_id}/cart/item | adding/change count of item
[**checkoutCart**](CartApi.md#checkoutCart) | **POST** /users/{user_id}/checkout | checkout user cart
[**deleteCartItemByUserIdAndProductId**](CartApi.md#deleteCartItemByUserIdAndProductId) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
[**deletePendingItemsByUserId**](CartApi.md#deletePendingItemsByUserId) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
[**listCartByUserId**](CartApi.md#listCartByUserId) | **GET** /users/{user_id}/cart | Returns cart by User ID.
[**listPendingItemsByUserId**](CartApi.md#listPendingItemsByUserId) | **GET** /users/{user_id}/pending_items | list pending items for user



## addCartByUserId

> Cart addCartByUserId(userId, cartItems)

updating user cart

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
let cartItems = [new DelatShop.CartItem()]; // [CartItem] | 
apiInstance.addCartByUserId(userId, cartItems, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **cartItems** | [**[CartItem]**](CartItem.md)|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addCartItemByUserId

> Cart addCartItemByUserId(userId, cartItem)

adding/change count of item

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
let cartItem = new DelatShop.CartItem(); // CartItem | 
apiInstance.addCartItemByUserId(userId, cartItem, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **cartItem** | [**CartItem**](CartItem.md)|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checkoutCart

> InlineResponse201 checkoutCart(userId)

checkout user cart

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
apiInstance.checkoutCart(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCartItemByUserIdAndProductId

> Cart deleteCartItemByUserIdAndProductId(userId, productId)

remove item from cart

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
let productId = 56; // Number | 
apiInstance.deleteCartItemByUserIdAndProductId(userId, productId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **productId** | **Number**|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePendingItemsByUserId

> deletePendingItemsByUserId(userId, cartId)

remove item from pending as mean to cancel order

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
let cartId = 56; // Number | 
apiInstance.deletePendingItemsByUserId(userId, cartId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **cartId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listCartByUserId

> Cart listCartByUserId(userId)

Returns cart by User ID.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
apiInstance.listCartByUserId(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**Cart**](Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPendingItemsByUserId

> [Cart] listPendingItemsByUserId(userId)

list pending items for user

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CartApi();
let userId = 56; // Number | 
apiInstance.listPendingItemsByUserId(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

[**[Cart]**](Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

