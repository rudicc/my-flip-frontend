import React, { BaseSyntheticEvent, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { UrlServer } from '../services'
import axios from '../axios'

const CheckPayment =({ imgqr }) =>{

  const data = useAppSelector((state) => state.orders_productscutomers.orders_products_cutomers)

  const [ receipts_image, setReceipts_image ] = useState<string>('') 
  const onChanage = ( e : BaseSyntheticEvent ) => {
    //debugger 
    setReceipts_image(e.target.value)
  }

  //setimg_filename
  const [ img_filename, setimg_filename ] = useState<string>('') 
  const [ ierror, setiError ] = useState('');
  const [ file, setFile ] = useState<File | undefined>();
  const [ preview, setPreview ] = useState<string | ArrayBuffer | null>(null);

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
      const endpoint =  UrlServer + "/uploadFileReceipts"
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
        setReceipts_image('img/receipts/' + res.file_name)
        setimg_filename(res.file_name)
        setiError("File uploaded Sucessfully!")
        let file_name = res.file_name;
        debugger
        try{
          //DATA IMAGE RECEIPTS
          const jdata = JSON.stringify({
              orders_id: data[0].orders_id,
              customers_id: data[0].customers_id,
              billing_img_receipt: file_name,
              update_user: data[0].customers_name       
            });
            const res = await axios.put('/orders_basket_img/put/', jdata,{
              headers: {
                  'Content-Type': 'application/json'
              },
            });
            if(res.data?.success){
                setiError("Update File Name  Sucessfully!")
            }else{
                setiError("Error Update File Name :" + res.data?.message)
            }
           
        }catch(error){
          console.log(error)
          setiError("Error Update File Name !" + error)
        }
  
      }else{
        setReceipts_image('Error File!')
        setimg_filename('')
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
      {/* <div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
        
            <div className="e-flex-md-12">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">Inbox updates</span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text">Refreshed 1h ago</span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
  
                    <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>Inbox</span>
                      <a href="inbox.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                    </div>
  
                    <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex-lg">
  
                          <div className="e-mg-r-10">
                              <div className=""><img src={imgqr} alt="" className=""/></div>
                              </div>  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">..</span>
  
                        </div>
  
                      </div>
  
                    </div>     
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </section>
      </div>     */}


<div className='details'>       
          <section className="ease-communication-overview e-pd-y-20">
  
          <div className="e-row">
  
            <div className="e-flex-md-6 e-mg-b-20 e-mg-b-0-md">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">qr ชำระเงิน</span>
  
                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12 ease-faded-text">Refreshed</span>
                    <div className="e-mg-l-10">
                      <button type="button" className="e-btn-icon"><i className="ri-refresh-line"></i></button>
                    </div>
                  </div>
                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-message">
  
                    {/* <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>Messages</span>
                      <a href="messages.html" className="e-btn e-btn-secondary e-btn-link e-tt-none">View all</a>
                    </div> */}
  
                    <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex">
  
                            <div className="e-mg-r-10">
                              <div className="">
                                <img src={imgqr} alt="" className="" /></div>
                            </div>
  
      
  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">02/02/23 || 09:45 AM</span>
  
                        </div>
  
                      </div>
  
                    </div>
  
                    {/* <div className="e-tbl__row">
  
                      <div className="e-tbl__data e-pd-x-20">
  
                        <div className="ease-communication-content">
  
                          <div className="e-d-flex">
  
                            <div className="e-mg-r-10">
                              <div className="e-avat e-avat-30"><img src="images/user-f-2.jpg" alt=""
                                  className="e-avat__img"/></div>
                            </div>
  
                            <div className="ease-communication-details">
                              <span className="e-h5 e-d-block">Samantha R.</span>
                              <p className="e-fs-12 ease-content">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Eos voluptate odio saepe voluptatum magnam voluptas!</p>
                            </div>
  
                          </div>
  
                          <span className="ease-meta e-fs-12 ease-faded-text">02/01/23 || 07:25 AM</span>
  
                        </div>
  
                      </div>
  
                    </div> */}
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
            <div className="e-flex-md-6">
  
              <div className="e-card ease-communication">
  
                <div className="e-card__header">
                  <span className="e-card__title e-fw-bld">อัฟโหลด ใบเสร็จชำระเงิน</span>
                  <div>
                                                                          
                    {ierror === "" || null ?(""):(<span className="e-fs-12 e-bdg e-bdg-danger">{ierror}</span>)}
                                                                
                  </div> 



                  <div className="e-d-flex e-align-center">
                    <span className="e-fs-12">แนบใบเสร็จ</span>


                    <div className="e-mg-l-10 e-bdg e-bdg-success ease-bdg">
                    <button type="button" className="e-btn-icon " 
                      onClick={UploadFile}
                    ><i className="ri-attachment-line"></i></button>

                
                    </div>
                  </div>


  

                </div>
  
                <div className="e-card__body e-pd-0">
  
                  <div className="ease-inbox">
                  <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <input type="file" id="img" name='image' accept='image/*' onChangeCapture={onChanageCapture} /> 

                  </div>

                    <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                      <span>รูปภาพ</span>
                      <input type="text" placeholder='Enter your products image' 
                        className="e-form__input e-pd-l-10"        
                        value={ receipts_image } 
                        onChange={(e) => (onChanage(e))}         
                      />   
                    </div>

                     <div className="e-tbl__header e-d-flex e-justify-between e-align-center e-pd-x-20 e-pd-y-16">
                        <img src={UrlServer +"/"+ receipts_image} alt='' />
                     </div> 
  
  {data.length >0?(

            data.map((i) =>(
                <div className="e-tbl__row">
  
                <div className="e-tbl__data e-pd-x-20">

                  <div className="ease-communication-content">

                    <div className="e-d-flex-lg">

                      <div className="left-side e-d-flex e-mg-r-10-lg">              
                        <div className="ease-communication-details">
                          <span className="e-h5 e-d-block">{i.products_model}</span>
                          <p className="e-fs-12">{i.products_name}</p>
                        </div>

                      </div>

                      <div className="right-side">
                        <div className="ease-communication-details">
                          <span className="e-h5 e-d-block">{i.products_name}</span>
                          {/* <p className="e-fs-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Voluptatum velit rem tempora?</p> */}
                        </div>
                      </div> 

                    </div>

                    <span className="ease-meta e-fs-12 ease-faded-text">..</span>

                  </div>

                </div>

              </div> 

            ))


  ):("")}
  
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

export default CheckPayment
