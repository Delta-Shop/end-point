# DelatShop.CatagoriesApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCatagories**](CatagoriesApi.md#addCatagories) | **POST** /catagories | Creates a new catagort.
[**deleteCategoryByName**](CatagoriesApi.md#deleteCategoryByName) | **DELETE** /catagories/{category_name} | deleting category
[**getCategoryByName**](CatagoriesApi.md#getCategoryByName) | **GET** /catagories/{category_name} | Returns a Category by its name.
[**listCatagories**](CatagoriesApi.md#listCatagories) | **GET** /catagories | getting all Catagories.
[**listProductsByCategory**](CatagoriesApi.md#listProductsByCategory) | **GET** /catagries/{category_name}/products | Returns a products by category Name.
[**updateCategoryByName**](CatagoriesApi.md#updateCategoryByName) | **POST** /catagories/{category_name} | renaming Category



## addCatagories

> addCatagories(category)

Creates a new catagort.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CatagoriesApi();
let category = new DelatShop.Category(); // Category | 
apiInstance.addCatagories(category, (error, data, response) => {
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
 **category** | [**Category**](Category.md)|  | 

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteCategoryByName

> deleteCategoryByName(categoryName)

deleting category

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CatagoriesApi();
let categoryName = "categoryName_example"; // String | 
apiInstance.deleteCategoryByName(categoryName, (error, data, response) => {
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
 **categoryName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCategoryByName

> Category getCategoryByName(categoryName)

Returns a Category by its name.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CatagoriesApi();
let categoryName = "categoryName_example"; // String | 
apiInstance.getCategoryByName(categoryName, (error, data, response) => {
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

[**Category**](Category.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCatagories

> Category listCatagories()

getting all Catagories.

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CatagoriesApi();
apiInstance.listCatagories((error, data, response) => {
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

[**Category**](Category.md)

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

let apiInstance = new DelatShop.CatagoriesApi();
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


## updateCategoryByName

> Category updateCategoryByName(categoryName, category)

renaming Category

### Example

```javascript
import DelatShop from 'delat_shop';
let defaultClient = DelatShop.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
let accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DelatShop.CatagoriesApi();
let categoryName = "categoryName_example"; // String | 
let category = new DelatShop.Category(); // Category | 
apiInstance.updateCategoryByName(categoryName, category, (error, data, response) => {
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
 **category** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

