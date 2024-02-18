import { Fragment, SyntheticEvent, useEffect, useState } from 'react'

import axios from "../../components/axios"

import {useNavigate, useLocation, Link } from 'react-router-dom';
 
import AuthService from '../services/AuthService';
import CookieService from '../services/CookieService';

const SignUp = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const [ierror, setiError] = useState('');

  const [customers_id, setCustomers_id] = useState(0)
  const [customers_gender, setCustomers_gender] = useState('0')
  const [customers_firstname, setCustomers_firstname] = useState('')
  const [customers_lastname, setCustomers_lastname] = useState('')
  const [customers_dob, setCustomers_dob] = useState('')
  const [customers_email_address, setCustomers_email_address] = useState('')
  const [customers_default_address_id, setCustomers_default_address_id] = useState(0)  
  const [customers_telephone, setCustomers_telephone] = useState('')
  const [customers_fax, setCustomers_fax] = useState('')
  const [customers_password, setCustomers_password] = useState('')
  const [customers_newsletter, setCustomers_newsletter] = useState('')

const  submitHandler = async (e: SyntheticEvent) =>{
  e.preventDefault()
 
  try{
      const jdata = JSON.stringify({
              customers_id:  0,
              customers_gender:  0,
              customers_firstname:  customers_firstname,
              customers_lastname:  customers_lastname,
              customers_dob:  '',
              customers_email_address:  customers_email_address,
              customers_default_address_id:  0,
              customers_telephone:  customers_telephone,
              customers_fax:  customers_fax,
              customers_password:  customers_password,
              customers_newsletter:  ''            
          });


      const response = await axios.post('/auth/register/', jdata,{
              headers: {
                  'Content-Type': 'application/json'
              },
      });
       
      console.log(JSON.stringify(response?.data)); 
      if(response.data?.success){


        try{
            const jdataAdbook = JSON.stringify({
                address_book_id:	 0,
                customers_id:	 response.data?.fileId,
                entry_gender:	 0,
                entry_company:	 '',
                entry_firstname:	 customers_firstname,
                entry_lastname:	 customers_lastname,
                entry_street_address:	 '',
                entry_suburb:	 '',
                entry_postcode:	 '',
                entry_city:	 '',
                entry_state:	 0,
                entry_country_id:	 0,
                entry_zone_id:	 0
                    
            })
            const res = await axios.post('/address_book/create/', jdataAdbook,{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const da = res.data.json()    
            debugger    
            if(res.data?.success){
               console.log(res.data?.fileId)
            }else{
                console.log(res.data?.message)
            }
        }catch(er){
            console.log(er)
        }

          navigate(from, { replace: true });
         
      }else{
        setiError('Please check your credentials and try agian')           
      }            
        
      setiError('')                        
    }catch(err){   
        setiError(err?.response.data.msg + "Please check your credentials and try agian")
        //alert("Please check your credentials and try agian"); 
      //throw err
    }

  }

  return (
      <>

      <div className='details'>
        <section className="ease-communication-overview e-pd-y-10">
            <div className="e-row">
            <div className="e-flex-md-10">

     
                <section className="ease-communication-overview" >
                    <div className="e-row e-justify-end e-align-center">
                        <div className="e-flex-md-20 e-flex-lg-10 ease-communication-data-modal">
                            <div className="e-card ease-modal-inner">
                            <div className="e-card__header e-d-block">
                            <div className="e-d-flex"> 
                                <button type="button" className="e-btn-icon e-mg-r-8">     
                                    <Link to="/"><i className="ri-star-line"></i></Link>                                                                  
                                </button>
                                <button type="button" className="e-btn-icon">
                                <Link to="/signup"><i className="ri-reply-line"></i></Link>                            
                                </button>

                            

                            </div>
                            <div className="e-d-flex">
                                    <p><span className="e-fw-bld">สมัครสมาชิกใหม่ - </span> รับสิทธิพิเศษ.</p>
                            </div>

                            </div>
                                <div className="e-card__body e-d-flex e-fd-column e-justify-between">
                                    <div className="ease-inbox-email-reply">
                                        <form className="e-form" onSubmit={submitHandler}>

                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">                                         
                                                <label className="e-form__input e-pd-l-10  e-tt-none">
                                                    First name:
                                                <input type="text" placeholder='Enter your first name' className="e-form__input e-pd-l-10  e-tt-none"  value={customers_firstname} onChange={(e) => setCustomers_firstname(e.target.value)}/>
                                                </label>   
                                            </div>


                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">                                         
                                                <label className="e-form__input e-pd-l-10  e-tt-none">
                                                    Last name:
                                                <input type="text" placeholder='Enter your last name' className="e-form__input e-pd-l-10  e-tt-none"  value={customers_lastname} onChange={(e) => setCustomers_lastname(e.target.value)}/>
                                                </label>   
                                            </div>

                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">                                         
                                                <label className="e-form__input e-pd-l-10">
                                                    Email:
                                                <input type="email" placeholder='Enter your email' className="e-form__input e-pd-l-10  e-tt-none "  value={customers_email_address} onChange={(e) => setCustomers_email_address(e.target.value)}/>
                                                </label>   
                                            </div>

                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">       
                                                <label className="e-form__input e-pd-l-10">
                                                    Password:
                                                    <input type="password" placeholder='Enter your password' className="e-form__input e-pd-l-10  e-tt-none"  value={customers_password} onChange={(e) => setCustomers_password(e.target.value)}/>
                                                </label>  
                                            </div>
            

                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">                                         
                                                <label className="e-form__input e-pd-l-10">
                                                Telephone number:
                                                <input type="tel" placeholder='Enter your telephone number' className="e-form__input e-pd-l-10  e-tt-none"  value={customers_telephone} onChange={(e) => setCustomers_telephone(e.target.value)}/>
                                                </label>   
                                            </div>
            

                                            <div className="e-form__group e-d-flex e-align-center e-pd-l-20">                                         
                                                <label className="e-form__input e-pd-l-10">
                                                Fax:
                                                <input type="tel" placeholder='Enter your fax' className="e-form__input e-pd-l-10  e-tt-none"  value={customers_fax} onChange={(e) => setCustomers_fax(e.target.value)}/>
                                                </label>   
                                            </div>


                                            <div className="e-form__group e-d-flex e-justify-between e-align-center e-pd-l-20 e-pd-8">
                                                <div className="e-d-flex">
                                                <button type="submit" className="e-btn e-btn-sm">Submit</button>

                                                </div>
                                                <p>
                                                <span className="line">
                                                    <Link to="/login">ลงชื่อเข้าสู่ระบบ</Link>
                                                </span>
                                                </p>
                                            </div>
                                        </form>
                                        <div>
                                                                                            
                                                    {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                
                                        </div>
                                    </div>
                                </div>            
                            </div>            
                        </div>
                    </div>                        
                </section>  
            </div>    

            </div>            
        </section>        
      </div>       






      </>
  )
}

export default SignUp
