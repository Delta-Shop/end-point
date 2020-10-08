# DelatShop.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listImage**](DefaultApi.md#listImage) | **GET** /images | return image by it&#39;s id
[**uploadImage**](DefaultApi.md#uploadImage) | **POST** /images | upload image for product or user



## listImage

> File listImage(imageId)

return image by it&#39;s id

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.DefaultApi();
let imageId = "imageId_example"; // String | 
apiInstance.listImage(imageId, (error, data, response) => {
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
 **imageId** | **String**|  | 

### Return type

**File**

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/_*


## uploadImage

> String uploadImage(opts)

upload image for product or user

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.DefaultApi();
let opts = {
  'imagesLink': "/path/to/file" // File | 
};
apiInstance.uploadImage(opts, (error, data, response) => {
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
 **imagesLink** | **File**|  | [optional] 

### Return type

**String**

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: image/_*
- **Accept**: application/json

