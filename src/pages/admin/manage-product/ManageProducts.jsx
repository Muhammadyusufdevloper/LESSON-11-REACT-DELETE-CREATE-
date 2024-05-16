import { useState } from "react"

import  useFeatch  from "../../../hooks/useFetch"
import Products from "../../../components/products/Products"

const ManageProducts = () => {
  const [reflshDelet,setReflashData] = useState(true) 
  let {data,loading,error} = useFeatch("/products",reflshDelet)
  return (
    <div>
      <Products setReflashData={setReflashData} isAdmin={true} data={data}/>
    </div>
  )
}

export default ManageProducts