import { useEffect} from 'react'
import DataProductsList from './DataProductsList'
import { useAppDispatch } from '../../../../store/hooks';
import { fetchMenutab } from '../../../../store/features/menutabSlice';
import { fetchProductstbl } from '../../../../store/features/products_tblSlice';
import { fetchUploaded_files } from '../../../../store/features/uploaded_filesSlice';
import { fetchCategoriesSelection } from '../../../../store/features/categoriesSelectSlice';
import { fetchUploaded_filesPdf } from '../../../../store/features/uploaded_filesPdfSlice';



const DataProducts = () =>{
    const dispatch = useAppDispatch();
    useEffect(() => {
        debugger
      dispatch(fetchMenutab());
  
      dispatch(fetchProductstbl());
    
      dispatch(fetchUploaded_files());
  
      dispatch(fetchCategoriesSelection());

      dispatch(fetchUploaded_filesPdf());
  
    });
  return (
    <>
      <DataProductsList/>        
    </>
  )
}

export default DataProducts
