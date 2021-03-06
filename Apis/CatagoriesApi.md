# CatagoriesApi

All URIs are relative to *https://delta-shop.github.io/end-point*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCatagories**](CatagoriesApi.md#addCatagories) | **POST** /catagories | Creates a new catagort.
[**deleteCategoryByName**](CatagoriesApi.md#deleteCategoryByName) | **DELETE** /catagories/{category_name} | deleting category
[**getCategoryByName**](CatagoriesApi.md#getCategoryByName) | **GET** /catagories/{category_name} | Returns a Category by its name.
[**listCatagories**](CatagoriesApi.md#listCatagories) | **GET** /catagories | getting all Catagories.
[**listProductsByCategory**](CatagoriesApi.md#listProductsByCategory) | **GET** /catagries/{category_name}/products | Returns a products by category Name.
[**replaceCategoryByName**](CatagoriesApi.md#replaceCategoryByName) | **PUT** /catagories/{category_name} | renaming Category


<a name="addCatagories"></a>
# **addCatagories**
> addCatagories(category)

Creates a new catagort.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**Category**](../\Models/Category.md)|  |

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="deleteCategoryByName"></a>
# **deleteCategoryByName**
> deleteCategoryByName(categoryName)

deleting category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryName** | **String**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getCategoryByName"></a>
# **getCategoryByName**
> Category getCategoryByName(categoryName)

Returns a Category by its name.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryName** | **String**|  | [default to null]

### Return type

[**Category**](../\Models/Category.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listCatagories"></a>
# **listCatagories**
> Category listCatagories()

getting all Catagories.

### Parameters
This endpoint does not need any parameter.

### Return type

[**Category**](../\Models/Category.md)

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

<a name="replaceCategoryByName"></a>
# **replaceCategoryByName**
> Category replaceCategoryByName(categoryName, category)

renaming Category

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryName** | **String**|  | [default to null]
 **category** | [**Category**](../\Models/Category.md)|  |

### Return type

[**Category**](../\Models/Category.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

