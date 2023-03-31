import React, { useState } from "react"

const login_status = React.createContext({
    isLoggedIn: false,
    user: 'Student',
    updateLoginStatus: () => {},
    verifyLoginStatus: () => {}
})

export const LoginStore = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('Student') // Student | Faculty

    const updateLoginStatus = (status, user) => {
        setIsLoggedIn(status)
        setUser(user)
    }

    const verifyLoginStatus = () => {
        // get id from local storage

        // veify id from database
    }

    return (
        <login_status.Provider value={{
            isLoggedIn: isLoggedIn,
            user: user,
            updateLoginStatus: updateLoginStatus,
            verifyLoginStatus: verifyLoginStatus
        }}>
            {props.children}
        </login_status.Provider>
    )
}

export default login_status