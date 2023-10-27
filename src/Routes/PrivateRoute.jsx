import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <h1>Loading</h1>;
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;