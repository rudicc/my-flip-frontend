import { BaseSyntheticEvent, useEffect, useState } from 'react'

import logo from "../assets/images/logo.jpg"
import cartimg from "../assets/images/cart.png"
import { BiAbacus, BiArrowFromLeft, BiSearch } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete, AiFillBoxPlot, AiOutlineInfo} from "react-icons/ai"
import { navlist } from "../assets/data/data"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { totalItemQtySelector ,totalItemPriceSelector , delCart} from '../../store/features/cartSlice'
import { UrlServer } from '../services'
import Menubar from '../home/Master/Menubar'

import {PayPalButtons} from "@paypal/react-paypal-js";
import { increment } from '../../store/features/progress_checkout_stateSlice'

//import CookieService from '../services/CookieService'

 

const Header = () => {

  // const totalItemQty = useAppSelector(totalItemQtySelector);
  // const totalPrice = useAppSelector(totalItemPriceSelector);
  //const [password, setPassword] = useState('');  
  // navbar
  const [mobile, setMobile] = useState(false)

    //user open login sing
    const [userList, setUserList] = useState(false)
    const handleUserClose = () => {
      setUserList(false)
    }

  // cartopen and close
  const [cartList, setCartList] = useState(false)
  const handleClose = () => {
    //dispatch(increment(1))
    setCartList(null)
  }

  const [cartList2, setCartList2] = useState(false)
  const handleClose2 = () => {
    setCartList2(null)
  }


  const [usersQuantity, setusersQuantity] = useState(0)
  const [username, setUserName] = useState('')


  // scroll navbar
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header") //.classList.toggle("active", this.window.scrollY > 100)
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  
  const getdata = useAppSelector((state) => state.cart.carts);
  //console.log(getdata)
   
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

//new data
const handledata = () =>{
//หนังสือราชกิจจานุเบกษา
  const da1 = getdata.filter((item) => item.items.parent_id === 1)
  setData1(da1)

  const da2 = getdata.filter((item) => item.items.parent_id !== 1)
  setData2(da2)
}
 
  // delete cart
  const dispatch = useAppDispatch()
  const delet = ( id ) => {
    //debugger
    dispatch(delCart(id))
  }
 
 // total prcie
 const [price1, setPrice1] = useState(0)
 const [price2, setPrice2] = useState(0)
 // total q
 const [qty1, setQty1] = useState(0)
 const [qty2, setQty2] = useState(0)

 //console.log(price)

 const totals = () => {
  //debugger
  let price1 = 0
  let q1 = 0
  data1.map((e, i) => {
    price1 = parseFloat(e.items.price) * e.qty + price1
    q1 = parseFloat(e.qty) + q1
  })
  setPrice1(price1)
  setQty1(q1)

  let price2 = 0
  let q2 = 0
  data2.map((e, i) => {
    price2 = parseFloat(e.items.price) * e.qty + price2
    q2 = parseFloat(e.qty) + q2
  })
  setPrice2(price2)
  setQty2(q2)
 }

 useEffect(() => {
   totals()


 }, [totals])

 useEffect(() =>{ 
   if(localStorage.getItem("tmbuser") !== null){
    const tmbuser =  localStorage.getItem("tmbuser")?.split(' ') 
      setusersQuantity(1)
      setUserName(tmbuser[2])
   }else{
      setusersQuantity(0)
      setUserName('')
   }
   //set data
   //debugger
   handledata()
 })
 
 return (
    <>

      <header className='header'>
        <div className='container'>
   
          <nav>
            <div className='toggle'>
              <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}</button>
            </div>
            <div className='left'>
                <Link to='/'>
                    {/*<img src={logo} alt='logo' width={5}  /> 
                    <p>GCPO</p> */}
                  <span>CGPO SHOP</span>
                </Link>                            
            </div>
            <div className='center'>
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className='right'>
            <div className='right_search'>
              <input type='text' placeholder='Search Products...' />
              <BiSearch className='serachIcon heIcon' />
            </div>

{/* //check User */}

            <div className='right_user' onClick={() => setUserList(!userList)} >
                <RiUser3Line className='userIcon heIcon' />
                <div className={userList ? "showBlogUser" : "hideUser"}>
                 
                  {usersQuantity ===1 ?(                                  
                    <section className='details'>
                      <div className='details_title'>
                        <div className="dropdown-header e-pd-20">
                          <div className="e-d-flex e-align-center">

                            <div className="user-img e-mg-r-10">
                              <div className="e-avat e-avat-40">
                                <img src={logo} alt="User" className="e-avat__img" />
                              </div>
                            </div>

                            <div className="user-details">
                              <span className="e-fw-bld e-fs-14 e-d-block">{username.slice(0,10)}...</span>
                        
                            </div>

                          </div>

                        </div>
                      </div> 
                      <ul className="dropdown-content">
                        <li className="dropdown-list">
                          <Link to='/myprofile' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                              <i className="ri-user-star-line e-fs-16 e-mg-r-10"></i>
                              <span className="e-fs-14 e-fw-bld">ข้อมูลส่วนตัว</span>
                          </Link> 
                        </li>
{/* 
                        <li className="dropdown-list">
         
                          <Link to='/mysetting' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                              <i className="ri-equalizer-line e-fs-16 e-mg-r-10"></i>
                              <span className="e-fs-14 e-fw-bld">กำหนดค่า</span>
                          </Link>

                        </li> */}

                        <li className="dropdown-list">
 
                          <Link to='/myorders' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                              <i className="ri-task-line e-fs-16 e-mg-r-10"></i>
                              <span className="e-fs-14 e-fw-bld">คำสั่งของฉัน</span>
                          </Link>

                        </li>


                        {
                            usersQuantity ===1 ?(                                 
                              <li className="dropdown-list">
      
                                <Link to='/mystore' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                                    <i className="ri-task-line e-fs-16 e-mg-r-10"></i>
                                    <span className="e-fs-14 e-fw-bld">ร้านค้าของฉัน</span>
                                  
                                </Link>
                              </li>                             
                            ):("")
                        }


                        <hr />
                        <li className="dropdown-list">                           
                          <Link to='/logout' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                              <i className="ri-logout-box-r-line e-mg-r-10"></i>   
                              <span className="e-fs-14 e-fw-bld">ออกจากระบบ</span>
                          </Link>
                        </li>

                      </ul>
                    </section>
                   ):(
                    <section className='details'>
                       <div className='details_title'>
                        <ul className="dropdown-content">
                            <li className="dropdown-list">
                              <Link to='/login' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                                  <i className="ri-user-star-line e-fs-16 e-mg-r-10"></i>
                                  <span className="e-fs-14 e-fw-bld">เข้าสู่ระบบ</span>
                              </Link>                           
                            </li>

                            <li className="dropdown-list">
                              <Link to='/signup' className='dropdown-link e-d-flex e-align-center e-pd-x-20 e-pd-y-10'>
                              <i className="ri-user-star-line e-fs-16 e-mg-r-10"></i>
                              <span className="e-fs-14 e-fw-bld">ลงทะเบียน</span>
                              </Link> 
                            </li>

                          </ul>
                       </div>
                    </section>                    
                  )}
 
                   
               </div>                
                <AiOutlineHeart className='userIcon heIcon' />
            </div>

{/* check cart list */}
            <div className='right_card'>
              <div className='button'>
                <div> 
                    <BsBagCheck className='shop heIcon'  onClick={() => setCartList(!cartList)} >
                     
                    </BsBagCheck><span>({qty1})</span> 
                        <BsBagCheck className='shop heIcon' onClick={() => setCartList2(!cartList2)}  />
                       <span>({qty2})</span>                          
                </div>                                  
              </div>
 

{/* กระเป๋าราชฯ */}
              <div className={cartList ? "showCart" : "hideCart"}>
              {data1.length ? (                  
                  <section className='details'>
                    <div className='details_title'>
                      <h5>รูปภาพ</h5>
                      <p>ชื่อ/ประเภท</p>
                    </div>
                    {data1.map(( e ) => (      
                        
                      <div className='details_content'>
                        <div className='details_content_img'>
                          <Link to={`/cart/${e.items.id}`} onClick={handleClose}>
                            <img src={ UrlServer + "/" +  e.items.cover} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                          <p>
                              {  
                                  e.items.parent_name.slice(0,20) 
                              }...</p>
                            <p>
                              {  
                                  e.items.title.slice(0,20) 
                              }...</p>
                            <p>ราคา : ฿{e.items.price}</p>
                            <p>จำนวน : {e.qty}</p>
                          </div>
                        </div>
                        <div className='details_content_detail_icon'>
                          <i onClick={() => delet(e.items.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                      <div className='details_total'>
                        <h4>รวมราคา : ฿{price1}</h4>
                        <h4>รวมสินค้า : {qty1}</h4>
                      </div>                                              
                    <span>...</span>
                    <div className='details_title'>
                      <p>
                          <button className='e-fs-12 e-bdg e-bdg-success'>
                            
                              <Link to={`/checkout/1`} onClick={handleClose}>
                                  ระบบชำระเงิน
                              </Link>

                          </button>                           
                      </p>
                    </div>                     
                  </section>              
                ) : (
                  <div className='empty'>        
                    <p>ไม่พบรายการในตระกร้า!</p>
                    <img src={cartimg} alt='' />
                  </div>
                )} 
              </div>



{/* กระเป๋าทั่วไป */}

              <div className={cartList2 ? "showCart2" : "hideCart2"}>
              {data2.length ? (                  
                  <section className='details'>
                    <div className='details_title'>
                      <h5>รูปภาพ</h5>
                      <p>ชื่อ/ประเภท</p>
                    </div>
                    {data2.map(( e ) => (      
                        
                      <div className='details_content'>
                        <div className='details_content_img'>
                          <Link to={`/cart/${e.items.id}`} onClick={handleClose2}>
                            <img src={ UrlServer + "/" +  e.items.cover} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                          <p>
                              {  
                                  e.items.parent_name.slice(0,20) 
                              }...</p>
                            <p>
                              {  
                                  e.items.title.slice(0,20) 
                              }...</p>
                            <p>ราคา : ฿{e.items.price}</p>
                            <p>จำนวน : {e.qty}</p>
                          </div>
                        </div>
                        <div className='details_content_detail_icon'>
                          <i onClick={() => delet(e.items.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                      <div className='details_total'>
                        <h4>รวมราคา : ฿{price2}</h4>
                        <h4>รวมสินค้า : {qty2}</h4>
                      </div>                                              
                    <span>...</span>
                    <div className='details_title'>
                      <p>
                          <button className='e-fs-12 e-bdg e-bdg-success'>
                            
                              <Link to={`/checkout/2`} onClick={handleClose2}>
                                  ระบบชำระเงิน
                              </Link>

                          </button>                           
                      </p>
                    </div>                     
                  </section>              
                ) : (
                  <div className='empty'>        
                    <p>ไม่พบรายการในตระกร้า!</p>
                    <img src={cartimg} alt='' />
                  </div>
                )}               
              </div>

            
            </div>  
                      
          </div>

        </div>

     
      </header>
        
    </>
  )
}

export default Header

