import ProductAdminCreateEndpoints
  from '@/src/http/api/Product/ProductAdminCreateEndpoints/ProductAdminCreateEndpoints';
import ProductAdminGetEndpoints from '@/src/http/api/Product/ProductAdminGetEndpoints/ProductAdminGetEndpoints';

export default class ProductAdminEndpoints {
  static createEndpoints = ProductAdminCreateEndpoints;
  static getEndpoints = ProductAdminGetEndpoints;
}
