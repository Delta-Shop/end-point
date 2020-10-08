# DelatShop.AddressApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAddresseByUserId**](AddressApi.md#addAddresseByUserId) | **POST** /users/{user_id}/address | add addresse to user.
[**deleteAddressByUserById**](AddressApi.md#deleteAddressByUserById) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
[**listAddressByUserId**](AddressApi.md#listAddressByUserId) | **GET** /users/{user_id}/address | Returns addresses by User ID.
[**replaceAddressByUserById**](AddressApi.md#replaceAddressByUserById) | **PUT** /users/{user_id}/address/{address_id} | updating user address



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

let apiInstance = new DelatShop.AddressApi();
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

let apiInstance = new DelatShop.AddressApi();
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

let apiInstance = new DelatShop.AddressApi();
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

let apiInstance = new DelatShop.AddressApi();
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

