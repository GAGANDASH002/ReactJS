import React from "react";
import UserContext from "./UserContext";

// Whenever a context is created then  a Context Provider must be created as well.

const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null)
    return(
        <UserContext.Provider value = {{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider