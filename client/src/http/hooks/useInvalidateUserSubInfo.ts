import {useAllFavorite} from "@/src/http/hooks/useAllFavroite";
import {message} from "antd";

export const useInvalidateUserSubInfo = () => {
  const {invalidate: invalidateFavorite} = useAllFavorite();

  return {
    ivalidateAsync: async () => {
      try {
        await invalidateFavorite();
      } catch (e) {
        message.error('Ошибка при обновлении информации о пользователе');
      }
    }
  }
}
