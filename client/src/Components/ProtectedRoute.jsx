import { Navigate } from "react-router-dom"


const ProtectedRoute = (props) => {
    const token = window.localStorage.getItem('token');
    const { children } = props
    if (token === null) {
        return (
            <Navigate to="/" replace />
        )
    } else {

        return children
    }
}

export default ProtectedRoute