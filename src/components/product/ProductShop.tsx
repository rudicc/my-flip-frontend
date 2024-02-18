
//import { products } from '../assets/data/data'
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import Heading from '../common/Heading'
import ProductItems from './ProductItems'
import { fetchProducts} from '../../store/features/productsSlice';
import { fetchMenutab } from '../../store/features/menutabSlice';
import { fetchProductstbl } from '../../store/features/products_tblSlice';

const ProductShop = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchProducts());

    // dispatch(fetchMenutab());

    // dispatch(fetchProductstbl());
  });

 

  return (
    <>
          <section className='product'>
            <div className='container'>
             <div> .</div>
              <ProductItems />                          
            </div>
         </section> 


    </>
  )
}

export default ProductShop