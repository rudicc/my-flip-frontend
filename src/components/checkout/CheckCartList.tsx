import { BaseSyntheticEvent, Fragment, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import cartimg from "../assets/images/cart.png"
import { delCart } from '../../store/features/cartSlice';
import { UrlServer } from '../services'
import axios from "../../components/axios"

const CheckCartList = () =>{
    //debugger
    const getdata = useAppSelector((state) => state.cart.carts);
    //console.log(getdata)
     
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])

    const [username, setUserName] = useState('') 
    const [usermail, setUserMail] = useState('') 
    const [userId, setUserId] = useState(0) 
    const [ad,setad] = useState(false)
    const [fin,setfin] = useState(false)
    const onSetDate =(e) =>{
        setad(e)
        setfin(e)
    }

    window.document.getElementById("Dadd")?.addEventListener("onclick", () =>{
         alert('n')
    })

//new data
    const handledata = () =>{
        //หนังสือราชกิจจานุเบกษา
        const da1 = getdata.filter((item) => item.items.parent_id === 1)
        setData1(da1)
        
        const da2 = getdata.filter((item) => item.items.parent_id !== 1)
        setData2(da2)
    }

//delete cart
    const dispatch = useAppDispatch()
    const delet = ( id ) => {
        //debugger
        dispatch(delCart(id))
    }

//total prcie
     const [price1, setPrice1] = useState(0)
     const [price2, setPrice2] = useState(0)
//total q
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
           
          setUserMail(tmbuser[0])
          setUserId(tmbuser[1])          
          setUserName(tmbuser[2])
          
        }else{
           
           setUserName('')
           setUserId(0)
           setUserMail('')
        }
        //set data
        //     debugger
        handledata()       
      }) 



    const [ customers_id, setcustomers_id ] = useState<number>(0) 
    const [ customers_name, setcustomers_name ] = useState<string>('') 
    const [ customers_email_address, setcustomers_email_address ] = useState<string>('') 
    const [ billing_img_receipt, setbilling_img_receipt ] = useState<string>('') 
    const [ orders_status, setorders_status ] = useState<number>(0) 
    const [ orders_date_added, setorders_date_added ] = useState<string>('') 
    const [ orders_date_finished, setorders_date_finished ] = useState<string>('') 
    const [ last_modified, setlast_modified ] = useState<string>('') 
    const [ date_purchased, setdate_purchased ] = useState<string>('') 
    const [ update_user, setupdate_user ] = useState<string>('') 

    //order products

      const [ orders_products_id, setorders_products_id ] = useState<number>(0) 

      const [ orders_id, setorders_id ] = useState<number>(0)   

      const [ products_id, setproducts_id ] = useState<number>(0) 
  
      const [ products_model, setproducts_model ] = useState<string>('') 
  
      const [ products_name, setproducts_name ] = useState<string>('')  //not null
  
      const [ products_price, setproducts_price ] = useState<string>('')  //not null
  
      const [ final_price, setfinal_price ] = useState<string>('') //not null
  
      const [ products_tax, setproducts_tax ] = useState<string>('') //not null
  
      const [ products_quantity, setproducts_quantity ] = useState<number>(0) //not null


          //    orders_id
    //   ,customers_id
    //   ,customers_name
    //   ,customers_email_address
    //   ,billing_img_receipt
    //   ,orders_status
    //   ,orders_date_added
    //   ,orders_date_finished
    //   ,last_modified
    //   ,date_purchased
    //   ,update_user
    const SetDateAdded =(e:BaseSyntheticEvent)=>{
        debugger
        try{            
            setorders_date_added(e)
            setorders_date_finished(e)

        }catch(error){
            console.log(error)
        }
        onSetDate(false)
    }

    const SetDatefinshed =(e:BaseSyntheticEvent)=>{
        debugger
        try{            
            setorders_date_finished(e)

        }catch(error){
            console.log(error)
        }
        onSetDate(false)
    }

    const handelSaveOrder = async()=>{
        debugger  
        try{
            const jdata = JSON.stringify({             
                orders_id: 0,
                customers_id: userId,
                customers_name: username,
                customers_email_address: usermail,
                billing_img_receipt: '',
                orders_status: 1,
                orders_date_added: orders_date_added,
                orders_date_finished: orders_date_finished,
                last_modified: '',
                date_purchased: '',
                update_user: username                 
            })
            const res = await axios.post('/orders_basket/create/', jdata,{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            //const da = res.data.json()    
     
            if(res.data?.success){
               localStorage.setItem("orderid",res.data?.fileId)
               setorders_id(res.data?.fileId)
               console.log(res.data?.fileId)

                try{
                    //
                    data1.map((e) =>(
                        
                        onSaveOrdersProducts(e , res.data?.fileId )
                    ))

                }catch(error){
                    console.log(error)
                    alert('กรุณาตรวจสอบวันที่สั่งซื้อให้ถูกต้อง  !!')
                    return
                }
                alert('บันทึกรายการเรียบร้อยแล้ว !!')
            }else{
                console.log(res.data?.message)
                alert('กรุณาตรวจสอบวันที่สั่งซื้อให้ถูกต้อง !!')
                localStorage.removeItem("orderid")
            }            
        }catch(error){
            console.log(error)
            alert('กรุณาตรวจสอบวันที่สั่งซื้อให้ถูกต้อง !!')
        }
    }  
    
    const onSaveOrdersProducts = async (e:BaseSyntheticEvent , orders_id:number) =>{
        debugger
        try{
            let sumprice = parseFloat(e.items.price) * e.qty
            const jdata = JSON.stringify({                                               
                orders_products_id: 0,
                orders_id: orders_id,
                products_id: e.items.id,
                products_model: e.items.title,
                products_name: e.items.model,
                products_price: e.items.price,
                final_price: sumprice,
                products_tax: 0,
                products_quantity: e.qty,            
            });
            const res = await axios.post('/orders_products/create/', jdata,{
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        }catch(error){
            console.log(error)
        }
    }
  return (<>
   
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
        
            <div className="e-flex-md-12">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">ตระกร้าสินค้า</span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ">วันที่รายการสั่งซื้อ: {orders_date_added}  <i className="ri-refresh-line" onClick={() =>(onSetDate(true))}></i></span>                    
                    {ad?(
                        <div className="e-mg-l-10">
                        <input type="date" value={orders_date_added} onChange={(e) => (SetDateAdded(e.target.value))} />
                        </div>
                    ):("")}

                  </div>

                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ">วันที่สั่งซื้อเสร็จสมบรูณ์: {orders_date_finished} <i className="ri-refresh-line" onClick={() =>(onSetDate(true))}></i></span>
                    {fin?(
                        <div className="e-mg-l-10" id='Dfin'>
                        <input type="date" value={orders_date_finished} onChange={(e) => (SetDatefinshed(e.target.value))} />
                        </div>
                    ):("")}
                  </div>

 
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12">ยืนยันสร้างรายการสั่งซื้อสินค้า</span>


                    <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">
                        <button type="button" onClick={() =>(handelSaveOrder())} 
                            className="e-btn-icon  ">
                            <i className="ri-draft-line"></i>
                        </button>
                
                    </div>
                  </div>

                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  
                    {data1.length ?(
                        <Fragment>
                               {data1.map((i) => ( 
                                <div className="e-tbl__row" key={i.items.id}>
                
                                    <div className="e-tbl__data e-pd-x-20">

                                    <div className="ease-communication-content">

                                        <div className="e-d-flex-lg">

                                        <div className="left-side e-d-flex e-mg-r-10-lg">

                                            <div className="e-mg-r-10">
                                            <div className="e-avat e-avat-30"><img src={UrlServer +"/"+ i.items.cover} alt=""
                                                className="e-avat__img"/></div>
                                            </div>

                                            <div className="ease-communication-details">
                                            <span className="e-h5 e-d-block">รหัสสินค้า:{i.items.id}</span>                                                                                                                                                                                                                             
                                             <p className="e-fs-12">ประเภท: {i.items.parent_name.slice(0,20) }</p>
                                            </div>

                                        </div>

                                        <div className="right-side">
                                            <div className="ease-communication-details">
                                            <span className="e-h5 e-d-block">รายละเอียดสินค้า</span>
                                                <p className="e-fs-12">{i.items.title} </p>
                                            </div>
                                            <div className="ease-communication-details">
                                                <span className="e-h5 e-d-block"></span>
                                                  <p className="e-fs-12">จำนวน: {i.qty} ชุด</p>
                                                  <p className="e-fs-12"> ราคา: {i.items.price} บาท</p>
                                            </div>
                                        </div>

                                        </div>


                                        <span className="ease-meta e-fs-12 ease-faded-text">..</span>

                                    </div>

                                    </div>

                                </div>

                               ))}  
                        </Fragment>
                    ) : (        
                        <Fragment>
                            <div className='empty'>        
                                <p>ไม่พบรายการในตระกร้า!</p>
                                <img src={cartimg} alt='' width={10} />
                            </div>                            
                        </Fragment>        
                    )}   
 
                    <div className='details_total'>
                        <h4>รวมราคา : <span className=' e-fs-16 e-bdg e-bdg-danger'>฿{price1}</span> บาท</h4>
                        <h4>รวมสินค้า : <span className=' e-fs-16 e-bdg e-bdg-danger'>{qty1}</span> ชุด</h4>
                    </div>
   
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </section>
      </div>    
      
   
  </>)
}

export default CheckCartList
