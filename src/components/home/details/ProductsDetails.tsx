import { SyntheticEvent, useEffect, useState } from "react"
import { MdStarRate } from "react-icons/md"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { addCart, delCart, remove_items } from "../../../store/features/cartSlice"
import { UrlServer } from "../../services"
import { PRODUCTS } from "../../models/products.model"


const ProductsDetails = () => {
  debugger
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  
  const [data, setData] = useState([])
  const { id } = useParams()
  //console.log(id)

  const getdata = useAppSelector((state) => state.cart.carts)
  const products = useAppSelector((state) => state.producttbl.productstbl)
 
  const compare = () => {
    debugger
    let compareData:PRODUCTS = products.filter((e) => {
      return e.products_id == id
    })
     
    setData(compareData)
  }

  useEffect(() => {
    compare()
  }, [id])

  // delete item
  //const history = useHistory()
  const deletes = (vid) => {
    dispatch(delCart(vid))
    //history.push("/")
    navigate(from, { replace: true });
  }

  // increment item
  const dispatch = useAppDispatch()
  const increment = (e) => {
    dispatch(addCart(e))
    //compare()
  }

  // descriment item
  const decrement = (item) => {
    dispatch(remove_items(item))
    //compare()
  }

  return (
    <>
      <article>
        <section className='details'>
          <h2 className='details_title'>รายละเอียดสินค้า</h2>
          {data.map((item) => (
            <div className='details_content'>
              <div className='details_content_img'>
                <img src={ UrlServer + '/' + item.products_image} alt='' />
              </div>
              <div className='details_content_detail'>
                <h1>{item.products_model}</h1>
                <div className='rating'>
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor=''>({item.products_ordered} customer order)</label>
                </div>

                <h3> ฿{item.products_price}</h3>
                <p>{item.products_model}</p>
                {/* <div className='qty'>
                 <div className='count'>
                     <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={item.qty <= 1 ? () => deletes(item.items.id) : () => decrement(item)}>
                      <AiOutlineMinus />
                    </button> 
                  </div>
                  <button className='button' onClick={() => dispatch(addCart({ item }))}>Add To Cart</button>
                </div>*/}
                <div className='desc'>
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>
                    {item.products_description}
                  </p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p>...</p>
                    </li>
                    {/* <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li> */}
                  </ul> 
                </div> 
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}

export default ProductsDetails