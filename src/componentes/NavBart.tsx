import  { Suspense } from 'react'

import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from '../routes/NavBarPath'

const NavBart = () => {
  return (<>
    <Suspense fallback={
      <span>Loading... </span>
    } >
      <BrowserRouter>
        <div className="main-layout">
          <nav> {/*}  create a new componnet in order to render this map  */}
            <img src="https://image.architonic.com/img_pro2-4/121/2859/tassel-grafito-alfombra-a4-2-01-b.jpg" style={{ height: '20%', width: '75%', margin: ' 15px 15px' }} alt="logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name} >
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              )
              )
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={< Component />} />
              )
              )
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  </>)
}

export default NavBart
