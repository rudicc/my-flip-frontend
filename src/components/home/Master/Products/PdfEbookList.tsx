import React, { useEffect, useState } from 'react'
import { GetDateNow } from '../../../../functions/Utility'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { useParams } from 'react-router-dom';
import { UrlServer } from '../../../services';
import { fetchUploaded_files } from '../../../../store/features/uploaded_filesSlice';

const PdfEbookList =() =>{
    debugger
    const products = useAppSelector((state) => state.producttbl.productstbl)//.filter(e => e.products_id == pid)
    const dispatch = useAppDispatch();

    const  { pid } = useParams()
    const [ data , setdata ] = useState(products)


    const [ierror, setiError] = useState('');
    const [file, setFile] = useState<File | undefined>();
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const [ products_pdf, setproducts_pdf ] = useState<string>('');
    const [ pdf_filename, setpdf_filename ] = useState<string>('');
    const setupData = () =>{
      const da = products.filter(e => e.products_id == pid);
         setdata(da)
         setproducts_pdf(products[0].products_pdf)
         setpdf_filename(products[0].products_pdf)


    }
    useEffect(() =>{
      if(data.length>0){

      }else{
        setupData()
      }
      //
    })
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
          debugger
          //UPDATE PRODUCT FILE NAME
          try{
            const jdata = JSON.stringify({
              products_id: pid,
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
      //dispatch(fetchUploaded_files());
    }



  return (
    <>
      <div className='details'>       
          <section className="ease-communication-overview   e-pd-y-20">
  
              <div className="e-row">
    
                <div className="e-flex-md-20 e-mg-b-20 e-mg-b-0-md">
       
                  <div className="e-card ease-communication">
      
                    <div className="e-card__header">
                      <span className="e-card__title e-fw-bld">อัฟโหลดไฟล์  PDF </span>
      
                      {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}

 
                      <div className="e-d-flex e-align-center">
                        <span className="e-fs-12 ease-faded-text">อัพโหลดไฟล์</span>
                          <div className="e-mg-l-10">
                            <button type="button" className="e-btn-icon" onClick={UploadFile}><i className="ri-attachment-line"></i></button>

                          </div>

      

                        <span className="e-fs-12 ease-faded-text">Refresh</span>
                        <div className="e-mg-l-10">
                          <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                        </div>
                      </div>
                    </div>
      

{data.map((i) =>(



                    <div className="e-card__body e-pd-0">
                      <div className="e-form__group e-d-flex e-align-center e-pd-l-20">  
                          <span className="e-tt-uppercase e-flex-auto e-mg-r-10">ไฟล์/pdf</span>    
                          <input type="text" placeholder='Enter your products image' className="e-form__input e-pd-l-10"        
                            value={ i.products_pdf } 
                        
                              //onChange={(e) => (onChanage(e))}         
                          />  


                          <span><i className="ri-attachment-line">:</i></span>      
                          <input type="file" id="pdf" name='pdf' accept='pdf/*' onChangeCapture={onChanageCapture} />     
                                                                                          
                      </div> 



                        <object datatype={UrlServer + "/pdf/productfile/" + i.products_pdf}
                                          type="application/pdf" width="250" height="550">                  
                        </object>
       
      
                    </div>
      
))}   


                  </div>
      
                </div>



    
              </div>
  
          </section>


          <section className="ease-communication-overview   e-pd-y-20">
  
              <div className="e-row">
    
                <div className="e-flex-md-20 e-mg-b-20 e-mg-b-0-md">
      
                  <div className="e-card ease-communication">
      
                    <div className="e-card__header">
                      <span className="e-card__title e-fw-bld">บล็อก</span>
      
                      <div className="e-d-flex e-align-center">
                        <span className="e-fs-12 ease-faded-text">ย้อนกลับ 1h ago</span>
                        <div className="e-mg-l-10">
                          <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                        </div>
                      </div>
                    </div>
      
                    <div className="e-card__body e-pd-0">
      
                      <div className="ease-message">
      
                        <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                          <span>ข้อความ</span>
                          <a href="messages.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                        </div>
      
                        <div className="e-tbl__row">
      
                          <div className="e-tbl__data e-pd-x-20">
      
                            <div className="ease-communication-content">
      
                              <div className="e-d-flex">
      
                                {/* <div className="e-mg-r-10">
                                {UrlServer +'/'+ data[0].products_image}  
                                  <div className="e-avat e-avat-30"><img src={UrlServer +'/'+ data[0].products_image} alt=""
                                      className="e-avat__img" /></div>
                                </div>*/}
      
                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">ข้อมูล</span>
                                  <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
                                </div>
      
                              </div>
      
                              <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>
      
                            </div>
      
                          </div>
      
                        </div>
      
                        <div className="e-tbl__row">
      
                          <div className="e-tbl__data e-pd-x-20">
      
                            <div className="ease-communication-content">
      
                              <div className="e-d-flex">
      
                                <div className="e-mg-r-10">
                                  <div className="e-avat e-avat-30"><img src="images/user-m-1.jpg" alt=""
                                      className="e-avat__img" /></div>
                                </div>
      
                                <div className="ease-communication-details">
                                  <span className="e-h5 e-d-block">ข้อมูล</span>
                                  <p className="e-fs-12 ease-content">ประเภทหนังสือ</p>
                                </div>
      
                              </div>
      
                              <span className="ease-meta e-fs-12 ease-faded-text">{GetDateNow()}</span>
      
                            </div>
      
                          </div>
      
                        </div>
      
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

export default PdfEbookList
