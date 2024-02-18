import { useParams } from "react-router-dom"
 

const Admin = () =>{ 
debugger
const { id } = useParams()
  return (
    <>
      <div>
        Admin detail
      </div>
    </>
  )
}

export default Admin
