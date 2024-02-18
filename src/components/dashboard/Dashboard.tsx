import React, { Fragment } from 'react'

const Dashboard = () =>{
  return (
    <>
      <Fragment>
         <div className="details">
         <div className="ease-section-heading e-pd-y-20">
              <h4 className="ease-title">Good morning, รุ่ง!</h4>
              <p className="ease-sub-title">Your dashboard and components are refreshed</p>
          </div>

           <section className="ease-overview e-pd-y-20">

          <div className="e-row">

            <div className="e-flex-sm-6 e-flex-lg-3 e-mg-b-20 e-mg-b-0-lg">

              <div className="e-card">

                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">โครงการที่ใช้งานอยู่</span>
                  <span className="e-btn-icon e-btn-icon-static"><i className="ri-bar-chart-line"></i></span>
                </div>

                <div className="e-card__body e-d-flex e-justify-between e-align-end">

                  <div className="left-side">
                    <h2 className="e-mg-b-10">125</h2>
                    <p className="e-fs-12 e-d-flex e-align-center">
                      <span className="ease-indicator-up e-mg-r-10 e-d-in-flex e-align-center"><i
                          className="ri-arrow-up-line"></i> 12.5%</span>
                      <span className="ease-faded-text">From last week</span>
                    </p>
                  </div>

                  <div className="right-side">
                    <div className="e-bdg e-bdg-danger ease-bdg"><i className="ri-folders-line"></i></div>
                  </div>

                </div>

              </div>

            </div>

            <div className="e-flex-sm-6 e-flex-lg-3 e-mg-b-20 e-mg-b-0-lg">

              <div className="e-card">

                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">รายได้เฉลี่ยของโครงการ</span>
                  <span className="e-btn-icon e-btn-icon-static"><i className="ri-bar-chart-line"></i></span>
                </div>

                <div className="e-card__body e-d-flex e-justify-between e-align-end">

                  <div className="left-side">
                    <h2 className="e-mg-b-10">฿5,436.07</h2>
                    <p className="e-fs-12 e-d-flex e-align-center">
                      <span className="ease-indicator-up e-mg-r-10 e-d-in-flex e-align-center"><i
                          className="ri-arrow-up-line"></i>
                        15.7%</span>
                      <span className="ease-faded-text">From last week</span>
                    </p>
                  </div>

                  <div className="right-side">
                    <div className="e-bdg e-bdg-secondary ease-bdg"><i className="ri-money-dollar-circle-line"></i></div>
                  </div>

                </div>

              </div>

            </div>

            <div className="e-flex-sm-6 e-flex-lg-3 e-mg-b-20 e-mg-b-0-sm">

              <div className="e-card">

                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">รายได้</span>
                  <span className="e-btn-icon e-btn-icon-static"><i className="ri-bar-chart-line"></i></span>
                </div>

                <div className="e-card__body e-d-flex e-justify-between e-align-end">

                  <div className="left-side">
                    <h2 className="e-mg-b-10">฿62,789.06</h2>
                    <p className="e-fs-12 e-d-flex e-align-center">
                      <span className="ease-indicator-down e-mg-r-10 e-d-in-flex e-align-center"><i
                          className="ri-arrow-down-line"></i>
                        4%</span>
                      <span className="ease-faded-text">From last month</span>
                    </p>
                  </div>

                  <div className="right-side">
                    <div className="e-bdg e-bdg-success ease-bdg"><i className="ri-line-chart-line"></i></div>
                  </div>

                </div>

              </div>

            </div>

            <div className="e-flex-sm-6 e-flex-lg-3">

              <div className="e-card">

                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">เบ็ดเตล็ดทั่วไป</span>
                  <span className="e-btn-icon e-btn-icon-static"><i className="ri-bar-chart-line"></i></span>
                </div>

                <div className="e-card__body e-d-flex e-justify-between">

                  <div className="ease-box e-ta-center">
                    <h2 className="e-mg-b-10">12</h2>
                    <p className="e-fs-12 ease-faded-text">Messages</p>
                  </div>
                  <div className="ease-box e-ta-center">
                    <h2 className="e-mg-b-10">6</h2>
                    <p className="e-fs-12 ease-faded-text">Inbox</p>
                  </div>
                  <div className="ease-box e-ta-center">
                    <h2 className="e-mg-b-10">4</h2>
                    <p className="e-fs-12 ease-faded-text">Notifications</p>
                  </div>
                  <div className="ease-box e-ta-center">
                    <h2 className="e-mg-b-10">1</h2>
                    <p className="e-fs-12 ease-faded-text">Alerts</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          </section>   


 

         </div>
      </Fragment>
    </>
 
  )
}

export default Dashboard
