import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Card from './Hero/Card'
import Product from '../product/Product'
import Banner from './banner/Banner'
import { useAppDispatch } from '../../store/hooks'
import { fetchProducts } from '../../store/features/productsSlice'
import { fetchMenutab } from '../../store/features/menutabSlice'
import { fetchProductstbl } from '../../store/features/products_tblSlice'
import { fetchUploaded_files } from '../../store/features/uploaded_filesSlice'
import { fetchCategoriesSelection } from '../../store/features/categoriesSelectSlice'
import { fetchCustomersById } from '../../store/features/customersSlice'
import { fetchAddress_bookbyIdtbl } from '../../store/featurestbl/address_book_tblSlice'
import Topbook from './Top/Topbook'
import { fetchBannerstbl } from '../../store/featurestbl/banners_tblSlice'
import { fetchTopbook } from '../../store/features/topbookSlice'
 
 

const Home = () => {
  debugger
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());

    //dispatch(fetchMenutab());

    dispatch(fetchProductstbl());
  
    dispatch(fetchUploaded_files());

    dispatch(fetchCategoriesSelection());

    dispatch(fetchBannerstbl()); //banners

    dispatch(fetchTopbook(1));
  
  
  });
  return (
    <>
      <Hero />
      <Card />
      <Topbook />
      <Product />
      <Banner />
    </>
  )
}

export default Home
