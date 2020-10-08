# DelatShop.SavedItemsApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSavedItemsByUserId**](SavedItemsApi.md#addSavedItemsByUserId) | **POST** /users/{user_id}/saved_items | adding user SavedItems
[**deleteSavedItemsByUserIdAndProductId**](SavedItemsApi.md#deleteSavedItemsByUserIdAndProductId) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
[**listSavedItemsByUserId**](SavedItemsApi.md#listSavedItemsByUserId) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.



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

let apiInstance = new DelatShop.SavedItemsApi();
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

let apiInstance = new DelatShop.SavedItemsApi();
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

let apiInstance = new DelatShop.SavedItemsApi();
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

