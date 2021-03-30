import axios from 'axios'
import useSWR from 'swr'
import React, { useState, useEffect } from 'react';

export default function Users() {

    const fetcher = url => axios.get(url).then(res => res.data)

    const GetUsers = () => {
        /*axios.get('http://localhost:5004/users')
        .then((res)=>{
            console.log(res.data)
            return res.data
        })
        .catch((err)=>{console.log(err)})*/
        const { data, error } = useSWR('http://localhost:5004/users', fetcher)
        if (error) return <div>failed to load</div>
        if (!data) return <div>loading...</div>
        console.log(data)
        return (
        <div>
            {data.map((user, index) => {
                <div>
                    <p key={index}>{user.username}</p>
                </div>
            })}
        </div>
        )
    }
    
    //const[users,setUsers]=useState(null);
    
    return (
       <GetUsers/>
    )}