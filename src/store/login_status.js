import React, { useState } from "react"

const login_status = React.createContext({
    isLoggedIn: false,
    user: 'Student',
    userData: {},
    updateLoginStatus: () => {},
    verifyLoginStatus: () => {}
})

export const LoginStore = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('Student') // Student | Faculty
    const [userData, setUserData] = useState({})

    const updateLoginStatus = (status, user, userData) => {
        setIsLoggedIn(status)
        setUser(user)
        setUserData(userData)
    }

    const verifyLoginStatus = () => {
        // get id from local storage

        // veify id from database
    }

    return (
        <login_status.Provider value={{
            isLoggedIn: isLoggedIn,
            user: user,
            userData: userData,
            updateLoginStatus: updateLoginStatus,
            verifyLoginStatus: verifyLoginStatus
        }}>
            {props.children}
        </login_status.Provider>
    )
}

export default login_status