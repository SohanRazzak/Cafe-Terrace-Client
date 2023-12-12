import {PropTypes} from 'prop-types';
import { useContext } from 'react';
import { AllContext } from '../../context/GlobalContex/GlobalContext';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const user = useContext(AllContext)
    const location = useLocation()

    if(user){
        return (
            children
        );
    }
    else{
        <Navigate to='/signin' state={location.pathname}/>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;