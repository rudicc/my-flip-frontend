import { Fragment, SyntheticEvent, useEffect, useState } from 'react'

import { Form, Button, Col} from 'react-bootstrap'

import axios from "../axios"

import {useNavigate, useLocation, Link } from 'react-router-dom';
 
import AuthService from '../services/AuthService';
import CookieService from '../services/CookieService';

import bcrypt from "bcryptjs";
  
const  LogIn = () => {
debugger 
    const [email, setEemail] = useState('');
    const [password, setPassword] = useState('');    
    const [isChecked, setIsChecked] = useState(false);//isChecked

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [ierror, setiError] = useState('');

    const submitHandler = async (e: SyntheticEvent) =>{
        e.preventDefault()
 debugger  
        try{
            const jdata = JSON.stringify({
                    id:  0,
                    email:  email,
                    password:  password                            
                });
            const response = await axios.post('/auth/signin/', jdata,{
                    headers: {
                        'Content-Type': 'application/json'
                    },          
               });
           
            //console.log(JSON.stringify(response?.data));
     
            if(response){
                debugger
                 if(AuthService.handleLoginSuccess(response, isChecked)){
                    //debugger 
                    // const kdata = JSON.stringify({ 
                    //     email:  email,
                    //     password:  "",
                    //     token: CookieService.get("chopbook-access_token"),
                    //     user: response?.data?.user,
                    //     uid: response?.data?.uid                         
                    // });   
                    
                    const kdata = email +" "+ response?.data?.uid + " " + response?.data?.user;
                    //let cda = bcrypt.hash(kdata , 10 );
                    // console.log(cda)                    
                    localStorage.setItem("tmbuser", kdata)               
                    navigate(from, { replace: true });
                 
                 }else{                    
                    alert("Please check your credentials and try agian");
                    localStorage.removeItem("tmbuser")            
                 }
            } else {                
                alert("Please check your credentials and try agian");
                localStorage.removeItem("tmbuser")   
            }
    
            console.log("By cookie " + CookieService.get("chopbook-access_token"))


            setiError('')
          }catch(err){    
            setiError(err?.response.data.msg)
            //throw err
          }    
    }

    return ( 
        <>
                 
            <section >
                <div className="e-row e-justify-end e-align-center">
                    <div className="e-flex-md-7 e-flex-lg-6 ease-communication-data-modal">
                        <div className="e-card ease-modal-inner">
                        <div className="e-card__header e-d-block">
                        <div className="e-d-flex">
                            <button type="button" className="e-btn-icon e-mg-r-8">     
                                <Link to="/"><i className="ri-star-line"></i></Link>                                                                  
                            </button>
                            <button type="button" className="e-btn-icon">
                               <Link to="/login"><i className="ri-reply-line"></i></Link>                            
                            </button>

                         

                        </div>
                        <div className="e-d-flex">
                               <p><span className="e-fw-bld">ลงชื่อเข้าใช้งาน</span></p>
                        </div>
                        </div>
                            <div className="e-card__body e-d-flex e-fd-column e-justify-between">
                                <div className="ease-inbox-email-reply">
                                    <form className="e-form" onSubmit={submitHandler}>

                                        <div className="e-form__group e-d-flex e-align-center e-pd-l-20">   
                                            
                                            <label className="e-form__input e-pd-l-10">
                                                Email:
                                             <input type="email" placeholder='Enter your email' className="e-form__input e-pd-l-10  e-tt-none"  value={email} onChange={(e) => setEemail(e.target.value)}/>
                                            </label>   
                                        </div>

                                        <div className="e-form__group e-d-flex e-align-center e-pd-l-20">       
                                            <label className="e-form__input e-pd-l-10">
                                                Password:
                                              <input type="password" placeholder='Enter your password' className="e-form__input e-pd-l-10  e-tt-none"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            </label>  
                                        </div>

                                        <div className="e-form__group e-d-flex e-align-center e-pd-l-20">       
                                            <label>
                                              <span className="e-flex-auto e-mg-r-10">Remember:</span>
                                                                                         <input type="checkbox" className="e-form__input e-pd-l-10  e-tt-none"  onChange={(e) => setIsChecked(e.target.checked)}/>     
                                            </label>
                                                                                                                                      
                                        </div>

                                        <div className="e-form__group e-d-flex e-justify-between e-align-center e-pd-l-20 e-pd-8">
                                            <div className="e-d-flex">
                                            <button type="submit" className="e-btn e-btn-sm">Submit</button>
 
                                            </div>
                                            <p>
                                            <span className="line">
                                                <Link to="/signup">ลงทะเบียน</Link>
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
 
        </>
      )
}

export default LogIn

