 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../home/Home'
import Details from '../home/details/Details'
import Admin from "../home/Admin"
import DataProducts from "../home/Master/Products/DataProducts"
import DataCategories from "../home/Master/Categories/DataCategories"
import SignUp from "../Screens/SignUp"
import LogOut from "../Screens/LogOut"
import LogIn from "../Screens/LogIn"
import MyProfile from "../profile/MyProfile"
import MySetting from "../profile/MySetting"
import MyOrders from "../profile/MyOrders"
import Mystore from "../profile/Mystore"

import Myshop from "../shop/Myshop"
import About from "../about/About"
import Contact from "../contact/Contact"
import Dashboard from "../dashboard/Dashboard"
import ProductsDetails from "../home/details/ProductsDetails"
import { PayPalScriptProvider} from "@paypal/react-paypal-js"; //, PayPalButtons 
import Baskets from "../home/basket/Baskets"
import Checkout from "../checkout/Checkout"
import PdfEbook from "../home/Master/Products/PdfEbook"


export const Pages = () => {
 
  const initialOptions = {
    clientId: "ARIA9xfrLWinC7Ytp9qOKlzRpwZGoBcUnxqBA-vyTe0RlCiR0vRVpURyXe3TXw_Ext_Qzga5Q-7t1nws",
    currency: "USD",
    intent: "capture",
  };

  return (
    <>
     <PayPalScriptProvider options={initialOptions}>


        <Router>  
          <Header />
          <Routes>
     
            <Route  path='/' element={ <Home /> } ></Route>         
            <Route  path='/shop' element={ <Myshop />}></Route>
            <Route  path='/about' element={ <About />}></Route>
            <Route  path='/contact' element={ <Contact />}></Route>
            <Route  path='/dashboard' element={ <Dashboard />}></Route>

            
            <Route  path='/productdetial/:id' element={ <ProductsDetails />}></Route> 
            <Route  path='/cart/:id' element={ <Details />}></Route>   

            <Route  path='/checkout/:id' element={ <Checkout />}></Route> 

            <Route  path='/basket/:id' element={ <Baskets />}></Route>                   
            <Route  path='/admin/:id' element={ <Admin />}></Route>

            <Route  path='/products' element={ <DataProducts />}></Route>
            <Route  path='/pdfebook/:pid' element={ <PdfEbook />}></Route> 

            <Route  path='/categories' element={ <DataCategories />}></Route>

            <Route  path='/myprofile' element={ <MyProfile />}></Route>
            <Route  path='/mysetting' element={ <MySetting />}></Route>
            <Route  path='/myorders' element={ <MyOrders />}></Route>
            <Route  path='/mystore' element={ <Mystore />}></Route>

            <Route  path='/login' element={ <LogIn />}></Route>
            <Route  path='/signup' element={ <SignUp />}></Route>
            <Route  path='/logout' element={ <LogOut />}></Route>

          </Routes>          
         <Footer/>            
        </Router>     

    </PayPalScriptProvider>          
    </>
  )
}
