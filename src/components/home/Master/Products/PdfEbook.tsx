import React, { BaseHTMLAttributes, BaseSyntheticEvent, Fragment, useEffect, useState } from 'react'
import { PRODUCTS } from '../../../models/products.model'
import PdfEbookList from './PdfEbookList'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchProductsbyIdtbl, fetchProductstbl } from '../../../../store/features/products_tblSlice';
import { fetchUploaded_files } from '../../../../store/features/uploaded_filesSlice';
import { useParams } from 'react-router-dom';
import { UrlServer } from '../../../services';
import { GetDateNow } from '../../../../functions/Utility';

 
 
const PdfEbook =() =>{
  debugger
  const products = useAppSelector((state) => state.producttbl.productstbl)
  //const datapdfs = useAppSelector((state) => state.uploadedFilesPdf.uploadedfilespdf)

  //const dispatch = useAppDispatch();

  const  { pid } = useParams()
  const [ data , setdata ] = useState([])

  const [ebook, setEbook] = useState<string>('');
 
  //"application/html"
  const [ebooktype, setEbookType] = useState(false);

  const [ierror, setiError] = useState('');
  // const [file, setFile] = useState<File | undefined>();
  // const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  // const [ products_pdf, setproducts_pdf ] = useState<string>('');
  // const [ pdf_filename, setpdf_filename ] = useState<string>('');
  const setupData = () =>{
    if(products.length > 0){
      const da = products.filter(e => e.products_id == pid);
        setdata(da)
        // setproducts_pdf(products[0].products_pdf)
        // setpdf_filename(products[0].products_pdf)
    }else{
      setiError("ระบบไม่สามารถรีวิวไฟล์ได้เนื่องจากช่วงเวลาในหน้าจอของท่านสิ้นสุดการอ่านข้อมูล กรุณาย้อนกลับเรียกไฟล์อีกครั้ง..")
    }



  }
  useEffect(() =>{
    //debugger
    if(data.length>0){

    }else{
      setupData()
    }
    //
    //init();
  })

  const onShowEbook = async ( e ) =>{
    debugger
      
    try{
    
      if(data.length>0){
        var str:string = data[0].products_pdf;
        if(e == "pdf"){
         let path = UrlServer + "/pdf/productfile/" + str;  
         setEbook(path);
           setEbookType(false);   
        }else if(e == "filp"){
         let  path = UrlServer + "/pdf/productfile/" + str.replace(".pdf","") + "/" + str.replace(".pdf",".html");
         setEbook(path);
           setEbookType(true); 
        }       
      }
   
    }catch(err){
      console.log(err);

    }
  
  }
 
  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview   e-pd-y-20">

              <div className="e-row">
    
                <div className="e-flex-md-20 e-mg-b-20 e-mg-b-0-md">
      
                  <div className="e-card ease-communication">
      
                    <div className="e-card__header">
                      <span className="e-card__title e-fw-bld">E-Book </span>
      
                      {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}


                      <div className="e-d-flex e-align-center">
                        <span className="e-fs-12 ease-faded-text">แสดงหน้าจอ filp e-book</span>
                          <div className="e-mg-l-10">
                            <button type="button" className="e-btn-icon" 
                             onClick={() => onShowEbook('filp')}
                            ><i className="ri-attachment-line"></i></button>

                          </div> 

      

                        <span className="e-fs-12 ease-faded-text">แสดงหน้าจอ pdf e-book </span>
                        <div className="e-mg-l-10">
                          <button type="button" className="e-btn-icon"
                            onClick={() => onShowEbook('pdf')}
                          ><i className="ri-refresh-line"></i></button>
                        </div>
                      </div>
                    </div>
      

{data.map((i) =>(



                    <div className="e-card__body e-pd-0" >
                      {/* <div className="e-form__group e-d-flex e-align-center e-pd-l-20" >  
                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ไฟล์/pdf</span>    
                          <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                            value={ i.products_pdf } 
                        
                              //onChange={(e) => (onChanage(e))}         
                          />  


                          <span><i className="ri-attachment-line">:</i></span>      
                          <input type="file" id="pdf" name='pdf' accept='pdf/*' onChangeCapture={onChanageCapture} />     
                                                                                          
                      </div>  */}


                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20" >  
 

                          {!ebooktype?(
                            <object id="vpdf" data={ UrlServer + "/pdf/productfile/" + i.products_pdf}
                                              type="application/pdf" width={420}  height={550}
                                              className="e-form__group e-d-flex e-align-center e-pd-l-20">                  
                            </object>
                         ):(

                            <object id="vhtm" data={ ebook }
                                              type="application/html" width={420}  height={850}
                                              className="e-form__group e-d-flex e-align-center e-pd-l-20">                  
                            </object>                          
                         )}

                      </div>

        
                    </div>


     
    
  ))}    


                  </div>
      
                </div>



    
              </div>

          </section>

      
  </div>    

  </>

  )
}

export default PdfEbook
