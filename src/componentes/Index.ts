import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { IncreaseProduct } from './IncreaseProduct';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { IncreaseProduct } from './IncreaseProduct';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Increase: IncreaseProduct
})

export default ProductCard;