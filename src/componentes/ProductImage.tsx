import { ProductContext } from "./ProductCard";
import { CSSProperties, useContext } from "react";

interface Props {
    className?: string
    img?: string
    styles?: CSSProperties
}
export const ProductImage = ({ img, className, styles }: Props ) => {

    const { product } = useContext(ProductContext);
    
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = '';
    }


    return (

        <img 
        src={ imgToShow } 
        className={className}  
        alt="product"
        style={styles}
        />
    
         )
}