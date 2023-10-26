import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <h1>Loading</h1>;
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;