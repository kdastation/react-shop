import './alert.css'
import {useEffect} from "react";

const Alert = (props) => {

    const {alertMessage, closeAlert} = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000)

        return () => clearTimeout(timerId)

    },[alertMessage])

    return (
        <div className="alert-message">
            <div>{alertMessage}</div>
        </div>
    )

}

export default Alert