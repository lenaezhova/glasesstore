import {API_URL} from '@/src/http';

export const getImageUrl = (id: string) => {
  return API_URL + '/image/' + id;
}
