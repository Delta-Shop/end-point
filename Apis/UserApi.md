# UserApi

All URIs are relative to *https://delta-shop.github.io/end-point*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAddresseByUserId**](UserApi.md#addAddresseByUserId) | **POST** /users/{user_id}/address | add addresse to user.
[**addCartByUserId**](UserApi.md#addCartByUserId) | **PUT** /users/{user_id}/cart | updating user cart
[**addCartItemByUserId**](UserApi.md#addCartItemByUserId) | **PUT** /users/{user_id}/cart/item | adding/change count of item
[**addSavedItemsByUserId**](UserApi.md#addSavedItemsByUserId) | **POST** /users/{user_id}/saved_items | adding user SavedItems
[**addUser**](UserApi.md#addUser) | **POST** /users | Add user new user with only mail
[**checkoutCart**](UserApi.md#checkoutCart) | **POST** /users/{user_id}/checkout | checkout user cart
[**deleteAddressByUserById**](UserApi.md#deleteAddressByUserById) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
[**deleteCartItemByUserIdAndProductId**](UserApi.md#deleteCartItemByUserIdAndProductId) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
[**deleteSavedItemsByUserIdAndProductId**](UserApi.md#deleteSavedItemsByUserIdAndProductId) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /users/{user_id} | delet user account by id
[**getUserById**](UserApi.md#getUserById) | **GET** /users/{user_id} | Returns a User by ID.
[**listAddressByUserId**](UserApi.md#listAddressByUserId) | **GET** /users/{user_id}/address | Returns addresses by User ID.
[**listCartByUserId**](UserApi.md#listCartByUserId) | **GET** /users/{user_id}/cart | Returns cart by User ID.
[**listSavedItemsByUserId**](UserApi.md#listSavedItemsByUserId) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.
[**replaceAddressByUserById**](UserApi.md#replaceAddressByUserById) | **PUT** /users/{user_id}/address/{address_id} | updating user address
[**updateUserById**](UserApi.md#updateUserById) | **POST** /users/{user_id} | updating/create user


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

<a name="addCartByUserId"></a>
# **addCartByUserId**
> Cart addCartByUserId(userId, cartItems)

updating user cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **cartItems** | [**List**](../\Models/Cart_item.md)|  |

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addCartItemByUserId"></a>
# **addCartItemByUserId**
> Cart addCartItemByUserId(userId, cartItem)

adding/change count of item

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **cartItem** | [**CartItem**](../\Models/CartItem.md)|  |

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addSavedItemsByUserId"></a>
# **addSavedItemsByUserId**
> inline_response_200_3 addSavedItemsByUserId(userId, product)

adding user SavedItems

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **product** | [**Product**](../\Models/Product.md)|  |

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addUser"></a>
# **addUser**
> User addUser(inlineObject)

Add user new user with only mail

    create new user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](../\Models/InlineObject.md)|  |

### Return type

[**User**](../\Models/User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="checkoutCart"></a>
# **checkoutCart**
> inline_response_201 checkoutCart(userId)

checkout user cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**inline_response_201**](../\Models/inline_response_201.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
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

<a name="deleteCartItemByUserIdAndProductId"></a>
# **deleteCartItemByUserIdAndProductId**
> Cart deleteCartItemByUserIdAndProductId(userId, productId)

remove item from cart

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **productId** | **Integer**|  | [default to null]

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteSavedItemsByUserIdAndProductId"></a>
# **deleteSavedItemsByUserIdAndProductId**
> inline_response_200_3 deleteSavedItemsByUserIdAndProductId(userId, productId)

remove item from SavedItems

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **productId** | **Integer**|  | [default to null]

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteUserById"></a>
# **deleteUserById**
> deleteUserById(userId)

delet user account by id

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

null (empty response body)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getUserById"></a>
# **getUserById**
> User getUserById(userId)

Returns a User by ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**User**](../\Models/User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

<a name="listCartByUserId"></a>
# **listCartByUserId**
> Cart listCartByUserId(userId)

Returns cart by User ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**Cart**](../\Models/Cart.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listSavedItemsByUserId"></a>
# **listSavedItemsByUserId**
> inline_response_200_3 listSavedItemsByUserId(userId)

Returns SavedItems by User ID.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]

### Return type

[**inline_response_200_3**](../\Models/inline_response_200_3.md)

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

<a name="updateUserById"></a>
# **updateUserById**
> User updateUserById(userId, user)

updating/create user

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**|  | [default to null]
 **user** | [**User**](../\Models/User.md)|  |

### Return type

[**User**](../\Models/User.md)

### Authorization

[accessCode](../README.md#accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

