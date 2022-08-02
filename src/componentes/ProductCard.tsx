import { ReactElement, createContext, CSSProperties } from 'react'

import { useProduct } from '../Hooks/useProduct'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[];
    className?: string;
    styles?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number
}

export const ProductCard = ({ children, product, className, styles, onChange, value }: Props) => {
    const { counter, increaseBy } = useProduct({  onChange, product, value  })
    return (        
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}>
            <div 
            className={ className } 
            style={ styles }
            >           
                    {children}
            </div>
        </Provider>
    )
}
 