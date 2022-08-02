import { useContext, CSSProperties } from "react"
import { ProductContext } from "./ProductCard"

interface Props {
    className?: string
    styles?: CSSProperties
}

export const IncreaseProduct = ({ className, styles }: Props ): any => {
 
    const { counter, increaseBy } = useContext(ProductContext)

    return (
        <div 
        className={` ${className }`} 
        style={ styles }
        >
            <button onClick={() => increaseBy( +1 )}> + </button>
            <div>{counter}</div>
            <button onClick={() => increaseBy( -1 )}> - </button>
        </div>

    )
}