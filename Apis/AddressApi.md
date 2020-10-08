# AddressApi

All URIs are relative to *https://virtserver.swaggerhub.com/abdo1819/delta_shop/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAddresseByUserId**](AddressApi.md#addAddresseByUserId) | **POST** /users/{user_id}/address | add addresse to user.
[**deleteAddressByUserById**](AddressApi.md#deleteAddressByUserById) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
[**listAddressByUserId**](AddressApi.md#listAddressByUserId) | **GET** /users/{user_id}/address | Returns addresses by User ID.
[**replaceAddressByUserById**](AddressApi.md#replaceAddressByUserById) | **PUT** /users/{user_id}/address/{address_id} | updating user address


<a name="addAddresseByUserId"></a>
# **addAddresseByUserId**
> Address addAddresseByUserId(userId, address)

add addresse to user.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **address** | [**Address**](../\Models/Address.md)|  |

### Return type

[**Address**](../\Models/Address.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteAddressByUserById"></a>
# **deleteAddressByUserById**
> deleteAddressByUserById(userId, addressId)

Delete user address by address ID and user id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **addressId** | **Integer**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="listAddressByUserId"></a>
# **listAddressByUserId**
> inline_response_200_2 listAddressByUserId(userId)

Returns addresses by User ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**inline_response_200_2**](../\Models/inline_response_200_2.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="replaceAddressByUserById"></a>
# **replaceAddressByUserById**
> Address replaceAddressByUserById(userId, addressId, address)

updating user address

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **addressId** | **Integer**|  | [default to null]
 **address** | [**Address**](../\Models/Address.md)|  |

### Return type

[**Address**](../\Models/Address.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

