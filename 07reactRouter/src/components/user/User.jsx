// Example of taking dynamic data in React

import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
        <div className="bg-gray-400">User : {userid}</div>
    )
}