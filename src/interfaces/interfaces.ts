
import { Props as ProductCartHOC } from '../componentes/ProductCard'


export interface Product {
    id: string,
    title: string,
    img?: string,
    // count?: number
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value:number) => void,
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCartHOC ):JSX.Element,  
    Image: ({ img }: { img?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Increase: ({ className }: { className?: string }) => JSX.Element,

}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number
}