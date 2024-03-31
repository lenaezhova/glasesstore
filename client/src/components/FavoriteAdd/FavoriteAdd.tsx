import heartSVG from '@/public/images/addFavorite.svg';
import activeHeartSVG from '@/public/images/ActiveHeart.svg';
import Image from 'next/image';
import {useAllFavorite} from '@/src/http/hooks/useAllFavroite';

interface Props {
  id: string | undefined;
  className?: string;
}

const FavoriteAdd = (props: Props) => {
  const { id, className} = props;
  const {checkProductInFavorite, addInFavoriteAsync} = useAllFavorite();

  const handleAddFavorite = async () => {
    await addInFavoriteAsync(id);
  };

  return (
    <Image
      style={{cursor: 'pointer'}}
      className={className}
      onClick={handleAddFavorite}
      src={checkProductInFavorite(id) ? activeHeartSVG : heartSVG}
      alt={''}
    />
  );
};

export default FavoriteAdd;
