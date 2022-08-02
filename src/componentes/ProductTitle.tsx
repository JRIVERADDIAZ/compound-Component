import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
    className?: string
    title?: string
    styles?: CSSProperties
}

export const ProductTitle = ( { title, className, styles }: Props ) => {
    const { product } = useContext(ProductContext);
    return (
        <span 
         className={`${className}`}
        style={styles}
        >
        { title ? title : product.title } 
        </span>
    )
}