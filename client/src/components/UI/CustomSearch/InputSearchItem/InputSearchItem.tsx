import { IProduct } from '@/modules/product/type/type';
import s from './InputSearchItem.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import Reviews from '@/src/components/UI/Reviews/Reviews';
import PreloaderImage from '@/src/components/PreloaderImage/PreloaderImage';

interface Props {
  product: IProduct;
  onClick?: () => void;
}

const InputSearchItem = (props : Props) => {
  const {product, onClick} = props;

  return (
    <div className={s.container} onClick={() => { if (onClick) onClick(); }}>
      <div className={s.itemWrapper}>
        <SearchOutlined className={s.searchIco} />
        <div className={s.itemInfo}>
          <div className={s.itemTextContainer}>
            <div className={s.itemText}>{product.title}</div>
            <Reviews average={product.rating}/>
          </div>
          <div className={s.itemPrice}>{product.price} ₽</div>
        </div>
      </div>
      <div style={{marginRight: 4}}>
        <PreloaderImage
          className={s.imageWrapper}
          width={100}
          height={100}
          imgClassName={s.img}
          src={product.images[0] || product.thumbnail}
          alt={''}
          priority={true}
          objectFit='cover'
          preloaderSize='small'
          fill={true}
        />
      </div>
    </div>
  );
};

export default InputSearchItem;
