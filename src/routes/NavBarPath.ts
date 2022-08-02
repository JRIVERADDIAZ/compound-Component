import { lazy, LazyExoticComponent } from 'react'

type  JSXComponent = () => JSX.Element

interface Route {
    name: string,
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> |  JSXComponent
}

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Users = lazy(() => import('./Users'))
const ShopingCart = lazy(() => import('./ShoppingCart'))

export const routes: Route[] = [
    {
        name: 'Home',
        to: '/Home',
        path: 'Home',
        Component: Home
    },
    {
        name: 'About',
        to: '/About',
        path: 'About',
        Component: About
    },
    {
        name: 'Users',
        to: '/Users',
        path: 'Users',
        Component: Users
    }
    ,{
        name: 'ShopingCart',
        to: '/ShopingCart',
        path: 'ShopingCart',   
        Component: ShopingCart
    }
]