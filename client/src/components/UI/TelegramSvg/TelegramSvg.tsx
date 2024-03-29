import {memo} from 'react';
const TelegramSvg = ({className} : {className?: string}) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 21'>
    <path id='telegram_1_' d='M791.226,74.147l-21.5,8.424c-1.177.351-1.141,1.552-.268,1.847l5.388,1.736,2.069,6.539c.25.72.464.979.892,1,.446,0,.625-.166,1.088-.591.553-.536,1.373-1.367,2.694-2.7l5.6,4.286c1.035.591,1.784.277,2.034-1L792.743,75.7C793.1,74.147,792.225,73.685,791.226,74.147ZM775.688,85.766,787.944,77.8c.606-.425.785.055.517.369l-10.169,9.458-.517,4.729Z'
      transform='translate(-768.824 -73.976)'
      fill='currentColor'
    />
  </svg>
);

export default memo(TelegramSvg);
