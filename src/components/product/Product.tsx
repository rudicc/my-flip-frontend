
//import { products } from '../assets/data/data'
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import Heading from '../common/Heading'
import ProductItems from './ProductItems'
import { fetchProducts} from '../../store/features/productsSlice';
import { fetchMenutab } from '../../store/features/menutabSlice';
import { fetchProductstbl } from '../../store/features/products_tblSlice';

const Product = () => {
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
                <Heading title='สินค้าที่กำลังมาแรง' desc='ตรวจสอบรายการที่ร้อนแรงที่สุดของสัปดาห์ ดาวรุ่งพุ่งแรงเหล่านี้ควรค่าแก่ความสนใจของคุณ.' />
            
                <ProductItems />
            </div>
         </section>
    </>
  )
}

export default Product