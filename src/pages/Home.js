import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={'/products'}>Products</Link>
      <Link to={'/favorites'}>Favorites</Link>
      <Outlet />
    </div>
  )
}

export default Home