import $glassesApi from '@/src/http';

export default class UserInfoEndpoints {
  static getUserInfo = async ({id}: {id: string | undefined}) => {
    const {data} = await $glassesApi.get(
      '/user',
      {
        params: {
          id
        }
      }
    );

    return data;
  };
}
