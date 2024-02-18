import React from 'react'
import { GetDateNow } from '../../functions/Utility'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { delCart } from '../../store/features/cartSlice'
 

const CheckOutSuccess =() =>{

  const data = useAppSelector((state) => state.orders_productscutomers.orders_products_cutomers)
  const dispatch = useAppDispatch()
  const onclearbasket =()=>{
        debugger
        if(data.length > 0){
            data.map((i) =>{
              dispatch(delCart(i.products_id))
            })
        }
    return "Ok!"
  }
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
        
            <div className="e-flex-md-12">
  
              <div className="e-card ease-communication">
  
                {/* <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">Inbox updates</span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text">Refreshed 1h ago</span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div> */}
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  
                    {/* <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>Inbox</span>
                      <a href="inbox.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                    </div>
   */}
                    {/* <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex-lg">
  
                            <div className="left-side e-d-flex e-mg-r-10-lg">
  
                              <div className="e-mg-r-10">
                                <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                    className="e-avat__img"/></div>
                              </div>
  
                              <div className="ease-communication-details">
                                <span className="e-h5 e-d-block">Johnathan R.</span>
                                <p className="e-fs-12">johnathan.r@example.com</p>
                              </div>
  
                            </div>
  
                            <div className="right-side">
                              <div className="ease-communication-details">
                                <span className="e-h5 e-d-block">Re: Wireframe</span>
                                <p className="e-fs-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                  Voluptatum velit rem tempora?</p>
                              </div>
                            </div>
  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">...</span>
  
                        </div>
  
                      </div>
  
                    </div> */}
  
                    <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex-lg">
  
                            {/* <div className="left-side e-d-flex e-mg-r-10-lg">
  
                              <div className="e-mg-r-10">
                                <div className="e-avat e-avat-30"><img src="images/user-f-2.jpg" alt=""
                                    className="e-avat__img"/></div>
                              </div>
  
                              <div className="ease-communication-details">
                                <span className="e-h5 e-d-block">Samantha R.</span>
                                <p className="e-fs-12">samantha.r@example.com</p>
                              </div>
  
                            </div>
  
                            <div className="right-side">
                              <div className="ease-communication-details">
                                <span className="e-h5 e-d-block">Re: Today's meet</span>
                                <p className="e-fs-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                  Voluptatum velit rem tempora?</p>
                              </div>
                            </div> */}

                            <button type="button" onClick={()=>(onclearbasket())} className="button b-next">ยืนยันเสร็จสิ้นสมบูรณ์</button>
  
                          </div>
  <p>ระบบจะทำการล้างตระกร้าอัตโนมัติ</p>
                          <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>
  
                        </div>
  
                      </div>
  
                    </div>
  
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

export default CheckOutSuccess
