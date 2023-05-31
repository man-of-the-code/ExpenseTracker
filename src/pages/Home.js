import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <h2>Wellcome to the redux tool kit store .</h2>
        <section>
            <h3>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home