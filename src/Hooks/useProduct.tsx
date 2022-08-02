import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface UserProdctArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: UserProdctArgs) => {

    const [counter, setCounter] = useState(value)

    const isControled = useRef(!!onChange)
    console.log('isControles', isControled)

    const increaseBy = (value: number) => {

        if (isControled.current && onChange) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        return onChange && onChange({ count: newValue, product })

    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return { counter, increaseBy }
}
