import React from 'react'

const User_signup = () => {
    const user_data=JSON.parse(localStorage.getItem("user_data"))
    console.log(user_data)
  return (
    <>
    <h1>this is signup</h1>
    {
    user_data.map((e)=>(
        <>
        {e.name}
        </>
    ))}
          
    </>
  )
}

export default User_signup
