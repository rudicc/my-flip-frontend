import { Fragment, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { clearstate, decrement, increment } from '../../store/features/progress_checkout_stateSlice';
import CheckCartList from './CheckCartList';
import CheckCartList2 from './CheckCartList2';
import CustomerAddress from './CustomerAddress';
import CheckPayment from './CheckPayment';
import CheckInvoice from './CheckInvoice';
import CheckOutSuccess from './CheckOutSuccess';
import { fetchOrders_ProductsCustomers } from '../../store/features/orders_productsBySlice';
import imgQr1 from '../assets/images/qr1/qtpkj1.png';
import imgQr2 from '../assets/images/qr2/qtp2.png';


const CheckProgressState =({ keyid }) =>{
    //debugger 
    const dispatch = useAppDispatch();
    const valuestate = useAppSelector((state) => state.progress_state.valuestate)
    //const dataorpc = useAppSelector((state) => state.orders_productscutomers.orders_products_cutomers)

    const [username, setUserName] = useState('') 
    const [usermail, setUserMail] = useState('') 
    const [userId, setUserId] = useState(0) 

    //img qrpayment 

    const [dataqr, setDataQr] = useState('') 

    //List page 
    const [cart, setCart] = useState('')
    const CloseCart = () => {  
        setCart(null)
    }
    // const [cart2, setCart2] = useState('')
    // const CloseCart2 = () => {  
    //     setCart2(null)
    // }

    const [showlist0, setShowList0] = useState(true)
    const Closelist0 = () => {  
        setShowList0(true)
    }

    const [showlist1, setShowList1] = useState(true)
    const Closelist1 = () => {  
        setShowList1(true)
    }

    const [showlist2, setShowList2] = useState(true)
    const Closelist2 = () => {  
        setShowList2(true)
    }

    const [showlist3, setShowList3] = useState(true)
    const Closelist3 = () => {  
        setShowList3(true)
    }

    const [showlist4, setShowList4] = useState(true)
    const Closelist4 = () => {  
        setShowList4(true)
    }


    //var state = 0;
    var stateMax = 4;
    const [vstate , setVState] = useState(0)     
    const [addwidth , setAddwidth] = useState<string>('')

    //state focus 
    const SlidePage =(value)=>{
        //debugger
        try{
            switch(value){
                case 0:
                    setShowList0(false)
                    Closelist1()
                    Closelist2()
                    Closelist3()
                    Closelist4()
                    break;
                    case 1:
                        setShowList1(false)
                        Closelist0()
                        Closelist2()
                        Closelist3()
                        Closelist4()  
                                             
                        break;
                        case 2:
                            setShowList2(false)
                            Closelist1()
                            Closelist0()
                            Closelist3()
                            Closelist4()                            
                            break;
                            case 3:
                                setShowList3(false)
                                Closelist1()
                                Closelist2()
                                Closelist0()
                                Closelist4()                                
                                break;       
                                case 4:
                                    setShowList4(false)
                                    Closelist1()
                                    Closelist2()
                                    Closelist3()
                                    Closelist0()                                    
                                    break;                                                                                                 
                    default:
                        break;
            }
          
        }catch(error)
        {

        }
        return 0
    }
    const onNext =()=>{
        debugger     
              
        var state:number = valuestate
        // Disables 'next' button if end of steps
        if (state == 4) {
            //$("#next").addClass("disabled");
            document.getElementById("next")?.classList.add("disabled") 
            return
        }

        if(state === undefined || state === 0){
            state =0
        }
        if (state < stateMax) {
         // next();
          console.log('Next:' + state)
    
          state += 1; 
          setVState(state)
          dispatch(increment(state))
    
          // Enables 'back' button if disabled
          //$("#back").removeClass("disabled");
          document.getElementById("back")?.classList.remove("disabled")   
    
          // Adds class to make nodes green
          // $(".nConfirm" + state).each(function () {
          //   $(this).addClass("done");
          // });
          var n: string = "n" + state
          var m: string = "m" + state
          var t: string = "t" + state
          document.getElementById(n)?.classList.add("done")
          document.getElementById(m)?.classList.add("done")
          document.getElementById(t)?.classList.add("done")
      
    
          // Progress bar animation
          var pBar = (state / stateMax) * 100;
          //$(".pBar").css("width", `${pBar}%`);
          //document.querySelector(".pBar")?.cl.apply("width:", `${pBar}%`)
          setAddwidth(`${pBar}%`)
    
      
          SlidePage(state)

        }else{
            dispatch(clearstate(0))
        }
      }   
      
      const onBack =()=>{
    
        //debugger
        var state:number = valuestate
        if(state === undefined){
            state =0
        }
        if (state > 0) {
          //back();
          console.log('Back:' + state)
          // Enables 'next' button if disabled
          document.getElementById("next")?.classList.remove("disabled")      
          //$("#next").removeClass("disabled");
      
          // removes class that makes nodes green
          var n: string = "n" + state
          var m: string = "m" + state
          var t: string = "t" + state
          document.getElementById(n)?.classList.remove("done")
          document.getElementById(m)?.classList.remove("done")
          document.getElementById(t)?.classList.remove("done")
    
          // $(".nConfirm" + state).each(function () {
          //   $(this).removeClass("done");
          // });
      
           state -= 1; //state - 1;
           setVState(state)
           dispatch(decrement(state))

          // Progress bar animation
          var pBar = (state / stateMax) * 100;
          //$(".pBar").css("width", `${pBar}%`);
          //document.querySelector(".pBar")?.append("width", `${pBar}%`)
          setAddwidth(`${pBar}%`)
          // Disables 'back' button if end of steps
          if (state == 0) {
            //$("#back").addClass("disabled");
            document.getElementById("back")?.classList.add("disabled")   
    
          }

          SlidePage(state)
        }else{
            dispatch(clearstate(0))
        }
      }  

      useEffect(() =>{
        //      
        var state:number = valuestate
        if(state === undefined || state === 0){
            state =0
            setShowList0(false)
        } 
        debugger 

        let str:string = keyid
        setCart(str)


        if(str ==="1"){
            setDataQr(imgQr1)            
        }else{
            setDataQr(imgQr2)
        }

 
      })
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
        if(localStorage.getItem("orderid") != null){
            var vorderid = localStorage.getItem("orderid")?.toString()
            setorders_id(vorderid)
        } 
      
                try{
                    //get data 
                    debugger
                    const jdataorders = JSON.stringify({
                        orders_id: orders_id,
                        customers_id: userId,
                    })
                    if(userId > 0 && orders_id != ''){
                        dispatch(fetchOrders_ProductsCustomers(jdataorders)) 
                    }
             
                }catch{

                }
      }) 

  return (<>
    <div className='details'> 

        <div className="ease-communication-overview e-pd-y-20">
            <div className="e-flex-md-12">
                <div className="e-card ease-communication">
                    <div className="e-card__header">
                        <div className="e-d-flex e-align-center">

                            <Fragment>  
                                            
                                <div className='progresscheckouts'>
                                
                                
                                    <div className="mainWrapper">
                                        <div className="statusBar">
                                            <span className="pBar" style={{width:addwidth}}></span>
                                            <div className="node n0 done nConfirm0">
                                                <div className="main done m0 done nConfirm0"></div>
                                                <span className="text t0 done nConfirm0">สินค้า</span>
                                            </div>
                                            <div className="node n1 nConfirm1" id='n1'>
                                                <div className="main m1 nConfirm1" id='m1'></div>
                                                <span className="text t1 nConfirm1" id='t1'>ที่อยู่</span>
                                            </div>
                                            <div className="node n2 nConfirm2" id='n2'>
                                                <div className="main m2 nConfirm2" id='m2'></div>
                                                <span className="text t2 nConfirm2" id='t2'>ใบแจ้งรายการสินค้า</span>
                                            </div>
                                            <div className="node n3 nConfirm3" id='n3'>
                                                <div className="main m3 nConfirm3" id='m3'></div>
                                                <span className="text t3 nConfirm3" id='t3'>ชำระเงิน</span>
                                            </div>
                                            <div className="node n4 nConfirm4" id='n4'>
                                                <div className="main m4 nConfirm4" id='m4'></div>
                                                <span className="text t4 nConfirm4" id='t4'>เสร็จสมบูรณ์</span>
                                            </div>
                                        </div>
                                
                                        <div className="buttonHolder">
                                            <div className="button b-back disabled" id="back" onClick={() => onBack()}>ย้อนกลับ</div>
                                              <input type="number" value={vstate} id='vstate' hidden={true}/>
                                            <div className="button b-next" aria-disabled={false} id="next" onClick={() => onNext()} >ถัดไป</div>
                                        </div>
                                    </div>
                                    <div className="made">
                                        <p className="credit">สร้างรายการสั่งซื้อสินค้า</p>
                                    </div>
                                
                                </div>
                            </Fragment>       
                        </div>
                    </div>     
                </div>
            </div>

            {/* รายการสินค้า */}
                <div id='d0' hidden={showlist0} className="e-card ease-communication">
                    <div className="e-card__body e-pd-0">                                   
                        {cart === "1"?(
                            <Fragment>
                                <CheckCartList/> 
                            </Fragment>    
                        ):(

                            <Fragment>
                                <CheckCartList2/> 
                            </Fragment>  
                        )}

                    </div>
                </div>

            {/* ที่อยู่จัดส่ง */}
                <div id='d1'  hidden={showlist1} className="e-card ease-communication">
                    <Fragment>

                        <CustomerAddress />          
                                
                    </Fragment>    
                </div>

        
                <div id='d2'  hidden={showlist2} className="e-card ease-communication"> 
        
                            <Fragment>
                
                                <CheckInvoice imgqr={dataqr} />
                                                           
                            </Fragment>    
                </div>

                <div id='d3'  hidden={showlist3} className="e-card ease-communication">
                        <Fragment>
                        
                            <CheckPayment imgqr={dataqr} />
                                    
                        </Fragment>
                </div>

                <div id='d4'  hidden={showlist4} className="e-card ease-communication">
                            <Fragment>
                                 
                                 <CheckOutSuccess />
                                                   
                            </Fragment>
                </div>




        </div>

    </div>  

  </>)
}

export default CheckProgressState


