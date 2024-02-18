import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi"
//import { products } from '../../assets/data/data'
import SearchItems  from "./SearchItems"

const Hero = () => {

    // search
  const [value, setValue] = useState("")
  const onChanage = ( e : BaseSyntheticEvent ) => {
    setValue(e.target.value)
  }

  const onSearch = ( key ) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
      <div className='container'>
        <h1>
            <label>
            ที่สุดของหนังสือ <span>108</span> แห่งการเรียนรู้
            </label>
            <br />
            <label>
            แหล่งทรัพยากร, <span>สื่อสิ่งพิมพ์อิเล็กทรอนิกส์ </span> E-Book
            </label>
        </h1> 
        <p>สำนักพิมพ์คณะรัฐมนตรีและราชกิจจานุเบกษาได้จัดพิมพ์ดวงตรา ใบประกาศนียบัตรกำกับเครื่องราชอิสริยาภรณ์และสัญญาบัตรยศ</p>
          <div className='search'>
            <span>ค้นหาหนังสือ</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>

          <SearchItems value={value} onSearch={onSearch} />
          <p>รับออกแบบสื่อสิ่งพิมพ์อิเล็กทรอนิกส์และ E-Book ...</p>                 

      </div>
      </section>
    </>
  )
}

export default Hero