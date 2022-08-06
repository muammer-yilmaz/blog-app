import { Navigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { selectAuth } from "redux/reducers/authReducer";

interface IProps {
    redirect: string,
    children: JSX.Element,
    isAuth?: boolean
}

const ProtectedRoute: React.FC<IProps> = ({ redirect, children, isAuth }) => {
    const selector = useAppSelector(selectAuth)

    if (isAuth && selector.token !== null) {
        return <Navigate to={redirect} replace />
    }

    if (!isAuth && selector.token === null) {
        return <Navigate to={redirect} replace />
    }

    return children


}

export default ProtectedRoute;
