import React, { BaseSyntheticEvent, ReactNode, useState } from 'react'
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { addCart , save_customers_basket} from '../../store/features/cartSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
//import { products } from '../assets/data/data'

import { UrlServer } from '../services'

const ProductItems = () => {
  debugger
  const products = useAppSelector((state) => state.product.products);

  const dispatch = useAppDispatch();

  // const addCarts = (  e  ) => { 
  //   dispatch(addCart( e ))      
  // }

  const [openImage, setOpenImage] = useState(false)
  const [img, setImg] = useState("")
  const onOpenImage = ( { e }:BaseSyntheticEvent ) => {
    debugger

    setImg(e)
    setOpenImage(true)
  }
   
  return (
    <>
      <div className='product_items'>
        {products.map(( items  ) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <Link to={`/productdetial/${items.id}`}>
                <img src={UrlServer + "/" + items.cover} alt='' />
              </Link>
              {/* <img src={UrlServer + "/" + items.cover} alt='' /> */}
              <div className='overlay'>
 
                <button className='button'  onClick={() => dispatch(addCart({ items }))}>                  
                  <FiShoppingBag />
                </button>

                <button className='button'>
                  <AiOutlineHeart />
                </button>

                <button className='button' onClick={() => onOpenImage(items.cover)}>
                  <FiSearch />
                </button>

              </div>
            </div>
            <div className='details'>
            <span className="e-fs-11">
              <h6>{items.title}</h6>
              <p>{items.author}</p>
              <h5>฿{items.price}</h5></span>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={UrlServer + '/' + img} alt='' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>      
    </>
  )
}

export default ProductItems