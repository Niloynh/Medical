import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/Firebase.init';

// configure 
initializeAuthentication()

const useFirebase = () => {
    // state
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    // auth
    const auth = getAuth()
    // authProvider
    const googleProvider = new GoogleAuthProvider()

    // handler
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        
        .catch(error =>{
            setError(error.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const userSignOut = () =>{
        signOut(auth)
        .then(result =>{
            setUser({})
            console.log(user)
        })
    }
    return {
        user,
        error,
        signInUsingGoogle,
        userSignOut
        
    }
}   


export default useFirebase;