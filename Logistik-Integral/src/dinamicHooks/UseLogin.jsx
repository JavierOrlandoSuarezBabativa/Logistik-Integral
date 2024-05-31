import { useState } from "react"

export default function Uselogin () {


    const [userInfo, setUserInfo] = useState({
                                                name: '',
                                                rol: '',
                                                password: '',
                                            })

    function checkUserInfo (event) {
        const {name, value} = event.target
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: value
        }))
    }


    return {userInfo, checkUserInfo, setUserInfo}
}