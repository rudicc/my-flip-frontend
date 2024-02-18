import React from 'react'
import { GetDateNow } from '../../functions/Utility'

const About =() =>{
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
  
            <div className="e-flex-md-6 e-mg-b-20 e-mg-b-0-md">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">บล็อก</span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text">ย้อนกลับ 1h ago</span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-message">
  
                    <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>ข้อความ</span>
                      <a href="messages.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                    </div>
  
                    <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex">
  
                            <div className="e-mg-r-10">
                              <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                  className="e-avat__img" /></div>
                            </div>
  
                            <div className="ease-communication-details">
                              <span className="e-h5 e-d-block">ข้อมูล</span>
                              <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
                            </div>
  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>
  
                        </div>
  
                      </div>
  
                    </div>
  
                    <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex">
  
                            <div className="e-mg-r-10">
                              <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                  className="e-avat__img" /></div>
                            </div>
  
                            <div className="ease-communication-details">
                              <span className="e-h5 e-d-block">ข้อมูล</span>
                              <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
                            </div>
  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>
  
                        </div>
  
                      </div>
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
            <div className="e-flex-md-6">
  
            <div className="e-card ease-communication">
  
  <div className="e-card__header">
    <span className="e-card__title e-fw-bld">บล็อก</span>

    <div className="e-d-flex e-align-center">
      <span className="e-fs-12 ease-faded-text">ย้อนกลับ 1h ago</span>
      <div className="e-mg-l-10">
        <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
      </div>
    </div>
  </div>

  <div className="e-card__body e-pd-0">

    <div className="ease-message">

      <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
        <span>ข้อความ</span>
        <a href="messages.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
      </div>

      <div className="e-tbl__row">

        <div className="e-tbl__data e-pd-x-20">

          <div className="ease-communication-content">

            <div className="e-d-flex">

              <div className="e-mg-r-10">
                <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                    className="e-avat__img" /></div>
              </div>

              <div className="ease-communication-details">
                <span className="e-h5 e-d-block">ข้อมูล</span>
                <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
              </div>

            </div>

            <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>

          </div>

        </div>

      </div>

      <div className="e-tbl__row">

        <div className="e-tbl__data e-pd-x-20">

          <div className="ease-communication-content">

            <div className="e-d-flex">

              <div className="e-mg-r-10">
                <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                    className="e-avat__img" /></div>
              </div>

              <div className="ease-communication-details">
                <span className="e-h5 e-d-block">ข้อมูล</span>
                <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
              </div>

            </div>

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

export default About
