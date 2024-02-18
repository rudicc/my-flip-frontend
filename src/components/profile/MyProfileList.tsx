import { BaseSyntheticEvent, Fragment, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UrlServer } from '../services';
import { fetchCustomersById } from '../../store/features/customersSlice';
import { fetchCustomersbyIdtbl } from '../../store/featurestbl/customers_tblSlice';
import { formatDate, subStrings } from '../../functions/Utility';
const Url = UrlServer

const MyProfileList =() =>{

  const data = useAppSelector((state) => state.customerstbl.customerstbl);
  const dispatch = useAppDispatch();
  const [ierror, setiError] = useState('');

  //date 
  let defaultDate = formatDate() //new Date()
  //defaultDate.setDate(defaultDate.getDate() + 3)

  //customers
  const [ customers_id, setcustomers_id ] = useState<number>(0) 

  const [ customers_gender, setcustomers_gender ] = useState<string>('') 

  const [ customers_firstname, setcustomers_firstname ] = useState<string>('') 

  const [ customers_lastname, setcustomers_lastname ] = useState<string>('') 

  const [ customers_dob, setcustomers_dob ] = useState<string>('') 

  const [ customers_email_address, setcustomers_email_address ] = useState<string>('') 

  const [ customers_default_address_id, setcustomers_default_address_id ] = useState<number>(0) 

  const [ customers_telephone, setcustomers_telephone ] = useState<string>('') 

  const [ customers_fax, setcustomers_fax ] = useState<string>('') 

  const [ customers_password, setcustomers_password ] = useState<string>('') 

  const [ customers_newsletter, setcustomers_newsletter ] = useState<string>('') 

  const setDatacustomer = (e:BaseSyntheticEvent) =>{
    debugger

    setcustomers_id(e.customers_id) 

    setcustomers_gender(e.customers_gender) 

    setcustomers_firstname(e.customers_firstname) 

    setcustomers_lastname(e.customers_lastname) 

    setcustomers_dob(e.customers_dob) 

    setcustomers_email_address(e.customers_email_address) 

    setcustomers_default_address_id(e.customers_default_address_id) 

    setcustomers_telephone(e.customers_telephone) 

    setcustomers_fax(e.customers_fax) 

    setcustomers_password(e.customers_password) 

    setcustomers_newsletter(e.customers_newsletter)

    onClickShowModal(e)
  }

    //const [date, setDate] = useState<Date>(defaultDate)

    const onSetDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
      debugger
      let nd:Date = (new Date(event.target.value))
      setcustomers_dob(nd.toLocaleString('th-TH'))
  
    }



  const AccessData = async ( vtype )=>{
      
    try{
     debugger
      const jdata = JSON.stringify({
        customers_id:  customers_id,
        customers_gender:  customers_gender,
        customers_firstname:  customers_firstname,
        customers_lastname:   customers_lastname,
        customers_dob:  subStrings(customers_dob , 0 , 10),
        customers_email_address:  customers_email_address,
        customers_default_address_id: customers_default_address_id ,
        customers_telephone:  customers_telephone,
        customers_fax:  customers_fax,
        customers_password:  customers_password,
        customers_newsletter:  customers_newsletter            
    });

       const res = await fetch(Url + "/customers/put/", {
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
          dispatch(fetchCustomersbyIdtbl(customers_id));
      }else{
          console.log(data)
          setiError("Not found!")
      }

    }catch(er){
      console.log(er)
      setiError('*** ' + er)
    }

    }

  useEffect(() =>{
   // debugger
     //if(data.length > 0){setDatacustomer(data[0])}  
    // if(dataadd.length > 0){setDataAdDressBook(dataadd[0])}

  })
  const onClickShowModal = (e:BaseSyntheticEvent) => { 
    //debugger
    showModal("#ease-message-profile-data-edit") 
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

  const Show =() =>{
    return(<>
    
      <Fragment>
        <div className="e-flex-md-12">

          <div className="e-card  ease-communication">

            <div className="e-card__header">
              <span className="e-card__title e-fw-bld">ข้อมูลผู้ใช้งาน/My Profile</span>

              <div className="e-d-flex e-align-center">
                <span className="e-fs-12 ease-faded-text">Refreshed</span>
                <div className="e-mg-l-10">
                  <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                </div>
              </div>
            </div>

            <div className="e-card__body e-pd-0">

              <div className="ease-inbox">

                <div className="e-tbl__row">

                {data.map((i) =>(     
                    <div className="e-tbl__data e-pd-x-20" data-modal-target="ease-message-profile-data-edit">
                      <div className="ease-communication-content"> 
                      <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                          <span className="e-flex-auto e-mg-r-10">รหัสลูกค้า : </span>    
                                          <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_id} </span>       
                                      </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                          <span className="e-flex-auto e-mg-r-10">เพศ : </span>
                                          {/* <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_gender} </span> */}

                                          <select 
                                              value={i.customers_gender} 
                                              disabled
                                              // onChange={(i) => onStatusSelect(i)}
                                              className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                              <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>
                                              <option className='e-bdg ' value="1" key="1">ชาย</option> 
                                              <option className='e-bdg ' value="2" key="2">หญิง</option> 
                                          </select>

                                      </div>  
                                    </div> 
                                </div> 
                      </div>


                      <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">ชื่อ : </span>    
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_firstname} </span>      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">นามสกุล : </span>  
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_lastname} </span>         
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">วันเกิด : </span>    
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_dob} </span>       
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">ที่อยู่อีเมล : </span>
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_email_address} </span>     
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">เลขที่/รหัสที่อยู่เริ่มต้น : </span>    
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_default_address_id} </span>     
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">โทรศัพท์ : </span>    
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_telephone} </span>    
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 



                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">แฟกซ์ : </span>    
                                      <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_fax} </span>     
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">รหัสผ่าน : </span> 
                                      <span className="e-form__input e-pd-l-10  e-tt-none">*****</span>      
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-flex-auto e-mg-r-10">จดหมายข่าว : </span> 
                                <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_newsletter} </span>     
                            </div>

                            <button type="button" onClick={() => setDatacustomer(i)} className="e-btn e-btn-sm e-btn-primary e-mg-r-10">
                                <i className="ri-arrow-up-line e-mg-r-10"></i>
                                <span className="ease-meta e-fs-12 ease-faded-text">ปรับปรุง</span>
                            </button>


                    </div>
                 ))} 
           
                </div>


              </div>

            </div>

          </div>

        </div> 
      </Fragment>

    </>
    )
  }

  return (<>
 
  <Show />

{/* show modal */}
 


  <section className='e-pd-y-30'>
    <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-profile-data-edit" >

      <div className="e-container">

          <div className="e-flex-md-9">

          <div className="e-card  ease-communication">

            <div className="e-card__header">
              <span className="e-card__title e-fw-bld">ข้อมูลผู้ใช้งาน/My Profile</span>

              <div className="e-d-flex e-align-center">
                <span className="e-fs-12 ease-faded-text">Refreshed</span>
                <div className="e-mg-l-10">
                  <button type="button" className="e-btn-icon" onClick={()=> onCloseModal(`#ease-message-profile-data-edit`)}><i className="ri-refresh-line"></i></button>
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
                                      <span className="e-flex-auto e-mg-r-10">รหัส : </span>    
                                      <input type="number" placeholder='customers id' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_id } onChange={(e) => (setcustomers_id(e.target.value))} disabled      
                                      />      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">เพศ : </span>    

                                      {/* <input type="radio" placeholder='customers gender' className="e-form__input e-pd-l-10  e-tt-none"        
                                        //value={ customers_gender } onChange={(e) => (setcustomers_gender(e.target.value))}                                          
                                      />     */}


                                          <select 
                                              value={customers_gender} 
                                              // onChange={(i) => onStatusSelect(i)}
                                              onChange={(e) => (setcustomers_gender(e.target.value))}
                                              className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                              <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>
                                              <option className='e-bdg ' value="1" key="1">ชาย</option> 
                                              <option className='e-bdg ' value="2" key="2">หญิง</option> 
                                          </select>

                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">ชื่อ : </span>    
                                      <input type="text" placeholder='customers firstname' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_firstname } onChange={(e) => (setcustomers_firstname(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">นามสกุล : </span>    
                                      <input type="text" placeholder='customers lastname' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_lastname } onChange={(e) => (setcustomers_lastname(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">วันเกิด : </span>    
                                      <input type="date" placeholder='customers dob' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_dob }
                                        //onChange={() => (onSetDate)}  
                                        onChange={(e) => (setcustomers_dob(e.target.value))}  //setcustomers_dob
                                              
                                      />      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">ที่อยู่อีเมล : </span>    
                                      <input type="text" placeholder='customers email address' className="e-tt-none e-form__input  e-pd-l-10  e-tt-none"        
                                        value={ customers_email_address } onChange={(e) => (setcustomers_email_address(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">เลขที่/รหัสที่อยู่เริ่มต้น : </span>    
                                      <input type="number" placeholder='customers default address id' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_default_address_id } onChange={(e) => (setcustomers_default_address_id(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">โทรศัพท์ : </span>    
                                      <input type="text" placeholder='customers telephone' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_telephone } onChange={(e) => (setcustomers_telephone(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                            <div className="ease-communication-content"> 
                                <div className="e-d-flex-lg e-fs-11"> 
                                    <div className="left-side e-d-flex e-mg-r-10-lg">                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">แฟกซ์ : </span>    
                                      <input type="text" placeholder='customers fax' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_fax } onChange={(e) => (setcustomers_fax(e.target.value))}         
                                      />      
                                  </div>  
                                    </div> 
                                    <div className = "right-side" >                             

                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">รหัสผ่าน : </span>    
                                      <span className="e-flex-auto e-mg-r-10">****</span>  
                                      {/* <input type="text" placeholder='customers password' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_password } onChange={(e) => (setcustomers_password(e.target.value))}         
                                      />       */}
                                  </div>  
                                    </div> 
                                </div> 
                            </div> 


                                  <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-flex-auto e-mg-r-10">จดหมายข่าว : </span>   
                                      <span className="e-flex-auto e-mg-r-10">{customers_newsletter}</span>  
                                      {/* <input type="text" placeholder='customers newsletter' className="e-form__input e-pd-l-10  e-tt-none"        
                                        value={ customers_newsletter } onChange={(e) => (setcustomers_newsletter(e.target.value))}         
                                      />       */}
                                  </div>

   




                          <div className="e-d-flex e-align-center">

                            <span className="e-fs-12 ease-faded-text">บันทึก</span>
                            <div className="e-mg-l-10">                                                       
                              <button type="button" className="e-btn-icon" onClick={() => AccessData('update')}><i className="ri-arrow-up-line e-mg-r-10"></i></button>
                            </div>

                            <span className="e-fs-12 ease-faded-text">Refreshed</span>
                            <div className="e-mg-l-10">                                                       
                              <button type="button" className="e-btn-icon" onClick={()=> onCloseModal(`#ease-message-profile-data-edit`)}><i className="ri-refresh-line"></i></button>
                            </div>

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
  </section>
 

</>)
}

export default MyProfileList 
