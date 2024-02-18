//import React from "react"
import { ImQuotesRight } from "react-icons/im"
//import { customer } from "../../assets/data/data"
import Heading from "../../common/Heading"
import { useAppSelector } from "../../../store/hooks"
import { UrlServer } from "../../services";

 


const Topbook = () => {
  const topbook = useAppSelector((state) => state.topbook.topbooks);
  debugger
  return (
    <>
      <section className='customer'>
        <Heading title='เลือกแผนสั่งซื้อสมัครเป็นสมาชิกราชกิจจานุเบกษาประจำปีล่าสุด' 
        desc='วิธีการสั่งซื้อแบบเป็นสมาชิกที่สามารถติดตามผลการประกาศราชกิจจานุเบกษาตลอดทั้งปีงบประมาณปัจจุบับและไม่พลาดข้อมูลข่าวสารจากระบบเว็บ CGPO-SHOP คอยโต้ตอบข่าวสารให้ท่านทันที' />

        <div className='content'>
          {topbook.map((items) => (
            <div className='card' key={items.categories_id}>   
              <button>
               <img src={UrlServer + '/' + items.categories_image} alt="" className="e-avat e-avat__img" />                 
              </button>
              <p> "{items.parent_name}"</p>
              <h3>{items.categories_detail.slice(0,8)}.</h3>
              <span>{items.categories_detail}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Topbook