import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    let [listOfUser,SetlistOfUser]=useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>(SetlistOfUser(res.data)))
            .catch((err)=>console.log(err))
    },[])
  return (
    <div className='UserList'>
      { listOfUser && listOfUser.map((el)=>(
      <UserCard el={el} />
      ))}
    </div>
  )
}

export default UserList