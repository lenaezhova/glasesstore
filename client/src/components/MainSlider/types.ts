import {StaticImageData} from 'next/image';

export interface IMainBanners {
    id: string,
    text: string,
    title: string,
    subtitle: string,
    imagePath: string | StaticImageData,
}
