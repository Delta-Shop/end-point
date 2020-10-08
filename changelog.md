generated doc link: https://app.swaggerhub.com/apis-docs/abdo1819/delta_shop/2.1.1

# TODO 
- [ ] review the use of PUT/POST/PATCH


# v 4.0.0 
- [x] use [openapi-validator](https://github.com/IBM/openapi-validator) 
    * user ref for common query parameters
    * use path instead of verbs for path_parameter
    * add missing verb summery
    * use standarf opretionId vrebs
    * use lower_camal_case for opretionId
    * add limit in paggination response
    * define max and default for limit request
    * use `204` for empty response

- [x] remove client acces to other users
- [x] orgnize tags
- [x] add points for pending items




# v 3.3.0
- [x] add end-points for admin
- [x] add end-points for checkout

# v 3.2.0
- [x] user profile picture
- [x] added saved items
- [x] add product analytics for admin chart
- [x] add admin total profit

# v 3.0.0
~~only use uuid as possible [read more](https://opensource.zalando.com/restful-api-guidelines/#144)~~
    * didn't find need for it strings would be better
- [x] 📄 support paggination with cursor  [read more](https://opensource.zalando.com/restful-api-guidelines/#159)
- [x] use proper format for integers
- [x] deal with uploaded images POST/PATCH/PUT
- [x] add image uploading end-point

# V 2.1.1

- [x] fix typo (catagory --> category ) everywhere 👼

- [x] change the Product image to an array of images

- [x] 🔑 add a password for User 

- [x] 🌲 use single root with filter if possible [read more ](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/)
    * for products in catagory instead of `/catagries/{catagoryName}/products` use --> `/products{?category=something}`

- [x] 🔗 return reference for nested/related entities
    * in cart 
        * product-href --> link to product (  /products/{productId} )
    * in User
        * address-href -->  link for every address ( /users/{userId}/address/{addressId} )
        * cart-href --> link to user cart (  /users/{userId}/cart  )
    * in Category 
        * catagory-products-href --> link to items in catagory (  /catagries/{catagoryName}/products )


- [x] use sematic versioning

https://github.com/Delta-Shop/Client-side/issues/12

- [x] rename -user['address']['address'] to  user['address']['streetAddress'] 

- [x] add put method to add new user addres

