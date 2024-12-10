import React from 'react'
import { useState,useEffect } from 'react'

const Admin = () => {
    const [user_data,update_user_data]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/data")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            update_user_data(data);
        })
        .catch((err)=>{
            alert("data not found")
        })
    },[])
  return (
    <>
    {
        user_data.map((item)=>(
            <>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
            <h2>{item.password}</h2><hr></hr>
            
            </>
        ))
    }
    
      
    </>
  )
}

export default Admin
