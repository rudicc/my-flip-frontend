import { Fragment, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UrlServer } from '../services';
import { fetchAddress_bookbyIdtbl } from '../../store/featurestbl/address_book_tblSlice';
const Url = UrlServer

const MyAdDressBookList = () =>{

    const data = useAppSelector((state) => state.address_booktbl.address_booktbl);
    const datacounty = useAppSelector((state) => state.countriestbl.countriestbl);

    const dispatch = useAppDispatch();
    
    const [ierror, setiError] = useState('');

    const [ address_book_id, setaddress_book_id ] = useState<number>(0) 

    const [ customers_id, setcustomers_id ] = useState<number>(0) 

    const [ entry_gender, setentry_gender ] = useState<string>('') 

    const [ entry_company, setentry_company ] = useState<string>('') 

    const [ entry_firstname, setentry_firstname ] = useState<string>('') 

    const [ entry_lastname, setentry_lastname ] = useState<string>('') 

    const [ entry_street_address, setentry_street_address ] = useState<string>('') 

    const [ entry_suburb, setentry_suburb ] = useState<string>('') 

    const [ entry_postcode, setentry_postcode ] = useState<string>('') 

    const [ entry_city, setentry_city ] = useState<string>('') 

    const [ entry_state, setentry_state ] = useState<string>('') 

    const [ entry_country_id, setentry_country_id ] = useState<number>(0) 

    const [ entry_zone_id, setentry_zone_id ] = useState<number>(0) 

    const setDatacustomer = (e:BaseSyntheticEvent) =>{

      setaddress_book_id(e.address_book_id) 

      setcustomers_id(e.customers_id) 

      setentry_gender(e.entry_gender) 

      setentry_company(e.entry_company) 

      setentry_firstname(e.entry_firstname) 

      setentry_lastname(e.entry_lastname) 

      setentry_street_address(e.entry_street_address) 

      setentry_suburb(e.entry_suburb) 

      setentry_postcode(e.entry_postcode) 

      setentry_city(e.entry_city) 

      setentry_state(e.entry_state) 

      setentry_country_id(e.entry_country_id) 

      setentry_zone_id(e.entry_zone_id)

      onClickShowModal(e)
    }

    const AccessData = async ( vtype )=>{
      
    try{
    
       const jdata = JSON.stringify({
          address_book_id:	 address_book_id,
          customers_id:	 customers_id,
          entry_gender:	 entry_gender,
          entry_company:	 entry_company,
          entry_firstname:	 entry_firstname,
          entry_lastname:	 entry_lastname,
          entry_street_address:	 entry_street_address,
          entry_suburb:	 entry_suburb,
          entry_postcode:	 entry_postcode,
          entry_city:	 entry_city,
          entry_state:	 entry_state,
          entry_country_id:	 entry_country_id,
          entry_zone_id:	 entry_zone_id
       })

       const res = await fetch(Url + "/address_book/put/", {
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
          dispatch(fetchAddress_bookbyIdtbl(customers_id));
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
    
    
const Show = () =>{
  return(
    <>


    <Fragment>
        
            <div className="e-flex-md-12">

                <div className="e-card ease-communication">

                    <div className="e-card__header">
                        <span className="e-card__title e-fw-bld">สมุดที่อยู่/Address Book</span>

                        <div className="e-d-flex e-align-center">
                        <span className="e-fs-12 ease-faded-text">Refreshed</span>
                        <div className="e-mg-l-10">
                            <button type="button" className="e-btn-icon" onClick={()=> onCloseModal(`#ease-message-book-data-edit`)}><i className="ri-refresh-line"></i></button>
                        </div>
                        </div>
                    </div>

                    <div className="e-card__body e-pd-0">

                        <div className="ease-inbox">

{data.map((i) =>(



                        <div className="e-tbl__row">

                       <div className="e-tbl__data e-pd-x-20" data-modal-target="ease-message-book-data-edit">

                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-flex-auto e-mg-r-10">รหัสสมุดที่อยู่ : </span>   
                                <span className="e-form__input e-pd-l-10  e-tt-none">{i.address_book_id} </span>  
                  
                            </div>  
                                </div> 
                              <div className = "right-side" >                             

                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-flex-auto e-mg-r-10">รหัสลูกค้า : </span>   
                                <span className="e-form__input e-pd-l-10  e-tt-none">{i.customers_id} </span>  

     
                            </div>  
                                </div> 
                            </div> 
                        </div> 


                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">เพศ : </span>    
                                  {/* <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_gender} </span>   */}
                                  <select 
                                              value={i.entry_gender} 
                                              disabled
                                              // onChange={(i) => onStatusSelect(i)}
                                              className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                              <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>
                                              <option className='e-bdg ' value="1" key="1">ชาย</option> 
                                              <option className='e-bdg ' value="2" key="2">หญิง</option> 
                                          </select>
                              </div>  
                                </div> 
                                <div className = "right-side" >                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">หน่วยงาน/บริษัท : </span>    
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_company} </span>  
      
                              </div>  
                                </div> 
                            </div> 
                        </div> 


                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">ชื่อ : </span>   
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_firstname} </span>  
    
                              </div>  
                                </div> 
                                <div className = "right-side" >                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">นามสกุล : </span>    
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_lastname} </span>  

     
                              </div>  
                                </div> 
                            </div> 
                        </div> 


                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">ที่อยู่/ถนนทางเข้า  : </span>    
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_street_address} </span>  

    
                              </div>  
                                </div> 
                                <div className = "right-side" >                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">ตำบล/แขวง/ชานเมือง : </span> 
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_suburb} </span>  
     
                              </div>  
                                </div> 
                            </div> 
                        </div> 


                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">รหัสไปรษณีย์ : </span>  
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_postcode} </span>  
      
                              </div>  
                                </div> 
                                <div className = "right-side" >                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">อำเภอ/เขต : </span> 
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_city} </span>  

     
                              </div>  
                                </div> 
                            </div> 
                        </div> 


                        <div className="ease-communication-content"> 
                            <div className="e-d-flex-lg e-fs-11"> 
                                <div className="left-side e-d-flex e-mg-r-10-lg">                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">จังหวัด : </span>    
                                  <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_state} </span>  

    
                              </div>  
                                </div> 
                                <div className = "right-side" >                             

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-flex-auto e-mg-r-10">ประเทศ : </span> 
                                  {/* <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_country_id} </span>   */}

                                  <select 
                                        value={i.entry_country_id} 
                                        // onChange={(i) => onStatusSelect(i)}      
                                        disabled                               
                                        onChange={(e) => (setentry_country_id(e.target.value))}
                                        className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                        <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>                            
                                        {datacounty.map((k) =>(
                                             <option className='e-bdg ' value={k.countries_id} key={k.countries_id}>{k.countries_name}</option> 
                                        ))}
                                    </select>

                              </div>  
                                </div> 
                            </div> 
                          </div> 


                            {/* <div className="e-form__group e-d-flex e-align-center e-pd-l-20" hidden>  
                                <span className="e-flex-auto e-mg-r-10">รหัสโซน : </span>    
                                <span className="e-form__input e-pd-l-10  e-tt-none">{i.entry_zone_id} </span>  

    
                            </div> */}

  
                            <button type="button" className="e-btn e-btn-sm e-btn-primary e-mg-r-10" 
                              onClick={() => setDatacustomer(i)}
                            >
                                <i className="ri-arrow-up-line e-mg-r-10"></i>
                                <span className="ease-meta e-fs-12 ease-faded-text">ปรับปรุง</span>
                            </button>



                       </div>


                        </div> 

))}


                        </div>

                    </div>

                </div>

            </div>

    </Fragment>    

     </> )
}

return (<>

 <Show />

<section>

  <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-book-data-edit">

    <div className="e-container">
          <div className="e-flex-md-12">

              <div className="e-card ease-communication">

                  <div className="e-card__header">
                      <span className="e-card__title e-fw-bld">สมุดที่อยู่/Address Book</span>

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
                          <div className="e-tbl__data e-pd-x-20">

                          <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">รหัสสมุดที่อยู่ : </span>    
                              <input type="number" placeholder='address book id' className="e-form__input e-pd-l-10"        
                                value={ address_book_id } onChange={(e) => (setaddress_book_id(e.target.value))} disabled        
                              />      
                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">รหัสลูกค้า : </span>   
                              
                              <input type="number" placeholder='customers id' className="e-form__input e-pd-l-10"        
                                value={ customers_id } onChange={(e) => (setcustomers_id(e.target.value))} disabled={true}  
                              />      
                          </div>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">เพศเข้า : </span>    
                              {/* <input type="text" placeholder='entry gender' className="e-form__input e-pd-l-10"        
                                value={ entry_gender } onChange={(e) => (setentry_gender(e.target.value))}         
                              />       */}

                                    <select 
                                        value={entry_gender} 
                                        // onChange={(i) => onStatusSelect(i)}
                                        onChange={(e) => (setentry_gender(e.target.value))}
                                        className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                        <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>
                                        <option className='e-bdg ' value="1" key="1">ชาย</option> 
                                        <option className='e-bdg ' value="2" key="2">หญิง</option> 
                                    </select>

                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">บริษัทเข้า : </span>    
                              <input type="text" placeholder='entry company' className="e-form__input e-pd-l-10"        
                                value={ entry_company } onChange={(e) => (setentry_company(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">ชื่อจริง : </span>    
                              <input type="text" placeholder='entry firstname' className="e-form__input e-pd-l-10"        
                                value={ entry_firstname } onChange={(e) => (setentry_firstname(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">นามสกุล : </span>    
                              <input type="text" placeholder='entry lastname' className="e-form__input e-pd-l-10"        
                                value={ entry_lastname } onChange={(e) => (setentry_lastname(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">ที่อยู่/ถนนทางเข้า : </span>    
                              <input type="text" placeholder='entry street address' className="e-form__input e-pd-l-10"        
                                value={ entry_street_address } onChange={(e) => (setentry_street_address(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">ตำบล/แขวง/ชานเมือง : </span>    
                              <input type="text" placeholder='entry suburb' className="e-form__input e-pd-l-10"        
                                value={ entry_suburb } onChange={(e) => (setentry_suburb(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">รหัสไปรษณีย์รายการ : </span>    
                              <input type="text" placeholder='entry postcode' className="e-form__input e-pd-l-10"        
                                value={ entry_postcode } onChange={(e) => (setentry_postcode(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">อำเภอ/เขต : </span>    
                              <input type="text" placeholder='entry city' className="e-form__input e-pd-l-10"        
                                value={ entry_city } onChange={(e) => (setentry_city(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                        </div> 
                    </div> 


                    <div className="ease-communication-content"> 
                        <div className="e-d-flex-lg e-fs-11"> 
                            <div className="left-side e-d-flex e-mg-r-10-lg">                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">จังหวัด : </span>    
                              <input type="text" placeholder='entry state' className="e-form__input e-pd-l-10"        
                                value={ entry_state } onChange={(e) => (setentry_state(e.target.value))}         
                              />      
                          </div>  
                            </div> 
                            <div className = "right-side" >                             

                          <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">ประเทศ : </span>  


                              {/* <input type="number" placeholder='entry country id' className="e-form__input e-pd-l-10"        
                                value={ entry_country_id } onChange={(e) => (setentry_country_id(e.target.value))}         
                              />    */}
                              
                                    <select 
                                        value={entry_country_id} 
                                        // onChange={(i) => onStatusSelect(i)}
                                        onChange={(e) => (setentry_country_id(e.target.value))}
                                        className="e-form__input e-pd-l-10  e-tt-none e-fs-12" >
                                        <option className='e-bdg ' value="0" key="0">ไม่ระบุ</option>                            
                                        {datacounty.map((i) =>(
                                             <option className='e-bdg ' value={i.countries_id} key={i.countries_id}>{i.countries_name}</option> 
                                        ))}
                                    </select>


                          </div>  
                            </div> 
                        </div> 
                      </div> 


                          {/* <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                              <span className="e-flex-auto e-mg-r-10">รหัสโซน : </span>  
                              <span className="e-flex-auto e-mg-r-10">{entry_zone_id}</span>    
                              <input type="number" placeholder='entry zone id' className="e-form__input e-pd-l-10"        
                                value={ entry_zone_id } onChange={(e) => (setentry_zone_id(e.target.value))}         
                              />       
                          </div>*/}

                           
                            <div className="e-d-flex e-align-center">

                              <span className="e-fs-12 ease-faded-text">บันทึก</span>
                              <div className="e-mg-l-10">                                                       
                                <button type="button" className="e-btn-icon"    onClick={() => AccessData('update')}
                                >
                                  <i className="ri-add-line e-mg-r-10"></i></button>
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

export default MyAdDressBookList


