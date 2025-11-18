declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  export interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    effect?: 'blur' | 'opacity' | 'black-and-white';
    threshold?: number;
    visibleByDefault?: boolean;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
}
