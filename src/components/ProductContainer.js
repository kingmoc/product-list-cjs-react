import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js'
import { Image, Grid, Divider } from 'semantic-ui-react';
import hero from '../img/hero.jpg'
import ProductCard from '../components/ProductCard'

const ProductContainer = () => {

    const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)
    const [products, setProducts] = useState([])

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
          })
          .catch(err => console.log(err))
    },[])



    return (
        <>
            <Divider horizontal>Shop All Proudcts</Divider>
            <Grid stackable columns='equal' centered>
                {products.map(product => <Grid.Column width={5} key={product.id}><ProductCard product={product} /></Grid.Column>)}
            </Grid>
        </>
    );
};

export default ProductContainer;