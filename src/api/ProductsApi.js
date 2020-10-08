/**
 * delat_shop
 * This is an example of using OAuth2 Access Code Flow in a specification to describe security to your API.
 *
 * The version of the OpenAPI document: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import Product from '../model/Product';

/**
* Products service.
* @module api/ProductsApi
* @version 4.0.0
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addProduct operation.
     * @callback module:api/ProductsApi~addProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new product.
     * @param {module:api/ProductsApi~addProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addProduct(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProductById operation.
     * @callback module:api/ProductsApi~deleteProductByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updating product
     * @param {Number} productId 
     * @param {module:api/ProductsApi~deleteProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProductById(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteProductById");
      }

      let pathParams = {
        'product_id': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/products/{product_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductById operation.
     * @callback module:api/ProductsApi~getProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a products by ID.
     * @param {Number} productId 
     * @param {module:api/ProductsApi~getProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    getProductById(productId, callback) {
      let postBody = null;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductById");
      }

      let pathParams = {
        'product_id': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/products/{product_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProducts operation.
     * @callback module:api/ProductsApi~listProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getting all products.
     * @param {Object} opts Optional parameters
     * @param {String} opts.category 
     * @param {module:model/String} opts.sort 
     * @param {Number} opts.minPrice 
     * @param {Number} opts.maxPrice 
     * @param {Number} opts.limit This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. (default to 30)
     * @param {String} opts.after This is the cursor that points to the end of the page use for next page
     * @param {String} opts.before This is the cursor that points to the start of the page for prev page
     * @param {module:api/ProductsApi~listProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    listProducts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'category': opts['category'],
        'sort': opts['sort'],
        'min_price': opts['minPrice'],
        'max_price': opts['maxPrice'],
        'limit': opts['limit'],
        'after': opts['after'],
        'before': opts['before']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProductsAnalytics operation.
     * @callback module:api/ProductsApi~listProductsAnalyticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * products data of number being sold in period
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startPeriod 
     * @param {Date} opts.endPeriod 
     * @param {module:model/String} opts.timeAggregation 
     * @param {Number} opts.limit This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. (default to 30)
     * @param {String} opts.after This is the cursor that points to the end of the page use for next page
     * @param {String} opts.before This is the cursor that points to the start of the page for prev page
     * @param {module:api/ProductsApi~listProductsAnalyticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    listProductsAnalytics(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start_period': opts['startPeriod'],
        'end_period': opts['endPeriod'],
        'time_aggregation': opts['timeAggregation'],
        'limit': opts['limit'],
        'after': opts['after'],
        'before': opts['before']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/products/analytics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProductsByCategory operation.
     * @callback module:api/ProductsApi~listProductsByCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a products by category Name.
     * @param {String} categoryName 
     * @param {module:api/ProductsApi~listProductsByCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    listProductsByCategory(categoryName, callback) {
      let postBody = null;
      // verify the required parameter 'categoryName' is set
      if (categoryName === undefined || categoryName === null) {
        throw new Error("Missing the required parameter 'categoryName' when calling listProductsByCategory");
      }

      let pathParams = {
        'category_name': categoryName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/catagries/{category_name}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceProductById operation.
     * @callback module:api/ProductsApi~replaceProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * edit product information
     * @param {Number} productId 
     * @param {module:model/Product} product 
     * @param {module:api/ProductsApi~replaceProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    replaceProductById(productId, product, callback) {
      let postBody = product;
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling replaceProductById");
      }
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling replaceProductById");
      }

      let pathParams = {
        'product_id': productId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/products/{product_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
