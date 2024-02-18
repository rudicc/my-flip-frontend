import React from 'react'
import { useAppSelector } from '../../store/hooks'
import { UrlServer } from '../services'
import { GetDateNow } from '../../functions/Utility'
 

const MyOrderList =() =>{
  debugger
  const data = useAppSelector((state) => state.orders_productscutomers.orders_products_cutomers)

  return (
<>
<div className="e-flex-md-12">

<div className="e-card ease-communication">

  <div className="e-card__header">
    <span className="e-card__title e-fw-bld">รายการสั่งซื้อ</span>

    <div className="e-d-flex e-align-center">
      <span className="e-fs-12 ease-faded-text">Refreshed</span>
      <div className="e-mg-l-10">
        <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
      </div>
    </div>
  </div>

  <div className="e-card__body e-pd-0">

    <div className="ease-inbox">
{/* 
      <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
        <span>ข้อมูล</span>
        <a href="#" className="e-btn e-btn-secondary e-btn-link e-tt-none">แสดง</a>
      </div> */}

{data.length>0?(

  data.map((i) =>(


        <div className="e-tbl__row">

          <div className="e-tbl__data e-pd-x-20">

            <div className="ease-communication-content">

              <div className="e-d-flex-lg">

                <div className="left-side e-d-flex e-mg-r-10-lg">

                  <div className="e-mg-r-10">
                    <div className="e-avat e-avat-30"><img src={UrlServer +"/img/receipts/"+ i.billing_img_receipt} alt=""
                        className="e-avat__img"/></div>
                  </div>

                  <div className="ease-communication-details">
                    <span className="e-h5 e-d-block">รหัสคำสั่ง: {i.orders_id} - {i.products_model}</span>
                    <p className="e-fs-12">{i.products_name}</p>
                  </div>

                </div>

                <div className="right-side">
                  <div className="ease-communication-details">
                    <span className="e-h5 e-d-block">{i.customers_name} </span>
                    <p className="e-fs-12"> สถาณะ : {i.orders_status} วันที่รายการสั่งซื้อ: {i.orders_date_added}</p>
                    
                  </div>
                </div>

              </div>

              <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>

            </div>

          </div>

        </div>  
  ))

):("")} 

    </div>

  </div>

</div>

</div>
</>
  )
}

export default MyOrderList
