# Documentation for delat_shop

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://delta-shop.github.io/end-point*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressApi* | [**addAddresseByUserId**](Apis/AddressApi.md#addaddressebyuserid) | **POST** /users/{user_id}/address | add addresse to user.
*AddressApi* | [**deleteAddressByUserById**](Apis/AddressApi.md#deleteaddressbyuserbyid) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
*AddressApi* | [**listAddressByUserId**](Apis/AddressApi.md#listaddressbyuserid) | **GET** /users/{user_id}/address | Returns addresses by User ID.
*AddressApi* | [**replaceAddressByUserById**](Apis/AddressApi.md#replaceaddressbyuserbyid) | **PUT** /users/{user_id}/address/{address_id} | updating user address
*AdminApi* | [**deletePendingItemsByUserId**](Apis/AdminApi.md#deletependingitemsbyuserid) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
*AdminApi* | [**deleteUserById**](Apis/AdminApi.md#deleteuserbyid) | **DELETE** /users/{user_id} | delet user account by id
*AdminApi* | [**getUserById**](Apis/AdminApi.md#getuserbyid) | **GET** /users/{user_id} | Returns a User by ID.
*AdminApi* | [**listAdminTotalProfit**](Apis/AdminApi.md#listadmintotalprofit) | **GET** /admin/profits | admin profit in defined period
*AdminApi* | [**listPendingItemsByUserId**](Apis/AdminApi.md#listpendingitemsbyuserid) | **GET** /users/{user_id}/pending_items | list pending items for user
*AdminApi* | [**listProductsAnalytics**](Apis/AdminApi.md#listproductsanalytics) | **GET** /products/analytics | products data of number being sold in period
*AdminApi* | [**listUsers**](Apis/AdminApi.md#listusers) | **GET** /users | Returns all regesterd users.
*AdminApi* | [**updateUserById**](Apis/AdminApi.md#updateuserbyid) | **POST** /users/{user_id} | updating/create user
*CartApi* | [**addCartByUserId**](Apis/CartApi.md#addcartbyuserid) | **PUT** /users/{user_id}/cart | updating user cart
*CartApi* | [**addCartItemByUserId**](Apis/CartApi.md#addcartitembyuserid) | **PUT** /users/{user_id}/cart/item | adding/change count of item
*CartApi* | [**checkoutCart**](Apis/CartApi.md#checkoutcart) | **POST** /users/{user_id}/checkout | checkout user cart
*CartApi* | [**deleteCartItemByUserIdAndProductId**](Apis/CartApi.md#deletecartitembyuseridandproductid) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
*CartApi* | [**deletePendingItemsByUserId**](Apis/CartApi.md#deletependingitemsbyuserid) | **DELETE** /users/{user_id}/pending_items/{cart_id} | remove item from pending as mean to cancel order
*CartApi* | [**editItemCountByUserIdAndProductId**](Apis/CartApi.md#edititemcountbyuseridandproductid) | **PATCH** /users/{user_id}/cart/item/{product_id} | edit cart item
*CartApi* | [**listCartByUserId**](Apis/CartApi.md#listcartbyuserid) | **GET** /users/{user_id}/cart | Returns cart by User ID.
*CartApi* | [**listPendingItemsByUserId**](Apis/CartApi.md#listpendingitemsbyuserid) | **GET** /users/{user_id}/pending_items | list pending items for user
*CatagoriesApi* | [**addCatagories**](Apis/CatagoriesApi.md#addcatagories) | **POST** /catagories | Creates a new catagort.
*CatagoriesApi* | [**deleteCategoryByName**](Apis/CatagoriesApi.md#deletecategorybyname) | **DELETE** /catagories/{category_name} | deleting category
*CatagoriesApi* | [**getCategoryByName**](Apis/CatagoriesApi.md#getcategorybyname) | **GET** /catagories/{category_name} | Returns a Category by its name.
*CatagoriesApi* | [**listCatagories**](Apis/CatagoriesApi.md#listcatagories) | **GET** /catagories | getting all Catagories.
*CatagoriesApi* | [**listProductsByCategory**](Apis/CatagoriesApi.md#listproductsbycategory) | **GET** /catagries/{category_name}/products | Returns a products by category Name.
*CatagoriesApi* | [**updateCategoryByName**](Apis/CatagoriesApi.md#updatecategorybyname) | **POST** /catagories/{category_name} | renaming Category
*DefaultApi* | [**listImage**](Apis/DefaultApi.md#listimage) | **GET** /images | return image by it's id
*DefaultApi* | [**uploadImage**](Apis/DefaultApi.md#uploadimage) | **POST** /images | upload image for product or user
*ProductsApi* | [**addProduct**](Apis/ProductsApi.md#addproduct) | **POST** /products | Creates a new product.
*ProductsApi* | [**deleteProductById**](Apis/ProductsApi.md#deleteproductbyid) | **DELETE** /products/{product_id} | updating product
*ProductsApi* | [**getProductById**](Apis/ProductsApi.md#getproductbyid) | **GET** /products/{product_id} | Returns a products by ID.
*ProductsApi* | [**listProducts**](Apis/ProductsApi.md#listproducts) | **GET** /products | getting all products.
*ProductsApi* | [**listProductsAnalytics**](Apis/ProductsApi.md#listproductsanalytics) | **GET** /products/analytics | products data of number being sold in period
*ProductsApi* | [**listProductsByCategory**](Apis/ProductsApi.md#listproductsbycategory) | **GET** /catagries/{category_name}/products | Returns a products by category Name.
*ProductsApi* | [**replaceProductById**](Apis/ProductsApi.md#replaceproductbyid) | **PUT** /products/{product_id} | edit product information
*SavedItemsApi* | [**addSavedItemsByUserId**](Apis/SavedItemsApi.md#addsaveditemsbyuserid) | **POST** /users/{user_id}/saved_items | adding user SavedItems
*SavedItemsApi* | [**deleteSavedItemsByUserIdAndProductId**](Apis/SavedItemsApi.md#deletesaveditemsbyuseridandproductid) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
*SavedItemsApi* | [**listSavedItemsByUserId**](Apis/SavedItemsApi.md#listsaveditemsbyuserid) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.
*UserApi* | [**addAddresseByUserId**](Apis/UserApi.md#addaddressebyuserid) | **POST** /users/{user_id}/address | add addresse to user.
*UserApi* | [**addCartByUserId**](Apis/UserApi.md#addcartbyuserid) | **PUT** /users/{user_id}/cart | updating user cart
*UserApi* | [**addCartItemByUserId**](Apis/UserApi.md#addcartitembyuserid) | **PUT** /users/{user_id}/cart/item | adding/change count of item
*UserApi* | [**addSavedItemsByUserId**](Apis/UserApi.md#addsaveditemsbyuserid) | **POST** /users/{user_id}/saved_items | adding user SavedItems
*UserApi* | [**addUser**](Apis/UserApi.md#adduser) | **POST** /users | Add user new user with only mail
*UserApi* | [**checkoutCart**](Apis/UserApi.md#checkoutcart) | **POST** /users/{user_id}/checkout | checkout user cart
*UserApi* | [**deleteAddressByUserById**](Apis/UserApi.md#deleteaddressbyuserbyid) | **DELETE** /users/{user_id}/address/{address_id} | Delete user address by address ID and user id
*UserApi* | [**deleteCartItemByUserIdAndProductId**](Apis/UserApi.md#deletecartitembyuseridandproductid) | **DELETE** /users/{user_id}/cart/item/{product_id} | remove item from cart
*UserApi* | [**deleteSavedItemsByUserIdAndProductId**](Apis/UserApi.md#deletesaveditemsbyuseridandproductid) | **DELETE** /users/{user_id}/saved_items/{product_id} | remove item from SavedItems
*UserApi* | [**deleteUserById**](Apis/UserApi.md#deleteuserbyid) | **DELETE** /users/{user_id} | delet user account by id
*UserApi* | [**editItemCountByUserIdAndProductId**](Apis/UserApi.md#edititemcountbyuseridandproductid) | **PATCH** /users/{user_id}/cart/item/{product_id} | edit cart item
*UserApi* | [**getUserById**](Apis/UserApi.md#getuserbyid) | **GET** /users/{user_id} | Returns a User by ID.
*UserApi* | [**listAddressByUserId**](Apis/UserApi.md#listaddressbyuserid) | **GET** /users/{user_id}/address | Returns addresses by User ID.
*UserApi* | [**listCartByUserId**](Apis/UserApi.md#listcartbyuserid) | **GET** /users/{user_id}/cart | Returns cart by User ID.
*UserApi* | [**listSavedItemsByUserId**](Apis/UserApi.md#listsaveditemsbyuserid) | **GET** /users/{user_id}/saved_items | Returns SavedItems by User ID.
*UserApi* | [**replaceAddressByUserById**](Apis/UserApi.md#replaceaddressbyuserbyid) | **PUT** /users/{user_id}/address/{address_id} | updating user address
*UserApi* | [**updateUserById**](Apis/UserApi.md#updateuserbyid) | **POST** /users/{user_id} | updating/create user


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Address](./\Models/Address.md)
 - [Cart](./\Models/Cart.md)
 - [CartItem](./\Models/CartItem.md)
 - [Category](./\Models/Category.md)
 - [Cursor](./\Models/Cursor.md)
 - [InlineObject](./\Models/InlineObject.md)
 - [InlineResponse200](./\Models/InlineResponse200.md)
 - [InlineResponse2001](./\Models/InlineResponse2001.md)
 - [InlineResponse2002](./\Models/InlineResponse2002.md)
 - [InlineResponse2003](./\Models/InlineResponse2003.md)
 - [InlineResponse201](./\Models/InlineResponse201.md)
 - [InlineResponse2011](./\Models/InlineResponse2011.md)
 - [Paging](./\Models/Paging.md)
 - [Product](./\Models/Product.md)
 - [ProductAnalysis](./\Models/ProductAnalysis.md)
 - [ProductAnalysisAllOf](./\Models/ProductAnalysisAllOf.md)
 - [ProductAnalysisAllOfSoldCounts](./\Models/ProductAnalysisAllOfSoldCounts.md)
 - [ProductMedia](./\Models/ProductMedia.md)
 - [ProductMediaAllOf](./\Models/ProductMediaAllOf.md)
 - [User](./\Models/User.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="accessCode"></a>
### accessCode

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: 
  - client: allows modifying resources clients
  - admin: can read/write admin resources
  - readonly: can read data for public resources

