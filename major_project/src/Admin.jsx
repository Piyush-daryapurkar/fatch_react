import React from 'react'
import { useState,useEffect } from 'react'
import { getuser,adduser, deleteuser } from './api/userService';


const Admin = () => {
    const [user_data,update_user_data]=useState([]);
    const [name,updatename]=useState("");
    const [email,updateemail]=useState("")
    const [password,updatepassword]=useState("")

    useEffect(()=>{
        const fetchuser=async()=>{
            const data=await getuser();
            update_user_data(data)
        }
        fetchuser()
    },[])


    const handaladduser=async()=>{
      if(name && email && password){
        const newuser={name,email,password}
        const adduser1=await adduser(newuser);

        update_user_data((prev)=>[...prev,adduser1]);
        updatename("")
        updateemail("")
        updatepassword("")
    

      }
      else{
        alert("data not inserted")
      }
    }
    const handledelete=async(id)=>{
      alert(id)
      const deleteuser1=await deleteuser(id)
      update_user_data(user_data.filter((user)=>user.id!==id))
    }

    localStorage.setItem("user_data",JSON.stringify(user_data))

    

  return (
    <>

    <table border={""}>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        <th>remove</th>
        <th>delete</th>
    </tr>
    {
        user_data.map((item)=>(
            
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <button><td>remove</td></button>
                    <td><button onClick={()=>handledelete(item.id)}>delete</button></td>
                  </tr>
            ))
    }
    </table>

    <form action="">
    
        <input type="text" value={name} onChange={(e)=>updatename(e.target.value)} /><br></br>
        <input type="text" value={email} onChange={(e)=>updateemail(e.target.value)} /><br></br>
        <input type="text" value={password} onChange={(e)=>updatepassword(e.target.value)} /><br></br>
        <button onClick={handaladduser}>add user</button>


    </form>


    
      
    </>
  )
}

export default Admin
