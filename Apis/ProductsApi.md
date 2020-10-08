# ProductsApi

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


<a name="addProduct"></a>
# **addProduct**
> addProduct()

Creates a new product.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

<a name="deleteProductById"></a>
# **deleteProductById**
> deleteProductById(productId)

updating product

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProductById"></a>
# **getProductById**
> Product getProductById(productId)

Returns a products by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | [default to null]

### Return type

[**Product**](../\Models/Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listProducts"></a>
# **listProducts**
> inline_response_200 listProducts(category, sort, minPrice, maxPrice, limit, after, before)

getting all products.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] [default to null]
 **sort** | **String**|  | [optional] [default to null] [enum: newest, oldest, high_to_low, low_to_hight, popularity]
 **minPrice** | **BigDecimal**|  | [optional] [default to null]
 **maxPrice** | **BigDecimal**|  | [optional] [default to null]
 **limit** | **Long**| This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. | [optional] [default to 30]
 **after** | **String**| This is the cursor that points to the end of the page use for next page | [optional] [default to null]
 **before** | **String**| This is the cursor that points to the start of the page for prev page | [optional] [default to null]

### Return type

[**inline_response_200**](../\Models/inline_response_200.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listProductsAnalytics"></a>
# **listProductsAnalytics**
> inline_response_200_1 listProductsAnalytics(startPeriod, endPeriod, timeAggregation, limit, after, before)

products data of number being sold in period

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startPeriod** | **date**|  | [optional] [default to null]
 **endPeriod** | **date**|  | [optional] [default to null]
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

<a name="listProductsByCategory"></a>
# **listProductsByCategory**
> Product listProductsByCategory(categoryName)

Returns a products by category Name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryName** | **String**|  | [default to null]

### Return type

[**Product**](../\Models/Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="replaceProductById"></a>
# **replaceProductById**
> Product replaceProductById(productId, product)

edit product information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **Integer**|  | [default to null]
 **product** | [**Product**](../\Models/Product.md)|  |

### Return type

[**Product**](../\Models/Product.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

