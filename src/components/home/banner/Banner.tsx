import React from "react"
import { useAppSelector } from "../../../store/hooks";
import { UrlServer } from "../../services";
//import { banner } from "../../assets/data/data"
const Url = UrlServer
const Banner = () => {
  const banner = useAppSelector((state) => state.bannerstbl.bannerstbl);
  return (
    <>
      <section className='banner'>
        <div>-------------------------------------</div>
        <div className='posts'>
          {banner.map((items) => (
            <div className='post' key={items.banners_id}>
              <div className='content'>
                <div className='img'>
                  <img src={Url + "/" + items.banners_image} alt='' />
                </div>
                <div className='text'>
                  <h2>{items.banners_title}</h2>
                  <h2>{items.banners_html_text}</h2>
                  <p>{items.banners_html_text}</p>
                  <button className='button'>SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Banner
