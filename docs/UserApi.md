# DelatShop.UserApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAddresseByUserId**](UserApi.md#addAddresseByUserId) | **POST** /users/{user_id}/address | add addresse to user.
[**addCartByUserId**](UserApi.md#addCartByUserId) | **PUT** /users/{user_id}/cart | updating user cart
[**addCartItemByUserId**](UserApi.md#addCartItemByUserId) | **PUT** /users/{user_id}/cart/item | adding/change count of item
[**addSavedItemsByUserId**](UserApi.md#addSavedItemsByUserId) | **POST** /users/{user_id}/saved_items | adding user SavedItems
[**addUser**](UserApi.md#addUser) | **POST** /users | Add user new user with only mail
[**checkoutCart**](UserApi.md#checkoutCart) | **POST** /users/{user_id}/checkout | checkout user cart
[**deleteAddressByUserById**](UserApi.md#deleteAddressByUserById) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
[**deleteCartItemByUserIdAndProductId**](UserApi.md#deleteCartItemByUserIdAndProductId) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
[**deleteSavedItemsByUserIdAndProductId**](UserApi.md#deleteSavedItemsByUserIdAndProductId) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /users/{user_id} | delet user account by id
[**getUserById**](UserApi.md#getUserById) | **GET** /users/{user_id} | Returns a User by ID.
[**listAddressByUserId**](UserApi.md#listAddressByUserId) | **GET** /users/{user_id}/address | Returns addresses by User ID.
[**listCartByUserId**](UserApi.md#listCartByUserId) | **GET** /users/{user_id}/cart | Returns cart by User ID.
[**listSavedItemsByUserId**](UserApi.md#listSavedItemsByUserId) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.
[**replaceAddressByUserById**](UserApi.md#replaceAddressByUserById) | **PUT** /users/{user_id}/address/{address_id} | updating user address
[**updateUserById**](UserApi.md#updateUserById) | **POST** /users/{user_id} | updating/create user



## addAddresseByUserId

> Address addAddresseByUserId(userId, address)

add addresse to user.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let address = new DelatShop.Address(); // Address | 
apiInstance.addAddresseByUserId(userId, address, (error, data, response) => {
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
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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

let apiInstance = new DelatShop.UserApi();
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

let apiInstance = new DelatShop.UserApi();
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


## addSavedItemsByUserId

> InlineResponse2003 addSavedItemsByUserId(userId, product)

adding user SavedItems

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let product = new DelatShop.Product(); // Product | 
apiInstance.addSavedItemsByUserId(userId, product, (error, data, response) => {
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
 **product** | [**Product**](Product.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addUser

> User addUser(inlineObject)

Add user new user with only mail

create new user

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let inlineObject = new DelatShop.InlineObject(); // InlineObject | 
apiInstance.addUser(inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**User**](User.md)

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

let apiInstance = new DelatShop.UserApi();
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


## deleteAddressByUserById

> deleteAddressByUserById(userId, addressId)

Delete user address by address ID and user id

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let addressId = 56; // Number | 
apiInstance.deleteAddressByUserById(userId, addressId, (error, data, response) => {
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
 **addressId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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

let apiInstance = new DelatShop.UserApi();
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


## deleteSavedItemsByUserIdAndProductId

> InlineResponse2003 deleteSavedItemsByUserIdAndProductId(userId, productId)

remove item from SavedItems

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let productId = 56; // Number | 
apiInstance.deleteSavedItemsByUserIdAndProductId(userId, productId, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserById

> deleteUserById(userId)

delet user account by id

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
apiInstance.deleteUserById(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getUserById

> User getUserById(userId)

Returns a User by ID.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
apiInstance.getUserById(userId, (error, data, response) => {
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

[**User**](User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddressByUserId

> InlineResponse2002 listAddressByUserId(userId)

Returns addresses by User ID.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
apiInstance.listAddressByUserId(userId, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

let apiInstance = new DelatShop.UserApi();
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


## listSavedItemsByUserId

> InlineResponse2003 listSavedItemsByUserId(userId)

Returns SavedItems by User ID.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
apiInstance.listSavedItemsByUserId(userId, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## replaceAddressByUserById

> Address replaceAddressByUserById(userId, addressId, address)

updating user address

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let addressId = 56; // Number | 
let address = new DelatShop.Address(); // Address | 
apiInstance.replaceAddressByUserById(userId, addressId, address, (error, data, response) => {
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
 **addressId** | **Number**|  | 
 **address** | [**Address**](Address.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserById

> User updateUserById(userId, user)

updating/create user

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.UserApi();
let userId = 56; // Number | 
let user = new DelatShop.User(); // User | 
apiInstance.updateUserById(userId, user, (error, data, response) => {
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
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

