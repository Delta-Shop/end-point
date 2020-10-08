# DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listImage**](DefaultApi.md#listImage) | **GET** /images | return image by it&#39;s id
[**uploadImage**](DefaultApi.md#uploadImage) | **POST** /images | upload image for product or user


<a name="listImage"></a>
# **listImage**
> File listImage(imageId)

return image by it&#39;s id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**|  | [default to null]

### Return type

[**File**](../\Models/file.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/*

<a name="uploadImage"></a>
# **uploadImage**
> String uploadImage(imagesLink)

upload image for product or user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagesLink** | **File**|  | [optional]

### Return type

[**String**](../\Models/string.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: image/*
- **Accept**: application/json

