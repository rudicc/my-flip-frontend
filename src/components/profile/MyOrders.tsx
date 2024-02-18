import React, { useEffect, useState } from 'react'
 
import MyOrderList from './MyOrderList'
import { fetchOrders_BasketCustomers } from '../../store/features/orders_productsBySlice';
import { useAppDispatch } from '../../store/hooks';


const MyOrders = () =>{

  const dispatch = useAppDispatch();

  const [userId , setUserId] = useState<number>(0)

  // const [flogin , setFlogin] = useState(false)
  // const [faddress , setAddress] = useState(false)


  useEffect(() =>{ 
      if(localStorage.getItem("tmbuser") !== null){
      const tmbuser =  localStorage.getItem("tmbuser")?.split(' ')         
        //setUserName(tmbuser[0])
        setUserId(tmbuser[1])
        //setUserMail(tmbuser[2])
       }
      debugger
    try{
            //get data 
         
            const jdataorders = JSON.stringify({
                orders_id: 0,
                customers_id: userId,
            })
              dispatch(fetchOrders_BasketCustomers(jdataorders))          
        }catch{

        }

})
          
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
      
              <MyOrderList />

          </div>
  
          </section>
      </div>    
  
    </>
    )
}

export default MyOrders
