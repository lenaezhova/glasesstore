import UserEndpoints from '@/src/http/api/User/User';
import ProductEndpoints from '@/src/http/api/Product/Product';

export default class GlassesStoreBackend {
  static User = UserEndpoints
  static Product = ProductEndpoints
}
