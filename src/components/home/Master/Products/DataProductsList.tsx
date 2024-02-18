import { BaseSyntheticEvent, Fragment, useEffect, useRef, useState } from 'react' 
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { UrlServer } from '../../../services';
import { PRODUCTS } from '../../../models/products.model';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import Uploaded_FilesItem from '../Uploaded_FilesItem';
import { fetchUploaded_files } from '../../../../store/features/uploaded_filesSlice';
import { DeleteProductstbl, InsertProductstbl, UpdateProductstbl, fetchProductstbl } from '../../../../store/features/products_tblSlice';
import { fetchProducts } from '../../../../store/features/productsSlice';
import { DeleteProducts_to_categoriestbl, InsertProducts_to_categoriestbl, UpdateProducts_to_categoriestbl } from '../../../../store/featurestbl/products_to_categories_tblSlice';
import { DeleteProducts_descriptiontbl, InsertProducts_descriptiontbl, UpdateProducts_descriptiontbl } from '../../../../store/featurestbl/products_description_tblSlice';
import Menubar from '../Menubar';
import { closeComponents, operateNavigations } from '../../../../functions/Utility';
import { UploadedFilesPdfSlice, fetchUploaded_filesPdf } from '../../../../store/features/uploaded_filesPdfSlice';


const Url = UrlServer

const initState: PRODUCTS[] = []

const DataProductsList = () => {
  //debugger
     
  const category = useAppSelector((state) => state.categoriesselect.categoriesselection);

  const products = useAppSelector((state) => state.producttbl.productstbl);
  
  const dispatch = useAppDispatch();

    useEffect(() => {
      //debugger
      //dispatch(fetchProductstbl());
    });

  // const _variables = {
  //   target: "data-modal-target",
  //   active: "e-active"
  // }


//set open close modal  /delete update
const [ typeUpdateModal, settypeUpdateModal ] = useState<boolean>(false) 

//product desc 
const [ products_name, setproducts_name ] = useState<string>('') 
const [ products_description, setproducts_description ] = useState<string>('') 
const [ products_url, setproducts_url ] = useState<string>('') 

//setimg_filename
const [ img_filename, setimg_filename ] = useState<string>('') 

  const [ products_id, setproducts_id ] = useState<number>(0) 

  const [ products_quantity, setproducts_quantity ] = useState<number>(0) 

  const [ products_model, setproducts_model ] = useState<string>('') 

  const [ products_image, setproducts_image ] = useState<string>('') 

  const [ products_price, setproducts_price ] = useState<number>(0) 

  const [ products_date_added, setproducts_date_added ] = useState<string>('') 

  const [ products_last_modified, setproducts_last_modified ] = useState<string>('') 

  const [ products_date_available, setproducts_date_available ] = useState<string>('') 

  const [ products_weight, setproducts_weight ] = useState<string>('') 

  const [ products_status, setproducts_status ] = useState<number>(0) 

  const [ products_tax_class_id, setproducts_tax_class_id ] = useState<number>(0) 

  const [ manufacturers_id, setmanufacturers_id ] = useState<number>(0) 

  const [ products_ordered, setproducts_ordered ] = useState<number>(0)
 
///categories_id
const [ categories_selection, setcategories_selection ] = useState<number>(0) 
const [ categories_id, setcategories_id ] = useState<number>(0) 

  const onClickInsert = (e:BaseSyntheticEvent) => { 
    //debugger
    showModal("#ease-message-user-data-insert") 
   }

  const [Edittype, setEdittype]  = useState('')

  const DataUpdate = (e:BaseSyntheticEvent , types) =>{
    debugger
    const item: PRODUCTS = e.target 
    setproducts_id(e.products_id) 
 
    setproducts_quantity(e.products_quantity) 
 
    setproducts_model(e.products_model) 
 
    setproducts_image(e.products_image) 
 
    setproducts_price(e.products_price) 
 
    setproducts_date_added(e.products_date_added) 
 
    setproducts_last_modified(e.products_last_modified) 
 
    setproducts_date_available(e.products_date_available) 
 
    setproducts_weight(e.products_weight) 
 
    setproducts_status(e.products_status) 
 
    setproducts_tax_class_id(e.products_tax_class_id) 
 
    setmanufacturers_id(e.manufacturers_id) 
 
    setproducts_ordered(e.products_ordered)
 
    //product desc
    setproducts_name(e.products_name)
    setproducts_description(e.products_description)
    setproducts_url(e.products_url)
     //open Modal 
     if(types==="Pdf"){
      showModal("#ease-message-user-data-uploadpdf")   
     }else{
      showModal("#ease-message-user-data")     
     }

  }
  const onClickEdit = (e:BaseSyntheticEvent) => {
    debugger 
    settypeUpdateModal(true)
    DataUpdate(e , "Edit")
  }
  //pdf
  const onClickUploadPdf = (e:BaseSyntheticEvent) => {
    debugger 
    setpdf_filename(e.products_pdf)
    settypeUpdateModal(true)
    DataUpdate(e , "Pdf")
  }

  function showModal(e:string){
    const modal = document.querySelector(e)
    modal.classList.add('e-active')    
    document.body.style.overflow = "hidden"
  }
  const onCloseModal = (value:string) =>{
    //debugger
      const modal = document.querySelector(value)
      modal.classList.remove('e-active')
      document.body.removeAttribute("style")
  }
  // search
  const [data, setData] = useState<PRODUCTS[]>(initState)  
  function onChanageTxt(e: BaseSyntheticEvent){    
   //debugger   
    if(e.target.value.toLowerCase() ==="" || e.target.value.toLowerCase() === null || e.target.value.toLowerCase() ===" "){
      setData(products)    
    } 
    const newData = products.filter(row =>{
      return row.products_model.toLowerCase().includes(e.target.value.toLowerCase())
    })

    //by id categories
    //debugger   
    let comddata = category.filter((e) => {
      return e.categories_id == categories_selection
    })

    let compareData = newData.filter((e) => {
      return e.categories_id == comddata[0].categories_id
    })
   
    setcategories_id(categories_selection)
    setData(compareData)    
  } 
 
  //*************** */
  const [value, setValue] = useState("")
  const onClickSearchImgFileUpload =() =>{
    setValue("onclick")
  }
  const onChanage = ( e : BaseSyntheticEvent ) => {
    //debugger 
    setproducts_image(e.target.value)
  }
  const onSearch = ( key ) => {
    //debugger
    setValue("")
    setproducts_image(key)
    //console.log("search", key)
  }
  //*************** */

  //*** cbo categories selection */
  const [cvalue, setcValue] = useState("")
  const onClickSearchCategory =() =>{
    setcValue("onclick")
  }
  const onChanageCategory = ( e : BaseSyntheticEvent ) => {
    //debugger 
    setcategories_selection(e.target.value)
  }
  const onSearchCateSelect = ( key ) => {
    debugger

    setcValue("")
      let comddata = category.filter((e) => {
          return e.categories_id == key
      })
      setcategories_selection(key)
      //console.log(comddata[0].categories_id)        
      // const jdata = JSON.stringify({
      //   products_id: products_id,
      //   categories_id: comddata[0].categories_id
      // })
      // dispatch(InsertProducts_to_categoriestbl(jdata))
        
    if(key > 0){
      //get some type
        let compareData = products.filter((e) => {
          return e.categories_id == comddata[0].categories_id
        })
        setData(compareData)
        setcategories_id(key)         
    }else{
      //all type
      dispatch(fetchProductstbl());
      //setData(products)   
    }
  }

  const onStatusSelect = (e:BaseSyntheticEvent) => {
    debugger
    if(e.products_status === 0){
      //setproducts_status(0)
      AccessDataStauts(e.products_id , 1)
    }else{
      //setproducts_status(1)
      AccessDataStauts(e.products_id , 0)
    }
  }
  //** end category */


  useEffect(() => {  
    setData(products)
  }, [products])

 
  const [ierror, setiError] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  function onChanageCapture(e: React.FormEvent<HTMLInputElement>): void{
    //debugger
    setPreview(null)
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFile(target.files[0]);      
  }

  const UploadFile = async() => {
    //debugger
    if( typeof file === 'undefined' ) return
    const formData = new FormData()
    formData.append('file' , file)
    try{
      const endpoint =  UrlServer + "/uploadFile"
      // const res = await fetch(endpoint, {
      //   method: "POST",
      //   body: formData
      // });
      const uploadResponse = await fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      const res = await uploadResponse.json()

      if(res.success === true){
        setproducts_image('img/product/' + res.file_name)
        setimg_filename(res.file_name)
        setiError("File uploaded Sucessfully!")
  
      }else{
        setproducts_image('Error File!')
        setimg_filename('')
        setiError(res.message)

      }
    }catch(err){
      //debugger
      console.log(err)
    }
    dispatch(fetchUploaded_files());
  }

 
  //update status
  const AccessDataStauts = async (vproducts_id , vproducts_status) =>{
    //debugger
    const da = JSON.stringify({
      products_id: vproducts_id,
      products_status: vproducts_status
    })
    const response = await fetch(Url + "/products/putproductsstatus/" , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: da
    });
    
    setproducts_status(vproducts_status)
    dispatch(fetchProductstbl())
    const data = await response.json();
    return data;
  }
  const ADataDelete =(e:BaseSyntheticEvent) =>{
    settypeUpdateModal(false)
    DataUpdate(e , "Del")
   

      //dispatch(DeleteProductstbl(products_id))   
      //dispatch(DeleteProducts_descriptiontbl(products_id))     
      //onSearchCateSelect('เลือกทุกประเภท')
  }
  const AccessData = async ( vtype ) =>{
    debugger
    const jdata = JSON.stringify({
      products_id:  products_id, 

      products_quantity:  products_quantity, 
   
      products_model:  products_model, 
   
      products_image:  products_image, 
   
      products_price:  products_price, 
   
      products_date_added:  products_date_added, 
   
      products_last_modified:  products_last_modified, 
   
      products_date_available:  products_date_available, 
   
      products_weight:  products_weight, 
   
      products_status:  products_status, 
   
      products_tax_class_id:  products_tax_class_id, 
   
      manufacturers_id:  manufacturers_id, 
   
      products_ordered:  products_ordered
    })

    const jdataDescription = JSON.stringify({
      products_id: products_id, 
      language_id: 1,  
      products_name: products_name, 
      products_description: products_description , 
      products_url: products_url, 
      products_viewed: 10
    }) 

    const jdataProToCate = JSON.stringify({
      products_id: products_id, 
      categories_id: categories_id 
    }) 

    switch(vtype){
      case "insert":
        {
          //dispatch(InsertProductstbl(jdata))
          const response = await fetch(Url + "/products/create/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: jdata,
          })
        
          const d = await response.json();

          const jdataDescription = JSON.stringify({
            products_id: d.fileId, 
            language_id: 1,  
            products_name: products_name, 
            products_description: products_description , 
            products_url: products_url, 
            products_viewed: 10
          }) 
      
          const jdataProToCate = JSON.stringify({
            products_id: d.fileId, 
            categories_id: categories_id 
          }) 

          dispatch(InsertProducts_descriptiontbl(jdataDescription))
          dispatch(InsertProducts_to_categoriestbl(jdataProToCate))
          onSearchCateSelect('เลือกทุกประเภท')
        }
      break;
      case "update":
        {
          dispatch(UpdateProductstbl(jdata))
          dispatch(UpdateProducts_descriptiontbl(jdataDescription))
          onSearchCateSelect('เลือกทุกประเภท')
        }
      break;
      case "delete":
          {     

            dispatch(DeleteProducts_descriptiontbl(products_id))
            dispatch(DeleteProductstbl(products_id))
            dispatch(DeleteProducts_to_categoriestbl(products_id))
            onSearchCateSelect('เลือกทุกประเภท')
          }
      break;
      default:
        {
           
        }
        break;
    }
    debugger
    //dispatch(fetchProductstbl());

    onCloseModal(`#ease-message-user-data`)
   
  }

  //
 const handelerDropdown =(e:BaseSyntheticEvent) =>{
  debugger
  const _variables = {
    main: "e-dropdown",
    menu: "e-dropdown__menu",
    target: "data-dropdown-target",
    active: "e-active",
    components: [...document.querySelectorAll(`.e-dropdown`)]
  }
    operateNavigations("dropdown", e, _variables);
 }

  // const dropdown = () => {
  //   const _variables = {
  //     main: "e-dropdown",
  //     menu: "e-dropdown__menu",
  //     target: "data-dropdown-target",
  //     active: "e-active",
  //     components: [...document.querySelectorAll(`.e-dropdown`)]
  //   }
  
    // document.addEventListener("click", (e) => {
  
      // const target = e.target.closest(`.${_variables.main}`)
  
      // const targetedMenu = e.target.closest(`.${_variables.menu}`)
  
      // if (!target || targetedMenu) return
  
      // e.preventDefault()
  
      // operateNavigations("dropdown", target, _variables);
  
    // })
  
  //   window.addEventListener("mouseup", e => {
  
  //     closeComponents("dropdown", e, _variables);
  
  //   })
  
  // }
  
  useEffect(() =>{
    //dropdown() 
  })
 
  //=======PDF====

  const [filePdf, setFilePdf] = useState<File | undefined>();
  const [previewPdf, setPreviewPdf] = useState<string | ArrayBuffer | null>(null);
  //pdf
  const [ products_pdf, setproducts_pdf ] = useState<string>('');
  const [ products_pdf_id, setproducts_pdf_id ] = useState<number>(0);
  //css
  const [ products_css, setproducts_css ] = useState<string>('');
  const [ products_css_id, setproducts_css_id ] = useState<number>(0);
  //html
  const [ products_html, setproducts_html ] = useState<string>('');
  const [ products_html_id, setproducts_html_id ] = useState<number>(0);

  const [ pdf_filename, setpdf_filename ] = useState<string>('');
//pdf
  function onChanageCapturePdf(e: React.FormEvent<HTMLInputElement>): void{
    //debugger
    setPreviewPdf(null)
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFilePdf(target.files[0]);      
  }


  const UploadFilePdf = async() => {
    debugger
    if( typeof filePdf === 'undefined' ) return
    const formData = new FormData()
    formData.append('file' , filePdf)
    try{
      const endpoint =  UrlServer + "/uploadFilepdf"
      // const res = await fetch(endpoint, {
      //   method: "POST",
      //   body: formData
      // });
      const uploadResponse = await fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      const res = await uploadResponse.json()

      if(res.success === true){
        setproducts_pdf('pdf/productfile/' + res.file_name)
        setpdf_filename(res.file_name)
        setproducts_pdf_id(res.fileId);
        debugger
        //UPDATE PRODUCT FILE NAME
        try{
          const jdata = JSON.stringify({
            products_id: products_id,
            products_pdf_id: res.fileId,
            products_pdf: res.file_name
          }) 
          const response = await fetch(UrlServer + "/productspdf/put/" , {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: jdata
          });

          const res2 = await response.json()
          if(res2.success === true){
            setiError("File uploaded Sucessfully!")
          }else{
            setiError(res.message)  
            setproducts_pdf('Error File!')
          }
        }catch(error){  
          setiError(res.message)    
          setproducts_pdf('Error File!')
        }
         
      }else{
        setproducts_pdf('Error File!')
        setpdf_filename('')
        setiError(res.message)

      }
    }catch(err){
      //debugger
      console.log(err)
    }
 
  //
    dispatch(fetchUploaded_filesPdf());
  }



  //=======end PDF====

  const [fileCss, setFileCss] = useState<File | undefined>();
  function onChanageCaptureCss(e: React.FormEvent<HTMLInputElement>): void{
    //debugger
    //setPreviewPdf(null)
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFileCss(target.files[0]);      
  }
  const UploadFileCSS = async() => {
    debugger
    if( typeof fileCss === 'undefined' ) return
    const formData = new FormData()
    formData.append('file' , fileCss)
    try{
      const endpoint =  UrlServer + "/uploadFileFilpTemp"
      // const res = await fetch(endpoint, {
      //   method: "POST",
      //   body: formData
      // });
      const uploadResponse = await fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      const res = await uploadResponse.json()

      if(res.success === true){
          setproducts_css(res.file_name)
          setproducts_css_id(res.fileId)
        debugger
        //UPDATE PRODUCT FILE NAME
        try{
          const jdata = JSON.stringify({
            products_id: products_id,
            products_pdf_id: products_pdf_id,
            products_pdf: pdf_filename,
            products_css_id: res.fileId,
            products_css: res.file_name
          }) 
          const response = await fetch(UrlServer + "/productscss/putunzip/" , {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: jdata
          });

          const res2 = await response.json()
          if(res2.success === true){
            setiError("File uploaded Sucessfully!")
          }else{
            setiError(res.message)  
            setproducts_pdf('Error File!')
          }
        }catch(error){  
          setiError(res.message)    
          setproducts_pdf('Error File!')
        }
         
      }else{
        setproducts_pdf('Error File!')
        setpdf_filename('')
        setiError(res.message)

      }
    }catch(err){
      //debugger
      console.log(err)
    }
 
  //
    dispatch(fetchUploaded_filesPdf());
  }


  const [fileHtml, setFileHtml] = useState<File | undefined>();
  function onChanageCaptureHTML(e: React.FormEvent<HTMLInputElement>): void{
    //debugger
    //setPreviewPdf(null)
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFileHtml(target.files[0]);      
  }

  const UploadFileHTML = async() => {
    debugger
    if( typeof fileHtml === 'undefined' ) return
    const formData = new FormData()
    formData.append('file' , fileHtml)
    try{
      const endpoint =  UrlServer + "/uploadFileFilpTemp"
      // const res = await fetch(endpoint, {
      //   method: "POST",
      //   body: formData
      // });
      const uploadResponse = await fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      const res = await uploadResponse.json()

      if(res.success === true){
           setproducts_html(res.file_name)
           setproducts_html_id(res.file_name)
        debugger
        //UPDATE PRODUCT FILE NAME
        try{
          const jdata = JSON.stringify({
            products_id: products_id,
            products_pdf_id: products_pdf_id,
            products_pdf: pdf_filename,
            products_html_id: res.fileId,
            products_html: res.file_name
          }) 
          const response = await fetch(UrlServer + "/productshtml/put/" , {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: jdata
          });

          const res2 = await response.json()
          if(res2.success === true){
            setiError("File uploaded Sucessfully!")
          }else{
            setiError(res.message)  
            setproducts_pdf('Error File!')
          }
        }catch(error){  
          setiError(res.message)    
          setproducts_pdf('Error File!')
        }
         
      }else{
        setproducts_pdf('Error File!')
        setpdf_filename('')
        setiError(res.message)

      }
    }catch(err){
      //debugger
      console.log(err)
    }
 
  //
    dispatch(fetchUploaded_filesPdf());
  }




  const FragmentTemplate = () => {
    return(
      <>
        <Fragment>    
                <div className="e-card__body e-pd-0">

                  <div className="e-overflow-auto">

                    <table className="e-tbl">

                      <thead className="e-tbl__header">
                        <tr className="e-tbl__row">                      
                          <th className="e-tbl__head">Id</th>
                          <th className="e-tbl__head">Product Name</th>                        
                          <th className="e-tbl__head">Quantity</th>
                          <th className="e-tbl__head">Price</th>
                          <th className="e-tbl__head">Weight</th>
                          {/* <th className="e-tbl__head">Date added</th> */}
                          <th className="e-tbl__head">Status</th>
                          <th colSpan={4}></th>
                       
              
                        </tr>
                      </thead>

                      <tbody id="myTable" className="e-tbl__body">

                        {data.map((i) => (      
                                           
                          <tr className="e-tbl__row" key={i.products_id} data-modal-target="ease-message-user-data">

                            <td className="e-tbl__data">{i.products_id}</td>
                            <td className="e-tbl__data">

                              <div className="e-d-flex e-align-center">

                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src={UrlServer + '/' + i.products_image} alt="" className="e-avat__img" />
                                  </div>
                                </div>

                                <div className="user-details">
                                  <span className="e-fs-15 e-d-block">{i.products_model}</span>
                                  <span className="e-fs-12">{i.categories_name} - {i.products_name} - {i.products_url} </span>
                                  
                                </div>

                              </div>

                            </td>

                            <td className="e-tbl__data">{i.products_quantity}</td>

                            <td className="e-tbl__data">{i.products_price}</td>

                            <td className="e-tbl__data">{i.products_weight}</td>
                            {/* <td className="e-tbl__data">{i.products_date_added}</td> */}
                            <td className="e-tbl__data">
                              {/* <span className="ease-level-silver e-fw-md">{i.products_status}</span> */}

                              <div className="e-form__group" >
                                <section>
                                  <div className="e-flex-6 e-flex-sm-3 e-mg-b-8 e-mg-b-0-sm">
                                
                                  
                                  {/* <select 
                                      value={i.products_status} 
                                      // onChange={(i) => onStatusSelect(i)}
                                      className="e-fs-12 e-bdg e-bdg-success" >
                                      <option className='e-bdg e-bdg-danger' value="0" key="0">ยกเลิก</option>
                                      <option className='e-bdg e-bdg-success' value="1" key="1">นำไปใช้</option> 
                                  </select> */}
                                  {products_status>0?(
                                 <span key={1} className="e-fs-12 e-bdg e-bdg-success">นำไปใช้</span>
                               ):( <span key={0}  className='e-fs-12 e-bdg e-bdg-danger'>ยกเลิก</span>)}

                                  </div> 
                                </section>
                              </div>

                            </td>
                            <td>
                              <div>

                                {/* <Link to={`/products_edit/${i.products_id}`}>
                                   <span className="e-d-flex e-align-center">
                                      <i className="ri-draft-line e-mg-r-10"></i>
                                   </span>  
                                </Link> */}
                                
                                <button onClick={() =>(onClickEdit(i))}>
                                  <span className="e-d-flex e-align-center">
                                     <i className="ri-draft-line e-mg-r-10 e-bdg e-bdg-success"></i>
                                  </span>                           
                                </button>

                                <button onClick={() => ADataDelete(i)}>
                                  <span className="e-d-flex e-align-center">
                                      <i className="ri-delete-bin-line e-mg-r-10 e-bdg e-bdg-danger"></i>
                                  </span>                           
                                </button>
                                
                                <button onClick={() =>(onClickUploadPdf(i))}>
                                  <span className="e-d-flex e-align-center">
                                     <i className="ri-draft-line e-mg-r-10 e-bdg e-bdg-success">pdf</i>
                                  </span>                           
                                </button>

                                {i.categories_id == 11?(
                                  <Link to={`/pdfebook/` + i.products_id}>
                                                                      <span className="e-d-flex e-align-center">
                                      <span className=" e-fs-12 e-d-flex e-align-center">ไฟล์ pdf e-book</span>
                                      <i className="ri-draft-line e-mg-r-10 ">  </i>
                                    </span>  
                                  </Link>
 

                                ):("")}


                                {/* <button onClick={() => onClickEdit(i)}>
                                  <span className="e-d-flex e-align-center">
                                      <i className="ri-draft-line e-mg-r-10 e-bdg e-bdg-warn"></i>...
                                  </span>                           
                                </button> */}

                              </div>
                            </td>
                          

 
                          </tr>
             
                         

                        ))}
                                                  
                      </tbody>
                    </table>
                  </div>
                </div>
 
        </Fragment>  
      </>
    )
  }

  return (<>

      <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
      
            <div className="e-flex-md-2 e-mg-b-20 e-mg-b-0-md e-card">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">Menu</span>  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text"></span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>                    
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0 e-d-flex e-fd-column e-justify-between">

                  <Menubar />
  
                </div>
  
              </div>
  
            </div>
  

  
            <div className="e-flex-md-10">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld"><i className="ri-star-line e-mg-r-10"></i>รายการสินค้า</span>
                  <span className="e-fs-10 e-bdg"><h5>ประเภท</h5></span>  
                  <div className="e-d-flex  e-align-center">
            
                    <div className="e-mg-l-10">
                   
             <select 
                                  value={categories_selection} 
                                  onChange={(e) => onSearchCateSelect(e.target.value)}
                                  className="e-fs-12 e-bdg e-bdg-success" >
                                  <option value={0} key="0" className=''>เลือกทุกประเภท</option>
                                  {category.map((c) =>(
                                    <option value={c.categories_id} key={c.categories_id}>{c.categories_name}</option>
                                  ))}
                              </select>  
                      
                    </div>
                  </div>

                  <div className="e-header__form">
                    <div className="e-form">
                      <div className="e-form__group" >
                        <section>
         
                      </section>
                      </div>
                    </div>
                  </div>

                  <div className="e-header__form">
                    <div className="e-form">

    
                      <div className="e-form__group" >
                        <input id="myInput" type="text" className="e-form__input" placeholder="Search..." 

                          onChange={(e) =>onChanageTxt(e)}  

                        />
                        <i className="ri-search-line e-form__icon" ></i>          
                      </div>
                    </div>
                  </div> 
                  
                  <div className="e-d-flex e-align-center" >
                    {/* <button type="button" className="e-btn e-btn-sm e-btn-primary e-mg-r-10">
                      <i className="ri-arrow-up-line e-mg-r-10"></i>
                      Export
                    </button> */}

                    <button type="button" className="e-btn e-btn-secondary e-btn-sq"  onClick={(e) =>(onClickInsert(e))}>
                      <i className="ri-add-line"></i>
                    </button>
                  </div> 


 

                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  

                    <FragmentTemplate />

                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </section>
      </div>    
  



{/* Modal Edit */}
    <section>

      <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-user-data">
            <div className="e-container">
     
              <div className="e-card ease-client">

                <div className="e-card__body e-pd-0 ease-client-overview e-pd-y-20">
                  <div className="e-overflow-auto">     
                 {!typeUpdateModal ? (
                   <section className="ease-client-overview e-pd-y-20"> 
                      <div>
                        <div className="e-card__body e-form__group e-d-flex e-align-center e-pd-l-20"> 
                          <div className="e-d-flex">
                            <button type="button" className="e-btn-icon" onClick={() =>(onCloseModal(`#ease-message-user-data`))}><i className="ri-reply-line"></i></button>
 
                            <button type="button" className="e-btn-icon" onClick={() => AccessData('delete')} ><i className="ri-delete-bin-line"></i></button>
                             
                          </div>

                          <div>
                                                                          
                            {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                        
                          </div> 
                                                                            
                        </div>  

                      </div>  
                      <div className="e-card__body ease-inbox-body e-pd-0">
                        <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">{ products_name }</span>                 
                        </div>                        
                        <div className="e-flex-sm-5 e-flex-md-12 e-flex-lg-5">
                          <div className="e-card ease-featured-project e-overflow-hidden">
                            <img src={UrlServer + '/' + products_image} alt="" width={450} />         
                          </div>
                          <div className="e-card ease-featured-project e-overflow-hidden">
                              <img src={preview} alt="" width={450} /> 
                          </div>
                        </div>                          
                      </div>                  
                   </section>
                  ):(
                    
                    <section className="ease-client-overview e-pd-y-20"> 
                        
                      <div>
                        <div className="e-card__body e-form__group e-d-flex e-align-center e-pd-l-20"> 
                          <div className="e-d-flex">
                            <button type="button" className="e-btn-icon" onClick={() =>(onCloseModal(`#ease-message-user-data`))}><i className="ri-reply-line"></i></button>
                            <button type="button" className="e-btn-icon" onClick={UploadFile}><i className="ri-attachment-line"></i></button>
                            <button type="button" className="e-btn-icon" onClick={() => AccessData('update')} ><i className="ri-add-line"></i></button>
                            {/* <button type="button" className="e-btn-icon" onClick={() => AccessData('delete')} ><i className="ri-delete-bin-line"></i></button> */}
                            <button type="button" className="e-btn-icon"  onClick={() => onClickSearchImgFileUpload()} ><i className="ri-folders-line"></i></button>
                                                          
                          </div>

                          <div>
                                                                          
                            {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                        
                          </div> 
                                                                            
                        </div>  

                      </div>  

                      <div>
                        
                          <Uploaded_FilesItem value={value} onSearch={onSearch}  />  

                      </div>
                      <div className="e-card__body ease-inbox-body e-pd-0">
                        <ul className="ease-inbox-messages ease-communication">
                            <li className="e-tbl__row ease-messages-row">
                                  
                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20" >  
                                <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัส/Id</span>    
                                <input type="number" placeholder='Enter your products id' className="e-form__input e-pd-l-10"        
                                  value={ products_id } onChange={(e) => (setproducts_id(e.target.value))}    
                                />      
                              </div>  


                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">จำนวน/Quantity</span>    
                                  <input type="number" placeholder='Enter your products quantity' className="e-form__input e-pd-l-10"        
                                    value={ products_quantity } onChange={(e) => (setproducts_quantity(e.target.value))}         
                                  />      
                              </div>  


                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ชื่อรุ่นสินค้า/Model</span>    
                                  <input type="text" placeholder='Enter your products model' className="e-form__input e-pd-l-10"        
                                    value={ products_model } onChange={(e) => (setproducts_model(e.target.value))}         
                                  />      
                              </div>  


                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รูปภาพ/Image</span>    
                                  <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                                    value={ products_image } 
                                
                                      onChange={(e) => (onChanage(e))}         
                                  />  


                                  <span><i className="ri-attachment-line">:</i></span>      
                                  <input type="file" id="img" name='image' accept='image/*' onChangeCapture={onChanageCapture} />     
                                                                                        
                              </div> 
                            
                              <div className="e-flex-sm-5 e-flex-md-12 e-flex-lg-5">

                                <div className="e-card ease-featured-project e-overflow-hidden">
                                  <img src={UrlServer + '/' + products_image} alt="" width={450} />         
                                </div>
                                <div className="e-card ease-featured-project e-overflow-hidden">
                                    <img src={preview} alt="" width={450} /> 
                                </div>
                              

                              </div>                         

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ราคา/Price</span>    
                                  <input type="text" placeholder='Enter your products price' className="e-form__input e-pd-l-10"        
                                    value={ products_price } onChange={(e) => (setproducts_price(e.target.value))}         
                                  />      
                              </div> 
                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">น้ำหนักสินค้า/Weight(ถ้ามี)</span>    
                                  <input type="text" placeholder='Enter your products weight' className="e-form__input e-pd-l-10"        
                                    value={ products_weight } onChange={(e) => (setproducts_weight(e.target.value))}         
                                  />      
                              </div>                                     
                            </li>

                            <li className="e-tbl__row ease-messages-row">
                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ชื่อสินค้า/Products Name</span> 
                                <input type="text" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                    value={ products_name } onChange={(e) => (setproducts_name(e.target.value))}         
                                  />  
                              </div>

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รายละเอียดอื่น ๆ/Products Url</span> 
                                <input type="text" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                    value={ products_url } onChange={(e) => (setproducts_url(e.target.value))}         
                                  />  
                              </div>

                              <div className="e-form__group e-form e-d-flex e-align-center e-pd-l-20">  
                                <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รายละเอียดสินค้า/Description</span> 
                                <div className="e-form__group e-pd-l-20">
                                  <textarea className="e-form__input e-form__textarea e-pd-l-20"
                                    value={ products_description } onChange={(e) => (setproducts_description(e.target.value))}  
                                  >
                                    
                                  </textarea>

                                </div>
                              </div>

                            </li>


                            <li className="e-tbl__row ease-messages-row">

                                <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                    <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่ลงสินค้า/Date added</span>    
                                    <input type="text" placeholder='Enter your products date added' className="e-form__input e-pd-l-10"        
                                      value={ products_date_added } onChange={(e) => (setproducts_date_added(e.target.value))}         
                                    />      
                                </div>  


                                <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                    <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่แก้ไขล่าสุด/Last modified</span>    
                                    <input type="text" placeholder='Enter your products last modified' className="e-form__input e-pd-l-10"        
                                      value={ products_last_modified } onChange={(e) => (setproducts_last_modified(e.target.value))}         
                                    />      
                                </div>  


                                <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                    <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่สินค้าจะถึงร้าน/Date available</span>    
                                    <input type="text" placeholder='Enter your products date available' className="e-form__input e-pd-l-10"        
                                      value={ products_date_available } onChange={(e) => (setproducts_date_available(e.target.value))}         
                                    />      
                                </div>  
                            </li>

                            <li className="e-tbl__row ease-messages-row">

                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัสภาษี/tax class id</span>    
                                  <input type="number" placeholder='Enter your products tax class id' className="e-form__input e-pd-l-10"        
                                    value={ products_tax_class_id } onChange={(e) => (setproducts_tax_class_id(e.target.value))}         
                                  />      
                              </div>  


                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัสผู้ผลิต/Id</span>    
                                  <input type="number" placeholder='Enter your manufacturers id' className="e-form__input e-pd-l-10"        
                                    value={ manufacturers_id } onChange={(e) => (setmanufacturers_id(e.target.value))}         
                                  />      
                              </div>  


                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">จำนวนสั่งซื้อล่าสุด/Ordered</span>    
                                  <input type="number" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                    value={ products_ordered } onChange={(e) => (setproducts_ordered(e.target.value))}         
                                  />      
                              </div>   


                            </li>

                            <li className="e-tbl__row ease-messages-row">
                              <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                  <span className="e-tt-uppercase e-flex-auto e-mg-r-10">สถานะใช้งาน/Status</span>    
                                  {/* <input type="radio" placeholder='Enter your products status' className="e-form__input e-pd-l-10"        
                                    value={ products_status } onChange={(e) => (setproducts_status(e.target.value))}         
                                  />       */}

                                <select 
                                    value={products_status} 
                                    onChange={(e) => (setproducts_status(e.target.value))}
                                    className="e-fs-12 e-bdg e-bdg-success" >
                                    <option className='e-bdg e-bdg-danger' value="0" key="0">ยกเลิก</option>
                                    <option  value="1" key="1">นำไปใช้</option> 
                                </select>  
                               
                              </div>  
                            </li>

                        </ul>                                

                      </div>
                    </section>     
                  
                  )}
        


       
                  </div>  

                </div> 

              </div>
              {/* end */}


          </div>
      </div>

 
    </section>
         

{/* Modal Insert */}
    <section className='ease-message-block'>
      <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-user-data-insert">
            <div className="e-container">
     
              <div className="e-card ease-client">

                <div className="e-card__body e-pd-0 ease-client-overview e-pd-y-20">

                  <div className="e-overflow-auto">

                      <section className="ease-client-overview e-pd-y-20"> 
                      
                            <div>
                              <div className="e-card__body e-form__group e-d-flex e-align-center e-pd-l-20"> 
                                <div className="e-d-flex">
                                  <button type="button" className="e-btn-icon"  onClick={() =>(onCloseModal(`#ease-message-user-data-insert`))}><i className="ri-reply-line"></i></button>
                                  <button type="button" className="e-btn-icon" onClick={UploadFile}><i className="ri-attachment-line"></i></button>
                                  <button type="button" className="e-btn-icon" onClick={() => AccessData('insert')} ><i className="ri-add-line"></i></button> 
                                  <button type="button" className="e-btn-icon"  onClick={() => onClickSearchImgFileUpload()} ><i className="ri-folders-line"></i></button>
                                </div>
 
                                <div>
                                                                                
                                  {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                              
                                </div> 
                              </div>               
                            </div> 
                            <div>
                                <Uploaded_FilesItem value={value} onSearch={onSearch}  />  
                            </div>
                            <div className="e-card__body ease-inbox-body e-pd-0">
                              <ul className="ease-inbox-messages ease-communication">
                                  <li className="e-tbl__row ease-messages-row">
                                        
                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20" >  
                                      <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัส/Id</span>    
                                      <input type="number" placeholder='Enter your products id' className="e-form__input e-pd-l-10"        
                                        value={ products_id } onChange={(e) => (setproducts_id(e.target.value))}    
                                      />      
                                    </div>  


                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">จำนวน/Quantity</span>    
                                        <input type="number" placeholder='Enter your products quantity' className="e-form__input e-pd-l-10"        
                                          value={ products_quantity } onChange={(e) => (setproducts_quantity(e.target.value))}         
                                        />      
                                    </div>  


                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ชื่อรุ่นสินค้า/Model</span>    
                                        <input type="text" placeholder='Enter your products model' className="e-form__input e-pd-l-10"        
                                          value={ products_model } onChange={(e) => (setproducts_model(e.target.value))}         
                                        />      
                                    </div>  


                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รูปภาพ/Image</span>    
                                        <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                                          value={ products_image } 
                                      
                                            onChange={(e) => (onChanage(e))}         
                                        />  


                                        <span><i className="ri-attachment-line">:</i></span>      
                                        <input type="file" id="img" name='image' accept='image/*' onChangeCapture={onChanageCapture} />     
                                                                                              
                                    </div> 
                                  
                                    <div className="e-flex-sm-5 e-flex-md-12 e-flex-lg-5">

                                      <div className="e-card ease-featured-project e-overflow-hidden">
                                        <img src={UrlServer + '/' + products_image} alt="" width={450} />         
                                      </div>
                                      <div className="e-card ease-featured-project e-overflow-hidden">
                                          <img src={preview} alt="" width={450} /> 
                                      </div>
                                    

                                    </div>                         

                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ราคา/Price</span>    
                                        <input type="text" placeholder='Enter your products price' className="e-form__input e-pd-l-10"        
                                          value={ products_price } onChange={(e) => (setproducts_price(e.target.value))}         
                                        />      
                                    </div> 
                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">น้ำหนักสินค้า/Weight(ถ้ามี)</span>    
                                        <input type="text" placeholder='Enter your products weight' className="e-form__input e-pd-l-10"        
                                          value={ products_weight } onChange={(e) => (setproducts_weight(e.target.value))}         
                                        />      
                                    </div>                                     
                                  </li>

                                  <li className="e-tbl__row ease-messages-row">
                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ชื่อสินค้า/Products Name</span> 
                                      <input type="text" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                          value={ products_name } onChange={(e) => (setproducts_name(e.target.value))}         
                                        />  
                                    </div>

                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รายละเอียดอื่น ๆ/Products Url</span> 
                                      <input type="text" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                          value={ products_url } onChange={(e) => (setproducts_url(e.target.value))}         
                                        />  
                                    </div>

                                    <div className="e-form__group e-form e-d-flex e-align-center e-pd-l-20">  
                                      <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รายละเอียดสินค้า/Description</span> 
                                      <div className="e-form__group e-pd-l-20">
                                        <textarea className="e-form__input e-form__textarea e-pd-l-20"
                                          value={ products_description } onChange={(e) => (setproducts_description(e.target.value))}  
                                        >
                                          
                                        </textarea>

                                      </div>
                                    </div>

                                  </li>


                                  <li className="e-tbl__row ease-messages-row">

                                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่ลงสินค้า/Date added</span>    
                                          <input type="text" placeholder='Enter your products date added' className="e-form__input e-pd-l-10"        
                                            value={ products_date_added } onChange={(e) => (setproducts_date_added(e.target.value))}         
                                          />      
                                      </div>  


                                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่แก้ไขล่าสุด/Last modified</span>    
                                          <input type="text" placeholder='Enter your products last modified' className="e-form__input e-pd-l-10"        
                                            value={ products_last_modified } onChange={(e) => (setproducts_last_modified(e.target.value))}         
                                          />      
                                      </div>  


                                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">วันที่สินค้าจะถึงร้าน/Date available</span>    
                                          <input type="text" placeholder='Enter your products date available' className="e-form__input e-pd-l-10"        
                                            value={ products_date_available } onChange={(e) => (setproducts_date_available(e.target.value))}         
                                          />      
                                      </div>  
                                  </li>

                                  <li className="e-tbl__row ease-messages-row">
  
                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัสภาษี/tax class id</span>    
                                        <input type="number" placeholder='Enter your products tax class id' className="e-form__input e-pd-l-10"        
                                          value={ products_tax_class_id } onChange={(e) => (setproducts_tax_class_id(e.target.value))}         
                                        />      
                                    </div>  


                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">รหัสผู้ผลิต/Id</span>    
                                        <input type="number" placeholder='Enter your manufacturers id' className="e-form__input e-pd-l-10"        
                                          value={ manufacturers_id } onChange={(e) => (setmanufacturers_id(e.target.value))}         
                                        />      
                                    </div>  


                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">จำนวนสั่งซื้อล่าสุด/Ordered</span>    
                                        <input type="number" placeholder='Enter your products ordered' className="e-form__input e-pd-l-10"        
                                          value={ products_ordered } onChange={(e) => (setproducts_ordered(e.target.value))}         
                                        />      
                                    </div>   


                                  </li>

                                  <li className="e-tbl__row ease-messages-row">
                                    <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                                        <span className="e-tt-uppercase e-flex-auto e-mg-r-10">สถานะใช้งาน/Status</span>    
                                        {/* <input type="radio" placeholder='Enter your products status' className="e-form__input e-pd-l-10"        
                                          value={ products_status } onChange={(e) => (setproducts_status(e.target.value))}         
                                        />       */}

                                      <select 
                                          value={products_status} 
                                          onChange={(e) => (setproducts_status(e.target.value))}
                                          className="e-fs-12 e-bdg e-bdg-success" >
                                          <option className='e-bdg e-bdg-danger' value="0" key="0">ยกเลิก</option>
                                          <option  value="1" key="1">นำไปใช้</option> 
                                      </select>  

                                    </div>  
                                  </li>

                              </ul>  
                            </div>

                                   
                      </section> 

                  </div>  

                </div> 

              </div>
              {/* end */}


          </div>
      </div>
    </section>


{/* Modal upload pdf */}
<section className='ease-message-block'>
      <div className="ease-inbox-modal e-pd-y-20 ease-client-overview ease-modal ease-communication-modal " id="ease-message-user-data-uploadpdf">
            <div className="e-container">
     
              <div className="e-card ease-client">

                <div className="e-card__body e-pd-0 ease-client-overview e-pd-y-20">

                  <div className="e-overflow-auto">
                      <section className="ease-client-overview e-pd-y-20">
                            <div>
                              <div className="e-card__body e-form__group e-d-flex e-align-center e-pd-l-20"> 
                                <div className="e-d-flex">
                                  <button type="button" className="e-btn-icon"  onClick={() =>(onCloseModal(`#ease-message-user-data-uploadpdf`))}><i className="ri-reply-line"></i></button>
                                 
                                </div>
 
                                <div>
                                                                                
                                  {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                              
                                </div> 
                              </div>               
                            </div> 
                      </section>


                    <div className="e-card__body e-pd-0">

 

{/* //pdf */}

                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20 e-d-flex"> 


                            <span className="e-tt-uppercase e-flex-auto e-mg-r-10">1.ไฟล์ PDF:</span>    
                            <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                              value={ pdf_filename } 
                          
                                //onChange={(e) => (onChanage(e))}         
                            />  


                          <span><i className="ri-attachment-line"></i></span>       
                          <input type="file" id="pdf" name='pdf' accept='pdf/*' onChangeCapture={onChanageCapturePdf} className="e-mg-l-10" />     
                                                                                          
                      </div> 
                      <div  className="e-pd-y-5">
                          <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">
                            
                            <button type="button" className="e-btn-icon" onClick={UploadFilePdf}><i className="ri-add-line"></i></button> 
                          
                          </div>                         
                      </div>

{/* //css */}
                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20 e-d-flex"> 

                            <span className="e-tt-uppercase e-flex-auto e-mg-r-10">2.ไฟล์ CSS.zip:</span>    
                            <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                              value={ products_css } 
                          
                                //onChange={(e) => (onChanage(e))}         
                            />  


                          <span><i className="ri-attachment-line"></i></span>      
                          <input type="file" id="css" name='css' accept='css/*' onChangeCapture={onChanageCaptureCss} className="e-mg-l-10" />     
                                                                                          
                      </div> 
                      <div className='e-pd-y-5'>
                        <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">
                          
                          <button type="button" className="e-btn-icon" onClick={UploadFileCSS}><i className="ri-add-line"></i></button> 
                        
                        </div> 
                      </div>

{/* //html */}
                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20 e-d-flex"> 

                            <span className="e-tt-uppercase e-flex-auto e-mg-r-10">3.ไฟล์ HTML:</span>    
                            <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                              value={ products_html } 
                          
                                //onChange={(e) => (onChanage(e))}         
                            />  


                          <span><i className="ri-attachment-line"></i></span>      
                          <input type="file" id="html" name='html' accept='html/*' onChangeCapture={onChanageCaptureHTML} className="e-mg-l-10" />     
                                                                                          
                      </div> 
                      <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">
                        
                        <button type="button" className="e-btn-icon  " onClick={UploadFileHTML}>                       
                          <i className="ri-add-line"></i>
                        </button> 
                      
                      </div>


                    </div>
                            
                  </div>  

                </div> 

              </div>
              {/* end */}


          </div>
      </div>
    </section>



   </>
  )
}

export default DataProductsList
