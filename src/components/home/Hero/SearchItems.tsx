 
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { addCart } from "../../../store/features/cartSlice"
import { UrlServer } from "../../services"

const SearchItems = ( { value, onSearch }:any ) => {
    //debugger
    // const dispatch = useDispatch()
    // const addToCart = ( e ) => {
    //   dispatch(ADD(e))
    // }
    const products = useAppSelector((state) => state.product.products);
    
    const dispatch = useAppDispatch();
    
  return (
    <>
      <section className='searchItems'>
        <div className='product_items'>
            {
                value != "" &&(
                    products
                    .filter((  items  ) => {
                        //debugger
                        const searchkey = value.toLowerCase()
                        if(items ==="undefined" || null){
                            return ""
                        }else{      
                             const title = items.title.toLowerCase()
                            return searchkey && title.startsWith(searchkey) && title !== searchkey
                        }                                           
                    })
                    .slice(0, 10)
                    .map(( items  ) => (
                      <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
                      <div className='img'>
                        <img src={UrlServer + "/" + items.cover} alt='' />
                        <div className='overlay'>
                          <button className='button' onClick={() => dispatch(addCart({ items, qty: 1 }))}>
                            <FiShoppingBag />
                          </button>
                          <button className='button'>
                            <AiOutlineHeart />
                          </button>
                          <button className='button'>
                            <FiSearch />
                          </button>
                        </div>
                      </div>
                      <div className='details'>
                        <h3>{items.title}</h3>
                        <p>{items.author}</p>
                        <h4>${items.price}</h4>
                      </div>
                      </div>
                    ))
                                        
                )
  
            }
        {/* {products
            .filter(({ items }:any) => {
              const searchkey = value.toLowerCase()
              const title = items.title.toLowerCase()

              return searchkey && title.startsWith(searchkey) && title !== searchkey
            })
            .slice(0, 10)
            .map(({ items }:any) => (
              <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
                <div className='img'>
                  <img src={items.cover} alt='' />
                  <div className='overlay'>
                    <button className='button' onClick={() => addToCart(items)}>
                      <FiShoppingBag />
                    </button>
                    <button className='button'>
                      <AiOutlineHeart />
                    </button>
                    <button className='button'>
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className='details'>
                  <h3>{items.title}</h3>
                  <p>{items.author}</p>
                  <h4>${items.price}</h4>
                </div>
              </div>
            ))}             */}
        </div>
      </section>
    </>
  )
}

export default SearchItems
