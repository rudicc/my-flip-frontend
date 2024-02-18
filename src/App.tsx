
import "./style/main.scss"
import "./scss/main.scss"
import { Pages } from "./components/pages/Pages"
import { Provider } from "react-redux"
import { store } from  './store/store'
import { useEffect, useState } from "react"
import { UrlServer } from "./components/services"
import CookieService from "./components/services/CookieService"
//import { useAppDispatch } from "./store/hooks"


//     let hashedPassword = await bcrypt.hash(item.customers_password, 8);

// import { useAppDispatch } from "./store/hooks"
// import { fetchProducts } from "./store/features/productsSlice"
// import { fetchMenutab } from "./store/features/menutabSlice"
// import { fetchProductstbl } from "./store/features/products_tblSlice"
 
const App = () => { 
 
//debugger
 
 


// GET   http://localhost:5000/auth/validate/
// Content-Type: application/json
// Accept: application/json
// Authorization: rung1 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExIHJ1bmRpYWUxMDBAaG90bWFpbC5jb20iLCJpYXQiOjE3MDE0NDg1ODcsImV4cCI6MTcwOTIyNDU4N30.vfeU6Jd0WRbg_W-ej0dcHYHG0GTivlzabiT740TVYDE

const [chkuser ,setchkuser] = useState(false)
const  ValidUser = async ()  => {
  try{
      const token =  CookieService.get("chopbook-access_token")
      //debugger
      if(token !=""){


      const res = await fetch(UrlServer + "/auth/validate/", {        
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "'' " + token,
        },        
        method: "GET",      
       });
       //debugger

       const data = res.json();

       if(res.ok){
        setchkuser(true)
       }else{
         setchkuser(false)
         //alert('กรุณาลงชื่อเข้าใช้!')
        //localStorage.removeItem("tmbuser")  
       }      
       //return data;
      }else{
        setchkuser(false)
      }
  }catch(err){
    console.log(err)
    
  }

}
 useEffect(() => {
//   dispatch(fetchProducts());

//   dispatch(fetchMenutab());

//   dispatch(fetchProductstbl());

  ValidUser()
 });

  return (
    <>  
  
        <Provider store={store}>  

        <Pages /> 

        {chkuser ?(""
                 
          // <Pages />  
        ):(""
         
          //<SignIn />
          
        )}
     

        </Provider>       

  
      
       
    </>
  )
}

export default App
