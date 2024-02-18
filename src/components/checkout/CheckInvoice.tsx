import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { fetchOrders_ProductsCustomers } from '../../store/features/orders_productsBySlice'
import axios from '../axios'
import logo  from  "../assets/images/logo.jpg"
import { formatCurrencyTHD } from '../../functions/Utility'

const CheckInvoice =( { imgqr }) =>{
  //debugger
  const data = useAppSelector((state) => state.orders_productscutomers.orders_products_cutomers)
 

  //address
  const dataaddress = useAppSelector((state) => state.address_booktbl.address_booktbl);
    const datacounty = useAppSelector((state) => state.countriestbl.countriestbl);
     
    const [ierror, setiError] = useState('');

    const [ address_book_id, setaddress_book_id ] = useState<number>(0) 

    //const [ customers_id, setcustomers_id ] = useState<number>(0) 

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

    ///
  const [username, setUserName] = useState('') 
  const [usermail, setUserMail] = useState('') 
  const [userId, setUserId] = useState(0)
  const [ orders_id, setorders_id ] = useState<string>('')  
  useEffect(() =>{ 
    if(localStorage.getItem("tmbuser") !== null){
     const tmbuser =  localStorage.getItem("tmbuser")?.split(' ')         
       setUserName(tmbuser[0])
       setUserId(tmbuser[1])
       setUserMail(tmbuser[2])
    }else{          
       setUserName('')
       setUserId(0)
       setUserMail('')
    }
    // if(localStorage.getItem("orderid") != null){
    //     var vorderid = localStorage.getItem("orderid")?.toString()
    //     setorders_id(vorderid)
    // } 

  }) 
  

  const [price1, setPrice1] = useState(0)
  const [qty1, setQty1] = useState(0)

  const [dataprice, setDataPrice] = useState(0)
  const [dataqty, setDataQty] = useState(0)
  //const [orders_id, setorders_id] = useState('')
  const [customers_id, setcustomers_id] = useState('')
  //const [products_id, setproducts_id] = useState(0)

  const [orders_date_added, setorders_date_added] = useState('')

  const [data_hippiing, setData_hippiing] = useState(0)

  const [ReceiptId, setReceiptID] = useState('')

  const cuturedateTh = (ord) =>{
    debugger
     var list = ord.substring(0,10).split('-')
     let _y:number = parseInt(list[0])
     _y = (_y+543)
     let _m = list[1]
     let _d = list[2]
     setorders_date_added(`${_d}/${_m}/${_y}`)
     setReceiptID(`R${_y}${_m}${_d}-${customers_id}-${orders_id}`)
    return `${_d}/${_m}/${_y}`
  }
  const totals = () => {
    debugger
    let price1 = 0
    let q1 = 0
    let ord =''
    let orderid = ''
    let cusid = ''
    let proid = 0
    if(data.length>0){
      data.map((e, i) => {
        price1 = parseFloat(e.products_price) * e.products_quantity + price1
        q1 = parseFloat(e.products_quantity) + q1  
        ord = e.orders_date_added      
        orderid = e.orders_id
        cusid = e.customers_id
        //proid = e.products_id


      })   
         
       
    }
    setcustomers_id(cusid)
    setorders_id(`${orderid}`)
    //setproducts_id(proid)
    setorders_date_added(ord)
    cuturedateTh(ord)
    setPrice1(price1)
    setQty1(q1)

    setDataQty(qty1)
    setDataPrice(price1)
 
   }

  useEffect(() => {
    totals()
 }, [totals])

 const [countries_name, setcountries_name]=useState('')
 useEffect(() =>{
    if(datacounty.length > 0){
      if(dataaddress.length > 0){
        let cname = datacounty[dataaddress[0].entry_country_id].countries_name
        setcountries_name(cname)
      }else{
        setcountries_name('')
      }       
    }else{
      setcountries_name('')
    }
 })
 const Address =() =>{
   try{
      if(dataaddress.length >0){
        dataaddress.map((e, i) => {
          setDatacustomer(e)
        })
      }
   }catch(error){
    console.log(error)
   }
 }
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

  
}

 useEffect(()=>{
    Address()
 })
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
        
            <div className="e-flex-md-12">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">ใบแจ้งรายการสินค้า</span>
  
                  {/* <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text">ยืนยัน</span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div> */}
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  
                    {/* <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>Inbox</span>
                      <a href="inbox.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                    </div> */}
{data.length >0?(
 

<div className='report'>
  <div className='details'>
    <section className="ease-communication-overview e-pd-y-20">

        <div className= "invoice-wrapper" id = "print-area">
            <div className= "invoice">
                <div className= "invoice-container">
                    <div className= "invoice-head">
                        <div className= "invoice-head-top">
                            <div className= "invoice-head-top-left text-start">
                                <img src={logo} alt='logo'/>
                            </div>
                            <div className= "invoice-head-top-right text-end">
                                <h3>ใบแจ้งหนี้</h3>
                            </div>
                        </div>
                        <div className= "hr"></div>
                        <div className= "invoice-head-middle">
                            <div className= "invoice-head-middle-left text-start">
                                <p><span className= "text-bold">วันที่</span>: {orders_date_added}</p>
                            </div>
                            <div className= "invoice-head-middle-right text-end">
                                <p> <span className="text-bold">ใบแจ้งหนี้ No:</span>{ReceiptId}</p>
                            </div>
                        </div>
                        <div className= "hr"></div>
                        <div className= "invoice-head-bottom">
                            <div className= "invoice-head-bottom-left">
                                <ul>
                                    <li className= 'text-bold'>Invoiced To:</li>
                                    <li>{entry_firstname} {entry_lastname}</li>
                                    <li>{entry_street_address} {entry_suburb} {entry_city} </li>
                                    <li>จังหวัด {entry_state} </li>
                                    <li>ไปรษณีย์ {countries_name}</li>
                                </ul>
                            </div>
                            <div className= "invoice-head-bottom-right">
                                <ul className= "text-end">
                                    <li className= 'text-bold'>Pay To:</li>
                                    <li>สำนักพิมพ์คณะรัฐมนตรีและราชกิจจานุเบกษา</li>
                                    <li>สี่แยกซังฮี้ ถนนสามเสน แขวงวชิรพยาบาล เขตดุสิต</li>
                                    <li>กรุงเทพมหานคร 10300</li>
                                    <li>Email : saraban@cgpo.go.th</li>
                                    <li>Email : Support@cgpo.go.th</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className= "overflow-view">
                        <div className= "invoice-body">
                            <table>
                                <thead>
                                    <tr>
                                        <td className= "text-bold">ประเภทหนังสือ</td>
                                        <td className= "text-bold">รายการสินค้า</td>
                                        <td className= "text-bold">ราคา</td>
                                        <td className= "text-bold">หน่วย</td>
                                        <td className= "text-bold">รวมเงิน</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((i) =>(
                                        <tr key={i.products_id}>
                                            <td>{i.products_model}</td>
                                            <td>{i.products_name}</td>
                                            <td>฿{formatCurrencyTHD(i.products_price).replace("THD","")}</td>
                                            <td>{i.products_quantity}</td>
                                            <td className= "text-end">฿{formatCurrencyTHD(i.products_price*i.products_quantity).replace("THD","")}</td>
                                        </tr>                                        
                                    ))}

                                    
                                </tbody>
                            </table>
                            <div className= "invoice-body-bottom">
                                <div className= "invoice-body-info-item border-bottom">
                                    <div className= "info-item-td text-end text-bold">ราคารวมทั้งหมด (บาท):</div>
                                    <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice).replace("THD","")}</div>
                                </div>
                                <div className= "invoice-body-info-item border-bottom">
                                    <div className= "info-item-td text-end text-bold">ราคาก่อนรวมภาษีมูลค่าเพิ่ม (บาท):</div>
                                    <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice).replace("THD","")}</div>
                                </div>
                                <div className= "invoice-body-info-item border-bottom">
                                    <div className= "info-item-td text-end text-bold">ภาษีมูลค่าเพิ่ม (บาท):</div>
                                    <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice * 0.07).replace("THD","")}</div>
                                </div>
                                <div className= "invoice-body-info-item border-bottom">
                                    <div className= "info-item-td text-end text-bold">ค่าขนส่ง (บาท):</div>
                                    <div className= "info-item-td text-end">฿{formatCurrencyTHD(data_hippiing).replace("THD","")}</div>
                                </div>                                
                                <div className= "invoice-body-info-item">
                                    <div className= "info-item-td text-end text-bold">รวมทั้งสิ้นที่ต้องชำระ (บาท):</div>
                                    <div className= "info-item-td text-end">฿{formatCurrencyTHD(((dataprice * 0.07) + dataprice + data_hippiing)).replace("THD","")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "invoice-foot text-center">
                        <p><span className= "text-bold text-center">NOTE:&nbsp;</span>กรุณาพิมพ์ใบแจ้งเพื่อเข้าชำระรายการที่ช่องชำระเงินให้ถูกต้อง.</p>

                        <div className= "invoice-btns">
                            <button type = "button" className= "invoice-btn" 
                            //onClick={() =>(printInvoice)}
                            >
                                <span>
                                    <i className="fa-solid fa-print"></i>
                                </span>
                                <span>Print</span>
                            </button>
                            <button type = "button" className= "invoice-btn">
                                <span>
                                    <i className="fa-solid fa-download"></i>
                                </span>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  </div>

</div>

  
 
):("")}  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </section>
      </div>    
      
    </>
    )
}

export default CheckInvoice

