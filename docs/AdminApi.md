# DelatShop.AdminApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePendingItemsByUserId**](AdminApi.md#deletePendingItemsByUserId) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
[**deleteUserById**](AdminApi.md#deleteUserById) | **DELETE** /users/{user_id} | delet user account by id
[**getUserById**](AdminApi.md#getUserById) | **GET** /users/{user_id} | Returns a User by ID.
[**listAdminTotalProfit**](AdminApi.md#listAdminTotalProfit) | **GET** /admin/profits | admin profit in defined period
[**listPendingItemsByUserId**](AdminApi.md#listPendingItemsByUserId) | **GET** /users/{user_id}/pending_items | list pending items for user
[**listProductsAnalytics**](AdminApi.md#listProductsAnalytics) | **GET** /products/analytics | products data of number being sold in period
[**listUsers**](AdminApi.md#listUsers) | **GET** /users | Returns all regesterd users.
[**updateUserById**](AdminApi.md#updateUserById) | **POST** /users/{user_id} | updating/create user



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

let apiInstance = new DelatShop.AdminApi();
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

let apiInstance = new DelatShop.AdminApi();
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

let apiInstance = new DelatShop.AdminApi();
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


## listAdminTotalProfit

> Number listAdminTotalProfit(opts)

admin profit in defined period

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.AdminApi();
let opts = {
  'startPeriod': new Date("2013-10-20"), // Date | 
  'endPeriod': new Date("2013-10-20") // Date | 
};
apiInstance.listAdminTotalProfit(opts, (error, data, response) => {
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
 **startPeriod** | **Date**|  | [optional] 
 **endPeriod** | **Date**|  | [optional] 

### Return type

**Number**

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

let apiInstance = new DelatShop.AdminApi();
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


## listProductsAnalytics

> InlineResponse2001 listProductsAnalytics(opts)

products data of number being sold in period

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.AdminApi();
let opts = {
  'startPeriod': new Date("2013-10-20"), // Date | 
  'endPeriod': new Date("2013-10-20"), // Date | 
  'timeAggregation': "timeAggregation_example", // String | 
  'limit': 30, // Number | This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering.
  'after': "after_example", // String | This is the cursor that points to the end of the page use for next page
  'before': "before_example" // String | This is the cursor that points to the start of the page for prev page
};
apiInstance.listProductsAnalytics(opts, (error, data, response) => {
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
 **startPeriod** | **Date**|  | [optional] 
 **endPeriod** | **Date**|  | [optional] 
 **timeAggregation** | **String**|  | [optional] 
 **limit** | **Number**| This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. | [optional] [default to 30]
 **after** | **String**| This is the cursor that points to the end of the page use for next page | [optional] 
 **before** | **String**| This is the cursor that points to the start of the page for prev page | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> User listUsers()

Returns all regesterd users.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.AdminApi();
apiInstance.listUsers((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
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

let apiInstance = new DelatShop.AdminApi();
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

