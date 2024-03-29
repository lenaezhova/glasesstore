import ProductInfoEndpoints from '@/src/http/api/Product/ProductInfoEndpoints/ProductInfoEndpoints';
import ProductAdminGetEndpoints from '@/src/http/api/Product/ProductAdminGetEndpoints/ProductAdminGetEndpoints';

export default class ProductEndpoints {
  static infoEndpoints = ProductInfoEndpoints
  static getEndpoints = ProductAdminGetEndpoints
}
