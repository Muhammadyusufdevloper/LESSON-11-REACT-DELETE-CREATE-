import { useState } from "react"

import  useFeatch  from "../../../hooks/useFetch"
import Users from "../../users/User"

const ManageUsers = () => {
  const [deleteUser,setDeleteUser] = useState(true) 
  let {data,loading,error} = useFeatch("/users",deleteUser)
  return (
    <div>
      <Users setReflashData={setDeleteUser} isAdmin={true}/>
    </div>
  )
}

export default ManageUsers