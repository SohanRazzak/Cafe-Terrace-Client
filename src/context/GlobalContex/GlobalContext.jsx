import { createContext } from "react";
import {PropTypes} from 'prop-types';

export const AllContext =createContext()
const GlobalContext = ({children}) => {

    const globalContext = {user: true}

    return (
        <AllContext.Provider value={globalContext}>
            {children}
        </AllContext.Provider>
    );
};

GlobalContext.propTypes = {
    children: PropTypes.node
}

export default GlobalContext;