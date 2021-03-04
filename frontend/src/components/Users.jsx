import React,{useState,useEffect} from 'react'

const Users = ()=>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("/users/").then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

    return(
        <>
        {users.map(user=>{
           return <li key={user}>{user}</li>
        })}
        </>
    )
}

export default Users;