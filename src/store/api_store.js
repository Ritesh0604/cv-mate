import React from "react";

const api_store = React.createContext({
    addAchievement: () => {},
    getAchievement: () => {}
})

const APIStore = (props) => {
    const addAchievement = (data) => {
        fetch("http://localhost:5000/achievement/add_achievement", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok)
                throw new Error("Error adding achievement data")

            return response.json()
        })
        .then(response => {
            alert("Achievements Added!")
        })
        .catch(err => {
            alert(err)
        })
    }

    const getAchievement = async (data) => {
        const achievementData = await fetch("http://localhost:5000/achievement/get_achievement", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok){
                throw new Error("Error fetching achievements")
            }

            return response.json()
        })
        .then(response => {
            return response
        })
        .catch(err => {
        })

        return achievementData
    }

    

    return (
        <api_store.Provider value={{
            addAchievement: addAchievement,
            getAchievement: getAchievement
        }}>
            {props.children}
        </api_store.Provider>
    )
}

export { APIStore }
export default api_store