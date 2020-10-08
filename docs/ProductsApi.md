# DelatShop.ProductsApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProduct**](ProductsApi.md#addProduct) | **POST** /products | Creates a new product.
[**deleteProductById**](ProductsApi.md#deleteProductById) | **DELETE** /products/{product_id} | updating product
[**getProductById**](ProductsApi.md#getProductById) | **GET** /products/{product_id} | Returns a products by ID.
[**listProducts**](ProductsApi.md#listProducts) | **GET** /products | getting all products.
[**listProductsAnalytics**](ProductsApi.md#listProductsAnalytics) | **GET** /products/analytics | products data of number being sold in period
[**listProductsByCategory**](ProductsApi.md#listProductsByCategory) | **GET** /catagries/{category_name}/products | Returns a products by category Name.
[**replaceProductById**](ProductsApi.md#replaceProductById) | **PUT** /products/{product_id} | edit product information



## addProduct

> addProduct()

Creates a new product.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
apiInstance.addProduct((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## deleteProductById

> deleteProductById(productId)

updating product

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
let productId = 56; // Number | 
apiInstance.deleteProductById(productId, (error, data, response) => {
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
 **productId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProductById

> Product getProductById(productId)

Returns a products by ID.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
let productId = 56; // Number | 
apiInstance.getProductById(productId, (error, data, response) => {
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
 **productId** | **Number**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProducts

> InlineResponse200 listProducts(opts)

getting all products.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
let opts = {
  'category': "category_example", // String | 
  'sort': "sort_example", // String | 
  'minPrice': 3.4, // Number | 
  'maxPrice': 3.4, // Number | 
  'limit': 30, // Number | This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering.
  'after': "after_example", // String | This is the cursor that points to the end of the page use for next page
  'before': "before_example" // String | This is the cursor that points to the start of the page for prev page
};
apiInstance.listProducts(opts, (error, data, response) => {
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
 **category** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **minPrice** | **Number**|  | [optional] 
 **maxPrice** | **Number**|  | [optional] 
 **limit** | **Number**| This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. | [optional] [default to 30]
 **after** | **String**| This is the cursor that points to the end of the page use for next page | [optional] 
 **before** | **String**| This is the cursor that points to the start of the page for prev page | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

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

let apiInstance = new DelatShop.ProductsApi();
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


## listProductsByCategory

> Product listProductsByCategory(categoryName)

Returns a products by category Name.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
let categoryName = "categoryName_example"; // String | 
apiInstance.listProductsByCategory(categoryName, (error, data, response) => {
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
 **categoryName** | **String**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## replaceProductById

> Product replaceProductById(productId, product)

edit product information

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.ProductsApi();
let productId = 56; // Number | 
let product = new DelatShop.Product(); // Product | 
apiInstance.replaceProductById(productId, product, (error, data, response) => {
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
 **productId** | **Number**|  | 
 **product** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

