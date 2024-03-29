import {memo} from 'react';

interface Props {
  className?: string,
  onClick?: () => void;
  fill?: string;
}

const FavoriteAddSVG = ({className, onClick, fill} : Props) => (
  <svg
    className={className}
    style={{cursor: 'pointer'}}
    onClick={onClick}
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.409 6.675C1.194 11.265 8.539 17.673 12.027 20c3.693-1.903 10.617-8.515 8.618-13.324-1.847-4.441-7.693-2.566-8.618 0-.616-2.538-6.462-4.47-8.618 0Z'
      fill={fill || '#fff'}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.918 20.587a2 2 0 0 1-1.98-.11C9.27 19.4 6.693 17.39 4.755 15.065c-.967-1.16-1.858-2.497-2.352-3.919-.502-1.449-.631-3.122.168-4.729 1.422-2.858 4.14-3.65 6.392-3.359a7.054 7.054 0 0 1 3.13 1.202 7.416 7.416 0 0 1 3.204-1.203c2.245-.282 4.963.52 6.224 3.463.69 1.61.558 3.27.075 4.73-.478 1.445-1.333 2.808-2.287 3.995-1.891 2.355-4.472 4.382-6.392 5.342Zm.585-14.853c-.71.415-1.256.973-1.48 1.574-.154-.618-.678-1.194-1.395-1.616C8.805 4.618 5.74 4.541 4.363 7.308c-1.968 3.957 4.56 9.484 7.66 11.49 3.284-1.641 9.438-7.343 7.661-11.49-1.196-2.79-4.277-2.69-6.181-1.574Z'
      fill={fill || 'currentColor'}
    />
  </svg>

);

export default memo(FavoriteAddSVG);
