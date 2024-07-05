import { useContext } from "react"
import UserContext from "../context/UserContext"


function Profile() {
  const {user} = useContext(UserContext)
  
  if(!user) return <h3>Please Login</h3>

  return <h3>Welcome {user.username}</h3>
}

export default Profile