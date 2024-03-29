import UserAdminEndpoints from '@/src/http/api/User/User';
import ProductAdminEndpoints from '@/src/http/api/Product/Product';

export default class GlassesAdminStoreBackend {
  static User = UserAdminEndpoints;
  static Product = ProductAdminEndpoints;
}
