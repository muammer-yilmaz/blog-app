import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { logout, selectAuth } from "redux/reducers/authReducer";

interface IProps {
    redirect: string,
    children: JSX.Element,
    isAuth: boolean
}

const ProtectedRoute: React.FC<IProps> = ({ redirect, children, isAuth }) => {

    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectAuth)

    const token = localStorage.getItem("token");
    if (token) {
        const decoded: any = jwtDecode(token);
        if (decoded.exp * 1000 + 10000 < Date.now()) {
            console.log('decoded :>> ', decoded);
            try {
                dispatch(logout())
                //localStorage.removeItem("token")
            } catch (error) {
                console.log('error :>> ', error);
            }
            toast.error("Authorization expired. Please login again!")
            setTimeout(() => {
                window.location.reload();
            }, 500)
        }
    }


    if (selector.token === null && !isAuth) {
        console.log('token :>> ', selector.token);
        return <Navigate to={redirect} replace />
    }
    else if (selector.token !== null && isAuth) {
        console.log('isAuth', isAuth)
        return <Navigate to={redirect} replace />
    }

    return children

}

export default ProtectedRoute;
