//import React from 'react'
//import { hero } from '../../assets/data/data'
import { useAppSelector } from '../../../store/hooks';
import { UrlServer } from '../../services';
const Url = UrlServer
const Card = () => {
  const banner = useAppSelector((state) => state.bannerstbl.bannerstbl);
  return (
    <>
      <section className='cards'>
        {banner.map((item) => (
          <div className='card' key={item.banners_id}>
            <div className='left'>
              {/* <img src={Url + "/" + item.banners_image} alt='' /> */}

              <div className="e-d-flex e-align-center">

                <div className="e-mg-r-10">
                  <div className="e-avat e-avat-50"><img src={UrlServer + '/' + item.banners_image} alt="" className="e-avat__img" />
                  </div>
                </div> 

              </div>

            </div>
            <div className='right'>
              <h6>{item.banners_title.slice(0,25)}</h6>
              <p>{item.banners_html_text.slice(0,80)}...</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Card