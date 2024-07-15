import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()
    /*const [data,setData] = useState([])
    // We want to call api when this component is loaded in the DOM , hence we use the useEffect() hook
     useEffect(()=>{
        fetch('https://api.github.com/users/GAGANDASH002')
        .then(res = res.json())
        .then(data => {
            console.log(data)
        })
        setData(data)
    },[])*/

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers : {data.followers}
        <img src={data.avatar.url} alt="GitHub profile" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/GAGANDASH002')
    return res.json()
}