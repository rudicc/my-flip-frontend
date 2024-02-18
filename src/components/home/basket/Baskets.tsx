import { useEffect, useState } from 'react'
import { useFetcher, useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from '../../../store/hooks'
import { formatCurrencyTHD } from '../../../functions/Utility'
import logo  from  "../../assets/images/logo.jpg"


const Baskets = () => {
    const [data, setData] = useState([])
    const [dataprice, setDataPrice] = useState(0)
    const [dataqty, setDataQty] = useState(0)
    //data_hippiing
    const [data_hippiing, setData_hippiing] = useState(0)

    const { id } = useParams()

    const getdata = useAppSelector((state) => state.cart.carts);
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

    
 // total prcie
 const [price1, setPrice1] = useState(0)
 const [price2, setPrice2] = useState(0)
 // total q
 const [qty1, setQty1] = useState(0)
 const [qty2, setQty2] = useState(0)

 //console.log(price)

 const totals = () => {
  debugger
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

useEffect(()=>{
    handledata()
})

useEffect(() =>{
    if(id === "a1"){
        setData(data1)
        setDataQty(qty1)
        setDataPrice(price1)
    }else{
        //b1
        setData(data2)
        setDataQty(qty2)
        setDataPrice(price2)
    }
})
const printInvoice =() =>{
    return true
}
  return (
    <>
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
                                    <p><span className= "text-bold">วันที่</span>: {
                                    //Date.now().toString()
                                    }</p>
                                </div>
                                <div className= "invoice-head-middle-right text-end">
                                    <p> <span className="text-bold">ใบแจ้งหนี้ No:</span>{
                                    16789
                                    }</p>
                                </div>
                            </div>
                            <div className= "hr"></div>
                            <div className= "invoice-head-bottom">
                                <div className= "invoice-head-bottom-left">
                                    <ul>
                                        <li className= 'text-bold'>Invoiced To:</li>
                                        <li>Smith Rhodes</li>
                                        <li>15 Hodges Mews, High Wycombe</li>
                                        <li>HP12 3JL</li>
                                        <li>United Kingdom</li>
                                    </ul>
                                </div>
                                <div className= "invoice-head-bottom-right">
                                    <ul className= "text-end">
                                        <li className= 'text-bold'>Pay To:</li>
                                        <li>Koice Inc.</li>
                                        <li>2705 N. Enterprise</li>
                                        <li>Orange, CA 89438</li>
                                        <li>contact@koiceinc.com</li>
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
                                            <tr key={i.items.id}>
                                                <td>{i.items.parent_name}</td>
                                                <td>{i.items.category} - {i.items.model}</td>
                                                <td>฿{formatCurrencyTHD(i.items.price)}</td>
                                                <td>{i.qty}</td>
                                                <td className= "text-end">฿{formatCurrencyTHD(i.items.price*i.qty)}</td>
                                            </tr>                                        
                                        ))}

                                        
                                    </tbody>
                                </table>
                                <div className= "invoice-body-bottom">
                                    <div className= "invoice-body-info-item border-bottom">
                                        <div className= "info-item-td text-end text-bold">ราคารวมทั้งหมด (บาท):</div>
                                        <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice)}</div>
                                    </div>
                                    <div className= "invoice-body-info-item border-bottom">
                                        <div className= "info-item-td text-end text-bold">ราคาก่อนรวมภาษีมูลค่าเพิ่ม (บาท):</div>
                                        <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice)}</div>
                                    </div>
                                    <div className= "invoice-body-info-item border-bottom">
                                        <div className= "info-item-td text-end text-bold">ภาษีมูลค่าเพิ่ม (บาท):</div>
                                        <div className= "info-item-td text-end">฿{formatCurrencyTHD(dataprice * 0.07)}</div>
                                    </div>
                                    <div className= "invoice-body-info-item border-bottom">
                                        <div className= "info-item-td text-end text-bold">ค่าขนส่ง (บาท):</div>
                                        <div className= "info-item-td text-end">฿{formatCurrencyTHD(data_hippiing)}</div>
                                    </div>                                
                                    <div className= "invoice-body-info-item">
                                        <div className= "info-item-td text-end text-bold">รวมทั้งสิ้นที่ต้องชำระ (บาท):</div>
                                        <div className= "info-item-td text-end">฿{formatCurrencyTHD(((dataprice * 0.07) + dataprice + data_hippiing))}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className= "invoice-foot text-center">
                            <p><span className= "text-bold text-center">NOTE:&nbsp;</span>This is computer generated receipt and does not require physical signature.</p>

                            <div className= "invoice-btns">
                                <button type = "button" className= "invoice-btn" onClick={() =>(printInvoice)}>
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


    </>
  )
}

export default Baskets
