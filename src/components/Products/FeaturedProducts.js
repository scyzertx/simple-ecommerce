import React from "react";
import ProductList from './ProductList';
import {ProductContext} from '../../context/product';
import Loading from '../Loading';
import {useContext} from 'react';


export default function FeaturedProducts() {
  
  const { loading ,featured}= useContext(ProductContext);
  
  
  if(loading){
       return <Loading />;
   
  }
  return <ProductList title='featured Products' products={featured}/>;
  
  
}
