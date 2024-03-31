import UserRegisterEndpoints from '@/src/http/api/User/UserRegisterEndpoints/UserRegisterEndpoints';
import UserInfoEndpoints from '@/src/http/api/User/UserInfoEndpoints/UserInfoEndpoints';

export default class UserEndpoints {
  static registerEndpoints = UserRegisterEndpoints;
  static infoEndpoints = UserInfoEndpoints;
}
