import React, { useState } from "react"

const login_status = React.createContext({
    isLoggedIn: false,
    user: 'Student',
    userData: {},
    updateLoginStatus: () => {},
    verifyLoginStatus: () => {},
    logOut: () => {}
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

    const logOut = () => {
        setIsLoggedIn(false)
        setUser("")
        window.history.pushState({}, "", "http://localhost:3000/login")
        window.location.reload()
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
            verifyLoginStatus: verifyLoginStatus,
            logOut: logOut
        }}>
            {props.children}
        </login_status.Provider>
    )
}

export default login_status