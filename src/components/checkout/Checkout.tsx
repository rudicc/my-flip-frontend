import { Fragment, useEffect, useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { useParams } from "react-router-dom"
import { useAppDispatch } from '../../store/hooks'
import { fetchCustomersbyIdtbl } from '../../store/featurestbl/customers_tblSlice'
import { fetchAddress_bookbyIdtbl } from '../../store/featurestbl/address_book_tblSlice'
import { fetchCountriestbl } from '../../store/featurestbl/countries_tblSlice'
import CustomerAddress from './CustomerAddress'
import CheckCartList from './CheckCartList'
import CheckCartList2 from './CheckCartList2'
import CheckProgressState from './CheckProgressState'
import { fetchOrders_ProductsCustomers } from '../../store/features/orders_productsBySlice'

const  Checkout =() =>{
    const { id } = useParams()
         
      const dispatch = useAppDispatch();

      const [userId , setUserId] = useState<number>(0)

      // const [flogin , setFlogin] = useState(false)
      // const [faddress , setAddress] = useState(false)
 

      useEffect(() => {
      //debugger
        //get customers_id to   
        try{
    
          if(localStorage.getItem("tmbuser") !== null){
            const tmbusers =  localStorage.getItem("tmbuser")?.split(' ')      
            const rdId =  localStorage.getItem("orderid")      
             setUserId(tmbusers[1])
              let id =  Number(tmbusers[1])
    
              dispatch(fetchCustomersbyIdtbl(id));
    
              dispatch(fetchAddress_bookbyIdtbl(id));
    
              dispatch(fetchCountriestbl());
              
           } 
        }catch(err){
          console.log(err)
        }
      });
       
  return (<>
 
        <CheckProgressState keyid={id} />

  </>

  )
}

export default Checkout
