import { products } from "../data/product"
import { ProductCard, ProductImage, ProductTitle, IncreaseProduct } from '../componentes/Index'
import useShoppingPage from '../Hooks/useShoppingPage'

import '../styles/styles.css'

export const ShoppingCart = () => {

    const {  shoppingCart,onProductCountChange  } = useShoppingPage()
    
    return (
        <div>
            <h1> Shopping Store </h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
            </div>
            {
                products.map(product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                        styles={{
                            backgroundColor: '#212122'
                        }}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage
                            styles={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                            }}
                        />
                        <ProductTitle
                            styles={{
                                color: '#fff'
                            }}
                        />
                        <IncreaseProduct
                            styles={{
                                backgroundColor: '#212122'
                            }}
                        />
                    </ ProductCard>
                )
                )
            }

            <div className="shopping-cart" >

                {

                    Object.entries(shoppingCart).map(([key, product]) => (

                        <ProductCard
                            key={key}
                            product={product}
                            onChange={onProductCountChange}
                            value={product.count}
                            styles={{
                                width: '100px'
                            }}
                        >

                            <ProductImage
                                styles={{
                                    boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                                }}
                            />
                            <ProductTitle
                                styles={{
                                    color: '#fff'
                                }}
                            />
                            <IncreaseProduct
                                styles={{
                                    backgroundColor: '#212122'
                                }}
                            />
                        </ ProductCard>
                    )
                    )
                }
            </div>
            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>
        </div>
    )
}

export default ShoppingCart