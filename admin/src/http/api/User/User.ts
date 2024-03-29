import UserAdminRegisterEndpoints from '@/src/http/api/User/UserRegisterEndpoints/UserRegisterEndpoints';
import UserInfoEndpoints from '@/src/http/api/User/UserInfoEndpoints/UserInfoEndpoints';

export default class UserAdminEndpoints {
  static registerAdminEndpoints = UserAdminRegisterEndpoints;
  static infoAdminEndpoints = UserInfoEndpoints;
}
