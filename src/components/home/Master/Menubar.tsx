import { Fragment, useEffect, useState } from 'react'
import { useAppSelector } from '../../../store/hooks';
import { Link } from 'react-router-dom';
import { BiArrowFromLeft } from 'react-icons/bi';

 
const Menubar = () => {
  debugger
  const menus = useAppSelector((state) => state.menus.menu_tabs)
  const [showmenu , setShowmenu] = useState(false)
  
  const MenubarList = () => {
    return(
      <>
          <ul className="ease-inbox-content e-pd-20 ">    
            {menus.length >0 ?(
              menus.map((i) =>( 
 
                i.menu_active==1?(
                  <li  key={i.menu_id}>
                    <Link to={`/` + i.menu_col_code} key={i.menu_id} className="e-d-flex e-justify-between e-align-center e-pd-y-8 btn">
                      <span className="e-fs-14 e-d-flex e-align-center">
                        <i className="ri-draft-line e-mg-r-10"></i>  
                          {i.menu_col_name_th}   
                        </span>
    
                    </Link>                                                                     
                  </li>                
                ):("")

              
                                
              ))
            )
            :("ไม่พบรายการ")
            
            } 

          </ul>
      </>
    )
  }
  const Menubar_old = ()=>{
    return(
    <>
      {!showmenu?(""):(
          <Fragment> 
             <div className="e-container">

           
                <nav className="e-header__nav e-d-flex e-justify-between e-align-center"> 
                  <div className='e-header__left e-d-flex e-align-center e-mg-r-10 e-mg-r-0-md'>

                    {/* //header */}

                    <div className="e-header__mobile e-mg-r-10 e-d-none-md">
                      <button type="button" className="e-icon-btn e-header__mobile--trigger" data-menu-target="main-menu">
                        <i className="ri-menu-2-line e-fs-16">เมนู</i>
                      </button>
                    </div>



                  </div>
                    <ul className='e-header__navitems e-header__sidebar-md-3 e-header__sidebar-lg-2 e-pd-y-200' >
                      
                        {menus.map((i) =>( 
                    
                                <li className='e-e-header__list e-header__list--title e-fw-bld e-tt-uppercase e-pd-x-20 e-pd-y-10' key={i.menu_id}>
                                <Link to={i.menu_col_code} className="e-header__link e-pd-20 e-d-flex e-align-center e-justify-between">
                                   <span className="e-fs-14 e-d-flex e-align-center"><i
                                      className="ri-message-2-line e-mg-r-10"></i>  {i.menu_col_name_th}   </span>
                                    <span className="e-bdg e-bdg-danger">12</span>
                                </Link>                                                                     
                                </li>
                                                
                        ))} 

                      </ul>                  




                </nav>   

             </div>
          </Fragment>
       
      )}
    </>


    )
  }
const Menubars = () => {
  return(
    <>
    <main>

      <div className="ease-dashboard ease-dashboard-communications ease-dashboard-inbox">

        <div className="e-container">

          <div className="e-offset-12 e-offset-md-3 e-offset-lg-2">

            <section className="ease-message-block e-pd-y-20">

              <div className="e-row">

                <div className="e-flex-md-4 e-flex-sm-6 e-flex-lg-3 ease-message-left">

                  <div className="e-card">

                    <div className="e-card__header e-d-block">

                      <div className="e-d-flex e-justify-between e-align-center e-mg-b-20">
                        <h3>Inbox</h3>
                        <span className="e-bdg e-bdg-danger">6</span>
                      </div>

                      <a href="#" className="e-btn">Compose</a>

                    </div>

                    <div className="e-card__body e-pd-0 e-d-flex e-fd-column e-justify-between">

                      <ul className="ease-inbox-content e-pd-20">

                        <li data-communication-target="ease-message-center">

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i className="ri-inbox-line e-mg-r-10"></i>Inbox</span>
                            <span>6</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i className="ri-star-line e-mg-r-10"></i>Starred</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i className="ri-time-line e-mg-r-10"></i>Snoozed</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i
                                className="ri-send-plane-2-line e-mg-r-10"></i>Sent</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i className="ri-draft-line e-mg-r-10"></i>Drafts</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i className="ri-spam-line e-mg-r-10"></i>Spam</span>
                          </a>

                        </li>

                        <li>

                          <a href="#" className="e-d-flex e-justify-between e-align-center e-pd-y-8">
                            <span className="e-d-flex e-align-center"><i
                                className="ri-delete-bin-line e-mg-r-10"></i>Trash</span>
                          </a>

                        </li>

                      </ul>
                      {/* <!-- .ease-inbox-content ends --> */}

                      <ul className="ease-messages-content ease-communication">

                        <li className="e-pd-20 ease-faded-text e-tt-uppercase">Contacts</li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row">

                          <div className="e-tbl__data e-pd-x-20">

                            <div className="ease-communication-content">

                              <div className="e-d-flex">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>

                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">Johnathan R.</span>
                                  <span className="ease-faded-text">johnatha.r@ease.com</span>
                                </div>

                              </div>

                            </div>

                          </div>

                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

                <div className="e-flex-md-8 e-flex-sm-6 e-flex-lg-9 ease-message-center" id="ease-message-center">

                  <div className="e-card ease-message-box">

                    <div className="e-card__header e-d-block e-d-flex-md">

                      <div className="e-d-flex e-align-center">

                        <div className="e-mg-r-10 e-d-none-sm">
                          <button type="button" className="e-btn-icon e-fs-20" data-close-target="ease-message-center"><i
                              className="ri-arrow-left-line"></i></button>
                        </div>

                        <div className="ease-message-options">

                          <div className="e-d-flex">
                            <button type="button" className="e-btn-icon e-mg-r-8"><i
                                className="ri-checkbox-blank-line"></i></button>
                            <button type="button" className="e-btn-icon e-mg-r-8"><i
                                className="ri-delete-bin-line"></i></button>
                            <button type="button" className="e-btn-icon e-mg-r-8"><i className="ri-star-line"></i></button>
                            <button type="button" className="e-btn-icon"><i className="ri-reply-line"></i></button>
                            <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                          </div>

                        </div>   
                        {/* <!-- .ease-message-options ends --> */}

                      </div>
                      {/* <!-- .e-d-flex ends --> */}

                      <div className="e-d-flex e-align-center">
                        <span className="ease-faded-text">1-50 of 562</span>
                        <span className="e-mg-l-10">
                          <button type="button" className="e-btn-icon"><i className="ri-arrow-left-s-line"></i></button>
                          <button type="button" className="e-btn-icon"><i className="ri-arrow-right-s-line"></i></button>
                        </span>
                      </div>

                    </div>

                    <div className="e-card__body ease-inbox-body e-pd-0">

                      <ul className="ease-inbox-messages ease-communication">

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                        <li className="e-tbl__row ease-messages-row" data-modal-target="ease-message-user-data">

                          <div className="e-tbl__data e-pd-x-20 e-pd-y-10">

                            <div className="e-d-flex e-align-center">

                              <div className="e-mg-r-10 e-d-flex">
                                <span className="e-btn-icon"><i className="ri-checkbox-blank-line"></i></span>
                                <span className="e-btn-icon"><i className="ri-star-line"></i></span>
                              </div>

                              <div className="ease-communication-details e-mg-r-10">
                                <span className="e-h5 e-d-block">Samantha Rue</span>
                              </div>

                              <div className="e-flex-auto">
                                <p><span className="e-fw-bld">Quarterly meeting - </span> Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit. Nesciunt earum similique sapiente.</p>
                              </div>

                            </div>

                          </div>

                        </li>

                      </ul>
      {/* //   <!-- .ease-inbox-messages ends -->*/}


                    </div>
      {/* // <!-- .e-card__body ends -->  */}


                  </div>

                </div>

              </div>

            </section> 
      {/* // <!-- .ease-message-block ends -->  */}


          </div>
      {/* //<!-- .e-offset-* ends -->   */}


        </div>
      {/* //<!-- .e-container ends -->   */}


      </div>
{/* //<!-- .ease-dashboard ends -->   */}


</main>    
    </>
  )
}

const [usersQuantity, setusersQuantity] = useState(0)
// const [username, setUserName] = useState('')

useEffect(() =>{ 
  // if(localStorage.getItem("tmbuser") !== null){
  //  const tmbuser =  localStorage.getItem("tmbuser")?.split(' ') 
    setusersQuantity(1)
  //    setUserName(tmbuser[0])
  // }else{
  //    setusersQuantity(0)
  //    setUserName('')
  // }
 
})

  return (
    <Fragment>
       <MenubarList />     
    </Fragment>

  )
}

export default Menubar