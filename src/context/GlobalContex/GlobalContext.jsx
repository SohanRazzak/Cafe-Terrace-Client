import { createContext, useEffect, useState } from "react";
import {PropTypes} from 'prop-types';
import auth from '../../config/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AllContext =createContext()
const GlobalContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState('user');
    const [user, setUser] = useState(null)

    const createUser = (email, password,) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const socialLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsub = () => onAuthStateChanged(auth, (user) => {
            user ? setUser(user) : setUser(null);
            setLoading(false);
            if(user){
            fetch(`http://localhost:5000/user/${user.uid}`)
            .then(res => res.json())
            .then(data => setRole(data.role))
            }
        });
        unsub();
    },[])

    const globalContext = {
        user,
        role,
        setRole,
        createUser,
        login,
        socialLogin,
        logout
    }

    if(loading){
        return null
    }

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