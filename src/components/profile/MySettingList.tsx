import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UrlServer } from '../services';
import { fetchCustomers_ismemberbyIdtbl } from '../../store/featurestbl/customers_ismember_tblSlice';
const Url = UrlServer
const MySettingList =() =>{

  const data = useAppSelector((state) => state.customers_ismembertbl.customers_ismembertbl);

  const dispatch = useAppDispatch();
  
  const [ierror, setiError] = useState('');
  
  //
  const [ mem_id, setmem_id ] = useState<number>(0) 

  const [ mem_year, setmem_year ] = useState<number>(0) 

  const [ mem_date_added, setmem_date_added ] = useState<string>('') 

  const [ mem_date_exp, setmem_date_exp ] = useState<string>('') 

  const [ mem_status_exp, setmem_status_exp ] = useState<number>(0)

  const [ customers_id, setcustomers_id ] = useState<number>(0)

  //
  const setData = (e:BaseSyntheticEvent) =>{

        setmem_id(e.mem_id) 

        setmem_year(e.mem_year) 

        setmem_date_added(e.mem_date_added) 

        setmem_date_exp(e.mem_date_exp) 

        setmem_status_exp(e.mem_status_exp) 

        setcustomers_id(e.customers_id) 
  
    onClickShowModal(e)


  }


  const AccessData = async ( vtype )=>{
      
    try{    
       const jdata = JSON.stringify({
          mem_id:          mem_id ,
          mem_year:        mem_year,
          mem_date_added:  mem_date_added,
          mem_date_exp:    mem_date_exp,
          mem_status_exp:  mem_status_exp,
          customers_id:    customers_id
       })

       const res = await fetch(Url + "/cusmember/put/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jdata,
      })
      debugger
      const data = res.json();
      if(res.ok){
          console.log('ok')
          setiError("Sucessfully!")
          dispatch(fetchCustomers_ismemberbyIdtbl(customers_id));
      }else{
          console.log(data)
          setiError("Not found!")
      }

    }catch(er){
      console.log(er)
      setiError('*** ' + er)
    }

    }
    const onClickShowModal = (e:BaseSyntheticEvent) => { 
      //debugger
      showModal("#ease-message-book-data-edit") 
     }
  
    function showModal(e:string){
      const modal = document.querySelector(e)
      modal.classList.add('e-active')    
      document.body.style.overflow = "hidden"
    }
  
    const onCloseModal = (value:string) =>{
      //debugger
        const modal = document.querySelector(value)
        modal.classList.remove('e-active')
        document.body.removeAttribute("style")
    }

    const setDataInsert =() =>{
      showModal("#ease-message-book-data-edit") 
    }
  return (<>

    <div className="e-flex-md-12">
      
      <div className="e-card ease-communication">

        <div className="e-card__header">
          <span className="e-card__title e-fw-bld">สมัครรับสมาชิกประจำปี</span>

          <div className="e-d-flex e-align-center">
          {/* <span className="e-fs-12 ease-faded-text">เพิ่ม</span> */}
          <button type="button"  className="e-btn e-btn-secondary e-btn-sq" 
            //onClick={(e) =>(onClickInsert(e))}
            onClick={() => setDataInsert()}

            data-modal-target="ease-message-book-data-edit"
          >
            <i className="ri-add-line"></i>
            
          </button>

      
    

            {/* <span className="e-fs-12 ease-faded-text">Refreshed</span>
            <div className="e-mg-l-10">
              <button type="button" className="e-btn-icon e-btn e-btn-secondary e-btn-sq"><i className="ri-refresh-line"></i></button>
            </div> */}

          </div>

        </div>

        <div className="e-card__body e-pd-0">

          <div className="ease-inbox"> 
    
    {data.map((i) =>(

 
            <div className="e-card__body e-pd-0">

              <div className="e-overflow-auto">

                <table className="e-tbl">

                  <thead className="e-tbl__header">
                    <tr className="e-tbl__row">                             
                      <th className="e-tbl__head">ปี</th>                        
                      <th className="e-tbl__head">วันที่ลงทะเบียน</th>
                      <th className="e-tbl__head">วันที่สิ้นสุด</th>
                      <th className="e-tbl__head">สถานะสิ้นการเป็นสมาชิก</th>    
                      <th colSpan={4} />  
                    </tr>
                  </thead>

                  <tbody id="myTable" className="e-tbl__body">
                    <tr className="e-tbl__row" key={i.mem_id} data-modal-target="ease-message-book-data-edit">
                      <td className="e-tbl__data">{i.mem_year}</td>
                      <td className="e-tbl__data">{i.mem_date_added}</td>
                      <td className="e-tbl__data">{i.mem_date_exp}</td>
                      <td className="e-tbl__data">{i.mem_status_exp}</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>


   ))} 

          </div>

        </div>

      </div>

    </div>



{/* Modal */}
    <section>

      <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-book-data-edit">

        <div className="e-container">
        <div className="e-flex-md-12">

                  <div className="e-card ease-communication">

                      <div className="e-card__header">
                          <span className="e-card__title e-fw-bld">สมัครรับสมาชิกประจำปี</span>

                          <div className="e-d-flex e-align-center">
                          <span className="e-fs-12 ease-faded-text">Refreshed</span>
                          <div className="e-mg-l-10">
                              <button type="button" className="e-btn-icon"
                              onClick={()=> onCloseModal(`#ease-message-book-data-edit`)}
                              ><i className="ri-refresh-line"></i></button>
                          </div>
                          </div>
                      </div>

                      <div className="e-card__body e-pd-0">

                          <div className="ease-inbox">
                             <div className="e-tbl__row">
                               <div className="e-tbl__data e-pd-x-20">

                                  <div className="ease-communication-content"> 
                                        <div className="e-d-flex-lg e-fs-11"> 
                                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                              <span className="e-flex-auto e-mg-r-10">รหัสสมุดที่อยู่ : </span>    
                                              <input type="number" placeholder='address book id' className="e-form__input e-pd-l-10"        
                                                //value={ address_book_id } onChange={(e) => (setaddress_book_id(e.target.value))} disabled        
                                              />      
                                          </div>  
                                            </div> 
                                            <div className = "right-side" >                             

                                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                              <span className="e-flex-auto e-mg-r-10">รหัสลูกค้า : </span>   
                                              
                                              <input type="number" placeholder='customers id' className="e-form__input e-pd-l-10"        
                                                //value={ customers_id } onChange={(e) => (setcustomers_id(e.target.value))} disabled={true}  
                                              />      
                                          </div>  
                                            </div> 
                                        </div> 
                                    </div> 



                                    <div className="e-d-flex e-align-center">

                                      <span className="e-fs-12 ">บันทึกรายการ</span>
                                      <div className="e-mg-l-10">                                                       
                                        <button type="button" className="e-btn-icon"    
                                        //onClick={() => AccessData('update')}
                                        >
                                          <i className="ri-add-line e-mg-r-10"></i></button>
                                      </div>


                                      <span className="e-fs-12 ">ปรับปรุงรายการ</span>
                                      <div className="e-mg-l-10">                                                       
                                        <button type="button" className="e-btn-icon"    
                                        //onClick={() => AccessData('update')}
                                        >
                                           <i className="ri-send-plane-2-line e-mg-r-10"></i></button>
                                      </div>


                                      <span className="e-fs-12 ease-faded-text">Refreshed</span>
                                      <div className="e-mg-l-10">                                                       
                                        <button type="button" className="e-btn-icon" onClick={()=> onCloseModal(`#ease-message-book-data-edit`)}><i className="ri-refresh-line"></i></button>
                                      </div>

                                    </div>

                                    <div>
                                                                                      
                                      {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                                
                                    </div> 




                               </div>
                             </div>      
                          </div>

                      </div>

                  </div>

        </div>
      </div>

    </div>

</section>


</>)
}

export default MySettingList
