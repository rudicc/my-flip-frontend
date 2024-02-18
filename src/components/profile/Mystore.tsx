
import { useEffect } from 'react';
import Menubar from '../home/Master/Menubar';
import { fetchMenutab } from '../../store/features/menutabSlice';
import { useAppDispatch } from '../../store/hooks';
const Mystore =() =>{
  const dispatch = useAppDispatch();
  useEffect(()=>{
    
    dispatch(fetchMenutab());
  })
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
  
  
  
            <div className="e-flex-md-2 e-mg-b-20 e-mg-b-0-md e-card">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">Menu</span>
  
                  {/* <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text"></span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div> */}
                </div>
  
                <div className="e-card__body e-pd-0 e-d-flex e-fd-column e-justify-between">
                
                  <Menubar />
  
                </div>
  
              </div>
  
            </div>
  

  
            <div className="e-flex-md-10">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld"><i className="ri-star-line e-mg-r-10"></i></span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text"></span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  

                          

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

export default Mystore
