import React, { useEffect } from 'react';
import {ProductContext} from '../context/product'
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList'
export default function Products(){
    const {loading, products} = React.useContext(ProductContext);
    console.log(products);
    
   
    if(loading){
        return <Loading/>
    }
    return <ProductList title='our products' products={products} />;
}