import React, { useEffect } from 'react'
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { addCart } from "../../../store/features/cartSlice"
import { UrlServer } from "../../services"
import { fetchUploaded_files } from '../../../store/features/uploaded_filesSlice'
 

const Uploaded_FilesItem = ({ value, onSearch }) => {
    //debugger
 
    const data = useAppSelector((state) => state.uploadfile.uploadedfiles);
    
    const dispatch = useAppDispatch();
    
    // useEffect(() => {
    //     dispatch(fetchUploaded_files());
    //   });

  return (
    <>
      <section className='searchItems'>
        <div className='product_items'>
            {value !== "onclick"?( 
             ""):(
                data.map((i) => (

                    <div className="e-flex-sm-5 e-flex-md-12 e-flex-lg-5" key={i.file_id} onClick={() => onSearch("img/product/" + i.unique_file_name)}>    
                    <div className="e-card ease-featured-project e-overflow-hidden">
                    <div className='box' onClick={() => onSearch(i.unique_file_name)} key={i.file_id}>
                    <div className='img'>
                        <img className='img' src={UrlServer + '/img/product/' + i.unique_file_name} alt='' width={250} />
    
                        <div className='overlay'>
                        <button className='button' onClick={() => onSearch(i.unique_file_name)}>
                          <FiShoppingBag />
                        </button>
                        <button className='button'>
                          <AiOutlineHeart />
                        </button>
                        <button className='button'>
                          <FiSearch />
                        </button>
                      </div>    
                    </div>
                    </div>
                    <div className='details'>
                       {i.file_path}   
                    </div>                       
                    </div>                            
                  </div> 
    
                
                ))                
             )           
            }             
        </div>
      </section>
    </>
  )
}

export default Uploaded_FilesItem

