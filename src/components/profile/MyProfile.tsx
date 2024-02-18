import React, { useEffect, useState } from 'react'
 
import MyProfileList from './MyProfileList'
import MyAdDressBookList from './MyAdDressBookList'
import { useAppDispatch } from '../../store/hooks';
import { fetchAddress_bookbyIdtbl, fetchAddress_booktbl } from '../../store/featurestbl/address_book_tblSlice';
import { fetchCustomersByJoinAddrtbl, fetchCustomersbyIdtbl, fetchCustomerstbl } from '../../store/featurestbl/customers_tblSlice';
import { fetchCustomersById } from '../../store/features/customersSlice';
import { fetchCountriestbl } from '../../store/featurestbl/countries_tblSlice';



const MyProfile = () => {
  
  const dispatch = useAppDispatch();

  const [userId , setUserId] = useState<number>(0)
  useEffect(() => {
  debugger
    //get customers_id to   
    try{

      if(localStorage.getItem("tmbuser") !== null){
        const tmbusers =  localStorage.getItem("tmbuser")?.split(' ')       
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
  
  return (
  <>
   

    <div className='details'>       
        <div className="ease-communication-overview e-pd-y-18">

        <div className="e-row">


          <MyProfileList />

        </div>
        <div className="e-row">

            <MyAdDressBookList /> 

        </div>
        </div>
    </div>    

  </>
  )
}

export default MyProfile
